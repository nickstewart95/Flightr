<template>
    <div id="app">
        <Menu
            :show="show"
            @updateData="updateData" />
        <header>
            <button @click="toggleMenu" class="hamburger hamburger--collapse" type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>  
          <h1 @click="navigate('/home')">Flightr</h1>
          <div class="icons">
              <button @click="navigate('/home')"><i class="material-icons">search</i></button>
              <button @click="navigate('/saved')"><i class="material-icons">turned_in_not</i></button>
              <button @click="navigate('/settings')"><i class="material-icons">settings</i></button>
          </div>
        </header>
        <div class="content">
            <router-view
                :depatureCity="depatureCity"
                :depatureDate="depatureDate"
                :returnDate="returnDate"
                :kiwiResults="kiwiResults"
                :savedResults="savedResults"
                @updateData="updateData">
            </router-view>
        </div>
    </div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
    name: 'app',
    components: {
        Menu
    },
    data: function () {
        return {
            depatureCity: '',
            depatureDate: new Date(),
            returnDate: new Date(),
            kiwiResults: null,
            savedResults: [],
            show: false
        }
    },
    methods: {
        updateData (prop, value) {
            if (prop === 'savedResults') {
                this.savedResults.push(value)
            } else {
                this[prop] = value
            }
        },
        navigate (value) {
            this.$router.push({ path: value })
        },
        toggleMenu () {
            if (this.show) {
                this.show = false
            } else {
                this.show = true
            }
        }
    }
}
</script>

<style scoped>
    header {
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 9;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 60px;
        background: #fff;
        font-size: 22px;
    }
    h1 {
        font-weight: bold;
    }
    button {
        border: 0px;
        background: none;
    }

    .hamburger {
        transform: scale(.45);
        padding: 0px;
    }
    .icons {
        margin-left: auto;
    }
    .content {
        width: 100%;
        height: 100%;
    }
</style>

<style>
    body {
        margin: 0px;
        padding: 0px;
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
        background: #fff;
        font-family: ff-dagny-web-pro, sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: source-code-pro, monospace;
    }
    h1 {
        font-size: 22px;
        font-weight: normal;
        font-style: italic;
    }

    button {
        padding: 15px;
        background: none;
        border: solid 2px #000;
        font-family: source-code-pro, monospace;
        font-weight: bold;
    }

    #app {
        width: 100%;
        height: 100%;
    }
    .wrapper {
        margin: 0px auto;
        width: 90%;
        height: 100%;
    }
    .gap {
        display: block;
        height: 70px;
    }
</style>