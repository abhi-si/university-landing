import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Mock data
const univFees = {
  "univ-a": {
    universityId: "univ-a",
    courses: [
      {
        code: "B.Tech",
        name: "B.Tech",
        feeRange: "₹2,40,000 - ₹3,00,000",
        duration: "4 years",
      },
      {
        code: "BCA",
        name: "BCA",
        feeRange: "₹1,00,000 - ₹1,30,000",
        duration: "2 years",
      },
      {
        code: "MCA",
        name: "MCA",
        feeRange: "₹2,00,000 - ₹3,30,000",
        duration: "2 years",
      },
    ],
  },

  "univ-b": {
    universityId: "univ-b",
    courses: [
      {
        code: "B.Tech",
        name: "B.Tech",
        feeRange: "₹1,40,000 - ₹1,80,000",
        duration: "4 years",
      },
      {
        code: "BCA",
        name: "BCA",
        feeRange: "₹1,00,000 - ₹1,70,000",
        duration: "2 years",
      },
      {
        code: "MCA",
        name: "MCA",
        feeRange: "₹1,00,000 - ₹1,30,000",
        duration: "2 years",
      },
    ],
  },
};

// Endpoint
app.get("/api/universities/:id/fees", (req, res) => {
  const id = req.params.id;
  const data = univFees[id];

  if (!data) {
    return res.status(404).json({ error: "University not found" });
  }

  res.json(data);
});

// Start server
app.listen(4000, () => {
  console.log("Mock API running at http://localhost:4000");
});
