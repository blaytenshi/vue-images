<template>
    <div>
        Image List

        {{ allImages.length }}
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'ImageList',
    methods: mapActions(['fetchImages']),
    created() {
        this.fetchImages();
    },
    computed: {
        ...mapGetters(['allImages']),
    },
}
</script>