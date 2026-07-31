// ===========================================
// TYPEWRITER EFFECT
// ===========================================

const text = "To My Beautiful Girlfriend ❤️";
const typewriter = document.getElementById("typewriter");

let index = 0;

const openButton = document.getElementById("openButton");
const aboutSection = document.getElementById("about");

if (openButton && aboutSection) {
    openButton.addEventListener("click", (e) => {
        e.preventDefault();
        aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
}

function typeEffect(){

    if(index < text.length){

        typewriter.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect,100);

    }

}

window.onload = typeEffect;


// ===========================================
// CURSOR GLOW
// ===========================================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});


// ===========================================
// SCROLL PROGRESS BAR
// ===========================================

window.addEventListener("scroll",()=>{

    const scrollTop = document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";

});


// ===========================================
// FLOATING HEARTS
// ===========================================

const heartContainer =
document.getElementById("heart-container");

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts=["💜","❤️","💙","💕","💖"];

    heart.innerHTML =
        hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left =
        Math.random()*100 + "vw";

    heart.style.fontSize =
        (20 + Math.random()*25) + "px";

    heart.style.animationDuration =
        (6 + Math.random()*5) + "s";

    heartContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

}

setInterval(createHeart,350);


// ===========================================
// PHOTO LIGHTBOX
// ===========================================

const images =
document.querySelectorAll(".gallery-img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightboxImg");

const close =
document.getElementById("closeLightbox");

images.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImg.src=img.src;

    });

});

close.addEventListener("click",()=>{

    lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});


// ===========================================
// ACCORDION
// ===========================================

const buttons =
document.querySelectorAll(".accordion-btn");

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        const content =
        button.nextElementSibling;

        if(content.style.maxHeight){

            content.style.maxHeight=null;

        }

        else{

            content.style.maxHeight =
                content.scrollHeight+"px";

        }

    });

});


// ===========================================
// LETTER BUTTON (guarded)
// ===========================================

const showLetter = document.getElementById("showLetter");
const letter = document.getElementById("letterCard");
if (showLetter && letter) {
	showLetter.addEventListener("click", () => {
		letter.classList.toggle("show");
		showLetter.innerHTML = letter.classList.contains("show") ? "Hide Letter ❤️" : "Read My Letter 💌";
	});
}

// ===========================================
// RELATIONSHIP COUNTER
// CHANGE THIS DATE!
// ===========================================

// October 1, 2025

const anniversary =
new Date("2025-10-01");

const today = new Date();

const difference =
today - anniversary;

const days =
Math.floor(
difference /
(1000*60*60*24)
);

document.getElementById("daysTogether").innerHTML =
days + " Days ❤️";


// ===========================================
// SURPRISE BUTTON (guarded)
// ===========================================

const surpriseBtn = document.getElementById("surpriseBtn");
const message = document.getElementById("surpriseMessage");
if (surpriseBtn && message) {
	surpriseBtn.addEventListener("click", () => {
		message.classList.add("show");
		confetti();
	});
}

// ===========================================
// SIMPLE CONFETTI
// ===========================================

function confetti(){

    for(let i=0;i<180;i++){

        const piece =
        document.createElement("div");

        piece.style.position="fixed";

        piece.style.width="8px";

        piece.style.height="8px";

        piece.style.left=
        Math.random()*100+"vw";

        piece.style.top="-20px";

        piece.style.background=
        [
            "#8b5cf6",
            "#3b82f6",
            "#ec4899",
            "#ffffff"
        ][Math.floor(Math.random()*4)];

        piece.style.opacity="1";

        piece.style.borderRadius="50%";

        piece.style.pointerEvents="none";

        piece.style.zIndex="99999";

        piece.style.transition="4s linear";

        document.body.appendChild(piece);

        setTimeout(()=>{

            piece.style.transform=
            `translateY(${window.innerHeight+100}px)
             rotate(${Math.random()*720}deg)`;

            piece.style.opacity="0";

        },20);

        setTimeout(()=>{

            piece.remove();

        },4500);

    }

}


    // ===========================================
    // SCROLL REVEAL
    // ===========================================

    document.querySelectorAll("section").forEach(section=>{
        section.classList.add("show");
    });


// ===========================================
// SMOOTH BUTTON HOVER SOUND (OPTIONAL)
// ===========================================

// Uncomment if you add a sound file

/*
const audio = new Audio("music/click.mp3");

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

audio.currentTime=0;
audio.play();

});

});
*/


// ===========================================
// END
// ===========================================

// ================= MENU TOGGLE ================= 
const menuToggle = document.getElementById('menuToggle');
const sectionMenu = document.getElementById('sectionMenu');

