// var mic;
// var color_map;
// var count;
// var names_index; //
// var names;
// var text_fill;
// var v_names;
// var prev_count;

// function setup(){
//   mic = new p5.AudioIn()
//   mic.start();
//   createCanvas(800,680);
//   names = ["Bettie Jones","Kevin Matthews","Leroy Browning",
//   "Roy Nelson","Miguel Espinal","Nathaniel Pickett","Tiara Thomas","Cornelius Brown","Chandra Weaver",
//   "Jamar Clark","Richard Perkins","Stephen Tooson","Michael Lee Marshall",
//   "Alonzo Smith","Yvens Seide","Anthony Ashford","Lamontez Jones","Rayshaun Cole","Paterson Brown",
//   "Christopher Kimble","Junior Prosper","Keith McLeod","Wayne Wheeler","India Kager","Tyree Crawford",
//   "James Carney III","Felix Kumi","Wendell Hall","Asshams Manley","Christian Taylor","Troy Robinson",
//   "Brian Day","Michael Sabbie","Billy Ray Davis","Samuel Dubose","Darrius Stewart","Albert Davis","Sandra Bland",
//   "Salvado Ellswood","George Mann","Jonathan Sanders","Victor Larosa III","Kevin Judson",
//   "Spencer McCain","Kevin Bajoie","Zamiel Crawford","Jermaine Benjamin",
//   "Kris Jackson","Alan Craig Williams","Ross Anthony","Richard Gregory Davis","Markus Clark","Lorenzo Hayes",
//   "De'Angelo Stallworth","Dajuan Graham","Brandon Glenn","Reginald Moore",
//   "Nuwnah Laroche","Jason Champion","Bryan Overstreet","Terrence Kellom",
//   "David Felix","Lashonda Ruth Belk","Gregory Daquan Harris","Terry Lee Chatman",
//   "William Chapman","Samuel Harrell","Freddie Gray","Norman Cooper","Brian Acton","Darrell Brown",
//   "Frank Shephard III","Walter Scott","Donald 'Dontay' Ivy","Eric Harris","Phillip White","Dominick Wise",
//   "Jason Moland","Nicholas Thomas","Denzel Brown","Brandon Jones","Askari Roberts","Terrance Moxley",
//   "Anthony Hill","Bernard Moore","Naeschylus Vinzant","Tony Robinson","Charly Leundeau Keunang",
//   "Darrell Gatewood","Deontre Dorsey","Thomas Allen Jr","Calvon Reid","Terry Price",
//   "Natasha McKenna","Jeremy Lett","Alvin Haynes","Tiano Meton","Andrew Larone Murphy Sr.","Brian Pickett","Leslie Sapp","Matthew Ajibade","Philando Castile","Terrence Crutcher",
//   "Alton Sterling","Trayvon Martin","Akai Gurley","Anisha Anderson","Eric Garner","Freddie Gray","Amber Monroe","Michael Brown","Tamir Rice"];
//   v_names = ["Keith Childress"];
//   count = 0;
//   prev_count = 0;
//   names_index = 0;
//   frameRate(10);
// }

// function draw(){
//   clear();
//   background(0);
  
//   micLevel = mic.getLevel();
//   fill(0,255,0);

//   //DEBUG TEXT
//   // fill(255,0,0);
//   // text(count,50,50);
  
//   //CLEAR IF TOO QUIET
//   if (micLevel < 0.01){
//     count = 0;
//     prev_count = 0;
//     v_names = ["test0"];
//   }
//   else if (micLevel > .06){
//     count++;
//     prev_count = count;
//     names_index++;
//   }
//   name(micLevel*1.5*255,micLevel*1.5*255,micLevel*1.5*255);

// }

