<template>
    <div class="tabber">
      <div class="left">
        <slot name="left"></slot>
      </div >
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
</template>

<script>
    export default {
        name: "tabber"
    }
</script>

<style scoped>
  .tabber{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    color: #000;


  }
  .right,.left
  {
    width: 60px;
  }
  .center
  {
    flex: 1;
  }
  </style>
