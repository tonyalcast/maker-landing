<template>
  <div class="flex flex-col w-full h-[840px] items-center justify-center px-20 tablet:h-[1300px] tablet:mt-[90px] mobile:h-[1340px] mobile:p-9 mobile:mt-[90px]">
    <h2 class="text-n3">{{ pricingPlans.title }}</h2>
    <p class="text-m1 text-center text-mk-gray mt-4 mb-[72px] w-[540px] mobile:w-[100%]">{{ pricingPlans.subtitle }}</p>

    <div class="flex items-center tablet:flex-col mobile:flex-col">
      <template v-for="element in pricingPlans.elements" :key="element.title">
        <BasicsPricingItem :element="element" />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['pricingPlans'],
}
</script>

<style lang="scss" scoped></style>
