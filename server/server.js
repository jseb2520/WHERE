import Express from 'express'
import fs from 'fs'
import path from 'path'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import HomeContainer from '../src/views/home/HomeContainer'

const app = Express()

const PORT = 8000

app.use('^/$', (req, res, next)=> {
  fs.readFile(path.resolve('./build/index.html'), 'utf-8', (error, data) => {
    if(error){
      console.log(error)
      return res.status(500).send('Some error has ocourred')
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">
          ${ReactDOMServer.renderToString(<HomeContainer/>)}
        </div>` 
      )
    )
  })
})

app.use(Express.static(path.resolve(__dirname, '..', 'build')))

app.listen(PORT, ()=> {
  console.log('App running in the port ' + PORT)
})