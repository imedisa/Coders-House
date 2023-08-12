<template>
  <div class="h-[calc(100vh-2rem)] flex justify-items-center items-center">
    <div
      class="flex flex-col rounded-3xl justify-center align-center lg:w-650 md:w-650 sm:w-650 mx-auto w-full bg-dark-primary"
    >
      <div class="text-center py-8 px-5 sm:px-14 lg:px-32 lg:py-16">
        <!-- TITLE -->
        <div class="flex justify-center items-center gap-x-3">
          <img
            class="scale-50 lg:scale-75"
            src="../assets/images/svgs/Emoji (2).svg"
            alt="telephone icon =)"
          />
          <div class="font-bold text-sm lg:text-xl">Okay, Rakesh k!</div>
        </div>
        <!-- PARAGRAPH -->
        <div class="mt-1 text-xs font-normal lg:text-sm text-light">
          <p>How’s this photo?</p>
        </div>
        <!-- CHOOSEPOHOTO -->
        <div class="flex justify-center mt-6">
          <div
            class="content-none bg-blue special-wh relative rounded-full flex items-center justify-center"
          >
            <img id="canv1" class="absolute w-24 h-24" src="" alt="">
          </div>
          <!-- UPLOAD -->
          <div class="relative text-blue">
            <input
              multiple="false"
              accept="image/*"
              id="finput"
              @change="uploadImage"
              type="file"
              class="top-0 right-0 rounded-full w-full h-full cursor-pointer opacity-0 absolute"
            />
            Choose a different photo
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    uploadImage(e) {
      console.log(e.target.files[0]);

    },
  },
};
</script>

<style></style>
