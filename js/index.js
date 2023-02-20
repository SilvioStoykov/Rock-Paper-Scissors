const button = document.querySelector("button");
const jet = document.getElementById("jet");
const tank = document.getElementById("tank");
const nuke = document.getElementById("nuke");
const scoreLeft = document.getElementById("left");
const scoreRight = document.getElementById("right");
let leftWin = 0;
let rightWin = 0;




/*The chosenWeapon() function waits for the user to press any of the three buttons, describing the different weapons that can be used*/

    jet.addEventListener("click", function(){
             const playerMove = "jet";
             const aiMove = generateCPUWeapon();
             updateScore(playerMove, aiMove);
        });
    tank.addEventListener("click", function(){
        const playerMove = "tank";
        const aiMove = generateCPUWeapon();
        updateScore(playerMove, aiMove);
    });
    nuke.addEventListener("click", function(){
        const playerMove = "nuke";
        const aiMove = generateCPUWeapon();
        updateScore(playerMove, aiMove);
    });
    generateCPUWeapon();
    updateScore();




/*The generateCPUWeapon() function generates a randomized weapon for one of the three available possibilities*/
function generateCPUWeapon(){
    //Generating a random code between 1-3, corresponding to a certain weapon
    let weaponRandomizedCode = Math.floor((Math.random() * 3) + 1);
    switch(weaponRandomizedCode){
        case 1:
            cpuWeapon = "tank";
            break;
        case 2:
            cpuWeapon = "jet";
            break;
        case 3:
            cpuWeapon = "nuke";
            break;
    }
    return cpuWeapon;
}



/*The updateScore() function updates the scoreboard based on a table of comparison*/
function updateScore(userWeapon, aiWeapon){
    if(userWeapon === "tank" && cpuWeapon === "jet"){
            leftWin++;
            scoreLeft.innerText = leftWin;
    }
    else if(userWeapon === "jet" && cpuWeapon === "nuke"){
            leftWin++;
            scoreLeft.innerText = leftWin;
    }
    else if(userWeapon === "nuke" && cpuWeapon === "tank"){
            leftWin++;
            scoreLeft.innerText = leftWin;
    }
    else if(userWeapon === cpuWeapon){
        scoreRight;
        scoreLeft;
    }
    else{
        rightWin++;
        scoreRight.innerText = rightWin;
    }
}   


