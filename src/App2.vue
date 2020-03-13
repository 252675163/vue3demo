
<script lang="tsx">
import { reactive, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const dd = reactive({ a: 1 });
    // function render() {
    //     return (<div> {dd.value.a}</div >)
    // }
    function myclick() {
      dd.a++;
    }
    return { dd, myclick };
  },
  render() {
    return <div onClick={this.myclick}>{this.dd.a}</div>;
  }
});
</script>