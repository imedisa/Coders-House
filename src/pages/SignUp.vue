<template>
 <div class="text-center h-[calc(100vh-2rem)] flex justify-items-center items-center">
    <div class="rounded-3xl justify-center align-center bg-dark-primary mx-auto">
        <div class="py-8 px-5 sm:px-14 lg:px-32 lg:py-16">
            <div class="flex justify-center">
                <div class="flex justify-center gap-x-3">
            <img
              class="scale-50 lg:scale-100"
              src="../assets/images/svgs/Emoji.svg"
              alt="telephone icon =)"
            />
            <div class="font-bold text-sm lg:text-xl">Enter you phone number</div>
          </div>
            </div>
            <input type="text" class="px-10 lg:px-16 mt-6 rounded-lg py-2 bg-dark-final placeholder:text-dark-select text-sm lg:text-lg	font-normal" placeholder="Your name">
            <div class="text-light font-normal text-xs lg:text-sm mt-4">People use real names at codershouse :) </div>
            <router-link to="/SignUp">
            <button
                    class="
                    scale-50 lg:scale-100 btn-blue rounded-full px-20 py-4 lg:py-2.5 lg:mt-8 text-lg font-bold"
                    
                  >
                    Next
                  </button>
      </router-link>
        </div>
    </div>
 </div>
</template>

<script>
export default {

}
</script>

<style>

</style>