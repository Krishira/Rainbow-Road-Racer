/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite12 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite12/costumes/costume1.png", {
        x: 32,
        y: 32
      }),
      new Costume(
        "image_2023-05-20_140528467",
        "./Sprite12/costumes/image_2023-05-20_140528467.png",
        { x: 63, y: 39 }
      )
    ];

    this.sounds = [new Sound("pop", "./Sprite12/sounds/pop.wav")];

    this.triggers = [];
  }
}
