import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite12 from "./Sprite12/Sprite12.js";
import Sprite14 from "./Sprite14/Sprite14.js";
import Sprite20 from "./Sprite20/Sprite20.js";
import MagicWand from "./MagicWand/MagicWand.js";
import Sprite21 from "./Sprite21/Sprite21.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Sprite1: new Sprite1({
    x: -50.42207415552335,
    y: -138.89625261871757,
    direction: 75,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  Sprite12: new Sprite12({
    x: -118,
    y: 22,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Sprite14: new Sprite14({
    x: 52,
    y: -33,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Sprite20: new Sprite20({
    x: -81.50514285714286,
    y: -135.77714285714285,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6
  }),
  MagicWand: new MagicWand({
    x: 243,
    y: 166,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  Sprite21: new Sprite21({
    x: -56,
    y: 49,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Sprite2: new Sprite2({
    x: -131,
    y: -13,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7
  }),
  Sprite3: new Sprite3({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
