console.log("Welcome to Spotify")

// Initialize the variables

let songIndex = 0;
let audioElement =  new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let songItems = Array.from(document.getElementsByClassName('songItem'))
let songItemsPlay = Array.from(document.getElementsByClassName('songItemPlay'))
let previous_song = document.getElementById('previous')
let next_song = document.getElementById('next')
let song_Info = document.getElementsByClassName('songInfo')
let masterSongName = document.getElementById('masterSongName')




// An array of objects

let songs = [
    {songName : "Wolves", filePath : "songs/1.mp3", coverPath : "covers/1.jpg"},
    {songName : "RaRe", filePath : "songs/2.mp3", coverPath : "covers/2.jpg"},
    {songName : "On My Way", filePath : "songs/3.mp3", coverPath : "covers/3.jpg"},
    {songName : "Let me Love you", filePath : "songs/4.mp3", coverPath : "covers/4.jpg"},
    {songName : "Believer", filePath : "songs/5.mp3", coverPath : "covers/5.jpg"},
  
]


songItems.forEach((element, i) => {
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;


})



// To handle play & pause clicks

masterPlay.addEventListener('click', ()=>{

    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1
    }
    else{
        audioElement.pause()
        masterPlay.classList.add('fa-circle-play')
        masterPlay.classList.remove('fa-circle-pause')
        gif.style.opacity = 0
    }

})


// Listen to Events

audioElement.addEventListener('timeupdate', ()=>{

    // Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress

})

myProgressBar.addEventListener('change',()=>{
   audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100
   myProgressBar.value = audioElement.currentTime
})




// To play songs from list of songs

const makeAllPlays = () => {
    songItemsPlay.forEach((element) =>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}


songItemsPlay.forEach((element)=>{

    element.addEventListener('click',(event) =>{
        makeAllPlays();
        songIndex = parseInt(event.target.id)
        event.target.classList.remove('fa-circle-play');
        event.target.classList.add('fa-circle-pause');
        audioElement.src =  `songs/${songIndex + 1}.mp3`
        masterSongName.innerText = songs[songIndex].songName
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        

    })
})



previous_song.addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src =  `songs/${songIndex + 1}.mp3`
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
    

})


next_song.addEventListener('click',()=>{
    if(songIndex >= 5){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src =  `songs/${songIndex + 1}.mp3`
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
    


})