// function name(r,g,b) {
//     text_fill = color(r,g,b);
//     if (names_index == names.length){
//       names_index = 0;
//     }
//   textSize(14);
//   //textAlign(CENTER);
//   if (prev_count == count){
//     append(v_names,names[names_index]);
//   }
//   for (i = 0; i < 5; i++){
//     fill(text_fill);
//     text(names[i],160*i-.5,50);
//   }
//   for (i = 5; i < 10; i++){
//     fill(text_fill);
//     text(names[i],150*floor(i-4.5),80);   
//   }
//   for (i = 10; i < 15; i++){
//     fill(text_fill);
//     text(names[i],160*floor(i-9.5),110);   
//   }
//   for (i = 15; i < 20; i++){
//     fill(text_fill);
//     text(names[i],150*floor(i-14.5),140);   
//   }
//   for (i = 20; i < 25; i++){
//     fill(text_fill);
//     text(names[i],160*floor(i-19.5),170);   
//   }
//   for (i = 25; i < 30; i++){
//     fill(text_fill);
//     text(names[i],140*floor(i-24.5),200);   
//   }
//   for (i = 30; i < 35; i++){
//     fill(text_fill);
//     text(names[i],160*floor(i-29.5),230);   
//   }
//   for (i = 35; i < 40; i++){
//     fill(text_fill);
//     text(names[i],140*floor(i-34.5),260);   
//   }
//   for (i = 40; i < 45; i++){
//     fill(text_fill);
//     text(names[i],160*floor(i-39.1),290);   
//   }
//   for (i = 45; i < 50; i++){
//     fill(text_fill);
//     text(names[i],140*floor(i-44.5),320);   
//   }
//   for (i = 50; i < 55; i++){
//     fill(text_fill);
//     text(names[i],150*floor(i-49.5),350);   
//   }
//   for (i = 55; i < 60; i++){
//     fill(text_fill);
//     text(names[i],150*floor(i-54.5),380);   
//   }
//   for (i = 60; i < 65; i++){
//     fill(text_fill);
//     text(names[i],160*floor(i-59.5),410);   
//   }
//   for (i = 65; i < 70; i++){
//     fill(text_fill);
//     text(names[i],160*floor(i-64.5),440);   
//   }
//   for (i = 70; i < 75; i++){
//     fill(text_fill);
//     text(names[i],140*floor(i-69.5),470);   
//   }
//   for (i = 75; i < 80; i++){
//     fill(text_fill);
//     text(names[i],140*floor(i-74.5),500);   
//   }
//   for (i = 80; i < 85; i++){
//     fill(text_fill);
//     text(names[i],150*floor(i-79.5),530);   
//   }
//   for (i = 85; i < 90; i++){
//     fill(text_fill);
//     text(names[i],140*floor(i-84.5),560);   
//   }
//   for (i = 90; i < 95; i++){
//     fill(text_fill);
//     text(names[i],150*floor(i-89.5),590);   
//   }
//   for (i = 95; i < 100; i++){
//     fill(text_fill);
//     text(names[i],140*floor(i-94.5),620);   
//   }
//   for (i = 100; i < 105; i++){
//     fill(text_fill);
//     text(names[i],150*floor(i-99.5),650);   
//   }
//   for (i = 105; i < 110; i++){
//     fill(text_fill);
//     text(names[i],140*floor(i-104.5),680);   
//   }
//   for (i = 110; i < 112; i++){
//     fill(text_fill);
//     text(names[i],150*floor(i-109.5),710);   
//   }
  
    
//     // text(v_names[floor(i/2)],300*i,100);
//     // text(v_names[floor(i/3)],300*i,150);
//     // text(v_names[floor(i/5)],100*i,200);
//     // text(v_names[floor(i/7)],100*i,250);
//     // text(v_names[floor(i/6)],100*i,300);

//   }
var hidden_names;
var visible_names;
var margin; //for canvas
var hidden_count; //index on hidden_names
var micLevel;
var mic;
var curr_name_color;
var made_it;
var posx;
var posy;
var start;


function setup(){
  hidden_names = ["test0","test1","test2","test3","test4"];
  visible_names = [];
  mic = new p5.AudioIn();
  mic.start();
  createCanvas(700,700);
  hidden_count = 0;
  curr_color = 0;
  frameRate(10);
  start = false;  
}

function draw() {
  clear();
  // getStart(start);
  micLevel = mic.getLevel();
  background(0);
  //IGNORE EVERYTHING ABOVE THIS COMMENT
  
  //DEBUG TEXT
  fill(255,0,0);
  text(micLevel,50,50);
  displayVisible();
  if (getStart(start) === true){
    posx = (((hidden_count+1)%6)/8)*700;
    z = floor((hidden_count)/5)
    posy = z*750;
    fadeIn(hidden_names[hidden_count])
  }
  if (fadeIn(hidden_names[hidden_count]) === true){
    curr_name_color = 0;
    addToVisible();
  }
}

function getStart(value) {
  return value;
}

function addToVisible(){
  append(visible_names,hidden_names[hidden_count]);
  hidden_count++;
  if (hidden_count == hidden_names.length){
    hidden_count = 0;
  }
}

function displayVisible(){
  for (visible = 0; visible < visible_names.length; visible++){
    fill(255,255,255);
    noStroke;
    y = floor((visible+1)/6);
    posx = (((visible+1)%6)/8*700);
    posy = (y/10)*750;
    text(visible_names[visible],posx,(y/10)*750)
  }
}

function fadeIn(curr_name){
    curr_name_color = micLevel*5*255;
    fill(curr_name_color,curr_name_color,curr_name_color);
    noStroke();
    text(curr_name,200,200);
    text(curr_name,posx,posy);
    if (curr_name_color >= 180){
      return true;
    }
    return false;
}

  




