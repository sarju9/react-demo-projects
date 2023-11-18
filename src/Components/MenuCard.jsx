import React from 'react'

const MenuCard = ({ menuData }) => {
    console.log(menuData);
    return (
        <>
            <section className='main-card--cointainer'>
                {
                    menuData.map((item) => {
                        const { id, name, image, description, price, category } = item;

                        return (
                            <>
                                <div className='card-conatiner' key={id}>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <span className='card-number card-circle subtle'>{id}</span>
                                            <span className='card-author subtle'>{category}</span>
                                            <h2 className='card-title'>{name}</h2>
                                            <span className='card-desciption subtle'>
                                                {description}
                                            </span>
                                            <div className='card-read'>Read</div>
                                        </div>
                                        <img src={image} alt={name} className='card-media' />

                                        <h3>Price : {price}</h3>
                                        <span className='card-tag subtle'>Order Now</span>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </section>

        </>
    )
}

export default MenuCard;