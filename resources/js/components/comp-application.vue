<script>
    import compHeader from './comp-header.vue'
    import compFooter from './comp-footer.vue'

    export default {
        components: {
            compHeader,
            compFooter
        },
        mounted() {
            console.log('Application mounted.')
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
    };
</script>

<template>
    <div class="app_wrapper">
        <comp-header />
        <router-view></router-view>
        <comp-footer />
    </div>
</template>