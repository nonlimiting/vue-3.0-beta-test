<!--
 * @Description: 
 * @Autor: destiny-race
 * @Date: 2020-09-20 22:48:28
 * @LastEditTime: 2020-09-20 23:51:30
-->
<template>
  <ul class="flex-box ul-tab-option">
    <li v-for="item in state.tabOptionArr" :key="item.iconNo" >
      <app-tab-option :tabOptions="item"></app-tab-option>
    </li>
  </ul>
</template>

<script>
import {reactive} from 'vue'
import AppTabOption from '../components/TabOptions.vue'
export default {
  name: "AppTab",
  components:{
    "app-tab-option":AppTabOption
  },
  data() {
    return {
      test:"success"
    };
  },
  onCreated(){
    console.log(this.tabOptionArr)
  },

  setup(props,context){
    let state = reactive({
      tabOptionArr: [
        {
          iconNo: "01", //tab项编号
          tabName: "资阳社保", //tab项名称
          iconUrl: "/image/icon/security.png", //tab项icon图标路径 => 图片放自己本地
          tabRouter: "/socialInsurance" //tab项跳转路径
        },
        {
          iconNo: "02",
          tabName: "资阳医保",
          iconUrl: "/image/icon/medical.png",
          tabRouter: "/medicalInsurance"
        },
        {
          iconNo: "03",
          tabName: "资阳健康体检",
          iconUrl: "/image/icon/security.png",
          tabRouter: ""
        },
        {
          iconNo: "04",
          tabName: "资阳广场舞",
          iconUrl: "/image/icon/security.png",
          tabRouter: ""
        }
      ]
    })
    return {state}
  }
};
</script>

<style>
.ul-tab-option {
  text-align: center;
  font-size: 0.13rem;
  padding: 0 6%;
}
.flex-box {
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.ul-tab-option > li {
  list-style: none;
  width: 33.33%;
  padding: 0.2rem 0;
  border-radius: 6px;
}
.ul-tab-option > li:active {
  opacity: 0.8;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>