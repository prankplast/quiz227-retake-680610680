import express, { type Request, type Response } from "express";
import itemsRoutes from "./routes/itemsRoutes.ts";
import usersRoutes from "./routes/usersRoutes.ts";

// import middlewares
import morgan from "morgan";

const app = express();
const port = 3000;

// body parser middleware
app.use(express.json());

// logger middleware
app.use(morgan("dev"));
// app.use(morgan("combined"));

// Endpoints
app.get("/", (req: Request, res: Response) => {
  res.send("Quiz #2 - API service");
});

app.use("/api/v680/basket", itemsRoutes);
app.use("/api/v680/auth", usersRoutes);

app.get("/student", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Student Information",
    data: {
      studentId: "680610680",
      firstName: "Tananop",
      lastName: "Panyamoonwongsa",
      section: "001"
    }
  });
});

app.get("/me", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Quiz #2 - API service",
  });
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});

// Export app for vercel deployment
export default app;
