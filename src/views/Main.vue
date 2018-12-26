<template>
  <div class="home">
    <el-row>
      <el-col :span="8">
        <div class="grid grid-logo bg-purple-dark">Logo</div>
      </el-col>
      <el-col :span="16">
        <div class="grid grid-breadcumbs bg-purple-light">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>Депиляция</el-breadcrumb-item>
            <el-breadcrumb-item>Светлые волосы</el-breadcrumb-item>
            <el-breadcrumb-item>Светлая кожа</el-breadcrumb-item>
            <el-breadcrumb-item>рука</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="grid grid-info bg-purple">info</div>
        <router-link tag="span" to="/debug">
          <el-button>Отладка</el-button>
        </router-link>
      </el-col>
      <el-col :span="16">
        <div class="grid grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from "vuex";

// const ws = new WebSocket("ws://localhost:3003");

export default {
  name: "main",
  data() {
    return {
      status: "OFFLINE",
      messageCollection: []
    };
  },
  mounted() {
    // ws.onopen = () => this.setStatus("ONLINE");
    // ws.onclose = () => this.setStatus("DISCONNECTED");
    // ws.onmessage = resp => this.addMessage(resp.data);
    this.startSocket();
  },
  methods: {
    ...mapActions(["startSocket"]),
    setStatus(status) {
      this.status = status;
    },
    addMessage(resp) {
      const message = resp.data;
      console.log(">> message:", resp);
      this.messageCollection.push(resp);
    }
  }
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid {
  border-radius: 4px;
  min-height: 60px;
  padding: 4px;
}
.grid-content,
.grid-info {
  min-height: 360px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
