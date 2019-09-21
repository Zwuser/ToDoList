<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 15:53:44
 * @LastEditTime: 2019-09-20 16:59:40
 * @LastEditors: Please set LastEditors
 -->
 <template>
    <div class="button" >
        <el-button-group class="left">
        <el-button type="primary" icon="el-icon-arrow-left" >上个月</el-button>
        </el-button-group>
        <div>{{new Date().getFullYear()}} 年{{new Date().getMonth() + 1}}月 {{new Date().getDate()}}日</div>
        <el-button-group class="right">
         <el-button type="primary" >下个月<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
   .button {
       overflow: hidden;
   }
</style>