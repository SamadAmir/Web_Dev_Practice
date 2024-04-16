/* eslint-disable react/prop-types */
function Student(props){
    return(
        <>
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Gender: {props.sex}</p>
        </div>
        </>
    )

}
export default Student;