function Hello(){
    var myName='Samad'
    let fullname = ()=>{
        return 'Samad Amir'
    }
    return(
            <p>
                my name is {myName} and full name is : {fullname()}
            </p>
    )
}
export default Hello