# 🕹️ X&O - Classic Tic Tac Toe Game 

$BANER 

A simple yet dynamic web-based Tic Tac Toe game (X&O) built with pure `HTML`, `CSS`, and `JavaScript`. It's quick, responsive, and features score tracking, player turn indication, and automatic game resets.

## 🚀 Features  

- 🎮 2-player local game (X and O)
- 🔁 Auto-reset after each round
- 🧠 Win condition detection for rows, columns, and diagonals
- 🧮 Scoreboard that resets after 10 wins
- 🎨 Colorful and responsive UI using grid layouts and modern CSS

## 📦 How to Run

Clone the repo
```bash
git clone https://github.com/ValyMnDul/Tic_Tac_Toe_Game.git
```
Enter the "Tic_Tac_Toe_Game" directory
```bash
cd Tic_Tac_Toe_Game
```
Open `Index.html` in your browser.

And you're done!

## ⚙️ TECH
### Frontend
- `HTML5` Grid Layout to structure the game board and `UI`.
- `CSS`:
    - Custom styling using colors like aqua, cyan, and antiquewhite
    - Responsive grid using grid-template-columns and gap
    - Large, bold typography for scores and turns
### JavaScript Game Logic
- Turn management with a `boolean` flag (turner) to toggle between X and O.
- Game state tracking using flags (`C1B` to `C9B`) for each cell to prevent overwriting.
- Win detection through exhaustive checking of all possible winning combinations.
- Scoring system:
    - Points tracked using `ScoreX` and `ScoreO`
    - Game auto-resets once a player reaches `10` points
- Hard-coded button click handlers (C1() through C9()) for individual cell control
## 🧠 Optimization Ideas (for future)
1. Refactor to use a loop or array for cells instead of 9 separate functions
2. Introduce a game board array (`let board = Array(9).fill(null)`) to handle logic more cleanly
3. Implement local storage to persist `scores`
4. Add a `CPU/AI` player mode using Minimax or heuristics

## 📄 License
This project is open-source under the MIT License.
  
