<template>
  <div class="vh-100 bg-light">
    <Navbar />
    <div class="d-flex align-items-center justify-content-center h-75 mh-75">
      <div class="shadow px-4 py-4 row g-3 rounded-3">
        <label for="validationDefaultUsername" class="form-label"
          >Username</label
        >
        <div class="input-group">
          <input
            placeholder="masukkan nama kamu"
            v-model="username"
            type="text"
            class="form-control"
            id="validationDefaultUsername"
            aria-describedby="inputGroupPrepend2"
            required
            autofocus
          />
        </div>
        <div class="input-group">
          <button @click="handleLogin" class="btn btn-primary" type="submit">
            Masuk
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  name: 'Login',
  components: {
    Navbar,
  },
  data() {
    return {
      username: '',
    }
  },
  methods: {
    handleLogin() {
      localStorage.setItem('username', this.username)
      this.$router.push({ path: '/' })
    },
  },
}
</script>

<style>
.form-control::placeholder  {
  color: #e1e5ea;
}

.form-control::-ms-input-placeholder {
  color: #e1e5ea;
}

</style>
