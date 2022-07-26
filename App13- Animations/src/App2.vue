<template>

</template>  

<script>
import UsersList from './components/UsersList.vue';
export default {
  components: {
    UsersList,
    
  },
  
  data() {
    return { 
      animatedBlock: false,
      dialogIsVisible: false ,
      paraIsVisible: false,
      userAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
      };
      
  },
  methods: {
    enterCalled(){
    clearInterval(this.enterInterval);
    
    },
    leaveCancelled(){
    clearInterval(this.leaveInterval);
    
    },
    after(el) {
      console.log('after');
      console.log(el);
       var current = new Date(); 
       console.log(current);
    },
    leave(el,done){
      console.log('leave');
       var current = new Date(); 
       console.log(current);
      this.leaveInterval = setInterval(()=>{
        let round =1;
        el.style.opacity = 1 - round *0.01;
        round++;
        if(round > 100){
         clearInterval(this.leaveInterval);
         done();
        }
      },20); 
    },
    enter(el, done){
      var current = new Date();  
      var time = current.getTime();
      console.log(current);
          console.log('enter');
          console.log(el);
       this.enterInterval = setInterval(()=>{
        let round =1;
        el.style.opacity =  round *0.01;
        round++;
        if(round > 100){
         clearInterval(this.enterInterval);
         done();
        }
      },20);
    
    },
    beforeEnter(el){
      console.log('before enter');
      console.log(el);
      el.style.opacity = 0;
    
    },
    beforeLeave(el){
      console.log('before leave');
      console.log(el);
  
    },
    showUsers(){
      this.userAreVisible = true;
    
    },
    hideUsers(){
      this.userAreVisible = false;
    },
    toggleParagh() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    animateBlock() {
      this.animatedBlock = true;
    
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.5s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translate(-150px); */
  animation:slide-fade 0.5s ease-out forwards;
}

.fade-button-enter-active {

transition: opacity 0.3s ease-out;
}
.fade-button-leave-active {
  opacity: 1;
}
.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}


@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
  
}
@keyframes modal {
  from {
    opacity: 0;
    transform: translate(50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translate(0) scale(1);

  }
  
}

</style>