import React, { useState } from 'react';
import "./Restaurant.css";
import Menu from "./MenuApi";
import MenuCard from './MenuCard';
import CategoryButton from './CategoryButton';

const uniqueList = [... new Set(Menu.map((currElem) => {
    return currElem.category;
})
), "All",];

console.log(uniqueList);

const Restaurant = () => {

    const [menuData, setMenuData] = useState(Menu);
    const [cateButton, setCateButton] = useState(uniqueList);

    const filterItem = (category) => {
        // if (category === "All") {
        //     setMenuData(Menu);
        //     return;
        // }

        if (category === "All") {
            return setMenuData(Menu);
        } else {
            const updatedList = Menu.filter((currElem) => {
                return currElem.category === category;
            });
            setMenuData(updatedList);
        }

    };

    return (
        <>
            <CategoryButton filterItem={filterItem} cateButton={cateButton} />

            <MenuCard menuData={menuData} />
        </>

    )
}

export default Restaurant