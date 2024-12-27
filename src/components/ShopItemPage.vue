<template>
        <GridContainer class="relative w-max bg-fg h-[600px] bg-opacity-30 rounded-xl
        min-[0px]:max-md:px-2"
        v-if="product">
                <img class="w-full col-span-6 row-span-6 aspect-auto rounded-xl place-self-center
                min-[0px]:max-md:col-span-full min-[0px]:max-md:max-w-[300px]
                md:max-[9999px]:max-w-[400px]" :src="product.image"/>
                <p class="col-span-6 text-center text-3xl bg-bg rounded-xl
                min-[0px]:max-md:col-span-full">{{ product.title }}</p>
                <p class="col-span-6 text-center text-base bg-bg rounded-xl w-full
                min-[0px]:max-md:col-span-full">{{ product.description }}</p>
                <div class="w-full h-max justify-between rounded-xl col-span-6 flex flex-row gap-2 bg-bg
                md:max-lg:flex-col md:max-lg:w-max md:max-lg:place-self-center min-[0px]:max-md:max-w-max min-[0px]:max-md:gap-5
                min-[0px]:max-[430px]:flex-col min-[0px]:max-[430px]:gap-0">
                    <div class="flex flex-row p-3 gap-1.5
                    min-[0px]:max-md:p-1">
                        <img class="aspect-square w-[100px]
                        min-[0px]:max-md:w-[30px]" src="../assets/star.svg"/>
                        <p class="text-7xl self-center text-primary
                        min-[0px]:max-md:text-3xl">{{product.rating.rate}}</p>
                    </div>
                    <p class="text-5xl self-center text-primary
                    min-[0px]:max-md:text-lg">{{ product.rating.count }} отзывов</p>
                </div>
                <p class="text-8xl w-full max-w-max text-fg font-bold bg-bg col-span-full row-start-5 shadow-xl place-self-center col-start-7 text-center rounded-xl py-2
                min-[0px]:max-md:row-start-9 min-[0px]:max-md:text-3xl">{{ product.price }} $</p>
                <p class="text-lg absolute text-accent text-center w-full inset-y-full bg-primary rounded-b-xl font-bold h-[40px] content-center">{{ product.category }}</p>
        </GridContainer>
        <div
        v-else-if="productStatus==='pending'"
        class="w-full bg-fg h-full bg-opacity-30 rounded-xl flex place-items-center">
            <Loading class="w-full place-self-center self-center"/>
        </div>
</template>

<script setup>
    import GridContainer from './GridContainer.vue';
    import { useQuery } from '@tanstack/vue-query';
    import Loading from './Loading.vue';
import { onMounted } from 'vue';
    const {id}=defineProps(['id'])
    
    const fetchproduct=async ()=>{
        const response=await fetch(`https://fakestoreapi.com/products/${id}`).then(res=>res.json())
        return await response;
    }

    const {status:productStatus, data: product, error:productsError, refetch:productRefetch}=useQuery({
        queryKey: ['product'],
        queryFn: fetchproduct,
    })

    onMounted(()=>{
        console.log(product)
        productRefetch();
    })
</script>

<style lang="scss" scoped>

</style>