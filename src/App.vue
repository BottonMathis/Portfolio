<template>
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
</template>


<style>
/* -------- CSS -------- */
@import "css/resets.css";
@import "css/styles.css";
@import "css/home.css";
@import "css/worksdetails.css";
@import "css/about.css";
@import "css/responsive.css";
</style>
<script>
console.log("app");
</script>

<style>
/* PAGE TRANSITION  */

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-2em);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
</style>
