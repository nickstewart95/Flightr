<template>
    <div class="wrapper">
        <div class="gap"></div>
        <div v-if="this.savedResults" class="items">
            <SavedItem v-for="result in this.savedResults" :key="result.id" :data="result" />
        </div>
        <div v-id="!this.savedResults">
            <p>No saved items</p>
        </div>
    </div>
</template>

<script>
import SavedItem from '@/components/SavedItem'

export default {
    name: 'Saved',
    components: {
        SavedItem
    },
    props: ['savedResults'],
    methods: {
    }
}
</script>

<style scoped lang="scss">
</style>