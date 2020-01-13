<template>
    <!-- user is going to see the please wait breifly while we extract the token out -->
    <div>
        Please wait...
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'AuthHandler',
    methods: {
        ...mapActions(['finalizeLogin'])
    },
    created() { // lifecycle method! just like react! WOO
        // just like accessing a data or method prop, just use 'this'
        this.finalizeLogin(window.location.hash) // the hash prop gives you everything after the # in the URL so basically all the params
    }
}
</script>