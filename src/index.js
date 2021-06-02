import React from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import AdminRoute from './components/AdminRoute'



const container = document.getElementById('root')

// ReactDom.render(__QUE, __DÓNDE)
ReactDom.render(<AdminRoute/>, container)