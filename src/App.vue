<script setup>
  import Card from './components/Card.vue';
import GridContainer from './components/GridContainer.vue';
  import Header from './components/Header.vue';
  import {onMounted, ref} from 'vue';

  const items=ref([
  {
    'img':'https://cdn.salla.sa/QdwaEo/4ae7d3b6-5d92-4be2-a515-517dc2f134d7-1000x1000-vZv1OKi8VRGjKVrY5WQW1Px6zI3wf9g1NQ8An9Mp.png',
    'title':"Gold ring",
    "price":"12",
    "description":'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'category':'jewelry',
    'rating':'4.56',
  },
  {
    'img':'https://cdn.salla.sa/QdwaEo/4ae7d3b6-5d92-4be2-a515-517dc2f134d7-1000x1000-vZv1OKi8VRGjKVrY5WQW1Px6zI3wf9g1NQ8An9Mp.png',
    'title':"Gold ring",
    "price":"12",
    "description":'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'category':'jewelry',
    'rating':'4.56',
  },
  {
    'img':'https://cdn.salla.sa/QdwaEo/4ae7d3b6-5d92-4be2-a515-517dc2f134d7-1000x1000-vZv1OKi8VRGjKVrY5WQW1Px6zI3wf9g1NQ8An9Mp.png',
    'title':"Gold ring",
    "price":"12",
    "description":'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'category':'jewelry',
    'rating':'4.56',
  },
  {
    'img':'https://cdn.salla.sa/QdwaEo/4ae7d3b6-5d92-4be2-a515-517dc2f134d7-1000x1000-vZv1OKi8VRGjKVrY5WQW1Px6zI3wf9g1NQ8An9Mp.png',
    'title':"Gold ring",
    "price":"12",
    "description":'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'category':'jewelry',
    'rating':'4.56',
  },
  {
    'img':'https://cdn.salla.sa/QdwaEo/4ae7d3b6-5d92-4be2-a515-517dc2f134d7-1000x1000-vZv1OKi8VRGjKVrY5WQW1Px6zI3wf9g1NQ8An9Mp.png',
    'title':"Gold ring",
    "price":"12",
    "description":'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'category':'jewelry',
    'rating':'4.56',
  },
  {
    'img':'https://cdn.salla.sa/QdwaEo/4ae7d3b6-5d92-4be2-a515-517dc2f134d7-1000x1000-vZv1OKi8VRGjKVrY5WQW1Px6zI3wf9g1NQ8An9Mp.png',
    'title':"Gold ring",
    "price":"12",
    "description":'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'category':'jewelry',
    'rating':'4.56',
  },
  {
    'img':'https://cdn.salla.sa/QdwaEo/4ae7d3b6-5d92-4be2-a515-517dc2f134d7-1000x1000-vZv1OKi8VRGjKVrY5WQW1Px6zI3wf9g1NQ8An9Mp.png',
    'title':"Gold ring",
    "price":"12",
    "description":'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'category':'jewelry',
    'rating':'4.56',
  },
  {
    'img':'https://cdn.salla.sa/QdwaEo/4ae7d3b6-5d92-4be2-a515-517dc2f134d7-1000x1000-vZv1OKi8VRGjKVrY5WQW1Px6zI3wf9g1NQ8An9Mp.png',
    'title':"Gold ring",
    "price":"12",
    "description":'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'category':'jewelry',
    'rating':'4.56',
  },
  ]);

  const loadComponents=()=>{
    console.log(items);
  }
</script>

<template>
  <Header></Header>
  <GridContainer>
    <Card v-for="item in items"
    :img="item.img"
    :title="item.title"
    :price="item.price"
    :description="item.description"
    :category="item.category"
    :rating="item.rating"/>
  </GridContainer>
</template>

<style scoped>

</style>
