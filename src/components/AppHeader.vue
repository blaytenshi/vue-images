<template>
    <div class="ui secondary pointing menu">
        <router-link to="/" class="active item">
            Image Storage
        </router-link>
        <div class="right menu">
            <div class="horizontal" v-if="isLoggedIn">
                <router-link to="/" class="item">Galleries</router-link>
                <router-link to="/upload" class="item">Upload</router-link>
                <a class="item" @click="logout">Logout</a>
            </div>
            <a v-else href="#" class="ui item" @click="login">Login</a>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'AppHeader',
    // methods accept arguments, used to respond to events from the DOM
    methods: { // alternatively you can also just do methods: mapActions(['login'])
        ...mapActions(['login', 'logout']), // this is a list of function names you wanna map into the methods property
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
    .horizontal {
        display: flex;
        flex-direction: row;
    }
</style>