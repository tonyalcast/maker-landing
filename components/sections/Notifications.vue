<template>
  <div class="flex w-full h-[580px] items-center justify-center relative mobile:p-9">
    <div class="text-center z-[5]">
      <div class="w-[540px] flex flex-col mobile:w-[100%]">
        <h1 class="text-n3">{{ notifications.title }}</h1>
        <form @submit.prevent v-on:submit="onSubmit">
          <div class="flex justify-center mt-[42px] mobile:flex-col mobile:items-center mobile:w-[100%]">
            <template v-for="input in notifications.form.inputs" :key="input.key">
              <div class="flex flex-col mobile:w-[100%]" v-if="input.type === 'input'">
                <input
                  :type="input.type"
                  :value="state.email"
                  @input="onInput"
                  class="rounded-3xl w-[320px] desktop:mx-[8px] tablet:mx-[8px] bg-mk-secondary py-[12px] px-[18px] h-[48px] mobile:w-[100%]"
                  :class="(false) ? ' border-[2px] border-mk-error' : ''"
                  :placeholder="input.placeholder" />
                <div v-if="v$.email.$error">
                  <p v-for="error in v$.email.$errors" :key="error.$message" class="text-[12px] text-mk-error">
                    {{error.$message}}
                  </p>
                </div>
              </div>
            </template>

            <button
              class="bg-mk-primary h-[48px] text-mk-dark hover:bg-mk-secondary hover:text-mk-white border border-mk-primary py-[12px] px-[28px] rounded-3xl mx-[8px] mobile:w-[100%] mobile:mt-[30px]">
              {{ notifications.form.confirmButton.description }}
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="flex flex-row absolute w-[100%] justify-between">
      <nuxt-img class="w-[100%] h-[228px]" src="https://raw.githubusercontent.com/tonyalcast/maker-landing/develop/public/images/bg-hero-squiggle.svg" alt="squiggle" />
    </div>
    <hr />
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import useValidate from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
export default {
  setup() {
    const state = ref({
      email: ''
    })
    const rules = computed(() => {
      return {
        email: { 
          required: helpers.withMessage('Oops! Please add your email', required), 
          email: helpers.withMessage('Oops! That doesn’t look like an email address', email), 
        }
      }
    })
    const v$ = useValidate(rules, state)

    return {
      state,
      v$,
    }
  },
  inject: ['notifications'],
  methods: {
    onSubmit() {
      this.v$.$validate()
      if (!this.v$.$error) {
        alert(`${this.state.email} will be notified!`)
      }
    },
    onInput(event) {
      this.state.email = event.target.value 
      this.v$.$validate()
    }
  },
}
</script>

<style lang="scss" scoped></style>
