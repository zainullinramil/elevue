<template>
  <div class="debug">
    <h3>Отладка</h3>
    <ul>
      <li v-for="(data, index) in socketData" :key="index" v-show="data">{{index}}: {{data}}</li>
    </ul>
    <router-link tag="span" to="/">
      <el-button>Назад</el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Settings",
  computed: {
    socketData() {
      return this.$store.getters.getSocketData;
    }
  }
};
</script>
