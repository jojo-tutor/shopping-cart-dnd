let express = require('express')
let path = require('path')

let reqLog = ( req, res, next ) => {
  console.log( req.method, req.path)
  next()
}

let app = express()
    app.use(express.static('public'))
    app.use(reqLog)
    app.get('/', ( req, res)=> {
      res.sendFile(path.resolve( process.cwd(), 'views/index.html') )
    })

let port = process.env.PORT || 8080
let server = app.listen(port, () => {
  console.log(`Server started on port ${8080}`);
});