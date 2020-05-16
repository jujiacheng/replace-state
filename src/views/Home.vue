<template>
  <div class="home">
    <div class="pink">
      <div>我是主页面</div>
      <div>Scale:{{$store.state.scale}}</div>
      <el-button type="primary"
                 @click="changeScale">改变Scale</el-button>
    </div>
    <mainContent></mainContent>
  </div>
</template>

<script>
// @ is an alias to B/src
import mainContent from './main'
import { Button } from 'element-ui'
export default {
  name: 'Home',
  components: {
    mainContent,
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
.home {
  display: flex;
  height: 100vh;
}
.pink {
  background: pink;
  height: 100%;
  width: 20%;
}
</style>
