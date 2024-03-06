import { useActionData, redirect } from "@remix-run/react";

export async function action({ request }: actionFunctionArgs) {
    const formData = await request.formData();
    const email = formData.get("email");
    const message = formData.get("message");
  
    // メール送信処理のサンプル
    if (email && message) {
      // ここでメールを送信する処理を書く
      return redirect("/success");  // 404
    }
    else {
      // バリデーションエラーの処理
      return { error: "メールアドレスとメッセージは必須です。" };
    }
}

// http://localhost:3000/contact
export default function Index() {

    const actionData = useActionData();

    return (
        <div>
            <h1>お問い合わせ</h1>
            {actionData && actionData.error && <p>エラー: {actionData.error}</p>}
            <form method="post">
                <div>
                    <label htmlFor="email">メールアドレス:</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="message">メッセージ:</label>
                    <textarea name="message" id="message"></textarea>
                </div>
                <button type="submit">送信する</button>
            </form>
        </div>
    )
}
