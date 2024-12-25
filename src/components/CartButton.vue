<template>
    <button class="flex flex-row relative w-max mx-10">
        <a href="#/cart">
            <img src="../assets/shopping-cart.svg"/>
        </a>
        <p class="text-xs bg-accent w-[15px] aspect-square rounded-full text-center text-primary absolute inset-x-0 inset-y-3.5">{{products.length}}</p>
    </button>
</template>

<script setup>
import { useStorage } from '@vueuse/core';
import { computed } from 'vue';
    
    const products=useStorage('products',[])
</script>

<style lang="scss" scoped>

</style>