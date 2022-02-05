import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
    return (
        <Layout
            pagina="nosotros"
        >
            <main className='contenedor'>
                <h2 className='heading'>Nosotros</h2>

                <div className={styles.contenido}>
                    <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="Imagen sobre nosotros" />
                    <div>
                        <p>Donec vehicula ante sed placerat laoreet. Etiam pellentesque ex ut laoreet fringilla. 
                            Suspendisse accumsan, quam vel vehicula finibus, felis libero pretium orci, vitae 
                            sollicitudin felis tortor id libero. Integer id lectus at risus dictum rutrum. 
                            Aenean eu elit congue, tincidunt est in, faucibus turpis. Aenean ullamcorper nulla 
                            vel accumsan tempus. Mauris quis porta lorem. Phasellus id vestibulum velit, vitae 
                            dignissim sapien. Ut tincidunt quis ligula eget feugiat. Maecenas eget purus eu mauris 
                            lacinia vehicula at ut orci.
                        </p>

                        <p>Donec vehicula ante sed placerat laoreet. Etiam pellentesque ex ut laoreet fringilla. 
                            Suspendisse accumsan, quam vel vehicula finibus, felis libero pretium orci, vitae 
                            sollicitudin felis tortor id libero. Integer id lectus at risus dictum rutrum. 
                            Aenean eu elit congue, tincidunt est in, faucibus turpis. Aenean ullamcorper nulla 
                            vel accumsan tempus. Mauris quis porta lorem. Phasellus id vestibulum velit, vitae 
                            dignissim sapien. Ut tincidunt quis ligula eget feugiat. Maecenas eget purus eu mauris 
                            lacinia vehicula at ut orci.
                        </p>
                    </div>
                </div>

            </main>
        </Layout>
    )
}

export default Nosotros

