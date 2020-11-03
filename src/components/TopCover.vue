<template>
  <div class="uk-cover-container uk-height-large">
    <video
      loop
      muted
      playsinline
      uk-cover
      src="/cover.mp4"
      uk-video="autoplay: inview"
    ></video>
  </div>
</template>

<script>
export default {
  name: "TopCover",
};
</script>
