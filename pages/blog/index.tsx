import { ReactNode } from 'react'
import Layout from '../../containers/layout'
import { GetServerSideProps } from 'next'
import Feed from '../../containers/feed'
import Pagination from '../../containers/paginationn'
import Card from '../../components/card'
import Message from '../../containers/message'
import { BlogPost,  } from '../../cms/types'
import { getBlogPostSlugs, getBlogPosts, urlFor } from '../../cms/functions'
import { BLOG_POSTS_PER_PAGE } from '../../utils/constants'


export const getServerSideProps: GetServerSideProps = async ({ query, locale }) => {
    let { page } = query
    if (page instanceof Array) {
        page = page[0]
    }
    const blogPostSlugs = await getBlogPostSlugs(locale)
    const blogPosts = await getBlogPosts(locale, +page)
    const numOfPages = Math.ceil(blogPostSlugs.length / BLOG_POSTS_PER_PAGE)

    return {
        props: {
            locale,
            blogPosts,
            page,
            numOfPages
        }
    }
}

export interface BlogProps {
    locale: string
    blogPosts: BlogPost[]
    page: string
    numOfPages: number
}

export default function Blog({ locale, blogPosts, page, numOfPages }: BlogProps) {
    let content: ReactNode
    if (blogPosts && blogPosts.length) {
        content = (
            <>
                <Feed>
                    {blogPosts.map(blogPost => (
                        <li key={blogPost?.slug}>
                            <Card 
                                locale={locale}
                                slug={ blogPost?.slug}
                                coverImageUrl={urlFor(blogPost?.coverImage).width(480).url()}
                                title={blogPost?.title}
                                date={blogPost?.date}
                                description={blogPost?.description}
                            />
                        </li>
                    ))}
                </Feed>
                <Pagination curPage={+page} numOfPages={ numOfPages }/>
            </>
        )
    } else {
        content = (
            <Message
                title='Nenhuma postagem encontrada'
                description='Não há postagens para a localidade selecionada. Tente alterar a localidade atual.'
            />
        )
    }

    return (
            <Layout locale={locale}>
                {content}
            </Layout>
    )
}