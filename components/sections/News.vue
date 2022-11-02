<template>
  <div class="flex w-full h-[580px] items-center justify-center relative mobile:flex-col mobile:h-[750px]">
    <div class="flex flex-row tab:absolute w-[110%] desktop:justify-between justify-center mobile:h-[233px] mobile:w-[60%] mobile:mb-[40px]">
      <nuxt-img src="images/illustration-hero-left.svg" alt="illustration childs"/>
      <nuxt-img class="mobile:hidden" src="images/bg-hero-squiggle.svg" alt="squiggle"/>
      <nuxt-img src="images/illustration-hero-right.svg" alt="illustration childs"/>
    </div>
    <div class="text-center z-[5]">
      <div class="w-[540px] flex flex-col mobile:w-[327px]">
        <h1 class="text-n1 mobile:text-n2">{{ news.title }}</h1>
        <p class="text-m1 text-mk-gray mt-6">{{ news.subtitle }}</p>
        <div class="flex justify-center">
          <div class="bg-mk-dark h-[42px] w-[26px] border-[2px] border-mk-primary rounded-2xl flex justify-center mt-[50px]">
            <div class="h-[6px] w-[6px] rounded border-[2px] border-mk-primary mt-[11px] mb-[25px]">
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  inject: ['news'],
}
</script>

<style lang="scss" scoped></style>
