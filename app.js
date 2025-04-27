// Tic Tac Toe Game Implementation
const gameboard = {
    board: ["", "", "", "", "", "", "", "", ""],
    currentPlayer: "X",

    // Initialize the game
    init() {
        this.render();
        this.addEventListeners();
    },

    // Render the game board
    render() {
        const gameContainer = document.getElementById("game");
        gameContainer.innerHTML = "";
        this.board.forEach((cell, index) => {
            const cellElement = document.createElement("div");
            cellElement.className = "cell";
            cellElement.textContent = cell;
            cellElement.dataset.index = index;
            gameContainer.appendChild(cellElement);
        });
    },

    // Add event listeners to cells
    addEventListeners() {
        const cells = document.querySelectorAll(".cell");
        cells.forEach(cell => {
            cell.addEventListener("click", (event) => this.handleCellClick(event));
        });
    },

    // Handle cell click
    handleCellClick(event) {
        const index = event.target.dataset.index;
        if (this.board[index] === "") {
            this.board[index] = this.currentPlayer;
            if (this.checkWin()) {
                alert(`${this.currentPlayer} wins!`);
                this.resetGame();
            } else if (this.board.every(cell => cell !== "")) {
                alert("It's a draw!");
                this.resetGame();
            } else {
                this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
                this.render();
            }
        }
    },

    // Check for a win
    checkWin() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];
        return winPatterns.some(pattern => 
            pattern.every(index => this.board[index] === this.currentPlayer)
        );
    },

    // Reset the game
    resetGame() {
        this.board.fill("");
        this.currentPlayer = "X";
        this.render();
    }
};
// Start the game
document.addEventListener("DOMContentLoaded", () => {
    gameboard.init();
});
// CSS for the game
const style = document.createElement("style");
style.textContent = `
    #game {
        display: grid;
        grid-template-columns: repeat(3, 100px);
        grid-gap: 5px;
    }
    .cell {
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        border: 1px solid #000;
        cursor: pointer;
    }
`;
document.head.appendChild(style);
// HTML structure for the game
const gameContainer = document.createElement("div");
gameContainer.id = "game";
document.body.appendChild(gameContainer);
// Add a title for the game
const title = document.createElement("h1");
title.textContent = "Tic Tac Toe";
document.body.insertBefore(title, gameContainer);
// Add a reset button
const resetButton = document.createElement("button");
resetButton.textContent = "Reset Game";
resetButton.addEventListener("click", () => gameboard.resetGame());
document.body.appendChild(resetButton);
// Add some basic styles
const bodyStyle = document.createElement("style");  

bodyStyle.textContent = `
    body {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: Arial, sans-serif;
    }
    h1 {
        margin-bottom: 20px;
    }
    button {
        margin-top: 20px;
        padding: 10px 20px;
        font-size: 16px;
    }
`;
document.head.appendChild(bodyStyle);
// Add a footer
const footer = document.createElement("footer");
footer.textContent = "Tic Tac Toe Game - Created by OpenAI";
footer.style.marginTop = "20px";
document.body.appendChild(footer);
// Add a link to the source code
const sourceLink = document.createElement("a");
sourceLink.href = "https://github.com/SalamanderCtesiphon/ticTacToeProject";
sourceLink.textContent = "View Source Code on GitHub";
sourceLink.style.display = "block";
sourceLink.style.marginTop = "10px";
document.body.appendChild(sourceLink);