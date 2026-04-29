const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

const connectDB = require("./config/db");
connectDB();

const app = express();

app.use(express.json());
app.use(cors({
  origin: "https://mamababybudd.netlify.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));


app.options('*', cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("MamaBabyBud API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/mother", require("./routes/motherRoutes"));

app.use("/api/baby", require("./routes/babyRoutes"));