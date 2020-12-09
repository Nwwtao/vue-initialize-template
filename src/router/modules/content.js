import Main from '../../views/Main.vue'

export default {
    path: '/content',
    name: 'airLinesImportList',
    title: '内容管理',
    component: Main,
    children: [
        {
            title: '文章管理',
            path: 'content-article',
            name: 'content-article',
            component: () => import('@/views/content/content-article.vue')
        }
    ]
};
