var OrdinaryPlayer = require('../js/ordinary-player');
var WarriorPlayer = require('../js/warrior-player');
var Game = require('../js/game.js');
var Armor = require('../js/armor');
var Weapon = require('../js/weapon');
var Fire = require('./modle/effect/fire');
var Crit = require('./modle/effect/crit');
var Frost = require('./modle/effect/frost');
var Venom = require('./modle/effect/venom');
var Vertigo = require('./modle/effect/vertigo');


main();

function main() {

  var zhangsan = new OrdinaryPlayer('张三', 1000, 10);

  var effects = [new Venom('毒', 2, 2, 0.2),
                 new Crit('crit', 3, 0.2),
                 new Fire('火', 2, 2, 0.2),
                 new Vertigo('眩晕', 2, 0.2),
                 new Frost('冰冻', 1, 3, 0.2)];

  var weapon = new Weapon('屠龙刀', 7, effects);
  var armor = new Armor('麒麟甲', 5);
  var li = new WarriorPlayer('李斯', 100, 10, armor, weapon);

  var porpt = Game.PK(zhangsan, li);
  console.log(porpt);
}
