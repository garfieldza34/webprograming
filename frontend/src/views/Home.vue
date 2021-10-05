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
        <h1>Web Programming</h1>
        <p class="lead">วิชาการบูรณาการการเขียนโปรแกรมและเว็บเทคโนโลยี</p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  mounted() {
    this.email = localStorage.getItem("email");
    this.username = localStorage.getItem("username");
  },
  data() {
    return {
      email: null,
      username: null,
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
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