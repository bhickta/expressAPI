import app, {port} from "./server"
import * as dontenv from 'dotenv'
dontenv.config()

app.listen(port, () => {
    console.log(`listening on ${port}`)
  })