<template>
  <div style="height:100%;width:100%"
       class="designBuilder">
    <card></card>
  </div>
</template>

<script>
import card from '../components/card'
export default {
  name: 'designBuilder',
  components: {
    card
  },
  mounted () {
    this.$store.replaceState(window.top.$vm.$store.state)
  }
}
</script>

<style scoped>
.designBuilder {
  background: yellow;
}
</style>
