
const pieces = [
    "A_top_left",
    "L_top_right",
    "C_middle_left",
    "O_middle_right",
    "A2_bottom_left",
    "Plus_bottom_right"
];

function loadPieces() {
    let completed = 0;
    pieces.forEach(id => {
        if (localStorage.getItem(id) === "scanned") {
            document.getElementById(id).src = `images/${id}.png`;
            completed++;
        }
    });
    if (completed === pieces.length) {
        document.getElementById("final-message").style.display = "block";
        confetti();
    }
}

window.onload = loadPieces;
