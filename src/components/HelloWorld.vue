<template>
  <h1>
    {{ title }}
    <select name="character" id="character" v-model="selectedCharacter">
      <option
        :value="character"
        v-for="character in characters"
        :key="character.char_id"
      >
        {{ character.name }}
      </option>
    </select>

    <select
      name="seasonByCharacter"
      id="seasonByCharacter"
      v-model="selectedSeason"
      v-if="selectedCharacter"
    >
      <option
        :value="seasonByCharacter"
        v-for="seasonByCharacter in selectedCharacter.appearance"
        :key="seasonByCharacter.char_id"
      >
        {{ seasonByCharacter }}
      </option>
    </select>
  </h1>

  <card
    v-if="selectedCharacter"
    :imageUrl="selectedCharacter.img"
    :nickname="selectedCharacter.nickname"
    :name="selectedCharacter.name"
    :status="selectedCharacter.status"
    :birthday="selectedCharacter.birthday"
    :actor="selectedCharacter.portrayed"
  >
  </card>
  <div v-if="selectedCharacter">
    <div
      class="epi"
      v-for="episode in filterEpisodesByCharacter"
      :key="episode.episode_id"
    >
      <cardEpisodes
        :nameEpisode="episode.title"
        :episode="episode.episode"
        :season="episode.season"
      >
      </cardEpisodes>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, computed } from "vue";
import card from "./CardComponent.vue";
import cardEpisodes from "./CardComponetEpisodes.vue";

const title = "allh mia mavrh mera";
const episodes = ref([]);
const characters = ref([]);
const selectedCharacter = ref("");
const selectedSeason = ref([]);

const filterEpisodesByCharacter = computed(() => {
  return episodes.value.filter((episode) => {
    if (selectedCharacter.value) {
      return (
        episode.characters.includes(selectedCharacter.value.nickname) ||
        (episode.characters.includes(selectedCharacter.value.name) &&
          episode.season == selectedSeason.value)
      );
    }
    return episode;
  });
});
console.log(filterEpisodesByCharacter);
const episodesApi = await axios.get("https://breakingbadapi.com/api/episodes");
episodes.value = episodesApi.data;

const charactersApi = await axios.get(
  `https://breakingbadapi.com/api/characters`
);
characters.value = charactersApi.data;
</script>

<style></style>
