<template>
    <span class="sm:ml-3">
        <button type="button" 
        class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            {{text}}
        </button>
    </span>
</template>

<script setup lang="ts">
import {toRefs} from "vue";
const props = defineProps({
  text: String
})
const {text} =toRefs(props)
</script>

<style scoped></style>