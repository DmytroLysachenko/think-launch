import React from "react";
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) => {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 50,
      author: {
        _id: 1,
        name: "John Doe",
        image:
          "https://plus.unsplash.com/premium_photo-1681562502996-bcfad45d4def?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      _id: 1,
      description: "Description",
      image:
        "https://plus.unsplash.com/premium_photo-1681562502996-bcfad45d4def?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "We robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competition.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : `All Startups`}
        </p>
        <ul className="mt-7 card_grid">
          {posts.length > 0
            ? posts.map((post: StartupCardType, index: number) => (
                <StartupCard
                  key={post._id}
                  post={post}
                />
              ))
            : null}
        </ul>
      </section>
    </>
  );
};

export default Home;
