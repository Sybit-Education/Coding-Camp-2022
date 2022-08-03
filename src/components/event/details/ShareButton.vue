<template>
<vue-feather type="share-2" size="30" @click="shareViaWebShare"/>
</template>
<script>
export default {
  name: 'ShareButton',
  data () {
    return {
      text: 'Schau dir dieses Coole Event an'
    }
  },
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  computed: {
    webShareApiSupported () {
      return navigator.share
    }
  },
  methods: {
    shareViaWebShare () {
      navigator.share({
        title: this.event.name,
        text: this.text,
        url: `${window.location.href}`
      })
    }
  }
}

</script>
