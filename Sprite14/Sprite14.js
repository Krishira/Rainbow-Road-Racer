/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite14 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite14/costumes/costume1.png", {
        x: 178,
        y: 33
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite14/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "2" }, this.whenIReceive2),
      new Trigger(Trigger.KEY_PRESSED, { key: "r" }, this.whenKeyRPressed),
      new Trigger(Trigger.BROADCAST, { name: "5" }, this.whenIReceive5)
    ];
  }

  *whenIReceive2() {
    this.visible = true;
  }

  *whenKeyRPressed() {
    this.visible = false;
  }

  *whenIReceive5() {
    this.visible = true;
  }
}
