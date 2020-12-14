<style scoped>
.contact:hover {
  background-color: #eee;
}
.contact-name {
  text-decoration: none;
  color: #000;
  font-weight:500;
  font-size:1.3em
}
</style>

<template>
  <div
    class="row full-width items-start content-start justify-center">
    <div
      class="row full-width items-start content-start"
      style="max-width: 600px">
      <cb-modal
        v-if="showContactCreator"
        @close="showContactCreator = false">
        <contact-creator
          style="max-width: 400px"
          @contact="contactCreate"
          @close="showContactCreator = false"
        />
      </cb-modal>
      <!-- header -->
      <div
        class="row full-width items-center content-center justify-between q-pa-sm">
        <h1>Contacts</h1>
        <div class="btn-create" style="color: black" @click="showContactCreator = true"></div>
      </div>
      <!-- body  -->
      <div class="row full-width">
        <div class="row full-width">
          <router-link
            v-for="c in $store.state.contacts"
            :key="c.id"
            :to="'/contact/'+c.id"
            class="row full-width q-pa-md contact"
            style="text-decoration: none; border-bottom: 1px solid #eee">
            <span class="contact-name"> {{ c.name }} </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contactCreator from '@/components/contact_creator.vue'

export default {
  name: 'Home',
  components: {
    contactCreator,
  },
  data () {
    return {
      showContactCreator: false,
    }
  },
  methods: {
    contactCreate (contact) {
      console.log('contactCreate', contact)
      this.$store.dispatch('contactCreate', contact)
    },
  }
}
</script>
