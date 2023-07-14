<template >
  <div v-if="modalData"
    :class="modalData === null ? 'd-none' : 'd-flex' + ' position-fixed top-0 left-0 bg-blurred w-screen h-screen d-flex items-center justify-center'">
    <div class="column justify-between bg-gray rounded p-20 w-md h-md">
      <div class="row justify-between items-center border-b-1">
        <p class="form-text text-muted">
          Registration Detail
        </p>
        <button @click="handleCloseModal">Close</button>
      </div>

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
</template>



<script setup>
const props = defineProps(['modalData'])

const handleCloseModal = () => {
  emit('resetModalData')
}

const handleConfirm = () => {
  // got to url make / model / year
}

const emit = defineEmits(['resetModalData']);
</script>
