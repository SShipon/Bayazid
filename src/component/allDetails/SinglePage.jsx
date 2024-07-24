import React from 'react';

const SinglePage = ({item}) => {
    const { description, image } = item
    console.log(item);

    return (
        <div className='my-20'>
            <img src={image} alt="" />
            <p>{description}</p>
            
        </div>
    );
};

export default SinglePage;