<!--
 * @Description: 
 * @Autor: destiny-race
 * @Date: 2020-09-20 21:27:51
 * @LastEditTime: 2020-09-20 23:59:33
-->
<template>
  <img :src="state.iconUrl" :id="state.iconNo" class="img-tab-style" />
  <p>{{state.tabName}}</p>
</template>

<script>
import {reactive, toRefs} from "vue"
export default {
  name: "TabOption",
  props: ['tabOptions'],
  setup(props){
    console.log(props,1);
    return reactive({
      state : props.tabOptions
    }
    )
  }, 
  created(){
    console.log(this.tabOptions)
  }
};
</script>
<style>
.img-tab-style {
  width: 0.45rem;
  padding-bottom: 0.1rem;
}
</style>