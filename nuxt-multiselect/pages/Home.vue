<template>
  <div class="w-full row justify-between items-center">
    <div class="w-full bg-gray p-10 m-10 rounded">
      <SearchMultiselect />
    </div>

    <div class="w-full bg-gray p-10 m-10 rounded">
      <SearchReg @send-modal-data="setModalData" @set-modal-state="setModalState" />
    </div>

    <RegistrationDetailModal @reset-modal-data="resetModalData" :modalData="modalData" :state="modalState" />
  </div>
</template>

<script setup>
// Libs.
import SearchReg from '../src/components/SearchReg.vue'
import SearchMultiselect from '../src/components/SearchMultiselect.vue'
import RegistrationDetailModal from '../src/modals/RegistrationDetailModal.vue'



const modalData = ref(null);
const modalState = ref({
  isOpen: false,
  isLoading: false
});

const setModalState = (state) => {
  modalState.value = state
}

const setModalData = (data) => {
  modalData.value = data
  modalState.value = { isOpen: true, isLoading: false }
}
const resetModalData = () => {
  modalData.value = null
  modalState.value = { isOpen: false, isLoading: false }
}


</script>
