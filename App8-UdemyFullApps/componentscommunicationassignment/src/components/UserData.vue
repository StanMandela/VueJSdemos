<template>
    <form @submit.prevent="submitData">
        <div>
            <label>Name</label>
            <input type="text" v-model="enteredName" placeholder="Your Name"/>
        </div>
        <div>
            <label>Age</label>
            <input type="text" v-model="enteredAge"  placeholder="Your Age"/>
        </div>
         <div>
           <button>Add User</button>
        </div>
    </form>
</template>
<script>
export default {
    emits:['set-data'],
    data(){
        return{
            enteredName:'',
            enteredAge:'',
        }
    },
    methods:{
        submitData(){
            this.$emit('set-data', this.enteredName, this.enteredAge);
        }
    }


};
</script>
