<script>
    export default {
        name: 'comp-Footer',
        data: function() {
            return {
            message: 'footer'
            };
        },
        mounted() {
            console.log('Footer mounted.')
        }
    };
</script>

<template>
    <footer class="footer py-4">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="center_wrapper">
                        <form class="navbar-form pull-left">
                            <p>{{ message }}</p>
                          <input type="text" id="input" v-model="message">
                          <button type="submit" class="btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>


	
