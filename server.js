let app   = require("quik-server")

// plug-ins
app.quikAdd("quik-backend")         // this does the backend/api magic
app.quikAdd("quik-dom")             // this does the JSX magic

app.settings = {
    // default settings (all are optional)
    port: process.env.PORT || 3030,
    websiteFile: "./website.jsx",
    codeFolder: "./code",
    bundlerOptions: {}, // see https://parceljs.org/api.html for options
}
app.start()