<template>
  <div class="flex w-full h-[580px] items-center justify-center px-20 mobile:flex-col tablet:flex-col tablet:h-[730px] mobile:h-[1434px] mobile:p-5">
    <template v-for="(element, index) in benefits.elements" :key="element.title">
    <p :class="index % 2 == 0 ? '' : 'tablet:mr-[6rem]'">
      <BasicsInfoItem
        :title="element.title"
        :subtitle="element.subtitle"
        :imageUrl="element.imageUrl"
        :isEven="index % 2 == 0 ? true : false" />
    </p>
    </template>
  </div>
</template>

<script>
export default {
  inject: ['benefits'],
}
</script>

<style lang="scss" scoped></style>
