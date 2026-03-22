// ඇනිමේ දත්ත ගබඩාව (මෙහි ඇනිමේ 20ක් දක්වා ඇතුළත් කරන්න)
const animeData = [
    {
        id: 1,
        title: "Naruto Shippuden",
        image: "https://via.placeholder.com", // පින්තූරයේ URL එක මෙතනට දාන්න
        seasons: {
            "Season 1": ["Episode 1: Homecoming", "Episode 2: The Akatsuki Makes Its Move"],
            "Season 2": ["Episode 3: Results of Training", "Episode 4: The Jinchuriki of the Sand"]
        }
    },
    {
        id: 2,
        title: "One Piece",
        image: "https://via.placeholder.com",
        seasons: {
            "Season 1": ["Episode 1: I'm Luffy!", "Episode 2: Enter the Great Swordsman"],
            "Season 2": ["Episode 62: The First Obstacle?"]
        }
    }
];

const animeGrid = document.getElementById('animeGrid');
const modal = document.getElementById('animeModal');
let currentAnime = null;

// ඇනිමේ ලැයිස්තුව screen එකට දැමීම
animeData.forEach(anime => {
    const card = document.createElement('div');
    card.className = 'anime-card';
    card.innerHTML = `<img src="${anime.image}"><h3>${anime.title}</h3>`;
    card.onclick = () => openAnime(anime);
    animeGrid.appendChild(card);
});

function openAnime(anime) {
    currentAnime = anime;
    document.getElementById('modalTitle').innerText = anime.title;
    const seasonSelect = document.getElementById('seasonSelect');
    seasonSelect.innerHTML = "";
    
    Object.keys(anime.seasons).forEach(season => {
        const opt = document.createElement('option');
        opt.value = season;
        opt.innerHTML = season;
        seasonSelect.appendChild(opt);
    });

    loadEpisodes();
    modal.style.display = "block";
}

function loadEpisodes() {
    const season = document.getElementById('seasonSelect').value;
    const list = document.getElementById('episodeList');
    list.innerHTML = "";
    
    currentAnime.seasons[season].forEach(ep => {
        const div = document.createElement('div');
        div.className = 'episode-item';
        div.innerText = ep;
        list.appendChild(div);
    });
}

document.querySelector('.close').onclick = () => modal.style.display = "none";
