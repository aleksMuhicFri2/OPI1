window.onload = function(){
    $("#firstPage").hide();
    $("#avatarCreation").show();
    $("#game").hide();

let submitB = document.getElementById("submit"); // submit Button
let ninjaBt = document.getElementById("ninjaBt"); // Buttons on the Avatar Creation Page ......................
let sumoBt = document.getElementById("sumoBt");
let wizardBt = document.getElementById("wizardBt");
let ninjaImg = document.getElementById("ninjaImg"); // IMAGE BUTTONS ........................................
let wizardImg = document.getElementById("wizardImg");
let sumoImg = document.getElementById("sumoImg");
let fireball = document.getElementById("wizardFireball");
let kunai = document.getElementById("ninjaKunai");
let heart0 = document.getElementById("heart0");
let heart1 = document.getElementById("heart1");
let heart2 = document.getElementById("heart2");
let coin = document.getElementById("berryCoin");
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
        console.log(avatarClass);
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
        let sumoImages = ["https://art.pixilart.com/thumb/sr214371b036dc3.png", "https://art.pixilart.com/thumb/sr21279b6461f0f.png",
            "https://art.pixilart.com/thumb/sr214371b036dc3.png", "https://art.pixilart.com/thumb/sr216c4e4249bce.png"];

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
    $("#infoTab").hide();

    let canvas = document.getElementById("gameCanvas"); // Creates a Canvas and styles it
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1";
    const ctx = canvas.getContext("2d");

    let charX = 1000; // start position of our character
    let charY = 500;

    heartJump(); // hearts jumping on top of the pagee
    coinSpin();  // coin spinning function
    let coinCount = 0; // how many coins we have
    document.getElementById("coinCount").textContent = coinCount.toString(); // Display of our number of coins on top right
    let wizardAnimation = ["slike/WizardFront.png", "https://art.pixilart.com/sr20b67910862cb.png", "slike/WizardWalkDown2",
        "slike/WizardRightSide.png", "slike/WizardWalkRight1.png", "slike/WizardWalkRight2.png",
        "slike/WizardBack.png", "slike/WizardWalkUp1.png", "slike/WizardWalkUp2.png",
        "slike/WizardLeftSide.png", "slike/WizardWalkLeft1.png", "slike/WizardWalkLeft2.png"];

    let animationIndex = 0;
    let animationCooldown = 0;
    wizardImg.src = wizardAnimation[animationIndex];
    displayImage(); // shows our character on the map

    // draw image on canvas
    function displayImage() {
        wizardImg.src = wizardAnimation[animationIndex];
        ctx.drawImage(wizardImg , charX, charY, 150, 150);
    }
    function cooldownTOIndex(direction){
        if(animationCooldown === 0){
            animationIndex = 0;
        } else if(animationCooldown > 0){
            if(animationCooldown < 4){
                if(direction === "down") {
                    animationIndex = 0;
                } else if(direction === "right"){
                    animationIndex = 3;
                } else if(direction === "up"){
                    animationIndex = 6;
                } else if(direction === "left"){
                    animationIndex = 9;
                }
            } else if(animationCooldown % 4 === 0){   // TUKAJ PODAMO OFFSET (za levo desno gor in dol) desno = 1, ce spreminjas to NAPISI (Vprasaj Aleksa)
                if(direction === "down") {
                    animationIndex = (animationIndex + 1) % 3;
                } else if(direction === "right"){
                    animationIndex = (animationIndex + 1) % 3 + 3;
                } else if(direction === "up"){
                    animationIndex = (animationIndex + 1) % 3 + 6;
                } else if(direction === "left"){
                    animationIndex = (animationIndex + 1) % 3 + 9;
                }
            }
        }
    }

    document.addEventListener("keydown", function(event) { // moves character with WASD
        if (event.key === "a") {
            cooldownTOIndex("left");
            animationCooldown++;
            charX -= 10;
        } else if (event.key === "d") {
            cooldownTOIndex("right");
            animationCooldown++;
            charX += 10;
        } else if (event.key === "w") {
            cooldownTOIndex("up");
            animationCooldown++;
            charY -= 10;
        } else if (event.key === "s") {
            cooldownTOIndex("down");
            animationCooldown++;
            charY += 10;
        }
        // redraw image on canvas with updated position
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        displayImage();
    });

    document.addEventListener("keyup", function(event) { // Stops the movement correctly
        if (event.key === "a") {
            animationCooldown = 3;
            animationIndex = 9;
            displayImage();
        } else if (event.key === "d") {
            animationCooldown = 3;
            animationIndex = 3;
            displayImage();
        } else if (event.key === "w") {
            animationCooldown = 3;
            animationIndex = 6;
            displayImage();
        } else if (event.key === "s") {
            animationCooldown = 3;
            animationIndex = 0;
            displayImage();
        }
        // redraw image on canvas with updated position
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        displayImage();
    });


    function heartJump() {
        setTimeout(function() {
            heart0.style.animation = "heartJump 2s steps(1, end) infinite";
        },1350);
        setTimeout(function() {
            heart1.style.animation = "heartJump 2s steps(1, end) infinite";
        },1500);
        setTimeout(function() {
            heart2.style.animation = "heartJump 2s steps(1, end) infinite";
        },1650);
    }
    function coinSpin() {
        let spinIndex = 0;
        let coinImages = ["https://art.pixilart.com/thumb/sr2b3a05f028aab.png", "https://art.pixilart.com/thumb/sr26cad9a64b482.png",
            "https://art.pixilart.com/thumb/sr281a982156be4.png", "https://art.pixilart.com/thumb/sr2c1b6163fc67e.png"];
        setInterval(function(){
            spinIndex = (spinIndex + 1) % coinImages.length;
            coin.src = coinImages[spinIndex];
        },200);
    }

    document.addEventListener('keydown', function(event) {          // InfoTab visible if you hold key "i"
        if (event.key === 'i') {
            $("#infoTab").show();
        }
    });
    document.addEventListener('keyup', function(event) {
        if (event.key === 'i') {
            $("#infoTab").hide();
        }
    });
}