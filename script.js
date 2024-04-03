let fungusHp = 100;
let myAp = 100;

let apText = document.getElementsByClassName('ap-text');
let hpText = document.getElementsByClassName('hp-text');

let apMeter = document.getElementById('ap-meter');
let hpMeter = document.getElementById('hp-meter');

// Fungus dead - myAp won

// Fungus walk -

console.log(myAp);

function attackArcane() {
  console.log('attackArcane');

  myAp = myAp - 12;
  fungusHp = fungusHp - 14;

  for (let i = 0; i < apText.length; i++) {
    if (myAp < 0 || fungusHp < 0) {
      myAp = 0;
      fungusHp = 0;
      document.getElementsByClassName('button').disabled = true;
    }
    apText[i].innerHTML = `${myAp} AP`;
    apMeter.value = myAp;
  }

  for (let i = 0; i < hpText.length; i++) {
    if (myAp < 0 || fungusHp < 0) {
      myAp = 0;
      fungusHp = 0;
      document.getElementsByClassName('button').disabled = true;
    }
    hpText[i].innerHTML = `${myAp} HP`;
    hpMeter.value = myAp;
  }
}
function attackEntangle() {
  console.log('attackEntangle');

  myAp = myAp - 23;
  fungusHp = fungusHp - 9;
  for (let i = 0; i < apText.length; i++) {
    if (myAp < 0 || fungusHp < 0) {
      myAp = 0;
      fungusHp = 0;
      document.getElementsByClassName('button').disabled = true;
    }
    apText[i].innerHTML = `${myAp} AP`;
    apMeter.value = myAp;
  }

  for (let i = 0; i < hpText.length; i++) {
    if (myAp < 0 || fungusHp < 0) {
      myAp = 0;
      fungusHp = 0;
      document.getElementsByClassName('button').disabled = true;
    }
    hpText[i].innerHTML = `${myAp} HP`;
    hpMeter.value = myAp;
  }
}
function attackDragon() {
  console.log('attackDragon');

  myAp = myAp - 38;
  fungusHp = fungusHp - 47;

  for (let i = 0; i < apText.length; i++) {
    if (myAp < 0 || fungusHp < 0) {
      myAp = 0;
      fungusHp = 0;
      document.getElementsByClassName('button').disabled = true;
    }
    apText[i].innerHTML = `${myAp} AP`;
    apMeter.value = myAp;
  }

  for (let i = 0; i < hpText.length; i++) {
    if (myAp < 0 || fungusHp < 0) {
      myAp = 0;
      fungusHp = 0;
      document.getElementsByClassName('button').disabled = true;
    }
    hpText[i].innerHTML = `${myAp} HP`;
    hpMeter.value = myAp;
  }
}
function attackStar() {
  console.log('attackStar');

  for (let i = 0; i < apText.length; i++) {
    if (myAp < 0 || fungusHp < 0) {
      myAp = 0;
      fungusHp = 0;
      document.getElementsByClassName('button').disabled = true;
    }
    apText[i].innerHTML = `${myAp} AP`;
    apMeter.value = myAp;
  }

  for (let i = 0; i < hpText.length; i++) {
    if (myAp < 0 || fungusHp < 0) {
      myAp = 0;
      fungusHp = 0;
      document.getElementsByClassName('button').disabled = true;
    }
    hpText[i].innerHTML = `${myAp} HP`;
    hpMeter.value = myAp;
  }
}

// TODO:
// Update Classes for the Fungus
// Disabled attack at 0
