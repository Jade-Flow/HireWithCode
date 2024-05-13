import { createRouter, createWebHistory, RouteRecordRaw, Router } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        meta: {
            msg: "欢迎"
        },
        component: () => import("../components/welcome.vue")
    },{
        path: '/md',
        meta: {
            msg: "MarkDown"
        },
        component: () => import("../components/md.vue")
    },{
        path: '/start',
        meta: {
            msg: "开始挑战"
        },
        component: () => import("../components/start.vue")
    },{
        path: '/end',
        meta: {
            msg: "结束挑战"
        },
        component: () => import("../components/end.vue")
    },
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes
})

export default router