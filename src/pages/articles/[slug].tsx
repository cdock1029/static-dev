import articleStyles from 'styles/article.module.css'
import { Image } from 'react-datocms'
import { getAllArticlesWithSlug, getArticle } from 'lib/dato'
import { markdownToHtml } from 'lib'
import Date from 'components/date'

export default function Article({ article }: { article: Article }) {
  return article ? (
    <div>
      <div className="py-8">
        <Image data={article.mainImage.responsiveImage} />
      </div>
      <h1 className="py-8 my-0 text-4xl flex flex-col md:flex-row flex-wrap md:justify-between md:items-baseline">
        <div className="pr-4">{article.title}</div>
        <small className="pr-4 text-xs opacity-75 text-base">
          <Date dateString={article.date} />
        </small>
      </h1>
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
