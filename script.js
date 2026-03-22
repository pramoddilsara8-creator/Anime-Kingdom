const animeData = } },
    { id: 2, title: "Jujutsu Kaisen", image: "https://m.media-amazon.com", seasons: { "Season 1": ["Ep 1", "Ep 2"], "Season 2": ["Ep 1: Hidden Inventory"] } },
    { id: 3, title: "One Piece", image: "https://m.media-amazon.com", seasons: { "Wano Arc": ["Ep 1000", "Ep 1001"], "Egghead": ["Ep 1100"] } },
    { id: 4, title: "Demon Slayer", image: "https://m.media-amazon.com", seasons: { "Entertainment District": ["Ep 1", "Ep 2"] } },
    { id: 5, title: "Naruto", image: "https://m.media-amazon.com", seasons: { "Season 1": ["Ep 1", "Ep 2"] } }
    // මෙලෙස තවත් 20ක් වනතුරු ලැයිස්තුව දිගු කරන්න...
];

const grid = document.getElementById('animeGrid');
const modal = document.getElementById('animeModal');
let currentAnime = null;

function displayAnime() {
    grid.innerHTML = animeData.map(anime => `
        <div class="anime-card" onclick="openAnime(${anime.id})">
            <img src="${anime.image}">
            <div class="info">${anime.title}</div>
        </div>
    `).join('');
}

function openAnime(id) {
    currentAnime = animeData.find(a => a.id === id);
    document.getElementById('modalTitle').innerText = currentAnime.title;
    const select = document.getElementById('seasonSelect');
    select.innerHTML = Object.keys(currentAnime.seasons).map(s => `<option value="${s}">${s}</option>`).join('');
    loadEpisodes();
    modal.style.display = "block";
}

function loadEpisodes() {
    const season = document.getElementById('seasonSelect').value;
    document.getElementById('episodeList').innerHTML = currentAnime.seasons[season].map(ep => `<div class="episode-item">${ep}</div>`).join('');
}

function closeModal() { modal.style.display = "none"; }

displayAnime();
