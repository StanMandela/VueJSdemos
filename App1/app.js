const app = Vue.createApp({
    data(){
        return{
            courseGoalA: 'Finish course on Vue!',
            courseGoalB: 'Finish course on React',
            courseGoalC: '<h1>Finish course on React</h1>',
            vueLink:'https://vuejs.org'
        };
    },
    methods: {
        outputGoal(){
            const randomNumber= Math.random();
            if(randomNumber <0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalC;
            }
        },
       

    }
});

app.mount('#user-goal');