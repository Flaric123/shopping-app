<template>
    <GridContainer class="mt-20">
        <p class="col-start-3 text-3xl col-span-3 text-start
        min-[0px]:max-md:text-start">Корзина</p>
        <p class="col-start-8 col-span-3 text-end self-end
        min-[0px]:max-md:row-start-2 min-[0px]:max-md:col-start-3 min-[0px]:max-md:text-start">Предметов: {{storage.length}}</p>
        <div class="h-[1px] w-full col-start-3 col-end-11 place-self-center col-span-full bg-fg"></div>
        <div class="col-start-3 gap-5 col-span-8 rounded-xl bg-secondary p-2 grid grid-cols-12 place-content-center items-center"
        v-for="(item,ind) in storage" :key="ind">
            <img :src="item.image" class="aspect-square min-w-[40px] w-full place-self-center
            min-[0px]:max-md:col-span-full min-[0px]:max-md:max-w-[300px]"/>
            <p class="col-span-9 place-content-center text-start
            min-[0px]:max-md:col-span-full min-[0px]:max-md:text-center">{{ item.title }}</p>
            <p class="font-bold col-span-2
            min-[0px]:max-md:col-span-full min-[0px]:max-md:text-center min-[0px]:max-md:underline"> <span v-show="item.hasCart">{{ `${item.hasCart} x` }}</span>  {{item.price}} $</p>
        </div>
        <div v-show="storage.length!=0" class="h-[1px] w-full col-start-3 col-end-11 place-self-center col-span-full bg-fg"></div>
        <a class="underline col-start-3 col-span-2 cursor-pointer text-primary"
        @click="deleteProducts">Удалить товары</a>
        <p class="col-start-9 col-span-2 text-center w-full place-self-end font-bold">{{allSum.toFixed(2)}} $</p>
    </GridContainer>
</template>

<script setup>
    import { useLocalStorage } from '@vueuse/core';
    import GridContainer from './GridContainer.vue';
    import { computed, onMounted, ref } from 'vue';
    const storage=useLocalStorage('products',[]);

    const allSum=computed(()=>{
        return storage.value.reduce(
            (accumulator,currentValue)=>accumulator+currentValue.price*(currentValue.hasCart??1),
            0
        )}
    )

    const deleteProducts=()=>{
        storage.value=[];
    }
</script>

<style lang="scss" scoped>

</style>