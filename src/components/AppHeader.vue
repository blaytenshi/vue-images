<template>
    <div class="ui secondary pointing menu">
        <a href="/" class="active item">
            Image Storage
        </a>
        {{ isLoggedIn }}
        <div class="right menu">
            <a href="#" class="ui item" @click="login">Login</a>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'AppHeader',
    // methods accept arguments, used to respond to events from the DOM
    methods: { // alternatively you can also just do methods: mapActions(['login'])
        ...mapActions(['login']), // this is a list of function names you wanna map into the methods property
        // i prefer this syntax because it allows you to add other methods on should you need it.
    },
    // computed does NOT accept arguments, used to recompute values as needed from other sources (eg data)
    computed: {
        // same as mapActions but this maps the Getters instead.
        // we put this in computed prop because 
        ...mapGetters(['isLoggedIn'])
    }
}
</script>

<style scoped>

</style>