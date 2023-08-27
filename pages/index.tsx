import Layout from "../components/layout"

export default function IndexPage() {
  return (
    <Layout>
      <h1>NodeJS OAuth Example</h1>
      <p>
        这个是一个使用nodejs 实现的 OAuth2.0 客户端的例子，基于 auth.js 实现
        。目前使用 Github、SAST Link 作为登录例子
      </p>
    </Layout>
  )
}
