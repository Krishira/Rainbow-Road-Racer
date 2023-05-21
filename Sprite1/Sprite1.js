/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "goodshipreal (1)",
        "./Sprite1/costumes/goodshipreal (1).png",
        { x: 11, y: 13 }
      ),
      new Costume(
        "goodshipreal (1)2",
        "./Sprite1/costumes/goodshipreal (1)2.png",
        { x: 16, y: 22 }
      )
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "left arrow" },
        this.whenKeyLeftArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "right arrow" },
        this.whenKeyRightArrowPressed
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "r" }, this.whenKeyRPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "r" }, this.whenKeyRPressed2),
      new Trigger(Trigger.KEY_PRESSED, { key: "r" }, this.whenKeyRPressed3),
      new Trigger(Trigger.KEY_PRESSED, { key: "r" }, this.whenKeyRPressed4),
      new Trigger(Trigger.KEY_PRESSED, { key: "r" }, this.whenKeyRPressed5),
      new Trigger(Trigger.KEY_PRESSED, { key: "r" }, this.whenKeyRPressed6),
      new Trigger(Trigger.BROADCAST, { name: "r" }, this.whenIReceiveR),
      new Trigger(Trigger.BROADCAST, { name: "r" }, this.whenIReceiveR2),
      new Trigger(Trigger.BROADCAST, { name: "r" }, this.whenIReceiveR3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.KEY_PRESSED, { key: "r" }, this.whenKeyRPressed7)
    ];
  }

  *whenKeyLeftArrowPressed() {
    this.direction -= 15;
  }

  *whenKeyRightArrowPressed() {
    this.direction += 15;
  }

  *whenKeyRPressed() {
    this.stage.vars.redLaps = 0;
  }

  *whenKeyRPressed2() {
    this.broadcast("r");
    this.broadcast("8");
  }

  *whenKeyRPressed3() {
    this.stage.watchers.carsLeft.visible = false;
    this.stage.vars.carsLeft = 2;
  }

  *whenKeyRPressed4() {
    this.broadcast("message1");
  }

  *whenKeyRPressed5() {
    while (true) {
      if (this.toNumber(this.stage.vars.carsLeft) === 0) {
        this.broadcast("2");
      }
      yield;
    }
  }

  *whenKeyRPressed6() {
    while (true) {
      if (this.touching(Color.rgb(0, 38, 153))) {
        this.direction = 90;
      }
      yield;
    }
  }

  *whenIReceiveR() {
    while (true) {
      if (this.touching(Color.rgb(0, 255, 255)) && this.costumeNumber === 1) {
        this.broadcast("end");
        this.stage.costume = 695130;
      }
      yield;
    }
  }

  *whenIReceiveR2() {
    this.costume = "goodshipreal (1)";
    this.direction = 90;
    this.goto(-20, -160);
    yield* this.wait(1);
  }

  *whenIReceiveR3() {
    this.stage.costume = "InShot_20230520_125134956";
    while (
      !(
        this.touching(Color.rgb(22, 21, 26)) ||
        this.touching(Color.rgb(153, 129, 81)) ||
          this.touching(Color.rgb(255, 0, 0)) ||
            this.touching(this.sprites["MagicWand"].andClones()) ||
              this.touching(Color.rgb(254, 148, 0))
      )
    ) {
      yield;
    }
    this.costume = "goodshipreal (1)2";
    yield* this.wait(1);
    this.broadcast("r");
  }

  *whenGreenFlagClicked() {
    yield* this.wait(2);
    while (true) {
      if (!this.keyPressed("down arrow") && this.stage.costumeNumber === 1) {
        this.move(1 + this.random(1, 100) / 100);
      }
      yield;
    }
  }

  *whenKeyRPressed7() {}
}
