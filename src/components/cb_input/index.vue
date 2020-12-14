<template>
<div
  class="row full-width">
  <div
    class="row full-width q-pa-xs">
    <span>{{ field.label }}</span>
  </div>
  <component
    v-if="field && field.type"
    :is="components[field.type]"
    :value="value"
    :placeholder="field.placeholder"
    @input="$emit('input', $event)">
  </component>
</div>
</template>

<script>
import typeBoolean from './type_boolean.vue'
import typeDate from './type_date.vue'
import typeEmail from './type_email.vue'
import typeNumber from './type_number.vue'
import typeText from './type_text.vue'
import typeTel from './type_tel.vue'

export default {
  name: 'cbInput',
  props: ['field', 'value'],
  components: {
    typeBoolean,
    typeDate,
    typeEmail,
    typeNumber,
    typeText,
    typeTel,
  },
  data () {
    return {
      components: {
        boolean: 'type-boolean',
        date: 'type-date',
        email: 'type-email',
        number: 'type-number',
        text: 'type-text',
        tel: 'type-tel',
      }
    }
  }
}
</script>
