/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite3/costumes/costume1.svg", {
        x: 44.18223546882791,
        y: -148.64227715417724
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "try again" },
        this.whenIReceiveTryAgain
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveTryAgain() {
    this.visible = true;
    yield* this.wait(0.5);
    this.visible = false;
    yield* this.wait(0.1);
    this.visible = true;
    yield* this.wait(0.5);
    this.visible = false;
    yield* this.wait(0.1);
    this.visible = true;
    yield* this.wait(0.5);
    this.visible = false;
    yield* this.wait(0.1);
    this.visible = true;
    yield* this.wait(0.5);
    this.visible = false;
    yield* this.wait(0.1);
    this.visible = true;
    yield* this.wait(0.5);
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
