import { Image } from 'react-datocms'
import { getAllArticlesWithSlug, getArticle } from 'lib/dato'
import { markdownToHtml } from 'lib'
import articleStyles from 'styles/article.module.css'

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
