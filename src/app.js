import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import productRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'
import {createRoles} from './libs/initialSetup'
import userRoutes from './routes/users.routes'

const app = express()
createRoles()

app.use(express.json())
app.set('pkg', pkg)//para ponerle un nombre a una variable
app.use(morgan('dev'))
app.get('/',(req,res)=>{
    res.json({
        author: app.get('pkg').author
    })
})



app.use('/api/products',productRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/users',userRoutes)





export default app;