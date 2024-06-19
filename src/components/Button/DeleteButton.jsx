const DeleteButton = ({ handleDelete }) => {
  return (
    <>
      <button onClick={handleDelete} className="btn">
        Delete
      </button>
    </>
  );
};

export default DeleteButton;
