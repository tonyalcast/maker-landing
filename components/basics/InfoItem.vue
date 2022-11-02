<template>
  <div
    class="flex flex-col w-[255px] mx-[15px] tablet:flex-row tablet:w-[100%] tablet:mt-[3rem] mobile:items-center mobile:justify-center mobile:mt-[3rem]"
    :class="!isEven ? ' desktop:pt-[60px] ' : ''">
    <BasicsImageCard :imageUrl="imageUrl" />
    <div class="flex flex-col tablet:ml-[50px] tablet:w-[340px]  mobile:items-center mobile:justify-center mobile:w-[327px]">
      <span class="text-n4 desktop:mt-[40px] mobile:mt-[25px]">
        {{ title }}
      </span>
      <span class="text-m1 text-mk-gray mt-[25px] mobile:text-center">
        {{ subtitle }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    imageUrl: String,
    isEven: Boolean,
  },
}
</script>

<style lang="scss" scoped></style>