if (menuToggle && sectionMenu) {
  menuToggle.addEventListener('click', () => {
    sectionMenu.classList.toggle('show');
  });

  sectionMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      sectionMenu.classList.remove('show');
    });
  });

  document.addEventListener('click', (e) => {
    if (!sectionMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      sectionMenu.classList.remove('show');
    }
  });
}

// ================= WORD HUNT GAME ================= 
class WordHuntGame {
  constructor() {
    this.words = ['NIFEMI', 'ANGRYBIRD', 'RODIAT', 'TIKTOK', 'BABY'];
    this.gridSize = 12;
    this.grid = [];
    this.wordPositions = [];
    this.foundWords = new Set();
    this.selectedCells = [];
    this.isDragging = false;
    this.dragDirection = null;
    this.dragStartCell = null;
    this.init();
  }

  init() {
    this.generateGrid();
    this.renderGrid();
    this.addGridEventListeners();
    this.updateGameStatus();
  }

  generateGrid() {
    // Initialize grid with random letters
    this.grid = Array(this.gridSize).fill(null).map(() => 
      Array(this.gridSize).fill('').map(() => String.fromCharCode(65 + Math.floor(Math.random() * 26)))
    );

    // Place each word ensuring it fits
    this.words.forEach((word) => {
      let placed = false;
      let attempts = 0;
      
      while (!placed && attempts < 100) {
        const direction = Math.floor(Math.random() * 2);
        let row = Math.floor(Math.random() * this.gridSize);
        let col = Math.floor(Math.random() * this.gridSize);
        
        if (this.canPlaceWord(word, row, col, direction)) {
          this.placeWord(word, row, col, direction);
          this.wordPositions.push({ word, row, col, direction });
          placed = true;
        }
        attempts++;
      }
    });
  }

  canPlaceWord(word, row, col, direction) {
    if (direction === 0) {
      if (col + word.length > this.gridSize) return false;
      for (let i = 0; i < word.length; i++) {
        const cell = this.grid[row][col + i];
        if (typeof cell === 'object' && cell.original === true) return false;
      }
      return true;
    } 
    else if (direction === 1) {
      if (row + word.length > this.gridSize) return false;
      for (let i = 0; i < word.length; i++) {
        const cell = this.grid[row + i][col];
        if (typeof cell === 'object' && cell.original === true) return false;
      }
      return true;
    }
    return false;
  }

  placeWord(word, row, col, direction) {
    for (let i = 0; i < word.length; i++) {
      if (direction === 0) {
        this.grid[row][col + i] = { letter: word[i], wordIndex: this.words.indexOf(word), original: true };
      } else if (direction === 1) {
        this.grid[row + i][col] = { letter: word[i], wordIndex: this.words.indexOf(word), original: true };
      }
    }
  }

  renderGrid() {
    const gridContainer = document.getElementById('wordHuntGrid');
    gridContainer.innerHTML = '';
    gridContainer.style.userSelect = 'none';

    this.grid.forEach((row, rowIdx) => {
      const rowEl = document.createElement('tr');
      row.forEach((cell, colIdx) => {
        const cellEl = document.createElement('td');
        cellEl.className = 'word-cell';
        cellEl.textContent = typeof cell === 'string' ? cell : cell.letter;
        cellEl.dataset.row = rowIdx;
        cellEl.dataset.col = colIdx;
        cellEl.dataset.wordIndex = typeof cell === 'string' ? -1 : cell.wordIndex;
        rowEl.appendChild(cellEl);
      });
      gridContainer.appendChild(rowEl);
    });
  }

