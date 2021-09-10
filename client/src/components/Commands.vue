<template>
  <div class='root'>
      <md-card class='card' v-for="(data) in data" :key="data.id">
      <md-card-header>
        <div class="md-title">{{data.id}} - {{data.name}}</div>
      </md-card-header>
      <md-card-content>
        {{data.description}}
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import axios from "axios";
const { VUE_APP_BACKEND_URL } = process.env

export default {
  name: 'Commands',
  props: {
    data: Array
  },
  async created() {
    const { data } = await axios.get(`${VUE_APP_BACKEND_URL}/commands`)
    this.data = data
  }
}
</script>

<style scoped>
.root {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 1rem;
  margin: 1rem;
  height: auto;
  width: 15rem;
}
</style>
