export default defineStore({
  id: 'test',
  state: () => {
    return {
      name: '张三',
    };
  },
  getters: {
    fullName: ({ name }) => {
      return name + '丰';
    },
  },
  actions: {
    updateName() {
      this.name = this.name + '丰';
    },
  },
});
