<template>
  <div>
    <h1>Show User</h1>
    <p>ID: {{ user.id }}</p>
    <p>ชื่อผู้ใช้: {{ user.name }} {{ user.lastname }}</p>
    <p>email: {{ user.email }}</p>
    <p>password: {{ user.password }}</p>
    <p>Status: {{ user.status }}</p>
    <p>Type: {{ user.type }}</p>
  </div>
</template>
<script>
import UsersService from '@/services/UsersService'

export default {
  data() {
    return {
      user: {}
    }
  },
  async created() {
    var userId = this.$route.params.userId;
    this.user = (await UsersService.show(userId)).data;
  }
} 
</script>
<style scoped></style>