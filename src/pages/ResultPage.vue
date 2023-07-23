<template>
  <q-page padding>
    <button @click="handleClick">
      Go To Home
    </button>
  </q-page>
</template>

<script>
import { useRouter } from 'vue-router'


export default {
  name: 'ResultPage',
  setup() {
    const router = useRouter()

    const handleClick = () => {
      router.push('/')
    }

    return {
      handleClick
    }
  }
}
</script>
