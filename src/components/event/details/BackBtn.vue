<template>
    <vue-feather
        class="back"
        type="arrow-left"
        size="30"
        @click= "this.$router.push({name: 'Home'})"
    />
</template>

<script>

export default {
  name: 'BackBtn'
}
</script>
<style>
.back{
    cursor: pointer;
}
</style>
