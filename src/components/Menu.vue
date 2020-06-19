<template>
    <ul v-bind:class='{ show: show }'>
        <li @click="navigate('/home')">Search</li>
        <li @click="navigate('/saved')">Saved</li>
        <li @click="navigate('/settings')">Settings</li>
        <li @click="navigate('/about')">About</li>
        <li @click="close" class="close"><i class="material-icons">close</i></li>
    </ul>
</template>

<script>
export default {
    name: 'Menu',
    props: ['show'],
    methods: {
        navigate (value) {
            this.$router.push({ path: value })
            this.close()
        },
        close () {
            this.$emit('updateData', 'show', false)
        }
    }
}
</script>

<style lang="scss" scoped>
    ul {
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 9999;
        transform: translate(-200%);
        transition: transform 0.5s ease-in-out;
        margin: 0px;
        padding: 0px;
        width: 100%;
        height: 100%;
        background: #000;
        list-style: none;
        color: #fff;

        li {
            display: block;
            margin: 40px 20px 0px 20px;
            padding-bottom: 20px;
            border-bottom: solid 2px #fff;
            font-family: source-code-pro, monospace;
            font-size: 26px;
        }
    }
    .show {
        transform: translate(0%);
    }
</style>
