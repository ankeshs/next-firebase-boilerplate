const nextRouter = (app, server) => {
    const handle = app.getRequestHandler()
    server.get('/post/:title', (req, res) => {
        return app.render(req, res, '/post', { title: req.params.title })
    })
    server.get('*', (req, res) => handle(req, res))
}

export default nextRouter
