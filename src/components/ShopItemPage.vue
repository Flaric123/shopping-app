<template>
    <Suspense>
        <GridContainer class="relative bg-fg bg-opacity-30 rounded-xl">
            <img class="w-full col-span-6 row-span-6 aspect-auto rounded-xl" :src="product.image"/>
            <p class="col-span-6 text-center text-3xl bg-bg rounded-xl">{{ product.title }}</p>
            <p class="col-span-6 text-center text-base bg-bg rounded-xl w-full break-words">{{ product.description }}</p>
            <div class="w-max h-max p-3 rounded-xl col-span-6 flex flex-row gap-2 bg-bg">
                <img class="aspect-square w-[100px]" src="../assets/star.svg"/>
                <p class="text-7xl self-center text-primary">{{product.rating.rate}}</p>
                <p class="text-5xl ml-8 self-center text-primary">{{ product.rating.count }} отзывов</p>
            </div>
            <p class="text-8xl text-fg font-bold bg-bg col-span-4 row-start-5 shadow-xl w-max place-self-center col-start-8 text-center rounded-xl py-2">{{ product.price }} $</p>
            <p class="text-lg absolute text-accent text-center w-full inset-y-full bg-primary rounded-b-xl font-bold h-[40px] content-center">{{ product.category }}</p>
        </GridContainer>
    </Suspense>
</template>

<script setup>
    import GridContainer from './GridContainer.vue';
    const {product}=defineProps(['product']);
</script>

<style lang="scss" scoped>

</style>