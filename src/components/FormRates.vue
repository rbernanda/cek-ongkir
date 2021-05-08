<template>
  <section
    class="d-flex flex-column justify-content-start align-items-center bg-secondary h-100"
  >
    <h1 class="text-light fs-3 pt-4">Cek Tarif Pengiriman</h1>
    <div class="container mt-4 bg-light py-4 my-5">
      <div class="row py-3 d-flex align-items-center">
        <div class="col">
          <label for="formGroupExampleInput" class="form-label">Asal</label>
          <input
            v-if="!isSearchingOrigin"
            v-model="origin_city_name"
            type="text"
            class="form-control"
            aria-label="Last name"
            @keydown="isSearchingOrigin = !isSearchingOrigin"
          />
          <input
            v-else-if="isSearchingOrigin"
            v-model="$store.state.fromSearch"
            type="text"
            class="form-control"
            placeholder="Kota"
            aria-label="First name"
          />
          <div v-if="fromSearch && isSearchingOrigin" class="position-relative">
            <ul class="position-absolute city-list">
              <li
                @click="handleOrigin(city.city_id, city.city_name)"
                v-for="city in filterFromCity"
                :key="city.id"
              >
                {{ city.city_name }}
              </li>
            </ul>
          </div>
        </div>

        <div class="col">
          <label for="formGroupExampleInput" class="form-label">Tujuan</label>
          <input
            v-if="!isSearchingDestination"
            v-model="destination_city_name"
            type="text"
            class="form-control"
            aria-label="Last name"
            @keydown="isSearchingDestination = !isSearchingDestination"
          />
          <input
            v-else-if="isSearchingDestination"
            v-model="$store.state.toSearch"
            type="text"
            class="form-control"
            placeholder="Kota"
            aria-label="Last name"
          />
          <div
            v-if="toSearch && isSearchingDestination"
            class="position-relative"
          >
            <ul class="city-list position-absolute">
              <li
                @click="handleDestination(city.city_id, city.city_name)"
                v-for="city in filterToCity"
                :key="city.id"
              >
                {{ city.city_name }}
              </li>
            </ul>
          </div>
        </div>

        <div class="col">
          <label for="formGroupExampleInput" class="form-label"
            >Berat (g)</label
          >
          <input
            v-model="payload.weight"
            type="number"
            class="form-control"
            placeholder="1000"
            aria-label="Last name"
          />
        </div>

        <SearchButton @handleSubmit="handleSubmit" />
      </div>
    </div>
  </section>
</template>

<script>
import SearchButton from '../components/SearchButton'
import { mapState } from 'vuex'
export default {
  name: 'FormRates',
  components: {
    SearchButton,
  },

  data() {
    return {
      payload: {
        origin: '',
        destination: '',
        weight: '',
        courier: '',
      },
      origin_city_name: '',
      destination_city_name: '',
      isSearchingDestination: true,
      isSearchingOrigin: true,
    }
  },
  methods: {
    handleOrigin(originId, cityName) {
      this.payload.origin = originId
      this.origin_city_name = cityName
      this.isSearchingOrigin = false
    },
    handleDestination(id, cityName) {
      this.payload.destination = id
      this.destination_city_name = cityName
      this.isSearchingDestination = false
    },
    handleSubmit() {
      const errors = []
      const {origin, destination, weight} = this.payload
      if(!origin || !origin.trim()) errors.push('Silahkan isi asal kota')
      if (!destination || !destination.trim()) errors.push('Silahkan isi tujuan')
      if (!weight || !weight.trim()) errors.push('Mohon masukkan berat barang')
      if(errors.length) {
        this.$store.commit('setErrors', errors)
        setTimeout(() => {
          this.$store.commit('setErrors', [])
        }, 3000)
      } else {
        this.$store.dispatch('postCost', this.payload)
      }
    },
  },
  computed: {
    ...mapState(['provinces', 'cities', 'fromSearch', 'toSearch']),
    filterFromCity() {
      return this.cities.filter((city) =>
        city.city_name.toLowerCase().includes(this.fromSearch.toLowerCase())
      )
    },
    filterToCity() {
      return this.cities.filter((city) =>
        city.city_name.toLowerCase().includes(this.toSearch.toLowerCase())
      )
    },
  },
}
</script>

<style>
li:hover {
  cursor: pointer;
  background-color: #e1e5ea;
}

li {
  padding-right: 1rem;
  left: 0%;
  width: 100%;
  text-decoration: none;
  list-style: none;
  text-align: left;
}

.city-list {
  max-height: 10rem;
  overflow-y: scroll;
  width: 100%;
  background-color: whitesmoke;
}
</style>
