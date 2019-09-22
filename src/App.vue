<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 21:23:30
 * @LastEditTime: 2019-09-22 16:24:08
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <week></week>
  </div>
</template>

<script>
import week from "./components/Week.vue"  
export default {
    components:{
   week
 },
  name: 'App'
}
</script>

<style scoped>
  #app {
    margin: auto;
  }
</style>