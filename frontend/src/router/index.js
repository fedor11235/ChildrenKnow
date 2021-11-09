import VueRouter from 'vue-router'

import MainPage from '@/pages/MainPage'
import CoursePage from '@/pages/CoursePage'
import QuestionAnswerPage from '@/pages/QuestionAnswerPage'
import RecallPage from '@/pages/RecallPage'
// import AllFilmsPage from '../pages/AllFilmsPage'
// import FilmPage from '../pages/FilmPage'
// import NotFound from '../pages/404'
// import FilmsLayout from '../pages/FilmsLayout'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/course',
      name: 'course',
      props: true,
      component: CoursePage,

    },
    {
      path: '/question',
      name: 'question',
      component: QuestionAnswerPage,

    },
    ,
    {
      path: '/recall',
      name: 'recall',
      component: RecallPage,

    },
    //     {
    //       path: ':id',
    //       name: 'filmPage',
    //       component: FilmPage,
    //       beforeEnter: (to, from, next) => {
    //         if(localStorage.getItem('auth')) {
    //           next()
    //         } else {
    //           next({ name: 'films' })
    //         }
    //       }
    //     },
    //     {
    //       path: '*/*',
    //       redirect: { name: 'films' }
    //     },
    //   ]
    // },
    // {
    //   path: '*',
    //   name: 'notFound',
    //   component: NotFound
    // },
  ]
})
