/**
 * ======================================================
 * SPOTIFY.JS - Modul Logika Spotify API (ES6+)
 * ======================================================
 * Mengelola otentikasi Spotify PKCE (Proof Key for Code Exchange),
 * manajemen token access/refresh, serta pemanggilan REST API Spotify
 * untuk mengontrol playback (Play, Pause, Next, Prev, Volume, Shuffle, Repeat).
 */

const SpotifyAPI = (() => {
  // Key penyimpanan di localStorage
  const TOKEN_KEY = 'spotify_access_token';
  const REFRESH_TOKEN_KEY = 'spotify_refresh_token';
  const EXPIRES_AT_KEY = 'spotify_token_expires_at';
  const VERIFIER_KEY = 'spotify_code_verifier';

  /**
   * Membuat string acak untuk PKCE Code Verifier.
   * @param {number} length - Panjang string (default 64)
   * @returns {string} String acak
   */
  const generateRandomString = (length = 64) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], '');
  };

  /**
   * Mengubah buffer array menjadi string Base64URL safe.
   * @param {ArrayBuffer} buffer - Buffer data SHA-256
   * @returns {string} String terenkripsi Base64URL
   */
  const base64urlencode = (buffer) => {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  };

  /**
   * Meng-hash text plain menggunakan algoritma SHA-256 (Web Crypto API).
   * @param {string} plain - String verifier
   * @returns {Promise<ArrayBuffer>} Promise berisi ArrayBuffer hash
   */
  const sha256 = async (plain) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return await window.crypto.subtle.digest('SHA-256', data);
  };

  /**
   * Menghasilkan Code Challenge dari Code Verifier untuk PKCE flow.
   * @param {string} v - Code verifier
   * @returns {Promise<string>} Code challenge
   */
  const generateCodeChallengeFromVerifier = async (v) => {
    const hashed = await sha256(v);
    return base64urlencode(hashed);
  };

  /**
   * Memulai alur otentikasi Spotify PKCE Authorization Code Flow.
   * Mengarahkan pengguna ke halaman login Spotify resmi.
   */
  const login = async () => {
    try {
      const verifier = generateRandomString(64);
      const challenge = await generateCodeChallengeFromVerifier(verifier);

      localStorage.setItem(VERIFIER_KEY, verifier);

      const params = new URLSearchParams({
        client_id: window.SPOTIFY_CONFIG.clientId,
        response_type: 'code',
        redirect_uri: window.SPOTIFY_CONFIG.redirectUri,
        scope: window.SPOTIFY_CONFIG.scopes.join(' '),
        code_challenge_method: 'S256',
        code_challenge: challenge
      });

      window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
    } catch (err) {
      console.error('[SpotifyAPI] Gagal melakukan inisiasi login:', err);
    }
  };

  /**
   * Memproses callback dari Spotify setelah otentikasi berhasil.
   * Mengambil query param `code` dan menukarnya dengan token akses.
   * @returns {Promise<boolean>} True jika otentikasi berhasil
   */
  const handleAuthCallback = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (!code) return false;

    const verifier = localStorage.getItem(VERIFIER_KEY);
    if (!verifier) {
      console.warn('[SpotifyAPI] Code verifier tidak ditemukan di localStorage.');
      return false;
    }

    try {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          client_id: window.SPOTIFY_CONFIG.clientId,
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: window.SPOTIFY_CONFIG.redirectUri,
          code_verifier: verifier
        })
      });

      if (!response.ok) {
        throw new Error(`Token exchange failed: ${response.statusText}`);
      }

      const data = await response.json();
      saveTokens(data);

      // Bersihkan URL dari query parameters tanpa me-refresh halaman
      const cleanUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, cleanUrl);

      return true;
    } catch (err) {
      console.error('[SpotifyAPI] Error saat memproses auth callback:', err);
      return false;
    }
  };

  /**
   * Menyimpan token akses, token refresh, dan waktu kadaluarsa ke localStorage.
   * @param {Object} data - Objek response token dari Spotify
   */
  const saveTokens = (data) => {
    if (data.access_token) {
      localStorage.setItem(TOKEN_KEY, data.access_token);
    }
    if (data.refresh_token) {
      localStorage.setItem(REFRESH_TOKEN_KEY, data.refresh_token);
    }
    if (data.expires_in) {
      const expiresAt = Date.now() + data.expires_in * 1000;
      localStorage.setItem(EXPIRES_AT_KEY, expiresAt.toString());
    }
  };

  /**
   * Memperbarui token akses yang kadaluarsa menggunakan refresh token.
   * @returns {Promise<string|null>} Token akses baru atau null jika gagal
   */
  const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
    if (!refreshToken) return null;

    try {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          client_id: window.SPOTIFY_CONFIG.clientId,
          grant_type: 'refresh_token',
          refresh_token: refreshToken
        })
      });

      if (!response.ok) {
        logout();
        return null;
      }

      const data = await response.json();
      saveTokens(data);
      return data.access_token;
    } catch (err) {
      console.error('[SpotifyAPI] Error saat meremajakan token:', err);
      logout();
      return null;
    }
  };

  /**
   * Mengambil Token Akses yang masih berlaku.
   * Mengotomatisasi refresh token bila sudah mendekati masa kedaluwarsa.
   * @returns {Promise<string|null>} Access token aktif
   */
  const getAccessToken = async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    const expiresAt = localStorage.getItem(EXPIRES_AT_KEY);

    if (!token || !expiresAt) return null;

    // Refresh token jika sisa waktu kurang dari 60 detik
    if (Date.now() > parseInt(expiresAt, 10) - 60000) {
      return await refreshAccessToken();
    }

    return token;
  };

  /**
   * Menghapus sesi otentikasi Spotify pengguna.
   */
  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(EXPIRES_AT_KEY);
    localStorage.removeItem(VERIFIER_KEY);
  };

  /**
   * Memeriksa apakah pengguna sedang dalam status terotentikasi.
   * @returns {boolean} True jika terautentikasi
   */
  const isLoggedIn = () => {
    const token = localStorage.getItem(TOKEN_KEY);
    const expiresAt = localStorage.getItem(EXPIRES_AT_KEY);
    return !!(token && expiresAt && Date.now() < parseInt(expiresAt, 10));
  };

  /**
   * Helper internal untuk melakukan request terautentikasi ke Spotify API.
   * @param {string} endpoint - Path endpoint API Spotify
   * @param {Object} options - Options fetch request (method, headers, body)
   * @returns {Promise<any>} Data JSON response dari API
   */
  const apiFetch = async (endpoint, options = {}) => {
    const token = await getAccessToken();
    if (!token) {
      throw new Error('Pengguna belum terautentikasi.');
    }

    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(options.headers || {})
    };

    const res = await fetch(`https://api.spotify.com/v1${endpoint}`, {
      ...options,
      headers
    });

    if (res.status === 204 || res.status === 202) {
      return true;
    }

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.error?.message || `Spotify API Error (${res.status})`);
    }

    return await res.json();
  };

  /**
   * Mengambil informasi musik yang sedang diputar secara langsung oleh pengguna.
   * @returns {Promise<Object|null>} Metadata lagu sedang diputar
   */
  const getCurrentlyPlaying = async () => {
    try {
      const data = await apiFetch('/me/player/currently-playing');
      return data;
    } catch (err) {
      console.warn('[SpotifyAPI] Gagal mengambil lagu saat ini:', err.message);
      return null;
    }
  };

  /**
   * Mengirim perintah Resume / Play ke Spotify API.
   * @param {string} [deviceId] - Device ID opsional
   * @param {string} [contextUri] - URI Playlist/Album opsional
   * @param {number} [offsetPosition] - Posisi urutan lagu
   */
  const play = async (deviceId = null, contextUri = null, offsetPosition = 0) => {
    try {
      const query = deviceId ? `?device_id=${deviceId}` : '';
      const body = {};
      if (contextUri) {
        body.context_uri = contextUri;
        body.offset = { position: offsetPosition };
      }
      await apiFetch(`/me/player/play${query}`, {
        method: 'PUT',
        body: Object.keys(body).length > 0 ? JSON.stringify(body) : undefined
      });
      return true;
    } catch (err) {
      console.warn('[SpotifyAPI] Perintah Play gagal:', err.message);
      return false;
    }
  };

  /**
   * Mengirim perintah Pause ke Spotify API.
   */
  const pause = async () => {
    try {
      await apiFetch('/me/player/pause', { method: 'PUT' });
      return true;
    } catch (err) {
      console.warn('[SpotifyAPI] Perintah Pause gagal:', err.message);
      return false;
    }
  };

  /**
   * Mengirim perintah Next (Lagu Berikutnya) ke Spotify API.
   */
  const next = async () => {
    try {
      await apiFetch('/me/player/next', { method: 'POST' });
      return true;
    } catch (err) {
      console.warn('[SpotifyAPI] Perintah Next gagal:', err.message);
      return false;
    }
  };

  /**
   * Mengirim perintah Previous (Lagu Sebelumnya) ke Spotify API.
   */
  const previous = async () => {
    try {
      await apiFetch('/me/player/previous', { method: 'POST' });
      return true;
    } catch (err) {
      console.warn('[SpotifyAPI] Perintah Previous gagal:', err.message);
      return false;
    }
  };

  /**
   * Mengatur volume pemutaran musik di Spotify.
   * @param {number} volumePercent - Nilai volume (0 - 100)
   */
  const setVolume = async (volumePercent) => {
    try {
      const vol = Math.max(0, Math.min(100, Math.round(volumePercent)));
      await apiFetch(`/me/player/volume?volume_percent=${vol}`, { method: 'PUT' });
      return true;
    } catch (err) {
      console.warn('[SpotifyAPI] Gagal mengatur volume Spotify:', err.message);
      return false;
    }
  };

  /**
   * Mengaktifkan/mematikan mode Shuffle (Acak Lagu).
   * @param {boolean} state - Status shuffle
   */
  const setShuffle = async (state) => {
    try {
      await apiFetch(`/me/player/shuffle?state=${state}`, { method: 'PUT' });
      return true;
    } catch (err) {
      console.warn('[SpotifyAPI] Gagal mengatur mode Shuffle:', err.message);
      return false;
    }
  };

  /**
   * Mengatur mode Repeat (Ulangi Lagu/Playlist).
   * @param {'off'|'context'|'track'} state - Mode repeat
   */
  const setRepeat = async (state) => {
    try {
      await apiFetch(`/me/player/repeat?state=${state}`, { method: 'PUT' });
      return true;
    } catch (err) {
      console.warn('[SpotifyAPI] Gagal mengatur mode Repeat:', err.message);
      return false;
    }
  };

  /**
   * Mengambil daftar lagu dari Spotify Playlist tertentu.
   * @param {string} playlistId - ID Playlist Spotify
   * @returns {Promise<Array>} List lagu dalam playlist
   */
  const getPlaylistTracks = async (playlistId) => {
    try {
      const data = await apiFetch(`/playlists/${playlistId}/tracks?limit=20`);
      return data.items || [];
    } catch (err) {
      console.warn('[SpotifyAPI] Gagal mengambil lagu playlist:', err.message);
      return [];
    }
  };

  return {
    login,
    handleAuthCallback,
    getAccessToken,
    logout,
    isLoggedIn,
    getCurrentlyPlaying,
    play,
    pause,
    next,
    previous,
    setVolume,
    setShuffle,
    setRepeat,
    getPlaylistTracks
  };
})();

// Expose modul ke global scope window
if (typeof window !== 'undefined') {
  window.SpotifyAPI = SpotifyAPI;
}
