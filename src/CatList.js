import React from 'react'



class CatList extends React.Component {
    catList = () => {
        return this.props.catPics.map(catPic => <img key={catPic.id} src={catPic.url} alt={catPic.id} />)
    }

    render() {
        return (
            <div> 
                {this.catList()}
            </div>
        )
    }
}

// const CatList = (props) => {
//     const { catPics } = props
//     return(
//         <React.Fragment>
//         {catPics.map(catPic => {
//             return (
//                 <img key={catPic.id} src={catPic.url} alt={catPic.id} />
//             )
//         })}
//         </React.Fragment>
//     )
// }

export default CatList