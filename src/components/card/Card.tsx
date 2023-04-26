import ApiClient from '@services/ApiClient';
import { useState, useEffect } from 'react';

const headers: CRUD.Headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
};

function Card() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const api = new ApiClient('https://643941cd4660f26eb1ae59e5.mockapi.io/', headers);
    async function fetchData() {
      const { data, status } = await api.getAll('job-post');
      if (status === 200) {
        setPost(data);
      }
    }
    fetchData();
  }, [post]);

  /*   setTimeout(() => {
    // setPost([]);
  }, 4000); */

  /* setTimeout(() => {
    setPost(post.filter((data: CRUD.StepOneData) => data.id !== '2'));
  }, 6000); */ // delete

  /* setTimeout(() => {
    const indexToUpdate = post.findIndex((cardData) => cardData?.id === '2');
    if (indexToUpdate >= 0) {
      const api = new ApiClient('https://643941cd4660f26eb1ae59e5.mockapi.io/', headers);

      // eslint-disable-next-line no-inner-declarations
      async function fetchCardData() {
        const { data, status } = await api.get('job-post', 2);
        if (status === 200) {
          const updatedPost = [...post];
          updatedPost[indexToUpdate] = data;
          setPost(updatedPost);
        }
      }

      fetchCardData();
    }
  }, 5000);//update */

  return (
    <div className="grid grid-cols-2 gap-4">
      {post?.map((data: CRUD.StepOneData) => {
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
