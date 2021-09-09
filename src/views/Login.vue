<template>
  <section class="login">
    <h2>Авторизация</h2>
    <app-login :fields="authFields"/>
  </section>
</template>

<script>
import AppLogin from '../components/app-login'
export default {
  name: 'Login',
  components: {
    AppLogin,
  },

  data() {
    return {
      authFields: [],
    }
  },

  mounted() {
    this.authFields = this.$store.getters.authFields;
  }
}
</script>

<style lang="scss" scoped>
  .login {
    max-width: 500px;
    margin: 0 auto;
  }
</style>