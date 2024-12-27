<template>
    <GridContainer class="mt-20">
        <p class="col-start-3 text-3xl text-center">Корзина</p>
        <p class="col-start-9 col-span-2 text-end w-full place-self-end">Предметов: {{storage.length}}</p>
        <div class="h-[1px] w-full col-start-3 col-end-11 place-self-center col-span-full bg-fg"></div>
        <div class="col-start-3 gap-5 col-span-8 rounded-xl bg-secondary p-2 grid grid-cols-12 place-content-center items-center"
        v-for="(item,ind) in storage" :key="ind">
            <img :src="item.image" class="aspect-square min-h-3 min-w-3"/>
            <p class="col-span-9 place-content-center text-start">{{ item.title }}</p>
            <p class="font-bold col-span-2"> <span v-show="item.hasCart">{{ `${item.hasCart} x` }}</span>  {{item.price}} $</p>
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