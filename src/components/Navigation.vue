<template>
  <div
    uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky"
  >
    <header>
      <!-- Main Navbar -->
      <nav
        class="uk-container uk-navbar navbar-blur navbar-true-glass"
        uk-scrollspy-nav="closest: li; scroll: true; cls: uk-text-bold uk-active"
      >
        <div class="uk-navbar-left">
          <ul class="uk-navbar-nav uk-visible@s">
            <li>
              <a class="uk-text-large" href="#network">network</a>
            </li>
            <li>
              <a class="uk-text-large" href="#operations">operations</a>
            </li>
            <li>
              <a class="uk-text-large" href="#apps">apps</a>
            </li>
            <li>
              <a class="uk-text-large uk-text-nowrap" href="#contact">say hi</a>
            </li>
            <li>
              <a href="" uk-icon="icon: xing"></a>
            </li>
            <li>
              <a href="" uk-icon="icon: linkedin"></a>
            </li>
            <li>
              <a href="" uk-icon="icon: twitter"></a>
            </li>
            <li>
              <a @click="toggleLocale()" uk-icon="icon: world">
                <span style="margin-right: 5px"> {{ $i18n.locale }} </span>
              </a>
            </li>
          </ul>
        </div>
        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav">
            <li class="uk-active">
              <a href="#contact">Florian<strong>Busch</strong></a>
            </li>
          </ul>
          <a
            href="#"
            class="uk-navbar-toggle uk-hidden@s"
            uk-navbar-toggle-icon
            uk-toggle="target: #sidenav"
          ></a>
        </div>
      </nav>
    </header>

    <div
      id="sidenav"
      uk-offcanvas="flip: true; mode: push; overlay: true"
      class="uk-offcanvas"
    >
      <div class="uk-offcanvas-bar">
        <ul
          class="uk-nav"
          uk-scrollspy-nav="closest: li; scroll: true; cls: uk-text-bold uk-active"
        >
          <li>
            <a
              class="uk-text-large"
              href="#network"
              uk-toggle="target: #sidenav"
              >network</a
            >
          </li>
          <li>
            <a
              class="uk-text-large"
              href="#operations"
              uk-toggle="target: #sidenav"
              >operations</a
            >
          </li>
          <li>
            <a class="uk-text-large" href="#apps" uk-toggle="target: #sidenav"
              >apps</a
            >
          </li>
          <li>
            <a
              class="uk-text-large"
              href="#contact"
              uk-toggle="target: #sidenav"
              >say hi</a
            >
          </li>
          <li>
            <a class="uk-text-large" uk-icon="icon: xing"></a>
          </li>
          <li>
            <a class="uk-text-large" uk-icon="icon: linkedin"></a>
          </li>
          <li>
            <a class="uk-text-large" uk-icon="icon: twitter"></a>
          </li>
          <li>
            <a
              class="uk-text-large"
              @click="toggleLocale()"
              uk-icon="icon: world"
            >
              <span style="margin-right: 5px">
                {{ $i18n.locale }}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  methods: {
    toggleLocale() {
      var newLocale = this.$i18n.locale == "de" ? "en" : "de";
      console.log(newLocale, this.$i18n.locale);
      this.$i18n.locale = newLocale;
      window.localStorage.setItem("locale", newLocale);
    },
  },
};
</script>

<style scoped>
.navbar-blur {
  backdrop-filter: blur(10px);
}
.navbar-true-glass {
  background-color: rgba(255, 255, 255, 0.6);
}
</style>
