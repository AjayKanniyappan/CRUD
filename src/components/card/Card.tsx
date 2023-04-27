import { useState, useEffect } from 'react';
import ApiClient from '@services/ApiClient';
import { VITE_MOCK_API_KEY } from '@constants/index';

const headers: CRUD.Headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
};

function Card(): JSX.Element {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const api = new ApiClient(`https://${VITE_MOCK_API_KEY}.mockapi.io/`, headers);
    async function fetchData() {
      const { data, status } = await api.getAll('job-post');
      if (status === 200) {
        setPost(data);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      {post?.map((data: CRUD.JobData) => {
        return (
          <div
            key={data.id}
            id={String(data.id)}
            className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {data.jobTitle}
            </h5>
            <p className="mb-3 font-normal text-gray-700">{data.companyName}</p>
            <p className="mb-3 font-normal text-gray-700">{data.industry}</p>
            <p className="mb-3 font-normal text-gray-700">{data.location}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
