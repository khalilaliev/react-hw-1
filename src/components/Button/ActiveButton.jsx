const ActiveButton = ({ animal, handleActive }) => {
  return (
    <button
      className="btn"
      onClick={handleActive}
      // style={{
      //   color: animal.activated ? "green" : "",
      //   fontWeight: animal.activated ? "bold" : "",
      // }}
    >
      {!animal.activated ? "Activate" : "Deactivate"}
    </button>
  );
};

export default ActiveButton;
