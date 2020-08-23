<template>
  <div class="main">
    <div class="iframeContent">
      <div class="iframeArea">
        <iframe src="#/designBuilder" frameborder="0" height="937" width="100px" style="transform:scale(1);background: yellow;"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.main {
  position: relative;
  height: 100%;
  width: 80%;
}
.iframeContent {
  position: absolute;
  height: 100%;
  width: 100%;
}
.iframeArea {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
