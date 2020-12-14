<style>
.contact-name-input, .contact-name-input:focus, .contact-name-input:active {
  padding-left: 10px;
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 30px;
  font-weight: bold;
  color: #2c3e50;
  border: none !important;
  border-color: transparent !important;
  box-shadow: none !important;
  outline: none !important;
  outline-offset: 0 !important;
}
</style>

<template>
<div style="display: flex; justify-content: center;">
  <!-- modals -->
  <cb-modal
    v-if="showSchemaEditor"
    @close="showSchemaEditor = false">
    <schema-editor style="max-width: 400px;"/>
  </cb-modal>
  <div style="max-width: 600px; width: 100%" class="about">
    <!-- header -->
    <div class="header">
      <input
        v-if="contact"
        v-model="contact.name"
        class="contact-name-input"
        style="width: 100%;"
        >
      <div style="display: flex; justify-content: space-between; padding-left: 8px;">
        <div class="save svg-icon" style="width: 40px; height: 40px" @click="save()"></div>
      </div>
    </div>
    <!-- body -->
    <div
      v-if="contact"
      style="display: flex; flex-wrap: wrap; width: 100%;">
      <cb-form :item="contact.body" :schema="$store.state.schema" />
      <!-- footer -->
      <div class="row full-width q-pa-sm">
        <div
          class="row full-width b-grey q-pa-sm"
          style="margin-top: 10px;">
          <span
            @click="showSchemaEditor = true"
            style="cursor: pointer;">Edit fields</span>
        </div>
        <div @click="contactRemove(contact.id)" class="row justify-start items-center button">
          <span style="color: white;">Remove contact</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import schemaEditor from '@/components/schema_editor.vue'

export default {
  components: {
    schemaEditor
  },
  name: 'Contact',
  data () {
    return {
      contact: null,
      showSchemaEditor: false,
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    },
  },
  watch: {
    contact: {
      deep: true,
      handler (to, from) {
        console.log('contact TO', to)
        this.contactChanged(to)
      }
    },
    '$route.params.id': {
      immediate: true,
      async handler (to) {
        if (to) {
          console.log('$route.params.id TO', to)
          this.contact = await this.contactGet(to)
        }
      }
    }
  },
  methods: {
    contactChanged (to) {
      console.log('contactChanged', to)
      this.$store.dispatch('contactUpdate', to)
    },
    save () {
      this.$router.push('/')
    },
    // contact staff
    async contactGet (id) {
      let contact = this.$store.state.contacts.find(c => c.id === id)
      return JSON.parse(JSON.stringify(contact))
    },
    contactRemove (id) {
      console.log('contactRemove', id)
      this.$store.dispatch('contactRemove', id)
      // replace route and go home
      this.$router.replace('/')
    }
  },
  created () {
    this.contactChanged = this.$debounce(this.contactChanged, 1000)
  }
}
</script>
