<template>
  <n-button @click="showModal = true"> Contact </n-button>
  <n-modal v-model:show="showModal" v-if="hostAgency">
    <n-card
      style="width: 600px"
      title="Kontakte"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra></template>
      <div>
       <p class="title">Name:</p>
        {{ hostAgency[0].name }}
      </div>
      <div>
        <p class="title">Telefonnummer:</p>
        {{ hostAgency[0].phoneNumber }}
        </div>
      <div>
        <p class="title">Mail:</p>
        {{ hostAgency[0].mail }}
        </div>
      <div>
        <p class="title">Address:</p>
        {{ hostAgency[0].address }}
        </div>
      <template #Footer> E-mail:ejr138juafr </template>
    </n-card>
  </n-modal>
</template>

<script>
import { useHostAgencyStore } from '@/store/hostAgency.store'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'ContactInfo',
  setup () {
    return {
      showModal: ref(false)
    }
  },
  data () {
    return {
      hostAgency: {}
    }
  },
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  async created () {
    const hostAgencyStore = useHostAgencyStore()
    this.hostAgency = await hostAgencyStore.fetchHostAgencyRecordsForEvent(
      this.event
    )
    console.log(this.hostAgency)
  }
})
</script>
<style scoped>
.title {
  font-size: 17px;
  font-weight: 500
}
</style>
