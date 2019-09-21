<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 21:23:30
 * @LastEditTime: 2019-09-21 16:50:37
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <Button></Button>
    <week></week>
  </div>
</template>

<script>
import week from "./components/Week.vue" 
import Button from "./components/Button.vue"  
export default {
    components:{
   week,
   Button
 },
  name: 'App'
}
</script>

<style>

</style>