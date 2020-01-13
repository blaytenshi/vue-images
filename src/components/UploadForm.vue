<template>
    <div class="dropper">
        <input type="file" />
        <span>Drag files here</span>
    </div>
</template>

<script>
export default {
    name: 'UploadForm'
}
</script>

<style scoped>
    .dropper {
        border: 1px dashed black;
        height: 30vh;
        border-radius: 5px;
    }
</style>