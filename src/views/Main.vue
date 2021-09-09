<template>
  <div class="home">
    <div class="form-wrapper">
        <h1>Добро пожаловать</h1>
        <p>Для начала работы вам надо авторизоваться или зарегестрироваться</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src



export default {
  name: "Home",


  data() {
    return {
      isLogin: true,
    }
  },

  methods: {
    toggle() {
      this.isLogin = !this.isLogin;
    }
  },



};
</script>

<style lang="scss">
.form-wrapper {
  max-width: 550px;
  margin: 0 auto;
}
</style>
