/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Todelete from "./Todelete";

const ToDelete = ({ todoitems }) => {
  return (
    <div>
      {todoitems.map((item) => (
        <Todelete date={item.dueDate} item={item.name}></Todelete>
      ))}
    </div>
  );
};

export default ToDelete;