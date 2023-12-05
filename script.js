// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

onReady()

// ! State
let fungusHP = 100;
let apAmount = 100;
console.log("fungusHP:",fungusHP, "apAmount:",apAmount);
// ! Event 

// ! Render

function onAttack (event){
    if (class{"attack-btn arcane-scepter"}){
        fungusHP = fungusHP - 14
        apAmount = apAmount - 12
        console.log("fungusHp is", fungusHP, "apAmount is", apAmount);
    }
    else if (classList="attack-btn entangle"){
        fungusHP = fungusHP - 9
        apAmount = apAmount - 23
        console.log("fungusHp is", fungusHP, "apAmount is", apAmount);
    }
    else if (classList="attack-btn dragon-blade"){
        fungusHP = fungusHP - 47
        apAmount = apAmount - 38
        console.log("fungusHp is", fungusHP, "apAmount is", apAmount);
    }
    else if (classList="attack-btn star-fire"){
        fungusHP = fungusHP - 25
        apAmount = apAmount - 33
        console.log("fungusHp is", fungusHP, "apAmount is", apAmount);
    }
}

