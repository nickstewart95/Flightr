<template>
    <div class="wrapper">
        <div class="gap"></div>
            <vue-swing
                @throwoutleft="dislike"
                @throwoutright="like"
                :config="config">
                <Card v-for="result in kiwiResults" :key="result.id" :data="result" />
            </vue-swing>

            <div class="card-actions">
                <button class="dislike"><i class="material-icons">close</i></button>
                <button class="like"><i class="material-icons">airplanemode_active</i></button>
            </div>
            <svg><use xlink:href="#entypo-star" /></svg>
        </div>
    </div>
</template>

<script>
import VueSwing from 'vue-swing'
import Card from './Card'

export default {
    name: 'Cards',
    components: {
        VueSwing,
        Card
    },
    props: ['kiwiResults', 'savedResults'],
    data: function () {
        return {
            config: {
                allowedDirections: [
                    VueSwing.Direction.LEFT,
                    VueSwing.Direction.RIGHT
                ],
                minThrowOutDistance: 800,
                maxThrowOutDistance: 1600
            }
        }
    },
    methods: {
        dislike (target) {
            console.log(`Dislike ${target}!`)
        },
        like (event) {
            this.kiwiResults.forEach(result => {
                if (result.id === event.target.id) {
                    this.$emit('save', result)
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .wrapper {
        > div:nth-of-type(2) {
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 2;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
        }
    }
    .card-actions {
        position: absolute;
        bottom: 0px;
        left: 0px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 30px 0px;
        width: 100%;
        
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            background: none;
            border: 0px;
            border-radius: 25px;
            font-weight: 700;
            font-size: 22px;
            color: #fff;
            
            &:first-child {
                margin-right: 30px;
            }
        }
        
        .dislike {
            background: #fff;
            border: solid 2px #000;
            color: #000;
        }
        .like {
            background: #000;
            border: solid 2px #fff;
            color: #fff;
        }
    }
</style>
