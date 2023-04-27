import { useState, useEffect } from 'react';
import ApiClient from '@services/ApiClient';
import { VITE_MOCK_API_KEY } from '@constants/index';
import { useGlobalState } from '../Home';
import '@styles/Card.css';

const headers: CRUD.Headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
};

function Card(): JSX.Element {
  const { globalState, setGlobalState } = useGlobalState();
  const [post, setPost] = useState([]);
  const [clickedCardId, setClickedCardId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setClickedCardId(id === clickedCardId ? null : id);
    setGlobalState({ message: 'Hello, world!' });
  };

  useEffect(() => {
    const api = new ApiClient(`https://${VITE_MOCK_API_KEY}.mockapi.io/`, headers);
    async function fetchData() {
      const { data, status } = await api.getAll('job-post');
      if (status === 200) {
        setPost(data);
      }
    }
    fetchData();
  }, [globalState]);

  return (
    <div className="grid grid-cols-2 gap-4">
      {post.map((data: CRUD.JobData) => (
        <div
          key={data.id}
          id={String(data.id)}
          onClick={() => handleCardClick(data.id as string)}
          aria-hidden="true"
          className="relative max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{data.jobTitle}</h5>
          <p className="mb-3 font-normal text-gray-700">{data.companyName}</p>
          <p className="mb-3 font-normal text-gray-700">{data.industry}</p>
          <p className="mb-3 font-normal text-gray-700">{data.location}</p>
          {clickedCardId === data.id && (
            <div className="blurred absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200">
              <button
                type="button"
                className="mr-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                type="button"
                className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          )}
        </div>
        /* <div
          key={data.id}
          id={String(data.id)}
          className={`max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow ${
            clickedCardId !== data.id ? '' : ''
          }`}
          onClick={() => handleCardClick(data.id as string)}
          aria-hidden="true"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{data.jobTitle}</h5>
          <p className="mb-3 font-normal text-gray-700">{data.companyName}</p>
          <p className="mb-3 font-normal text-gray-700">{data.industry}</p>
          <p className="mb-3 font-normal text-gray-700">{data.location}</p>
          {clickedCardId === data.id && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200">
              <button
                type="button"
                className="mr-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                type="button"
                className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          )}
        </div> */
      ))}
    </div>
  );
}

export default Card;
