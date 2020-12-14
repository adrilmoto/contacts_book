import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const store = new Vuex.Store({
  state: {
    contacts: [],
    schema: {
      version: 0,
      fields: [
        {id: 'description', type: 'text', label: 'Description', placeholder: 'Enter description'},
        {id: 'age', type: 'number', label: 'Age', placeholder: null},
        {id: 'is_smoking', type: 'boolean', label: 'Is smoking?', placeholder: null},
        {id: 'birth', type: 'date', label: 'Birth date', placeholder: 'Enter birth date'},
        {id: 'email', type: 'email', label: 'Email', placeholder: null},
        {id: 'tel', type: 'tel', label: 'Tel', placeholder: null}
      ]
    },
    schemaNew: {
      version: 0,
      fields: []
    },
    schemaExample: {
      version: 11,
      fields: [
        {id: 'description', type: 'text', label: 'Description', placeholder: 'Enter description'},
        {id: 'age', type: 'number', label: 'Age', placeholder: null},
        {id: 'is_smoking', type: 'boolean', label: 'Is smoking?', placeholder: null},
        {id: 'birth', type: 'date', label: 'Birth date', placeholder: 'Enter birth date'},
        {id: 'email', type: 'email', label: 'Email', placeholder: null},
        {id: 'tel', type: 'tel', label: 'Tel', placeholder: null}
      ]
    },
    fieldTypes: [
      {type: 'email', icon: null, label: 'Email'},
      {type: 'boolean', icon: null, label: 'Yes/No'},
      {type: 'text', icon: null, label: 'Text'},
      {type: 'date', icon: null, label: 'Date'},
      {type: 'number', icon: null, label: 'Number'},
      {type: 'tel', icon: null, label: 'Tel'}
    ],
    fieldSchema: {
      version: 0,
      fields: [
        {id: 'id', type: 'text', label: 'ID'},
        {id: 'type', type: 'text', label: 'Type'},
        {id: 'label', type: 'text', label: 'Label'},
        {id: 'placeholder', type: 'text', label: 'Placeholder'}
      ]
    }
  },
  mutations: {
    CONTACT_ADD (state, contact) {
      state.contacts.push(contact)
    },
    CONTACT_UPDATE (state, contact) {
      let i = state.contacts.findIndex(c => c.id === contact.id)
      if (i >= 0) {
        state.contacts[i] = contact
      }
    },
    CONTACT_REMOVE (state, id) {
      state.contacts = state.contacts.filter(c => c.id !== id)
    }
  },
  actions: {
    contactCreate ({ commit, state }, contact) {
      contact.id = Date.now().toString()
      // check contact
      commit('CONTACT_ADD', contact)
    },
    contactUpdate ({ commit, state }, contact) {
      commit('CONTACT_UPDATE', contact)
    },
    contactRemove ({ commit, state }, id) {
      if (!id) throw new Error('Need contact id!')
      commit('CONTACT_REMOVE', id)
    },
    fieldAdd ({ commit, state}, field) {
      console.log('fieldAdd', field)
    },
    fieldRemove ({ commit, state }, field) {
      console.log('fieldRemove', field)
    },
  },
  plugins: [vuexLocal.plugin]
})

export default store
