<template>
  <header class="main-header">
    <div class="page-wrapper nav">
      <router-link class="nav-link" v-for="link in links" :key="link.url" v-text="link.title" :to="link.url"></router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "app-header.vue",

  computed: {
    links() {
      return [
        { title: 'Home', icon: 'account_box', url: '/' },
        { title: 'Login', icon: 'account_box', url: '/login' },
        { title: 'Register', icon: 'face', url: '/register' }
      ]
    }
  }


};
</script>

<style lang="scss" scoped>
.main-header {
  background-color: #bbdefb;
}

.page-wrapper {
  max-width: 1770px;
  margin: 0 auto;
}

.nav {
  display: flex;
  padding: 20px 80px;

  .nav-link {
    padding: 10px 15px;
    border: 1px solid gray;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;

    &:not(:last-child) {
      margin-right: 20px;
    }
  }
}

.header-btn:not(last-child) {
  margin-right: 30px;
}
</style>
