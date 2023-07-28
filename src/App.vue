<template>
  <div>
    <Navbar :title="title"></Navbar>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components:{
    Navbar
  },
  data() {
    return {
      title: 'adfasdf',
    }
  }
}
</script>