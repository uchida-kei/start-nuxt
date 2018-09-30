export default ({ app }) => {
    app.router.bforeEarch((to, from, next) => {
        console.log('move to "${to.fullPath}"')
        next()
    })
}