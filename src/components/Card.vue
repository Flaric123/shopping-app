<template>
    <div class="col-span-4 flex flex-col gap-3 text-fg rounded-xl">
        <img class="w-full aspect-[3/4] mb-[20px]" :src="img"/>
        <div class="w-full flex flex-row justify-between">
            <p class="text-2xl text-primary">{{ price }} $</p>
            <div class="w-max h-max flex flex-row gap-2">
                <img class="aspect-square w-[15px]" src="../assets/dollar.svg"/>
                <p class="text-xs text-primary">{{rating}}</p>
            </div>
        </div>
        <p class="text-lg">{{ title }}</p>
        <p class="text-base">{{ description }}</p>
        <p class="text-sm text-accent">{{ category }}</p>

    </div>
</template>

<script setup>
    const {img,title,price,description,category,rating}=defineProps(['img','title','price','description','category','rating'])
</script>

<style lang="scss" scoped>

</style>