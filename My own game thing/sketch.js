var door
var door2
var door3
var door4
var lava
var ShyGuy
var TickleMonster
var ToxicLizzard
var spriteObject
var door1
var doorTwo
var doorThree
var doorFour
var MinecraftLava
var UglyGuyThing
var SmallCuteCookieThingy
var SeaweadLizzardBoi


function preload(){
    door=loadImage("Door.jpg")
    lava=loadImage("MinecraftLavaNoize.jpg")
    ShyGuy=loadImage("SCP096.jpg")
    TickleMonster=loadImage("SCP999.png")
    ToxicLizzard=loadImage("SCP682.jpg")
}

function setup(){
    createCanvas(500,500)
    MinecraftLava=createSprite(400,250)
    MinecraftLava.addImage("lava",lava)
    
    UglyGuyThing=createSprite(200,250)
    UglyGuyThing.addImage("ShyGuy",ShyGuy)

    SmallCuteCookieThing=createSprite(300,250)
    SmallCuteCookieThing.addImage("TickleMonster",TickleMonster)

    SeaweadLizzardBoi=createSprite(100,250)
    SeaweadLizzardBoi.addImage("ToxicLizzard",ToxicLizzard)
    
    door1=createSprite(100,250)
    door1.addImage("door",door)

    doorTwo=createSprite(200,250)
    doorTwo.addImage("door2",door)

    doorThree=createSprite(300,250)
    doorThree.addImage("door3",door)

    doorFour=createSprite(400,250)
    doorFour.addImage("door4",door)

    door1.scale=0.4
    doorTwo.scale=0.4
    doorThree.scale=0.4
    doorFour.scale=0.4
    MinecraftLava.scale=0.4
    UglyGuyThing.scale=0.4
    SmallCuteCookieThing.scale=0.4
    SeaweadLizzardBoi.scale=0.4
}

function draw(){
background(0);

if(mousePressedOver(door1)){
door1.destroy()
}

if(mousePressedOver(doorTwo)){
    doorTwo.destroy()
}

if(mousePressedOver(doorThree)){
    doorThree.destroy()
    door1.destroy()
    doorTwo.destroy()
    doorThree.destroy()
    doorFour.destroy()
    MinecraftLava.destroy()
    UglyGuyThing.destroy()
    SeaweadLizzardBoi.destroy()
    fill("cyan")
    text("U GET A COOKIE CUZ U WON :>",150,150)
}

if(mousePressedOver(doorFour)){
    doorFour.destroy()
}

if(mousePressedOver(door1)){
    door1.destroy()
    doorTwo.destroy()
    doorThree.destroy()
    doorFour.destroy()
    MinecraftLava.destroy()
    UglyGuyThing.destroy()
    SmallCuteCookieThing.destroy()
    fill("red")
    text("YOU LOOSE TO SEAWEED LOL",150,150)
}

if(mousePressedOver(doorTwo)){
    door1.destroy()
    doorTwo.destroy()
    doorThree.destroy()
    doorFour.destroy()
    MinecraftLava.destroy()
    SmallCuteCookieThing.destroy()
    SeaweadLizzardBoi.destroy()
    fill("red")
    text("YOU LOST CAUSE 096 TOO OP",150,150)
    }

    if(mousePressedOver(doorFour)){
        door1.destroy()
        doorTwo.destroy()
        doorThree.destroy()
        doorFour.destroy()
        UglyGuyThing.destroy()
        SmallCuteCookieThing.destroy()
        SeaweadLizzardBoi.destroy()
        fill("red")
        text("YOU HAD NO FIRE RESITANCE POTIONS HAHA '2021Minecraft Tried To Swin In Lava'",10,150)
        }

drawSprites()
    
}
