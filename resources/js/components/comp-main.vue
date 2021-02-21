<template>
    <main class="py-4">
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
    </main>
</template>

<script>
    export default {
        name: 'comp-main',
        data: function() {
            return {
            message: 'hope'
            };
        },
        mounted() {
            console.log('Main mounted.')
        }
    }
</script>


	
