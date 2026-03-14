import { describe, expect, it } from "vitest";
import { buildMetadata } from "@/lib/metadata";

describe("metadata builder", () => {
  it("returns the canonical URL for the provided path", () => {
    const metadata = buildMetadata({
      title: "Test title",
      description: "Test description",
      path: "/",
    });

    expect(metadata.alternates?.canonical?.toString()).toContain("innovaherb-home-page.vercel.app/");
  });
});
