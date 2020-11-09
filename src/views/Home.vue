<template>
  <div>
    <top-cover />
    <navigation />

    <container id="intro">
      <intro />
    </container>

    <container id="overview" expanded background-image-class="overview-image">
      <overview />
    </container>

    <container id="network">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        reprehenderit aperiam molestiae dolores itaque ad similique.
        Perspiciatis facere beatae obcaecati officia, expedita quae reiciendis
        non quidem natus numquam animi eos?
      </p>
    </container>

    <container id="operations">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
        eligendi. Veritatis qui unde voluptatibus quas magnam voluptatem, ut
        laudantium, iure optio, sint nihil vel quidem eum impedit! Ipsa,
        molestiae doloremque! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eaque reprehenderit aperiam molestiae dolores itaque ad similique.
        Perspiciatis facere beatae obcaecati officia, expedita quae reiciendis
        non quidem natus numquam animi eos?
      </p>
    </container>

    <container id="apps">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        reprehenderit aperiam molestiae dolores itaque ad similique.
        Perspiciatis facere beatae obcaecati officia, expedita quae reiciendis
        non quidem natus numquam animi eos?
      </p>
    </container>

    <container id="contact" size="small" color="primary">
      <contact-form />
    </container>

    <container id="footer" size="small" color="primary">
      <impress />
    </container>
  </div>
</template>

<script>
export default {
  name: "Home",
  watch: {
    $route: {
      immediate: true,
      handler: function (newVal, oldVal) {
        this.showModal = newVal.meta && newVal.meta.showModal;
      },
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style>
.overview-image {
  background-image: url("~@/assets/overview_bg.jpg");
}
</style>
