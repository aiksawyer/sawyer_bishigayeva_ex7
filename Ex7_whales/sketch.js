///this project will tell you about whale migration patterns
var Fonts = new Array(2);
var wmap;
var wblue, hump, grey, north, south, clip;
var intro;

///takes a while to load images
function preload() {
  wmap = loadImage("data/map.jpg");
  clip = loadImage("data/clip.png");
  picgrey = loadImage("data/grey.jpg");
  picblue = loadImage("data/blue.jpg");
  picnorth = loadImage("data/norhtern_right.jpg");
  picsouth = loadImage("data/southern_right.jpg");
  pichump = loadImage("data/humpback.jpg");
  titlef = loadFont('data/font1.ttf');
  bodyf = loadFont('data/font2.ttf');


}

function setup() {
  createCanvas(1200, 800);
  south = new Icon(500, 550);  //southern right whale
  grey = new Icon(20,300);   ///grey whale
  hump = new Icon(1100, 400);   //humpback whale
  north = new Icon(325,400);   ///northern right whale
  wblue = new Icon(750,650);   ///blue whale
  intro = "Click on a whale icon to learn about whale migration!";
  textFont(titlef, 45);
  text(intro, 0+100, 100, width-100, 50);
}

function draw() {
  ///all whale info below is from http://www.whaleroute.com/migrate/



  background(wmap);
  stroke(250);
  text(intro, 0+50, 50, width-50, 50);
  south.display();
  south.update();
  north.display();
  north.update();
  hump.display();
  hump.update();
  wblue.display();
  wblue.update();
  grey.display();
  grey.update();

}