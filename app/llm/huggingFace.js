async function callHuggingFace(prompt) {
  const response = await fetch(
    "https://router.huggingface.co/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "meta-llama/Meta-Llama-3-70B-Instruct:novita",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        max_tokens: 500,
        temperature: 0.2,
      }),
    }
  );

  if (!response.ok) {
    const errText = await response.text();
    console.error("HF API Error:", errText);
    return null;
  }

  const data = await response.json();
  const content = data?.choices?.[0]?.message?.content;

  if (content && content.trim() !== "") {
    return content.trim();
  }

  console.log("⚠️ Raw response:", JSON.stringify(data, null, 2));
  return null;
}

module.exports = { callHuggingFace };