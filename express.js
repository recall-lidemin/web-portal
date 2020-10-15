const { createProxyMiddleware } = require('http-proxy-middleware')
const express = require('express')
const app = express()
const render = require('./dist/umi.server')
const fs = require('fs')
const umijs = fs.readFileSync('./dist/umi.js')
const umicss = fs.readFileSync('./dist/umi.css')

const port = 3008

const domain = 'http://localhost'

app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://127.0.0.1:7006',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/'
    }
  })
)

// Express
app.use(async (req, res) => {
  if (req && req.url === '/dist/umi.css') {
    res.setHeader('Content-Type', 'text/css')
    res.send(umicss)
  } else if (req && req.url === '/dist/umi.js') {
    res.setHeader('Content-Type', 'text/js')
    res.send(umijs)
  } else {
    res.setHeader('Content-Type', 'text/html')
    const context = {}
    const { html, error, rootContainer } = await render({
      // 有需要可带上 query
      path: req.url,
      context
    })

    res.send(html)
  }
})

app.listen(port, (err) => {
  if (err) {
    throw err
  }
  console.log(`> Ready on port ${port}, ${domain}:${port}`)
})
