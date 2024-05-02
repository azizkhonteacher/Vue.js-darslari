const app = Vue.createApp({
  data() {
    return {
      name: "hello world",
      count: 0,
      showModal: false,
      users: [
        {
          name: "Iqboljon",
          age: 18,
          gender: true,
        },
        {
          name: "Bonu",
          age: -1,
          gender: false,
        },
        {
          name: "Sherzodbek",
          age: 2,
          gender: true,
        },
      ],
    };
  },
  methods: {
    remCount() {
      if (this.count > 0) {
        this.count--;
      }
    },
    addCount() {
      this.count++;
    },
  },
});
app.mount("#app");
