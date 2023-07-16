<script setup>
import { authStore } from '~/store/authentication.store';
    const store = authStore()
    const { user } = useRoute().params
</script>
<template>
    <div class="text-center">
        ยินดีต้อนรับ {{ user }}
    </div>
    <p>token : {{ store.token }}</p>
    <p>access : {{ store.access }}</p>
</template>