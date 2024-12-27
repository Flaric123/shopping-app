<template>
    <div class="col-span-4 h-full shadow-lg flex flex-col gap-3 text-fg rounded-xl bg-secondary relative
    min-[500px]:max-md:col-span-6
    min-[0px]:max-[500px]:col-span-full">
        <img class="aspect-square w-[30px] border cursor-pointer border-dashed absolute inset-y-5 inset-x-5 bg-secondary rounded-md opacity-50 transition-all
        hover:opacity-100 hover:scale-110 hover:border-solid"
        v-show="!cartCounter"
        @click="addToCart"
        src="../assets/cart-plus.svg"/>
        <img class="cursor-pointer w-full aspect-[3/4] rounded-xl place-self-center object-contain"
        :src="img"
        @click="onClick"/>
        <PlusMinus v-show="cartCounter" @on-arrow-down="DeleteOnReachingOne"
        v-model="cartCounter"
        class="absolute inset-y-5 border border-fg border-opacity-20 inset-x-5"
        />
        <div class="flex flex-col gap-3 p-3 pb-0">
            <div class="w-full flex flex-row justify-between items-center">
                <p class="text-2xl text-primary font-bold">{{ price }} $</p>
                <div class="w-max h-max flex flex-row gap-2">
                    <img class="aspect-square w-[15px]" src="../assets/star.svg"/>
                    <p class="text-xs text-primary">{{rating.rate}}</p>
                </div>
            </div>
            <p class="text-lg truncate w-full"><span :title="title"></span></p>
        </div>
        <p class="text-lg text-accent text-center bg-primary rounded-b-xl font-bold h-[40px] content-center">{{ category }}</p>
    </div>
</template>

<script setup>
    import { computed, reactive, ref } from 'vue';
    import PlusMinus from './PlusMinus.vue';
    import { useLocalStorage } from '@vueuse/core';

    const products=useLocalStorage('products',[]);
    const {id,img,title,price,category,rating,onClick,addToCart}=defineProps(['img','title','price','category','rating','id','onClick','addToCart'])
    const DeleteOnReachingOne=()=>{
        if(products.value.find(o=>o.id==id).hasCart==0)
            products.value=products.value.filter(obj => obj.id != id)
    }

    const cartCounter=computed({
        get(){
            const items=products.value.find(o=>o.id==id)
            if (items)
                return items.hasCart;
        },
        set(newValue){
           return products.value.find(o=>o.id==id).hasCart=newValue;
        }
    })
</script>

<style lang="css" scoped>
    span[title]::before{
        content:attr(title);
    }
</style>