<template>
  <div id="app">
    <el-container style="height: 600px; border: 1px solid #eee">

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
