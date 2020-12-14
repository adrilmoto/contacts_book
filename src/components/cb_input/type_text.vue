<template>
<div
  class="row full-width">
  <input
    :value="value" @input="$emit('input', $event.target.value)"
    :placeholder="placeholder"
    class="full-width">
</div>
</template>

<script>
export default {
  name: 'typeText',
  props: ['value', 'placeholder']
}
</script>
