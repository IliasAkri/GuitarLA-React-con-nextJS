import Link from "next/link"

export default function Guitarra({guitarra}) {
  console.log(guitarra)
  const {descripcion, nombre, ìmagen, precio, url} = guitarra
  return (
      <div>

         <h3>{nombre}</h3>
         <p>{precio}</p>
         <p>{url}</p>
  

      </div>

  )
}
