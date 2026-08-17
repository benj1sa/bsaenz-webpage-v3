import { describe, expect, it } from "vitest";
import { getAllPosts, getLatestPost, posts } from "./posts";

describe("post ordering", () => {
  it("returns posts newest first regardless of their declaration order", () => {
    expect(getAllPosts().map((post) => post.slug)).toEqual([
      "maybe-software-isnt-the-real-jevons",
      "the-difference-between-moving-and-becoming",
      "writing-to-reclaim-independent-thought",
    ]);
  });

  it("selects the newest post for featured placements", () => {
    expect(getLatestPost()).toMatchObject({
      slug: "maybe-software-isnt-the-real-jevons",
      date: "August 17, 2026",
    });
  });

  it("does not mutate the source post order while sorting", () => {
    getAllPosts();

    expect(posts.map((post) => post.slug)).toEqual([
      "the-difference-between-moving-and-becoming",
      "writing-to-reclaim-independent-thought",
      "maybe-software-isnt-the-real-jevons",
    ]);
  });
});
