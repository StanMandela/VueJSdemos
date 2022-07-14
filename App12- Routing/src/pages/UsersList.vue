<template>
<button @click="confirmInput">Confirm</button>
<button @click="SaveChanges">SaveChanges</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false,
    };
  },
  methods:{
    confirmInput(){
      console.log(this.users);
      //to naviage to another page
      this.$router.push('/teams');
      },
      SaveChanges(){
        this.changesSaved = true;
      }
  },
  beforeRouteEnter(to, from , next){
    console.log(' User List  CMP beforeRouteEnter');
    console.log(to, from);
    next();
  },
  //
  beforeRouteLeave(to,from, next){
    console.log(' User List  CMP beforeRouteLeave');
    console.log(to, from);
    if(this.changesSaved){
      next();
    }else{
      // asks the user if he wants to leave the page or not
      const userWantsToLeave = confirm('Are you sure you want to leave?');
    next( userWantsToLeave);
    }
  },
  unmounted(){
    console.log('User List CMP unmounted');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>