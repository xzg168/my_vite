<!--  -->
<template>
  <div>
      <a-layout>
          <a-layout-header class="header">
            <div class="logo" >
                <img src="../assets/logo.png" alt="">
            </div>
            <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }" @click="handleChangeMenu">
                <a-menu-item key="1">
                主页
                </a-menu-item>
                <a-menu-item key="2">
                简介
                </a-menu-item>
                <a-menu-item key="3">
                抽奖
                </a-menu-item>
            </a-menu>
        </a-layout-header>
        <a-layout-content class="mainContent">
            <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
            Vite+Antd+Vue3 ©2020 Created by XZG
        </a-layout-footer>
      </a-layout>
  </div>
</template>

<script>
import { reactive,toRefs,computed,onBeforeMount,onMounted} from 'vue'
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
    name: '',
      setup() {
          const router = useRouter();
          const store = useStore();
          console.log('1-开始创建组件-setup')
          const data = reactive({

          })
          onBeforeMount(() => {
              console.log('2.组件挂载页面之前执行----onBeforeMount')
          })
          onMounted(() => {
              console.log('3.-组件挂载到页面之后执行-------onMounted')
          })
          const handleChangeMenu=({item,key,keyPath})=>{
            store.commit("changeActivePath", key);
            if (key === "1") {
                router.push({ path: "/home" });
            } else if (key === "3") {
                router.push({ path: "/lottery" });
            } else {
            }
          }
          const refData = toRefs(data);
          return {
              ...refData,
              handleChangeMenu,
              activeIndex: computed(() => store.getters.getActivePath)
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