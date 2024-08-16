tracks = {"track":1, "name":"song1", "length":"3:03", "file":"lcb_WhoDeniesAll_OST", "extension":".mp3"}
mediaPath = "audio/";
var audio = document.getElementById("cool");
audio.src = mediaPath + tracks.file + tracks.extension;
console.log(mediaPath + tracks.file + tracks.extension);