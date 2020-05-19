import { lazy } from 'react'
const Home = lazy(() => import('views/home'))
const Albums = lazy(() => import('views/albums'))
const Artist = lazy(() => import('views/artists'))

export default [
	{
		component: Home,
		exact: true,
		path: '/home'
	},
	{
		component: Albums,
		exact: true,
		path: '/albums'
	},
	{
		component: Artist,
		exact: true,
		path: '/artists'
	}
]
