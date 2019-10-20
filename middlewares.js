//bai10
const App = () => {
    let req = {body: []}
    let res = {type: 'response'}

    let pipeline = []

    const use = middleware => pipeline.push(middleware)

    
    const runMiddlewares = () => {
            if (pipeline.length !== 0) {
                const md = pipeline.shift()
                md(req, res, () => runMiddlewares()) 
            }
    }

    function get() {
        runMiddlewares()
    }

    return {use, get}
}

const app = App()

app.use((req, res, next) => {
    
    console.log('Middleware 1')
    next()
})

app.use((req, res, next) => {
    console.log('Middleware 2 ')
    next()
})


app.use((req, res, next) => {
    console.log('Middleware 3')
    next()
})

app.use((req, res, next) => {
    console.log('Middleware 4')
    next()
})

app.use((req, res, next) => {
    console.log('Middleware 5')
    
})

app.use((req, res, next) => {
    console.log('Middleware 6')
    
})

app.get()



