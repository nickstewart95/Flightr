<template>
    <div v-bind:id="data.id" class="card">
        <img v-bind:src="this.image">
        <div class="information">
            <div class="info">
                <span class="city">{{ data.cityTo }}</span>
                <span class="state">{{ this.state }}</span>
            </div>
            <div class="cost">
                <span>${{ data.price }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['data'],
    data: function () {
        return {
            state: '',
            image: 'https://images.kiwi.com/photos/472x560/' + this.data.mapIdto + '.jpg'
        }
    },
    created: function () {
        this.getState()
    },
    methods: {
        getState () {
            let loc = this.data.mapIdto.split('_')
            this.state = loc[1]
        }
    }
}
</script>

<style lang="scss" scoped>
    .card {
        align-items: center;
        background-color: #fff;
        border: solid 2px #000;
        display: flex;
        font-size: 72px;
        height: 70%;
        justify-content: center;
        left: 15%;
        position: absolute;
        top: 100px;
        width: 70%;
        overflow: hidden;

        .information {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            position: absolute;
            bottom: 0px;
            left: 0px;
            padding: 10px 0px;
            width: 100%;
            background: rgba(0, 0, 0, .5);
            color: #fff;

            .info {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 40%;
            }
            .city {
                text-align: center;
                font-size: 22px;
            }
            .state {
                font-size: 18px;
                text-transform: uppercase;
            }
            .cost  {
                font-size: 28px;
                font-family: source-code-pro, monospace;
            }
        }
    }
</style>
