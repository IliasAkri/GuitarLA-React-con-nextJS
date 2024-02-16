import Link from "next/link"
import Layout from "../components/layout"

export default function Home() {
  return (
    <>
    <Layout
    title = {'Inicio'}
    description = {'Blog de música, venta de guitarras y más'}
    >
      {/* Lo que hay dentro de este layout se renderiza en layout.js pasandolo como parametro children */}
      <h1>Hola Mundo en Next 12</h1>
      <Link href="/nosotros">Nosotros</Link>
    </Layout>
    </>
  )
}
