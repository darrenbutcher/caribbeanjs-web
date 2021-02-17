import Icon from '@/atoms/icon'

function Header() {
  return (
    <header className="h-16 flex items-center">
      <div className="flex space-x-4 ml-auto">
        <a href="https://jamstack.org" target="_blank" className="font-poppins font-bold text-gray-500 border-b-4 border-white hover:text-purple-500 hover:border-b-4 hover:border-gray-900">Jamstack</a>
        <a href="https://2020.stateofjs.com/en-US/" target="_blank" className="font-poppins font-bold text-gray-500 border-b-4 border-white hover:text-purple-500 hover:border-b-4 hover:border-gray-900">State of JS 2020</a>
        <a href="https://github.com/caribbeanjs" target="_blank"><Icon name="github"/></a>
        <a href="https://twitter.com/caribbean_js" target="_blank"><Icon name="twitter"/></a>
        <a href="https://www.youtube.com/channel/UCFMQ6D5uPIfT762Z4PdzKIw" target="_blank"><Icon name="youtube"/></a>
      </div>        
    </header>
  )
}

export default Header