<template>
    <div class="sm:ml-3">
        <button
            class="relative rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            {{ text }}
        </button>
    </div>
</template>


<script setup lang="ts">
import {toRefs} from "vue";
const props = defineProps({
  text: String
})
const {text} =toRefs(props)
</script>

<style scoped></style>