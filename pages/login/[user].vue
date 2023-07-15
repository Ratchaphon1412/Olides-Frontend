<script setup>
    const { user } = useRoute().params
</script>
<template>
    <div class="text-center">
        ยินดีต้อนรับ {{ user }}
    </div>
</template>