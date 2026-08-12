/**
 * ======================================================
 * PLAYER.JS - Logika Utama Pengendali Music Player (ES6+)
 * ======================================================
 * Mengatur antarmuka pengguna (UI), elemen audio HTML5,
 * floating mini-player widget, persistent state via sessionStorage,
 * serta pemutaran lagu Beauty And A Beat & daftar playlist pastel.
 */

const MusicPlayer = (() => {
  // State player internal
  let currentTrackIndex = 0;
  let isPlaying = false;
  let isShuffle = false;
  let isRepeat = false;
  let tracks = [];
  let isSpotifyMode = false;
  let updateInterval = null;
  let isEmbedVisible = false;

  // Elemen audio HTML5 untuk pemutaran musik utama
  const audioElement = new Audio();

  // Reference elemen DOM (Player Utama + Floating Player)
  let dom = {};

  /**
   * Menyuntikkan Floating Mini-Player Widget ke dalam DOM jika belum ada.
   */
  const ensureFloatingWidget = () => {
    if (document.getElementById('floating-music-player')) return;

    const widget = document.createElement('div');
    widget.id = 'floating-music-player';
    widget.className = 'floating-player-widget';
    widget.innerHTML = `
      <div id="float-cover-wrapper" class="floating-disc-wrapper cursor-pointer" onclick="MusicPlayer.togglePlayPause()">
        <img id="float-cover-img" src="assets/images/justin.jpg" alt="Now Playing Cover" class="floating-disc-img">
      </div>
      <div class="flex flex-col min-w-0 pr-1 cursor-pointer" onclick="MusicPlayer.togglePlayPause()">
        <div class="flex items-center gap-1.5">
          <span id="float-track-title" class="text-xs font-bold text-gray-800 truncate max-w-[120px] sm:max-w-[160px]">Beauty And A Beat</span>
          <div class="visualizer-container scale-75 origin-left">
            <div class="visualizer-bar"></div>
            <div class="visualizer-bar"></div>
            <div class="visualizer-bar"></div>
          </div>
        </div>
        <span id="float-track-artist" class="text-[10px] text-gray-500 truncate max-w-[120px] sm:max-w-[160px]">Justin Bieber ft. Nicki Minaj</span>
        <div class="w-full bg-pastel-pink-100 rounded-full h-1 mt-1 overflow-hidden">
          <div id="float-progress-fill" class="bg-pastel-pink-500 h-full w-0 transition-all duration-300"></div>
        </div>
      </div>
      <div class="flex items-center gap-1">
        <button id="float-prev-btn" title="Lagu Sebelumnya" class="w-7 h-7 rounded-full bg-pastel-pink-50 hover:bg-pastel-pink-100 text-gray-600 hover:text-pastel-pink-600 flex items-center justify-center transition-all">
          <i data-lucide="skip-back" class="w-3.5 h-3.5"></i>
        </button>
        <button id="float-play-btn" title="Play / Pause" class="w-8 h-8 rounded-full bg-gradient-to-tr from-pastel-pink-500 to-pastel-pink-400 text-white flex items-center justify-center shadow-sm hover:scale-105 transition-all">
          <i id="float-play-icon" data-lucide="play" class="w-4 h-4 fill-current"></i>
        </button>
        <button id="float-next-btn" title="Lagu Berikutnya" class="w-7 h-7 rounded-full bg-pastel-pink-50 hover:bg-pastel-pink-100 text-gray-600 hover:text-pastel-pink-600 flex items-center justify-center transition-all">
          <i data-lucide="skip-forward" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    `;
    document.body.appendChild(widget);
  };

  /**
   * Menemukan dan menginisialisasi rujukan elemen DOM yang digunakan oleh player.
   */
  const cacheDom = () => {
    ensureFloatingWidget();

    dom = {
      // Main Player Section DOM
      coverWrapper: document.getElementById('player-cover-wrapper'),
      coverImg: document.getElementById('player-cover-img'),
      title: document.getElementById('player-track-title'),
      artist: document.getElementById('player-track-artist'),
      album: document.getElementById('player-track-album'),
      currentTime: document.getElementById('player-current-time'),
      durationTime: document.getElementById('player-duration-time'),
      progressBar: document.getElementById('player-progress-bar'),
      volumeSlider: document.getElementById('player-volume-slider'),
      playBtn: document.getElementById('player-play-btn'),
      playIcon: document.getElementById('player-play-icon'),
      prevBtn: document.getElementById('player-prev-btn'),
      nextBtn: document.getElementById('player-next-btn'),
      shuffleBtn: document.getElementById('player-shuffle-btn'),
      repeatBtn: document.getElementById('player-repeat-btn'),
      loginBtn: document.getElementById('spotify-login-btn'),
      userStatusBadge: document.getElementById('spotify-user-status'),
      playlistContainer: document.getElementById('player-playlist-container'),
      embedContainer: document.getElementById('spotify-embed-container'),
      embedIframe: document.getElementById('spotify-embed-iframe'),
      embedToggleBtn: document.getElementById('spotify-embed-toggle-btn'),

      // Floating Widget DOM
      floatCoverWrapper: document.getElementById('float-cover-wrapper'),
      floatCoverImg: document.getElementById('float-cover-img'),
      floatTitle: document.getElementById('float-track-title'),
      floatArtist: document.getElementById('float-track-artist'),
      floatPlayBtn: document.getElementById('float-play-btn'),
      floatPlayIcon: document.getElementById('float-play-icon'),
      floatPrevBtn: document.getElementById('float-prev-btn'),
      floatNextBtn: document.getElementById('float-next-btn'),
      floatProgressFill: document.getElementById('float-progress-fill')
    };
  };

  /**
   * Mengonversi waktu detik menjadi format mm:ss.
   */
  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds <= 0) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  /**
   * Menyimpan status pemutaran musik saat ini ke sessionStorage.
   */
  const saveState = () => {
    try {
      sessionStorage.setItem('portfolio_player_index', currentTrackIndex);
      sessionStorage.setItem('portfolio_player_time', audioElement.currentTime || 0);
      sessionStorage.setItem('portfolio_player_playing', isPlaying ? 'true' : 'false');
      sessionStorage.setItem('portfolio_player_volume', dom.volumeSlider ? dom.volumeSlider.value : 80);
      sessionStorage.setItem('portfolio_player_repeat', isRepeat ? 'true' : 'false');
      sessionStorage.setItem('portfolio_player_shuffle', isShuffle ? 'true' : 'false');
    } catch (e) {
      console.warn('[MusicPlayer] Gagal menyimpan state ke sessionStorage:', e);
    }
  };

  /**
   * Memulihkan status pemutaran musik dari sessionStorage.
   */
  const restoreState = () => {
    try {
      const savedIndex = sessionStorage.getItem('portfolio_player_index');
      const savedTime = sessionStorage.getItem('portfolio_player_time');
      const savedPlaying = sessionStorage.getItem('portfolio_player_playing');
      const savedVol = sessionStorage.getItem('portfolio_player_volume');
      const savedRepeat = sessionStorage.getItem('portfolio_player_repeat');
      const savedShuffle = sessionStorage.getItem('portfolio_player_shuffle');

      if (savedIndex !== null) {
        currentTrackIndex = parseInt(savedIndex, 10) || 0;
      }
      if (savedVol !== null) {
        if (dom.volumeSlider) dom.volumeSlider.value = savedVol;
        audioElement.volume = parseFloat(savedVol) / 100;
      }
      if (savedRepeat === 'true') {
        isRepeat = true;
        audioElement.loop = true;
        if (dom.repeatBtn) dom.repeatBtn.classList.add('active-mode');
      }
      if (savedShuffle === 'true') {
        isShuffle = true;
        if (dom.shuffleBtn) dom.shuffleBtn.classList.add('active-mode');
      }

      loadLocalTrack(currentTrackIndex);

      if (savedTime !== null && parseFloat(savedTime) > 0) {
        audioElement.currentTime = parseFloat(savedTime);
      }

      if (savedPlaying === 'true') {
        playLocalAudio();
      }
    } catch (e) {
      console.warn('[MusicPlayer] Gagal memulihkan state dari sessionStorage:', e);
      loadLocalTrack(0);
    }
  };

  /**
   * Inisialisasi awal seluruh sistem Music Player.
   */
  const init = async () => {
    cacheDom();

    // Setel playlist default dari file config
    if (window.SPOTIFY_CONFIG && window.SPOTIFY_CONFIG.defaultTracks) {
      tracks = [...window.SPOTIFY_CONFIG.defaultTracks];
    }

    // Event listener durasi audio
    audioElement.addEventListener('loadedmetadata', () => {
      if (!isSpotifyMode && audioElement.duration) {
        if (dom.durationTime) dom.durationTime.textContent = formatTime(audioElement.duration);
        if (dom.progressBar) {
          dom.progressBar.max = Math.floor(audioElement.duration);
        }
      }
    });

    // Cek auth Spotify
    if (window.SpotifyAPI) {
      const authSuccess = await window.SpotifyAPI.handleAuthCallback();
      if (authSuccess) {
        console.log('[MusicPlayer] Berhasil otentikasi dengan Spotify!');
      }

      if (window.SpotifyAPI.isLoggedIn()) {
        isSpotifyMode = true;
        updateAuthUI(true);
        await loadSpotifyCurrentlyPlaying();
      } else {
        isSpotifyMode = false;
        updateAuthUI(false);
        restoreState();
      }
    } else {
      isSpotifyMode = false;
      restoreState();
    }

    bindEvents();
    renderPlaylist();
    startProgressLoop();
    enableAutoplayFallback();

    // Simpan state sebelum halaman ditutup/ditinggalkan
    window.addEventListener('beforeunload', saveState);
    window.addEventListener('pagehide', saveState);
  };

  /**
   * Menangani autoplay browser restriction jika diblokir saat pertama kali dimuat.
   */
  const enableAutoplayFallback = () => {
    const resumeOnInteraction = () => {
      const savedPlaying = sessionStorage.getItem('portfolio_player_playing');
      if (savedPlaying === 'true' && audioElement.paused) {
        playLocalAudio();
      }
      document.removeEventListener('click', resumeOnInteraction);
      document.removeEventListener('pointerdown', resumeOnInteraction);
      document.removeEventListener('keydown', resumeOnInteraction);
    };

    document.addEventListener('click', resumeOnInteraction, { once: true });
    document.addEventListener('pointerdown', resumeOnInteraction, { once: true });
    document.addEventListener('keydown', resumeOnInteraction, { once: true });
  };

  /**
   * Mengatur tampilan UI tombol Login / Logout Spotify.
   */
  const updateAuthUI = (loggedIn) => {
    if (!dom.loginBtn) return;

    if (loggedIn) {
      dom.loginBtn.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4 text-green-400"></i> Spotify Connected`;
      dom.loginBtn.classList.remove('bg-green-500', 'hover:bg-green-600');
      dom.loginBtn.classList.add('bg-green-600/20', 'text-green-600', 'border', 'border-green-300');
      if (dom.userStatusBadge) {
        dom.userStatusBadge.textContent = 'Terhubung ke Spotify';
        dom.userStatusBadge.className = 'px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold';
      }
    } else {
      dom.loginBtn.innerHTML = `<i data-lucide="log-in" class="w-4 h-4"></i> Login with Spotify`;
      dom.loginBtn.classList.remove('bg-green-600/20', 'text-green-600', 'border');
      dom.loginBtn.classList.add('bg-green-500', 'hover:bg-green-600', 'text-white');
      if (dom.userStatusBadge) {
        dom.userStatusBadge.textContent = 'Mode Local Player (Full Music)';
        dom.userStatusBadge.className = 'px-3 py-1 bg-pastel-pink-100 text-pastel-pink-600 rounded-full text-xs font-bold';
      }
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }
  };

  /**
   * Memuat lagu lokal dari daftar tracks.
   */
  const loadLocalTrack = (index) => {
    if (!tracks || tracks.length === 0) return;

    currentTrackIndex = (index + tracks.length) % tracks.length;
    const track = tracks[currentTrackIndex];

    const audioSrc = encodeURI(track.audioUrl);
    if (audioElement.src !== window.location.origin + '/' + audioSrc && audioElement.src !== audioSrc) {
      audioElement.src = audioSrc;
    }
    audioElement.volume = (dom.volumeSlider ? dom.volumeSlider.value : 80) / 100;

    // Update Main Player UI
    if (dom.title) dom.title.textContent = track.title;
    if (dom.artist) dom.artist.textContent = track.artist;
    if (dom.album) dom.album.textContent = track.album;
    if (dom.coverImg) dom.coverImg.src = track.cover;

    // Update Floating Player UI
    if (dom.floatTitle) dom.floatTitle.textContent = track.title;
    if (dom.floatArtist) dom.floatArtist.textContent = track.artist;
    if (dom.floatCoverImg) dom.floatCoverImg.src = track.cover;

    if (track.durationMs > 0) {
      if (dom.durationTime) dom.durationTime.textContent = formatTime(track.durationMs / 1000);
      if (dom.progressBar) dom.progressBar.max = Math.floor(track.durationMs / 1000);
    } else {
      if (dom.durationTime) dom.durationTime.textContent = '...';
    }

    highlightActivePlaylistItem();
    saveState();
  };

  /**
   * Load status Spotify Currently Playing.
   */
  const loadSpotifyCurrentlyPlaying = async () => {
    try {
      if (!window.SpotifyAPI) return;
      const data = await window.SpotifyAPI.getCurrentlyPlaying();
      if (data && data.item) {
        const item = data.item;
        if (dom.title) dom.title.textContent = item.name;
        if (dom.artist) dom.artist.textContent = item.artists.map(a => a.name).join(', ');
        if (dom.album) dom.album.textContent = item.album.name;
        if (dom.coverImg && item.album.images.length > 0) {
          dom.coverImg.src = item.album.images[0].url;
        }

        if (dom.floatTitle) dom.floatTitle.textContent = item.name;
        if (dom.floatArtist) dom.floatArtist.textContent = item.artists.map(a => a.name).join(', ');
        if (dom.floatCoverImg && item.album.images.length > 0) {
          dom.floatCoverImg.src = item.album.images[0].url;
        }

        const durationSec = item.duration_ms / 1000;
        const progressSec = data.progress_ms / 1000;

        if (dom.durationTime) dom.durationTime.textContent = formatTime(durationSec);
        if (dom.currentTime) dom.currentTime.textContent = formatTime(progressSec);
        if (dom.progressBar) {
          dom.progressBar.max = Math.floor(durationSec);
          dom.progressBar.value = Math.floor(progressSec);
        }

        setPlayingState(data.is_playing);
      } else {
        loadLocalTrack(0);
      }
    } catch (err) {
      console.warn('[SpotifyAPI] Gagal memuat status Spotify, menggunakan mode lokal:', err);
      isSpotifyMode = false;
      loadLocalTrack(0);
    }
  };

  /**
   * Update visual indikator Play/Pause.
   */
  const setPlayingState = (playing) => {
    isPlaying = playing;

    // Main Player Vinyl
    if (dom.coverWrapper) {
      dom.coverWrapper.classList.toggle('is-playing', playing);
    }
    // Floating Player Vinyl
    if (dom.floatCoverWrapper) {
      dom.floatCoverWrapper.classList.toggle('is-playing', playing);
    }

    // Main Play Icon
    if (dom.playIcon) {
      dom.playIcon.setAttribute('data-lucide', playing ? 'pause' : 'play');
    }
    // Floating Play Icon
    if (dom.floatPlayIcon) {
      dom.floatPlayIcon.setAttribute('data-lucide', playing ? 'pause' : 'play');
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }

    saveState();
  };

  /**
   * Toggle Play / Pause.
   */
  const togglePlayPause = async () => {
    if (isSpotifyMode && window.SpotifyAPI) {
      if (isPlaying) {
        const ok = await window.SpotifyAPI.pause();
        if (ok) setPlayingState(false);
      } else {
        const ok = await window.SpotifyAPI.play();
        if (ok) setPlayingState(true);
        else playLocalAudio();
      }
    } else {
      if (isPlaying) {
        audioElement.pause();
        setPlayingState(false);
      } else {
        playLocalAudio();
      }
    }
  };

  /**
   * Memutar audio lokal HTML5.
   */
  const playLocalAudio = () => {
    audioElement.play().then(() => {
      setPlayingState(true);
    }).catch(err => {
      console.warn('[MusicPlayer] Autoplay paused oleh browser:', err);
      setPlayingState(false);
    });
  };

  /**
   * Berpindah ke lagu berikutnya.
   */
  const nextTrack = async () => {
    if (isSpotifyMode && window.SpotifyAPI) {
      const ok = await window.SpotifyAPI.next();
      if (ok) setTimeout(loadSpotifyCurrentlyPlaying, 500);
      else nextLocalTrack();
    } else {
      nextLocalTrack();
    }
  };

  const nextLocalTrack = () => {
    if (isShuffle) {
      currentTrackIndex = Math.floor(Math.random() * tracks.length);
    } else {
      currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    }
    loadLocalTrack(currentTrackIndex);
    if (isPlaying) playLocalAudio();
  };

  /**
   * Berpindah ke lagu sebelumnya.
   */
  const prevTrack = async () => {
    if (isSpotifyMode && window.SpotifyAPI) {
      const ok = await window.SpotifyAPI.previous();
      if (ok) setTimeout(loadSpotifyCurrentlyPlaying, 500);
      else prevLocalTrack();
    } else {
      prevLocalTrack();
    }
  };

  const prevLocalTrack = () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadLocalTrack(currentTrackIndex);
    if (isPlaying) playLocalAudio();
  };

  const toggleShuffle = async () => {
    isShuffle = !isShuffle;
    if (dom.shuffleBtn) dom.shuffleBtn.classList.toggle('active-mode', isShuffle);
    if (isSpotifyMode && window.SpotifyAPI) {
      await window.SpotifyAPI.setShuffle(isShuffle);
    }
    saveState();
  };

  const toggleRepeat = async () => {
    isRepeat = !isRepeat;
    if (dom.repeatBtn) dom.repeatBtn.classList.toggle('active-mode', isRepeat);
    audioElement.loop = isRepeat;
    if (isSpotifyMode && window.SpotifyAPI) {
      await window.SpotifyAPI.setRepeat(isRepeat ? 'track' : 'off');
    }
    saveState();
  };

  const changeVolume = async (value) => {
    const vol = parseFloat(value) / 100;
    audioElement.volume = vol;
    if (isSpotifyMode && window.SpotifyAPI) {
      await window.SpotifyAPI.setVolume(value);
    }
    saveState();
  };

  const seekTrack = (value) => {
    if (!isSpotifyMode) {
      audioElement.currentTime = parseFloat(value);
      if (dom.currentTime) dom.currentTime.textContent = formatTime(audioElement.currentTime);
      saveState();
    }
  };

  const toggleSpotifyEmbed = () => {
    if (!dom.embedContainer) return;
    isEmbedVisible = !isEmbedVisible;
    if (isEmbedVisible) {
      if (dom.embedIframe && !dom.embedIframe.src && window.SPOTIFY_CONFIG) {
        dom.embedIframe.src = window.SPOTIFY_CONFIG.fallbackEmbedUrl;
      }
      dom.embedContainer.classList.remove('hidden');
      if (dom.embedToggleBtn) dom.embedToggleBtn.textContent = 'Sembunyikan Spotify Embed';
    } else {
      dom.embedContainer.classList.add('hidden');
      if (dom.embedToggleBtn) dom.embedToggleBtn.textContent = 'Buka Spotify Embed Player';
    }
  };

  /**
   * Interval pembaruan progress bar & time.
   */
  const startProgressLoop = () => {
    if (updateInterval) clearInterval(updateInterval);

    updateInterval = setInterval(() => {
      if (!isSpotifyMode && isPlaying && audioElement.duration) {
        const current = audioElement.currentTime;
        const total = audioElement.duration;

        if (dom.currentTime) dom.currentTime.textContent = formatTime(current);
        if (dom.durationTime) dom.durationTime.textContent = formatTime(total);

        if (dom.progressBar) {
          dom.progressBar.max = Math.floor(total);
          dom.progressBar.value = Math.floor(current);
        }

        if (dom.floatProgressFill) {
          const pct = (current / total) * 100;
          dom.floatProgressFill.style.width = `${pct}%`;
        }

        // Save progress state
        saveState();

        if (audioElement.ended) {
          if (isRepeat) {
            audioElement.currentTime = 0;
            playLocalAudio();
          } else {
            nextTrack();
          }
        }
      } else if (isSpotifyMode && isPlaying) {
        loadSpotifyCurrentlyPlaying();
      }
    }, 1000);
  };

  /**
   * Render item playlist favorit pada main player section.
   */
  const renderPlaylist = () => {
    if (!dom.playlistContainer) return;

    dom.playlistContainer.innerHTML = tracks.map((track, idx) => `
      <div onclick="MusicPlayer.playPlaylistItem(${idx})" 
           class="playlist-item flex items-center justify-between p-3 rounded-2xl cursor-pointer hover:bg-pastel-pink-100/60 transition-all border border-transparent hover:border-pastel-pink-200/60 ${idx === currentTrackIndex ? 'bg-pastel-pink-100/80 border-pastel-pink-200 shadow-xs' : ''}">
        <div class="flex items-center gap-3">
          <img src="${track.cover}" alt="${track.title}" class="w-10 h-10 rounded-xl object-cover shadow-xs flex-shrink-0">
          <div class="overflow-hidden">
            <h5 class="text-xs font-bold text-gray-800 truncate">${track.title}</h5>
            <p class="text-[11px] text-gray-500 truncate">${track.artist}</p>
          </div>
        </div>
        <span class="text-xs font-semibold text-pastel-pink-500">${track.durationMs > 0 ? formatTime(track.durationMs / 1000) : 'Full Track'}</span>
      </div>
    `).join('');
  };

  const highlightActivePlaylistItem = () => {
    renderPlaylist();
  };

  const playPlaylistItem = (index) => {
    loadLocalTrack(index);
    playLocalAudio();
  };

  /**
   * Bind event listener UI.
   */
  const bindEvents = () => {
    // Main Player Controls
    if (dom.playBtn) dom.playBtn.addEventListener('click', togglePlayPause);
    if (dom.prevBtn) dom.prevBtn.addEventListener('click', prevTrack);
    if (dom.nextBtn) dom.nextBtn.addEventListener('click', nextTrack);
    if (dom.shuffleBtn) dom.shuffleBtn.addEventListener('click', toggleShuffle);
    if (dom.repeatBtn) dom.repeatBtn.addEventListener('click', toggleRepeat);

    if (dom.volumeSlider) {
      dom.volumeSlider.addEventListener('input', (e) => changeVolume(e.target.value));
    }
    if (dom.progressBar) {
      dom.progressBar.addEventListener('input', (e) => seekTrack(e.target.value));
    }

    // Floating Player Controls
    if (dom.floatPlayBtn) dom.floatPlayBtn.addEventListener('click', togglePlayPause);
    if (dom.floatPrevBtn) dom.floatPrevBtn.addEventListener('click', prevTrack);
    if (dom.floatNextBtn) dom.floatNextBtn.addEventListener('click', nextTrack);

    if (dom.loginBtn) {
      dom.loginBtn.addEventListener('click', () => {
        if (window.SpotifyAPI && window.SpotifyAPI.isLoggedIn()) {
          window.SpotifyAPI.logout();
          isSpotifyMode = false;
          updateAuthUI(false);
          loadLocalTrack(0);
        } else if (window.SpotifyAPI) {
          window.SpotifyAPI.login();
        }
      });
    }

    if (dom.embedToggleBtn) {
      dom.embedToggleBtn.addEventListener('click', toggleSpotifyEmbed);
    }
  };

  return {
    init,
    togglePlayPause,
    nextTrack,
    prevTrack,
    playPlaylistItem
  };
})();

// Inisialisasi otomatis setelah DOM dimuat
document.addEventListener('DOMContentLoaded', () => {
  MusicPlayer.init();
});

if (typeof window !== 'undefined') {
  window.MusicPlayer = MusicPlayer;
}
