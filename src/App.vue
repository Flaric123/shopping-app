<script setup>
  import Card from './components/Card.vue';
  import GridContainer from './components/GridContainer.vue';
  import Header from './components/Header.vue';
  import {onMounted, ref, defineAsyncComponent, computed} from 'vue';
  import {container as modalContainer, openModal} from 'jenesius-vue-modal';
  import ShopItemPage from './components/ShopItemPage.vue';
  import PageSelector from './components/PageSelector.vue';
  import { useLocalStorage } from '@vueuse/core';
  import HomePage from './components/HomePage.vue';
  import CartPage from './components/CartPage.vue';
import PlusMinus from './components/PlusMinus.vue';
  import { Suspense } from 'vue';
import Loading from './components/Loading.vue';
import LoadingCard from './components/LoadingCard.vue';

  const currentPath=ref(window.location.hash);
  const routes={
    '/': HomePage,
    '/cart': CartPage
  }
  
  const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/']
  })

  window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash
})
</script>

<template>
  <Header></Header>
    <component :is="currentView"/>
  <Suspense>
    <template #default>
      <modal-container />
    </template>
    <template #fallback>
      <Loading/>
    </template>
  </Suspense>
</template>

<style scoped>

</style>
