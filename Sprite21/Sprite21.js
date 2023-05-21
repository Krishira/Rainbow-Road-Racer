/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite21 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite21/costumes/costume1.png", {
        x: 264,
        y: -44
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite21/sounds/pop.wav")];

    this.triggers = [];
  }
}
