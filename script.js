console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');    // It is the constructor which takes the argument, argument means we have to give the path or location of the songs.
let masterPlay = document.getElementById('masterPlay');    // accessing all the elements by id name.
let myProgressBar = document.getElementById('myProgressBar');
let songitemplay = document.getElementById('songitemplay');

let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));   // accessing the elements by class name

let songs = [            // Arrays of object is used here.
    { songName: "Walker - Faded", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },  // --> this are objects which contains the song name, song path in the song folder and song img or song DP.
    { songName: "Alan Walker - Spectre", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Cartoon - On & On ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "DJ Snake - Let Me Love You", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Electro-Light - Symbolism", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Elektronomia - Sky High pt.", filePath: "songs/2.mp3", coverPath: "covers/6.jpg" },
    { songName: "Imagine Dragons - Bones", filePath: "songs/2.mp3", coverPath: "covers/7.jpg" },
    { songName: "Poylow, Misfit - Halo", filePath: "songs/2.mp3", coverPath: "covers/8.jpg" },
    { songName: "TonyZ - Road So Far", filePath: "songs/2.mp3", coverPath: "covers/9.jpg" },
    { songName: "NWiz Khalifa - See You Again", filePath: "songs/4.mp3", coverPath: "covers/10.jpg" },
]

songItems.forEach((element, i) => {   // --> here for changing the cover img or DP of the song we used the for loop. here we can also directly give the cover img or song name by the 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;   // -->here we are accessing the element by using the getElementsByTagName-> by using this we can access the particular element from the code, here we give the coverPath from the above songs Array
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;  // --> similarly this also we are give the name to the song from the above songs array.
})


// Handle play/pause click
masterPlay.addEventListener('click', () => {   // here addEventListener is the method which is used to react when somethings happnes in the program means when the user click on the button or anything what will happen so to target that button addEventListener is used.
    if (audioElement.paused || audioElement.currentTime <= 0) {       // --> means here we used the conditions, means when the song is paused or not played(audioElement.currentTime<=0)--> means when the time of the song is 0 means the song is not started yet then this condition will execute.
        audioElement.play();     // --> then play the song.
        masterPlay.classList.remove('fa-play-circle');      // --> when this condition satsfies then remove the play button and add the pause button on the place of play button. means when the songs plays we have to replace the button by pause button.
        masterPlay.classList.add('fa-pause-circle');        // --> here adding the pause button.
        gif.style.opacity = 1;          //--> the gif img will be then visible, only if this condition will execute, means when the song plays then this condition will execute then we have to show the gif image on the page to show that the song is playing. opicity is 1(true)
        songitemplay.classList.add('fa-play-circle');    // --> inside the list of the songs, the playing button will be added. inside the list means side to the cover image or song image chya side la.
    }

    else {
        audioElement.pause();     // --> if the song is playing then pause it simple.
        masterPlay.classList.remove('fa-pause-circle');   // --> and replace the pause button by the play button
        masterPlay.classList.add('fa-play-circle');    // --> adding the play button here.
        songitemplay.classList.add('fa-pause-circle');   // --> inside the list of the songs replacing the button.

        gif.style.opacity = 0;       // --> here when the song is paused then the gif of playing song is then not visible to the user. means its opicity is now 0(false)
    }
})

// Listen to Events --> for updating the seekbar
audioElement.addEventListener('timeupdate', () => {    // -->  here 'timeupdate' is the Event in JavaScript, means when the songs is playing we have to update the time of the song
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);    // --> here we have used the parseInt, because we want it in the integer value, here i have calculated the progress of the song, means how much the song is played. here formula is used --> 1. audioElement.currentTime-> will give the current time of the song,means jita song play hota ti time 2. audioElement.durition -> will give the actual duration of the song means how much long is the song. eg:- 3 mins cha song 3. then dividing this and converting it to the percentage by multiplying it by 100
    myProgressBar.value = progress;   // --> here we have assigned the progress of the seekbar which we have calculated in the above formula.
});


// when we seek the bar means when we slide the bar then the song will be updated as per the song duration
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;    // --> simple maths here we have to calculate the audioElement.currentTime so again by using the above formula we removed the currentTime, then we have updated the seek bar and the song as per the we slide the seekbar.
});

