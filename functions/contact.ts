export async function onRequestPost({ request }) {
  const data = await request.json();

  const message = `
Ime: ${data.name}
Email: ${data.email}
Telefon: ${data.phone}
Sporočilo: ${data.message}
  `;

  await fetch("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: "info@mediaservis.si" }] }],
      from: { email: "no-reply@mediaservis.si" },
      subject: "Novo sporočilo s spletne strani",
      content: [{ type: "text/plain", value: message }],
    }),
  });

  return new Response(JSON.stringify({ ok: true }), {
    headers: { "content-type": "application/json" },
  });
}
