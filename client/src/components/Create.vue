<template>
  <div class="root">
    <form>
      <div >
        <div class="row">
          <input placeholder="Nombre" id="first_name" type="text" v-model="message">
        </div>
        <div class="row">
          <input placeholder="Apellido" id="last_name" type="text">
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
      message:''
    }
  },
  methods:{
    post() {
      const user = {
        firstName: this.message,
        lastName: this.message,
        isActive: true
      }
      axios.post(`${VUE_APP_BACKEND_URL}/users/create`, user)
      .then(a=>{
        console.log("asñkdas");
        console.log(a);
      })
      // console.log(response);
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
