// write your CatList component here
import React from 'react'

function CatList({ catPics }) {
    return (
        <div className='catlist'>
            {catPics && catPics.map(cat =>
                <img key={cat.id} src={cat.url} alt='' />
            )}
        </div>
    )
}

export default CatList