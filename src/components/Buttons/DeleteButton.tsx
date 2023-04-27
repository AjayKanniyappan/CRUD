import { Modal } from '@components/index';
import { useState } from 'react';

function DeleteButton({ jobId, handleDelete }: CRUD.DeleteProps): JSX.Element {
  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        <button
          className="mb-2 mr-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300"
          type="button"
          onClick={() => setShow(true)}
        >
          Delete
        </button>
      </div>
      <Modal
        value={show}
        callBack={setShow}
        className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
      >
        <div className="flex justify-between text-[#212121]">
          <h3 className="text-xl font-medium">Are you sure?</h3>
        </div>
        <div className="my-4 flex justify-center">
          <button
            type="button"
            onClick={() => setShow(false)}
            className="mb-2 mr-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={() => handleDelete(jobId)}
            type="button"
            className="mb-2 mr-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300"
          >
            Delete
          </button>
        </div>
      </Modal>
    </>
  );
}

export default DeleteButton;
