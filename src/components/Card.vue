<template>
    <div class="col-span-4 h-full shadow-lg flex flex-col gap-3 text-fg rounded-xl bg-secondary relative">
        <img class="aspect-square w-[30px] border border-dashed absolute inset-y-5 inset-x-5 bg-secondary rounded-md opacity-50 transition-all
        hover:opacity-100 hover:scale-110 hover:border-solid"
        @click="addToCart"
        src="../assets/cart-plus.svg"/>
        <img class="cursor-pointer w-full aspect-[3/4] rounded-xl place-self-center object-contain"
        :src="img"
        @click="onClick"/>
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
    const {id,img,title,price,category,rating,onClick,addToCart}=defineProps(['img','title','price','category','rating','id','onClick','addToCart'])
</script>

<style lang="scss" scoped>
    span[title]::before{
        content:attr(title);
    }
</style>