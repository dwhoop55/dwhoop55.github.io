<template>
  <form @submit.prevent="sendMessage()">
    <fieldset class="uk-fieldset">
      <legend class="uk-legend">
        Hi there! Happy to hear from you
        <span :uk-icon="form.message || form.from_name ? 'happy' : 'comment'" />
      </legend>

      <div class="uk-margin">
        <input
          :disabled="sending || sent"
          v-model="form.from_name"
          required
          class="uk-input"
          type="text"
          placeholder="Your name"
          maxlength="100"
        />
      </div>

      <div class="uk-margin">
        <input
          :disabled="sending || sent"
          v-model="form.reply_to"
          class="uk-input"
          type="email"
          placeholder="An email I can reply to"
        />
      </div>

      <div class="uk-margin">
        <textarea
          :disabled="sending || sent"
          required
          v-model="form.message"
          class="uk-textarea"
          rows="5"
          placeholder="How can I help?"
          maxlength="10000"
        ></textarea>
      </div>

      <p v-if="failed" class="uk-text-danger">
        Whoops, well that's embarrassing. Something went wrong. Please try again
        or hit me up on any of my other channels.
      </p>
      <p v-if="sent">Thanks! I'll read your message in a bit!</p>
      <button :disabled="sending" v-else class="uk-button uk-button-default">
        Send
        <div v-if="sending" class="uk-margin-left" uk-spinner></div>
      </button>
    </fieldset>
  </form>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactForm",

  data() {
    return {
      form: {
        from_name: "",
        reply_to: "",
        message: "",
      },
      sending: false,
      sent: false,
      failed: false,
    };
  },

  computed: {
    cannotSend() {
      return !this.name || !this.text;
    },
  },

  methods: {
    sendMessage() {
      this.sending = true;
      this.failed = false;
      // console.log("sending");
      emailjs
        .send(
          process.env.EMAILJS_SERVICE_ID,
          process.env.EMAILJS_TEMPLATE_ID,
          this.form
        )
        .then((response) => {
          // console.log("sent!");
          this.sent = true;
          this.from_name = "";
          this.reply_to = "";
          this.message = "";
        })
        .catch(() => (this.failed = true))
        .finally(() => (this.sending = false));
    },
  },
};
</script>
