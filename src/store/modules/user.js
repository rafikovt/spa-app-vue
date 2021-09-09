export default ({
  state: {
    isAuthorized: false,
    authFields: [
      {
        id: '1',
        name: 'login',
        label: 'Логин',
      },
      {
        id: '2',
        name: 'pass',
        label: 'Пароль',
      },
    ],

    regFields: [
      {
        id: '1',
        name: 'name',
        label: 'Имя',
      },
      {
        id: '2',
        name: 'surname',
        label: 'Фамилия',
      },
      {
        id: '3',
        name: 'email',
        label: 'E-mail',
      },
      {
        id: '4',
        name: 'login',
        label: 'Логин',
      },
      {
        id: '5',
        name: 'pass',
        label: 'Пароль',
      },
    ],
    users: [
      {
        login: 'test',
        pass: 'test',
        name: 'Тимур',
        surname: 'Рафиков',
        email: 'test@gmail.com',
      }
    ]
  },
  mutations: {
    setAuth(auth) {
      this.state.isAuthorized = auth;
    }
  },
  actions: {},
  modules: {},
  getters: {
    authFields(state) {
      return state.authFields;
    },
    regFields(state) {
      return state.regFields;
    },
    users(state) {
      return  state.users;
    },
  }
});