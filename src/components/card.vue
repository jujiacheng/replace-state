<template>
  <div style="height:100%;width:100%">
    <div>我是iframe</div>
    <div>Scale:{{$store.state.scale}}</div>
    <el-button type="primary"
               @click="changeScale">改变Scale</el-button>
  </div>
</template>

<script>
import { Button } from 'element-ui'
export default {
  components: {
    [Button.name]: Button
  },
  methods: {
    changeScale () {
      this.$store.commit('newSacle', parseInt(Math.random() * 100))
    }
  }
}
</script>

<style scoped>
div {
  font-size: 20px;
}
</style>
