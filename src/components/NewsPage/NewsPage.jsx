import { Suspense} from 'react'
import { Await, useLoaderData } from 'react-router-dom'

export default function NewsPage() {

  const a = useLoaderData()

  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={a}>
          {a.map(el =>
          <div className="container" key={el.id}>
            <h1>{el.title}</h1>
            <p>{el.body}</p>
          </div>)}
        </Await>
      </Suspense>  
    </div>
  )
}

export async function loadingNews() {
  const fetchNews = await fetch("https://jsonplaceholder.typicode.com/posts")
  const responce = await fetchNews.json()
  return responce
}