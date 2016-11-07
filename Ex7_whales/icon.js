var title, body1;
var titlef, bodyf;
var margin = 100;


var Icon = function(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;


  this.display = function() { ///all little whale icons are displayed here, passing coordinates in sketch
    image(clip, this.x, this.y, clip.width / 10, clip.height / 10);

  }

  this.update = function() {
    //when a certain sprite is clicked
    //hot zones
    /// all info from http://www.whaleroute.com/migrate/

    if ((mouseX > 20) && (mouseX < 75) && (mouseY > 300) && (mouseY < 350)) { ///grey whale
      //when cicked
      if (mouseIsPressed) {
        // a text box
        push();
        translate(0, -300);
        strokeWeight(0);
        fill(255, 50);
        rect(20 + margin, 300, 600, 300, 45);
        /// console.log("got here2");
        strokeWeight(0);
        title = "Grey Whale";
        body1 = "During the winter and spring, they are found in their coastal mating and calving grounds. These lie mainly along the southern coasts of Africa (Hermanus, South Africa is a particularly good place to see them), South America (around Chile & Argentina - Peninsula Valdes is a well-known habitat) and in the Great Australian Bight, as well as along the western coast of New Zealand.\nLegend: \n     Winter. \n     Summer"
        fill(0);
        textFont(titlef, 36);
        text(title, 40 + margin, 300, 300, 300);
        textFont(bodyf, 15);
        text(body1, 40 + margin, 300 + margin / 2, 250, 300); // Text wraps within text box
        image(picgrey, 300 + margin, 300 + margin / 2, picgrey.width / 2, picgrey.height / 2); //grey whale    

        pop();

      }
    }

    if ((mouseX > 500) && (mouseX < 550) && (mouseY > 550) && (mouseY < 610)) { ///blue whale
      console.log("got here");
      //and if i click
      if (mouseIsPressed) {
        // a text box
        push();
        translate(0, -300);
        strokeWeight(0);
        fill(255, 50);
        rect(500 + margin, 550, 600, 400, 45);
        console.log("got here3")
        strokeWeight(0);
        title = "Blue Whale";
        body1 = "Most blues are migratory and travel thousands of kilometres annually between their winter breeding grounds in warmer, low latitude waters around the tropics, where they mate and give birth, and their summer feeding grounds in the cooler, high latitude waters of either the Arctic and Antarctic, where they feed for 3-4 months on the rich supply of krill and other food which occur in huge numbers in polar waters.\nLegend: \n     Winter. \n     Summer"
        fill(0);
        textFont(titlef, 36);
        text(title, 520 + margin, 550, 550, 550);
        textFont(bodyf, 15);
        text(body1, 520 + margin, 550 + margin / 2, 250, 300); // Text wraps within text box
        image(picblue, 800 + margin, 520 + margin / 2, picblue.width / 3, picblue.height / 2); //blue whale pic

        pop();
      }
    }

    if ((mouseX > 1100) && (mouseX < 1150) && (mouseY > 400) && (mouseY < 450)) { ///humpback whale
      //and if i click
      if (mouseIsPressed) {
        // a text box
        push();
        translate(0, -300);
        strokeWeight(0);
        fill(255, 50);
        rect(300, 400, 700, 550, 45);
        console.log("got here3")
        strokeWeight(0);
        title = "Humpback whale";
        body1 = "Most humpback whales make mammoth journeys every year between their feeding and breeding sites. Because seasons are reversed either side of the equator, Northern and Southern Hemisphere populations of humpbacks probably never meet; those in the north travel towards their breeding grounds in tropical waters as those in the south are travelling towards the pole to feed, and vice versa.\nLegend: \n     Winter. \n     Summer"
        fill(0);
        textFont(titlef, 36);
        text(title, 220 + margin, 400, 550, 550);
        textFont(bodyf, 15);
        text(body1, 220 + margin, 400 + margin / 2, 350, 400); // Text wraps within text box
        image(pichump, 550 + margin, 380 + margin / 2, pichump.width / 3, pichump.height / 3);
        pop();
      }
    }

    if ((mouseX > 325) && (mouseX < 375) && (mouseY > 400) && (mouseY < 450)) { ///northern right whales
      console.log("got here");
      //and if i click
      if (mouseIsPressed) {
        // a text box
        push();
        translate(0, -300);
        strokeWeight(0);
        fill(255, 50);
        rect(325 + margin, 400, 700, 400, 45);
        console.log("got here3")
        strokeWeight(0);
        title = "Northern Right whale";
        body1 = "They are not known to travel the huge distances that species such as humpbacks and grays do. Nonetheless, some make annual migrations between winter breeding and calving grounds in warmer southern waters, and summer feeding grounds in cooler waters. \nLegend: \n     Winter. \n     Summer";
        fill(0);
        textFont(titlef, 36);
        text(title, 350 + margin, 400, 550, 550);
        textFont(bodyf, 15);
        text(body1, 350 + margin, 400 + margin / 2, 350, 300); // Text wraps within text box
        image(picnorth, 750 + margin, 350 + margin / 2, picnorth.width / 2, picnorth.height / 2); //north whale pic 

        pop();
      }
    }

    if ((mouseX > 750) && (mouseX < 800) && (mouseY > 650) && (mouseY < 700)) { ////southern right whales
      console.log("got here");
      //and if i click
      if (mouseIsPressed) {
        // a text box
        push();
        translate(0, -300);
        strokeWeight(0);
        fill(255, 50);
        rect(500 + margin, 450, 600, 300, 45);
        console.log("got here3")
        strokeWeight(0);
        title = "Southern Right Whale";
        body1 = "During the winter and spring, they are found in their coastal mating and calving grounds. These lie mainly along the southern coasts of Africa (Hermanus, South Africa is a particularly good place to see them), South America (around Chile & Argentina - Peninsula Valdes is a well-known habitat) and in the Great Australian Bight, as well as along the western coast of New Zealand.\nLegend: \n     Winter. \n     Summer";

        fill(0);
        textFont(titlef, 36);
        text(title, 520 + margin, 450, 550, 550);
        textFont(bodyf, 15);
        text(body1, 520 + margin, 450 + margin / 2, 350, 300); // Text wraps within text box
        image(picsouth, 900 + margin, 475, picsouth.width / 2, picsouth.height / 2); //grey whale    

        pop();
      }
    }
  }
}