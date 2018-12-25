<template>
  <div id="app">
    <el-container style="height: 650px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)" v-if="false">
        <el-menu
          collapse="true"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <router-link tag="span" to="/">
            <el-menu-item index="1">
              <i class="el-icon-setting"></i>
              <span>Работа</span>
            </el-menu-item>
          </router-link>
          <router-link tag="span" to="/about">
            <el-menu-item index="2">
              <i class="el-icon-bell"></i>
              <span>Сообщения</span>
            </el-menu-item>
          </router-link>
          <router-link tag="span" to="/settings">
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span>Настройки</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <router-view/>
        </el-main>

        <el-footer>
          <Footer/>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Footer from "./views/Footer.vue";
export default {
  components: {
    Footer
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.el-header,
.el-footer {
  background-color: rgb(227, 231, 236);
  color: #333;
  line-height: 60px;
}
</style>
