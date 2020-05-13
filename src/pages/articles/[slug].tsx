import articleStyles from 'styles/article.module.css'
import { Image } from 'react-datocms'
import { getAllArticlesWithSlug, getArticle } from 'lib/dato'
import { markdownToHtml } from 'lib'

export default function Article({ article }: { article: Article }) {
  return article ? (
    <div>
      <div className="py-8">
        <Image data={article.mainImage.responsiveImage} />
      </div>
      <h1 className="py-8 my-0 text-4xl">{article.title}</h1>
      <div
        className={articleStyles.markdown}
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  ) : null
}

export async function getStaticProps({ params, preview = null }) {
  const article = await getArticle(params.slug, preview)
  const content = await markdownToHtml(article?.content || '')

  return {
    props: {
      preview,
      article: {
        ...article,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const allArticles = await getAllArticlesWithSlug()
  return {
    paths: allArticles?.map((article) => `/articles/${article.slug}`) || [],
    fallback: true,
  }
}

export function reportWebVitals({ id, name, label, value }) {
  ;(window as any).ga('send', 'event', {
    eventCategory: `Next.js ${label} metric`,
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  })
}
