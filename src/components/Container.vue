<template>
  <div :class="`uk-section ${sectionColor}`">
    <div :class="`uk-container ${containerType}`">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Container",
  props: ["expanded", "size", "color"],

  computed: {
    sectionColor() {
      return `uk-section-${this.color}`;
    },
    containerType() {
      var type = [];
      if (this.expanded !== undefined) type.push("uk-container-expand");
      if (this.size) type.push(`uk-container-${this.size}`);
      return type.join(" ");
    },
  },
};
</script>
