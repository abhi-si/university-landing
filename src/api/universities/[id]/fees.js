export default function handler(req, res) {
  const data = {
    "univ-a": {
      id: "univ-a",
      courses: [
        {
          code: "BBA",
          name: "BBA",
          duration: "3 years",
          feeRange: "₹1,00,000 - ₹2,00,000",
        },
        {
          code: "MBA",
          name: "MBA",
          duration: "2 years",
          feeRange: "₹2,50,000 - ₹4,00,000",
        },
      ],
    },
    "univ-b": {
      id: "univ-b",
      courses: [
        {
          code: "BTech",
          name: "B.Tech",
          duration: "4 years",
          feeRange: "₹1,50,000 - ₹3,00,000",
        },
        {
          code: "MTech",
          name: "M.Tech",
          duration: "2 years",
          feeRange: "₹2,00,000 - ₹3,50,000",
        },
      ],
    },
  };

  const id = req.query.id;
  const u = data[id];

  if (!u) return res.status(404).json({ error: "Not found" });

  return res.status(200).json({
    universityId: u.id,
    courses: u.courses,
  });
}
