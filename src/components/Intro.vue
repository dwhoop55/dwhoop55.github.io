<template>
  <div uk-grid class="uk-flex-middle">
    <div class="uk-width-2-3@s uk-width-1-2@m uk-width-1-2@l">
      <div uk-parallax="y: 100">
        <img
          uk-scrollspy="cls:uk-animation-slide-top-small; delay: 100;"
          class="uk-margin uk-border-pill"
          :data-src="image"
          alt="An image of me, Florian"
          uk-img
        />
      </div>
    </div>
    <div class="uk-width-1-1@s uk-width-1-2@m uk-width-1-2@l">
      <div
        class="uk-margin uk-padding uk-width-expand"
        uk-scrollspy="target: > *; cls:uk-animation-slide-right-small; offset-top: -200"
      >
        <h1 class="uk-text-bolder">{{ $t("intro.hello") }}</h1>
        <p>
          I'm a computer science graduate and love working in designing and
          building high-performance backbone and wireless networks with
          particular regard to user experiences.
        </p>
        <p>
          During my study I noticed how well interaction design concepts can be
          applied to designing and operating large-scale network
          infrastructure—and how often these were missing in existing systems.
        </p>
        <p>
          I started working at the
          <a target="_blank" href="https://hci.rwth-aachen.de"
            >Media Computing Group at RWTH Aachen University</a
          >
          in 2013 where we focused on the interaction design every system has to
          get right when interacting with users in the real world.
        </p>
        <p>
          While I have been working at at a
          <a target="_blank" href="https://ramnet.de/links/netzstatus"
            >small-scale internet provider</a
          >
          since 2014, for my masters thesis I shifted my focus towards creating
          great user experiences in mobile and web applications and how this can
          be accomplished in a user-centered approach.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: require("@/assets/profile.jpg"),
    };
  },
};
</script>
