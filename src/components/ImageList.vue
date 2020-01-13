<template>
    <div class="image-container">
        <img 
            v-for="image in allImages"
            :src="image.link"
            :key="image.id" />
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

<style scoped>
    .image-container {
        column-count: 3;
        column-gap: 0;
    }
    img {
        max-width: 100%;
        padding: 5px;
    }
</style>