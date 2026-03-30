const Feature = ()=>{
    return(
        <div className="py-[80px]">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-col md:flex-col gap-8">
                    <div>
                        <h2 className="text-[18px] md:text-2xl font-bold text-black uppercase">Feature Work</h2>
                        <div className="w-16 h-[3px] bg-yellow-400 mt-2"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                        <div className="h-64">
                            <img src="https://i.ibb.co.com/pvP2ng1f/h5.jpg" alt="" className="w-full h-full object-cover"/>
                        </div>
                        <div className="h-64"> 
                            <img src="https://i.ibb.co.com/YBHjfbtt/pexels-pixabay-262048.jpg" alt="" className="w-full h-full " />
                        </div>
                        <div className="h-64">
                            <img src="https://i.ibb.co.com/pvP2ng1f/h5.jpg" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature;