<template >
  <div id="work_thumbnail">
    <div id="container_thumbnail">
      <div
        id="thumbnail_img"
        :style="{ 'background-image': 'url(' + thumbnail + ')' }"
      ></div>
      <!-- <div id="thumbnail_img" style="background-image: url('/img/3.jpg')"></div> -->
    </div>
  </div>

  <div id="work_title" class="straight">
    <h3 class="straight title_animation">{{ title }}</h3>
  </div>

  <div id="work_links">
    <div class="text_animation_container">
      <span class="text_animation text_3">Find this project</span>
    </div>
    <div class="text_animation_container">
      <span class="text_animation text_3">-</span>
    </div>
    <div class="text_animation_container">
      <a class="text_animation text_3" href="https://example.com">Behance</a>
    </div>
    <div class="text_animation_container">
      <a class="text_animation text_3" href="https://example.com">Dribble</a>
    </div>
  </div>

  <div
    id="work_details"
    data-aos="fade-up"
    data-aos-duration="500"
    data-aos-easing="ease-out"
    data-aos-mirror="true"
    data-aos-offset="100"
  >
    <div class="text_animation_container">
      <span class="text_animation text_3">{{ details }}</span>
    </div>
    <div class="text_animation_container">
      <span lass="text_animation text_3">-</span>
    </div>
    <div class="text_animation_container">
      <span class="text_animation text_3">{{ date }}</span>
    </div>
    <div class="text_animation_container">
      <span class="text_animation text_3">{{ company }}</span>
    </div>
  </div>

  <div
    id="work_deliverables"
    data-aos="fade-up"
    data-aos-duration="500"
    data-aos-easing="ease-out"
    data-aos-mirror="true"
    data-aos-offset="125"
  >
    <div class="text_animation_container">
      <span class="text_animation text_3">DELIVERABLES</span>
    </div>
    <div class="text_animation_container">
      <span class="text_animation text_3">-</span>
    </div>
    <div class="text_animation_container">
      <span class="text_animation text_3">{{ deliverable1 }}</span>
    </div>
    <div class="text_animation_container">
      <span class="text_animation text_3">{{ deliverable2 }}</span>
    </div>
    <div class="text_animation_container">
      <span class="text_animation text_3">{{ deliverable3 }}</span>
    </div>
    <div class="text_animation_container">
      <span class="text_animation text_3">{{ deliverable4 }}</span>
    </div>
  </div>

  <p
    id="text1"
    data-aos="fade-up"
    data-aos-duration="500"
    data-aos-easing="ease-out"
    data-aos-mirror="true"
    data-aos-offset="100"
  >
    {{ text1 }}
  </p>

  <div
    id="image1"
    src=""
    data-aos="fade-up"
    data-aos-duration="500"
    data-aos-easing="ease-out"
    data-aos-mirror="true"
    data-aos-offset="125"
    v-bind:style="{ 'background-image': 'url(' + image1 + ')' }"
  />
  <div
    id="image2"
    data-aos="fade-up"
    data-aos-duration="500"
    data-aos-easing="ease-out"
    data-aos-mirror="true"
    data-aos-offset="150"
    v-bind:style="{ 'background-image': 'url(' + image2 + ')' }"
  />
  <div
    id="image3"
    data-aos="fade-up"
    data-aos-duration="500"
    data-aos-easing="ease-out"
    data-aos-mirror="true"
    data-aos-offset="100"
    v-bind:style="{ 'background-image': 'url(' + image3 + ')' }"
  />

  <div
    id="image4"
    data-aos="fade-up"
    data-aos-duration="500"
    data-aos-easing="ease-out"
    data-aos-mirror="true"
    data-aos-offset="150"
    v-bind:style="{ 'background-image': 'url(' + image4 + ')' }"
  />

  <div
    id="image5"
    data-aos="fade-up"
    data-aos-duration="500"
    data-aos-easing="ease-out"
    data-aos-mirror="true"
    data-aos-offset="150"
    v-bind:style="{ 'background-image': 'url(' + image5 + ')' }"
  />

  <div
    id="image6"
    data-aos="fade-up"
    data-aos-duration="500"
    data-aos-easing="ease-out"
    data-aos-mirror="true"
    data-aos-offset="100"
    v-bind:style="{ 'background-image': 'url(' + image6 + ')' }"
  />

  <footer class="footer_works_details">
    <p class="text_2">Get in touch</p>
    <p id="footer_email">mathisbotton@<br />laposte.net</p>
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
let selectedwork;
let dataworks = require("../data.json");

console.log("work details-");

export default {
  // props: ['title'],
  // props: ['details'],
  data() {
    return {
      title: this.$route.params.title,
      id: this.$route.params.id,
      date: this.$route.params.date,
      details: this.$route.params.details,
      company: this.$route.params.company,
      deliverable1: this.$route.params.deliverable1,
      deliverable2: this.$route.params.deliverable2,
      deliverable3: this.$route.params.deliverable3,
      deliverable4: this.$route.params.deliverable4,
      thumbnail: this.$route.params.thumbnail,
      image1: this.$route.params.image1,
      image2: this.$route.params.image2,
      image3: this.$route.params.image3,
      image4: this.$route.params.image4,
      image5: this.$route.params.image5,
      image6: this.$route.params.image6,
      text1: this.$route.params.text1,
      text2: this.$route.params.text2,
      text3: this.$route.params.text3,
    };
  },
  created() {
    console.log(this.$route.params.title);
    console.log(dataworks.works);
    for (const work of dataworks.works) {
      if (this.$route.params.title == work.title) {
        selectedwork = work;
        console.log(selectedwork.title);
      }
    }
    window.addEventListener("scroll", this.handleScroll);
  },

  mounted() {
    this.title = selectedwork.title;
    this.id = selectedwork.id;
    this.date = selectedwork.date;
    this.details = selectedwork.details;
    this.company = selectedwork.company;
    this.deliverable1 = selectedwork.deliverable1;
    this.deliverable2 = selectedwork.deliverable2;
    this.deliverable3 = selectedwork.deliverable3;
    this.deliverable4 = selectedwork.deliverable4;
    this.thumbnail = selectedwork.thumbnail;
    this.image1 = selectedwork.image1;
    this.image2 = selectedwork.image2;
    this.image3 = selectedwork.image3;
    this.image4 = selectedwork.image4;
    this.image5 = selectedwork.image5;
    this.image6 = selectedwork.image6;
    this.text1 = selectedwork.text1;
    this.text2 = selectedwork.text2;
    this.text3 = selectedwork.text3;
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      console.log("scrolling");
      // Any code to be executed when the window is scrolled
    },
  },
};
</script>



<style>
</style>