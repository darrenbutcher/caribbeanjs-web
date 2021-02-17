function Footer() {
  const getCurrentYear = () => new Date().getFullYear()

  return (
    <footer className="flex flex-col items-start md:flex-row md:justify-between py-2 text-gray-500 md:space-x-2 text-xs">
      <div className="flex space-x-2">
        <div className=".bg-red-100">© {getCurrentYear()} Caribbean JS</div>
        <span>&bull;</span>
        <a href="https://facebook.com/caribbeanjs" target="_blank" className="hover:text-red-500 font-bold">Facebook</a>
         <span>&bull;</span>
        <a href="https://medium.com/caribbeanjs" target="_blank" className="hover:text-red-500 font-bold">Medium</a>
      </div>
      <div>built with <a href="https://nextjs.org" target="_blank" className="hover:text-red-500 font-bold">NextJS</a> & <a href="https://tailwindcss.com" target="_blank" className="font-bold hover:text-red-500">Tailwind CSS</a> made with &hearts; by <a href="https://twitter.com/darrenbutcher" target="_blank" className="hover:text-red-500 font-bold">@darrenbutcher</a></div>
    </footer>
  )
}

export default Footer