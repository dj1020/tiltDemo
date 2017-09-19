<template>
  <div>
    <h1>Hello</h1>
    <p class="hello">{{ msg }}</p>
    <div id="tiltDemo"></div>
  </div>
</template>
<script>
import tilt from 'tilt.js';

export default {
  data () {
    return {
      msg: '這是第一個 Vue 元件檔！'
    }
  },
  mounted() {
    console.log('Started');
    jQuery('#tiltDemo').text('Demo Here');
    jQuery('#tiltDemo').tilt({
      glare: true,
      maxGlare: .5
    });
  }
}
</script>
<style scoped>
h1 {
  color: green;
}
.hello {
  font-size: 1.5em;
  color: blue;
}
#tiltDemo {
  display: block;
  width: 300px;
  height: 300px;
  background-image: linear-gradient(135deg, #ff008a 0%, #101c25 100%);
/*  will-change: transform;
  transform: perspective(300px) rotateX(0deg) rotateY(0deg);
*/}
</style>
