/*=================================================
  =======================CHAT======================*/

window.testRNG = function () {
  return "RNG JS Loaded";}

window.Game.momtalk = function () {
  let game = window.Game;
  let npc = State.variables.NPC.mom;
  let line = "";

  let t1 = ["Thanks. ", "(smiles) "];
  let t2 = ["I enjoyed ", "It was nice "];
  let t3 = ["chatting with you. ", "talking to you. ", "spending time with you. "];

  let t4 = ["Let's ", "We should "];
  let t5 = ["do this ", "chat ", "talk "];
  let t6 = ["again soon, ", "more often, ", "really soon, ", "sometime soon, "];

  let t7 = ["(Hugs you) ", "(Kisses your cheek) ", "hehe. "];
  let t8 = ["I love you. ", "(Kisses your lips) ", "(Hugs you tightly) "];

  let r1 = game.rng(0, t1.length - 1);
  let r2 = game.rng(0, t2.length - 1);
  let r3 = game.rng(0, t3.length - 1);
  let r4 = game.rng(0, t4.length - 1);
  let r5 = game.rng(0, t5.length - 1);
  let r6 = game.rng(0, t6.length - 1);

  if (npc.lvl == 1) line = t1[r1] + t2[r2] + t3[r3]
  else if (npc.lvl > 1) line = t1[r1] + t2[r2] + t3[r3] + t4[r4] + t5[r5] + t6[r6] + game.nicknames("mom") + ". ";
  if (npc.lvl == 2) { line += t7[game.rng(0, t7.length - 1)]; }
  if (npc.lvl >= 3) { line += t8[game.rng(0, t8.length - 1)]; }
  return line;
};