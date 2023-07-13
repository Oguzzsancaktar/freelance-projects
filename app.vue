<template>
  <div>
    <div>
      <label for="car-make">Car Make:</label>
      <multiselect v-model="selectedMake" id="car-make" :options="carMakes" label="name" track-by="id"
        placeholder="Select Car Make"></multiselect>
    </div>
    <div v-if="selectedMake">
      <label for="car-model">Car Model:</label>
      <multiselect v-model="selectedModel" id="car-model" :options="carModels" label="name" track-by="id"
        placeholder="Select Car Model"></multiselect>
    </div>
    <div v-if="selectedModel">
      <label for="car-year">Car Year:</label>
      <multiselect v-model="selectedYear" id="car-year" :options="carYears" label="year" track-by="id"
        placeholder="Select Car Year"></multiselect>
    </div>
    <button @click="goToPage">Go</button>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import Multiselect from 'vue-multiselect'

export default {
  components: {
    Multiselect
  },
  setup() {
    const selectedMake = ref(null)
    const selectedModel = ref(null)
    const selectedYear = ref(null)
    const carMakes = ref([])
    const carModels = ref([])
    const carYears = ref([])

    const carMakesEndpoint = "https://s2c-uk-go-siteapi-production.up.railway.app/api/v1/s2c/uk/mysql/car_makes"
    const carModelEndpoint = "https://s2c-uk-go-siteapi-production.up.railway.app/api/v1/s2c/uk/mysql/car_models/ofmake/"

    const fetchCarMakes = async () => {
      const response = await $fetch(carMakesEndpoint)
      carMakes.value = response.car_makes.map((item) => {
        return { name: item.car_make }
      })
    }

    const fetchCarModels = async () => {
      if (selectedMake.value) {
        const response = await $fetch(carModelEndpoint + selectedMake.value.name)
        carModels.value = response.car_models.map((item) => {
          return { name: item.car_model }
        })
      }
    }

    const fetchCarYears = async () => {
      if (selectedModel.value) {
        // const response = await $fetch(carYearEndpoint + selectedModel.value.name)
        // console.log("333", response)
        carYears.value = [{ year: 2020 }, { year: 2021 }, { year: 2022 }]
      }
    }

    watch(selectedMake, fetchCarModels)
    watch(selectedModel, fetchCarYears)

    const goToPage = () => {
      if (selectedMake.value && selectedModel.value && selectedYear.value) {
        const url = `/${selectedMake.value.name}/${selectedModel.value.name}/${selectedYear.value.year}`
        console.log("Url", url)
        this.$router.push(url)
      }
    }

    return {
      selectedMake,
      selectedModel,
      selectedYear,
      carMakes,
      carModels,
      carYears,
      fetchCarMakes,
      fetchCarModels,
      fetchCarYears,
      goToPage,
    }
  },
  mounted() {
    this.fetchCarMakes()
  },
}
</script>

<style src="./vue-multiselect.min.css">
</style>

