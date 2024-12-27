<template>
    <div class="w-full flex flex-col gap-2 mt-5">
        <select class="w-full px-2 max-w-[1100px] h-[40px] rounded-md shadow-sm flex outline-none place-self-center"
    v-model="selectedCategory" @change="categoryChanged">
        <option value="All">Все</option>
        <option v-for="(c,index) in categories" :value="c" :key="index" class="text-fg">{{ c }}</option>
    </select>
        <GridContainer class="mt-5">
          <Card v-for="item in newItems" :key="item.id"
          :onClick="(e)=>onShopItemClick(item.id)"
          :addToCart="(e)=>addToCart(item)"
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
    import GridContainer from './GridContainer.vue';
    import { ref, defineAsyncComponent, reactive} from 'vue';
    import {config, openModal} from 'jenesius-vue-modal';
    import PageSelector from './PageSelector.vue';
    import { useLocalStorage } from '@vueuse/core';
    import LoadingCard from './LoadingCard.vue';
    import Loading from './Loading.vue';
    import ShopItemPage from './ShopItemPage.vue';
    import Card from './Card.vue';

  const newItems=ref(await fetch('https://fakestoreapi.com/products?limit=10').then(res=>res.json()));
  const categories=ref(await fetch('https://fakestoreapi.com/products/categories').then(res=>res.json()));
  const selectedCategory=ref('All')
  const products=useLocalStorage('products',[])

  const onShopItemClick=(id) =>{
    openModal(ShopItemPage,{id: id})
  }

  const addToCart=(item)=>{
      if (products.value.find(o=>o.id==item.id)==undefined){
        item.hasCart=1;
        products.value.push(item);
      }
      else{
        const prod=products.value.find(o=>o.id==item.id).hasCart
        console.log(prod)
        products.value.find(o=>o.id==item.id).hasCart=+prod+1
      }
  }

  const categoryChanged=async (e)=>{
    if(e.target.value=='All'){
      newItems.value=null;
      const response=await fetch('https://fakestoreapi.com/products?limit=10').then(res=>res.json())
      newItems.value=await response;
    }
    else{
      newItems.value=null;
      const response=await fetch(`https://fakestoreapi.com/products/category/${e.target.value}?limit=10`).then(res=>res.json())
      newItems.value=await response;
    }
}

  const newPageSelected=async (page)=>{
    const response=await fetch(`https://fakestoreapi.com/products?limit=100`).then(res=>res.json())
    newItems.value=await response.slice((page-1)*10,page*10)
  }
</script>