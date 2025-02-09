const pkmnDetails = document.getElementById("pkmnDetails");
const pkmnVisualProfile = document.getElementById("pkmnVisualProfile");
const pkmnStatProfile = document.getElementById("pkmnStatProfile");
const pkmnTyping = document.getElementById("pkmnTyping");
const btnGenerate = document.getElementById("btnGenerate");

function getRandomPkmnId() {
    return Math.floor(Math.random() * 1026);
}

function statsTraversal(data) {
    let statString = "";

    for (let i = 0; i < data.stats.length; i++) {
        statString += `<p class="pkmnStatString">${data.stats[i].stat.name}: ${data.stats[i].base_stat}</p>`;
    }
    return statString;
}

function typeDisplay(data) {
    console.log(data);
    let typeString = "";
    for (let i = 0; i < data.types.length; i++) {
        typeString += `<p class="pkmnType">${data.types[i].type.name}</p>`
    }
    console.log(typeString);
    return typeString;
}


function displayData(data) {
    pkmnVisualProfile.innerHTML = `
        <h3 id="pkmnName">${data.name.toUpperCase()}</h3>
        <img id="pkmnSprite" src="${data.sprites.front_default}" alt="${data.name}">
    `;
    pkmnStatProfile.innerHTML = typeDisplay(data).toUpperCase();
    pkmnStatProfile.insertAdjacentHTML("beforeend",statsTraversal(data));

}

function fetchApi() {
    const randomId = getRandomPkmnId();
    console.log("Fetching API...");

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}/`)
        .then(response => {
            console.log("Response received:", response);
            if (!response.ok) {
                throw new Error(`HTTP Error Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("API connection successful!", data);
            displayData(data);
            let audio = new Audio(data.cries.latest);
            audio.play();
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

console.log("Button Element:", btnGenerate);

window.onload = function () {
    fetchApi(); // Ensures fetch runs AFTER the page loads

    const btnGenerate = document.getElementById("btnGenerate");
    btnGenerate.addEventListener("click", function () {
        fetchApi();
    }
    )
};


