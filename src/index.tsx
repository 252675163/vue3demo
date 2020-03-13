import { ref, watchEffect, createApp } from "vue";
import App from "./App";
const dd = ref(1)
watchEffect(() => {
    console.log(dd.value)
})

const app = createApp({
    components: { App },
    render() {
        return (<App></App>)
    }
})
app.mount("#app")
window.a = app
// import { createApp, render } from "vue";
// import App from "./App2.vue";
// createApp({
//     components: { App },
//     render() {
//         return (<App></App>)
//     }
// }).mount('#app')