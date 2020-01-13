<template>
    <div class="dropper">
        <!-- Allows us to modify what the uploadImages method function is being called with -->
        <input 
            type="file" 
            @change="uploadImages($event.target.files)" 
            multiple
            accept="image/*"
        />
        <span>Drag files here</span>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'UploadForm',
    methods: {
        ...mapActions(['uploadImages'])
    }
}
</script>

<style scoped>
    .dropper {
        border: 1px dashed black;
        height: 30vh;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

    }
    .dropper:hover {
        background-color: #eee;
    }
    input {
        width: 100%;
        height: 30vh;
        position: absolute;
        opacity: 0;
    }
</style>