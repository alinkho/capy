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

  /**
   * Tic-Tac-Toe Pastel Mini Game Instance
   * Interactive 3x3 XO Game with Bot AI or 2 Player Mode
   */
  class TicTacToeGameInstance {
    constructor(containerEl) {
      this.container = containerEl;
      this.board = Array(9).fill(null);
      this.currentPlayer = 'X';
      this.gameMode = 'bot';
      this.symbols = { X: '🌸', O: '⭐️' };
      this.scores = { X: 0, O: 0, ties: 0 };
      this.isGameActive = true;
      this.winningCombo = null;

      this.initUI();
    }

    initUI() {
      this.container.innerHTML = `
        <div class="glass-card rounded-[2rem] p-6 sm:p-8 border border-white/60 shadow-glass relative overflow-hidden">
          <div class="absolute -right-8 -top-8 w-32 h-32 bg-pastel-purple-100/50 rounded-full blur-xl pointer-events-none"></div>
          <div class="absolute -left-8 -bottom-8 w-32 h-32 bg-pastel-pink-100/50 rounded-full blur-xl pointer-events-none"></div>

          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 relative z-10">
            <div>
              <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-pastel-purple-100 text-pastel-purple-600 rounded-full text-xs font-bold uppercase tracking-wider mb-1">
                <i data-lucide="gamepad-2" class="w-3.5 h-3.5"></i> Mini Game Pastel #2
              </div>
              <h3 class="text-xl sm:text-2xl font-extrabold text-gray-800 flex items-center gap-2">
                Tic-Tac-Toe Pastel 🌸 vs ⭐️
              </h3>
            </div>

            <div class="flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-pastel-pink-100 shadow-sm text-xs font-bold">
              <button class="ttt-mode-bot px-3 py-1.5 rounded-xl transition-all ${this.gameMode === 'bot' ? 'bg-pastel-pink-500 text-white shadow-xs' : 'text-gray-600 hover:text-pastel-pink-500'}">
                🤖 Lawan Bot
              </button>
              <button class="ttt-mode-pvp px-3 py-1.5 rounded-xl transition-all ${this.gameMode === 'pvp' ? 'bg-pastel-pink-500 text-white shadow-xs' : 'text-gray-600 hover:text-pastel-pink-500'}">
                👥 2 Pemain
              </button>
              <button class="ttt-reset-btn ml-1 p-2 bg-pastel-pink-50 hover:bg-pastel-pink-500 hover:text-white text-pastel-pink-500 rounded-xl transition-all duration-300 shadow-sm" title="Mulai Ulang Board">
                <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
              </button>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-3 max-w-md mx-auto mb-6 text-center relative z-10">
            <div class="bg-white/80 p-3 rounded-2xl border border-pastel-pink-100 shadow-xs">
              <span class="block text-xs font-bold text-pastel-pink-500 flex items-center justify-center gap-1">
                <span>${this.symbols.X}</span> Player 1
              </span>
              <span class="text-xl font-extrabold text-gray-800 ttt-score-x">0</span>
            </div>
            <div class="bg-white/80 p-3 rounded-2xl border border-pastel-purple-100 shadow-xs">
              <span class="block text-xs font-bold text-gray-500">🤝 Seri</span>
              <span class="text-xl font-extrabold text-gray-800 ttt-score-ties">0</span>
            </div>
            <div class="bg-white/80 p-3 rounded-2xl border border-pastel-blue-100 shadow-xs">
              <span class="block text-xs font-bold text-pastel-purple-500 flex items-center justify-center gap-1">
                <span>${this.symbols.O}</span> <span class="ttt-label-player2">${this.gameMode === 'bot' ? 'Bot AI' : 'Player 2'}</span>
              </span>
              <span class="text-xl font-extrabold text-gray-800 ttt-score-o">0</span>
            </div>
          </div>

          <div class="text-center mb-4 relative z-10">
            <span class="ttt-status-badge inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-pastel-pink-100 text-pastel-pink-600 shadow-2xs">
              Giliran: ${this.symbols.X} Player 1
            </span>
          </div>

          <div class="ttt-grid grid grid-cols-3 gap-3 max-w-xs sm:max-w-sm mx-auto aspect-square relative z-10">
            ${Array(9).fill(0).map((_, i) => `
              <button class="ttt-cell w-full h-full min-h-[75px] sm:min-h-[90px] bg-white/90 hover:bg-white border-2 border-pastel-pink-100 hover:border-pastel-pink-300 rounded-2xl text-3xl sm:text-4xl flex items-center justify-center font-extrabold shadow-sm transition-all duration-200 hover:scale-105 active:scale-95" data-index="${i}">
              </button>
            `).join('')}
          </div>

          <div class="ttt-win-overlay absolute inset-0 bg-white/95 backdrop-blur-md z-20 flex flex-col items-center justify-center p-6 text-center opacity-0 pointer-events-none transition-all duration-500 rounded-[2rem]">
            <div class="w-16 h-16 bg-pastel-purple-100 rounded-full flex items-center justify-center text-pastel-purple-500 mb-3 animate-bounce shadow-md">
              <i data-lucide="trophy" class="w-8 h-8"></i>
            </div>
            <h4 class="text-2xl font-black text-gray-800 mb-1 ttt-win-title">Permainan Selesai! 🎉</h4>
            <p class="text-sm text-gray-600 mb-4 ttt-win-message">Player 1 Menang!</p>
            <button class="ttt-play-again-btn px-6 py-3 bg-gradient-to-r from-pastel-pink-500 to-pastel-purple-500 text-white font-bold rounded-2xl shadow-lg shadow-pastel-pink-200 hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <i data-lucide="play" class="w-4 h-4"></i> Main Lagi
            </button>
          </div>
        </div>
      `;

      this.cellEls = Array.from(this.container.querySelectorAll('.ttt-cell'));
      this.statusBadge = this.container.querySelector('.ttt-status-badge');
      this.scoreXEl = this.container.querySelector('.ttt-score-x');
      this.scoreOEl = this.container.querySelector('.ttt-score-o');
      this.scoreTiesEl = this.container.querySelector('.ttt-score-ties');
      this.labelP2 = this.container.querySelector('.ttt-label-player2');
      this.winOverlay = this.container.querySelector('.ttt-win-overlay');
      this.winTitle = this.container.querySelector('.ttt-win-title');
      this.winMessage = this.container.querySelector('.ttt-win-message');
      this.botModeBtn = this.container.querySelector('.ttt-mode-bot');
      this.pvpModeBtn = this.container.querySelector('.ttt-mode-pvp');

      this.cellEls.forEach((cell, idx) => {
        cell.addEventListener('click', () => this.handleCellClick(idx));
      });

      this.container.querySelector('.ttt-reset-btn').addEventListener('click', () => this.resetBoard());
      this.container.querySelector('.ttt-play-again-btn').addEventListener('click', () => this.resetBoard());

      this.botModeBtn.addEventListener('click', () => this.setGameMode('bot'));
      this.pvpModeBtn.addEventListener('click', () => this.setGameMode('pvp'));

      if (window.lucide) {
        window.lucide.createIcons({ props: {}, nameAttr: 'data-lucide' });
      }
    }

    setGameMode(mode) {
      if (this.gameMode === mode) return;
      this.gameMode = mode;
      this.labelP2.textContent = mode === 'bot' ? 'Bot AI' : 'Player 2';

      if (mode === 'bot') {
        this.botModeBtn.className = 'ttt-mode-bot px-3 py-1.5 rounded-xl transition-all bg-pastel-pink-500 text-white shadow-xs';
        this.pvpModeBtn.className = 'ttt-mode-pvp px-3 py-1.5 rounded-xl transition-all text-gray-600 hover:text-pastel-pink-500';
      } else {
        this.pvpModeBtn.className = 'ttt-mode-pvp px-3 py-1.5 rounded-xl transition-all bg-pastel-pink-500 text-white shadow-xs';
        this.botModeBtn.className = 'ttt-mode-bot px-3 py-1.5 rounded-xl transition-all text-gray-600 hover:text-pastel-pink-500';
      }

      this.resetScores();
      this.resetBoard();
    }

    resetScores() {
      this.scores = { X: 0, O: 0, ties: 0 };
      this.scoreXEl.textContent = '0';
      this.scoreOEl.textContent = '0';
      this.scoreTiesEl.textContent = '0';
    }

    resetBoard() {
      this.board = Array(9).fill(null);
      this.currentPlayer = 'X';
      this.isGameActive = true;
      this.winningCombo = null;

      this.winOverlay.classList.add('opacity-0', 'pointer-events-none');
      this.winOverlay.classList.remove('opacity-100', 'pointer-events-auto');

      this.cellEls.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('taken', 'winner-cell');
      });

      this.updateStatus(`Giliran: ${this.symbols.X} Player 1`);
    }

    updateStatus(msg) {
      this.statusBadge.textContent = msg;
    }

    handleCellClick(index) {
      if (!this.isGameActive || this.board[index] !== null) return;

      this.makeMove(index, this.currentPlayer);

      if (this.checkWinner(this.currentPlayer)) {
        this.handleWin(this.currentPlayer);
        return;
      }

      if (this.checkDraw()) {
        this.handleDraw();
        return;
      }

      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';

      if (this.gameMode === 'bot' && this.currentPlayer === 'O') {
        this.updateStatus('Bot sedang berpikir... 🤖');
        this.isGameActive = false;
        setTimeout(() => {
          this.isGameActive = true;
          this.makeBotMove();
        }, 400);
      } else {
        const playerLabel = this.currentPlayer === 'X' ? 'Player 1' : 'Player 2';
        this.updateStatus(`Giliran: ${this.symbols[this.currentPlayer]} ${playerLabel}`);
      }
    }

    makeMove(index, player) {
      this.board[index] = player;
      const cell = this.cellEls[index];
      cell.textContent = this.symbols[player];
      cell.classList.add('taken');
    }

    makeBotMove() {
      if (!this.isGameActive) return;

      const botIndex = this.getBestBotMove();
      if (botIndex !== -1) {
        this.makeMove(botIndex, 'O');

        if (this.checkWinner('O')) {
          this.handleWin('O');
          return;
        }

        if (this.checkDraw()) {
          this.handleDraw();
          return;
        }

        this.currentPlayer = 'X';
        this.updateStatus(`Giliran: ${this.symbols.X} Player 1`);
      }
    }

    getBestBotMove() {
      const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];

      for (let combo of winningCombos) {
        const [a, b, c] = combo;
        const vals = [this.board[a], this.board[b], this.board[c]];
        if (vals.filter(v => v === 'O').length === 2 && vals.filter(v => v === null).length === 1) {
          return combo[vals.indexOf(null)];
        }
      }

      for (let combo of winningCombos) {
        const [a, b, c] = combo;
        const vals = [this.board[a], this.board[b], this.board[c]];
        if (vals.filter(v => v === 'X').length === 2 && vals.filter(v => v === null).length === 1) {
          return combo[vals.indexOf(null)];
        }
      }

      if (this.board[4] === null) return 4;

      const corners = [0, 2, 6, 8].filter(i => this.board[i] === null);
      if (corners.length > 0) {
        return corners[Math.floor(Math.random() * corners.length)];
      }

      const emptySpots = this.board.map((val, idx) => val === null ? idx : null).filter(v => v !== null);
      if (emptySpots.length > 0) {
        return emptySpots[Math.floor(Math.random() * emptySpots.length)];
      }

      return -1;
    }

    checkWinner(player) {
      const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];

      for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (this.board[a] === player && this.board[b] === player && this.board[c] === player) {
          this.winningCombo = combo;
          return true;
        }
      }
      return false;
    }

    checkDraw() {
      return this.board.every(cell => cell !== null);
    }

    handleWin(player) {
      this.isGameActive = false;
      this.scores[player]++;

      if (player === 'X') {
        this.scoreXEl.textContent = this.scores.X;
      } else {
        this.scoreOEl.textContent = this.scores.O;
      }

      if (this.winningCombo) {
        this.winningCombo.forEach(idx => {
          this.cellEls[idx].classList.add('winner-cell');
        });
      }

      const winnerName = player === 'X' ? 'Player 1' : (this.gameMode === 'bot' ? 'Bot AI' : 'Player 2');
      const winnerIcon = this.symbols[player];

      this.updateStatus(`🎉 ${winnerIcon} ${winnerName} Menang!`);

      this.winTitle.textContent = `${winnerIcon} ${winnerName} Menang! 🎉`;
      this.winMessage.textContent = `Selamat! ${winnerName} berhasil memenangkan ronde ini.`;

      setTimeout(() => {
        this.winOverlay.classList.remove('opacity-0', 'pointer-events-none');
        this.winOverlay.classList.add('opacity-100', 'pointer-events-auto');
        if (window.lucide) {
          window.lucide.createIcons({ props: {}, nameAttr: 'data-lucide' });
        }
      }, 500);
    }

    handleDraw() {
      this.isGameActive = false;
      this.scores.ties++;
      this.scoreTiesEl.textContent = this.scores.ties;

      this.updateStatus('🤝 Permainan Seri!');

      this.winTitle.textContent = 'Permainan Seri! 🤝';
      this.winMessage.textContent = 'Tidak ada yang menang di ronde ini. Mau coba lagi?';

      setTimeout(() => {
        this.winOverlay.classList.remove('opacity-0', 'pointer-events-none');
        this.winOverlay.classList.add('opacity-100', 'pointer-events-auto');
        if (window.lucide) {
          window.lucide.createIcons({ props: {}, nameAttr: 'data-lucide' });
        }
      }, 500);
    }
  }

  /**
   * Emoji Catcher Game Instance (Reflex Arcade Game)
   * Fast-paced 20s Emoji Tapping Game
   */
  class EmojiCatcherGameInstance {
    constructor(containerEl) {
      this.container = containerEl;
      this.score = 0;
      this.timeLeft = 20;
      this.gameTimer = null;
      this.popTimer = null;
      this.activeSlot = null;
      this.isPlaying = false;
      this.emojis = ['🌸', '🐰', '🍡', '💖', '⭐️', '🎀', '🦄', '🐱'];

      this.initUI();
    }

    initUI() {
      this.container.innerHTML = `
        <div class="glass-card rounded-[2rem] p-6 sm:p-8 border border-white/60 shadow-glass relative overflow-hidden">
          <div class="absolute -right-8 -top-8 w-32 h-32 bg-pastel-peach-100/50 rounded-full blur-xl pointer-events-none"></div>
          <div class="absolute -left-8 -bottom-8 w-32 h-32 bg-pastel-blue-100/50 rounded-full blur-xl pointer-events-none"></div>

          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 relative z-10">
            <div>
              <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-pastel-peach-100 text-pastel-peach-600 rounded-full text-xs font-bold uppercase tracking-wider mb-1">
                <i data-lucide="zap" class="w-3.5 h-3.5"></i> Mini Game Pastel #3
              </div>
              <h3 class="text-xl sm:text-2xl font-extrabold text-gray-800 flex items-center gap-2">
                Tangkap Emoji Pastel! 🐰✨
              </h3>
            </div>

            <div class="flex items-center gap-3 bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-pastel-pink-100 shadow-sm text-sm">
              <div class="text-center px-2">
                <span class="block text-[10px] uppercase font-semibold text-gray-400">Skor</span>
                <span class="font-extrabold text-pastel-pink-600 catcher-score-count">0</span>
              </div>
              <div class="h-6 w-px bg-pastel-pink-100"></div>
              <div class="text-center px-2">
                <span class="block text-[10px] uppercase font-semibold text-gray-400">Waktu</span>
                <span class="font-extrabold text-gray-700 catcher-timer-count">20s</span>
              </div>
              <div class="h-6 w-px bg-pastel-pink-100"></div>
              <div class="text-center px-2">
                <span class="block text-[10px] uppercase font-semibold text-gray-400">Rekor</span>
                <span class="font-extrabold text-purple-600 catcher-best-count">${this.getBestScore()}</span>
              </div>
              <button class="catcher-start-btn ml-1 px-3.5 py-2 bg-pastel-pink-500 hover:bg-pastel-pink-600 text-white font-bold rounded-xl transition-all duration-300 shadow-xs flex items-center gap-1 text-xs">
                <i data-lucide="play" class="w-3.5 h-3.5"></i> Mulai
              </button>
            </div>
          </div>

          <div class="catcher-grid grid grid-cols-3 gap-3 sm:gap-4 max-w-xs sm:max-w-sm mx-auto aspect-square relative z-10">
            ${Array(9).fill(0).map((_, i) => `
              <div class="catcher-hole relative w-full h-full min-h-[75px] sm:min-h-[90px] bg-white/70 border-2 border-pastel-pink-100 rounded-3xl flex items-center justify-center overflow-hidden shadow-inner cursor-pointer select-none transition-transform hover:scale-102" data-index="${i}">
                <div class="catcher-emoji absolute transition-all duration-300 transform translate-y-full opacity-0 text-3xl sm:text-4xl pointer-events-none select-none">
                  🌸
                </div>
              </div>
            `).join('')}
          </div>

          <div class="catcher-over-overlay absolute inset-0 bg-white/95 backdrop-blur-md z-20 flex flex-col items-center justify-center p-6 text-center opacity-0 pointer-events-none transition-all duration-500 rounded-[2rem]">
            <div class="w-16 h-16 bg-pastel-peach-100 rounded-full flex items-center justify-center text-pastel-peach-500 mb-3 animate-bounce shadow-md">
              <i data-lucide="trophy" class="w-8 h-8"></i>
            </div>
            <h4 class="text-2xl font-black text-gray-800 mb-1 catcher-over-title">Waktu Habis! 🎉</h4>
            <p class="text-sm text-gray-600 mb-4 catcher-over-message">Skor Kamu: 0 poin!</p>
            <button class="catcher-play-again-btn px-6 py-3 bg-gradient-to-r from-pastel-pink-500 to-pastel-peach-400 text-white font-bold rounded-2xl shadow-lg shadow-pastel-pink-200 hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <i data-lucide="rotate-ccw" class="w-4 h-4"></i> Coba Lagi
            </button>
          </div>
        </div>
      `;

      this.holes = Array.from(this.container.querySelectorAll('.catcher-hole'));
      this.scoreEl = this.container.querySelector('.catcher-score-count');
      this.timerEl = this.container.querySelector('.catcher-timer-count');
      this.bestEl = this.container.querySelector('.catcher-best-count');
      this.startBtn = this.container.querySelector('.catcher-start-btn');
      this.overOverlay = this.container.querySelector('.catcher-over-overlay');
      this.overTitle = this.container.querySelector('.catcher-over-title');
      this.overMessage = this.container.querySelector('.catcher-over-message');

      this.startBtn.addEventListener('click', () => this.startGame());
      this.container.querySelector('.catcher-play-again-btn').addEventListener('click', () => this.startGame());

      this.holes.forEach((hole, idx) => {
        hole.addEventListener('click', () => this.handleHoleClick(idx));
      });

      if (window.lucide) {
        window.lucide.createIcons({ props: {}, nameAttr: 'data-lucide' });
      }
    }

    getBestScore() {
      const best = localStorage.getItem('pastel_catcher_best_score');
      return best ? `${best}` : '0';
    }

    startGame() {
      if (this.isPlaying) return;

      this.score = 0;
      this.timeLeft = 20;
      this.isPlaying = true;
      this.scoreEl.textContent = '0';
      this.timerEl.textContent = '20s';

      this.overOverlay.classList.add('opacity-0', 'pointer-events-none');
      this.overOverlay.classList.remove('opacity-100', 'pointer-events-auto');

      this.startBtn.disabled = true;
      this.startBtn.classList.add('opacity-50', 'cursor-not-allowed');

      this.gameTimer = setInterval(() => {
        this.timeLeft--;
        this.timerEl.textContent = `${this.timeLeft}s`;

        if (this.timeLeft <= 0) {
          this.endGame();
        }
      }, 1000);

      this.popUpRandomEmoji();
    }

    popUpRandomEmoji() {
      if (!this.isPlaying) return;

      this.holes.forEach(hole => {
        const emojiEl = hole.querySelector('.catcher-emoji');
        emojiEl.classList.add('translate-y-full', 'opacity-0');
        emojiEl.classList.remove('translate-y-0', 'opacity-100');
        emojiEl.style.pointerEvents = 'none';
      });

      const randomHoleIdx = Math.floor(Math.random() * this.holes.length);
      const hole = this.holes[randomHoleIdx];
      const emojiEl = hole.querySelector('.catcher-emoji');

      const randomEmoji = this.emojis[Math.floor(Math.random() * this.emojis.length)];
      emojiEl.textContent = randomEmoji;

      emojiEl.classList.remove('translate-y-full', 'opacity-0');
      emojiEl.classList.add('translate-y-0', 'opacity-100');
      emojiEl.style.pointerEvents = 'auto';

      this.activeSlot = randomHoleIdx;

      const popDuration = Math.max(450, 900 - (20 - this.timeLeft) * 20);

      this.popTimer = setTimeout(() => {
        if (this.isPlaying) {
          this.popUpRandomEmoji();
        }
      }, popDuration);
    }

    handleHoleClick(idx) {
      if (!this.isPlaying) return;

      if (idx === this.activeSlot) {
        const hole = this.holes[idx];
        const emojiEl = hole.querySelector('.catcher-emoji');

        if (emojiEl.classList.contains('opacity-100')) {
          this.score += 10;
          this.scoreEl.textContent = this.score;

          emojiEl.classList.add('translate-y-full', 'opacity-0');
          emojiEl.classList.remove('translate-y-0', 'opacity-100');

          this.showFloatingText(hole, '+10');
          this.activeSlot = null;
        }
      }
    }

    showFloatingText(container, text) {
      const textEl = document.createElement('div');
      textEl.className = 'absolute text-sm font-black text-pastel-pink-600 animate-bounce pointer-events-none z-30';
      textEl.textContent = text;
      textEl.style.top = '30%';
      container.appendChild(textEl);

      setTimeout(() => {
        textEl.remove();
      }, 500);
    }

    endGame() {
      this.isPlaying = false;
      clearInterval(this.gameTimer);
      clearTimeout(this.popTimer);

      this.holes.forEach(hole => {
        const emojiEl = hole.querySelector('.catcher-emoji');
        emojiEl.classList.add('translate-y-full', 'opacity-0');
        emojiEl.classList.remove('translate-y-0', 'opacity-100');
      });

      this.startBtn.disabled = false;
      this.startBtn.classList.remove('opacity-50', 'cursor-not-allowed');

      const best = parseInt(this.getBestScore(), 10);
      if (this.score > best) {
        localStorage.setItem('pastel_catcher_best_score', this.score);
        this.bestEl.textContent = `${this.score}`;
      }

      this.overTitle.textContent = `Hebat! 🎉`;
      this.overMessage.textContent = `Kamu mendapatkan ${this.score} poin dalam 20 detik! 🚀`;

      setTimeout(() => {
        this.overOverlay.classList.remove('opacity-0', 'pointer-events-none');
        this.overOverlay.classList.add('opacity-100', 'pointer-events-auto');
        if (window.lucide) {
          window.lucide.createIcons({ props: {}, nameAttr: 'data-lucide' });
        }
      }, 300);
    }
  }

  // Auto initialize all elements with class names
  function initAllPastelGames() {
    const memoryTargets = document.querySelectorAll('.pastel-game-container, #pastel-game-widget');
    memoryTargets.forEach(container => {
      new MemoryGameInstance(container);
    });

    const tttTargets = document.querySelectorAll('.pastel-tictactoe-container, #pastel-tictactoe-widget');
    tttTargets.forEach(container => {
      new TicTacToeGameInstance(container);
    });

    const catcherTargets = document.querySelectorAll('.pastel-catcher-container, #pastel-catcher-widget');
    catcherTargets.forEach(container => {
      new EmojiCatcherGameInstance(container);
    });
  }

  // Global Tab Switcher Function for Dashboard Games
  window.switchDashboardGame = function (gameId) {
    const memoryTab = document.getElementById('game-tab-memory');
    const tttTab = document.getElementById('game-tab-tictactoe');
    const catcherTab = document.getElementById('game-tab-catcher');

    const memoryContainer = document.getElementById('game-container-memory');
    const tttContainer = document.getElementById('game-container-tictactoe');
    const catcherContainer = document.getElementById('game-container-catcher');

    const tabs = [
      { id: 'memory', tab: memoryTab, container: memoryContainer },
      { id: 'tictactoe', tab: tttTab, container: tttContainer },
      { id: 'catcher', tab: catcherTab, container: catcherContainer }
    ];

    tabs.forEach(item => {
      if (!item.tab || !item.container) return;
      if (item.id === gameId) {
        item.container.classList.remove('hidden');
        item.tab.className = 'game-tab-btn px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 bg-pastel-pink-500 text-white shadow-md flex items-center gap-2';
      } else {
        item.container.classList.add('hidden');
        item.tab.className = 'game-tab-btn px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 text-gray-600 hover:text-pastel-pink-500 bg-white/60 flex items-center gap-2';
      }
    });

    if (window.lucide) {
      window.lucide.createIcons({ props: {}, nameAttr: 'data-lucide' });
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllPastelGames);
  } else {
    initAllPastelGames();
  }
})();

