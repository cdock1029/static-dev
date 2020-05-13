import 'isomorphic-unfetch'

const API_URL = 'https://graphql.datocms.com'
const API_KEY = process.env.DATO_API_KEY

const responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    bgColor
    base64
  }
`

async function fetchAPI(
  query,
  { variables, preview }: { variables?: any; preview?: any } = {}
) {
  const res = await fetch(API_URL + (preview ? '/preview' : ''), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getAllArticlesForHome(preview): Promise<Article[]> {
  const data = await fetchAPI(
    `
    {
      allArticles(orderBy: date_DESC, first: 20) {
        id
        title
        slug
        content
        excerpt
        date
        mainImage {
          responsiveImage(imgixParams: {fit: crop, w: 2000, h: 1000, auto: format }) {
            ...responsiveImageFragment
          }
        }
      }
    }
    ${responsiveImageFragment}
  `,
    { preview }
  )
  return data?.allArticles
}

export async function getArticle(
  slug: string,
  preview
): Promise<Article | null> {
  const data = await fetchAPI(
    `
    query ArticleBySlug($slug: String) {
      article(filter: {slug: {eq: $slug}}) {
        id
        title
        slug
        content
        date
        mainImage {
          responsiveImage(imgixParams: {fit: crop, w: 2000, h: 1000, auto: format }) {
            ...responsiveImageFragment
          }
        }
      }
    }
    ${responsiveImageFragment}
  `,
    { preview, variables: { slug } }
  )
  return data?.article
}

export async function getAllArticlesWithSlug() {
  const data = await fetchAPI(`
  {
    allArticles(first: 20) {
      slug
    }
  }
`)
  return data?.allArticles
}
