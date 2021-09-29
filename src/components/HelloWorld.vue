<template>
  <div>
    <p>*<small> {{indication_1}} </small></p>
    <p>*<small> {{indication_2}} </small></p>
    <p>*<small> {{indication_3}} </small></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld', 
  props: {
    indication_1: String,
    indication_2: String,
    indication_3: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

p::first-letter
{
  color: var(--blue);
}

</style>
