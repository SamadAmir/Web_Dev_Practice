/* eslint-disable react/prop-types */
function Todelete({ item, date }) {
  return (
    <div className="row mt-3">
      <div className="col-3">
        <p>{item}</p>
      </div>
      <div className="col-2">{date}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todelete;
