import { ref, watchEffect, createApp, h } from "vue";
import App from "./App";
const dd = ref(1)
watchEffect(() => {
    console.log(dd.value)
})

const app = createApp({
    components: { App },
    setup() {
        let a = {
            b: 'b',
            c: 'c'
        }
        return { a }
    },
    template: `
    <div>
    <span>aaa</span>
      <span class="classA" :class="{classB:true}" id="idA" msg="hi" key="keyA" ref="refA" v-show="a" v-asd='asc'
      @click="fnA" @click.native="fnB"
      >text</span>
    </div>
    `,
    // render() {
    //     let a = {
    //         b: 'b',
    //         c: 'c'
    //     }
    //     return (<App {...a}></App>)
    // }
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
h('div', { class: [] })