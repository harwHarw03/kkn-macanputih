import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        query as string
      )}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error searching for location:", error);
    res.status(500).json({ error: "Error searching for location" });
  }
}
