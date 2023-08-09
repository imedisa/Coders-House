<template>
  <div>
    <input
      class="px-5 py-2 rounded-lg mt-5 lg:mt-11 number__input"
      :type="type"
      :placeholder="placeholder"
      v-model="value"
    />
    <span v-if="errors.length" class="block text-red">
      {{ errors.length && errors[0] }}
    </span>
  </div>
</template>
<script >
export default {
  props: {
    modelValue: {
      type: String || Number,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    errors: {
      type: Array,
      default: []
    }
  },
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>
