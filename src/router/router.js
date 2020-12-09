import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下

// export const edi = {
//     path: '/edi',
//     title: {i18n: 'EDISet'},
//     meta: {auth: 'M_EDI_SETTING'},
//     name: 'edi_set',
//     component: () => import('@/views/codec/EDISet/index.vue')
// };

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        {
            path: 'home',
            name: 'home_index',
            component: () => import('@/views/home/home.vue')
        }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    require('./modules/content').default,

];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    otherRouter,
    ...appRouter
];
