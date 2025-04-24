let audio = document.getElementById('audio');
let progress = document.querySelector('.progress');

let musicList = [
    {
        name: "track 01",
        link: "music/AC-DC - Thunderstruck.mp3",
        img: "image copy 2.png"
    },
    {
        name: "track 02",
        link: "music/Macan - Кино.mp3",
        img: "image copy.png"
    },
    {
        name: "track 03",
        link: "music/Xcho & Macan - Memories.mp3",
        img: "image.png"
    }
];

let i = 0;

function playAudio() {
    audio.src = musicList[i].link;
    audio.play();

    setInterval(function () {
        let percent = (audio.currentTime / audio.duration) * 100;
        progress.style.width = percent + "%";
    }, 1000);
}

function pauseAudio() {
    audio.pause();
}

function next() {
    i = i + 1;
    if (i >= musicList.length) {
        i = 0;
    }
    audio.src = musicList[i].link;
    audio.play();
}

function previous() {
    i = i - 1;
    if (i < 0) {
        i = musicList.length - 1;
    }
    audio.src = musicList[i].link;
    audio.play();
}