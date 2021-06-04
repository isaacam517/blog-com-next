import { ReactNode } from 'react'
import Header from '../header'
import styles from './layout.module.scss'


export interface LayoutProps {
    locale: string
    children: ReactNode
}

export default function Layout({ locale, children }: LayoutProps) {
    return (
        <>
            <Header locale={locale}/>
            <main className={styles.main}>
                { children }
            </main>
        </>
    )
}