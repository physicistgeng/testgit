import { ref, watch } from 'vue'
import axios from 'axios'
function useList() {
  const select = ref('gengjiwei')
  const list = ref('')
  watch(select, async (value) => {
    console.log(value);
    let res = await axios.get(`http://localhost:3000/news?author=${value}`)
    list.value = res.data
  }, {immediate:true})

  return {
    select,
    list
  }
}

export default useList