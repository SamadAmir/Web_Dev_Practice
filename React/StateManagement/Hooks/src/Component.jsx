import { useState } from "react";

function MyComponent(){

    const[ name,setName ] = useState();
    const[ age,setAge ] = useState(0);


    const updateName = () =>{
        setName("Samad Amir")
    }

    const IncerementAge = () => {
        setAge(age+1)      
    }

    const DecrementAge = () => {
        setAge(age-1)
    }

    const Reset = () => {
        setAge(0)
    }

    return(
        <div>
            <p>Name:{name}</p>
            <button onClick={ updateName }>Set Name</button>
            

            <p>Age:{age}</p>
            <button onClick={ IncerementAge }>+</button>

            <button onClick={ DecrementAge }>-</button>

            <button onClick={Reset}>Reset</button>

        </div>
    )


}
export default MyComponent;