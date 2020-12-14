<template>
<div
  style="display: flex; flex-wrap: wrap; width: 100%; background: white; padding: 10px; border-radius: 4px">
  <!-- header -->
  <div
    style="display: flex; flex-wrap: wrap; width: 100%; padding: 10px;">
    <span style="font-size: 20px; font-weight: bold">Fields editor</span>
  </div>
  <!-- field creator -->
  <cb-modal
    v-if="showFieldCreator && field"
    @close="showFieldCreator = false">
    <div
      style="display: flex; flex-wrap: wrap; width: 100%; max-width: 400px; background: white; border-radius: 4px;">
      <div
        class="row full-width q-pa-md">
        <span style="font-size: 20px; font-weight: bold"> Field creator </span>
      </div>
      <cb-form :item="field" :schema="$store.state.fieldSchema"/>
      <div class="row full-width q-pa-sm"> 
        <div class="btn" @click="fieldCreate(field)"> Create </div>
      </div>
    </div>
  </cb-modal>
  <!-- field editor -->
  <cb-modal
    v-if="showFieldEditor && field"
    @close="showFieldEditor = false">
    <div
      style="display: flex; flex-wrap: wrap; width: 100%; max-width: 400px; background: white; border-radius: 4px;">
      <div
        class="row full-width q-pa-md">
        <span style="font-size: 20px; font-weight: bold"> Field editor </span>
      </div>
      <cb-form :item="field" :schema="$store.state.fieldSchema"/>
      <div class="row full-width q-pa-sm"> 
        <div class="btn" @click="fieldUpdate(field)"> Update </div>
      </div>
    </div>
  </cb-modal>
  <!-- fields draggable array -->
  <draggable
    v-model="$store.state.schema.fields"
    class="full-width q-pa-sm">
    <!-- field wrapper -->
    <div
      v-for="f in $store.state.schema.fields" :key="f.id"
      class="row full-width q-pa-sm bg-grey rounded"
      style="margin-bottom: 10px">
      <!-- label/edit -->
      <div
        class="row full-width justify-between">
        <span> {{ f.label }} </span>
        <small
          @click="field = f, showFieldEditor = true"
          style="color: black; cursor: pointer"> Edit field </small>
      </div>
      <!-- type/remove -->
      <div
        class="row full-width justify-between">
        <small style="color: blue"> {{ fieldType(f.type).label }} </small>
        <small
          @click="fieldRemove(f)"
          style="color: red; cursor: pointer"> Remove field </small>
      </div>
    </div>
  </draggable>
  <!-- footer -->
  <div class="row full-width q-pa-sm">
    <div class="btn" @click="fieldAdd">Add field</div>
  </div>
</div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'schemaEditor',
  components: {
    draggable
  },
  data () {
    return {
      field: null,
      fieldNew: {
        id: null,
        type: 'text',
        label: '',
        placeholder: null,
      },
      showFieldCreator: false,
      showFieldEditor: false,
    }
  },
  methods: {
    fieldClick (field) {
      console.log('fieldClick', field)
    },
    fieldType (type) {
      return this.$store.state.fieldTypes.find(f => f.type === type)
    },
    fieldAdd () {
      this.field = JSON.parse(JSON.stringify(this.fieldNew))
      this.showFieldCreator = true
    },
    fieldUpdate (field) {
      console.log('fieldUpdate', field)
      // check id,type,label,placeholder
      // dispatch
    },
    fieldCreate (field) {
      console.log('fieldCreate', field)
    },
    fieldRemove (field) {
      console.log('fieldRemove', field)
    }
  }
}
</script>
