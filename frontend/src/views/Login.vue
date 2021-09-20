<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <div class="col-md-4"></div>

      <div class="col-md-4">
        <h4>Web Programming Login</h4>

        <div class="mb-3">
          <label class="form-label">ชื่อผู้ใช้</label>

          <input
            v-model="username"
            type="text"
            class="form-control"
            placeholder="กรุณากรอกชื่อผู้ใช้"
          />
        </div>

        <div class="mb-3">
          <label class="form-label">รหัสผ่าน</label>

          <input
            v-model="password"
            type="password"
            class="form-control"
            placeholder="กรุณากรอกรหัสผ่าน"
          />
        </div>
      </div>

      <div class="col-md-4"></div>
    </div>

    <div class="row mt-3">
      <div class="col-md-4"></div>

      <div class="col-md-4">
        <div class="d-flex gap-3">
          <button @click="login" class="btn btn-primary" type="button">
            เข้าสู่ระบบ
          </button>

          <button  @click="cancel" class="btn btn-danger" type="button">ยกเลิก</button>

          <button @click="register" class="btn btn-success" type="button">สมัครสมาชิก</button>
        </div>
      </div>

      <div class="col-md-4"></div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      username: "",

      password: "",
    };
  },

  methods: {
    login() {
      

      if(this.username.trim() === ""){
          alert("กรุณากรอกชื่อผู้ใช้");
      }else if(this.password ===""){
          alert("กรุณากรอกรหัสผ่าน");
      }else{
            console.log(this.username.trim());
            console.log(this.password.trim());
      }
    },
    cancel(){
        this.username=""
        this.password=""
    },
    register(){
        this.$router.push({name: "Register"})
    },
  },
};
</script>



<style>
</style>