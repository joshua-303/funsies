tracks = [{"track":1, "name":"Canto IV: Who Denies All", "length":"3:03", "file":"lcb_WhoDeniesAll_OST", "extension":".mp3"},
{"track":2, "name":"608B", "length":"2:52", "file":"608b_yume2kki", "extension":".ogg"},
{"track":3, "name":"Honeycomb Lofi", "length":"1:41", "file":"Gucc_honeycomb_lofi", "extension":".ogg"}];
mediaPath = "audio/";
audio = document.getElementById("cool");
nextBtn = document.getElementById("nextBtn");
prevBtn = document.getElementById("prevBtn");
hi = document.getElementById("cool2");
index = 0;

audio.src = mediaPath + tracks[index].file + tracks[index].extension;
console.log(mediaPath + tracks[index].file + tracks[index].extension);
hi.innerHTML = "Now playing: " + "<b>" + tracks[index].name + "</b>";

function incrementIndex() {
    index++;
    audio.src = mediaPath + tracks[index].file + tracks[index].extension;
    hi.innerHTML = "Now playing: " + "<b>" + tracks[index].name + "</b>";
    console.log(index);
}
function decrementIndex() {
    index--;
    audio.src = mediaPath + tracks[index].file + tracks[index].extension;
    hi.innerHTML = "Now playing: " + "<b>" + tracks[index].name + "</b>";
    console.log(index);
}
nextBtn.addEventListener("click", incrementIndex);
prevBtn.addEventListener("click", decrementIndex);
