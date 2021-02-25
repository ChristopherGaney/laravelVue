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
        },
         computed: {
            username() {
              // We will see what `params` is shortly
              return this.$route.params.username
            }
          },
          methods: {
            goBack() {
              window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
            }
          }
    }
</script>

<template>
    <div class="app_wrapper">
        <comp-nav-bar />
        <div class="route_wrap">
            <router-link to="/foo">Go to Foo</router-link>
            <router-link to="/bar">Go to Bar</router-link>
        </div>
        <router-view></router-view>
        <comp-main />
    </div>
</template>