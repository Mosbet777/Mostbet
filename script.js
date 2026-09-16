let currentPosition = 0;

function openMenu() {
    document.querySelector(".menu").classList.toggle("active");
}

function slideGames(direction) {
    const track = document.getElementById("gamesTrack");
    const cards = track.querySelectorAll(".game-card");

    if (!cards.length) return;

    const cardWidth =
        cards[0].getBoundingClientRect().width + 25;

    const maxPosition =
        Math.max(
            0,
            track.scrollWidth -
            track.parentElement.clientWidth
        );

    currentPosition += direction * cardWidth;

    currentPosition = Math.max(
        0,
        Math.min(currentPosition, maxPosition)
    );

    track.style.transform =
        `translateX(-${currentPosition}px)`;
}

function showAllGames() {
    const track = document.getElementById("gamesTrack");

    currentPosition = 0;

    track.style.transform = "translateX(0)";
}

function selectGame(gameName) {
    event.preventDefault();

    document.getElementById("selectedGame").textContent =
        `"${gameName}" seçildi.`;
}

function goToSite() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}
