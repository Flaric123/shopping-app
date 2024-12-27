<template>
        <div class="grid grid-cols-[repeat(7,minmax(0px,40px))] gap-5 w-full place-content-center cursor-pointer justify-items-center pb-10 mt-10">
            <img class="w-full aspect-square bg-secondary rounded-xl transition-all
            hover:opacity-50 hover:scale-105
            active:bg-primary" src="../assets/arrow-left.svg" @click="goToPrev"/>
            <PageButton :value="1" @on-number-click="goToNumber" :current="currentPage"/>
            <PageButton :value="currentPage>=4?'...':2" @on-number-click="goToNumber" :current="currentPage"/>
            <PageButton
            :value="currentPage>=4&&currentPage<=7?currentPage:currentPage<4?3:8"
            :current="currentPage"
            @on-number-click="goToNumber"/>
            <PageButton :value="currentPage>=8?9:'...'" :current="currentPage" @on-number-click="goToNumber"/>
            <PageButton :value="maxPage" :current="currentPage" @on-number-click="goToNumber"/>
            <img class="w-full aspect-square bg-secondary rounded-xl transition-all
            hover:opacity-50 hover:scale-105
            active:bg-primary" src="../assets/arrow-right.svg" @click="goToNext"/>
        </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import GridContainer from './GridContainer.vue';
import PageButton from './PageButton.vue';

const goToNext=()=>{
    if (currentPage.value!=maxPage.value){
        currentPage.value++;
    }
}

const goToNumber=(num)=>{
    currentPage.value=num;
}

const goToPrev=()=>{
    if (currentPage.value!=1){
        currentPage.value--;
    }
}

    const currentPage=ref(1);
    const maxPage=ref(10)
    const emit=defineEmits(['onPageSelected'])

    watch(currentPage,(newValue,oldValue)=>{
        emit('onPageSelected',newValue)
    })
</script>

<style lang="scss" scoped>

</style>