<template>
    <div class="wrapper">
        <div class="gap"></div>
        <div class="group locations">
            <span>Leaving From</span>
            <autocomplete
                placeholder="Depature City"
                :source="locations"
                results-property="locations"
                :results-display="displayLocation"
                @selected="setDepatureCity">
            </autocomplete>
        </div>
        <div class="group">
            <span>Depature Date</span>
            <datepicker
                :placeholder="today"
                :format="dateFormat"
                @selected="setDepatureDate">
            </datepicker>
        </div>
        <div class="group">
            <span>Return Date</span>
            <datepicker
                :placeholder="today"
                :format="dateFormat"
                @selected="setReturnDate">
            </datepicker>
        </div>
        <div class="group">
            <button v-on:click="search">Find Flights</button>
        </div>
    </div>
</template>

<script>
import Autocomplete from 'vuejs-auto-complete'
import Datepicker from 'vuejs-datepicker'

export default {
    name: 'Home',
    components: {
        Autocomplete,
        Datepicker
    },
    props: ['depatureCity', 'depatureDate', 'returnDate'],
    data: function () {
        return {
            dateFormat: 'dd/MM/yyyy',
            today: this.$dayjs().format('DD/MM/YYYY')
        }
    },
    methods: {
        locations (input) {
            return 'https://api.skypicker.com/locations?locale=en-US&location_types=city&limit=10&active_only=true&sort=name&term=' + input
        },
        displayLocation (data) {
            return data.name
        },
        setDepatureCity (data) {
            this.$emit('updateData', 'depatureCity', data)
        },
        setDepatureDate (data) {
            let formatDate = this.$dayjs(data).format('DD/MM/YYYY')
            this.$emit('updateData', 'depatureDate', formatDate)
        },
        setReturnDate (data) {
            let formatDate = this.$dayjs(data).format('DD/MM/YYYY')
            this.$emit('updateData', 'returnDate', formatDate)
        },
        search () {
            this.$router.push({ path: 'results' })
        }
    }
}
</script>

<style scoped lang="scss">
    .group {
        margin-top: 40px;
        font-size: 14px;

        > span {
            font-family: source-code-pro, monospace;
        }
    }
    .locations {
        margin-top: 10px;
    }
</style>

<style lang="scss">
    .autocomplete {
        .autocomplete__box {
            padding: 10px 0px;
            border: 0px; //reset
            border-bottom: solid 2px #000;

            img {
                display: none;
            }
            input {
                font-size: 24px;
                color: #000;

                &::placeholder {
                    color: #000;
                }

            }

            .autocomplete__inputs {
                padding: 0px;
            }
        }
        .autocomplete__results {
            border: 0px;
            font-size: 24px;

            .autocomplete__results__item {
                margin: 10px 0px;
            }
        }
    }
    .vdp-datepicker {
        input {
            padding: 10px 0px;
            width: 100%;
            border: 0px; //reset
            border-bottom: solid 2px #000;
            font-size: 24px;

            &::placeholder {
                color: #000;
            }
        }

        .vdp-datepicker__calendar .cell.selected {
            background: #000;
            color: #fff;
        }
    }
</style>


