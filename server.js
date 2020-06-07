let app   = require("quik-server")

// plug-ins
app.quikAdd("quik-backend")         // this does the backend/api magic
app.quikAdd("quik-dom")             // this does the JSX magic

let port = process.env.PORT || 3030
app.settings = {
    // default settings (all are optional)
    port: port,
    host: '0.0.0.0',
    websiteFile: "./website.jsx",
    codeFolder: "./code",
    bundlerOptions: {}, // see https://parceljs.org/api.html for options
    afterServerStarted: () => {
        console.log(`Server running on http://localhost:${port}`)
    }
}
app.start()