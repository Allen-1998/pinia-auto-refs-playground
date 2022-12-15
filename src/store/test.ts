export default defineStore({
  id: 'test',
  state: () => {
    return {
      name: 'allen',
    };
  },
  getters: {
    fullName: ({ name }) => {
      return name + '.';
    },
  },
  actions: {
    updateName() {
      this.name = this.name + '.';
    },
  },
});
