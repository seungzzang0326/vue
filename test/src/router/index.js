import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Test from '@/components/test'
import Seungzzang from '@/components/seungzzang'
import Zzz from '@/components/zzz'

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/test',
            name: 'Test',
            component: Test
        },
        {
            path: '/seungzzang',
            name: 'Seungzzang',
            component: Seungzzang
        },
        {
            path: '/zzz',
            name: 'Zzz',
            component:Zzz
        }
    ]
})