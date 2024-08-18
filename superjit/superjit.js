//Index storing data for each track in the playlist

tracks = [{"track":1, "name":"Canto IV: Who Denies All", "duration":"3:03", "file":"lcb_WhoDeniesAll_OST", "extension":".mp3"},
{"track":2, "name":"608B", "duration":"2:52", "file":"608b_yume2kki", "extension":".ogg"},
{"track":3, "name":"Honeycomb Lofi", "duration":"1:41", "file":"Gucc_honeycomb_lofi", "extension":".ogg"}];
mediaPath = "audio/";
audio = document.getElementById("cool");
nextBtn = document.getElementById("nextBtn");
prevBtn = document.getElementById("prevBtn");
hi = document.getElementById("cool2");
dropDown = document.getElementById("dropDown");
option = document.createElement("option");
options = [];
duration = document.getElementById("audioDuration")

for (i = 0; i < tracks.length; i++) {
    option.text = tracks[i].name;
    option.value = i;
    options.push(option.outerHTML);
}

dropDown.insertAdjacentHTML('beforeEnd', options.join("\n"));

/*for (a in options) {
    console.log(options[a]);
}*/

//Index storing the current song
index = 0;

updatePlaylist();

//Updates the audio source according to the array

function updatePlaylist() {
    audio.src = mediaPath + tracks[index].file + tracks[index].extension;
    hi.innerHTML = "Now playing: " + "<b>" + tracks[index].name + "</b>";
    //console.log(index);
    index = dropDown.value;
}

//Changes song as selected from dropdown

function changeSong() {
    audio.src = mediaPath + tracks[this.value].file + tracks[this.value].extension;
    hi.innerHTML = "Now playing: " + "<b>" + tracks[this.value].name + "</b>";
    index = this.value;
}

function incrementIndex() {
    index++;
    if (index < tracks.length) {
        updatePlaylist();
    } else {
        index = 0;
        updatePlaylist();
    }
}

function decrementIndex() {
    index--;
    if (index >= 0) {
        updatePlaylist();
    } else {
        index = tracks.length-1
        updatePlaylist();
    }
}

nextBtn.addEventListener("click", incrementIndex);
prevBtn.addEventListener("click", decrementIndex);
dropDown.onchange = changeSong;

