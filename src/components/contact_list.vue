<template>
<div>
    <h1 style="color: black">Contacts</h1>
    <div>
      <div
        v-for="(c,ci) in 100" :key="ci"
        style="width: 100%; border-bottom: 1px solid #eee">
        <span>Contact {{ ci }}</span>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'contactList',
}
</script>
