<template>
    <div>
        <div v-if="kiwiResults">
            <Cards
                :kiwiResults="kiwiResults"
                @save="save" />
        </div>
        <div class="wrapper" v-if="!kiwiResults">
            <div class="gap"></div>
            <p>Fetching flights</p>
        </div>
    </div>
</template>

<script>
import Cards from '@/components/Cards'

export default {
    name: 'Results',
    components: {
        Cards
    },
    props: ['depatureCity', 'depatureDate', 'returnDate', 'kiwiResults', 'savedResults'],
    mounted: function () {
        this.fetchData()
    },
    methods: {
        fetchData () {
            if (this.depatureCity && this.depatureDate && this.returnDate) {
                let API = 'https://api.skypicker.com/flights?partner=picky&v=3&to=US&one_for_city=1&curr=USD&max_stopovers=2&limit=50'
                API += '&price_to=400'
                API += '&flyFrom=' + this.depatureCity.selectedObject.code
                API += '&dateFrom=' + this.depatureDate
                API += '&dateTo=' + this.returnDate

                this.$http.get(API).then((data) => {
                    this.setKiwiResults(data.data.data)
                    console.log(data.data.data)
                })
            }
        },
        setKiwiResults (data) {
            this.$emit('updateData', 'kiwiResults', data)
        },
        save (data) {
            this.$emit('updateData', 'savedResults', data)
        }
    }
}
</script>

<style scoped lang="scss">
</style>
