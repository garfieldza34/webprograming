<template>
    <div class="container-fluid">
        <div class="row mt-3">
            <h3>Web Programming Login (เข้าสู่ระบบ)</h3>
            <div class="mb-3">
                <label class="form-label">ชื่อผู้ใช้</label>
                <input v-model="username" type="text" class="form-control" placeholder="กรุณากรอกชื่อผู้ใช้">
            </div>
            <div class="mb-3">
                <label class="form-label">รหัสผ่าน</label>
                <input v-model="password" type="password" class="form-control" placeholder="กรุณากรอกรหัสผ่าน">
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-md-6">
                <button @click="login" type="button" class="btn btn-primary">เข้าสู่ระบบ</button>
            </div>
            <div class="col-md-6">
                <button type="button" class="btn btn-danger">ยกเลิก</button>
            </div>
        </div>



    </div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        login() {
            console.log(this.username);
            console.log(this.password);
        }
    }
}
</script>

<style>
</style>