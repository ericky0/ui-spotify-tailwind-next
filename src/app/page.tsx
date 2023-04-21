import Sidebar from './components/sidebar/Sidebar'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'


export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
        <Sidebar />
      <div className='flex flex-1 pb-20 ml-72'>
        <Main />
      </div>
      <Footer />
    </div>
  )
}
