<template>
    <div class="col-span-4 h-max flex flex-col gap-3 text-fg rounded-xl bg-secondary cursor-pointer relative" @click="onItemClick">
        <img class="aspect-square w-[30px] absolute inset-y-5 inset-x-5 bg-secondary rounded-md opacity-50 transition-all
        hover:opacity-100" src="../assets/cart-plus.svg"/>
        <img class="w-full aspect-[3/4] rounded-xl place-self-center object-cover" :src="img"/>
        <div class="flex flex-col gap-3 p-3 pb-0">
            <div class="w-full flex flex-row justify-between items-center">
                <p class="text-2xl text-primary font-bold">{{ price }} $</p>
                <div class="w-max h-max flex flex-row gap-2">
                    <img class="aspect-square w-[15px]" src="../assets/star.svg"/>
                    <p class="text-xs text-primary">{{rating}}</p>
                </div>
            </div>
            <p class="text-lg">{{ title }}</p>
            <p class="text-base">{{ description }}</p>
        </div>
        <p class="text-lg text-accent text-center bg-primary rounded-b-xl font-bold h-[40px] content-center">{{ category }}</p>
    </div>
</template>

<script setup>
    const onItemClick=()=>{
        console.log('You clicked on shop item!');
    }

    const {img,title,price,description,category,rating}=defineProps(['img','title','price','description','category','rating'])
</script>

<style lang="scss" scoped>

</style>