import { defineComponent } from "vue";
interface inProp {
    propA: string | number
}
const cc = defineComponent({
    setup(props: inProp) {
        return {}
    },
    render() {
        return (<span>child:{this.$props.propA}</span>)
    }
})
export default cc