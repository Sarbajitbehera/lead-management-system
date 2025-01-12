import { CgProfile } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  return (
    <div className="w-[100%] h-[100%] flex justify-center ">

        

        <div className="w-[250px] h-[430px] rounded-md shadow-lg shadow-blue-500 border-black border-[1px] mt-7">

            <div className="font-bold text-center text-2xl text-purple-800 my-3">Sign up</div>

            {/* image */}
            <div><img src="https://kylas.io/wp-content/uploads/2024/07/Best-Lead-Management-Software-and-Tools-1.png" alt="" className=""/></div>

            {/* username */}

            <div className="border-[1px] rounded-md border-black mx-2 mt-3 flex items-center pl-2 shadow-md shadow-orange-300"><CgProfile className="mr-2" /><input type="text" placeholder="username"/></div>
            
            {/* password */}
            <div className="border-[1px] border-black rounded-md mx-2 mt-2 flex items-center pl-2 shadow-md shadow-orange-300"><RiLockPasswordFill className="mr-2" /><input type="text" placeholder="password"/></div>

            {/* btn */}
            <button className="flex justify-center mt-3 border-black bg-orange-400 rounded-lg py-1 px-5 shadow-blue-500 ml-[80px] shadow-md cursor-pointer hover:scale-110 transition-all">Sing in</button>
            
            <div className="text-[10px] mt-2 ml-2">Last password? <span className="text-blue-900 font-bold cursor-pointer">Click Here!</span></div>

            <div className="flex justify-between">
               <div><button className="flex justify-center mt-3 border-black rounded-lg px-5 ml-2 shadow-blue-500 shadow-md cursor-pointer hover:scale-110 transition-all text-white bg-blue-900 text-sm py-1">Sing up</button></div>
               <div><button className="flex justify-center mt-3 border-black  rounded-lg px-5 mr-2 shadow-blue-500 shadow-md cursor-pointer hover:scale-110 transition-all bg-gray-300 text-sm py-1">Sing in</button></div>
            </div>
        </div>
    </div>
  )
}

export default Login