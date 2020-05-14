import { Image } from 'react-datocms'
import Link from 'next/link'
import Date from 'components/date'
import { getAllArticlesForHome } from 'lib/dato'

export default function Home({ allArticles }: { allArticles: Article[] }) {
  return (
    <div>
      <h1 className="text-4xl my-0 py-8">Articles</h1>
      <div>
        {allArticles.map((a) => (
          <div key={a.id} className="mb-4 card flex flex-col md:flex-row">
            <div
              className="img-block p-4 flex items-center"
              style={{ flex: 1 }}
            >
              <Image
                data={{
                  ...a.mainImage.responsiveImage,
                }}
              />
            </div>
            <div className="flex flex-col text-block p-4" style={{ flex: 2 }}>
              <h2 className="py-4 text-3xl font-semibold flex justify-between items-baseline">
                <Link href="/articles/[slug]" as={`/articles/${a.slug}`}>
                  <a className="underline">{a.title}</a>
                </Link>
                <small className="px-4 text-xs opacity-75 text-base">
                  <Date dateString={a.date} />
                </small>
              </h2>
              <p className="py-4 font-serif">{a.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps({ preview }) {
  const allArticles = (await getAllArticlesForHome(preview)) || []
  return {
    props: { allArticles },
  }
}
