import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";
import { formatDate, getPost, posts } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://www.stait.ai/insights/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.excerpt, publishedTime: post.date },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-64 -top-64 h-[820px] w-[820px] rounded-full"
          style={{ background: `radial-gradient(circle, ${post.color}44, transparent 62%)` }}
        />
        <Container className="relative max-w-4xl pb-20 pt-14 sm:pt-20">
          <Link href="/insights" className="inline-flex items-center gap-2 text-sm text-haze hover:text-white">
            <ArrowLeft className="h-4 w-4" /> All insights
          </Link>
          <Reveal className="mt-10">
            <div className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: post.color }}>
              {post.tag}
            </div>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-6xl">{post.title}</h1>
            <div className="mt-6 text-haze">
              Matt Harris · {formatDate(post.date)} · {post.readMinutes} min read
            </div>
          </Reveal>
        </Container>
      </section>

      <article className="bg-white py-16 sm:py-24">
        <Container className="max-w-3xl">
          <p className="text-xl leading-relaxed text-ink sm:text-2xl">{post.excerpt}</p>
          <div className="mt-10 space-y-6 text-lg leading-[1.75] text-muted">
            {post.body.map((b, i) => {
              if (b.type === "h2")
                return (
                  <h2 key={i} className="pt-6 font-display text-2xl font-semibold text-ink sm:text-3xl">
                    {b.text}
                  </h2>
                );
              if (b.type === "ul")
                return (
                  <ul key={i} className="space-y-3">
                    {b.items.map((it) => (
                      <li key={it} className="flex gap-4">
                        <span className="mt-3 h-2 w-2 shrink-0 rounded-full" style={{ background: post.color }} />
                        {it}
                      </li>
                    ))}
                  </ul>
                );
              if (b.type === "callout")
                return (
                  <div key={i} className="rounded-3xl bg-paper p-8 text-ink">
                    <p>{b.text}</p>
                    <Button href="/services/ai-strategy-blueprint" className="mt-5">
                      See the Blueprint
                    </Button>
                  </div>
                );
              return <p key={i}>{b.text}</p>;
            })}
          </div>
        </Container>
      </article>

      <FinalCTA />
    </>
  );
}
