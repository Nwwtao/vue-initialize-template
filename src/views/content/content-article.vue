<template>
    <div>
        文章管理
        <Button @click="change">change1</Button>
    </div>
</template>

<script>
export default {
    methods: {
        topage1(name) {
            this.$router.push('/' + name);
        },
        change() {
            console.log(this.$route)
        }
    }
}
</script>
