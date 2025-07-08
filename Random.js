// Rammerhead proxy
const proxy = "https://demo-opensource.rammerhead.org/?url=";

// Games list with title, thumbnail, and URL
const games = [
  {
    title: "Slope",
    img: "https://raw.githubusercontent.com/metasploit123/slope-game/main/images/slope3d.png",
    url: "https://ubg98.github.io/Slope"
  },
  {
    title: "Retro Bowl",
    img: "https://raw.githubusercontent.com/metasploit123/retro-bowl/main/images/retro-bowl.jpg",
    url: "https://ubg98.github.io/retro-bowl/"
  },
  {
    title: "1v1.lol",
    img: "https://raw.githubusercontent.com/metasploit123/unblockedgames-images/main/1v1.jpg",
    url: "https://ubg98.github.io/1v1-lol/"
  },
  {
    title: "Cookie Clicker",
    img: "https://raw.githubusercontent.com/metasploit123/unblockedgames-images/main/cookieclicker.jpg",
    url: "https://cookieclickerunblocked.github.io/"
  },
  {
    title: "Tetris",
    img: "https://raw.githubusercontent.com/metasploit123/unblockedgames-images/main/tetris.jpg",
    url: "https://ubg98.github.io/tetris/"
  }
];

// DOM elements
const gameContainer = document.getElementById("games");
const viewer = document.getElementById("viewer");

// Render the game grid
games.forEach(game => {
  const div = document.createElement("div");
  div.className = "game";
  div.innerHTML = `
    <img src="${game.img}" alt="${game.title}">
    <div class="game-title">${game.title}</div>
  `;
  div.onclick = () => {
    const encoded = btoa(game.url);
    viewer.src = proxy + encoded;
  };
  gameContainer.appendChild(div);
});

// Panic button
document.getElementById("panicBtn").onclick = () => {
  viewer.src = "";
  document.title = "Classes";
  const link = document.querySelector("link[rel~='icon']");
  if (link) {
    link.href = "https://ssl.gstatic.com/classroom/favicon.png";
  }
};

// Optional: ESC key for panic
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    document.getElementById("panicBtn").click();
  }
});
