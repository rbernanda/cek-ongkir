<template>
  <div class="col">
    <label for="formGroupExampleInput" class="form-label command">Silahkan pilih asal dan tujuan</label>
    <button @click="submitting" type="button" class="btn btn-primary w-100">
      Cari Tarif
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    submitting() {
      this.$emit('handleSubmit')
    }
  }
}
</script>

<style>
  .command {
    font-size: 12px;
    color: #cf0000;
  }
</style>
