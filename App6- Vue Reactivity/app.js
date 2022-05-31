const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      //this.message = this.currentUserInput;
     // console.log(this.$refs.userText.value);
     this.message= this.$refs.userText.value;
 
    },
  },
});

app.mount('#app');

//''''Second app'''''''''
