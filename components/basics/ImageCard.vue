<template>
  <div :class="`w-[160px] h-[164px] tablet:w-[120px] tablet:h-[128px] bg-mk-secondary flex items-center justify-center rounded-[50px]`">
    <nuxt-img :src="imageUrl" alt="squiggle" />
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: String,
  },
}
</script>

<style lang="scss" scoped></style>
