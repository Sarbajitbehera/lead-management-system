import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header className="flex justify-between items-center px-5 h-[65px] shadow-md shadow-orange-300 top-0 sticky bg-white z-20">
        <div className="font-bold w-[60px] text-4xl"><IoLogoTableau className="text-blue-600" /></div>
        <div>
          <ul className="flex gap-5 items-center">
            <li>Home</li>
            <li>About</li>
            <button className="bg-green-300 hover:scale-110 hover:bg-blue-300 px-3 py-1 rounded-lg">Signin</button>
            <button className="bg-green-300 hover:scale-110 hover:bg-blue-300 px-3 py-1 rounded-lg">Singup</button>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Navbar