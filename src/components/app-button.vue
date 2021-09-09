<template>
  <button
    class="main-btn"
    v-text="text"
    :disabled="isDisabled"
    @click.prevent="clickHandler"
    :type="type"
  ></button>
</template>

<script>
export default {
  name: "app-button.vue",

  props: {
    text: {
      type: String,
    },

    isDisabled: {
      type: Boolean,
    },

    clickHandler: {
      type: Function,
    },

    type: {
      type: String,
      default: 'button'
    }
  },
};
</script>

<style lang="scss" scoped>
.main-btn {
  padding: 10px 20px;
  background-color: #4285f4;
  box-shadow: 0 8px 17px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  color: aquamarine;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  cursor: pointer;

  &:focus {
    outline: none;

  }

  &:active {
    box-shadow: 0 5px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%);
  }


}


</style>
