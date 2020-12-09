<template>
    <div id="main" class="app-main">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        topage1(name) {
            this.$router.push('/' + name);
        },
        change1() {
            console.log(this.$route)
        }
    },
    updated() {
        this.$nextTick(() => {
            if (this.$refs.menu) {
                this.$refs.menu.updateOpened();
            }
        });
    }
}
</script>
