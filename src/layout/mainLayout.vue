<template>
  <div class="px-6 ">
    <header class="py-3">
      <router-link to="/">
        <logoIcon/>
      </router-link>

    </header>
    <router-view/>
  </div>
</template>

<script >
import logoIcon from "../components/icons/logo.vue"

export default {
  components:{
    logoIcon
  },
  data(){
    return{
      
    }
  }
}
</script>
