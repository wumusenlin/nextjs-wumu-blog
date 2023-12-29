// 官方的全局引入css样式的文件和方式，必须是_app.js
import './global.css'

// 新创建的 `pages/_app.js` 文件中必须有此默认的导出（export）函数
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}