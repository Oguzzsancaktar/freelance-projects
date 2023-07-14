<template>
  <div>
    <input v-model="registration" type="text" placeholder="Enter Registration" />
    <button @click="checkRegistration">Check Registration</button>
  </div>
</template>

<script setup>
const checkRegistrationEndpoint = "https://s2c-uk-go-siteapi-production.up.railway.app/api/v1/s2c/uk/regnumber/check/";

const registration = ref("EN11XAV");

const emit = defineEmits(['sendModalData']);

const checkRegistration = async () => {
  const response = await $fetch(checkRegistrationEndpoint + registration.value)

  emit('sendModalData', response)
}

</script>

