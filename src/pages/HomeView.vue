<script >
export default {
  
}
</script>

<template>
    <!-- MAIN PAGE -->
    <!-- my-20 -->
    <!-- xl:my-48 -->
  <div class="h-[calc(100vh-2rem)] flex justify-items-center items-center">
    <div class="flex flex-col rounded-3xl justify-center align-center lg:w-650  md:w-650 sm:w-650  mx-auto w-full" style="background-color: var(--Background-secondary);">
   <div class="text-center py-8 px-5 sm:px-14 lg:px-32 lg:py-16">
    <!-- TITLE -->
    <div class="font-bold text-sm lg:text-xl ">Welcome to Codershouse!</div>
    <!-- PARAGRAPH -->
    <p class="text-xs lg:text-xl  font-normal mt-8">We’re working hard to get Codershouse ready for everyone! While we wrap up the finishing youches, we’re adding people gradually to make sure nothing breaks :)</p>
    <!-- BUTTON -->
    <div class="mt-8 lg:mt-14">
        <button class="scale-50 lg:scale-100 btn-blue rounded-full px-5 py-4 lg:py-2.5 text-lg font-bold" >Get your username</button>
    </div>
    <!-- SIGN UP -->
    <div class=" flex-row text-xs lg:text-base text-center mx-0 mt-2 lg:mt-5" style="color: var(--Blue);">
        <router-link to="" class="mr-1">Have an invite text?</router-link>
        <router-link to="/auth" class="ml-1 font-bold">Sign in</router-link>
    </div>
   </div>
  </div>
  </div>
</template>
