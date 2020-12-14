<template>
<div class="row full-width bg-white rounded q-pa-sm">
  <!-- header -->
  <div class="row full-width justify-center q-pa-md">
    <h3>Create new contact</h3>
  </div>
  <!-- body -->
  <div
    class="row full-width"
    style="margin: 8px 0">
    <cb-form :item="contact" :schema="{version: 0, fields: [{id: 'name', type: 'text', label: 'Enter name'}]}"></cb-form>
    <cb-form :item="contact.body" :schema="$store.state.schema"></cb-form>
  </div>
  <!-- footer -->
  <div class="btn" @click="create()">Create</div>
</div>
</template>

<script>
export default {
  name: 'contactCreator',
  data () {
    return {
      contact: {
        name: '',
        body: {},
        version: 0,
        versions: []
      }
    }
  },
  computed: {
    contactSchema () {
      return {
        version: 0,
        fields: []
      }
    }
  },
  methods: {
    create () {
      console.log('create')
      if (this.contact.name.length === 0) {
        // return
        this.$emit('close')
      }
      else {
        this.$emit('contact', this.contact)
        this.$emit('close')
      }
    }
  }
}
</script>
