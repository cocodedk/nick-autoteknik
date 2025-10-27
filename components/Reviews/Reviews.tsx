import React from "react";
import { ReviewButton } from "./ReviewButton";

interface ReviewsProps {
  googleUrl: string;
  facebookUrl: string;
}

export function Reviews({ googleUrl, facebookUrl }: ReviewsProps) {
  return (
    <section id="anmeldelser" className="py-8 md:py-12 bg-brand-red">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hvad siger vores kunder?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto font-medium">
            Vi er stolte af vores gode omdømme og de positive anmeldelser fra tilfredse kunder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ReviewButton href={googleUrl} platform="google">
              ⭐ Læs Google-anmeldelser
            </ReviewButton>
            <ReviewButton href={facebookUrl} platform="facebook">
              👍 Se Facebook-anmeldelser
            </ReviewButton>
          </div>
        </div>
      </div>
    </section>
  );
}
