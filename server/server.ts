import express from "express";
import cors from 'cors';
import taskRoute from './routes/taskRoute';
import tasksRoute from './routes/tasksRoute';
import tagRoute from './routes/tagRoute';
import tagsRoute from './routes/tagsRoute';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json()); 

app.get("/", (req, res) => {
    console.log("Backend running at root route");
    return res.json({msg: "Backend running at root route"});
})

app.use("/task", taskRoute);

app.use("/tasks", tasksRoute);

app.use("/tag", tagRoute);

app.use("/tags", tagsRoute);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})