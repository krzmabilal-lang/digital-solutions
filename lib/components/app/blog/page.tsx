import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { getAllArticles } from '@/lib/articles';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Honest SaaS reviews, marketing guides, and growth tips for founders and agencies.',
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogPage() {
  const articles = getAllArticles();
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-12">In-depth reviews and growth strategies</p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map(a => (
          <Link key={a.slug} href={`/blog/${a.slug}`} className="group">
            <Image src={a.featuredImage.src} alt={a.featuredImage.alt} width={400} height={250} className="rounded-lg group-hover:opacity-80 transition w-full h-auto" loading="lazy" />
            <p className="mt-4 text-sm text-brand-600 dark:text-brand-400 font-semibold">{a.category}</p>
            <h2 className="mt-1 text-xl font-semibold group-hover:text-brand-600">{a.title}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">{a.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
