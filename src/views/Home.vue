<template>
<div>
  <!-- header -->
  <div style="display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0px; background: white; padding: 10px">
    <h1>Contacts</h1>
    <span style="margin: 0 20px; font-weight: bold">+</span>
    <div style="width: 30px; height: 30px" class="br stepback"></div>
  </div>
  <!-- body -->
  <div>
    <div>
      <div
        v-for="(c,ci) in 100" :key="ci"
        @click="$router.push('/contact/' + ci)"
        class="br"
        style="display: flex; width: 100%; border-bottom: 1px solid #eee; padding: 10px">
        <span>Contact {{ ci }}</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>
