<template lang="html">
  <div>
    <div class="message">
    {{message}}
    </div>
    <div data-tilt id="demo">
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: 'About',
      }
    }
  }
</script>

<style scope lang="sass">
  .message 
    color: green
    font-size: 1.4em
  #demo
    width: 200px
    height: 200px
    background-image: url('https://www.everfuntravel.com/promo/special/aurora/images/iceland_2.jpg')
</style>