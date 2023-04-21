const config = {
    web: {
        port: process.env.WEB_PORT || 7001,
        mode: process.env.MODE_ENV,
        app_env: process.env.APPLICATION_ENV,
        node_env: process.env.NODE_ENV
    },
    api: {
        base_url: process.env.NEXT_PUBLIC_BASE_URL,
    }
}

module.exports = config;