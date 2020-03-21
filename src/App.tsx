import { defineComponent, reactive, render ,ElementClass} from "vue";
import Child from "./Child";
// import {Spin} from "antdv/index";
// import App2 from "./App2.vue";
interface InputProps {
    dd: { a: string };
    myclick: (value: string) => void;
}
export default defineComponent({
    components: { Child },
    setup(props: { a: string, b: string }) {
        const dd = reactive({ a: 1 })
        // function render() {
        //     return (<div> {dd.value.a}</div >)
        // }
        function myclick() {
            dd.a++
        }
        return { dd, myclick, ...props }
    },
    render() {
        console.log(this.$props)
        return (
            <div>
                <Child propA={this.dd.a} />
                new:{this.$props.a}
                <div onClick={this.myclick}> {this.dd.a}</div >
            </div>)
    }
})