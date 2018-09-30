export default function ({ $axios }) {
    $axios.onRequest( (config) => {
        if (config.url.indexOf('api.github.com') + 1) {
            config.headers.Authorization = 'token c0cca072a658faf3bab2179ebfc78e4632228af7'
        }
    })
}