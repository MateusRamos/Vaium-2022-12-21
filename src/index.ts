import express, { Router } from "express";
import { vaiumController} from "./controller";

const app = express()

const route = Router()

route.get("/vaium/numero", vaiumController);

app.use(express.json());
app.use(route);

app.listen(3000, () => {
    console.log("porta 3000");
})