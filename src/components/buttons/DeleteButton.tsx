import { Modal } from '@components/index';
import { useState } from 'react';
import '@styles/DeleteButton.css';

function DeleteButton({ jobId, handleDelete }: CRUD.DeleteProps): JSX.Element {
  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        <button className="btn-delete" type="button" onClick={() => setShow(true)}>
          Delete
        </button>
      </div>
      <Modal value={show} callBack={setShow} className="delete-container">
        <div className="container-header">
          <h3 className="text-xl font-semibold">Are you sure?</h3>
        </div>
        <div className="my-5 flex justify-center">
          <button type="button" onClick={() => setShow(false)} className="btn-cancel">
            Cancel
          </button>
          <button type="button" className="btn-delete" onClick={() => handleDelete(jobId)}>
            Delete
          </button>
        </div>
      </Modal>
    </>
  );
}

export default DeleteButton;
