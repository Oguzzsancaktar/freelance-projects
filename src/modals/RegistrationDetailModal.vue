<template >
  <div
    :class="(state.isOpen ? 'd-flex' : 'd-none') + ' position-fixed top-0 left-0 bg-blurred w-screen h-screen items-center justify-center'">
    <div class="column justify-between bg-gray rounded p-20 w-md h-md position-relative">
      <div class="row justify-between items-center border-b-1">
        <p class="form-text text-muted">
          Registration Detail
        </p>
        <button @click="handleCloseModal">Close</button>
      </div>

      <div v-if="state.isLoading" class="position-absolute abs-middle">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g class="spinner_Wezc">
            <circle cx="12" cy="2.5" r="1.5" opacity=".14" />
            <circle cx="16.75" cy="3.77" r="1.5" opacity=".29" />
            <circle cx="20.23" cy="7.25" r="1.5" opacity=".43" />
            <circle cx="21.50" cy="12.00" r="1.5" opacity=".57" />
            <circle cx="20.23" cy="16.75" r="1.5" opacity=".71" />
            <circle cx="16.75" cy="20.23" r="1.5" opacity=".86" />
            <circle cx="12" cy="21.5" r="1.5" />
          </g>
        </svg>
      </div>

      <div v-if="!state.isLoading && modalData" class="column">
        <div class="column">
          <div class="row justify-between items-center border-b-1 w-full">
            <p class="text-white">
              Make
            </p>
            <p class="text-blue">
              {{ modalData.make }}
            </p>
          </div>

          <div class="row justify-between items-center border-b-1 w-full">
            <p class="text-white">
              Model
            </p>
            <p class="text-blue">
              {{ modalData.model }}
            </p>
          </div>

          <div class="row justify-between items-center border-b-1 w-full">
            <p class="text-white">
              Colour
            </p>
            <p class="text-blue">
              {{ modalData.colour }}
            </p>
          </div>

          <div class="row justify-between items-center border-b-1 w-full">
            <p class="text-white">
              Engine
            </p>
            <p class="text-blue">
              {{ modalData.engine }}
            </p>
          </div>


          <div class="row justify-between items-center border-b-1 w-full">
            <p class="text-white">
              Engine Capacity
            </p>
            <p class="text-blue">
              {{ modalData.engine_capacity }}
            </p>
          </div>



          <div class="row justify-between items-center border-b-1 w-full">
            <p class="text-white">
              Fuel Type
            </p>
            <p class="text-blue">
              {{ modalData.fuel_type }}
            </p>
          </div>

          <div class="row justify-between items-center border-b-1 w-full">
            <p class="text-white">
              Registration Number
            </p>
            <p class="text-blue">
              {{ modalData.registration_number }}
            </p>
          </div>

          <div class="row justify-between items-center border-b-1 w-full">
            <p class="text-white">
              Year of Manufacture
            </p>
            <p class="text-blue">
              {{ modalData.year_of_manufacture }}
            </p>
          </div>


        </div>

        <div class="row justify-between items-center w-full">
          <button class="bg-red text-white w-full rounded m-10" @click="handleCloseModal">this is not my car</button>
          <button class="bg-green text-white w-full rounded m-10" @click="handleConfirm">this is my car</button>
        </div>
      </div>

    </div>
  </div>
</template>



<script setup>
const props = defineProps(['modalData', 'state'])

console.log(props.state)
const handleCloseModal = () => {
  emit('resetModalData')
}

const handleConfirm = () => {
  // got to url make / model / year
}

const emit = defineEmits(['resetModalData']);
</script>
