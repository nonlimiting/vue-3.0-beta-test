<!--
 * @Description: 
 * @Autor: destiny-race
 * @Date: 2020-09-20 21:27:51
 * @LastEditTime: 2020-09-20 21:40:06
-->
<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
