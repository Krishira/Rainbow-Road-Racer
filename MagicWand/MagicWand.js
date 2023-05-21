/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class MagicWand extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("magicwand", "./MagicWand/costumes/magicwand.png", {
        x: 87,
        y: 46
      }),
      new Costume("Rocketship-b", "./MagicWand/costumes/Rocketship-b.svg", {
        x: 18.601968482296428,
        y: 15.155595087876918
      })
    ];

    this.sounds = [new Sound("pop", "./MagicWand/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      while (!(this.stage.costumeNumber === 2)) {
        yield* this.glide(3.5, -210, -94);
        this.visible = false;
        yield* this.wait(2);
        this.goto(243, 166);
        this.visible = true;
        yield;
      }
      yield;
    }
  }
}
