const express = require('express');
const cors = require('cors');
const swaggerUi=require('swagger-ui-express');
const swaggerJsdoc=require('swagger-jsdoc');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Product API",
            /*version: "1.0.0",*/
            /*description: "A simple Express API for managing products"*/
        },
        /*servers: [
            {
                url: "http://localhost:8080"
            }
        ]*/
    },
    apis: ["./server.js"]
};
const SwaggerSpecs=swaggerJsdoc(options);
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(SwaggerSpecs));


const products = [
        {id:1,name:"Monitor",price:10.99},
        {id:2,name:"Keyboard",price:19.99},
        {id:3,name:"Mouse",price:5.99}
    ]


/**
 * @swagger
 * /:
 *   get:
 *     summary: Returns Test route status
 *     responses:
 *       200:
 *         description: Test route successful
 * 
 */    
app.get('/', (req, res) => {
  res.send('API is working!');
});

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     responses:
 *       200:
 *        description: A list of products
 *         
 */
app.get("/products",(req,res)=>{
    res.json(products);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
