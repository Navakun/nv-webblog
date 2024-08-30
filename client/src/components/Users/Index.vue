<template>
  <div>
    <h2>Get all users</h2>
    <h4>จํานวนผู้ใช้งาน {{ users.length }}</h4>
    <div v-for="user in users" v-bind:key="user.id">
      <p>id: {{ user.id }}</p>
      <p>ชื่อผู้ใช้: {{ user.name }} {{ user.lastname }}</p>
      <p>email: {{ user.email }}</p>
      <p>status: {{ user.status }}</p>
      <p>type: {{ user.type }}</p>
      <p><button v-on:click="navigateTo('/user/'+user.id)">ดูข้อมูลผู ้ใช้</button></p>
      <hr>
    </div>
  </div>
</template>
<script>
import UsersService from '@/services/UsersService'

export default {
  data() {
    return {
      users: []
    }
  },
  async created() {
    this.users = (await UsersService.index()).data
  }, 
    methods: { 
      navigateTo (route) { 
        this.$router.push(route) 
      },
    }  
} 
</script>
<style scoped></style>