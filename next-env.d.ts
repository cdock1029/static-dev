/// <reference types="next" />
/// <reference types="next/types/global" />

type Article = {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  date: string
  mainImage: {
    responsiveImage: {
      srcSet: string //"https://www.datocms-assets.com/28024/1589332731-screenshot-from-2020-05-12-21-18-55.png?dpr=0.25&fit=crop&fm=jpg&h=1000&w=2000 500w,https://www.datocms-assets.com/28024/1589332731-screenshot-from-2020-05-12-21-18-55.png?dpr=0.5&fit=crop&fm=jpg&h=1000&w=2000 1000w,https://www.datocms-assets.com/28024/1589332731-screenshot-from-2020-05-12-21-18-55.png?dpr=0.75&fit=crop&fm=jpg&h=1000&w=2000 1500w,https://www.datocms-assets.com/28024/1589332731-screenshot-from-2020-05-12-21-18-55.png?fit=crop&fm=jpg&h=1000&w=2000 2000w,https://www.datocms-assets.com/28024/1589332731-screenshot-from-2020-05-12-21-18-55.png?dpr=1.5&fit=crop&fm=jpg&h=1000&w=2000 3000w",
      webpSrcSet: string // "https://www.datocms-assets.com/28024/1589332731-screenshot-from-2020-05-12-21-18-55.png?dpr=0.25&fit=crop&fm=webp&h=1000&w=2000 500w,https://www.datocms-assets.com/28024/1589332731-screenshot-from-2020-05-12-21-18-55.png?dpr=0.5&fit=crop&fm=webp&h=1000&w=2000 1000w,https://www.datocms-assets.com/28024/1589332731-screenshot-from-2020-05-12-21-18-55.png?dpr=0.75&fit=crop&fm=webp&h=1000&w=2000 1500w,https://www.datocms-assets.com/28024/1589332731-screenshot-from-2020-05-12-21-18-55.png?fit=crop&fm=webp&h=1000&w=2000 2000w,https://www.datocms-assets.com/28024/1589332731-screenshot-from-2020-05-12-21-18-55.png?dpr=1.5&fit=crop&fm=webp&h=1000&w=2000 3000w",
      sizes: string //"(max-width: 2000px) 100vw, 2000px",
      src: string //"https://www.datocms-assets.com/28024/1589332731-screenshot-from-2020-05-12-21-18-55.png?fit=crop&fm=jpg&h=1000&w=2000",
      width: number // 2000,
      height: number //1000,
      aspectRatio: number //2,
      alt: string //"dashboard",
      title: string //"DatoCMS Dashboard",
      bgColor: string //"#ce4f37",
      base64: string //"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgTBgoTCAgXEBMQDhgODg0NDhUNDQ8YHhMZGBYfIhUaHysjGh0oHSEWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OGg8QHC8oIigvLy87Ly8vLy8vLzsvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAAwAGAMBIgACEQEDEQH/xAAXAAEAAwAAAAAAAAAAAAAAAAAGAAEE/8QAHBAAAgICAwAAAAAAAAAAAAAAAAECEgMxBQYT/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAMAwEAAhEDEQA/AH/ApXEzSqDev5JX2LJzfkFuqUVYhlWSVtkBdf/Z"
    }
  }
}
