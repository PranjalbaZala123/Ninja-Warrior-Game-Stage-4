//create Variables
var Bg;
var BgImg;
var gameName;
var gameNameImg;
var story;
var storyImg;
var Ninja;
var NinjaImg;
var rules;
var rulesImg;
var Start;
var StartImg;
var gameOver;
var gameState = "start";
var Bg1;
var Bg1Img;
var Bg2;
var Bg2Img;
var Ninja1;
var NinjaIdle;
var NinjaJump;
var NinjaRun;
var InvisibleGround;
var obstaclesGroup;
var obstacle1;
var zombie1RunImg;
var zombie1Run;
var zombie1DieImg;
var zombie1Die;
var zombies1Group;
var zombies2Group;
var zombies3group;
var NinjaAttack1Img;
var NinjaAttack2img;
var NinjaAttack1;
var NinjaAttack2;
var zombie2Run;
var zombie2RunImg;
var zombie2Die;
var zombie2DieImg;
var zombie3Run;
var zombie3RunImg;
var batsGroup;
var bats;
var batsImg;
var weapon;
var weaponImg;
var heart1;
var heart1Img;
var heart2;
var heart2Img;
var heart3;
var heart3Img;
var weaponsGroup;
var score;
var 

function preload(){

  // load all images
  BgImg = loadImage("images/Background(1st).jpeg");
  gameNameImg = loadImage("images/GameName.png");
  storyImg = loadImage("images/GameStory.png");
  rulesImg = loadImage("images/rules.png");
  NinjaImg = loadImage("images/NinjaImg.png");
  StartImg = loadImage("images/Start.png");
  Bg1Img = loadImage("images/Background2.png");

  obstacle1 = loadImage("images/Obstacle1.png");
  
  
  NinjaRun = loadAnimation("images/Ninja11Run.png", "images/Ninja12Run.png", "images/Ninja13Run.png", 
                            "images/Ninja14Run.png", "images/Ninja15run.png", "images/Ninja16Run.png");

  NinjaIdle = loadAnimation("images/Ninja1Id.png", "images/Ninja2Id.png", "images/Ninja3Id.png", "images/Ninja4Id.png");

  NinjaJump = loadAnimation("images/Ninja20Jump.png", "images/Ninja21Jump.png", "images/Ninja22Jump.png",
                             "images/Ninja23Jump.png", "images/Ninja24Jump.png", "images/Ninja25Jump.png",
                              "images/Ninja26Jump.png", "images/Ninja27Jump.png" );


  NinjaAttack1Img = loadAnimation("images/NinjaAttack12SlashExtend.png", "images/NinjaAttack13SlashExtend.png",
                                "images/NinjaAttack14SlashExtend.png", "images/NinjaAttack15SlashExtend.png", 
                                 "images/NinjaAttack16SlashExtend.png", "images/NinjaAttack17SlashExtend.png", 
                                  "images/NinjaAttack18SlashExtend.png", "images/NinjaAttack19SlashExtend.png"); 
                                  
  NinjaAttack2Img = loadAnimation("images/NinjaAttack20SlashMidAir.png", "images/NinjaAttack21SlashMidAir.png", 
                               "images/NinjaAttack22SlashMidAir.png", "images/NinjaAttack23SlashMidAir.png", 
                                 "images/NinjaAttack24SlashMidAir.png", "images/NinjaAttack25SlashMidAir.png");                               

  zombie1RunImg = loadAnimation("images/Zombie1Run.png", "images/Zombie2Run.png", "images/Zombie3Run.png", 
                                "images/Zombie4Run.png", "images/Zombie5Run.png", "images/Zombie6Run.png", 
                                 "images/Zombie7Run.png");
  
  zombie1DieImg = loadAnimation("images/Zombie12Die.png", "images/Zombie13Die.png", "images/Zombie14Die.png", 
                                "images/Zombie15Die.png", "images/Zombie16Die.png", "images/Zombie17Die.png", 
                                 "images/Zombie18Die.png", "images/Zombie19Die.png");

  zombie2RunImg = loadAnimation("images/Zombie1Walk.png", "images/Zombie2Walk.png", "images/Zombie3Walk.png",
                                 "images/Zombie4Walk.png", "images/Zombie5Walk.png", "images/Zombie6Walk.png", 
                                  "images/Zombie7Walk.png", "images/Zombie8Walk.png");
                                  
  zombie2DieImg = loadAnimation("images/Zombie9Died.png", "images/Zombie10Died.png", "images/Zombie11Died.png", 
                                 "images/Zombie12Died.png", "images/Zombie13Died.png", "images/Zombie14Died.png");                               
  
  zombie3RunImg = loadAnimation("images/ZombieWalk1.png", "images/ZombieWalk2.png", "images/ZombieWalk3.png", 
                                 "images/ZombieWalk4.png", "images/ZombieWalk5.png", "images/ZombieWalk6.png", 
                                  "images/ZombieWalk7.png", "images/ZombieWalk8.png");
                                  
  batsImg = loadAnimation("images/Bat1.png", "images/Bat2.png", "images/Bat5.png", "images/Bat6.png", 
                           "images/Bat7.png", "images/Bat8.png", "images/Bat9.png", "images/Bat10.png", 
                            "images/Bat11.png", "images/Bat12.png", "images/Bat13.png", "images/Bat14.png", 
                             "images/Bat15.png", "images/Bat16.png");                               
                                  
  weaponImg = loadImage("images/Weapon.png");

  heart1Img = loadImage("images/Heart1.png");

  heart2Img = loadImage("images/Heart2.png");

  heart3Img = loadImage("images/Heart3.png");


                                   
}


