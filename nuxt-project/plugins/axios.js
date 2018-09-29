export default function ({ $axios }) {
    $axios.onRequest( (config) => {
        if (config.url.indexOf('api.github.com') + 1) {
            //config.headers.Authorization = 'token 02217597ac9422769cd3de3b989e3d28a5a36347'
        }
    })
}