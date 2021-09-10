<template>
  <div class="root">
    <form>
      <div >
        <div class="row">
          <input placeholder="Nombre" id="name" type="text" v-model="name">
        </div>
        <div class="row">
          <input placeholder="Apellido" id="description" type="text" v-model="description">
        </div>

      </div>
      <button v-on:click.prevent='post'>Add</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
const { VUE_APP_BACKEND_URL } = process.env

export default {
  name: 'Create',
  data(){
    return{
      name:'',
      description:''
    }
  },
  methods:{
    async post() {
      const newCommand = {
        name: this.name,
        description: this.description,
        isActive: true
      }
      const response = await axios.post(`${VUE_APP_BACKEND_URL}/commands/create`, newCommand)
      console.log(response);
    }
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
.row {
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
