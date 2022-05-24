const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname:''
    };
  },
  watch:{
    name(value){
      if(value ===''){
        this.fullname ='';
      }else{
        this.fullname = value + ' '+ 'Munywoki';
      }
    }
  },
  computed:{
    // name the same way as you would name data properties
    // fullname(){
    //   console.log('Runiing again');
    //   if(this.name===''){
    //     return '';
    //         }
    //   return this.name +' '+ 'Munywoki';
    // }
  },
  methods: {
    outPutFullname(){
      console.log('Runiing again');
      if(this.name===''){
        return '';
            }
      return this.name +' '+ 'Munywoki';
    },
    resetInput(){
      this.name =''
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
