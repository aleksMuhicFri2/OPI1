window.onload = function(){
    $("#firstPage").show();
    $("#avatarCreation").hide();
    $("#game").hide();

let submitB = document.getElementById("submit"); // submit Button
let ninjaBt = document.getElementById("ninjaBt"); // Buttons on the Avatar Creation Page ......................
let sumoBt = document.getElementById("sumoBt");
let wizardBt = document.getElementById("wizardBt");
let ninjaImg = document.getElementById("ninjaImg"); // IMAGE BUTTONS ........................................
let sumoImg = document.getElementById("sumoImg");
let wizardImg = document.getElementById("wizardImg");
let fireball = document.getElementById("wizardFireball");
let kunai = document.getElementById("ninjaKunai");
let username = "";
let password = "";
let avatarClass = "";
let avatarName = "";
let int1;

//================================================= LOG IN PAGE ========================================================

    submitB.onclick = function hidePage() { //                SUBMIT BUTTON FUNCTION....................................
    username = document.getElementById("usernameInput").value;
    password = document.getElementById("passwordInput").value;
    $(document).ready(function() {
        $("#firstPage").hide();
        $("#avatarCreation").show();
        $("#game").hide();
        });
    }

//=============================================== AVATAR CREATION PAGE =================================================

    function hideAvatarPage(){
        $("#firstPage").hide();
        $("#avatarCreation").hide();
        $("#game").show();
    }

    ninjaBt.onclick = function () { //                        CLASS BUTTONS FUNCTIONS...................................
        avatarClass = "ninja";
        avatarName = document.getElementById("avatarNameInput").value;
        hideAvatarPage();
    }
    sumoBt.onclick = function () {
        avatarName = document.getElementById("avatarNameInput").value;
        avatarClass = "sumo";
        hideAvatarPage();
    }
    wizardBt.onclick = function () {
        avatarClass = "wizard";
        avatarName = document.getElementById("avatarNameInput").value;
        hideAvatarPage();
    }


    $(document).ready(function changeImage() { //           HOVER FOR THE IMAGES (BORDER TURNS WHITE)...................

        $("#ninjaBt").hover(
            function() {
                $("#ninjaImg").attr("src", "https://art.pixilart.com/sr2f49cc9728a8f.png");},
            function() {
                $("#ninjaImg").attr("src", "https://art.pixilart.com/sr29975db92de0e.png");
        });

    $("#ninjaImg").hover(
            function() {
                $("#ninjaImg").attr("src", "https://art.pixilart.com/thumb/sr2d818a1f5d7d7.png");
                kunai.style.animation = "moveKunai 0.5s linear alternate";
                },
            function() {
                $("#ninjaImg").attr("src", "https://art.pixilart.com/sr29975db92de0e.png");
                kunai.style.animation = "";
            });

        $("#sumoBt").hover(
            function() {
                $("#sumoImg").attr("src", "https://art.pixilart.com/sr280cc30953b7e.png");},
            function() {
                $("#sumoImg").attr("src", "https://art.pixilart.com/sr214371b036dc3.png");
        });

        let currentIndex = 0;
        let sumoImages = ["https://art.pixilart.com/thumb/sr214371b036dc3.png", "https://art.pixilart.com/thumb/sr21279b6461f0f.png", "https://art.pixilart.com/thumb/sr214371b036dc3.png", "https://art.pixilart.com/thumb/sr216c4e4249bce.png"];

        sumoImg.addEventListener('mouseenter', () => {
            int1 = setInterval(() => {
                currentIndex = (currentIndex + 1) % sumoImages.length;
                sumoImg.src = sumoImages[currentIndex];
            }, 500);
        });
        sumoImg.addEventListener('mouseleave', () => {
            clearInterval(int1);
        });

        $("#wizardBt").hover(
            function() {
                $("#wizardImg").attr("src", "https://art.pixilart.com/sr28e6e08b7bbd9.png");},
            function() {
                $("#wizardImg").attr("src", "https://art.pixilart.com/sr25e49254bba95.png");
        });
    
    $("#wizardImg").hover(
            function() {
                $("#wizardImg").attr("src", "https://art.pixilart.com/sr245acdadcb2d4.png");
                fireball.style.animation = "moveFireball 1s linear alternate";
            },
            function() {
                $("#wizardImg").attr("src", "https://art.pixilart.com/sr25e49254bba95.png");
                fireball.style.animation = "";
            });
        });
    //============================================== GAME PAGE =========================================================
    let coinCount = 43525;
    document.getElementById("coinCount").textContent = coinCount.toString();
}