<template>
  <div class="footer">
    <el-tooltip class="item" effect="dark" :content="status" placement="top-start">
      <el-button :type="type" icon="el-icon-check" size="mini" circle></el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Датчик протока ОЖ" placement="top-start">
      <el-button :type="type" icon="el-icon-waterval" size="mini" round></el-button>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    status() {
      return this.$store.getters.getSocketStatus;
    },
    online() {
      return this.$store.getters.isOnline;
    },
    type() {
      return this.online ? "success" : "info";
    },
    iconWater() {
      return this.online ? "success" : "el-icon-close";
    }
  }
};
</script>

<style>
.el-icon-waterval::before {
  content: "\7e";
}
</style>