  addGridEventListeners() {
    const gridContainer = document.getElementById('wordHuntGrid');
    const cells = document.querySelectorAll('.word-cell');

    gridContainer.style.touchAction = 'none';

    cells.forEach(cell => {
      cell.addEventListener('mousedown', (e) => {
        e.preventDefault();
        this.isDragging = true;
        this.clearSelection();
        this.dragDirection = null;
        this.dragStartCell = null;
        this.handleCellHover(cell, true);
      });

      cell.addEventListener('mouseover', (e) => {
        if (this.isDragging) {
          this.handleCellHover(e.target);
        }
      });

      cell.addEventListener('mouseup', () => {
        this.isDragging = false;
        this.checkForWord();
      });
    });

    const touchStart = (e) => {
      e.preventDefault();
      this.isDragging = true;
      this.clearSelection();
      this.dragDirection = null;
      this.dragStartCell = null;
      const t = e.changedTouches[0];
      const target = document.elementFromPoint(t.clientX, t.clientY);
      if (target && target.classList.contains('word-cell')) this.handleCellHover(target, true);
    };

    const touchMove = (e) => {
      e.preventDefault();
      if (!this.isDragging) return;
      const t = e.changedTouches[0];
      const target = document.elementFromPoint(t.clientX, t.clientY);
      if (target && target.classList.contains('word-cell')) this.handleCellHover(target);
    };

    const touchEnd = (e) => {
      e.preventDefault();
      this.isDragging = false;
      this.checkForWord();
    };

    const touchCancel = () => {
      this.isDragging = false;
      this.clearSelection();
    };

    gridContainer.addEventListener('touchstart', touchStart, { passive: false });
    gridContainer.addEventListener('touchmove', touchMove, { passive: false });
    gridContainer.addEventListener('touchend', touchEnd, { passive: false });
    gridContainer.addEventListener('touchcancel', touchCancel, { passive: true });

    gridContainer.addEventListener('mouseleave', () => {
      this.isDragging = false;
      this.checkForWord();
    });
  }

  handleCellHover(cell, isStart = false) {
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);

    if (isStart) {
      this.clearSelection();
      this.dragStartCell = { row, col };
      this.selectedCells = [{ row, col, element: cell }];
      cell.classList.add('selected');
      return;
    }

    if (!this.dragStartCell) return;

    const startRow = this.dragStartCell.row;
    const startCol = this.dragStartCell.col;
    const rowDiff = row - startRow;
    const colDiff = col - startCol;

    if (rowDiff === 0 && colDiff === 0) return;

    const absRow = Math.abs(rowDiff);
    const absCol = Math.abs(colDiff);

    if (absRow > 0 && absCol > 0) return;

    const direction = absRow === 0
      ? (colDiff > 0 ? 'right' : 'left')
      : (rowDiff > 0 ? 'down' : 'up');

    if (!this.dragDirection) {
      this.dragDirection = direction;
    } else if (direction !== this.dragDirection) {
      return;
    }

    this.clearSelection();
    this.selectedCells = [];

    const stepRow = rowDiff === 0 ? 0 : (rowDiff > 0 ? 1 : -1);
    const stepCol = colDiff === 0 ? 0 : (colDiff > 0 ? 1 : -1);
    const steps = Math.max(absRow, absCol);

    for (let i = 0; i <= steps; i++) {
      const currentRow = startRow + stepRow * i;
      const currentCol = startCol + stepCol * i;
      const currentCell = document.querySelector(`.word-cell[data-row="${currentRow}"][data-col="${currentCol}"]`);
      if (currentCell) {
        this.selectedCells.push({ row: currentRow, col: currentCol, element: currentCell });
        currentCell.classList.add('selected');
      }
    }
  }

  checkForWord() {
    if (this.selectedCells.length === 0) return;

    const word = this.selectedCells.map(c => 
      typeof this.grid[c.row][c.col] === 'string' ? this.grid[c.row][c.col] : this.grid[c.row][c.col].letter
    ).join('');

    // Check if word exists in word list and hasn't been found
    const wordIndex = this.words.findIndex(w => w === word);
    
    if (wordIndex !== -1 && !this.foundWords.has(wordIndex)) {
      this.foundWords.add(wordIndex);
      this.selectedCells.forEach(c => {
        c.element.classList.add('found');
        c.element.classList.remove('selected');
      });
      this.updateAnswerDisplay(wordIndex);
      this.updateGameStatus();
    } else {
      // Word not found or already found - unselect all cells
      this.clearSelection();
    }
  }

  clearSelection() {
    this.selectedCells.forEach(c => {
      c.element.classList.remove('selected');
    });
    this.selectedCells = [];
  }

  updateAnswerDisplay(wordIndex) {
    const answerElement = document.getElementById(`answer${wordIndex + 1}`);
    if (answerElement) {
      answerElement.style.display = 'block';
      answerElement.style.opacity = '1';
      answerElement.style.textDecoration = 'none';
      answerElement.style.color = '#22c55e';
      answerElement.style.fontWeight = 'bold';
    }
  }

  updateGameStatus() {
    const status = document.getElementById('gameStatus');
    if (this.foundWords.size === this.words.length) {
      status.textContent = '🎉 You found all the words! clap for yourself! ❤️';
      status.style.color = '#ff1493';
      status.style.fontSize = '1.2rem';
    } else {
      status.textContent = `Found: ${this.foundWords.size} / ${this.words.length}`;
      status.style.color = '#667eea';
    }
  }
}

// Initialize Word Hunt Game when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('wordHuntGrid')) {
    new WordHuntGame();
  }
});