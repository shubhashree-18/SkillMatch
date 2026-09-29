const express = require("express");
const cors = require("cors");
const driver = require("./config/database");
const recommendationRoutes = require("./routes/recommendationRoutes");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// ==========================================
// RECOMMENDATION ROUTES
// ==========================================
app.use("/api/recommendations", recommendationRoutes);

// ==========================================
// HOME ROUTE
// ==========================================
app.get("/", (req, res) => {
  res.json({
    message: "SkillMatch API is running"
  });
});

// ==========================================
// TEST DATABASE CONNECTION
// ==========================================
app.get("/api/test-db", async (req, res) => {
  const session = driver.session();

  try {
    const result = await session.run(
      "RETURN 'CognoDB Connected Successfully!' AS message"
    );

    res.json({
      success: true,
      message: result.records[0].get("message")
    });

  } catch (error) {
    console.error(
      "Database connection error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Unable to connect to CognoDB"
    });

  } finally {
    await session.close();
  }
});

// ==========================================
// START SERVER
// ==========================================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `SkillMatch backend running on port ${PORT}`
  );
});