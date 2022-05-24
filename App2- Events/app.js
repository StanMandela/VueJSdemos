const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name:'',
      confirmedName:''
    };
  },
  methods:{
    confirmInput(){
      this.confirmedName = this.name;

    },
    submitForm(event){
      alert('submitted');
    },
    // get default event object emitted by  the browser
    setName(event,lastName){
      this.name = event.target.value + ' '+ lastName;
    },
    increment(){
      this.counter++;
    },
    reduce(){
      this.counter = this.counter-1;
    }
  }
});

app.mount('#events');
