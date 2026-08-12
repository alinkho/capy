/**
 * ======================================================
 * CONFIG.JS - Konfigurasi Spotify API & Music Player
 * ======================================================
 * File ini menyimpan konfigurasi Spotify Client ID, Redirect URI,
 * Scopes Spotify API, serta playlist & track demo fallback.
 */

const SPOTIFY_CONFIG = {
  // Client ID Spotify Developer Dashboard
  // Silakan ganti '1068d35a68d14a5aac72f675c9c13f5e' dengan Client ID milik Anda dari https://developer.spotify.com/dashboard
  clientId: '1068d35a68d14a5aac72f675c9c13f5e',

  // Redirect URI yang didaftarkan pada Spotify Developer Dashboard
  redirectUri: window.location.origin + window.location.pathname,

  // Scopes izin akses yang diperlukan dari akun Spotify
  scopes: [
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'streaming',
    'playlist-read-private',
    'playlist-read-collaborative',
    'user-library-read'
  ],

  // Spotify Playlist ID Default (Lofi Girl / Pastel Chill Beats)
  defaultPlaylistId: '37i9dQZF1DXcBWIGoYBM5M',

  // URL iFrame Embed Spotify sebagai Fallback aman saat API tidak tersedia / token habis
  fallbackEmbedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0',

  // Playlist Utama & Demo (Memuat lagu lokal Justin Bieber, CORTIS, Taylor Swift, & Lana.mp3 sebagai full music)
  defaultTracks: [
    {
      id: 'jb-beauty-beat',
      title: 'Beauty And A Beat',
      artist: 'Justin Bieber ft. Nicki Minaj',
      album: 'Believe (Pastel Edition)',
      cover: 'assets/images/justin.jpg',
      audioUrl: 'Justin Bieber, Nicki Minaj – Beauty And A Beat.mp3',
      durationMs: 0 // Durasi dihitung dinamis dari file audio asli (Full Track)
    },
    {
      id: 'cortis-motion',
      title: "MOTION (feat. Juicy J)",
      artist: 'CORTIS',
      album: 'MOTION Single (Pastel Selection)',
      cover: 'assets/images/cortis.jpg',
      audioUrl: "CORTIS 'MOTION (feat. Juicy J)'.mp3",
      durationMs: 0 // Durasi dihitung dinamis dari file audio asli (Full Track)
    },
    {
      id: 'ts-blank-space',
      title: 'Blank Space',
      artist: 'Taylor Swift',
      album: '1989 (Pastel Edition)',
      cover: 'assets/images/taylor.jpg',
      audioUrl: 'Taylor Swift – Blank Space.mp3',
      durationMs: 0 // Durasi dihitung dinamis dari file audio asli (Full Track)
    },
    {
      id: 'lana-1',
      title: 'Lana',
      artist: 'Lana Del Rey',
      album: 'Pastel Special Collection',
      cover: 'assets/images/lana.jpg',
      audioUrl: 'Lana.mp3',
      durationMs: 0 // Durasi dihitung dinamis dari file audio asli (Full Track)
    }
  ]
};

// Export ke window agar dapat diakses oleh script lainnya
if (typeof window !== 'undefined') {
  window.SPOTIFY_CONFIG = SPOTIFY_CONFIG;
}
