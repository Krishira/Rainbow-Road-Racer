/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite20 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "goodshipreal (1)",
        "./Sprite20/costumes/goodshipreal (1).png",
        { x: 10, y: 11 }
      ),
      new Costume(
        "goodshipreal (1)2",
        "./Sprite20/costumes/goodshipreal (1)2.png",
        { x: 11, y: 23 }
      )
    ];

    this.sounds = [new Sound("pop", "./Sprite20/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "8" }, this.whenIReceive8),
      new Trigger(Trigger.BROADCAST, { name: "end" }, this.whenIReceiveEnd)
    ];
  }

  *whenIReceive8() {
    this.costume = "goodshipreal (1)";
    this.goto(-25, -140);
    yield* this.wait(1);
    yield* this.glide(2.5, 80, -115);
    yield* this.glide(1.5, 105, -75);
    yield* this.glide(1.5, 95, -50);
    yield* this.glide(1.5, 23, -59);
    yield* this.glide(1.5, -25, -13);
    yield* this.glide(1.5, -40, 48);
    yield* this.glide(1.5, 14, 61);
    yield* this.glide(1.75, 92, 53);
    yield* this.glide(1.5, 159, 53);
    yield* this.glide(1.75, 165, 89);
    yield* this.glide(1.5, 116, 125);
    yield* this.glide(1.75, -3, 133);
    yield* this.glide(1.5, -77, 137);
    yield* this.glide(1.5, -154, 87);
    yield* this.glide(1.75, -195, 35);
    yield* this.glide(1.5, -201, -18);
    yield* this.glide(1.5, -186, -64);
    yield* this.glide(1.75, -149, -106);
    yield* this.glide(1.75, -47, -151);
    this.broadcast("try again");
    this.broadcast("r");
    this.broadcast("8");
  }

  *whenIReceiveEnd() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
