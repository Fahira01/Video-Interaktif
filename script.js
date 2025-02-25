let videoIndex = 0;
const videoSources = [
    "video/Video_mulai.mp4",
    "video/istirahat.mp4",
    "video/Tidak istirahat-1.mp4",
    "video/Periksa kondisi.mp4",
    "video/Telpon Bantuan.mp4",
    "video/Periksa melakukan.mp4",
    "video/Periksa tidak.mp4",
    "video/Telpon melakukan.mp4",
    "video/Telpon tidak.mp4"
];

let pilihanSebelumnya = "";
let pilihanSebelumnya2 = "";

function selectOption(option) {
    const optionText = option.textContent;
    switch (optionText) {
        case "Istirahat":
            videoIndex = 1;
            pilihanSebelumnya = "Istirahat";
            break;
        case "Terus berlari":
            videoIndex = 2;
            pilihanSebelumnya = "Terus berlari";
            break;
        default:
            console.log("Pilihan tidak valid");
            return;
    }
    updateVideo();
    hideOldOptions();
    showNewOptions();
}

function selectNewOption(option) {
    const optionText = option.textContent;
    switch (optionText) {
        case "Periksa kondisi":
            videoIndex = 3;
            pilihanSebelumnya2 = "Periksa kondisi";
            break;
        case "Telpon bantuan":
            videoIndex = 4;
            pilihanSebelumnya2 = "Telpon bantuan";
            break;
        default:
            console.log("Pilihan tidak valid");
            return;
    }
    updateVideo();
    hideNewOptions();
    if (pilihanSebelumnya === "Istirahat" && pilihanSebelumnya2 === "Telpon bantuan") {
        showNewOptions4();
    } else if (videoIndex === 3) {
        showNewOptions3();
    } else if (videoIndex === 4) {
        showNewOptions4();
    }
}

function selectNewOption3(option) {
    const optionText = option.textContent;
    switch (optionText) {
        case "Melakukan tindakan":
            videoIndex = 5;
            if (pilihanSebelumnya === "Istirahat" && pilihanSebelumnya2 === "Periksa kondisi") {
                showGambar();
            } else if (pilihanSebelumnya === "Istirahat" && pilihanSebelumnya2 === "Telpon bantuan") {
                showGambar();
            } else if (pilihanSebelumnya === "Terus berlari" && pilihanSebelumnya2 === "Periksa kondisi") {
                showGambar2();
            } else if (pilihanSebelumnya === "Terus berlari" && pilihanSebelumnya2 === "Telpon bantuan") {
                showGambar2();
            }
            break;
        case "Tidak melakukan tindakan":
            videoIndex = 6;
            if (pilihanSebelumnya === "Istirahat" && pilihanSebelumnya2 === "Periksa kondisi") {
                showGambar();
            } else if (pilihanSebelumnya === "Istirahat" && pilihanSebelumnya2 === "Telpon bantuan") {
                showGambar();
            } else if (pilihanSebelumnya === "Terus berlari" && pilihanSebelumnya2 === "Periksa kondisi") {
                showGambar2();
            } else if (pilihanSebelumnya === "Terus berlari" && pilihanSebelumnya2 === "Telpon bantuan") {
                showGambar2();
            }
            break;
        default:
            console.log("Pilihan tidak valid");
            return;
    }
    updateVideo();
    document.querySelector('.options-new-3').style.display = 'none';
}

function selectNewOption4(option) {
    const optionText = option.textContent;
    switch (optionText) {
        case "Melakukan tindakan":
            videoIndex = 7;
            if (pilihanSebelumnya === "Istirahat" && pilihanSebelumnya2 === "Telpon bantuan") {
                showGambar();
            } else if (pilihanSebelumnya === "Terus berlari" && pilihanSebelumnya2 === "Telpon bantuan") {
                showGambar2();
            }
            break;
        case "Tidak melakukan tindakan":
            videoIndex = 8;
            if (pilihanSebelumnya === "Istirahat" && pilihanSebelumnya2 === "Telpon bantuan") {
                showGambar();
            } else if (pilihanSebelumnya === "Terus berlari" && pilihanSebelumnya2 === "Telpon bantuan") {
                showGambar2();
            }
            break;
        default:
            console.log("Pilihan tidak valid");
            return;
    }
    updateVideo();
    document.querySelector('.options-new-4').style.display = 'none';
}

function updateVideo() {
    const videoPlayer = document.getElementById("video-player");
    const source = document.createElement("source");
    source.src = videoSources[videoIndex];
    source.type = "video/mp4";
    videoPlayer.innerHTML = "";
    videoPlayer.appendChild(source);
    videoPlayer.load();
    videoPlayer.play();
}

function hideOldOptions() {
    const oldOptions = document.querySelector(".options");
    oldOptions.style.display = "none";
}

function showNewOptions() {
    const newOptions = document.querySelector(".options-new");
    newOptions.style.display = "block";
}

function hideNewOptions() {
    const newOptions = document.querySelector(".options-new");
    newOptions.style.display = "none";
}

function showNewOptions3() {
    const newOptions3 = document.querySelector(".options-new-3");
    newOptions3.style.display = "block";
}

function showNewOptions4() {
    const newOptions4 = document.querySelector(".options-new-4");
    newOptions4.style.display = "block";
}

function showGambar() {
    const diagramAlurCerita = document.querySelector(".diagram-alur-cerita");
    diagramAlurCerita.style.display = "block";
    diagramAlurCerita.innerHTML = "";
    const gambar = document.createElement("img");
    gambar.src = "gambar/istirahat2.png";
    gambar.alt = "Gambar video 5";
    diagramAlurCerita.appendChild(gambar);
}

function showGambar2() {
    const diagramAlurCerita = document.querySelector(".diagram-alur-cerita");
    diagramAlurCerita.style.display = "block";
    diagramAlurCerita.innerHTML = "";
    const gambar = document.createElement("img");
    gambar.src = "gambar/berlari2.png";
    gambar.alt = "Gambar video 6";
    diagramAlurCerita.appendChild(gambar);
}

function kembaliKeAwal() {
    videoIndex = 0;
    updateVideo();
    const oldOptions = document.querySelector(".options");
    oldOptions.style.display = "block";
    const newOptions = document.querySelector(".options-new");
    newOptions.style.display = "none";
    const newOptions3 = document.querySelector(".options-new-3");
    newOptions3.style.display = "none";
    const newOptions4 = document.querySelector(".options-new-4");
    newOptions4.style.display = "none";
    const videoPlayer = document.getElementById("video-player");
    const diagramAlurCerita = document.querySelector(".diagram-alur-cerita");
    diagramAlurCerita.style.display = "none";
}

