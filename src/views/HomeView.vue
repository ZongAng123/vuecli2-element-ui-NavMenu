<template>
  <div class="home">
    <div class="line"></div>
    <el-menu 
    :default-active="activeIndex2" 
    class="el-menu-demo" 
    mode="horizontal" 
    @select="handleSelect"
    background-color="#545c64" 
    text-color="#fff" 
    active-text-color="#ffd04b" router>
      <el-menu-item index="/shouye">
          <img src="https://cdn.leoao.com/ow/%E5%AE%98%E7%BD%91-%E9%A6%96%E9%A1%B5_03.png" 
            class="icon" data-v-204a8542="">
            <!-- 乐刻运动 -->
      </el-menu-item>
      <el-menu-item index="/guanyu">关于乐刻</el-menu-item>
      <el-menu-item index="/zhanwei">开放平台</el-menu-item>
      <el-menu-item index="/join">品牌矩阵</el-menu-item>
      <el-menu-item index="/xiaoxi">乐刻运动研训中心</el-menu-item>
      <!-- <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="/zhanwei">空数据页</el-menu-item>
        <el-menu-item index="/zhanwei">展位页面</el-menu-item>
        <el-menu-item index="/zhanwei">展位页面</el-menu-item>
      </el-submenu> -->
    </el-menu>
    <router-view></router-view>
    
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
}
</script>
