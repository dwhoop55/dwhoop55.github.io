<template>
  <form @submit.prevent="sendMessage()">
    <fieldset class="uk-fieldset">
      <legend class="uk-legend">
        Hi there! Happy to hear from you
        <span :uk-icon="text || name ? 'happy' : 'comment'" />
      </legend>

      <div class="uk-margin">
        <input
          v-model="name"
          required
          class="uk-input"
          type="text"
          placeholder="Your name"
        />
      </div>

      <div class="uk-margin">
        <input
          v-model="email"
          class="uk-input"
          type="email"
          placeholder="An email I can reply to"
        />
      </div>

      <div class="uk-margin">
        <textarea
          required
          v-model="text"
          class="uk-textarea"
          rows="5"
          placeholder="How can I help?"
        ></textarea>
      </div>

      <button :disabled="cannotSend" class="uk-button uk-button-default">
        Send
      </button>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: "ContactForm",

  data() {
    return {
      name: "",
      email: "",
      text: "",
    };
  },

  computed: {
    cannotSend() {
      return !this.name || !this.text;
    },
  },

  methods: {
    sendMessage() {
      console.log("sending");
    },
  },
};
</script>
