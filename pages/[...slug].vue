<script setup lang="ts">
import { computed, useDocus, useHead } from '#imports'

definePageMeta({
  /* Layout transitions creates layout shifts with defaults */
  layoutTransition: false,
  middleware: ['navigation', 'page'],
})

const { page, theme } = useDocus()
</script>

<template>
  <div>
    <ContentRenderer v-if="page" :key="page._id" class="docus-content" :value="page">
      <template #empty="{ value }">
        This page is empty!
      </template>
    </ContentRenderer>
  </div>
</template>
