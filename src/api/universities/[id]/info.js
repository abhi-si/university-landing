export default function handler(req, res) {
  const data = {
    "univ-a": {
      id: "univ-a",
      name: "Sunrise University",
      overview:
        "A reputed private university known for management & commerce programs.",
      facilities: ["Library", "Labs", "Hostel"],
    },
    "univ-b": {
      id: "univ-b",
      name: "Stellar Institute",
      overview:
        "A modern institute with strong engineering programs and industry tie-ups.",
      facilities: ["Hostel", "Sports Complex", "Auditorium"],
    },
  };

  const id = req.query.id;
  const u = data[id];

  if (!u) return res.status(404).json({ error: "Not found" });

  return res.status(200).json(u);
}
