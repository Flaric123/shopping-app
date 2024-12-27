<template>
    <div class="flex flex-col h-max w-7 rounded-xl">
        <button class="aspect-[2/1] w-full rounded-tl-xl rounded-tr-xl bg-secondary"
        @click="AddProduct">
            +
        </button>
        <input type="text" readonly class="bg-fg text-secondary shadow-inner aspect-auto w-full outline-none text-center bg-opacity-70"
        v-model="model"/>
        <button class="aspect-[2/1] w-full rounded-bl-xl rounded-br-xl bg-secondary"
        @click="DeleteProduct">
            -
        </button>
    </div>
</template>

<script setup>
    const model=defineModel();
    const emit=defineEmits(['onArrowUp','onArrowDown'])

    const AddProduct=()=>{
        model.value++;
        emit('onArrowUp')
    }

    const DeleteProduct=()=>{
        model.value--;
        emit('onArrowDown')
    }
</script>

<style lang="css" scoped>

</style>