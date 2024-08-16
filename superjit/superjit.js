tracks = {"track":1, "name":"Canto IV: Who Denies All", "length":"3:03", "file":"lcb_WhoDeniesAll_OST", "extension":".mp3"}
mediaPath = "audio/";
var audio = document.getElementById("cool");
audio.src = mediaPath + tracks.file + tracks.extension;
console.log(mediaPath + tracks.file + tracks.extension);
hi = document.getElementById("cool2");
hi.innerHTML = "Now playing: " + "<b>" + tracks.name + "</b>";