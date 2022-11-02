<template>
  <div
    class="w-[445px] mx-[15px] rounded-xl px-9 justify-center flex flex-col relative tablet:mb-[70px] mobile:mb-[70px] mobile:w-[100%]"
    :class="element.highlight ? 'text-mk-dark bg-mk-primary h-[482px]' : 'text-mk-white bg-mk-secondary h-[448px]'">
    <div class="absolute top-[-6%]">
      <nuxt-img :src="element.icon" alt="illustration childs"/>
    </div>
    <h4 class="text-n4 font-extrabold mb-[19px]">
      {{ element.title }}
    </h4>
    <p class="text-m1 text-mk-gray mb-[24px]">
      {{ element.subtitle }}
    </p>
    <div class="flex items-center mb-[19px]">
      <span class="text-n1 font-extrabold mr-[8px]">{{ element.price }}</span>
      <span class="text-m1 text-mk-gray">{{ element.frecuency }}</span>
    </div>
    <ul>
      <li v-for="characteristic in element.characteristics" :key="characteristic.description">
        <div class="flex items-center my-[6px]">
          <nuxt-img
            class="w-[11px] h-[8px]"
            :src="element.highlight ? 'https://raw.githubusercontent.com/tonyalcast/maker-landing/develop/public/images/icon-check.svg' : 'https://raw.githubusercontent.com/tonyalcast/maker-landing/develop/public/images/icon-check-two.svg'"
            alt="check" />
          <p class="ml-[16px]">{{ characteristic.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    element: Object,
  },
}
</script>

<style lang="scss" scoped></style>
