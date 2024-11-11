import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe('sk_test_51KXDgIFJaDznJQercj3EMJwgpMRgCIR92QdpAaztTNbWsBDLNXcRsSN6ODwr1VgTNAsVIqDQI2ktKUp8ItkiE35N00PfmubacU', {
  apiVersion: "2023-10-16",
});

export async function POST(req: Request) {
  try {
    const { formData } = await req.json();
    const origin = req.headers.get("origin") || "http://localhost:3000";
    const tempId = Math.random().toString(36).substring(7);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: 'price_1QK3E8FJaDznJQerQagSgZEw', // Replace with your actual Stripe price ID
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/results?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/questionnaire`,
      allow_promotion_codes: true,
      billing_address_collection: "auto",
    });

    return NextResponse.json({ 
      sessionId: session.id,
      url: session.url 
    });
  } catch (err) {
    console.error("Error creating checkout session:", err);
    return NextResponse.json(
      { error: "Error creating checkout session" },
      { status: 500 }
    );
  }
}