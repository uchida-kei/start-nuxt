import Cookies from 'universal-cookie'

export default function ({ req, route, redirect, store }) {
    if (!process.server || ['/login'].includes(route.path)) {
        //console.log('test')
        return
    }

    const cookies = new Cookies(req.headers.cookie)
    const credential = cookies.get('credential')

    if (credential) {
        store.dispatch('setToken', credential)
        console.log('hi')
    } else {
        return redirect('/login')
        console.log('hi')
    }
}