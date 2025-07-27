export default async function handler(req, res) {
  const body = await req.json();

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer sk-yourrealkeyhere", // <--- paste your full key HERE ONLY
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: body.question }]
    })
  });

  const data = await response.json();
  res.status(200).json({ reply: data.choices[0].message.content });
}