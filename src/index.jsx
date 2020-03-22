import { createApp } from "vue";
import Button from "../../../ant-design-vue/es/button/button";
const app = createApp({
    components:{aButton:Button},
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
    // template:
    // `<aButton>asd</aButton>`,
    render() {
        let a = {
            b: 'b',
            c: 'c'
        }
        return (<Button type="dashed">asd</Button>)
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
// h('div', { class: [] })