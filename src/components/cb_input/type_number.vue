<template>
<input
  :value="value" @input="$emit('input', $event.target.value)"
  style="width: 100%"
  >
</template>

<script>
export default {
  name: 'typeNumber',
  props: ['value', 'label']
}
</script>
