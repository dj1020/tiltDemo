<template>
  <div>
    <h1>Hello</h1>
    <p class="hello">{{ msg }}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '這是第一個 Vue 元件檔！'
    }
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
</style>
