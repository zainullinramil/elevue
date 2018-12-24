<template>
  <div class="home">
    <span>Status: {{status}}</span>

    <ul>
      <li v-for="(message, index) in messageCollection" :key="index">{{message}}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

const ws = new WebSocket("ws://localhost:3003");

export default {
  name: "home",
  data() {
    return {
      status: "OFFLINE",
      messageCollection: []
    };
  },
  created() {
    ws.onopen = () => this.setStatus("ONLINE");
    ws.onclose = () => this.setStatus("DISCONNECTED");
    ws.onmessage = resp => this.addMessage(resp.data);
  },
  methods: {
    setStatus(status) {
      this.status = status;
    },
    addMessage(resp) {
      const message = resp.data;
      console.log(">> message:", resp);
      this.messageCollection.push(resp);
    }
  },
  destroyed() {}
};
</script>
