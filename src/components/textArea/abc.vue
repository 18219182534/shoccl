<template>
  <div>
    <slot name="text"></slot>
  </div>
</template>

<script>
    export default {
        name: "abc"
    }
</script>

<style scoped>
  .data{
    width: 90%;
    margin: 10px auto;
  }
  .data-div{
    width: 25%;
    height: 20px;

    display: inline-block;
    text-align: center;

    color: #626262;
    margin: 10px -6px;
    font-size: 14px;


  }
  .data-dd{
    overflow-x: auto;

    white-space: nowrap;
    height: 50px;
    width: 100%;


  }



</style>
