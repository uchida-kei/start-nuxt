export default function ({ $axios }) {
    $axios.onRequest( (config) => {
        if (config.url.indexOf('api.github.com') + 1) {
            config.headers.Authorization = 'token 084b4dfc3498d71bd30f210ae78bce931a5940c7'
        }
    })
}