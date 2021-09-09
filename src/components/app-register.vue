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
        :init-value="user[field.name]"
        :required="!(field.name === 'surname')"

      />
      <div class="form-buttons">
        <AppButton :type="'submit'" :text="'Зарегистрироваться'" />
        <AppButton class="register-btn" :text="'Уже зарегистрирован'"  @click.native="switchToRegister"/>
      </div>

    </form>
  </section>
</template>

<script>
import AppInput from "./app-input";
import AppButton from "./app-button";
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: "app-register.vue",

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
      user: {
        name: '',
        surname: '',
        email: '',
        login: '',
        password: '',
      }
    }
  },

  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
  },

  methods: {
    switchToRegister() {
      console.log(13);
      this.$emit('switchToRegister')
    },

    onInput(data) {
        this.user[data.name] = data.value;
    }
  }

};
</script>

<style scoped>
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