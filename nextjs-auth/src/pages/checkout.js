"use client";
import Image from "next/image";
import { checkout } from "@/checkout";

export default function Home() {
  return (
    <main>
      <div>
        <button
          onClick={() => {
            checkout({
              lineItems: [
                { price: "price_1PPWwJP3KDscrK3og1uYzWOW", quantity: 1 },
              ],
            });
          }}
        >
          Buy This image
        </button>
      </div>
    </main>
  );
}
