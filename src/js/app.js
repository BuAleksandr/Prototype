import Bowman from './modules/bowman';
import Swordsman from './modules/swordsman';
import Magician from './modules/magician';
import Daemon from './modules/daemon';
import Undead from './modules/undead';
import Zombie from './modules/zombie';

const bowman = new Bowman('Alex');
const swordsman = new Swordsman('Sergey');
const magician = new Magician('Jon');
const daemon = new Daemon('Oleg');
const undead = new Undead('Pavel');
const zombie = new Zombie('Albert');

console.log(bowman);
console.log(swordsman);
console.log(magician);
console.log(daemon);
console.log(undead);
console.log(zombie);

/* Задание №2 */
zombie.levelUp();
console.log('zombie levelUp');
console.log(zombie);

zombie.damage(50);
console.log('zombie damage 50');
console.log(zombie);