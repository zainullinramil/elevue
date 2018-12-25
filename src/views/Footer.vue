<template>
    <div class="footer">
        <el-tooltip class="item" effect="dark" :content="status" placement="top-start">
            <el-button :type="type" icon="el-icon-check" size="mini" circle></el-button>
        </el-tooltip>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    computed: {
        status() {
            return this.$store.getters.getSocketStatus;
        },
        online() {
            return this.$store.getters.isOnline;
        },
        type() {
            return this.online ? 'success' : 'info'
        }
    }
}
</script>

