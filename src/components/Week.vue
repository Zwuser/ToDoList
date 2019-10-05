<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 22:18:30
 * @LastEditTime: 2019-10-04 12:04:32
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div class="week">
        <el-row :gutter="14">
            <el-col :span="18">
                <btn @nextmonth='next' @premonth='pre'></btn>
            </el-col>
            <el-col :span="6">
                <el-button icon="el-icon-plus" @click="addlist" circle></el-button>
            </el-col>
        </el-row>
        <div class="el-icon-time time">{{new Date().getFullYear()}}年{{new Date().getMonth() +1 }}月{{new Date().getDate()}}日</div>
        <template v-if="events.length !== 0">
            <!--<div v-for="(event,index) in events" :key="index">标题：{{event.name}}  备注：{{event.remark}}</div>-->
            <el-table :data="events" height="250" border style="width: 100%">

                <el-table-column label="标题" width="180">
                    <template slot-scope="scope">
                        <span style="margin-left:10px ">{{scope.row.name}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="备注" width="180">
                    <template slot-scope="scope">
                        <span style="margin-left:10px">{{scope.row.remark}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="180"> 
                    <template slot-scope="scope">
                        <el-button size="mini" type="danger" @click="mydelete(scope.$index)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </template>
        <template v-else><p>今日无事件</p></template> 
        <div v-for="(date,index) in dateforCalendar" :key="'date' +index" class="date"> {{date}}</div>
        <button  v-for="(it,index) in calendarList" :key="'day' + index"  class="day" :class="[it.disable ? 'disable': '', (it.year === new Date().getFullYear() && it.month === new Date().getMonth() && it.date === new Date().getDate()) ? 'today': '']" @click="setData(it)">{{it.date}}</button>
    </div>
    
</template>
<script>
import btn from './Button.vue'
import axios from 'axios';
export default {
    components: {
        btn
    },
    data() {
        return {
          currentDate: {},
          calendarList: [],
          shareDate: new Date(),
          dateforCalendar: ['一', '二', '三', '四', '五', '六', '日'],
          activeDate: {year: new Date().getFullYear(),
                       month: new Date().getMonth(),
                       date: new Date().getDate()
                      },
          events: []
                
        };
    },
    methods: {
        addlist(){
            this.$router.push({path:'/addList'});
        },
        pre() {
            this.currentDate.month--;
            this.correctCurrent();
            this.calendarCreator();
            this.$router.push({name:'data',params:{year:this.currentDate.year, month: this.currentDate.month + 1}});
        },
        next() {
            this.currentDate.month++;
            this.correctCurrent();
            this.calendarCreator();  
            this.$router.push({name:'data',params:{year:this.currentDate.year,month: this.currentDate.month + 1}});
        },
        init() {
            this.setCurrent();
            this.calendarCreator();
        },
        getDaysByMonth(year,month) {
            return new Date(year, month + 1, 0).getDate();
        },
        setCurrent(d = new Date()) {
            let year = d.getFullYear();
            let month = d.getMonth();
            let date = d.getDate();
            this.currentDate = {
                year, month, date
            };
        },
        correctCurrent() {
            let {year, month, date} = this.currentDate;
            let maxDate = this.getDaysByMonth(year, month);
            date = Math.min(maxDate, date);
            let instance = new Date(year, month, date);
            this.setCurrent(instance);
        },
        calendarCreator() {
            const oneDayMS = 24 * 60 * 60 * 1000;
            let list = [];
            let {year, month} = this.currentDate;
            let firstDay = this.getFirstDayByMonth(year, month);
            let prefixDay = firstDay === 0 ? 6 : firstDay - 1;
            let begin = new Date(year, month, 1).getTime() - (oneDayMS * prefixDay);
            let lastDay = this.getLastDayByMonth(year, month);
            let suffixDay = lastDay === 0 ? 0 : 7 - lastDay;
            let end = new Date(year, month + 1, 0).getTime() + (oneDayMS * suffixDay);
            while(begin <= end) {
                this.shareDate.setTime(begin);
                let year = this.shareDate.getFullYear();
                let curMonth = this.shareDate.getMonth();
                let date = this.shareDate.getDate();
                list.push({
                    year: year,
                    month: curMonth,
                    date: date,
                    disable: curMonth !== month
                });
                begin += oneDayMS;
            }
            this.calendarList = list;
        },
        getFirstDayByMonth(year, month) {
            return new Date(year, month, 1).getDay();
        },
        getLastDayByMonth(year, month) {
            return new Date(year, month + 1, 0).getDay();
        },
        setData(it) {
            this.activeDate = it;
        },
        compute(obj) {
            let year = obj.year;
            let month = obj.month;
            let date = obj.date;
            let Date = '' + year + month + date;
            return Date;
        },
        mydelete(index){

        }
    },
    watch: {
        'activeDate'() {
            let Date = this.compute(this.activeDate);
            axios.get('http://localhost:3000/' + Date)
                 .then(res => {
                     this.events = res.data;
                 });
        }
    },
    mounted() {
        this.init();
        this.$router.push({name: 'data', params: {
            year: new Date().getFullYear(),month: new Date().getMonth() + 1
        }});
        let date = this.compute(this.currentDate);
        axios.get('http://localhost:3000/' + date)
             .then( res => {
                 this.events = res.data;
             });
    }
}
</script>
<style scoped>
    .day {
        width: 12vw;
        outline: none;
        background-color: antiquewhite;
        height: 10vh;
        margin: 5px;
        border: none;
    }
    .day:hover {
        background-color: aquamarine;
    }
    .day:focus {
        background-color: blue;
    }
    .date {
        display: inline-block;
        width: 12vw;
        text-align: center;
        height: 6vh;
        line-height: 6vh;
        margin: 5px;
    }
    .week {
        margin: auto;
    }
    .disable {
        background-color: gainsboro;
    }
    .today {
        border-radius: 2vw;
        background-color: cyan;
    }
    .el-row {
        margin-bottom: 20px
    }
    .time{
        border-radius: 30px;
    }
</style>

