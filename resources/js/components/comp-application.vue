<script>
    import compNavBar from './comp-nav-bar.vue'
    import compMain from './comp-main.vue'

    export default {
        components: {
            compNavBar,
            compMain
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<template>
    <div class="app_wrapper">
        <comp-nav-bar />
        <comp-main />
        <comp-new-widg />
    </div>
</template>