<template>
    <a class="flex flex-row relative w-max mx-10" href="#/cart">
            <img src="../assets/shopping-cart.svg" class="aspect-square min-w-[20px]"/>
            <p class="text-xs bg-accent w-[15px] aspect-square rounded-full text-center text-primary absolute inset-x-0 inset-y-3.5">{{products.length}}</p>
    </a>
</template>

<script setup>
import { useStorage } from '@vueuse/core';
    
    const products=useStorage('products',[])
</script>

<style lang="scss" scoped>

</style>