///this project will tell you about whale migration patterns
var Fonts = new Array(2);
var wmap;
var wblue, hump, grey, north, south, clip;
var whales;
var title, body1, body2, body3;
var titlef, bodyf;

///takes a while to load images
function preload() {
  wmap = loadImage("data/map.jpg");
  clip = loadImage("data/clip.png")
 
  titlef = loadFont('data/font1.ttf');
  bodyf = loadFont('data/font2.ttf');


}

function setup() {
  createCanvas(1200, 800);
}

function draw() {
  ///all whale info below is from http://www.whaleroute.com/migrate/

  background(wmap);
  image(clip, 500, 550, clip.width / 10, clip.height / 10); ///southern right
  image(clip, 20, 300, clip.width / 10, clip.height / 10); //grey whale
  image(clip, 1100, 400, clip.width / 10, clip.height / 10); //humpback
  image(clip, 325, 400, clip.width / 10, clip.height / 10); ///northern right
  image(clip, 750, 650, clip.width / 10, clip.height / 10); ///blue whale
 
  ///info from http://www.whaleroute.com/migrate/

  //when a certain sprite is clicked
  //hot zones
  if ((mouseX > 20) && (mouseX < 75) && (mouseY > 300) && (mouseY < 350)) { ///grey whale
    //when cicked
    if (mouseIsPressed) {
      // a text box
      noLoop();
      fill(255);
      rect(20, 300, 300, 300);
      console.log("got here2")
      stroke(0);
      title = "Grey Whale";
      ///body1 = "dgxcf";
      textFont(titlef, 36);
      text(title, 40, 300, 70, 80); // Text wraps within text box

    }
  }

  /*if ((mouseX > 500) && (mouseX < 550) && (mouseY > 550) && (mouseY < 610)) {
    console.log("got here");
    //and if i click
    if (mouseIsPressed) {
      // a text box
      console.log("got here2");
      s = "The quick brown fox jumped over the lazy dog.";
      text(s, 20, 300, 70, 80); // Text wraps within text box
    }
  }

  if ((mouseX > 1100) && (mouseX < 1150) && (mouseY > 400) && (mouseY < 450)) {
    //and if i click
    if (mouseIsPressed) {
      // a text box
      console.log("got here2");
      s = "The quick brown fox jumped over the lazy dog.";
      text(s, 20, 300, 70, 80); // Text wraps within text box
    }
  }

  if ((mouseX > 325) && (mouseX < 375) && (mouseY > 400) && (mouseY < 450)) {
    console.log("got here");
    //and if i click
    if (mouseIsPressed) {
      // a text box
      console.log("got here2");
      title = "The quick brown fox jumped over the lazy dog.";
      
      text(s, 20, 300, 70, 80); // Text wraps within text box
    }
  }

  if ((mouseX > 750) && (mouseX < 800) && (mouseY > 650) && (mouseY < 700)) {
    console.log("got here");
    //and if i click
    if (mouseIsPressed) {
      // a text box
      console.log("got here2");
      s = "The quick brown fox jumped over the lazy dog.";
      text(s, 20, 300, 70, 80); // Text wraps within text box
    }
  }*/

}