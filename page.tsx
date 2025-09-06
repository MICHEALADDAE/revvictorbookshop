import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <section className="text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          Welcome to the Collection
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Discover inspiring books and resources curated for the faithful.
        </p>
      </section>
    </main>
  );
}
