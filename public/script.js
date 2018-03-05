/*
var a = 100;
var b = 200;
var p = calcPer(a,b);

var s = calcSq(a,b);
console.log(p,s);
function calcPer(c,d){
   //write your code here
   return c+c+d+d
}
function calcSq(e,f){
   //write your code here
  return e*f
}

var c = [45,60,12,98,78,154,65];
var m = [15,98,45,33,78,98,100,56,98];
var s1 = sumArray(c);
var s2 = sumArray(m);
console.log(s1, s2);
function sumArray(a){
   //write your code here.
   var sum=0
   for(var i in a){
       sum+=a[i]
   }
   return sum

}

var c = [45,60,12,98,78,154,65];
var b = reverseArray(c);
console.log(b); //պիտի տպի 65,154,78,98,12,60,45
var t = ["php","javascript","html","css","mysql"];
var m = reverseArray(t);
console.log(m); //պիտի տպի mysql, css, html, javascript, php
function reverseArray(a){
     //write your code here
}


var matrix = [
   [0,1,0,2,2,0,0,0],
   [0,3,0,1,1,0,0,0],
   [0,2,0,1,0,0,1,3],
   [0,0,1,2,2,0,2,2],
   [0,0,1,0,0,0,2,0],
   [0,0,3,0,1,1,0,0]
];
for(var y =0; y<matrix.length; y++){
    for(var x =0; x<matrix[y].length;x++){
        console.log(matrix[x], [y])
        console.log("---")
    }
 
}

var matrix = [
   [0,1,0,2,2,0,0,0],
   [0,3,0,1,1,0,0,0],
   [0,2,0,1,0,0,1,3],
   [0,0,1,2,2,0,2,2],
   [0,0,1,0,0,0,2,0],
   [0,0,3,0,1,1,0,0]
];
for(var y = 0; y < matrix.length; y++){
   for(var x = 0; x < matrix[y].length; x++){
       console.log(matrix[y][x]);
   }
}

function setup() {
    createCanvas(500, 500);
    background('#acacac');
}
function draw() {
    fill("red")
    ellipse(50, 50, 80, 80);
    rect(10, 100, 150, 150);

}

function setup() {
    createCanvas(500, 500);
    background('#acacac');
}
function draw() {
fill(0,255,0);
    ellipse(50, 50, 80, 80);
    fill(255,0,0);
    rect(10, 100, 150, 150);
}

var matrix = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    function setup() {
    createCanvas(1000, 1000);
    background('#acacac');
}
function draw(){
    for(var x=0;x<matrix.length;x++)
    {
        for(var y=0;y<matrix[x].length;y++)
        {
            if(matrix[x][y]==1)
            {
                fill("black")
            }
            else
            {
                fill("white");
            }
            rect(y*20,x*20,20,20)
        }
    }

}

var matrix = [];
for(var i=0;i<10;i++)
{
    matrix.push([]);
    for(var j=0;j<20;j++)
    {
        matrix[i][j]=Math.floor(Math.random()*2);
    }
}
function setup() {
    createCanvas(1000, 1000);
    background('#acacac');
}
function draw(){
    for(var x=0;x<matrix.length;x++)
    {
        for(var y=0;y<matrix[x].length;y++)
        {
            if(matrix[x][y]==1)
            {
                fill("black")
            }
            else
            {
                fill("white");
            }
            rect(y*20,x*20,20,20)
        }
    }

}

function setup() {
    createCanvas(1000, 1000);
    background('#acacac');
}

function draw(){
    var y = random(1000);
    var x = random(1000);
    ellipse(x, y, 80, 80);

}

var side = 80; 
function setup() {
    createCanvas(1000, 1000);
    background('affff00')
    for (var y = 0; y < 8; y++) {
        for (var x = 0; x < 8; x++) {
            if (x == y) {
                fill("#00ff00")
            }
            else {
                fill("#acacac")
            }
            rect(x * side, y * side, side, side)
        }
    }
}

var side = 80; 
function setup() {
    createCanvas(1000, 1000);
    background('affff00')
    for (var y = 0; y < 8; y++) {
        for (var x = 0; x < 8; x++) {
            if (x > y) {
                fill("#00ff00")
            }
            else {
                fill("#acacac")
            }
            rect(x * side, y * side, side, side)
        }
    }
}
սխալ
var side = 80; 
function setup() {
    createCanvas(1000, 1000);
    background('affff00')
    for (var y = 8; y > 0 ; y--) {
        for (var x = 8; x > 0; x--) {
            if (x == y) {
                fill("#00ff00")
            }
            else {
                fill("#acacac")
            }
            rect(x * side, y * side, side, side)
        }
    }
}
//
var side = 80; 
function setup() {
    createCanvas(1000, 1000);
    background('affff00')
    for (var y = 0; y < 8; y++) {
        for (var x = 0; x < 8; x++) {
            if (x > y-1) {
                fill("#00ff00")
            }
            else {
                fill("#acacac")
            }
            rect(x * side, y * side, side, side)
        }
    }
}

var side = 80; 
function setup() {
    createCanvas(1000, 1000);
    background('affff00')
    for (var y = 0; y < 8 ; y++) {
        for (var x = 0; x < 8; x++) {
            if (x + y == 7)  {
                fill("#00ff00")
            }
            else {
                fill("#acacac")
            }
            rect(x * side, y * side, side, side)
        }
    }
}

var side = 80; 
function setup() {
    createCanvas(1000, 1000);
    background('affff00')
    for (var y = 0; y < 8 ; y++) {
        for (var x = 0; x < 8; x++) {
            if ((y+x+1)%2==1)  {
                fill("#00ff00")
            }
            else {
                fill("#acacac")
            }
            rect(x * side, y * side, side, side)
        }
    }
}
*/
// var matrix = [];
// for(var i=0;i<20;i++)
// {
//     matrix.push([]);
//     for(var j=0;j<20;j++)
//     {
//         matrix[i][j]=Math.floor(Math.random()*2);
//     }
// }

