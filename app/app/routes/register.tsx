import { useActionData, redirect } from '@remix-run/react'

export async function action({ request }: actionFunctionArgs) {
  const formData = await request.formData()
  const username = formData.get('username')
  const password = formData.get('password')

  // メール送信処理のサンプル
  if (username && password) {
    // ここでメールを送信する処理を書く
    return redirect('/register/success') // 404
  }
  // バリデーションエラーの処理
  return { error: 'ユーザー名とパスワードは必須です。' }
}

// http://localhost:3000/register
export default function Index() {
  const actionData = useActionData()

  return (
    <div>
      <h1>ユーザー登録</h1>
      {actionData?.error && <p>エラー: {actionData.error}</p>}
      <form method='post'>
        <div>
          <label htmlFor='username'>ユーザー名:</label>
          <input type='text' name='username' id='username' />
        </div>
        <div>
          <label htmlFor='password'>パスワード:</label>
          <input type='password' name='password' id='password' />
        </div>
        <button type='submit'>登録する</button>
      </form>
    </div>
  )
}
