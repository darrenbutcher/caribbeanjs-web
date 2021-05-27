import Header from '@/organisms/header'
import Footer from '@/organisms/footer'

function MainLayout({ children }) {
  return (
  <div style={{ maxWidth: '1110px'}} className="px-8 mx-auto relative flex flex-col h-screen justify-between .bg-red-100">
    <Header />
    {children}
    <Footer />
  </div>
  )
}

export default MainLayout