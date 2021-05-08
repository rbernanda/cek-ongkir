<template>
  <div
    class="toast toast-demo fade show position-absolute notif text-white bg-primary"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div class="toast-body">
      <div class="p-2" v-for="(message, idx) in errorMessages" :key="idx" >
        {{message}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['errorMessages'])
  }
}
</script>

<style>
  .notif {
  z-index: 1000;
  }
</style>
