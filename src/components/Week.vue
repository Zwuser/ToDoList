<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 22:18:30
 * @LastEditTime: 2019-09-21 17:05:25
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div class="week">
        <button  v-for="(it,index) in calendarList" :key="index"  class="date">{{it}}</button>
    </div>
    
</template>
<script>
export default {
    data() {
        return {
          currentDate: new Date(),
          calendarList: [] 
        };
    },
    methods: {
        createCaledarList() {
            let month = this.currentDate.getMonth();
            let date = this.currentDate.getDate();
            let year = this.currentDate.getFullYear();
            let day = this.currentDate.getDay();
            day = this.correctDay(day);
            let fristDay = this.getDayOfFristDay(date,day);
            // let lastDay = this.getDayOfLastDay();
            let days = 0;
            if(month === 1) {
                days = this.getDaysOfMonth(12, year - 1);
            } else {
                days = this.getDaysOfMonth(month - 1, year);
            }
            for(let i = fristDay-1; i>=1; i--) {
                this.calendarList.push(days-i + 1);  
            }
            for(let i = 1;i<=this.getDaysOfMonth(month, year); i++) {
                this.calendarList.push(i);
            }
            for(let i = 1; this.calendarList.length <42; i++) {
                this.calendarList.push(i);
            }
        },
         getDaysOfMonth(month,year) {
            let monthFornonLeapYear = [31,28,31,30,31,30,31,31,30,31,30,31];
            if((year%4 === 0 && year%100 !== 0) || year%400 === 0) {
                if(month === 2) {
                    return 29;
                } else {
                    return monthFornonLeapYear[month];
                }
            } else {
                return monthFornonLeapYear[month];
            }
        },
        getDayOfFristDay(date,day) {
             if((day - (date - 1)) % 7 <= 0) {
                 return (day-(date - 1)) %7 +7;
             } else {
                 return day - (date - 1) %7;
             }
        },
        getDayOfLastDay(date,day,dayOfMonth) {
            if((day+(dayOfMonth - date)) % 7 === 0) {
                return day;
            } else {
                return (day+(dayOfMonth - date)) % 7;
            }
        },
        correctDay(day) {
            if(day === 0) {
                return 7;
            } else {
                return day;
            }
        }
    },
    mounted: function() {
        this.createCaledarList();
    }
}
</script>
<style scoped>
    .date {
        width: 14vw;
        outline: none;
        background-color: antiquewhite;
        height: 10vh;
    }
    .date:hover {
        background-color: aquamarine;
    }
</style>

