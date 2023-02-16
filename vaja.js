window.onload = function(){
    $("#firstPage").hide();
    $("#avatarCreation").show();
    $("#game").hide();
    $("#characterImg").hide();

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
        //$("#game").hide();
        });
    }

//=============================================== AVATAR CREATION PAGE =================================================

    function hideAvatarPage(){
        //$("#firstPage").hide();
        $("#avatarCreation").hide();
        $("#game").show();
        $("#characterImg").show();
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
    let missiles = [];

    class Missile{
        constructor(counter, type, src, top, left, direction, rotation, user){
            this.counter = counter;
            this.type = type;
            this.src = src;
            this.top = top;
            this.left = left;
            this.direction = direction;
            this.user = user;
        }
    }

    let counter = 0;
    const characterImg = document.getElementById("characterImg");

    function appendImage(missile) {
        document.body.appendChild(missile);
    }

    function createImage(image){
        console.log(`${image.counter} , ${image.type} , ${image.src} , ${image.top} , ${image.left} , ${image.direction} , ${image.rotation} , ${image.user} ,`)
        let missile = document.createElement("img");
        missile.style.width = "100px";
        missile.style.width = "100px";
        missile.style.position = "absolute";
        missile.id = image.type + counter;
        counter++;
        missile.src = image.src;
        missile.style.top = image.top;
        missile.style.left = image.left;
        missile.style.transform = `rotate( ${image.rotation} deg)`;
        missiles.add(missile);
        appendImage(missile);
    }


    heartJump(); // hearts jumping on top of the pagee
    coinSpin();  // coin spinning function
    let coinCount = 0; // how many coins we have
    document.getElementById("coinCount").textContent = coinCount.toString(); // Display of our number of coins on top right
    let wizardAnimation = ["slike/WizardFront.png", "https://art.pixilart.com/sr2e1496ebd68df.png", "https://art.pixilart.com/sr20b67910862cb.png",
        "slike/WizardRightSide.png", "slike/WizardWalkRight1.png", "slike/WizardWalkRight2.png",
        "slike/WizardBack.png", "slike/WizardWalkUp1.png", "slike/WizardWalkUp2.png",
        "slike/WizardLeftSide.png", "slike/WizardWalkLeft1.png", "slike/WizardWalkLeft2.png"];

    document.addEventListener("mousemove", function(event) {
        let cursorX = event.clientX;
        let cursorY = event.clientY;
        const xDiff = cursorX - charX - 50;
        const yDiff = cursorY - charY - 50;
        const angle = Math.atan2(yDiff, xDiff) * 180 / Math.PI;
            if(angle < 45 && angle > -45){
                spremeniAnimacijo(3 + animationIndex % 3);
            }
        if(angle > 45 && angle < 135){
            spremeniAnimacijo(animationIndex % 3);
        }
        if(angle > 135 && angle < 180 || angle > -180 && angle < -135){
            spremeniAnimacijo( 9 + animationIndex % 3);
        }
        if(angle < -45 && angle > -135){
            spremeniAnimacijo(6 + animationIndex % 3);
        }
        console.log("Cursor location: " + cursorX + ", " + cursorY);
        //console.log(angle);
    });

    let animationIndex = 0; //for animation purposes(glej spodaj)
    let animationCooldown = 0;//change for faster change of animation
    characterImg.src = wizardAnimation[0];//start animation
    let charX = 1000; // start position of our character
    let charY = 500; //also start position

    //keys za gledanje kateri so pritisnjeni
    let keyA = false;
    let keyS = false;
    let keyD = false;
    let keyW = false;
    let intervalUpdate;     //variable za settanje intervala za update animacije in polozaja
    let updateP = false;    //spremenljivka, ki je true, ko je interval nastavljen in false, ko ni


//keydown funkcija
    document.addEventListener("keydown", function(event) {
        //console.log(event.key);
        //settanje intervala
        if(event.key === "a" || event.key === "d" || event.key === "s" || event.key === "w") {
            if(!updateP){
                intervalUpdate = setInterval(function() {
                    update(keyA, keyS, keyW, keyD);
                }, 20);
                updateP = true;
            }
            //console.log("keyA: " + keyA + ", keyS: " + keyS + ", keyW: " + keyW + ", keyD: " + keyD)// moves character with WASD
            if (event.key === "a") {
                if (!keyA) {
                    keyA = true;
                }
            }
            if (event.key === "d") {
                if (!keyD) {
                    keyD = true;
                }
            }
            if (event.key === "w") {
                if (!keyW) {
                    keyW = true;
                }
            }
            if (event.key === "s") {
                if (!keyS) {
                    keyS = true;
                }
            }
        }
        if (event.key === 'i') {
            $("#infoTab").show();
        }
        if (event.key === ' ') {
            let direction = getDirection(keyA, keyD, keyS, keyW);
            let image = new Missile(counter, fireball, "slike/WizardFireball", charY - 15, charX + 40, direction, getRotation(direction), "player");
            createImage(image);
        }
    });

//funkcija za keyup
    document.addEventListener("keyup", function(event) {
        if (event.key === 'i') {
            $("#infoTab").hide();
        }
        if (event.key === "a") {
                keyA = false;
        }
        if (event.key === "d") {
            keyD = false;
        }
        if (event.key === "w") {
            keyW = false;
        }
        if (event.key === "s") {
            keyS = false;
        }
        // Stops the movement correctly
        if(!keyA && !keyS && !keyW && !keyD){
            clearInterval(intervalUpdate);
            updateP = false;
            characterImg.src = wizardAnimation[0];
            animationCooldown = 0;
            animationIndex = 0;
        }
    });

    //funkcija update, ki glede na pritisnjene keye spreminja animacijo in pozicijo
    function update(keyA, keyS, keyW, keyD){
        let offset = 0;
        console.log("character log" + charX + ", " +  charY);
        animationCooldown++;
        if(animationCooldown === 5){
            animationCooldown = 0;
            animationIndex++;
        }
        if(keyS){
            if(keyA || keyD){
                charY += 3;
            }else {
                charY += 5;
            }
        }
        if(keyW){
            if(keyA || keyD){
                charY -= 3;
            }else {
                charY -= 5;
            }
            offset = 6;
        }
        if(keyD){
            if(keyS || keyW){
                charX += 3;
            }else {
                charX += 5;
            }
            offset = 3;
        }
        if(keyA){
            if(keyS || keyW){
                charX -= 3;
            }else {
                charX -= 5;
            }
            offset = 9;
        }
        spremeniPozicijo(charY, charX);
    }

    //funkcija ki spreminja pozicijo
    function spremeniPozicijo(top, left){
        characterImg.style.left = left + "px";
        characterImg.style.top = top + "px";
    }

    //funkcija ki characterju spreminja animacijo
    function spremeniAnimacijo(animacija){
        characterImg.src = wizardAnimation[animacija];
    }

    function getDirection(keyA, keyD, keyS, keyW){
        let direction = "";
        if(keyS){
            direction = "dol";
            if(keyA){
                direction = "ld";
            }
            if(keyD){
                direction = "dd";
            }
        }
        if(keyW){
            direction = "gor";
            if(keyA){
                direction = "lg";
            }
            if(keyD){
                direction = "dg";
            }
        }
        if(keyD){
            direction = "desno";
        }
        if(keyA){
            direction = "levo";
        }
        return direction;
    }

    function getRotation(direction){
        switch(direction){
            case "desno":
                return "rotate(0deg)";
            case "levo":
                return "rotate(180deg)";
            case "gor":
                return "rotate(90deg)";
            case "dol":
                return "rotate(270deg)";
            case "dd":
                return "rotate(315deg)";
            case "dg":
                return 45;
            case "lg":
                return 135;
            default:
                return 225;
        }
    }

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
}