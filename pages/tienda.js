import Layout from "../components/layout"
import Guitarra from "../components/Guitarra"


export default function Tienda({guitarras}) {


  return (
      <Layout
      title = {'Tienda'}
      description="Tienda virtual, guitarLA tienda de música"
      >
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
       {guitarras?.map(guitarra => (
          <Guitarra  
          key={guitarra.id}
          guitarra={guitarra.attributes}
          />
        ))} 
      </main>
      </Layout>
  )
}

export async function getServerSideProps() {
  const respuesta = await fetch(`http://localhost:1337/api/guitarras?popultate=imagen`)
  const {data: guitarras} = await respuesta.json()
  return {
    props : {
      guitarras
    }
  }
}




// export async function getStaticPaths() {
//   const respuesta = await fetch(`http://localhost:1337/api/guitarras?popultate=imagen`)
//   const {data} = await respuesta.json()
  
//   const paths = data.map(guitarra => ({
//     params: {
//       url: guitarra.attributes.url
//     }
//   }))
//   }
//   return {
//     paths, 
//     fallback: false
//   }


// export async function getServerSideProps({params: {url}}) {
//   const respuesta = await fetch(`http://localhost:1337/api/guitarras?filters[url]=${url}&popultate=imagen`)
//   const {data: guitarras} = await respuesta.json()
//   return {
//     props : {
//       guitarras
//     }
//   }
// }
  {/* <Image  
    src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`}
  /> */}