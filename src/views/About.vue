<template>
  <div class="container_top_about">
    <div>
      <router-link :to="{ name: 'Home' }">
        <img
          id="logo_rotation_3d"
          src="../../public/img/logo_rotation_3d.gif"
          alt=""
        />
      </router-link>
      <div id="about_skills">
        <p>Graphic designer</p>
        <p>Photographer</p>
      </div>
    </div>
  </div>
  <div id="about_wrapper">
    <div id="about_image"></div>
    <div id="about_infos">
      <h2>About me</h2>
      <p id="about_description">
        I am Mathis Botton, a 2nd year student at the DUT MMI (Multimedia and
        Internet Professions) at IUT Belfort-Montbéliard. I am drawn to design.
        I am motivated and autonomous. I like to set goals for myself and I know
        how to invest myself to achieve my goals.
      </p>
    </div>

    <div id="about_personals_infos">
      <p>mathisbotton@laposte.net</p>
      <a href="resume.pdf" download>resume</a>
    </div>

    <div id="about_follow_me">
      <p class="text_2">FOLLOW ME</p>
      <p class="text_2">-</p>
      <a class="text_2" href="https://www.behance.net/this-ma">BEHANCE</a>
      <a class="text_2" href="https://www.instagram.com/mathisbotton/?hl=fr"
        >INSTAGRAM</a
      >
      <a
        class="text_2"
        href="https://www.linkedin.com/in/mathis-botton-9838021a8/"
        >LINKEDIN</a
      >
    </div>

    <div
      class="marquee"
      onclick="location.href='https://unsplash.com/@mathisbotton';"
    >
      <div class="track">
        <p class="content">
          See my photos See my photos See my photos See my photos See my photos
        </p>
      </div>
    </div>
  </div>
</template>



<script>
console.log("about");
</script>