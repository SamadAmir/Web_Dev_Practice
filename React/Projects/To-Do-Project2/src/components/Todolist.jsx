function Todolist(){
    return(
    <div className="row">
          <div className="col-3">
            <input type="text" placeholder="Enter Todo Here" />
          </div>

          <div className="col-2">
            <input type="date" />
          </div>
          <div className="col">
            <button type="button" className="btn btn-success">
              Add
            </button>
          </div>
        </div>
    )   
}
export default Todolist;  