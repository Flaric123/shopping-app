<template>
    <div class="w-full flex flex-col gap-2 mt-5">
        <select class="w-full px-2 max-w-[1100px] h-[40px] rounded-md shadow-sm flex outline-none place-self-center"
        v-model="selectedCategory"
        @change="categoryChanged"
        v-if="categories">
          <option value="All">Все</option>
          <option v-for="(c,index) in categories" :value="c" :key="index" class="text-fg">{{ c }}</option>
        </select>
        <Loading v-else-if="categoriesStatus==='pending'"/>
        <p v-if="items&&items.length==0" class="text-center">По вашему запросу ничего не найдено</p>
        <GridContainer class="mt-5
        min-[0px]:max-md:px-2" v-if="items">
          <Card v-for="item in items" :key="item.id"
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
        <Loading v-else-if="itemsStatus==='pending'"/>
        <PageSelector @on-page-selected="newPageSelected" v-model="page"/>
  </div>
</template>

<script setup>
    import GridContainer from './GridContainer.vue';
    import { ref } from 'vue';
    import {openModal} from 'jenesius-vue-modal';
    import PageSelector from './PageSelector.vue';
    import { useLocalStorage } from '@vueuse/core';
    import LoadingCard from './LoadingCard.vue';
    import Loading from './Loading.vue';
    import ShopItemPage from './ShopItemPage.vue';
    import Card from './Card.vue';
    import { useQuery } from '@tanstack/vue-query';

  const selectedCategory=ref('All')
  const products=useLocalStorage('products',[])
  const page=ref(1);

  const fetchItems=async (page=null)=>{
    if (page!=null&&page!=undefined){
      const response= await fetch(`https://fakestoreapi.com/products${selectedCategory.value!=='All'?`/category/${selectedCategory.value}`:''}?limit=100`).then(res=>res.json())
      return await response.slice((page-1)*10,page*10);}
    else{
      const response=await fetch(`https://fakestoreapi.com/products${selectedCategory.value!=='All'?`/category/${selectedCategory.value}`:''}?limit=10`).then(res=>res.json())
      return await response}
  }

  const fetchCategories=async (id=null)=>{
    if (id==null){
      const response=await fetch(`https://fakestoreapi.com/products/category/${id}?limit=10`).then(res=>res.json())
      return await response}
    else
      return await fetch('https://fakestoreapi.com/products/categories').then(res=>res.json());
  }

  const {status:itemsStatus, data: items, refetch: refetchItems, error:itemsError}=useQuery({
    queryKey: ['items',page],
    queryFn: ()=>fetchItems(page.value),
  })

  const {status: categoriesStatus, data: categories, refetch: refetchCategories, error: categoriesError}=useQuery({
    queryKey: ['categorie'],
    queryFn: fetchCategories,
  })

  const onShopItemClick=(id) =>{
    openModal(ShopItemPage,{id: id})
  }

  const addToCart=(item)=>{
      if (products.value.find(o=>o.id==item.id)==undefined){
        const copy={...item}
        copy.hasCart=1;
        products.value.push(copy);
      }
      else{
        const prod=products.value.find(o=>o.id==item.id).hasCart
        console.log(prod)
        products.value.find(o=>o.id==item.id).hasCart=+prod+1
      }
  }

  const categoryChanged=()=>{
    refetchItems();
  }

  const newPageSelected= ()=>{
    refetchItems();
  }
</script>