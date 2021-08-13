var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var sofia = createSprite(20, 25, 20, 20);
sofia.shapeColor = "orange";

var wall1 = createSprite(10, 70, 100, 20);
var wall2 = createSprite(140, 35, 20, 120);
var wall3 = createSprite(190, 30, 100, 20);
var wall4 = createSprite(90, 135, 100, 20);
var wall5 = createSprite(195, 155, 20, 120);
var wall6 = createSprite(130, 250, 100, 20);
var wall7 = createSprite(10, 285, 50, 20);
var wall8 = createSprite(45, 285, 20, 100);
var wall9 = createSprite(23, 375, 20, 85);
var wall10 = createSprite(90, 330, 20, 100);
var wall11 = createSprite(185, 325, 95, 20);
var wall12 = createSprite(223, 265, 20, 100);
var wall13 = createSprite(185, 375, 20, 85);
var wall14 = createSprite(260, 385, 85, 20);
var wall15 = createSprite(335, 375, 20, 90);
var wall16 = createSprite(350, 300, 100, 20);
var wall17 = createSprite(290, 300, 20, 100);
var wall18 = createSprite(340, 215, 120, 20);
var wall19 = createSprite(280, 70, 20, 100);
var wall20 = createSprite(325, 150, 100, 20);
var wall21 = createSprite(340, 75, 85, 20);
var cup = createSprite(390, 370, 15, 70);
cup.shapeColor = "yellow";

var gameState="start";
function draw() {
  
  background("220");
  
  sofia.velocityX=0;
  sofia.velocityY=0;
  
  drawSprites();
  createEdgeSprites();
  
  sofia.bounceOff(edges);
  sofia.bounceOff(wall1);
  sofia.bounceOff(wall2);
  sofia.bounceOff(wall3);
  sofia.bounceOff(wall4);
  sofia.bounceOff(wall5);
  sofia.bounceOff(wall6);
  sofia.bounceOff(wall7);
  sofia.bounceOff(wall8);
  sofia.bounceOff(wall9);
  sofia.bounceOff(wall10);
  sofia.bounceOff(wall11);
  sofia.bounceOff(wall12);
  sofia.bounceOff(wall13);
  sofia.bounceOff(wall14);
  sofia.bounceOff(wall15);
  sofia.bounceOff(wall16);
  sofia.bounceOff(wall17);
  sofia.bounceOff(wall18);
  sofia.bounceOff(wall19);
  sofia.bounceOff(wall20);
  sofia.bounceOff(wall21);
  
  if (keyDown("up")) {
      sofia.velocityX = 0;
      sofia.velocityY = -4;
    }
  if (keyDown("down")) {
      sofia.velocityX = 0;
      sofia.velocityY = 4;
    }
  if (keyDown("right")) {
      sofia.x = sofia.x+4;
    }
  if (keyDown("left")) {
      sofia.x = sofia.x-4;
    }
  if(sofia.isTouching(cup)){
   gameState="win";
  }
  if (gameState=="win") {
    background("pink");
    textSize(40);
    stroke("red");
    text("You Win", 200,200);
  }
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
