<template>
  <div @click="lof" class="🚊">
    <h1>{{ nameEpisode }}</h1>

    <p>season: {{ season }} episode: {{ episode }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  nameEpisode: {
    type: String,
  },

  episode: {
    type: String,
  },

  season: {
    type: String,
  },
});

const lof = () => {
  console.log(props.nameEpisode);
};
console.log("???");
</script>

<style>
:root {
  /* Easily change colors here & remove the color cycle if you wish */
  --background: #999;
  --leftColor: #555;
  --rightColor: black;
  --textColor: white;
  animation: 🛕 15s linear infinite;
}

@keyframes 🛕 {
  0% {
    --background: #999;
    --leftColor: #555;
    --rightColor: black;
    --textColor: white;
  }
  10% {
    --background: purple;
    --leftColor: green;
    --rightColor: orange;
    --textColor: white;
  }
  20% {
    --background: mediumspringgreen;
    --leftColor: palegreen;
    --rightColor: yellow;
    --textColor: black;
  }
  30% {
    --background: dodgerblue;
    --leftColor: tomato;
    --rightColor: deeppink;
    --textColor: white;
  }
  40% {
    --background: darkmagenta;
    --leftColor: darkorange;
    --rightColor: navy;
    --textColor: white;
  }
  50% {
    --background: gold;
    --leftColor: blue;
    --rightColor: red;
    --textColor: white;
  }
  60% {
    --background: deepskyblue;
    --leftColor: greenyellow;
    --rightColor: violet;
    --textColor: black;
  }
  70% {
    --background: seagreen;
    --leftColor: mediumblue;
    --rightColor: darkgoldenrod;
    --textColor: white;
  }
  80% {
    --background: hotpink;
    --leftColor: darkorchid;
    --rightColor: blueviolet;
    --textColor: white;
  }
  90% {
    --background: crimson;
    --leftColor: mediumvioletred;
    --rightColor: teal;
    --textColor: white;
  }
  100% {
    --background: #999;
    --leftColor: #555;
    --rightColor: black;
    --textColor: white;
  }
}

*,
*::before,
*::after {
  font-family: "PT Sans", sans-serif;
  box-sizing: border-box;
}

/* body {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  font-size: 150%;
  transition: font 120ms ease-in-out;
} */

.🚊 {
  width: 20em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--background);
  padding: 1em;
  border-radius: 1em;
  overflow: hidden;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  --speed: 5000ms;
}

#🚊::before,
#🚊::after {
  position: absolute;
  width: calc(100% + 8em);
  height: calc(100% + 8em);
  border-radius: 12em;
  animation: 🚝 var(--speed) cubic-bezier(0.7, 0.34, 0.13, 0.57) infinite;
  animation-direction: alternate;
  content: "";
  z-index: -1;
}

#🚊::before {
  right: 50%;
  background: var(--leftColor);
}

#🚊::after {
  animation: 🚝 var(--speed) cubic-bezier(0.54, 0.94, 0.78, 0.66) infinite;
  animation-direction: reverse;
  left: 50%;
  background: var(--rightColor);
}

@keyframes 🚝 {
  0% {
    transform: rotateZ(0turn);
  }
  100% {
    transform: rotateZ(1turn);
  }
}

#🚊 * {
  position: relative;
  max-width: 100%;
  text-align: center;
  color: var(--textColor);
}

#🚊 h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.05em;
}

#🚊 h1::after {
  position: absolute;
  width: 120%;
  height: 120%;
  background: var(--background);
  border-radius: 0.5em;
  content: "";
  z-index: -1;
}

#🚊 p {
  line-height: 160%;
  padding: 1.5em;
  margin: 0.1em 0.2em 0.15em 0.2em;
  border-radius: 5em;
  backdrop-filter: blur(1em);
}

@media (max-height: 600px) {
  body {
    font-size: 130%;
  }
}

@media (max-height: 500px) {
  body {
    font-size: 110%;
  }
}

@media (max-height: 430px) {
  body {
    font-size: 100%;
  }
}

@media (max-height: 360px) {
  body {
    font-size: 90%;
  }
}

@media (max-width: 500px) {
  body {
    font-size: 100% !important;
  }
}
</style>
