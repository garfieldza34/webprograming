<template>
  <div class="container-fluid">
      <h1>Webprogramming</h1>
      <h2>สวัสดีคุณ {{ username }} ({{ email }})</h2>
      
      <button @click="logout" type="button" class="btn btn-danger">Logout</button>
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
      username: null
    }
  },
  methods: {
    logout(){
      localStorage.clear();
      this.$router.push({ name: "Login" });
    }
  }
}
</script>

<style>
</style>