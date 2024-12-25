<template>
    <div class="w-full flex flex-col">
        <select class="w-full px-2 max-w-[1100px] h-[40px] rounded-md shadow-sm flex outline-none place-self-center mt-10"
    v-model="selectedCategory" @change="categoryChanged">
        <option disabled value="">Please select one</option>
        <option v-for="(c,index) in categories" :value="c" :key="index" class="text-fg">{{ c }}</option>
    </select>
        <GridContainer class="mt-10">
        <AsyncCard v-for="item in newItems" :key="item.id"
        :onClick="(e)=>doSome(item.id)"
        :addToCart="(e)=>addToCart(item.id)"
        :id="item.id"
        :img="item.image"
        :title="item.title"
        :price="item.price"
        :description="item.description"
        :category="item.category"
        :rating="item.rating"/>
        </GridContainer>
        <PageSelector @on-page-selected="newPageSelected"/>
  </div>
</template>

<script setup>
    import Card from './Card.vue';
    import GridContainer from './GridContainer.vue';
    import Header from './Header.vue';
    import {onMounted, ref, defineAsyncComponent} from 'vue';
    import {container as modalContainer, openModal} from 'jenesius-vue-modal';
    import ShopItemPage from './ShopItemPage.vue';
    import PageSelector from './PageSelector.vue';
    import { useLocalStorage } from '@vueuse/core';

    const AsyncCard=defineAsyncComponent({
    loader:()=>import("./Card.vue" /* webpackChunkName: "card" */)
  })

  const AsyncShopItem=defineAsyncComponent({
    loader:()=>import("./ShopItemPage.vue")
  })

  const newItems=ref();
  const categories=ref();
  const currentPath=ref(window.location.hash);
  const selectedCategory=ref()
  const products=useLocalStorage('products',[])

  const doSome=async (id) =>{
    const response=await fetch(`https://fakestoreapi.com/products/${id}`).then(res=>res.json())
    openModal(AsyncShopItem,{product:await response})
  }

  const addToCart=(id)=>{
    console.log(products.value)
    products.value.push(id);
  }

  const categoryChanged=async (e)=>{
    const response=await fetch(`https://fakestoreapi.com/products/category/${e.target.value}?limit=10`).then(res=>res.json())
    newItems.value=await response;
  }

  const newPageSelected=async (page)=>{
    const response=await fetch(`https://fakestoreapi.com/products?limit=100`).then(res=>res.json())
    const pagedResponse=await response.slice((page-1)*10,page*10)
    newItems.value=pagedResponse
  }

  onMounted(async ()=>{
    let response=await fetch('https://fakestoreapi.com/products?limit=10').then(res=>res.json())
    newItems.value=await response;
    response=await fetch('https://fakestoreapi.com/products/categories').then(res=>res.json())
    categories.value=await response;
  })
</script>