<style>
.cb-modal-wrapper {
  position: absolute;
  z-index: 2;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>

<template>
<div
  @click.self="$emit('close')"
  class="cb-modal-wrapper">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'cbModal',
}
</script>
