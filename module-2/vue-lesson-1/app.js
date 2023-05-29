const app = Vue.createApp(
    {
        data() {
            return {
                isName: "Vue js development",
                number: 0,
            }
        },

        methods: {
            incr() {
                this.number += 1;
            },
            decr() {
                this.number -= 1;
            }
        }
    }
);

let div = document.querySelector('#app');

app.mount(div);
