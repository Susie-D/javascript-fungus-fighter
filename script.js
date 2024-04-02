let fungusHp = 100;
let myAp = 100;

let fungusDamage = 0;
let myDamage = 0;

function onReady() {
  let apMeter = document.getElementById('ap-meter').value;
  console.log(apMeter);

  let hpMeter = document.getElementById('hp-meter').value;
  console.log(hpMeter);
}
onReady();

function attackArcane() {
  console.log('attackArcane');

  myAp = myAp - 14;
  fungusHp = fungusHp - 14;

  console.log(fungusHp);
  console.log(myAp);
}
function attackEntangle() {
  console.log('attackEntangle');

  myAp = myAp - 23;
  fungusHp = fungusHp - 9;

  console.log(fungusHp);
  console.log(myAp);
}
function attackDragon() {
  console.log('attackDragon');

  myAp = myAp - 38;
  fungusHp = fungusHp - 47;

  console.log(fungusHp);
  console.log(myAp);
}
function attackStar() {
  console.log('attackStar');

  myAp = myAp - 33;
  fungusHp = fungusHp - 25;

  console.log(fungusHp);
  console.log(myAp);
}
