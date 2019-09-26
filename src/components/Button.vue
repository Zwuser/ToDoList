<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 15:53:44
 * @LastEditTime: 2019-09-22 21:33:24
 * @LastEditors: Please set LastEditors
 -->
 <template>
    <div class="button" >
        <el-button-group class="left">
        <el-button type="primary" icon="el-icon-arrow-left" @click="preMonth">上个月</el-button>     
         <el-button type="primary" @click="nextMonth">下个月<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
    </div>
</template>
<script>

export default {
    methods: {
        preMonth() {
            this.$emit('premonth');
        },
        nextMonth() {
            this.$emit('nextmonth');
        }
    }
}
</script>
<style scoped>
   .button {
       overflow: hidden;
   }
</style>