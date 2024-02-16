import Layout from "../components/layout"
import Image from 'next/image'
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <div>
      <Layout
        title={'Nosotros'}
        description="Sobre nosotros, guitarLA tienda de música">

        <main className="contenedor">
          <h1 className="heading">Nosotros</h1>
          <div className={styles.contenido}>
            <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre Nosotros"/>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel velit eu orci
                malesuada maximus at quis neque. Maecenas odio eros, ullamcorper a nisi a, aliqu
                et lacinia elit. Integer sed arcu blandit, aliquam sapien sit amet, mattis mauris.
                Class aptent taciti sociosqu ad litora torquent.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel velit eu orci malesuada
                maximus at quis neque. Maecenas odio eros, ullamcorper a nisi a, aliquet lacinia
                elit. Integer sed arcu blandit, aliquam sapien sit amet, mattis mauris. Class apte
                nt taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas v
                estibulum malesuada lacinia. Donec congue lobortis ex in varius. Mauris congue fermentum metus tinc.
              </p>
            </div>
          </div>
        </main>

      </Layout>
    </div>
  )
}
