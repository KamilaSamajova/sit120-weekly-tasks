<template>
  <div class="hello" id="hello">
    <div id="forIfStatements">
      <h2>V-for, v-if, v-else statements</h2>
      <div v-for="(item, index) in items" :key="item.id">
        <h4 v-if="index % 2 === 0">
          {{ item.message }}
        </h4>
        <div v-else>
          {{ item.message }}
        </div>
      </div>
    </div>
    <div id="showStatement">
      <h2>Visible items - v-show</h2>
      <div v-for="item in items" :key="item.id">
        <h4 v-show="item.visible">
          {{ item.message }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      items: [
        { message: 'Hello World!',
          visible: true },
        { message: 'Hello Vue!',
          visible: false },
        { message: 'Hello JavaScript!',
          visible: false },
        { message: 'Hello CSS!',
          visible: true },
        { message: 'Hello HTML!',
          visible: true },
        { message: 'Hello Web Apps!',
          visible: false }
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (max-width: 630px) {
  #hello {
    display: grid;
    grid-template-areas: "forIfStatements"
                         "showStatement";
  }
}

@media (min-width: 630px) {
  #hello {
    display: grid;
    grid-template-areas: "forIfStatements showStatement";
  }
}

@media (min-width: 1000px) {
  #hello {
    font-size: 150%;
  }
}

#forIfStatements {
  grid-area: forIfStatements;
}

#showStatement {
  grid-area: showStatement;
}

</style>
