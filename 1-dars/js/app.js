const app = Vue.createApp({
  data() {
    return {
        title: "Hello Vue.js",
        langs: ["uz", "ru", "eng"],
        User: [
            {
                name: "Azizxon", age: 20,
            },
            {
                name: "Shavkatjon", age: 20,
            },
            {
                name: "Sherzodbek", age: 18,
            },
        ],
        user: {
            name: "Azizxon",
            age: 20,
        },
        count: 0,
    };
  },
  methods: {
    addCount(){
        this.count += 1;
        const h4 = document.querySelector("h4");
        h4.classList.toggle("active")
    }
  }
});
app.mount("#app");
