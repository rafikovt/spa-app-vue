<template>
  <section class="login">
    <h2>Регистрация</h2>
    <app-register :fields="regFields"/>
  </section>
</template>

<script>
import AppRegister from '../components/app-register'
export default {
  name: "Register.vue",
  components: {
    AppRegister,
  },
  data() {
    return {
      regFields: [],
    }
  },

  mounted() {
    this.regFields = this.$store.getters.regFields;
  }
};
</script>

<style lang="scss" scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
}
</style>