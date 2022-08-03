<template>
  <n-button @click="showModal = true"> Contact </n-button>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
      title="Kontakte"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra></template>
      Telefonnummer: 1239128389123
      <p>E-Mail:amogus@sus.imposter</p>
      <template #Footer> E-mail:ejr138juafr </template>
    </n-card>
  </n-modal>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ContactInfo',
  setup () {
    return {
      showModal: ref(false)
    }
  }
})
</script>
