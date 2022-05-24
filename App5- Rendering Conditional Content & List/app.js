const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue: '',
      goals: [],
      newObject:{
        name: 'Stanley',
        age:27
      }
    };
  },
  methods:{
    addGoal(){
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(index){
      this.goals.splice(index,1);

    }
  }
});

app.mount('#user-goals');
