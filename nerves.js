console.log("nerves");
let x = 11;
let c = x+'s';
console.log(c);
display();

function grow(){
    x++;
    display();
}

function shrink(){
    x--;
    display();
}

function display(){
    let c = x+'s';
    console.log(c);
    console.log("displaying update");
    document.getElementById("top").innerHTML=`
    rotates every ${x} seconds
    `
    document.getElementById("bottom").innerHTML=`
    rotates every ${x} seconds
    `
    document.querySelector(':root').style.setProperty('--speed', c);
}