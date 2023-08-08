<template>
  <div  class="text-center h-[calc(100vh-2rem)]  flex justify-items-center items-center">
    <div  class="rounded-3xl justify-center align-center bg-dark-primary mx-auto " >
        <div class=" py-8 px-5 sm:px-14 lg:px-32 lg:py-16">
            <div class="flex justify-center gap-x-3 ">
            <img class="scale-50 lg:scale-100" src="../assets/images/svgs/Emoji.svg" alt="telephone icon =)">
            <div class="font-bold text-sm lg:text-xl">
                Enter you phone number
            </div>
        </div>
        <div class="">
            <form @submit.prevent="">
                {{ 
                    phoneNumber
                 }}
                <TextField placeholder="+91 9823 324223" v-model="phoneNumber"/>
                <!-- <input class="px-5 py-2 rounded-lg mt-5  lg:mt-11 number__input" type="number" placeholder="+91 9823 324223"> -->
            </form>
        </div>
        <div class="mt-8 lg:mt-14">
            <button class="scale-50 lg:scale-100 btn-blue rounded-full px-20 py-4 lg:py-2.5 text-lg font-bold" >Next </button>
        </div>
        <p style="color: var(--Secondary-text);" class="mt-3 md:mt-5 text-xs md:text-sm font-normal">By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!</p>
        </div>
    </div>
  </div>
</template>

<script>
import TextField from '../components/TextField/index.vue'
export default {
    components:{
        TextField
    },
    data(){
        return {
            step:1,
            phoneNumber:""

        }
    },
    methods:{
        nextStep() {
        this.step = 2
        }
    }
}
</script>

<style>

</style>