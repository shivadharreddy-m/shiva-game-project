var database;
var form;
var user;
var peopleCount = 0;
var work;
var workImg;
var curbImg;
var curb;
var covid;

function preload() {
     workImg = loadImage("images/432.jpg");
     curbImg = loadImage("images/12.jpeg");
     covidImg = loadImage("images/123.jpg");
}

function setup(){
    createCanvas(1500,1200);
  //  var database = firebase.database();
    form = new Form;
    form.display();
    User = new UserData;
    //User.getCount();

    work = createSprite(1200,150,100,100);
    work.addImage(workImg);
    work.scale = 0.7;

    curb = createSprite(250,150,1400,1200);
    curb.addImage(curbImg);
    work.scale = 0.7;

    covid = createSprite(1000,600,1500,1200);
    covid.addImage(covidImg);
    covid.scale = 0.7;
}

function draw(){
    background("white");
    drawSprites();
}