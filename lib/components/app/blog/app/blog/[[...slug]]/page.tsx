import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import { getArticleBySlug, getAllArticles } from '@/lib/articles';
import { SITE_URL } from '@/lib/constants';
import CTAButton from '@/components/CTAButton';

type Props = { params: { slug: string[] } };

export async function generateStaticParams() {
  return getAllArticles().map(a => ({ slug: [a.slug] }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug?.[0];
  const article = getArticleBySlug(slug);
  if (!article) return {};
  const url = `${SITE_URL}/blog/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: url },
    openGraph: { title: article.title, description: article.description, url, type: 'article', images: [{ url: article.featuredImage.src, width: 1200, height: 630, alt: article.featuredImage.alt }] },
    twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [article.featuredImage.src] }
  };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug?.[0]);
  if (!article) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: { '@type': 'SoftwareApplication', name: 'ToolSuite VIP' },
    author: { '@type': 'Organization', name: 'Digital Solutions' },
    datePublished: article.date,
    reviewRating: { '@type': 'Rating', ratingValue: article.rating, bestRating: 5 },
    reviewBody: article.verdict
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-4xl px-4 py-12">
        <header className="mb-12">
          <p className="text-brand-600 dark:text-brand-400 font-semibold">{article.category}</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">{article.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
            <span>{article.author}</span><span>•</span>
            <time dateTime={article.date}>{new Date(article.date).toLocaleDateString('en-US', {year:'numeric', month:'long', day:'numeric'})}</time>
            <span>•</span><span>{article.readingTime} min read</span><span>•</span>
            <span className="font-semibold">★ {article.rating}/5</span>
          </div>
          <Image src={article.featuredImage.src} alt={article.featuredImage.alt} width={1200} height={630} priority className="mt-8 rounded-xl w-full" />
        </header>

        <div className="prose prose-slate dark:prose-invert prose-lg max-w-none">
          <p className="lead text-xl">{article.intro}</p>
          <div className="not-prose my-8"><CTAButton href={article.ctaLink}>Get ToolSuite VIP Deal</CTAButton></div>
          
          <h2 id="features">Key Features</h2>
          <div className="not-prose grid gap-8 md:grid-cols-2 my-8">
            {article.features.map((f) => (
              <div key={f.title} className="rounded-lg border border-slate-200 dark:border-slate-800 p-6">
                {f.img && <Image src={f.img} alt={f.imgAlt!} width={600} height={400} className="rounded-lg mb-4 w-full h-auto" loading="lazy" />}
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="benefits">Benefits</h2>
          <ul>{article.benefits.map((b) => <li key={b}>{b}</li>)}</ul>

          <h2 id="pricing">Pricing Breakdown</h2>
          <div className="not-prose grid gap-6 md:grid-cols-2 my-8">
            {article.pricing.map((p) => (
              <div key={p.plan} className="rounded-lg border-2 border-brand-600 p-6">
                <h3 className="text-xl font-bold">{p.plan}</h3>
                <p className="mt-2 text-3xl font-bold">{p.price}</p>
                <p className="text-sm text-slate-500">{p.billed}</p>
                <ul className="mt-4 space-y-2">{p.features.map((f) => <li key={f}>✓ {f}</li>)}</ul>
                <div className="mt-6"><CTAButton href={article.ctaLink} variant="outline">Choose {p.plan}</CTAButton></div>
              </div>
            ))}
          </div>

          <h2 id="pros-cons">Pros & Cons</h2>
          <div className="not-prose grid gap-6 md:grid-cols-2 my-8">
            <div className="rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 p-6">
              <h3 className="text-lg font-bold text-green-700 dark:text-green-400 mb-4">✓ Pros</h3>
              <ul className="space-y-2">{article.pros.map((pro) => <li key={pro} className="flex gap-2"><span className="text-green-600">✓</span>{pro}</li>)}</ul>
            </div>
            <div className="rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 p-6">
              <h3 className="text-lg font-bold text-red-700 dark:text-red-400 mb-4">✗ Cons</h3>
              <ul className="space-y-2">{article.cons.map((con) => <li key={con} className="flex gap-2"><span className="text-red-600">✗</span>{con}</li>)}</ul>
            </div>
          </div>

          <h2 id="who-for">Who Should Buy It?</h2>
          <ul>{article.whoFor.map((w) => <li key={w}>{w}</li>)}</ul>

          <h2 id="faq">FAQ</h2>
          {article.faq.map((item, i) => <div key={i} className="mb-4"><strong>{item.q}</strong><p>{item.a}</p></div>)}

          <h2 id="verdict">Final Verdict</h2>
          <p>{article.verdict}</p>
          <div className="not-prose my-8"><CTAButton href={article.ctaLink}>Try ToolSuite VIP Risk-Free</CTAButton></div>
        </div>
      </article>
    </>
  );
}
