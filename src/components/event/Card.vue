<template>
  <n-space justify="center">
  <n-card :title="item.name" >
    <template #cover>
      <div class="container">
        <event-image :item="item"/>
        <favourite-button :event="item" class="btn"/>
      </div>
    </template>
  </n-card>
  </n-space>
</template>

<style scoped>
.n-card {
  width: 230px;
  height: 250px;
}

@media only screen and (max-width: 600px) {
.n-card {
  width: 325px;
  height: 350px;
}
}
.container {
  position: relative;
  width: 100%;
  max-width: 400px;
}

.container img {
  width: 100%;
  height: auto;
}

.container .btn {
  position: absolute;
  top: 13%;
  left: 90%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}

.container .btn:hover {
  background-color: black;
}
</style>

<script>
import EventImage from './Image.vue'
import FavouriteButton from '@/components/favourite/FavouriteButton.vue'
export default {
  name: 'EventCard',
  components: {
    EventImage, FavouriteButton
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
