<!--  -->
<template>
  <div>
      home
  </div>
</template>

<script>
import { reactive,toRefs,onBeforeMount,onMounted} from 'vue'
export default {
    name: '',
      setup() {
          console.log('1-开始创建组件-setup')
          const data = reactive({

          })
          onBeforeMount(() => {
              console.log('2.组件挂载页面之前执行----onBeforeMount')
          })
          onMounted(() => {
              console.log('3.-组件挂载到页面之后执行-------onMounted')
          })
          const refData = toRefs(data);
          return {
              ...refData,
          }

      }
  };
</script>
<style scoped>
    .header .logo{
        width: 31px;
        height: 31px;
        line-height: 31px;
        margin: 16px 28px 16px 0;
        float: left;
    }
    .header .logo img{
        width: 31px;
        height: 31px;
    }
</style>