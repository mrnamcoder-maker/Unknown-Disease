/*=================================================
  =======================CHAT======================*/


window.yousexchat = function() {   
  let arr =[
    "ahh ngh ahh",
    "oh ahhh ngh ",
    "(groan) ohh ",
    "ahh (groan) ",
    "ahhh oh ",
    "nghh nhhg ahh ",
    "nghh so good ",
    "oh ahh ahh ",
    "oh ah ah ngh ",
    "(pant) oh "
  ];
  return arr[Math.floor(Math.random() * arr.length)];
};

window.sexchat = function(){
  let arr = [
   	"ohh ahhh (moan) ",
    "(moan) yess ahh ",
    "(moan) (moan) (moan) ",
    "ahh (moan) ahh ",
    "oooh ahh (moan) ",
    "(moan) (moan) ahh ",
    "ahh (moan) ohh (moan) ",
    "ahh wow ahh (moan) (moan)",
    "oh (moan) oh ahh ",
   "(moan) ahh (moan) "
  ];
  return arr[Math.floor(Math.random() * arr.length)];
};








/*=================================================
  =======================SIS=======================*/

window.sisgreet = function(type) {
  
  if (typeof type !== "string"){return ""};
  
  let start = [
    "Hey bro..",
    "Ah..",  
    "Oh..",
    "Hmm..",
    "Hey..",
    "Hey..",
    "Hi bro..",
    "Hey..",
    "Bro.."
  ];

  let add =[
    "",
    "(licks lips) ",
    "(smiles) ",
    "(plays with hair) ",
    "",
    ""
  ];

  let mid = {
    d1: [
      "Were you looking for me? ",
      "Can't get away from me? ",
      "Are you following me? ",
      "What do you want? ",
      "I'm busy.."
    ],

    d2: [
      "I know you want me to milk you ",
      "Is that a boner? How adorable ",
      "Is it time to bend you over again? ",
      "Need me again huh? ",
      "Miss my body already? "
    ],

    d3: [
      "Your dick has my name and lips all over them ",
      "Did you look for your sis to fuck you again? ",
      "I might just bend you right here and now ",
      "Is it time to drain those balls? ",
      "I wonder what how much I can stimulate every sensitive part on your body "
    ],

    s1: [
      "I'm here for you ",
      "I'm glad to see you ",
      "Can we do something together? ",
      "I'm around if you need anything  ",
      "(hugs you) "
    ],

    s2: [
      "I've been a bad girl.. ",
      "Should I...get on my knees? ",
      "..I..I can get ready for you ",
      "...Can you punish me? ",
      "..What..do you want me to do? "
    ],

    s3: [
      "...Do..do you need to use my holes again? ",
      "..My body is ready to be used for your dick ",
      "..My pussy is always wet for your use.. ",
      "..Should I get on my knees...or bend over for you? ",
      "..I hope my pussy will...will make you happy.. "
    ]
  };

  let add2 =[
    "hehe.",
    "(blushes)",
    "(winks)",
    "",
    ""
  ];

  if (!mid[type]) {return (start[Math.floor(Math.random() * start.length)]);}
  else return (
    start[Math.floor(Math.random() * start.length)] +
    add[Math.floor(Math.random() * add.length)] +
    mid[type][Math.floor(Math.random() * mid[type].length)] +
    add2[Math.floor(Math.random() * add2.length)]
  );
};
				




/*=================================================
  =======================MOM=======================*/

window.nicknames= function(name) {
  if (typeof name !== "string")return "sweetie";
  let arr = [
    "darling",
    "sweetheart",
    "sweetie",
    "baby",
    "honey",
    "hun",
    name
  ];
  return arr[Math.floor(Math.random() * arr.length)];
};


window.momgreet = function (type) {

  if (typeof type !== "string") { return "" };
  let nick = window.nicknames();

  let start = [
    "Hey ",
    "Hey ",
    "Oh ",
    "Hmm ",
    "Hey ",
    "Hey ",
    "Hi ",
    "Hey ",
    "Ah " 
  ];

  let add = [
    " ",
    "(kiss on the cheek) ",
    "(smiles) ",
    "(strokes your hair) ",
    " ",
    " ",
    " "
  ];

  let mid = {
    l1: [
      "Aww were you looking for mommy? ",
      "If you ever need anything, mommy's here ",
      "Did you need something? ",
      "Did you want something from mommy? ",
      "Mommy's a bit busy "
    ],

    l2: [
      "Aww did you some by just to see me? ",
      "If you ever need help with your issue, mommy's here ",
      "Did you need help again? ",
      "Did you want mommy? ",
      "Mommy's a bit busy but not for you "
    ],

    l3: [
      "Do you want to make love to mommy? ",
      "Mommy wants to make love with you right now ",
      "Do you want to go to bed with mommy right now? ",
      "I love you more and more everytime I see you ",
      "You brighten up my day  "
    ],

    c1: [
      "I'm having wrong thou...nevermind ",
      "..I'm...I'm busy right now ",
      "Mommy's.. a bit busy right now ",
      "...I can talk right now... ",
      "...We...don't worry it's nothing "
    ],

    c2: [
      "Aww do you need mommy to milk you? ",
      "Are your balls aching for mommy again? ",
      "If you ever need to drain your balls, mommy is here ",
      "Need mommy to help with your dick? ",
      "Aww do you want mommy's relief "
    ],

    c3: [
      "Mommy is always hungry for you cum ",
      "My pussy is ready anytime for your cock ",
      "Mommy wants to milk you with her body till you're dry ",
      "Lets fuck right now. Mommy needs it ",
      "Mommy wants to make you cum over and over "
    ]
  };

  let add2 = [
    "hehe.",
    "(blushes)",
    "(winks)",
    " ",
    " ",
    " "
  ];

  if (!mid[type]) { return (start[Math.floor(Math.random() * start.length)]); }
  else return (
    start[Math.floor(Math.random() * start.length)] + nick +
    add[Math.floor(Math.random() * add.length)] +
    mid[type][Math.floor(Math.random() * mid[type].length)] +
    add2[Math.floor(Math.random() * add2.length)]
  );
}; 