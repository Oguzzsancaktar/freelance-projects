
<template>
  <div class="row justify-center sidebar-bg" style="padding: 20px 0 20px 0;margin-bottom: 2rem;">



    <div class="select-bar">
      <div>
        <q-select color="grey-9" standout="bg-accent text-white" bg-color="white" outlined label-color="grey-9"
          v-model="selectedMake" filterFn :focusable="false" :loading="isMakesLoading" use-input input-debounce="0"
          @filter="filterFn" label="Select Make" style="width: 250px" behavior="menu" :options="carMakes">
        </q-select>
      </div>



      <div>
        <q-select color="grey-9" standout="bg-accent text-white" :disable="(!selectedMake || isMakesLoading)"
          bg-color="white" outlined v-model="selectedModel" label-color="grey-9" :options="carModels"
          :loading="isModelsLoading" label="Select Model">
        </q-select>
      </div>



      <div>
        <q-select :multiple="true" color="grey-9" standout="bg-accent text-white" bg-color="white" outlined
          label-color="grey-9" v-model="selectedYear" :disable="(!selectedModel || isYearsLoading)" :options="carYears"
          :loading="isYearsLoading" label="Select Year">
        </q-select>
      </div>
      <div>
        <q-btn @click="goToPage" color="red-10">
          <q-icon left size="3.4em" name="search" />
          <div>Search Products</div>
        </q-btn>
      </div>
    </div>
  </div>
</template>


<script>
// Libs.
import { ref, watch } from 'vue'
import { ofetch } from 'ofetch'
import { useRouter } from 'vue-router'



export default {
  name: "IndexPage",
  setup() {
    const isMakesLoading = ref(false)
    const isModelsLoading = ref(false)
    const isYearsLoading = ref(false)
    const selectedMake = ref(null)
    const selectedModel = ref(null)
    const selectedYear = ref(null)
    const carMakes = ref([])
    const carMakesResponse = ref([])
    const carModels = ref([])
    const carYears = ref([])
    const model = ref(null)

    const router = useRouter()

    const carMakesEndpoint = "https://s2c-uk-go-siteapi-production.up.railway.app/api/v1/s2c/uk/mysql/car_makes"
    const carModelEndpoint = "https://s2c-uk-go-siteapi-production.up.railway.app/api/v1/s2c/uk/mysql/car_models/ofmake/"

    const fetchCarMakes = async () => {
      isMakesLoading.value = true
      const response = await ofetch(carMakesEndpoint)
      const allModels = response.car_makes.map((item) => {
        return { label: item.car_make, value: item.car_make }

      })


      carMakesResponse.value = allModels
      carMakes.value = allModels

      isMakesLoading.value = false
    }

    const fetchCarModels = async () => {

      if (selectedMake.value) {
        const response = await ofetch(carModelEndpoint + selectedMake.value.value)
        carModels.value = response.car_models.map((item) => {
          return { label: item.car_model, value: item.car_model, years: item.years }
        })


      }

    }

    const fetchCarYears = async () => {
      if (selectedModel.value && selectedMake.value) {
        const years = carModels.value.find((item) => {
          return item.value === selectedModel.value.value
        })

        carYears.value = years.years.split("|").map((item) => {
          return { label: item, value: item }
        })
        isYearsLoading.value = false
      }
    }

    const filterFn = (val, update, abort) => {
      update(() => {
        const needle = val.toLowerCase()
        carMakes.value = carMakesResponse.value.filter(option => {
          return option.label.toLowerCase().indexOf(needle) > -1
        })
      })
    }


    const goToPage = () => {
      if (selectedMake.value && selectedModel.value && selectedYear.value) {
        let url
        if (selectedYear.value.value) {

          url = `/${selectedMake.value.value}/${selectedModel.value.value}/${selectedYear.value.value}`
        } else {
          const yearsString = selectedYear.value.map((item) => {
            return item.value
          }).join("-")

          url = `/${selectedMake.value.value}/${selectedModel.value.value}/${yearsString}`
        }

        router.push(url);

      }

    }


    watch(selectedMake, async () => {
      isModelsLoading.value = true
      isYearsLoading.value = true
      await fetchCarModels()
      isModelsLoading.value = false
      isYearsLoading.value = false
    })
    watch(selectedModel, fetchCarYears)


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
      model,
      filterFn,
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





<style scoped>
.select-bar {
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>
