import React from 'react'

const BestFoodCategory = () => {
    return (
        <div>
            <div className="bg-white rounded-md  shadow-lg py-5">
                <div className='w-80 h-52 lg:w-84 lg:h-60 relative'>
                <div className="flex w-full justify-between items-center absolute bottom-2 ">
                    <div className="flex flex-col items-start gap-1">
                    <p className="  bg-pink-600  text-white">Pro - Get 15% off</p>
                    <p className="  bg-blue-800  text-white">15%off</p>
                    </div>
                    <span className="bg-white opacity-60 flex items-end rounded mr-2">42 km</span>
                    </div>
                    <img
                        src="https://b.zmtcdn.com/data/pictures/2/19619482/15dfba7f56b43a4d9410367fe6ce977f_o2_featured_v2.jpg?output-format=webp"
                        alt="Burger"
                        className="w-full h-full rounded-lg  object-cover"
                    />
                </div>

                <div className="flex flex-row items-start justify-between">
                    <div>
                    <h3 className="my-2 text-base font-medium ">Eatarie</h3>
                    <p className="text-xs font-bold">Chinies,Roll,Momos,Biriyani...</p>

                    </div>
                    <div className="flex flex-col items-center justify-between ">
                        <span className="bg-green-700 my-2 text-white p-1 text-xs rounded-sm">4.1⭐</span>
                        <span className="text-xs font-bold">$150 for one</span>
                    </div>
                    
                </div>

            </div>

        </div>
    )
}

export default BestFoodCategory
