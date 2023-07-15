<script setup>
    import { authStore } from "~/store/authentication.store";
    import { onMounted } from "vue";
    // ส่งเข้า store แล้วยิงใส่ verify email บอก user ว่า verify แล้ว redirect ไปที่หน้า login
    const { token } = useRoute().params
    // console.log(typeof token);
    const { verify } = authStore()
    
    onMounted(() => {
        verify(token)
        navigateTo('/login')
    })
</script>
<template>
    <div>
        <p>your key is a {{ token }}</p>
        <p>verify success</p>
    </div>
    <NuxtLink to="../../../login">let go to login!!!</NuxtLink>
</template>