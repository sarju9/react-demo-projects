import React from 'react'

const CategoryButton = ({ filterItem, cateButton }) => {
    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>
                    {
                        cateButton.map((cateBtn, index) => {
                            console.log("catebtn", cateBtn);
                            return (<button key={index} className='btn-group__item' onClick={() => filterItem(cateBtn)}>{cateBtn}</button>);
                        })
                    }
                </div>
            </nav>
        </>
    )
}

export default CategoryButton