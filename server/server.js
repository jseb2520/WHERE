import Express from 'express'
import fs from 'fs'
import path from 'path'

import React from 'react'
import {StaticRouter} from 'react-router-dom'
import ReactDOMServer from 'react-dom/server'
import App from '../src/App'

const app = Express()

const PORT = 8000

app.use('^/$', (req, res, next)=> {
  const context = {};
  fs.readFile(path.resolve('./build/index.html'), 'utf-8', (error, data) => {
    if(error){
      console.log(error)
      return res.status(500).send('Some error has ocourred')
    }

    if (context.url) {
      res.writeHead(301, {
        Location: context.url
      });
      res.end();
    } else{
      return res.send(
        data.replace(
          '<div id="root"></div>',
          `<div id="root">
            ${ReactDOMServer.renderToString(
              <StaticRouter location={req.url} context={context}>
                <App />
              </StaticRouter>
            )}
          </div>` 
        )
      )
    }
  })
})

app.use(Express.static(path.resolve(__dirname, '..', 'build')))

app.listen(PORT, ()=> {
  console.log('App running in the port ' + PORT)
})