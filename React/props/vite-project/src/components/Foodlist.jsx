/* eslint-disable react/jsx-key */
const FoodList = ()=>{
    let fooditem=["Desi Ghee","Sabzi","Mandi","Phal"]
    return(
        <>
    <ul className="list-group">
        {fooditem.map((item)=>(
            <li className="list-group-item">{item}</li>
        ))}
    </ul>
    </>
    );
}

export default FoodList;