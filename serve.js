// Простой HTTP-сервер для просмотра сайта локально
// Запуск: дважды кликнуть на serve.bat

const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = 3000
const DIR = __dirname

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
}

const server = http.createServer((req, res) => {
  let filePath = path.join(DIR, req.url === '/' ? 'index.html' : req.url)

  // Strip query string
  filePath = filePath.split('?')[0]

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(DIR, 'index.html')
  }

  const ext = path.extname(filePath).toLowerCase()
  const contentType = mime[ext] || 'application/octet-stream'

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404)
      res.end('Not found')
      return
    }
    res.writeHead(200, { 'Content-Type': contentType })
    res.end(data)
  })
})

server.listen(PORT, '127.0.0.1', () => {
  console.log('====================================')
  console.log('  Сервер запущен!')
  console.log('  Откройте в браузере:')
  console.log('  http://localhost:' + PORT)
  console.log('====================================')
  console.log('  Чтобы остановить — закройте окно')

  // Автоматически открыть браузер
  const { exec } = require('child_process')
  exec('start http://localhost:' + PORT)
})
