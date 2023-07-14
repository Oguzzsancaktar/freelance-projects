<template>
  <div class="w-full row justify-between items-center">
    <div class="w-full bg-gray p-10 m-10 rounded">
      <SearchMultiselect />
    </div>

    <div class="w-full bg-gray p-10 m-10 rounded">
      <SearchReg @send-modal-data="setModalData" />
    </div>

    <RegistrationDetailModal @reset-modal-data="resetModalData" :modalData="modalData" />
  </div>
</template>

<script setup>
// Libs.
import SearchReg from '../src/components/SearchReg.vue'
import SearchMultiselect from '../src/components/SearchMultiselect.vue'
import RegistrationDetailModal from '../src/modals/RegistrationDetailModal.vue'



let modalData = ref(null);


const setModalData = (data) => {
  modalData.value = data
}
const resetModalData = () => {
  modalData.value = null
}


</script>
