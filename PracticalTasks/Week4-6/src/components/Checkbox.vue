<template>
  <div class="checkbox" id="checkbox">
    <input type="checkbox" id="js" value="JavaScript" v-model="checkedItems" />
    <label for="js"> JavaScript </label>

    <input type="checkbox" id="css" value="CSS" v-model="checkedItems" />
    <label for="css"> CSS </label>

    <input type="checkbox" id="html" value="HTML" v-model="checkedItems" />
    <label for="html"> HTML </label>

    <input type="checkbox" id="vue" value="Vue" v-model="checkedItems" />
    <label for="vue"> Vue </label>

    <br><br>

    <span>Checked: {{ checkedItems }} </span>
  </div>
</template>

<script>
export default {
  name: 'CheckBox',
  data() {
    return {
      checked: false,
      checkedItems: [],
    }
  }
}
</script>

<style scoped>
#checkbox {
    font-size: 120%;
    margin: 60px;
}
</style>