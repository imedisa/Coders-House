<template>
  <div
    class="text-center h-[calc(100vh-2rem)] flex justify-items-center items-center"
  >
    <div
      class="rounded-3xl justify-center align-center bg-dark-primary mx-auto"
    >
      <div class="py-8 px-5 sm:px-14 lg:px-32 lg:py-16">
        <!-- STEP-ONE -->
        <div v-if="step === 1">
          <div class="flex justify-center gap-x-3">
            <img
              class="scale-50 lg:scale-100"
              src="../assets/images/svgs/Emoji-phone.svg"
              alt="telephone icon =)"
            />
            <div class="font-bold text-sm lg:text-xl">
              Enter you phone number
            </div>
          </div>
          <div class="">
            <Form @submit="nextStep">
              <Field
                name="phone Number"
                rules="required|phoneNumber"
                v-model="phoneNumber"
                v-slot="{ errors, meta }"
                ref="form"
              >
                <TextField
                  placeholder="09123456789"
                  v-model="phoneNumber"
                  type="number"
                  :errors="errors"
                />
                <div class="mt-8 lg:mt-14">
                  <button
                    :class="[
                      'scale-50 lg:scale-100 btn-blue rounded-full px-20 py-4 lg:py-2.5 text-lg font-bold',
                      { 'cursor-not-allowed': !meta.valid },
                    ]"
                    :disabled="!meta.valid"
                  >
                    Next
                  </button>
                </div>
              </Field>
            </Form>
          </div>
          <p
            style="color: var(--Secondary-text)"
            class="mt-3 md:mt-5 text-xs md:text-sm font-normal"
          >
            By entering your number, you’re agreeing to our Terms of Service and
            Privacy Policy. Thanks!
          </p>
        </div>
        <!-- STEP-TWO -->
        <div v-else-if="step === 2">
          <!-- TITLE -->
          <div class="flex justify-center items-center gap-x-3">
            <img
              class="scale-50 lg:scale-100"
              src="../assets/images/svgs/Emoji (3).svg"
              alt="telephone icon =)"
            />
            <div class="font-bold text-xs lg:text-xl">
              Enter the code we just texted you
            </div>
          </div>
          <!-- ENTER CODE -->
          <div class="mt-6 flex gap-x-3 justify-center">
            <input
              id="atext"
              maxlength="1"
              class="h-10 text-center focus:shadow-md focus:shadow-blue focus:bg-dark-select rounded-xl w-10 bg-dark-final"
              type="nubmer"
            />
            <input
              id="atext"
              maxlength="1"
              class="h-10 text-center focus:shadow-md focus:shadow-blue focus:bg-dark-select rounded-xl w-10 bg-dark-final"
              type="nubmer"
            />
            <input
              id="atext"
              maxlength="1"
              class="h-10 text-center focus:shadow-md focus:shadow-blue focus:bg-dark-select rounded-xl w-10 bg-dark-final"
              type="nubmer"
            />
            <input
              id="atext"
              maxlength="1"
              class="h-10 text-center focus:shadow-md focus:shadow-blue focus:bg-dark-select rounded-xl w-10 bg-dark-final"
              type="nubmer"
            />
          </div>
          <!-- DIDN'T SEND ANY CODE? -->
          <div class="text-xs lg:text-sm font-normal mt-4 text-light">
            Didn’t receive? Tap to resend
          </div>
          <!-- BUTTON -->
          <router-link to="/SignUp">
            <button
              class="scale-50 lg:scale-100 btn-blue rounded-full px-20 py-4 lg:py-2.5 lg:mt-8 text-lg font-bold"
            >
              Next
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="number/javascript">
import TextField from '../components/TextField/index.vue'
export default {
  components: {
    TextField
  },
  data() {
    return {
      step: 1,
      phoneNumber: '',
      title: ''
    }
  },
  methods: {
    nextStep() {
      this.step = 2
    },
    fn()
{
    myString=document.getElementById("atext").value;
    patt=/[A-z]/g;
    x=patt.test(myString);
    alert(x);
}
  }
}
</script>

<style></style>
