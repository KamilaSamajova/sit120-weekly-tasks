<template>
  <div class="options" id="options">
    <select id="select-box" v-model="selected">
      <option value="" disabled>Select one option</option>
      <option v-for="item in items" :key="item.id"> {{ item }} </option>
    </select>
    <br><br>
    <span>Selected: {{ selected }} </span>
  </div>
</template>

<script>
export default {
  name: 'SelectedOptions',
  data() {
    return {
      items: [ 'HTML', 'CSS', 'JavaScript', 'Vue' ],
      selected: '',
    }
  }
}
</script>

<style scoped>
#options {
    font-size: 120%;
    margin: 60px;
}

#select-box {
    font-size: 110%;
}
</style>