<template>
<div
  style="display: flex; flex-wrap: wrap; width: 100%;">
  <input
    :value="value" @input="$emit('input', $event.target.value)"
    style="width: 100%"
    >
</div>
</template>

<script>
export default {
  name: 'typeTel',
  props: ['value']
}
</script>
