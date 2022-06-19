let c1 = document.getElementById("colour1");
let c2 = document.getElementById("colour2");

let btn = document.getElementById("start-btn");

let colourDiv = document.getElementById("colours");

let colours = [];
let length = 9;

let hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

btn.addEventListener("click", function(){
    let colour1 = hexToRGB(c1.value);
    let colour2 = hexToRGB(c2.value);
    let reddiff = getDiff(colour1[0], colour2[0]);
    let greendiff = getDiff(colour1[1], colour2[1]);
    let bluediff = getDiff(colour1[2], colour2[2]);
    
    for(let i=0; i<=length; i++){
        let red = Math.round(colour1[0]+i*reddiff);
        let green = Math.round(colour1[1]+i*greendiff);
        let blue = Math.round(colour1[2]+i*bluediff);
        colours.push(`<p class="colour-box" style="background: rgb(${red},${green},${blue});">${rgbToHex(red, green, blue)}</p>`)
    }
    colourDiv.innerHTML = colours.join("");
    colours = [];
});

function getDiff(c1, c2){
    let num = c2-c1;
    return num/length;
}

function hexToRGB(c){
    c = String(c);
    let r = c.substring(1, 3);
    let g = c.substring(3, 5);
    let b = c.substring(5, 7);
    r = hexToDec(r);
    g = hexToDec(g);
    b = hexToDec(b);
    return [r, g, b];
}

function rgbToHex(r, g, b){
    return `#${decToHex(r)}${decToHex(g)}${decToHex(b)}`
}

function hexToDec(num){
    let sum = 0;
    for(let i=0; i<hex.length; i++){
        let current = hex[i];
        if(num.charAt(0) == current){
            sum += hex.indexOf(current) * 16;
        }
        if(num.charAt(1) == current){
            sum += hex.indexOf(current);
        }
    }
    return sum;
}

function decToHex(num){
    let sum = "";
    let first = Math.floor(num/16);
    let second = num%16;
    sum = hex[first] + hex[second];
    return sum;
}

function test(){
    btn.style.background = "#0000ff";
}