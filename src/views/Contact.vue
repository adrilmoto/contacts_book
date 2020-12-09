<template>
<div class="about">
  <span @click="$router.push('/')">back</span>
  <h1>Contact - {{id}}</h1>
  <div>
    <span>contact details here goes</span>
    <div>
      <div
        v-for="(f,fi) in 5" :key="fi"
        style="width: 100%;">
        <span>field: {{fi}}</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      contact: null,
      contactTemplate: {
        id: 1, // 1,2,3,4,5,6
        name: 'Mike',
        fields: {
          email: 'mike@mike.com', // type: email
          birth: '01.01.2020', // type: date
          age: 16, // type: int
          description: 'Some description', // type: string/text
          is_smoking: false, // type: boolean
        }
      }
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  watch: {
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
    // contact staff
    async contactGet (id) {
      return {
        id: id,
        name: 'Somename' + Date.now().toString(),
        fields: {
          email: 'email@email.com',
          age: 16,
          birth: '01.01.2020'
        }
      }
    },
    contactUpdate (id) {},
    contactSave (id) {
      // save contact to localStorage
    },
    contactRemove (id) {
      // remove contact from localStorage
    },
    // field staff
    fieldAdd (id, type, options) {},
    fieldRemove (id) {},
    fieldEdit (id, payload) {},
    fieldCopy (id) {},
  }
}
</script>
