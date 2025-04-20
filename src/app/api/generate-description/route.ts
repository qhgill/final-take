export async function POST(req: Request) {
  const { movieName, budget, sustainStatus, profit, genre } = await req.json();

  const prompt = `Write a detailed, concise movie synopsis for a ${genre} film called "${movieName}" that was created with ${budget}. It has a sustainability score of ${sustainStatus} and gained ${profit} in profit at the box office. Word limit 100.`;

  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`, // Set in .env
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo", // or "openai/gpt-4", or "anthropic/claude-3-opus"
        messages: [{ role: "user", content: prompt }],
        temperature: 0.8,
      }),
    },
  );

  const data = await response.json();

  const description =
    data?.choices?.[0]?.message?.content || "Something went wrong.";

  return Response.json({ description });
}
