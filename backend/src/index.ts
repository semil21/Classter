import connectDB from "./database/database";

import Express from "express";
import bodyParser from "body-parser";

import dotenv from "dotenv";
dotenv.config();

const cors = require("cors");

const app = Express();
connectDB();

// app.use(Express.json());
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(req, "req");
  next();
});

import teacherRouter from "./routes/teacher.route";
import studentRouter from "./routes/student.route";
import parentRouter from "./routes/parent.route";
import classRouter from "./routes/class.route";
import notFound from "./middleware/notFound";
app.use("/teacher", teacherRouter);
app.use("/student", studentRouter);
app.use("/parent", parentRouter);
app.use("/class", classRouter);

// app.use(notFound);

app.listen(process.env.PORT_NUMBER, () => {
  console.log("server running");
});
