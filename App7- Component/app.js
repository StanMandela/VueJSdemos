const app = Vue.createApp({
    data(){
        return{
            detailsAreVisible: false,
            friends:[
                {
                    id:'manuel',
                    name:'Manuel Lorenz',
                    phone:'080808133',
                    email:'manue@localhost.com'

                },
                {
                    id:'Lisa',
                    name:'Natalie Lisa',
                    phone:'0979898',
                    email:'lisa@localhost.com'

                }

            ],
        };
    },
   
});
app.component('friend-contact',{
    template:`
    <li >
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' :'Show'}} Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong>{{friend.email}}</li>
          </ul>
        </li>
    ` ,
    data(){
        return {
            detailsAreVisible :false,
            friend:{
                id:'Lisa',
                name:'Natalie Lisa',
                phone:'0979898',
                email:'lisa@localhost.com'

            }
        };
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible= !this.detailsAreVisible;
        }
    }
});

app.mount('#app');