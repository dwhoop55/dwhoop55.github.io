<template>
  <div class="uk-flex uk-flex-middle uk-flex-wrap">
    <img
      class="uk-margin uk-margin-right uk-border-rounded"
      data-src="/intro_profile.jpg"
      alt="An image of me, Florian"
      width="400"
      height="400"
      uk-img
    />
    <div
      class="uk-margin uk-margin-left"
      uk-scrollspy="target: > p; cls:uk-animation-slide-right-small; delay: 100"
    >
      <h2 class="uk-text-lead uk-text-bolder">Hi, I'm Florian!</h2>
      <p>
        I'm a computer science graduate and love to work in designing and
        building network infrastructure and user experiences.
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
        While I have been working at at a small-scale internet provider since
        2014, for my masters thesis I shifted my focus towards creating great
        user experiences in mobile and web applications and how this can be
        accomplished in a user-centered approach.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>
