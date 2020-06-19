<template>
    <div class="item">
        <img v-bind:src="this.image">
        <div class="info">
            <span class="city">{{ data.cityTo }}</span>
            <span class="cost">${{ data.price}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SavedItem',
    props: ['data'],
    data: function () {
        return {
            image: 'https://images.kiwi.com/photos/610x251/' + this.data.mapIdto + '.jpg'
        }
    }
}
</script>

<style lang="scss" scoped>
    .item {
        position: relative;
        width: 100%;
        height: 250px;
        overflow: hidden;

        .info {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            position: absolute;
            bottom: 0px;
            left: 0px;
            width: 100%;
            padding: 10px 0px;
            background: rgba(0, 0, 0, .5);
            font-size: 18px;
            color: #fff;

            span {
                margin-left: 10px;
                margin-right: 10px;
            }

            .cost {
                font-family: source-code-pro, monospace;
            }
        }
    }
</style>
