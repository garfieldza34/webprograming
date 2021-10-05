<template>
  <div class="container-fluid fix_body">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">WEB</a>

        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">หน้าหลัก</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/customers">ลูกค้า</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">สินค้า</router-link>
            </li>
          </ul>
          <span class="text-white p-2"
            >สวัสดีคุณ {{ username }} ({{ email }})</span
          >
          <button @click="logout" type="button" class="btn btn-outline-danger">
            Logout
          </button>
        </div>
      </div>
    </nav>

    <main class="container">
      <div class="bg-light p-5 rounded">
        <div class="col-md-7 col-lg-8">
          <h4 class="mb-3">เพิ่มข้อมูลลูกค้า</h4>

          <div class="row g-3">
            <div class="col-6">
              <label for="customerid" class="form-label">Customer ID</label>
              <input
                v-model="customerID"
                type="text"
                class="form-control"
                id="customerid"
                placeholder=""
              />
            </div>

            <div class="col-6">
              <label for="email" class="form-label">Email</label>
              <input
                v-model="customerEmail"
                type="email"
                class="form-control"
                id="email"
                placeholder=""
              />
            </div>

            <div class="col-sm-4">
              <label for="titleName" class="form-label">คำนำหน้าชื่อ</label>
              <input
                v-model="customerTitleName"
                type="text"
                class="form-control"
                id="titleName"
                placeholder=""
                value=""
                required=""
              />
            </div>
            <div class="col-sm-4">
              <label for="firstName" class="form-label">ชื่อ</label>
              <input
                v-model="customerFirstName"
                type="text"
                class="form-control"
                id="firstName"
                placeholder=""
                value=""
                required=""
              />
            </div>

            <div class="col-sm-4">
              <label for="lastName" class="form-label">นามสกุล</label>
              <input
                v-model="customerLastName"
                type="text"
                class="form-control"
                id="lastName"
                placeholder=""
                value=""
                required=""
              />
            </div>

            <div class="col-12">
              <button @click="customer_register" class="btn btn-success">
                เพิ่มข้อมูล
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-light p-5 rounded">
        <p class="lead">ข้อมูลลูกค้า</p>

        <ul>
          <li v-for="(customer, index) in customers" :key="index">
            {{ customer.customerID }} {{ customer.customerTitleName }}
            {{ customer.customerFirstName }} {{ customer.customerLastName }}
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  mounted() {
    this.email = localStorage.getItem("email");
    this.username = localStorage.getItem("username");
    this.load_customer();
  },
  data() {
    return {
      email: null,
      username: null,
      customers: null,
      customerID: "",
      customerTitleName: "",
      customerFirstName: "",
      customerLastName: "",
      customerEmail: "",
    };
  },
  methods: {
    customer_register() {
      // customerID: String,
      // customerTitleName: String,
      // customerFirstName: String,
      // customerLastName: String,
      // customerEmail: String,
      axios
        .post("http://localhost:3000/mongo/customers", {
          customerID: this.customerID,
          customerTitleName: this.customerTitleName,
          customerFirstName: this.customerFirstName,
          customerLastName: this.customerLastName,
          customerEmail: this.customerEmail,
        })
        .then( function (res) {3
          Swal.fire({
            title: "สำเร็จ",
            text: res.data.message,
            icon: "success",
            showConfirmButton: false,
            showCancelButton: false,
            timer: 1500,
          });
        });
      setTimeout(() => {
        this.load_customer();
      }, 1000);
    },
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
    load_customer() {
      let data = null;
      axios.get("http://localhost:3000/mongo/customers").then(function (res) {
        console.log(res.data);
        data = res.data;
        // this.customers = res.data;
      });
      setTimeout(() => {
        this.customers = data;
      }, 1000);
    },
  },
};
</script>

<style>
.fix_body {
  min-height: 75rem;
  padding-top: 4.5rem;
}
</style>