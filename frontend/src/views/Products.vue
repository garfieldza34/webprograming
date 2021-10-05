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
         <span class="text-white p-2">สวัสดีคุณ {{username}} ({{ email }})</span>
          <button @click="logout" type="button" class="btn btn-outline-danger">
            Logout
          </button>
        </div>
      </div>
    </nav>

    <main class="container">
      <div class="bg-light p-5 rounded">
        <div class="col-md-7 col-lg-8">
          <h4 class="mb-3">เพิ่มข้อมูลสินค้า</h4>

          <div class="row g-3">
            <div class="col-6">
              <label for="productsid" class="form-label">รหัสสินค้า</label>
              <input
                v-model="productsID"
                type="text"
                class="form-control"
                id="productsid"
                placeholder=""
              />
            </div>

            <div class="col-6">
              <label for="productName" class="form-label">ชื่อสินค้า</label>
              <input
                v-model="productName"
                type="productName"
                class="form-control"
                id="productName"
                placeholder=""
              />
            </div>

            <div class="col-sm-4">
              <label for="productPrice" class="form-label">ราคาสินค้า</label>
              <input
                v-model="productPrice"
                type="text"
                class="form-control"
                id="productPrice"
                placeholder=""
                value=""
                required=""
              />
            </div>
            <div class="col-sm-4">
              <label for="productStock" class="form-label">รหัสคลังสินค้า</label>
              <input
                v-model="productStock"
                type="text"
                class="form-control"
                id="productStock"
                placeholder=""  
                value=""
                required=""
              />
            </div>

            <div class="col-sm-4">
              <label for="productUnit" class="form-label">จำนวนสินค้า</label>
              <input
                v-model="productUnit"
                type="text"
                class="form-control"
                id="productUnit"
                placeholder=""
                value=""
                required=""
              />
            </div>

            <div class="col-12">
              <button @click="product_register" class="btn btn-success">
                เพิ่มข้อมูล
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-light p-5 rounded">
        <p class="lead">ข้อมูลสินค้า</p>

        <ul>
          <li v-for="(product, index) in product" :key="index">
            {{ product.productID }} {{ product.productName }}
            {{ product.productPrice }} {{ product.productStock }} {{product.productUnit}}
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

    this.load_products();
  },
  data() {
    return {
      email: null,
      username: null,
      product: null,
      productID: "",
      productName: "",
      productPrice: "",
      productStock: "",
       productUnit: "",
    };
  },
  methods: {
    product_register() {
      // customerID: String,
      // customerTitleName: String,
      // customerFirstName: String,
      // customerLastName: String,
      // customerEmail: String,

      axios
        .post("http://localhost:3000/mongo/products", {
          productID: this.productID,
          productName: this.productName,
           productPrice: this.productPrice,
           productStock: this.productStock,
          productUnit: this.productUnit,
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
        this.load_products();
      }, 1000);
    },
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
    load_products() {
      let data = null;
      axios.get("http://localhost:3000/mongo/products").then(function (res) {
        console.log(res.data);
        data = res.data;
        // this.products = res.data;
      });

      setTimeout(() => {
        this.product = data;
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