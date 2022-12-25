



//************************************************************

var i = 0;
var speed = 50; /* The speed/duration of the effect in milliseconds */
var txt1 = 'You are a brave adventurer, traveling through the land in search of treasure and adventure. One day, you come across a strange rumor about a mysterious object hidden in a far-off cave. The object is said to have great power and could bring you great wealth and fame. Intrigued by the rumor, you set out to find the cave. \n After days of travel, you finally reach its entrance. You pause to catch your breath and gather your courage before stepping inside. \n The cave is dark and damp, the walls shining with moisture. \n You pull out your trusty lantern and light it, casting a warm glow around you. You move slowly, watching for any signs of danger. \n As you explore deeper into the cave, you begin to notice strange symbols etched into the walls. You can not quite make out what they mean, but you have a feeling that they are important. You make a mental note to come back and decipher them later. \n Finally, after what feels like hours of searching, you come across a small chamber. In the center of the room sits a strange object, glowing with a faint, otherworldly light. \n You approach it cautiously, wondering what kind of power it holds. \n As you reach out to touch it, a voice echoes in your mind. "Who are you?" it asks. You pause, unsure of how to respond. Do you tell the truth and reveal your identity? Or do you try to deceive the voice and keep your true identity a secret? The decision is yours. What will you do?'; /* The text */
var i2 = 0;
var txt2 = 'You hesitate for a moment, wondering if giving your name to a mysterious voice in a cave is a good idea. But the it seems to be friendly, and you decide to trust it. You tell the voice your name. The light glows brighter and the voice thanks you for your trust. It tells you that it is a guardian of the cave, and that it has been waiting for you. It says that you are the chosen one, destined to complete a great quest. The voice explains that the cave is filled with danger, but that with your bravery and determination, you will be able to overcome any obstacle. It tells you to be cautious and to always keep an eye out for clues and treasures that may help you on your journey. You nod, feeling a sense of excitement and purpose wash over you. You thank the voice and set off into the cave, ready to face whatever challenges lay ahead. In one direction you hear the sound of faintly rushing water. In the other, soft strains of strange music. Which direction will you choose?'
var i3 = 0;
var txt3 = 'You hesitate, unsure if you want to reveal your name to this unknown entity. After a moment of contemplation, you decide not to give the voice your name. The voice sighs in disappointment. "Very well," it says. "If you will not tell me your name, I have no choice but to refuse to help you on your journey. Without my guidance, you may become lost in these treacherous caves. Are you sure you do not want to reconsider?" You stand your ground, determined not to reveal your identity. The voice sighs once more before falling silent. You are left to navigate the dark, twisting passages of the cave on your own. As you make your way deeper into the cave, you begin to regret your decision. Without the voice to guide you, you become disoriented and lost. You wander aimlessly, feeling the walls closing in on you as the darkness consumes you. Eventually, you collapse from exhaustion, never to be seen again. The warning from the mysterious voice goes unheeded, and your journey ends in tragedy.'
var i4 = 0;
var txt4 = 'You decide to follow the sound of water coming from a path to the right. As you take a step forward, the ground beneath you begins to slope downward, leading you deeper into the cave. After what feels like an eternity of winding and twisting through the narrow passages, you come upon a small chamber. In the center of the chamber sits a sparkling fountain, its water cascading down into a small pool below. You approach the fountain and notice that it is surrounded by strange, glowing symbols etched into the rock. As you reach out to touch one of the symbols, you feel a sudden surge of energy coursing through your body. Without warning, you are transported to a magical land filled with wondrous creatures and perilous challenges. You find yourself on a quest to find the fabled Fountain of Youth, a mythical spring that is said to grant eternal life to those who drink from its waters. As you journey through this strange and beautiful land, you encounter all manner of fantastical beings, from friendly dwarves and elves to fierce dragons and giant spiders. You brave treacherous mountains, dark forests, and scorching deserts, all in search of the elusive fountain. At long last, after many trials and tribulations, you reach the entrance to the Fountain of Youth. You pause for a moment to catch your breath, then step forward and drink from the crystal clear waters. As the water touches your lips, you feel a warmth spread through your body and a strange tingling feeling comes over you.'
var i5 = 0;
var txt5 = 'Intrigued, you follow the sound deeper into the cave, your footsteps quickening as the music grows louder and more distinct. It is a strange and otherworldly melody, unlike anything you have ever heard before. As you round a corner, the music becomes almost deafening, and you find yourself in a vast chamber filled with swirling, glowing lights. In the center of the chamber sits a group of strange, ethereal beings, their fingers moving deftly over a series of strange instruments. You approach the musicians, mesmerized by their skill and the beauty of the music they create. As you stand there, lost in the sound, you feel a sudden surge of energy coursing through your body. Without warning, you are transported to a magical land filled with wondrous creatures and perilous challenges. You find yourself on a quest to find the fabled Crystal of Harmony, a mythical stone that is said to grant its possessor unimaginable power. As you journey through this strange and beautiful land, you encounter all manner of fantastical beings, from friendly dwarves and elves to fierce dragons and giant spiders. You brave treacherous mountains, dark forests, and scorching deserts, all in search of the elusive crystal. At long last, after many trials and tribulations, you reach the entrance to the Crystal of Harmony. You pause for a moment to catch your breath, then step forward and lay your hands upon the glowing stone. As the crystal touches your skin, you feel a warmth spread through your body, filling you with new strength and vitality. You have found the Crystal of Harmony, and with it, unimaginable power. A strange tingling feeling courses through your body.';
var txtEnd = 'A bright light suddenly appears before you. You shield your eyes with your hand and squint to see what it is. As the light fades, you see a figure standing before you. "Greetings, adventurer," the figure says in a deep, gravelly voice. "I have come to offer you a prize. A prize unlike any other, a prize beyond your wildest dreams." You take a step back, wary of the strange figure and its cryptic words. "What kind of prize?" you ask, trying to keep your voice steady. The figure reaches into its pocket and pulls out a small, intricately carved wooden box. "Inside this box lies a magical artifact, capable of granting your heart\'s desire. All I ask in return is that you use it wisely and for the greater good." You hesitate for a moment, considering the offer. It all seems too good to be true. But the temptation of such a powerful item is hard to resist. "I accept," you say, reaching out to take the box. The figure nods, a small smile crossing its face. "I knew you would make the right choice. Use the artifact wisely, and may it bring you great fortune." With that, the figure disappears as suddenly as it appeared, leaving you alone with the mysterious box in your hands. You open the lid, and inside lies a glowing crystal, pulsing with an otherworldly energy. You have no idea what power it holds, but you can\'t wait to find out. You look closer and see that the crystal has strange symbols engraved upon it.' 
var z = 0;



