import { defineComponent, reactive, render } from "vue";
import Child from "./Child";
// import App2 from "./App2.vue";
interface InputProps {
    dd: { a: string };
    myclick: (value: string) => void;
}
export default defineComponent({
    components: { Child },
    setup() {
        const dd = reactive({ a: 1 })
        // function render() {
        //     return (<div> {dd.value.a}</div >)
        // }
        function myclick() {
            dd.a++
        }
        return { dd, myclick }
    },
    render() {
        return (
            <div>
                <Child propA={this.dd.a} />
                {/* <App2 /> */}
                <div onClick={this.myclick}> {this.dd.a}</div >
            </div>)
    }
})