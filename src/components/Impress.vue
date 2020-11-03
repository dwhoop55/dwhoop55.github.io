<template>
  <div uk-grid>
    <div>
      <span class="uk-text-muted uk-text-small uk-text-uppercase">
        Built with
        <a class="uk-text-muted" target="_blank" href="https://vuejs.org/"
          >Vue.js</a
        >
        &
        <a class="uk-text-muted" target="_blank" href="https://getuikit.com/"
          >UIKIT</a
        >
      </span>
      <!-- <svg
        class="uk-animation-stroke"
        style="--uk-animation-stroke: 46"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
          <g transform="translate(178.06 235.01)">
            <path
              d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"
              fill="#41b883"
            />
          </g>
          <g transform="translate(178.06 235.01)">
            <path
              d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"
              fill="#34495e"
            />
          </g>
        </g>
      </svg> -->
    </div>
    <div>
      <a
        class="uk-text-muted uk-text-small uk-text-uppercase"
        uk-toggle="target: #impress"
        >Impress</a
      >
    </div>
    <div id="impress" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">Impress</h2>
        <button class="uk-modal-close-default" type="button" uk-close></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
