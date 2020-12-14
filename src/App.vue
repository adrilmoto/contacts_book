<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  created () {
    document.title = 'Contacts Book'
  }
}
</script>

<style>
/* globals */
html, body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
::-webkit-scrollbar {
  width: 3px;
  height: 0px !important;
}
::-webkit-scrollbar-thumb {
  background: #000;
}
/* flex */
.row, .column {
  display: flex;
  flex-wrap: wrap;
  width: auto;
  height: auto;
  min-width: 0;
  max-width: 100%;
}
.column {
  flex-direction: column
}
.wrap {
  flex-wrap: wrap;
}
.no-wrap {
  flex-wrap: nowrap;
}
/* width/height */
.full-width {
  width: 100%
}
.full-height {
  height: 100%
}
.window-height {
  height: 100vh
}
.col-6 {
  width: 50%
}
/* items-XXX */
.items-start {
  align-items: flex-start;
}
.items-center {
  align-items: center;
}
.items-end {
  align-items: flex-end;
}
.items-stretch {
  align-items: stretch;
}
.items-baseline {
  align-items: baseline;
}
/* justify-XXX */
.justify-start {
  justify-content: flex-start;
}
.justify-center {
  justify-content: center;
}
.justify-end {
  justify-content: flex-end;
}
.justify-between {
  justify-content: space-between;
}
/* self-XXX */
.self-start {
  align-self: flex-start
}
.self-end {
  align-self: flex-end
}
.self-center {
  align-self: center
}
.self-baseline {
  align-self: baseline
}
.self-stretch {
  align-self: stretch
}
/* content-XXX */
.content-start {
  align-content: flex-start
}
.content-end {
  align-content: flex-end
}
.content-center {
  align-content: center
}
.content-stretch {
  align-content: stretch
}
.content-between {
  align-content: space-between
}
.content-around {
  align-content: space-around
}
/* bg-XXX */
.bg-primary {
  background: black;
}
.bg-white {
  background: white
}
.bg-grey {
  background: #eee
}
.bg-red {
  background: red
}
/* paddings */
.q-pa-xs {
  padding: 4px;
}
.q-pa-sm {
  padding: 8px;
}
.q-pa-md {
  padding: 16px;
}
/* margins */
.q-ma-sm {
  margin: 8px;
}
.q-ma-md {
  margin: 16px;
}
/* text */
#h1 {
  font-size: 20px;
  font-weight: bold;
}
#h2 {
  font-size: 14px;
  font-weight: 400;
}
/* borders */
.b-primary {
  border: 1px solid black;
}
.b-red {
  border: 1px solid #fa0000;
}
.b-grey {
  border: 1px solid #eee;
}
/* other */
.rounded {
  border-radius: 4px;
}
/* btn-XXX */
.btn {
  width: 100%;
  padding: 16px;
  border-radius: 4px;
  cursor: pointer;
  background: black;
  color: white;
  font-weight: bold;
}
.btn-outline {
  padding: 16px;
  cursor: pointer;
  border: 1px solid #eee
}
.btn-create {
  width: 40px;
  height: 40px;
  background-image: url("./assets/create.svg");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer
}
.button {
  background-color: #fa0000;
  border-radius: 4px;
  margin-top: 40px;
  width: 100%;
  justify-content: flex-start;
  cursor: pointer;
  padding: 16px;
}
.button:hover {
  background-color: #ff5e5e;
}
/* input-XXX */
input {
  min-height: 36px;
  padding: 6px;
  font-size: 16px;
}
/* custom */
.container-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
/* text */
.header {
  z-index: 1;
  top: 0px;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15); */
  background-color: #fff;
  padding: 10px
}
.save {
  background-image: url("./assets/save.svg")
}
.stepback {
  background-image: url("./assets/stepback.svg");
}
.delete {
  background-image: url("./assets/delete.svg");
}
</style>