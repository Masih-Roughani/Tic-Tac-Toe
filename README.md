# 🎮 Tic Tac Toe Game

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

*A classic Tic Tac Toe game with modern web technologies and smooth animations*

[🚀 Demo](#-demo) • [✨ Features](#-features) • [🛠️ Installation](#️-installation) • [🎯 How to Play](#-how-to-play) • [🔧 Customization](#-customization)

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 **Visual Design**
- 🌈 Beautiful hover animations
- 🎭 Clean, modern interface
- 📱 Responsive design
- ✨ Smooth color transitions

</td>
<td width="50%">

### ⚡ **Game Mechanics**
- 🎯 Two-player gameplay (X vs O)
- 🏆 Win detection system
- 🤝 Draw game handling
- 🔄 Instant game restart

</td>
</tr>
<tr>
<td width="50%">

### 🧠 **Smart Logic**
- ✅ Prevents invalid moves
- 🎮 Turn-based system
- 🏁 Game state management
- 🎊 Winner announcement

</td>
<td width="50%">

### 🔧 **Technical**
- 💻 Pure HTML/CSS/JS
- 📦 No external dependencies
- 🚀 Fast loading
- 🌐 Cross-browser compatible

</td>
</tr>
</table>

---

## 🚀 Demo

Simply open `index.html` in your web browser to start playing!

### 📸 Screenshot Preview
```
┌─────┬─────┬─────┐
│  X  │  O  │  X  │
├─────┼─────┼─────┤
│  O  │  X  │  O  │
├─────┼─────┼─────┤
│  X  │  O  │  X  │
└─────┴─────┴─────┘
```

---

## 🛠️ Installation

### Quick Start (3 steps!)

1. **Download the files:**
```bash
# Clone the repository
git clone https://github.com/your-username/tic-tac-toe-game.git
cd tic-tac-toe-game
```

2. **File Structure:**
```
tic-tac-toe-game/
├── 📄 index.html     # Main HTML file
├── 🎨 style.css      # Styling and animations
├── ⚡ script.js      # Game logic
└── 📖 README.md      # This file
```

3. **Run the game:**
```bash
# Simply open in browser
open index.html
# or double-click the file
```

**No build process, no dependencies, just pure web magic! ✨**

---

## 🎯 How to Play

### 🎮 **Game Rules**

| Step | Description |
|------|-------------|
| **1** | 🎯 Player X always goes first |
| **2** | 🔄 Players alternate turns (X → O → X) |
| **3** | 📍 Click any empty cell to place your mark |
| **4** | 🏆 First to get 3 in a row wins! |
| **5** | 🔄 Click "Restart Game" to play again |

### 🏆 **Winning Conditions**
- **Horizontal:** Three in a row `XXX`
- **Vertical:** Three in a column
- **Diagonal:** Corner to corner

### 🎪 **Game States**
- 🎮 `"It's X's turn"` - Player X can move
- 🎮 `"It's O's turn"` - Player O can move  
- 🏆 `"Player X has won"` - Game over, X wins
- 🏆 `"Player O has won"` - Game over, O wins
- 🤝 `"Game ended in a draw"` - No winner

---

## 🎨 Visual Features

### 🌈 **Animations**
- **Hover Effects:** Beautiful color transitions when hovering over cells
- **Color Animation:** Smooth gradient from `#00ffae` to `#50ebf9`
- **Duration:** 3-second smooth transition

### 🎭 **Styling**
- **Font:** Arial for clean readability
- **Cell Size:** Perfect 100x100px squares
- **Grid:** Clean 3x3 layout with borders
- **Typography:** Large 60px game pieces

---

## 🔧 Customization

### 🎨 **Change Colors**
Edit `style.css` to customize the color scheme:

```css
/* Hover animation colors */
@keyframes color-transition {
    0% { background-color: #your-start-color; }
    100% { background-color: #your-end-color; }
}
```

### ⚡ **Modify Game Logic**
Edit `script.js` to add new features:

```javascript
// Add your custom features here
// Example: AI player, score tracking, etc.
```

### 🎯 **Responsive Design**
The game automatically adapts to different screen sizes!

---

## 🏗️ Technical Details

### 📋 **Code Structure**

| File | Purpose | Key Features |
|------|---------|-------------|
| `index.html` | 🏠 Structure | Semantic HTML, accessibility |
| `style.css` | 🎨 Appearance | Grid layout, animations |
| `script.js` | ⚡ Logic | Game state, win detection |

### 🧠 **Game Logic Highlights**

```javascript
// Smart win detection
const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], // Rows
    [0,3,6], [1,4,7], [2,5,8], // Columns  
    [0,4,8], [2,4,6]           // Diagonals
];
```

### 🔄 **State Management**
- **Current Player:** Tracks whose turn it is
- **Game Board:** 9-cell array storing game state
- **Win Checking:** Validates all possible win conditions
- **Draw Detection:** Identifies when board is full

---

## 🚀 Future Enhancements

<details>
<summary>🔮 <strong>Planned Features</strong> (click to expand)</summary>

- 🤖 **AI Opponent:** Single-player vs computer
- 📊 **Score Tracking:** Keep track of wins/losses  
- 🎵 **Sound Effects:** Audio feedback for moves
- 🌙 **Dark Mode:** Toggle between themes
- 📱 **Touch Gestures:** Enhanced mobile experience
- 🏆 **Tournament Mode:** Best of 3, 5, etc.
- 💾 **Save Progress:** LocalStorage integration

</details>

---

## 🤝 Contributing

Want to make the game even better? Contributions are welcome!

### 🛠️ **How to Contribute**
1. 🍴 Fork the repository
2. 🔧 Create a feature branch
3. ✨ Make your improvements
4. 🚀 Submit a pull request

### 💡 **Ideas for Contributions**
- 🎨 New themes and color schemes
- ⚡ Performance optimizations
- 🐛 Bug fixes and improvements
- 📖 Documentation enhancements

---

<div align="center">

**🎮 Ready to play? Just download and open `index.html`! 🎮**

**⭐ If you enjoyed this game, please give it a star! ⭐**

Made with ❤️ and lots of ☕

*Happy Gaming!* 🎉

</div>
