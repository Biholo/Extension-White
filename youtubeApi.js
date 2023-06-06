function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC7zZVvbqzq-dKE1qdGazFmQ&maxResults=5&order=date&key=AIzaSyAoa9gwZrPWi90lEgfmF-pffgBa93BZQ5c")
.then((res)=>{
    return res.json()
}).then((data)=>{
    let videos = data.items
    let videoContainer = document.querySelector(".youtube-container")
    let videoContainer2 = document.querySelector(".youtube-container2")
    
    
    videoContainer.innerHTML += `
        <a href="https://www.youtube.com/watch?v=${videos[0].id.videoId}" target="_blank" ><img class="template-vod" src="${videos[0].snippet.thumbnails.medium.url}"></a>
    `
    videos.shift();
    let random = getRandomInt(videos.length)

    videoContainer2.innerHTML += `
        <a href="https://www.youtube.com/watch?v=${videos[random].id.videoId}" target="_blank"><img class="template-vod" src="${videos[random].snippet.thumbnails.medium.url}"></a>
    `
})