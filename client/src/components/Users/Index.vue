<template>
  <div>
    <h2>Get all users</h2>
    <h4>จํานวนผู้ใช้งาน {{ users.length }}</h4>
    <button v-on:click="navigateTo('/user/create')">สร้างผู้ใช้งาน</button>
    <div v-for="user in users" v-bind:key="user.id">
      <div><b>id: </b>{{ user.id }}</div>
      <div><b>ชื่อผู้ใช้:</b> {{ user.name }} {{ user.lastname }}</div>
      <div><b>email:</b> {{ user.email }}</div>
      <div><b>status:</b> {{ user.status }}</div>
      <div><b>type:</b> {{ user.type }}</div>
      <div>
        <button v-on:click="navigateTo('/user/' + user.id)">ดูข้อมูลผู้ใช้</button>
        <button v-on:click="navigateTo('/user/edit/' + user.id)">แก้ไขข้อมูล</button>
        <button v-on:click="deleteUser(user)">ลบข้อมูล</button>
      </div>
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
    navigateTo(route) {
      this.$router.push(route)
    },
    async deleteUser(user){
      let result = confirm("คุณต้องการลบข้อมูลใช่หรือไม่");
      try{
        await UsersService.delete(user);
      } catch(err){
        console.log(err);
      }
    },
    async refreshData(){
      try{
        this.users = (await UsersService.index()).data;
      } catch(err){
        console.log(err)
      }
    }
  }
} 
</script>
<style scoped></style>