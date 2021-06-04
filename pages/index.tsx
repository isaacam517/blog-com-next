import { GetStaticProps } from 'next'
import Image from 'next/image'
import Layout from '../containers/layout'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      locale
    }
  }
}

export interface HomeProps {
  locale: string
}

export default function Home({ locale }: HomeProps) {
  return (
    <Layout locale={locale}>
      <h2>Notícias, Entrenenimento e Informações</h2>
      <Image src='/capaHome.jpg' alt='Imagem Capa' width='720' height='500' />

    </Layout>
  )
}
