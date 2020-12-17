import {createRouter,createWebHistory} from 'vue-router'

const routes=[
    {
        path:'/',
        name:'index',
        component:()=>import("../pages/Index.vue"),
        redirect: "/home",
        children: [
            {
                path: "/home",
                name: "Home",
                component: ()=>import("../pages/Home.vue")
            },
            {
                path:"/lottery",
                name:"lottery",
                component:()=>import("../pages/Lottery.vue")
            }
        ]
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  });
  
export default router;