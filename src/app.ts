import express from "express" ;

const app = express()
app.use(express.json());
// Routers 
import AuthRouter from "./routes/CompanyAuth/auth.route";
import OrderRouter from "./routes/Orders/order.routes";
import RiderRouter from "./routes/Riders/rider.routes";

app.use('/companyauth/',AuthRouter)
app.use('/order/',OrderRouter)
app.use('/rider/',RiderRouter)

export default app;