<template>
    <div class="app_wrapper">
        <h3>{{ message }}</h3>
        <NavBar />
        <Main />
    </div>
</template>

<script>

    import NavBar from './NavBar.vue'
    import Main from './Main.vue'

    export default {
        components: {
            NavBar,
            Main
        },
       
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
