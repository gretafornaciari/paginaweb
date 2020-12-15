const express = require("express")
const app = new express()
 
const renderMenu = (currentPage) => {
  const selectedStyle = "color: pink;"
 
  return `
    <ul>
      <li><a href="/" style="${currentPage === "home" ? selectedStyle : ""}">Home</a></li>
      <li><a href="/lista" style="${currentPage === "lista" ? selectedStyle : ""}">Lista della spesa</a></li>
      <li><a href="/prodotti" style="${currentPage === "prodotti" ? selectedStyle : ""}">Prodotti per la cura personale</a></li>
    </ul>
  `
}
 
const renderHtml = (currentPage, body) => {
  return ` 
  <!DOCTYPE html>
  <html>
    <head>
      <title>La mia pagina web</title>
    </head>
    <body>
      ${renderMenu(currentPage)}
      ${body}
    </body>
  </html>
`
}
 
app.get("/", (req, res) => {
  res.send(renderHtml("home", "<h1>Adesso siete nella home</h1>"))
})
 
const lista = [
  { 
    categoria: "Verdura",
    prodotto1: "pomodori",
    prodotto2: "insalata",
    prodotto3: "radicchio"
  },
  { 
    categoria: "Frutta",
    prodotto1: "mele",
    prodotto2: "pere",
    prodotto3: "fragole"
  },
  { 
    categoria: "Latticini",
    prodotto1: "latte",
    prodotto2: "yogurt",
    prodotto3: "gelato"
  }
]
 
const prodotti = [
    { 
      cat: "Capelli",
      p1: "shampoo",
      p2: "balsamo",
      p3: "maschera per capelli"
    },
    { 
      cat: "Corpo",
      p1: "bagnoschiuma",
      p2: "crema per il corpo",
      p3: "deodorante"
    }
  ]



app.get("/lista", (req, res) => {
  res.send(renderHtml("lista", `
  <h1>Questa è la mia lista della spesa:</h1>
  <ul>
    ${lista.map((e => {
      return `
      <li>
        <div>
          <h3>${e.categoria}</h3>
          <p>${e.prodotto1}</p>
          <p>${e.prodotto2}</p>
          <p>${e.prodotto3}</p>

        </div>
      </li>
      `
    })).join(" ")}
  </ul>
  `))
})

app.get("/prodotti", (req, res) => {
    res.send(renderHtml("prodotti", `
    <h1>Questa è la mia lista dei prodotti per la cura personale:</h1>
    <ul>
      ${prodotti.map((e => {
        return `
        <li>
          <div>
            <h3>${e.cat}</h3>
            <p>${e.p1}</p>
            <p>${e.p2}</p>
            <p>${e.p3}</p>
  
          </div>
        </li>
        `
      })).join(" ")}
    </ul>
    `))
  })
 
app.listen(3000, () => console.log("server listening on port 3000"))