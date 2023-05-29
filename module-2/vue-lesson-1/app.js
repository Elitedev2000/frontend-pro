const app = Vue.createApp(
    {
        data() {
            return {
                isName: "Vue js development",
                number: 0,
                todo: [
                    { id: 1, title: 'Vue2 vs Vue3' },
                    { id: 2, title: 'Vue3 vs Vuex' }.
                ],
                taskTitle: "",
            }
        },

        methods: {
            incr() {
                this.number += 1;
            },
            decr() {
                this.number -= 1;
            },
            addNewTask() {
                let task = {
                    id: Date.now(),
                    title: this.taskTitle
                }
            }
        }
    }
);

let div = document.querySelector('#app');

app.mount(div);
