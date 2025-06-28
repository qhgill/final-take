export async function generateMovieSynopsis({
  movieName,
  budget,
  sustainStatus,
  profit,
  genre,
}: {
  movieName: string;
  budget: number;
  sustainStatus: number;
  profit: number;
  genre: string;
}) {
  const prompt = `Write a detailed, concise movie synopsis for a ${genre} film called "${movieName}" that was created with ${budget}. It has a sustainability score of ${sustainStatus}. The lower the score, the less sustainable it is. It also gained ${profit} in profit at the box office. Word limit 100.`;

  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistralai/mixtral-8x7b-instruct",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.8,
      }),
    },
  );

  const data = await response.json();

  return data?.choices?.[0]?.message?.content || "Something went wrong.";
}
