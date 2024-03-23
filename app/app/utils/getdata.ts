/**
 * 記事データを取得
 * @param {id} 記事のID
 * @return {object} 記事データ一覧
 */
export async function getPostings(id?: number) {
  const baseUrl = 'https://jsonplaceholder.typicode.com/posts'
  const url = id ? `${baseUrl}/${id}` : baseUrl
  const response = await fetch(url)
  return await response.json()
}
