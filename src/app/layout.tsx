import Layout from '@/entities/layout/Layout'
import '../styles/globals.scss'
import Footer from "@/widgets/footer/Footer";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
        <body className='flex'>
        <div className='fixed z-40 top-0 left-0 bg-[#0F91D6] h-screen l-layout'>
            <Layout/>

        </div>

        <div className='page'>
            <div className='inner-page'>{children}</div>
            <Footer/>
        </div>
        </body>
        </html>
    )
}