function typeWriter1() {
  if (i < txt1.length) {
    document.getElementById("demo1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
  }
}


function typeWriter2() {
  if (i2 < txt2.length) {
    document.getElementById("demo2").innerHTML += txt2.charAt(i2);
    i2++;
    setTimeout(typeWriter2, speed);
  }
}


function typeWriter3() {
  if (i3 < txt3.length) {
    document.getElementById("demo3").innerHTML += txt3.charAt(i3);
    i3++;
    setTimeout(typeWriter3, speed);
  }
}


function typeWriter4() {
  if (i4 < txt4.length) {
    document.getElementById("demo4").innerHTML += txt4.charAt(i4);
    i4++;
    setTimeout(typeWriter4, speed);
  }
}

function typeWriter5() {
  if (i5 < txt5.length) {
    document.getElementById("demo5").innerHTML += txt5.charAt(i5);
    i5++;
    setTimeout(typeWriter5, speed);
  }
}



  function buttonFunction1(){
     document.getElementById("buttonAppear1").innerHTML = '</br><a href="index0.html"><button><b>Reveal your identity</b></button></a></br><a href="1-0.html"><button><b>Do not give your name</b></button></a>';
}

  function buttonFunction2(){
     document.getElementById("buttonAppear2").innerHTML = '</br><a href="1-1.html"><button><b>Water</b></button></a></br><a href="1-2.html"><button><b>Music</b></button></a>';
}

  function buttonFunction4(){
     document.getElementById("buttonAppear4").innerHTML = '</br><a href="end.html"><button><b>Continue</b></button></a>';
}

  function buttonFunction5(){
     document.getElementById("buttonAppear5").innerHTML = '</br><a href="end.html"><button><b>Continue</b></button></a>';
}

  function buttonFunctionEnd(){
     document.getElementById("buttonAppearEnd").innerHTML = '</br><p>AMAZON Claim Code: 8TXV-5KS66T-7SAC</p>';
}


function typeWriterEnd() {
  if (z < txtEnd.length) {
    document.getElementById("demoEnd").innerHTML += txtEnd.charAt(z);
    z++;
    setTimeout(typeWriterEnd, speed);
  }

}












