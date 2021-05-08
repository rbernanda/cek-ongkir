<template>
  <section>
    <div class="container my-5">
      <div class="d-flex my-4 align-items-center">
        <h3 class="me-5">
          List Logistik
        </h3>
        <Dropdown @setFilter="setFilter"/>
      </div>

      <div v-for="(service, idx) in filteredServices" :key="idx">
        <div
          class="row py-4 bg-light shadow mt-4"
          v-for="(cost, index) in service.costs"
          :key="index + idx"
        >
          <div class="col d-flex flex-column justify-center">
            <div class="mx-2">
              <span class="text-muted d-block mt-2">Agen Pengiriman</span>
              <span class="d-block mt-2">{{ service.code.toUpperCase() }}</span>
            </div>
          </div>
          <div class="col d-flex flex-column justify-center">
            <div class="mx-2">
              <span class="text-muted d-block mt-2">Jenis Layanan</span>
              <span class="d-block mt-2">{{ cost.service }}</span>
            </div>
          </div>
          <div class="col d-flex flex-column justify-center">
            <div class="mx-2">
              <span class="text-muted d-block mt-2">Estimasi</span>
              <span class="d-block mt-2">{{ cost.cost[0].etd.split(' ').slice(0, 1).join('') }} hari</span>
            </div>
          </div>
          <div class="col d-flex flex-column justify-center">
            <div class="mx-2">
              <span class="text-muted d-block mt-2">Tarif</span>
              <span class="d-block mt-2"
                >Rp. {{ Number(cost.cost[0].value).toLocaleString('id') }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Dropdown from './Dropdown'
export default {
  components: { Dropdown },
  name: 'ServiceList',
  data() {
    return {
      filterValue: '',
    }
  },
  methods: {
    setFilter(search) {
      this.filterValue = search
    },
  },
  computed: {
    ...mapState(['services']),
    filteredServices() {
      return this.services.filter((service) =>
        service.code.toLowerCase().includes(this.filterValue.toLowerCase())
      )
    },
  },
}
</script>

<style></style>
