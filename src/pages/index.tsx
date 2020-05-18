import { Image } from 'react-datocms'
import Link from 'next/link'
import Date from 'components/date'
import { getAllArticlesForHome } from 'lib/dato'

export default function Home({ allArticles }: { allArticles: Article[] }) {
  return (
    <div>
      <h2 className="text-xl uppercase opacity-75 font-semibold font-sans my-0 py-8">
        Articles
      </h2>
      <div>
        {allArticles.map((a) => (
          <div key={a.id} className="mb-6 card flex flex-col md:flex-row">
            <div
              className="img-block p-6 flex items-center"
              style={{ flex: 1 }}
            >
              <Image
                className="-mx-6 dim -mt-6 rounded-t md:rounded-none md:m-0"
                data={{
                  ...a.mainImage.responsiveImage,
                }}
              />
            </div>
            <div className="flex flex-col text-block p-6" style={{ flex: 2 }}>
              <h2 className="py-4 text-3xl font-semibold flex flex-col md:flex-row flex-wrap md:justify-between md:items-baseline">
                <Link href="/articles/[slug]" as={`/articles/${a.slug}`}>
                  <a className="underline pr-4">{a.title}</a>
                </Link>
                <small className="pr-4 text-xs opacity-75 text-base">
                  <Date dateString={a.date} />
                </small>
              </h2>
              <p className="py-4">{a.excerpt}</p>
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
