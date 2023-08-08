<template>
    <div>
        {{ 
            title
         }}
     <input class="px-5 py-2 rounded-lg mt-5  lg:mt-11 number__input"
      type="number" :placeholder="placeholder" :value="title" @input="chnageValue($event.target.value)">
    </div>
</template>

<script>
export default {
    props:{
        placeholder:{
            type:String,
            default:""
        }
    },
    data(){
        return {
            title:""
        }
    },
    methods:{
        chnageValue(value){
            this.title = value
            this.$emit('input',value);
        }
    }
}
</script>