import { taskRouter } from "./routes/task.routes.ts";
import express from "express";

const app = express();
const port = 3000;
app.use(express.json())
app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.use("/tasks", taskRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