var matrix = 
[
    [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3],
    [1,0,0,2,3,0,1,1,1,1,1,1,1,1,2,2,2,3,3,0,0,1,1,3],
    [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,4,3],
    [1,0,0,2,3,0,1,1,1,1,1,1,1,1,2,2,2,3,3,0,5,1,1,3],
    [1,3,0,2,3,0,1,1,1,1,1,1,1,1,2,2,2,3,3,0,5,1,1,3],
    [1,0,0,2,3,0,1,1,1,1,1,1,1,1,2,2,2,3,3,0,5,1,1,3],
    [1,0,0,2,3,0,1,1,1,1,1,1,1,1,2,2,2,3,3,0,5,1,1,3],
    [1,0,0,2,3,0,1,1,1,1,1,1,1,1,2,2,2,3,3,0,5,1,1,3],
    [1,0,0,2,3,0,1,1,1,1,1,1,1,1,2,2,4,3,3,0,5,1,1,3],
    [1,0,0,2,3,0,1,1,1,1,4,4,4,5,2,2,2,3,3,0,5,1,1,3],
    [1,0,0,2,3,0,1,1,1,1,1,1,1,1,2,2,2,3,3,0,5,1,1,3],
    [1,0,0,2,3,0,1,1,1,1,1,1,1,1,2,2,2,3,3,0,5,1,1,3]
];

var grassArr = []
var side = 40;
var xotaker = [];
var gishatich=[];
var barselo= []
var xaker= []
function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y, 1))
            }
            else if (matrix[y][x] == 2) {
                xotaker.push(new Xotaker(x, y, 2))
            }
            else if(matrix[y][x] == 3)
            {
                gishatich.push(new Gishatich(x,y,3))
            }
            else if(matrix[y][x] == 4)
            {
                barselo.push(new Barsegh(x,y,4))
            }
            else if(matrix[y][x] == 5)
            {
                xaker.push(new Haker(x,y,5))
            }
        }
    }
}


function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            } 
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
        }
    }

    for (var i in grassArr) {
        
        grassArr[i].bazmanal();
    }


    for (var i in xotaker) {
        xotaker[i].utel();
        xotaker[i].bazmanal()
        xotaker[i].mahanal(i)
    }
    for (var i in gishatich) {
        gishatich[i].utel();
        gishatich[i].bazmanal()
        gishatich[i].mahanal(i)
    }

for (var i in barselo) {
        barselo[i].utel();
        barselo[i].bazmanal()
        barselo[i].mahanal(i)
    }
    //xotaker.utel();
for (var i in xaker) {
        xaker[i].utel();
        xaker[i].bazmanal()
        xaker[i].mahanal(i)
    }
}


