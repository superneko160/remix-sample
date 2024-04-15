import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { client } from "../lib/client.server";
import type { Content } from "../types";

export const loader: LoaderFunction = async () => {
  // microcms-js-sdkを使ってブログ記事一覧を取得
  const { contents } = await client.getList<Content[]>({
    endpoint: "blogs",
  });
  return contents || [];
};

export default function Index() {
  const contents = useLoaderData<Content[]>();
  return (
    <div className="prose p-4">
      <h1>Scraps</h1>
      <ul>
        {contents.map((item) => (
          <li key={item.id}>
            {item.title} {new Date(item.createdAt).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
