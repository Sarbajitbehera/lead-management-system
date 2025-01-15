const Navbar1 = () => {
    return (
        <div className="flex justify-between px-11 items-center h-[75px] border-[1px] border-black">
            <div className="px-5 py-1 bg-blue-400 rounded-md cursor-pointer text-white">Lead Mangement</div>
            <div className="flex gap-4">
                <div className="px-5 py-1 bg-blue-400 rounded-md cursor-pointer text-white">Logout</div>
                <div className="h-[33px] w-[33px] rounded-full bg-yellow-500"></div>
            </div>
        </div>
    )
}
export default Navbar1