<template>
  <div class="dropdown">
    <button
      class="btn btn-primary dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Filter Logistik
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <li><a class="dropdown-item" @click="setFilter('')">Semua</a></li>
      <li><a class="dropdown-item" @click="setFilter('jne')">JNE</a></li>
      <li><a class="dropdown-item" @click="setFilter('pos')">POS</a></li>
      <li>
        <a class="dropdown-item" @click="setFilter('tiki')">TIKI</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    setFilter(value) {
      this.$emit('setFilter', value)
    },
  },
}
</script>

<style></style>