function setup() {
  createCanvas(displayWidth,displayHeight);

  //create all sprites
  Bg = createSprite( displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  Bg.addImage(BgImg);
  Bg.scale = 1.6;

  gameName = createSprite(650,50,10,10);
  gameName.addImage(gameNameImg);

  story = createSprite(250,160,10,10);
  story.addImage(storyImg);

  rules = createSprite(280,360,10,10);
  rules.addImage(rulesImg);

  Ninja = createSprite(1085,328,10,10);
  Ninja.addImage(NinjaImg);
  Ninja.scale = 0.80;

  Start = createSprite(700,400,10,10);
  Start.addImage(StartImg);

  Bg1 = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  Bg1.addImage(Bg1Img);
  Bg1.scale = 3;


  
  InvisibleGround = createSprite(displayWidth/2,displayHeight/2 +280,displayWidth,10);

   Ninja1 = createSprite(displayWidth/2-500, displayHeight/2+200, 10, 10);
   Ninja1.addAnimation("running", NinjaRun);
   Ninja1.scale = 2.5;
   
   Ninja1.addAnimation("jump", NinjaJump);


   NinjaAttack1 = createSprite(displayWidth/2-500, displayHeight/2+190, 10, 10);
   NinjaAttack1.addAnimation("NinjaAttack1", NinjaAttack1Img)
   NinjaAttack1.scale = 2.5;
   NinjaAttack1.visible = false;

   NinjaAttack2 = createSprite(displayWidth/2-500, displayHeight/2+190, 10, 10);
   NinjaAttack2.addAnimation("NinjaAttack2", NinjaAttack2Img)
   NinjaAttack2.scale = 2.5;
   NinjaAttack2.visible = false;

   heart1 = createSprite(1100,50,10,10);
   heart1.addImage(heart1Img);
   heart1.scale = 3.5;

   heart2 = createSprite(1160,50,10,10);
   heart2.addImage(heart2Img);
   heart2.scale = 3.5;

   heart3 = createSprite(1220,50,10,10);
   heart3.addImage(heart3Img);
   heart3.scale = 3.5;



   //create Obstacle Group
   obstaclesGroup = createGroup();

   //create Zombies Group 
   zombies1Group = createGroup();
   zombies2Group = createGroup();
   zombies3group = createGroup();

   //create Bats Group
   batsGroup = createGroup();

   //create weapons Group
   weaponsGroup = createGroup();

   score = 0;

}

function draw() {

  //Start State
  if(gameState === "start"){
     Bg.visible = true;
     gameName.visible = true;
     story.visible = true;
     rules.visible = true;
     Ninja.visible = true;
     Start.visible = true;
     Bg1.visible = false;
     Ninja1.visible = false;
     InvisibleGround.visible = false;
     heart1.visible = false;
     heart2.visible = false;
     heart3.visible = false;
     zombies1Group.setVisibleEach(false);
     zombies2Group.setVisibleEach(false);
     zombies3group.setVisibleEach(false);
     NinjaAttack1.visible = false;
     NinjaAttack2.visible = false;
    

     if(mousePressedOver(Start)){
       gameState = "play";
     }
  
  }

  //Play State
   if(gameState === "play"){
    Bg.visible = false;
    gameName.visible = false;
    story.visible = false;
    rules.visible = false;
    Ninja.visible = false;
    Start.visible = false;
    Bg1.visible = true;
    Bg1.velocityX = -5;
    Ninja1.visible = true;
    heart1.visible = true;
    heart2.visible = true;
    heart3.visible = true;
    zombies1Group.setVisibleEach(true);
    zombies2Group.setVisibleEach(true);
    zombies3group.setVisibleEach(true);
    NinjaAttack1.visible = true;
    NinjaAttack2.visible = true;

  
  

    if(Bg1.x < 0){
       Bg1.x = Bg1.width/2;
    }

     if(keyWentDown("space")){
       Ninja1.changeAnimation("jump", NinjaJump);
       Ninja1.velocityY = -10;
     }

     if(keyWentUp("space")){
       Ninja1.changeAnimation("running", NinjaRun);
     }

//     if(keyWentDown("w")){
//     Ninja1.changeAnimation("Ninja1", NinjaAttack1);
//       Ninja1.velocityY = -10;
//     }
//
//     if(keyWentDown("a")){
//       Ninja1.changeAnimation("Ninja2", NinjaAttack2);
//       Ninja1.velocityY = -10;
//     }
//    
        if(keyWentDown("s")){
          NinjaAttack1.changeAnimation("NinjaAttack1", NinjaAttack1);
         // NinjaAttack1.velocityY = -10;
          NinjaAttack1.visible = true;
          Ninja1.visible = false;
        }

      if(keyWentDown("d")){
         NinjaAttack2.changeAnimation("NinjaAttack2", NinjaAttack2);
         //NinjaAttack2.velocityY = -10;
         NinjaAttack2.visible = true;
     }

//     if(keyWentUp("w")){
//      Ninja1.changeAnimation("running", NinjaRun);
//    }
//
//    if(keyWentUp("a")){
//      Ninja1.changeAnimation("running", NinjaRun);
//    }
//
      if(keyWentUp("s")){
       Ninja1.changeAnimation("running", NinjaRun);
       NinjaAttack1.visible = false;
      }

      if(keyWentUp("d")){
       Ninja1.changeAnimation("running", NinjaRun);
       NinjaAttack2.visible = false;
     }



     Ninja1.collide(InvisibleGround);
     Ninja1.velocityY = Ninja1.velocityY + 0.5;


       
    //spawn bats on the sky
    spawnBats();

    //spawn weapon
    spawnWeapon();

 // spawn  zombies and obstacles on the ground
      var ran = Math.round(random(1,4));
    if(frameCount % 300 == 0){
     if(ran == 1){
       spawnZombies1();
     }
     else if(ran == 2){
      spawnZombies2();
     }
     else if(ran == 3) {
       spawnZombies3();
     }
     else{
       spawnObstacles();
     }
    }

  }

  

  drawSprites();

  //displaying score
  textSize(40);
  fill("black")

  text("Score: "+ score, 100,50);
  
  }


function spawnObstacles(){
    var obstacle = createSprite(displayWidth,displayHeight/2 + 250,10,10);
    obstacle.addImage(obstacle1);
     
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 2;
     obstacle.lifetime = 200;
     obstacle.velocityX = -10;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
  }




function spawnZombies1(){
  var zombie1Run = createSprite(displayWidth,displayHeight/2 + 195,10,10);
    zombie1Run.addAnimation("Zombie1Run", zombie1RunImg);
    zombie1Run.addAnimation("Zombie1Die", zombie1DieImg);

    //assign scale and lifetime to the zombie
    zombie1Run.scale = 2.5;
    zombie1Run.lifetime = 200;
    zombie1Run.velocityX = -10;


    //add each zombie to the group
     zombies1Group.add(zombie1Run);


    }


function spawnZombies2(){
    var zombie2Run = createSprite(displayWidth,displayHeight/2 + 195,10,10);
    zombie2Run.addAnimation("Zombie2Run", zombie2RunImg);

    //assign scale and lifetime to the zombie
    zombie2Run.scale = 2.5;
    zombie2Run.lifetime = 200;
    zombie2Run.velocityX = -10;


    //add each zombie to the group
    zombies2Group.add(zombie2Run);

 
  }



function spawnZombies3(){
    var zombie3Run = createSprite(displayWidth,displayHeight/2 + 195,10,10);
    zombie3Run.addAnimation("Zombie3Run", zombie3RunImg);

    //assign scale and lifetime to the zombie
    zombie3Run.scale = 2.5;
    zombie3Run.lifetime = 200;
    zombie3Run.velocityX = -8;


    //add each zombie to the group
    zombies3group.add(zombie3Run);
  }


function spawnBats(){
  if(frameCount % 600 === 0){
   var bats = createSprite(displayWidth/2 - 150,displayHeight/2 - 400,10,10);
   bats.addAnimation("bats", batsImg);

    //assign scale and lifetime to the bats
    bats.scale = 1;
    bats.lifetime = 200;
    bats.velocityX = -5;
    bats.velocityY = 10;

    //add each bat to the group
    batsGroup.add(bats);
  }
}

function spawnWeapon(){
	if(frameCount%200 === 0){
	    
      weapon = createSprite(width-100,height-500,10,10);
			weapon.addImage(weaponImg);

      //assign scale and lifetime to the weopon
			weapon.velocityX = -4;
			weapon.lifetime = 1000;
      weapon.scale = 5;

      //add each weopon to the group
			weaponsGroup.add(weapon);
		}
	}








