<template>
  <div>
    <div>
      <label for="car-make">Car Make:</label>
      <multiselect v-model="selectedMake" :loading="isMakesLoading" id="car-make" :options="carMakes" label="name"
        track-by="id" placeholder="Select Car Make"></multiselect>
    </div>
    <div>
      <label for="car-model">Car Model:</label>
      <multiselect v-model="selectedModel" :loading="isModelsLoading" :disabled="!selectedMake" id="car-model"
        :options="carModels" label="name" track-by="id" placeholder="Select Car Model"></multiselect>
    </div>
    <div>
      <label for="car-year">Car Year:</label>
      <multiselect v-model="selectedYear" :loading="isYearsLoading" id="car-year" :disabled="!selectedModel"
        :options="carYears" label="year" track-by="id" placeholder="Select Car Year"></multiselect>
    </div>
    <button @click="goToPage">Go</button>
  </div>
</template>



<script>
// Libs.
import { ref, watch } from 'vue'
import Multiselect from 'vue-multiselect'


export default {
  components: {
    Multiselect,
  },
  setup() {
    const isMakesLoading = ref(false)
    const isModelsLoading = ref(false)
    const isYearsLoading = ref(false)
    const selectedMake = ref(null)
    const selectedModel = ref(null)
    const selectedYear = ref(null)
    const carMakes = ref([])
    const carModels = ref([])
    const carYears = ref([])

    const carMakesEndpoint = "https://s2c-uk-go-siteapi-production.up.railway.app/api/v1/s2c/uk/mysql/car_makes"
    const carModelEndpoint = "https://s2c-uk-go-siteapi-production.up.railway.app/api/v1/s2c/uk/mysql/car_models/ofmake/"

    const fetchCarMakes = async () => {
      isMakesLoading.value = true
      const response = await $fetch(carMakesEndpoint)
      carMakes.value = response.car_makes.map((item) => {
        return { name: item.car_make }

      })
      isMakesLoading.value = false
    }

    const fetchCarModels = async () => {
      if (selectedMake.value) {
        isModelsLoading.value = true
        isYearsLoading.value = true
        const response = await $fetch(carModelEndpoint + selectedMake.value.name)
        carModels.value = response.car_models.map((item) => {
          return { name: item.car_model, years: item.years }
        })
      }
      isModelsLoading.value = false
      isYearsLoading.value = false

    }

    const fetchCarYears = async () => {

      if (selectedModel.value && selectedMake.value) {
        const years = carModels.value.find((item) => {
          return item.name === selectedModel.value.name
        })

        carYears.value = years.years.split("|").map((item) => {
          return { year: item }
        })
        isYearsLoading.value = false
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
      isMakesLoading,
      isModelsLoading,
      isYearsLoading,
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
  }
}
</script>

