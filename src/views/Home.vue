<template>
  <div class="home">
    <span>{{socketData}}</span>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'

// const ws = new WebSocket("ws://localhost:3003");

export default {
  name: "home",
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
    ...mapActions(['startSocket']),
    setStatus(status) {
      this.status = status;
    },
    addMessage(resp) {
      const message = resp.data;
      console.log(">> message:", resp);
      this.messageCollection.push(resp);
    }
  },
  computed: {
    socketData() {
      return this.$store.getters.getSocketData
    }
  },
};
</script>
