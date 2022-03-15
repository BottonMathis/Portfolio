<template>
  <div id="header">
    <div id="container">
      <div id="container_top">
        <router-link :to="{ name: 'About' }">
          <img
            id="logo_rotation_3d"
            src="../../public/img/logo_rotation_3d.gif"
            alt=""
          />
        </router-link>
        <div class="morphing">
          <div class="word">Graphic designer</div>
          <div class="word">Photographer</div>
        </div>
      </div>
    </div>
    <transition>
      <video muted loop autoplay style="pointer-events: none">
        <source
          src="../../public/img/background_noise_animation.mp4"
          type="video/mp4"
        />
      </video>
    </transition>
    <div id="about_link">
      <router-link id="about1" :to="{ name: 'About' }"
        >Mathis Botton</router-link
      >
      <router-link id="about2" :to="{ name: 'About' }">Who am I ?</router-link>
    </div>
  </div>

  <div id="gallery_wrapper">
    <div class="grid">
      <h2>Works</h2>
      <div class="row">
        <div v-for="work in works" :key="work.title" class="grid-item">
          <router-link
            :to="{
              name: 'WorksDetails',
              params: {
                title: work.title,
                date: work.date,
                thumbnail: work.thumbnail,
                details: work.details,
                image1: work.image1,
                text1: work.text1,
                text2: work.text2,
                text3: work.text3,
              },
            }"
          >
            <div class="title">
              <h3>
                {{ work.title }}<span id="work_id">({{ work.id }})</span>
              </h3>
              <p>{{ work.details }}</p>
            </div>
            <div class="img-wrap">
              <div class="img"></div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <footer class="footer_home">
    <p class="text_2">Get in touch</p>
    <p id="footer_email">
      mathisbottondesign@<br />
      gmail.com
    </p>
    <div id="follow_me">
      <p class="text_2">Follow me</p>
      <div id="follow_me_links">
        <a href="https://www.behance.net/this-ma" class="text_2">Behance</a>
        <a href="https://www.instagram.com/mathisbotton/?hl=fr" class="text_2"
          >Instagram</a
        >
        <a
          href="https://www.linkedin.com/in/mathis-botton-9838021a8/"
          class="text_2"
          >Linkedin</a
        >
      </div>
    </div>
    <p id="copyright">Copyright © 2021 Mathis Botton. All rights reserved.</p>
  </footer>
</template>



<script>
console.log("home");
let dataworks = require("../data.json");
console.log(dataworks);

export default {
  data() {
    return {
      works: dataworks.works,
    };
  },
  mounted() {
    var aboutLink = document.getElementById("about_link");
    var about1 = document.getElementById("about1");
    var about2 = document.getElementById("about2");

    aboutLink.addEventListener("mouseover", (e) => {
      about1.classList.add("about1");
      about2.classList.add("about2");
    });

    aboutLink.addEventListener("mouseleave", (e) => {
      about1.classList.remove("about1");
      about2.classList.remove("about2");
    });
  },
};
</script>


<style>
</style>