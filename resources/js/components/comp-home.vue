<script>
    export default {
        name: 'comp-Home',
        data: function() {
            return {
            message: 'This is the home template for whatever "Home" is.'
            };
        },
        mounted() {
            console.log('Home mounted.')
        }
    };
</script>

<template>
    <secton class="home">
        <div class="py-4">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <div class="center_wrapper">
                            <h1>{{ message }}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </secton>
</template>
