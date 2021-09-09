<template>
  <section>
      <form class="login-form">
        <AppInput
          class="form-input"
          v-for="field in fields"
          :key="field.id"
          :id="field.id"
          :name="field.name"
          :label="field.label"
          @onInput="onInput"
          :error-message="errorMessage[field.name]"
          :type="getType(field)"
        />
        <div class="form-buttons">
          <AppButton
            class="login-btn"
            @click.native="login"
            :text="'Войти'"
          />
          <AppButton class="register-btn" :text="'Зарегистрироваться'"  @click.native="switchToRegister"/>
        </div>

      </form>

  </section>
</template>

<script>
import AppInput from "./app-input";
import AppButton from "./app-button";

export default {
  name: "app-login.vue",

  components: {
    AppInput,
    AppButton,
  },

  props: {
    fields: {
      type: Array,
    }
  },

  data() {
    return {
      fieldsData: {},
      invalidLogin: false,
      errorMessage: {},
    }
  },

  methods: {
    switchToRegister() {
      this.$emit('switchToRegister')
    },

    onInput(data) {

      this.fieldsData[data.name] = data.value;
    },

    login() {
      this.errorMessage = {
        login: '',
        pass: '',
      }
      const users = this.$store.getters.users;
      this.invalidLogin = users.some(user => user.login === this.fieldsData.login)
      if (!this.invalidLogin) {
        this.errorMessage.login = 'Нет такого пользователя'
      } else {
        this.invalidLogin = users.some(user => user.pass === this.fieldsData.pass)
        if (!this.invalidLogin) {
          this.errorMessage.pass = 'Неверный пароль'
        }
      }
    },

    getType(field) {
      if (field.name === 'pass') {
        return 'password';
      }
    },
  },

};
</script>

<style lang="scss" scoped>
.login-form {
  padding: 10px 40px;
  border-radius: 4px;
  background-color: #64b5f6;
  box-shadow: 0 8px 17px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
}

.form-input {
  margin-bottom: 20px;
}

.form-buttons {
  display: flex;
  justify-content: space-between;
}

.register-btn {
  background-color: #fb3;
}


</style>
