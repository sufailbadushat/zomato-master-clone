import React from 'react'
import { useParams } from 'react-router';
import BestFood from './BestFood/BestFood';
import Delivery from './Delivary/Delivary';
import Collection from './Collection/Collection';
import DineoutRestaurant from './DineoutRestaurant/DineoutRestaurant';
import NightLife from './NightLife/NightLife';

const Master = () => {
    const { type } = useParams();
    return (
        <>
            <div className="m-4">
                {
                    type === "delivery" && <Delivery />
                }
            </div>
            <div className="m-4">
                {
                    type === "delivery" && <BestFood />
                }
            </div>
            <div className="lg:m-4">
                {
                    type === "dining" && <Collection />
                }
            </div>
            <div className="m-4">
                {
                    type === "dining" && <DineoutRestaurant />
                }
            </div>
            <div className="m-4">
                {
                    type === "night" && <NightLife />
                }
            </div>
        </>
    )
}

export default Master
