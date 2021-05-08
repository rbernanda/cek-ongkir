<template>
    <div>
      <Toast v-if="errorMessages.length"/>
      <Navbar />
      <FormRates />
      <ServiceList v-if="services.length"/>
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar'
import FormRates from '../components/FormRates'
import ServiceList from '../components/ServicesList'
import Toast from '../components/Toast'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  created() {
    this.$store.dispatch('fetchProvinces')
    this.$store.dispatch('fetchCities')
  },
  computed: {
    ...mapState(["services", 'errorMessages'])
  },
  components: {
    Navbar,
    FormRates,
    ServiceList,
    Toast
  }
}
</script>
