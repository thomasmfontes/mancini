import React from "react";
import { generateRestaurantSchema } from "../../utils";

export function JsonLd() {
  const schema = generateRestaurantSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
