<template>
  <div :class="`uk-section ${sectionClass}`" uk-parallax="bgy: -200">
    <div :class="`uk-container ${containerClass}`">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Container",
  props: ["expanded", "size", "color", "backgroundImageClass"],

  computed: {
    sectionClass() {
      var classes = [];
      if (this.color !== undefined) classes.push(`uk-section-${this.color}`);
      if (this.backgroundImageClass !== undefined) {
        classes.push(this.backgroundImageClass);
        classes.push(`uk-background-cover`);
      }
      return classes.join(" ");
    },
    containerClass() {
      var classes = [];
      if (this.expanded !== undefined) classes.push("uk-container-expand");
      if (this.size) classes.push(`uk-container-${this.size}`);
      return classes.join(" ");
    },
  },
};
</script>
