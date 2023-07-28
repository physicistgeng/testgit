<template>
  <div>
    <select name="" id="" v-model="select">
      <option value="gengjiwei">gengjiwei</option>
      <option value="pika">pika</option>
      <option value="bubu">bubu</option>
    </select>
    <ul>
      <li v-for="data in list" :key="data.id">
        {{ data.content }}
      </li>
    </ul>
  </div>
</template>

<script>
import useList from '../../useList'
export default {
  setup(){
    const {select, list} = useList()
    return {
      select,
      list
    }
  }
}
</script>