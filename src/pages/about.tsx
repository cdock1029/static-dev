export async function getStaticProps(context) {
  let d = new Date()
  return {
    props: {
      date: `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`,
    },
  }
}

export default function About({ date }) {
  return (
    <div>
      <h1 className="text-4xl m-0 py-8">About</h1>
      <p className="m-0 p-0 text-green-800 opacity-75">updated</p>
      <h3 className="m-0 pb-4">{date}</h3>
    </div>
  )
}
