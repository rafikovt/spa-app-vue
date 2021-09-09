<template>
  <div class="app-input__container">
    <label class="app-input__description" v-text="label" :for="name"></label>
    <span v-if="required">*</span>
    <input
      class="app-input"
      :placeholder="placeholder"
      :type="type"
      @input="onInput"
      :id="name"
      :disabled="disabled"
      v-model="initValue"
      :required="required"
    />
    <p class="app-input__error" v-text="errorMessage"></p>
  </div>
</template>

<script>
export default {
  name: "app-input.vue",

  props: {
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    initValue: {
      type: String,
    },
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    errorMessage: {
      type: String,
    },
    type: {
      type: String,
      default: 'text',
    },
    required: {
      type: Boolean,
    }
  },

  data() {
    return {
      value: '',
    }
  },

  methods: {
    onInput(evt) {
      this.value = evt.target.value;
      this.$emit('onInput', {name: this.name, value: evt.target.value})
    }
  }
};
</script>

<style lang="scss" scoped>
.app-input {
  display: block;

  &__description {
    font-size: 14px;
  }

  &__error {
    font-size: 12px;
      color: red;
   }
}
</style>
