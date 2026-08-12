/**
 * Pastel Memory Match Game - Alin's Portfolio Mini Game
 * Interactive 4x3 Card Matching Game with Pastel Theme
 */

(function () {
  const CARD_ITEMS = [
    { id: 'ribbon', icon: '🎀', label: 'Pita Pastel' },
    { id: 'flower', icon: '🌸', label: 'Sakura Pink' },
    { id: 'music', icon: '🎵', label: 'Musik Melodi' },
    { id: 'code', icon: '💻', label: 'Informatika' },
    { id: 'book', icon: '📚', label: 'Bahasa & Sastra' },
    { id: 'palette', icon: '🎨', label: 'Desain Kreatif' }
  ];

  class MemoryGameInstance {
    constructor(containerEl) {
      this.container = containerEl;
      this.cards = [];
      this.flippedCards = [];
      this.matchedPairs = 0;
      this.moves = 0;
      this.timer = 0;
      this.timerInterval = null;
      this.isLockBoard = false;
      this.isGameStarted = false;

      this.initUI();
    }

    initUI() {
      // Build game wrapper inside container
      this.container.innerHTML = `
        <div class="glass-card rounded-[2rem] p-6 sm:p-8 border border-white/60 shadow-glass relative overflow-hidden">
          <!-- Ambient Background Circles -->
          <div class="absolute -right-8 -top-8 w-32 h-32 bg-pastel-pink-100/50 rounded-full blur-xl pointer-events-none"></div>
          <div class="absolute -left-8 -bottom-8 w-32 h-32 bg-pastel-purple-100/50 rounded-full blur-xl pointer-events-none"></div>

          <!-- Header & Stats -->
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 relative z-10">
            <div>
              <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-pastel-pink-100 text-pastel-pink-600 rounded-full text-xs font-bold uppercase tracking-wider mb-1">
                <i data-lucide="gamepad-2" class="w-3.5 h-3.5"></i> Mini Game Pastel
              </div>
              <h3 class="text-xl sm:text-2xl font-extrabold text-gray-800 flex items-center gap-2">
                Ingat & Cocokkan! 🌸
              </h3>
            </div>

            <!-- Stats Bar -->
            <div class="flex items-center gap-3 bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-pastel-pink-100 shadow-sm text-sm">
              <div class="text-center px-2">
                <span class="block text-[10px] uppercase font-semibold text-gray-400">Langkah</span>
                <span class="font-extrabold text-pastel-pink-600 game-moves-count">0</span>
              </div>
              <div class="h-6 w-px bg-pastel-pink-100"></div>
              <div class="text-center px-2">
                <span class="block text-[10px] uppercase font-semibold text-gray-400">Waktu</span>
                <span class="font-extrabold text-gray-700 game-timer-count">0s</span>
              </div>
              <div class="h-6 w-px bg-pastel-pink-100"></div>
              <div class="text-center px-2">
                <span class="block text-[10px] uppercase font-semibold text-gray-400">Terbaik</span>
                <span class="font-extrabold text-purple-600 game-best-count">${this.getBestScoreText()}</span>
              </div>
              <button class="game-reset-btn ml-1 p-2 bg-pastel-pink-50 hover:bg-pastel-pink-500 hover:text-white text-pastel-pink-500 rounded-xl transition-all duration-300 shadow-sm" title="Mulai Ulang">
                <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
              </button>
            </div>
          </div>

          <!-- Card Grid Board (4 columns on sm, 3 on mobile) -->
          <div class="game-cards-grid grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 aspect-[4/3] max-w-lg mx-auto relative z-10 min-h-[260px] sm:min-h-[300px]">
          </div>

          <!-- Victory Modal Overlay (Hidden by default) -->
          <div class="game-win-overlay absolute inset-0 bg-white/95 backdrop-blur-md z-20 flex flex-col items-center justify-center p-6 text-center opacity-0 pointer-events-none transition-all duration-500 rounded-[2rem]">
            <div class="w-16 h-16 bg-pastel-pink-100 rounded-full flex items-center justify-center text-pastel-pink-500 mb-3 animate-bounce shadow-md">
              <i data-lucide="trophy" class="w-8 h-8"></i>
            </div>
            <h4 class="text-2xl font-black text-gray-800 mb-1">Hebat Sekali! 🎉</h4>
            <p class="text-sm text-gray-600 mb-4 game-win-message">Kamu menyelesaikan game dalam 0 langkah!</p>
            <button class="game-play-again-btn px-6 py-3 bg-gradient-to-r from-pastel-pink-500 to-pastel-pink-400 text-white font-bold rounded-2xl shadow-lg shadow-pastel-pink-200 hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <i data-lucide="play" class="w-4 h-4"></i> Main Lagi
            </button>
          </div>
        </div>
      `;

      this.movesEl = this.container.querySelector('.game-moves-count');
      this.timerEl = this.container.querySelector('.game-timer-count');
      this.bestEl = this.container.querySelector('.game-best-count');
      this.gridEl = this.container.querySelector('.game-cards-grid');
      this.winOverlay = this.container.querySelector('.game-win-overlay');
      this.winMessage = this.container.querySelector('.game-win-message');

      // Bind Reset Button
      this.container.querySelector('.game-reset-btn').addEventListener('click', () => this.resetGame());
      this.container.querySelector('.game-play-again-btn').addEventListener('click', () => this.resetGame());

      // Refresh Lucide Icons inside initialized template
      if (window.lucide) {
        window.lucide.createIcons({ props: {}, nameAttr: 'data-lucide' });
      }

      this.resetGame();
    }

    getBestScoreText() {
      const best = localStorage.getItem('pastel_memory_best_score');
      return best ? `${best} m` : '-';
    }

    resetGame() {
      clearInterval(this.timerInterval);
      this.moves = 0;
      this.timer = 0;
      this.matchedPairs = 0;
      this.flippedCards = [];
      this.isLockBoard = false;
      this.isGameStarted = false;

      this.movesEl.textContent = '0';
      this.timerEl.textContent = '0s';
      this.bestEl.textContent = this.getBestScoreText();

      // Hide victory overlay
      this.winOverlay.classList.add('opacity-0', 'pointer-events-none');
      this.winOverlay.classList.remove('opacity-100', 'pointer-events-auto');

      // Generate shuffled 12 cards (6 pairs)
      const deck = [...CARD_ITEMS, ...CARD_ITEMS]
        .sort(() => Math.random() - 0.5)
        .map((item, index) => ({
          uniqueId: index,
          id: item.id,
          icon: item.icon,
          label: item.label
        }));

      this.cards = deck;
      this.renderBoard();
    }

    renderBoard() {
      this.gridEl.innerHTML = '';
      this.cards.forEach((cardData, idx) => {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'game-card-container w-full h-full min-h-[70px] sm:min-h-[85px]';

        cardContainer.innerHTML = `
          <div class="game-card-inner" data-card-id="${cardData.id}" data-index="${idx}">
            <div class="game-card-front shadow-sm">
              <span class="text-xl sm:text-2xl opacity-60">✨</span>
            </div>
            <div class="game-card-back shadow-sm">
              <span class="text-2xl sm:text-3xl select-none" title="${cardData.label}">${cardData.icon}</span>
            </div>
          </div>
        `;

        const innerCard = cardContainer.querySelector('.game-card-inner');
        innerCard.addEventListener('click', () => this.handleCardClick(innerCard));

        this.gridEl.appendChild(cardContainer);
      });
    }

    startTimer() {
      if (this.isGameStarted) return;
      this.isGameStarted = true;
      this.timerInterval = setInterval(() => {
        this.timer++;
        this.timerEl.textContent = `${this.timer}s`;
      }, 1000);
    }

    handleCardClick(cardEl) {
      if (this.isLockBoard) return;
      if (cardEl.classList.contains('flipped') || cardEl.classList.contains('matched')) return;

      this.startTimer();

      cardEl.classList.add('flipped');
      this.flippedCards.push(cardEl);

      if (this.flippedCards.length === 2) {
        this.moves++;
        this.movesEl.textContent = this.moves;
        this.checkMatch();
      }
    }

    checkMatch() {
      const [card1, card2] = this.flippedCards;
      const isMatch = card1.dataset.cardId === card2.dataset.cardId;

      if (isMatch) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        this.flippedCards = [];
        this.matchedPairs++;

        if (this.matchedPairs === CARD_ITEMS.length) {
          this.handleWin();
        }
      } else {
        this.isLockBoard = true;
        setTimeout(() => {
          card1.classList.remove('flipped');
          card2.classList.remove('flipped');
          this.flippedCards = [];
          this.isLockBoard = false;
        }, 800);
      }
    }

    handleWin() {
      clearInterval(this.timerInterval);

      // Save Best Score (minimum moves)
      const currentBest = localStorage.getItem('pastel_memory_best_score');
      if (!currentBest || this.moves < parseInt(currentBest, 10)) {
        localStorage.setItem('pastel_memory_best_score', this.moves);
        this.bestEl.textContent = `${this.moves} m`;
      }

      this.winMessage.textContent = `Kamu menyelesaikan game dalam ${this.moves} langkah (${this.timer} detik)! ✨`;
      
      setTimeout(() => {
        this.winOverlay.classList.remove('opacity-0', 'pointer-events-none');
        this.winOverlay.classList.add('opacity-100', 'pointer-events-auto');
        if (window.lucide) {
          window.lucide.createIcons({ props: {}, nameAttr: 'data-lucide' });
        }
      }, 400);
    }
  }

  // Auto initialize all elements with class 'pastel-game-container' or id 'pastel-game-widget'
  function initAllPastelGames() {
    const targets = document.querySelectorAll('.pastel-game-container, #pastel-game-widget');
    targets.forEach(container => {
      new MemoryGameInstance(container);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllPastelGames);
  } else {
    initAllPastelGames();
  }
})();
