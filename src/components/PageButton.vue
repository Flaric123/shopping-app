<template>
        <button class="w-full aspect-square bg-secondary rounded-lg content-center transition-all
            hover:opacity-50 hover:scale-105 text-fg
            active:bg-primary active:text-bg
            disabled:bg-bg"
            :class="{'bg-accent':value==current}"
            :disabled="value=='...'"
            @click="$emit('onNumberClick',value)">
                <p class="text-center text-3xl">{{value}}</p>
            </button>
</template>

<script setup>
    const {value,current}=defineProps(['value','current'])
</script>

<style lang="scss" scoped>

</style>