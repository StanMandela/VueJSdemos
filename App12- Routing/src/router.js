import {
    createRouter,
    createWebHistory
} from 'vue-router';


import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        //redierct to teams list if no path is provided
        {
            path: '/',redirect: '/teams'},
        {
            name: 'teams',
            path: '/teams',
            meta:{needsAuth:true},
            components: {
                default: TeamsList,
                footer: TeamsFooter
            },
            children: [ //children takes an array of routes
                {
                    name: 'team-members',
                    path: '/teamId',
                    component: TeamMembers,
                    props: true
                }, // teams/t1

            ]
        },
        {
            path: '/users',
            components: {
                default: UsersList,
                footer: UsersFooter
            },
            beforeEnter(to, from, next) {
                console.log('beforeEnter');
                console.log(to, from);
                if(to.meta.needsAuth){
                    console.log('needsAuth'); 
                next();
                }else{
                    next();
                }
            }
        },

        // Dynamic router ; add router paramenter
        {
            path: '/teams/:teamId',
            component: TeamMembers,
            props: true
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        } //catch all unmatched routes and should come las
    ],
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return {
            x: 0,
            y: 0
        };

    }
});
router.beforeEach((to, from, next) => {
    console.log('Global beforeEach');
    console.log(to, from);
    // next(false); to prevent navigation
    next();

});
router.afterEach((to, from) => {
    //Good for sending analytics about the pages visited
    console.log('Global afterEach');
    console.log(to, from);
});
export default router;