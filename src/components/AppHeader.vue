<template>
    <div class="ui secondary pointing menu">
        <a href="/" class="active item">
            Image Storage
        </a>
        <div class="right menu">
            <a href="#" class="ui item" @click="login">Login</a>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'AppHeader',
    methods: { // alternatively you can also just do methods: mapActions(['login'])
        ...mapActions(['login']), // this is a list of function names you wanna map into the methods property
        // i prefer this syntax because it allows you to add other methods on should you need it.
    }
}
</script>

<style scoped>

</style>