<script setup>
    import { authStore } from "~/store/authentication.store";
    import Swal from 'sweetalert2'
    // ส่งเข้า store แล้วยิงใส่ verify email บอก user ว่า verify แล้ว redirect ไปที่หน้า login
    const { token } = useRoute().params
    const { verify,veridate } = authStore()
    
    verify(token)
    
    console.log(veridate)
    
    if(veridate === "200"){
        console.log("in 200")
        Swal.fire({
            icon: 'success',
            text: 'You are the verify in my app',
            confirmButtonText: '<a href="../../../login">ok</a>',
            title: 'Good job!'
        })
    }else if(veridate === "404"){
        console.log("in 404")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            confirmButtonText: '<a href="../../../register">Go back register</a>',
            text: 'Something went wrong!'
        })
    }
</script>
<!-- <template>
    <div class="h-screen flex flex-col justify-center text-center">
        <p>your key is a {{ token }}</p>
        <p>verify success</p>
        <NuxtLink to="../../../login" class="text-center p-0">let go to login!!!</NuxtLink>
    </div>
</template> -->