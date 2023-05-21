/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "InShot_20230520_125134956",
        "./Stage/costumes/InShot_20230520_125134956.png",
        { x: 480, y: 360 }
      ),
      new Costume("695120", "./Stage/costumes/695120.jpg", { x: 480, y: 300 })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "end" }, this.whenIReceiveEnd)
    ];

    this.vars.redLaps = 0;
    this.vars.carsLeft = 2;

    this.watchers.carsLeft = new Watcher({
      label: "cars left",
      style: "normal",
      visible: false,
      value: () => this.vars.carsLeft,
      x: 245,
      y: 121
    });
  }

  *whenGreenFlagClicked() {
    this.broadcast("r");
    this.broadcast("8");
  }

  *whenIReceiveEnd() {}
}
