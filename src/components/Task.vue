<template>

<!--TITULO TASK-->
<div class="task">
    <header>
        <h4 class="text-gray-800 dark:text-gray-100 font-bold mb-3">{{task.title}}</h4>
    </header>
    <div>
        <!-- DESCRIPCION TASK -->
        <p class="text-gray-800 dark:text-gray-100 text-sm">
        {{task.message}}
        </p>
        <div>{{date}}</div>
    </div>
</div>
</template>
<script setup>

// TITULO + DESCRIPTION TASK
import {defineProps, computed} from 'vue'
const props = defineProps({
    task: Object
})

//computed guarda en una variable un computo de una o mas variables reactivas
const date = computed(() => props.task.created_at.toLocaleString())

</script>
<style scoped>

</style>