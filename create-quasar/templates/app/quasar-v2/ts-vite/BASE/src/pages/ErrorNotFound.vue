<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        Oops. Nothing here...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script lang="ts">
<% if (typescriptConfig === 'composition') { %>import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorNotFound'
});<% } else if (typescriptConfig === 'options') { %>import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorNotFound'
});<% } else if (typescriptConfig === 'class') { %>import { Vue } from 'vue-class-component';

export default class ErrorNotFound extends Vue {}<% } %>
</script>
