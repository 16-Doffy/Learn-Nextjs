// app/api/forward-webhook/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const linkAPI = "https://webhook.site/7b11e687-988b-4a98-8b4a-4c85500c1897";
    const res = await fetch(linkAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("❌ Webhook failed with status", res.status, text);
      return NextResponse.json(
        { success: false, error: text },
        { status: res.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Error forwarding to webhook.site:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
