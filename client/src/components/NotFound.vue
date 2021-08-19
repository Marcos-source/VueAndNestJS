<template>
  <div class='root'>
      <md-card class='card'>
      <md-card-header>
        <div class="md-title">Error</div>
      </md-card-header>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
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
