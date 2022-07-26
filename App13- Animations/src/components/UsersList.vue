<template>
 <!-- // transition-group can be used to group multiple transitions together of a sme type. and use tag to html element to be renders -->
    <transition-group tag="ul" name="user-list">
            <li v-for="user in users" :key="user" @click="removeUser(user)">{{user}}</li>
    </transition-group>

        

<div>
    <input type="text" ref="userName">
    <button @click="addUser">Add User</button>
</div>
</template>
<script>
export default{
    data(){
        return{
            users:['max','max2','max3','max4','max5'],
        }
    },
    methods:{
        addUser(){
        const userNameEntered =this.$refs.userName.value;
        this.users.unshift(userNameEntered);
        },
        removeUser(user){
            this.users.splice(this.users.indexOf(user),1);
        }
    }
}
</script>
<style scoped>
.user-list-enter-from{
   opacity: 0;
    transform: translateX(-30px);
}
.user-list-enter-active{
    transition: all 1s ease-out;
}
.user-list-enter-to,
.user-list-leave-from{
    opacity: 1;
    transform: translateX(0);
}
.user-list-leave-active{
    transition: all 1s ease-in;
    position: absolute;
}
.user-list-leave-to{
    opacity: 0;
    transform: translateX(30px);
}
.user-list-move{
    transition: all 1s ease-in-out;

}

ul{
    list-style: none;
    padding: 0;
    margin:  1rem 0;
}
li{
    padding: 0.5rem;
    border: 1px solid #ccc;
    text-align: center;
}</style>