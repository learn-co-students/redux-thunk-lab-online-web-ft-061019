import React from 'react';

const CatList = (props) => {
   const { catPics } = props
   console.log("catPics for catlist", catPics)
   return (
      <React.Fragment>
         {catPics.map(catPic => {
            return (
               <img key={catPic.id} src={catPic.url} alt={catPic.id} />
            )
         })}
      </React.Fragment>
   );
}

export default CatList;