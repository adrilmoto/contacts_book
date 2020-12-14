<template>
<div
  class="row full-width">
  <div
    v-for="(f) in schema.fields" :key="f.id"
    class="row full-width q-pa-sm">
    <cb-input
      :field="f"
      :value="item[f.id]"
      @input="fieldChanged(f.id, $event)" />
  </div>
</div>
</template>

<script>
import cbInput from '@/components/cb_input/index.vue'

export default {
  name: 'cbForm',
  props: {
    item: {type: Object, required: true},
    schema: {type: Object, required: true}
  },
  components: {
    cbInput
  },
  methods: {
    fieldChanged (key, val) {
      this.$set(this.item, key, val)
    }
  }
}
</script>
