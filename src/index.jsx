import { ref, watchEffect, createApp, h } from "vue";
import {Button} from "../../../work/ant-design-vue";
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
    // template: `
    // <div>
    //   <span class="classA" :class="{classB:true}" id="idA" msg="hi" key="keyA" ref="refA" v-slot:slotA="slotProp"
    //   @click="fnA" @click.native="fnB"
    //   >text</span>
    // </div>
    // `,
    render() {
        let a = {
            b: 'b',
            c: 'c'
        }
        return (<Button></Button>)
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
h('div', { class: [] })