<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 22:15:07
 * @LastEditTime: 2019-10-04 12:03:51
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
    <el-form ref="form" :model="form" label-width="80px" class="form">
        <el-form-item label="标题">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="地点">
            <el-input v-model="form.region"></el-input>
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
    <p>data:{{ data }}</p>
</div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return {
            form:{
                name:'',
                region:'',
                date:'',
                time:'',
                remark:''
            },
            data: ''
        }
    },
    methods:{
        onSubmit(){
            let year = this.form.date.getFullYear();
            let month = this.form.date.getMonth();
            let date = this.form.date.getDate();
            let id = '' + year + month +date;
            axios.post('http://localhost:3000/', {form: this.form,id: id });
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