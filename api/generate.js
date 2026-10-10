export default async function handler(req, res) {
  const prompt = req.query.prompt || req.body?.prompt;
  if (!prompt) return res.status(400).json({ error: "Prompt likho" });
  const url = `https://image.pollinations.ai/p/${encodeURIComponent(prompt)}`;
  return res.status(200).json({ imageUrl: url });
}
