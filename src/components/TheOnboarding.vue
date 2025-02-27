<script setup>
  import { ref } from 'vue';

  defineProps({
    loaded: Boolean,
  });

  const showOnboarding = ref(true);

  function enterScene() {
    showOnboarding.value = false;
    if (AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()) {
      document.querySelector('a-scene').enterVR();
    }
    document.querySelector('a-scene').emit('enter-scene');
  }
</script>

<template>
  <div id="onboarding" v-if="showOnboarding">
    <div>
      <h1>Devenez forgeron !</h1>
      <p v-if="!loaded">chargement...</p>
      <button v-if="loaded" @click="enterScene()">Commencez l'expérience</button>
      <div class="licences">
        <section>
            <ul>
              <li>Le forgeron royal est absent et nous avons besoin que quelqu’un le remplace. Vous avez été choisi, pour forger les lames qui servirons à transpercer nos ennemis.</li>
              <br>
              <li>Voici comment forger une bonne lame :</li>
              <br>
                <ul>
                  <li>Faites chauffer le lingot d’acier dans le four. Attention à ce qu’il ne soit pas trop chaud !</li>
                  <li>Amener le lingot encore chaud sur l’enclume et frappez-le jusqu’à ce que sa forme soit convenable. Attention à ne pas trop le frapper !</li>
                  <li>Lorsque la lame vous semble convenable, plongez-là dans le baril d’eau et cela mettra fin à votre tâche.</li>
                </ul>
                <br>
              <li>Ne nous décevez pas !</li>
            </ul>
        </section>
        <section>
          <h4>Source code</h4>
          <blockquote><a href="https://github.com/Chabloz/a-frame-vite-vue-boilerplate">Github repo</a></blockquote>
        </section>
        <dl>
          <dt>
            <i>Included</i>
          </dt>
          <dt>
            <a href="https://github.com/c-frame/aframe-extras" target="_blank">aframe-extras controls and animation-mixer</a>
          </dt><dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/c-frame/physx" target="_blank">aframe physx</a>
          </dt><dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/jure/aframe-blink-controls/" target="_blank">aframe-blink-controls</a>
          </dt><dd>
            <a href="https://github.com/jure/aframe-blink-controls/blob/main/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/diarmidmackenzie/aframe-multi-camera/" target="_blank">aframe-multi-camera</a>
          </dt><dd>
            <a href="https://github.com/diarmidmackenzie/aframe-multi-camera/blob/main/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href=" https://github.com/AdaRoseCannon/aframe-xr-boilerplate" target="_blank">simple-navmesh-constraint</a>
          </dt><dd>
            By Ada Rose Cannon under MIT License
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/vr-gallery-1ac32ed62fdf424498acc146fad31f7e" target="_blank">VR Gallery</a>
          </dt><dd>
            by <a href="https://sketchfab.com/mvrc.art" target="_blank">Maxim Mavrichev</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/3d-gallery-for-vr-projects-68f77ed8558c4bd59e0a13e2cc9d1fd1" target="_blank">Physic room model</a>
          </dt><dd>
            by <a href="https://sketchfab.com/tekuto1s" target="_blank">tekuto1s</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=MedievalSharp&family=Metamorphous&display=swap');

  h1 { 
    font-size: 2.5rem;
    font-family: 'MedievalSharp', cursive;
    color: #c9a959;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-bottom: 2rem;
  }

  a {
    color: #c9a959;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #e6c788;
  }

  .licences {
    margin: 2rem 0;
    padding: 2rem;
    font-size: 1rem;
    text-align: left;
    font-family: 'Metamorphous', serif;
    background: rgba(0, 0, 0, 0.6);
    border: 2px solid #8b7355;
    border-radius: 8px;
  }

  .licences dt {
    padding-top: 0.75rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: #c9a959;
  }

  .licences dd {
    margin-left: 0;
    font-size: 0.8rem;
  }

  #onboarding {
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9));
    background-size: cover;
    color: #d4c5a9;
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    font-family: 'Metamorphous', serif;
    z-index: 10000;
    overflow: auto;
  }

  #onboarding > * {
    margin: 0 auto;
    max-width: 50rem;
    width: calc(100vw - 10rem);
    text-align: center;
    padding: 2rem;
  }

  #onboarding button {
    font-family: 'MedievalSharp', cursive;
    font-size: 1.3rem;
    padding: 1rem 2rem;
    background: #8b7355;
    color: #f1e6d4;
    border: 2px solid #c9a959;
    border-radius: 0;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 2rem;
    position: relative;
    overflow: hidden;
  }

  #onboarding button:hover {
    background: #c9a959;
    color: #2c1810;
    transform: scale(1.05);
  }

  #onboarding li {
    font-size: 1.1rem;
    text-align: left;
    line-height: 1.6;
    margin-bottom: 1rem;
    color: #d4c5a9;
    list-style-type: none;
    position: relative;
    padding-left: 1.5em;
  }

  #onboarding li::before {
    content: "⚔️";
    position: absolute;
    left: 0;
    top: 0;
  }

  h4 {
    font-family: 'MedievalSharp', cursive;
    color: #c9a959;
    font-size: 1.5rem;
    margin: 1.5rem 0;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
</style>

#onboarding li {
  font-size: 1rem;
  text-align: left;
}
