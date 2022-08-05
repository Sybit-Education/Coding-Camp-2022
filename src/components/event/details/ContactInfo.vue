<template>
  <vue-feather type="globe" size="17"/>
  <a @click="showModal = true" class="anmeldung">  Anbieter Infos</a>
  <n-modal v-model:show="showModal" v-if="hostAgency">
    <n-card
      style="width: 600px"
      title="Kontakt"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <div>
       <p class="title">Name:</p>
        {{ hostAgency[0].name }}
      </div>
      <div>
        <p class="title">Telefonnummer:</p>
        <p class="text" v-if="hostAgency[0].phoneNumber">{{ hostAgency[0].phoneNumber }}</p>
        <p class="text" v-else>Keine Telefonnummer angegeben</p>
        </div>
      <div>
        <p class="title">Mail:</p>
        <p class="text" v-if="hostAgency[0].mail">{{ hostAgency[0].mail }}</p>
        <p class="text" v-else>Keine Email angegeben</p>
        </div>
      <div>
        <p class="title">Address:</p>
        <p class="text" v-if="hostAgency[0].address">{{ hostAgency[0].address }}</p>
        <p class="text" v-else>Keine Adresse angegeben</p>
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
      hostAgency: []
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
  margin-top: 5px;
  font-size: 17px;
  font-weight: 500
}
.text {
  margin-top: 5px;
}
.anmeldung {
  color: darkblue;
  font-size: 17px;
}
</style>
