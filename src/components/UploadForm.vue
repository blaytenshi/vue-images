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