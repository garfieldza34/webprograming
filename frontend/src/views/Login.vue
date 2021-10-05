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
          <button @click="login" class="btn btn-primary" type="button">เข้าสู่ระบบ</button>
          <button @click="cancel" class="btn btn-danger" type="button">ยกเลิก</button>
          <button @click="register" class="btn btn-success" type="button">สมัครสมาชิก</button>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
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
        // alert("กรุณากรอกชื่อผู้ใช้");
            Swal.fire(
              "คำเตือน",
              "กรุณากรอกชื่อผู้ใช้",
              "warning"
            );
      } else if(this.password.trim() === ""){
        // alert("กรุณากรอกรหัสผ่าน");
            Swal.fire(
              "คำเตือน",
              "กรุณากรอกรหัสผ่าน",
              "warning"
            );
      } else {
        // console.log(this.username.trim());
        // console.log(this.password.trim());
        let data = {
          username: this.username.trim(),
          password: this.password.trim()
        };
        axios
        .post("http://localhost:3000/mongo/users/login", data)
        .then(function(res){
          // console.log(res.data);
          if(res.data.status === 0){
            // ถ้าผู้ใช้ไม่มี
            // alert(res.data.message);
            Swal.fire(
              "ผิดพลาด",
              res.data.message,
              "error"
            );
          } else if(res.data.status === 1){
            // ถ้าผู้ใช้มี
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("status", res.data.status);
            localStorage.setItem("email", res.data.email);
            localStorage.setItem("username", res.data.username);
            
          }
        });
        setTimeout(() => {
          this.$router.push({ name: "Home" });
        }, 1000);
        
      }
    },
    cancel(){
      this.username = "";
      this.password = "";
    },
    register(){
      this.$router.push({ name: "Register" });
    },
  },
};
</script>

<style>
</style>