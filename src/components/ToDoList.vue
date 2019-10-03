<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 22:15:07
 * @LastEditTime: 2019-09-19 22:15:07
 * @LastEditors: your name
 -->
<template>
    <el-form ref="form" :model="from" label-width="80px" class="form">
        <el-form-item label="标题">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="地点">
            <el-input v-model="region"></el-input>
        </el-form-item>
        <el-form-item label="活动时间">
            <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width:100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
                <el-time-picker placeholder="选择时间" v-model="form.time" style="width:100%;"></el-time-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="备注">
            <el-input type="textarea" v-model="form.remark"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">创建日程</el-button>
            <el-button @click="home">返回</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
export default {
    data(){
        return {
            form:{
                name:'',
                region:'',
                date:'',
                time:'',
                remark:''
            }
        }
    },
    methods:{
        onSubmit(){
        },
        home(){
            this.$router.push({path:'/'});
        }
    }
}
</script>
<style scoped>
    .form{
        width: 50%;
    }
</style>