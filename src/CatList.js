// write your CatList component here
import React from 'react';

const CatList = (props) => {
   const { catPics } = props
   console.log("catPics for catlist", catPics)
   return (
      <div>
         {catPics.map(catPic => {
            return (
               <img key={catPic.id} src={catPic.url} alt={catPic.id} />
            )
         })}
      </div>
   );
}

export default CatList;
