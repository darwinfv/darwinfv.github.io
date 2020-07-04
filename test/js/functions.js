let player = document.getElementById('music');
let sources = [
    "https://raw.githubusercontent.com/darwinfv/darwinfv.github.io/master/assets/audio/party.mp3",
    "https://raw.githubusercontent.com/darwinfv/darwinfv.github.io/master/assets/audio/deadlock.mp3"
];
let credits = [
    `"Who Likes to Party" Kevin MacLeod (incompetech.com)<br>
    Licensed under Creative Commons: By Attribution 4.0 License<br>
    http://creativecommons.org/licenses/by/4.0/<br>`,
    `"Dead Lock" Elwood (elwoodproductions.com)<br>
    Licensed under Creative Commons: By Attribution 4.0 License<br>
    http://creativecommons.org/licenses/by/4.0/<br>`
];
let track = Math.floor(Math.random() * sources.length);
player.src = sources[track];

player.addEventListener("play", function() {
    let credit = document.getElementById("credit");
    credit.innerHTML = credits[track];
    credit.hidden = false;
});

player.addEventListener('ended', function() {
    let no = Math.floor(Math.random() * sources.length);
    if (no == track) {
        document.getElementById("credit").hidden = true;
    } else {
        track = no;
        player.src = sources[track];
        player.pause();
        player.load();
        player.play();
    }
});

