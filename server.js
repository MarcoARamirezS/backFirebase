import express from 'express'
import bcrypt from 'bcrypt'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

//Configuración con Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAEVJbtbi1Q5cB9ne7J-Aitnxis9_EhrIE",
    authDomain: "demofinal-635d9.firebaseapp.com",
    projectId: "demofinal-635d9",
    storageBucket: "demofinal-635d9.appspot.com",
    messagingSenderId: "649192885994",
    appId: "1:649192885994:web:a1ca002c0524a256515193"
}
  
// Initialize Firebase
const firebase = initializeApp(firebaseConfig)
const db = getFirestore()

// Inicializar el servidor
const app = express()

// Middleware
app.use(express.static("public"))
app.use(express.json())

// Rutas a trabajar
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: "public"})
})

// Arrancamos el servidor
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Arrancando servidor: ${PORT}`)
})

