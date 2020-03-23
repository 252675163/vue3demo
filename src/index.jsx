import { createApp,reactive,ref } from "vue";
import '../../dist/antd.css';
import Button from "../../../ant-design-vue/es/button";
import Base from "../../../ant-design-vue/es/base";
const app = createApp({
    setup() {
        let obj = reactive({num:0})
        let num = ref(0);
        function clickMe(){
            obj.num++;
            num.value++;
        }
        return function render() {
            return (
            <div>
                <div>
                    <h2 >{obj.num}</h2>
                    <h2 >{num.value}</h2>
                    <Button type="dashed" onClick={clickMe}>clickMe</Button>
                </div>
                <hr></hr>
                <Button type="primary" shape="circle" icon="search"></Button>
                <Button type="primary" shape="circle">A</Button>
                <Button type="primary" icon="search">Search</Button>
                <Button shape="circle" icon="search" />
                <Button icon="search">Search</Button>
                <Button shape="circle" icon="search" />
                <Button icon="search">Search</Button>
                <Button type="dashed" shape="circle" icon="search" />
                <Button type="dashed" icon="search">Search</Button>
            </div>)
        }
    },
    // template: `
    // <div>
    //   <span class="classA" :class="{classB:true}" id="idA" msg="hi" key="keyA" ref="refA" v-slot:slotA="slotProp"
    //   @click="fnA" @click.native="fnB"
    //   >text</span>
    // </div>
    // `,
    
})
app.use(Base);
app.mount("#app")