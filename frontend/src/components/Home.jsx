import { IoLogoTableau } from "react-icons/io5";

const Home = () => {
    return (
        <div>
            <div>
                <header className="flex justify-between items-center px-5 h-[65px] shadow-md shadow-orange-300"> 
                    <div className="font-bold w-[60px] text-4xl"><IoLogoTableau className="text-blue-600"/></div>
                    <div>
                        <ul className="flex gap-5 items-center">
                            <li>Home</li>
                            <li>About</li>
                            <button className="bg-green-300 hover:scale-110 hover:bg-blue-300 px-3 py-1 rounded-lg">Signin</button>
                            <button className="bg-green-300 hover:scale-110 hover:bg-blue-300 px-3 py-1 rounded-lg">Singup</button>
                        </ul>
                    </div>
                </header>

                {/* image */}
                <div className="flex mt-8 mx-8">
                    <div className="w-[50%]"><img src="https://deerdesigner.com/wp-content/uploads/15575-Image-2_1200x790.png" alt="" /></div>

                    {/* content */}
                    <div className="w-[50%]">
                        <p className="text-[5vw] mt-[18%] text-blue-700 font-bold">Lead Management <span className="text-orange-500">System</span></p>
                    </div>

                </div>
                    
            </div>

        </div>
    )
}

export default Home