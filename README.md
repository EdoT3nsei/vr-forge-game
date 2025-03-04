> Based on a boilerplate for A-Frame 1.7, Vue 3.5 and Vite 5.4

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![A-Frame](https://img.shields.io/badge/A%E2%80%93Frame-1.7-brightgreen?style=for-the-badge&labelColor=%23ef2d5e&color=%23ef2d5e)
![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

---

# VR Forge Game

A virtual reality blacksmithing experience where players step into the role of a royal blacksmith's replacement.

## Description

In this VR experience, you take on the role of a blacksmith tasked with forging blades. The game provides an immersive environment where you can interact with authentic blacksmithing tools and equipment.

## How to Play

1. Heat the steel ingot in the forge
   - Be careful not to overheat the metal
   - Watch for color changes indicating temperature

2. Work the hot ingot on the anvil
   - Use the hammer to shape the metal
   - Be mindful not to strike too many times

3. Complete the forging process
   - Quench the blade in the water barrel when ready to end the game

## Quickstart

### Install dependencies

```sh
npm ci
```

### Dev

```sh
npm run dev
```

### Build

```sh
npm run build
```

## Notes for local dev on VR headset

1. Check that your development device and your VR headset are connected on **the same network**.

2. Expose you local development:

```sh
npm run dev-expose
```

3. In your VR headset, browse to the local development adress `[ip]:[port]`.

> [!NOTE]
> The certificate is self-signed, so you will probably have to confirm access to the resource in your browser.

---

## License

![MIT License](https://img.shields.io/badge/License-MIT-brightgreen?style=for-the-badge&color=%23262626)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/EdoT3nsei/vr-forge-game.git
```

2. Install dependencies:
```bash
cd vr-forge-game
npm install
```

3. Run the development server:
```bash
npm run dev
```

## Technologies Used
- A-Frame VR Framework
- Vue.js
- WebVR
- Three.js

## Credits

### Libraries and Frameworks

- [aframe-extras](https://github.com/c-frame/aframe-extras) (MIT License)
- [aframe physx](https://github.com/c-frame/physx) (MIT License)
- [aframe-blink-controls](https://github.com/jure/aframe-blink-controls) (MIT License)
- [aframe-multi-camera](https://github.com/diarmidmackenzie/aframe-multi-camera/) (MIT License)
- [simple-navmesh-constraint](https://github.com/AdaRoseCannon/aframe-xr-boilerplate) (MIT Licence)

### 3D Assets

- [Medieval Forge](https://sketchfab.com/3d-models/medieval-forge-game-ready-low-poly-f1a1067a73e9439d91bc139a75d2792a) - by Sergi Trojanski (CC-BY 4.0)
- [Wooden Crates](https://sketchfab.com/3d-models/crate-the-mystery-of-stalore-9-a96cc257866c47ab93d52fa4dd598ae0) - by Revilo (CC-BY 4.0)
- [Medieval Fantasy Workshop Assets](https://sketchfab.com/kyan0s/collections/medieval-fantasy-contest-blacksmiths-workshop-a013c33e56a44b479cc527e2dc992b7f) - Collection by kyan0s
- [Lowpoly Parchment](https://sketchfab.com/3d-models/lowpoly-parchment-e8339f1804774f9ea48651be9df94eda) - by lucasminer99 (CC-BY 4.0)
- [Lowpoly Lantern](https://sketchfab.com/3d-models/lantern-low-poly-ce5171d461fc48eebf6ad96878465a85) - by aetherowl (CC-BY 4.0)
- [Smoke Effect](https://sketchfab.com/3d-models/smoke-d2dc6148098c48ea8c1b3bf1b70528c3) - by Guillermo T (CC-BY 4.0)
- [Diamond Sword](https://sketchfab.com/3d-models/minecraft-diamond-sword-2fd7a88f5bd44d728c2bbdd8dfc27f99) - by Blender3D (CC-BY 4.0)
- [Stone Walkway](https://poly.pizza/m/Im0kSO5tiJ) - by [Pixel](https://poly.pizza/u/Pixel) [[CC-BY](https://creativecommons.org/licenses/by/3.0/)]
- Sound Effects - from [Pixabay](https://pixabay.com/sound-effects/) (Pixabay License)

### Fonts

- [MedievalSharp](https://fonts.google.com/specimen/MedievalSharp) - Google Fonts (Open Font License)
- [Metamorphous](https://fonts.google.com/specimen/Metamorphous) - Google Fonts (Open Font License)
