// --- EXISTING FUNCTION ---
export async function getFees(univId) {
  const API_BASE = import.meta.env.VITE_API_BASE || window.location.origin;
  const url = `${API_BASE}/api/universities/${univId}/fees`;

  console.log("👉 Fetching fees from:", url);

  try {
    const res = await fetch(url);
    console.log("📌 Status:", res.status);

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`HTTP ${res.status}: ${text}`);
    }

    return await res.json();
  } catch (err) {
    console.error("❌ Fee fetch error:", err);
    throw err;
  }
}

// --- NEW FUNCTION: SUBMIT LEAD TO PIPEDREAM ---
export async function submitLead(payload) {
  const endpoint = import.meta.env.VITE_PIPEDREAM_URL;

  if (!endpoint) {
    throw new Error("❌ Missing VITE_PIPEDREAM_URL in .env");
  }

  console.log("👉 Submitting lead to:", endpoint);

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseText = await res.text(); // Pipedream often returns no JSON

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${responseText}`);
    }

    return responseText;
  } catch (err) {
    console.error("❌ Lead submission error:", err);
    throw err;
  }
}
