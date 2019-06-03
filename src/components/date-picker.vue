<template>
  <mdb-date-picker v-model="date" />
</template>
<script>
  import { mdbDatePicker } from 'mdbvue';
  export default {
    name: 'date-picker',
    components: {
      mdbDatePicker
    },
    data() {
      return {
        date: ''
      };
    }
  }
</script>