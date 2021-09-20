<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <h4>สมัครสมาชิก</h4>
        <div class="mb-3">
          <label class="form-label">อีเมล</label>
          <input
            v-model="email"
            type="text"
            class="form-control"
            placeholder="กรุณากรอกอีเมล"
          />
        </div>
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
          <button @click="register" class="btn btn-success" type="button">
            สมัครสมาชิก
          </button>
          <button @click="cancel" class="btn btn-danger" type="button">
            ยกเลิก
          </button>
          <button @click="back" class="btn btn-warning" type="button">
            ย้อนกลับ
          </button>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>
 
<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      username: "",
      password: "",
      regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    };
  },
  methods: {
    register() {
      if (this.email.trim() === "") {
        alert("กรุณากรอกอีเมล");
      } else if (this.username.trim() === "") {
        alert("กรุณากรอกชื่อผู้ใช้");
      } else if (this.password.trim() === "") {
        alert("กรุณากรอกรหัสผ่าน");
      } else {
        if(this.regex.test(this.email)) {
            console.log(this.email);
            console.log(this.username);
            console.log(this.password);
            axios.post("http://localhost:3000/mongo/users", {
                email: this.email,
                username: this.username,
                password: this.password
            }).then(function(res){
                alert(res.data.message);
            });
        } else {
            alert("คุณกรอกอีเมลไม่ถูกต้อง");
        }
      }
    },
    back() {
      this.$router.push({ name: "Login" });
    },
    cancel() {
      this.email = "";
      this.username = "";
      this.password = "";
    },
    
  },
};
</script>
 
<style>
</style>