// Note:- this below function is called as Lambada with Arrow function in JavaScript. so all team members learn this method shree,divesh,anuj,nikku learn this method it is very IMP function.
const makeAllPlays = () => {   // --> it is the function to change the button inside the list of the songs, means here we have to do 
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');   // --> removing the pause button
        element.classList.add('fa-play-circle');  // --> adding the play button  
    })
}

// Note:- this is for only the button from the list of songs, means from the cover image chya side la button ahi small te...
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {   // --> here we are accessing the element by using the class name.
    element.addEventListener('click', (e) => {      // --> here we are telling to the function that when someone clicks on the button then run the makeAllPlays function which we have created above.
        makeAllPlays();   // --> it is the function above written
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;    // ---> when clicked on the song then play the particular song, here we have used the $ sign because we have written the statement inside the back ticks(`   `).
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;   // --> the song will play from starting means the currentTime of the song is now 0
        audioElement.play();  // --> when clicked then play the song.
        gif.style.opacity = 1;    // --> the gif image will also be visible to the user when clicked on the button from the list.


        masterPlay.classList.remove('fa-play-circle');   // --> this is big play-pause button below the page. this will also update when the small button will be clicked.
        masterPlay.classList.add('fa-pause-circle');
    })
});

// Note all team members:- here we are using the addEventListener many times so prepare karun ya... shree, divesh, anuj,nikku
document.getElementById('next').addEventListener('click', () => {   // --> when clicked on the next button. here we have directly accessed the element by using getElementById('next') and then we have added the event means we have given that when the button will clicked what will happen.
    if (songIndex >= 9) {    // --> here if the last song is playing then when clicked the next button then jump to the first song.
        songIndex = 0   // --> here accessing the first song when the above if condition is satsifies.
    }
    else {
        songIndex += 1;   // --> else when clicked run the next song.
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;     // --> here we have to give the path of the song, means when clicked the button which song should be played.
    masterSongName.innerText = songs[songIndex].songName;      // --> here we have to give the name of the song below, means when we click the button which song is playing the name of the song will be displayed on the below page.
    audioElement.currentTime = 0;   // --> when clicked then the song will play from the begnning, means the song will play from starting,means we have to give currentTime=0
    audioElement.play();   // --> when clicked then play the song.
    masterPlay.classList.remove('fa-play-circle');   // --> and update the buttons,means replacing the play-pause buttons.
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {    // --> same as above written comments, the only difference is that this is previous button. Note:- here all will same as above the difference is that only in the condition(if-else condition madi change ahi.)
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


let menuIcon = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active'); // Toggle the active class on the menu icon

    if (menuIcon.classList.contains('active')) {
        menuIcon.innerHTML = '<i class="fas fa-times"></i>'; // Replace menu icon with cross icon
    } else {
        menuIcon.innerHTML = '<i class="fas fa-bars"></i>'; // Replace cross icon with menu icon
    }

    navbar.classList.toggle('active'); // Toggle the active class on the navbar
});


// By Datta kale 


document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu i");
    const cross = document.querySelector(".cross i");
    const ho = document.querySelector("#ho");

    menuIcon.addEventListener("click", function () {
        if (ho.style.display === "block") {
            ho.style.display = "none";
            menuIcon.innerHTML = '<i class="fas fa-times"></i>';

        } else {
            ho.style.display = "block";
            menuIcon.innerHTML = '<i class="fas fa-bars"></i>'; // Replace cross icon with menu icon
        }
    });


    cross.addEventListener("click", function () {
        if (ho.style.display === "block") {
            ho.style.display = "none";
            menuIcon.innerHTML = '<i class="fas fa-times"></i>';

        } else {
            ho.style.display = "none";
            menuIcon.innerHTML = '<i class="fas fa-bars"></i>'; // Replace cross icon with menu icon
        }
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const menuIcon = document.querySelector("#m");
//     const crossIcon = document.querySelector(".cross");
//     const ho = document.querySelector("#ho");

//     menuIcon.addEventListener("click", function () {
//         ho.style.display = "block";
//     });

//     crossIcon.addEventListener("click", function () {
//         ho.style.display = "none";
//     });
// });



