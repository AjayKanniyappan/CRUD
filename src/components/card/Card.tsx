import { useState, useEffect, useRef } from 'react';
import jobApi from '@services/job.service';
import { DeleteButton, EditButton } from '@components/index';
import { useGlobalState } from '@components/Home';
import '@styles/Card.css';

function Card(): JSX.Element {
  const { globalState, setGlobalState } = useGlobalState();
  const [post, setPost] = useState([]);
  const [clickedCardId, setClickedCardId] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (id: string) => {
    setClickedCardId(id);
    setGlobalState({ message: 'Hello, world!' });
  };

  const hDelete = (val: string) => {
    jobApi.delete('job-post', Number(val));
    setPost(post.filter((data: CRUD.JobData) => data.id !== val));
    setClickedCardId(null);
  };

  const test = (id: number, val: CRUD.JobData) => {
    setClickedCardId(null);
    const fs = { id, ...val };
    const indexToUpdate = post.findIndex(
      (cardData: CRUD.JobData) => Number(cardData.id) === Number(id),
    );
    const updatedPost = [...post];
    updatedPost[indexToUpdate] = fs as never;
    setPost(updatedPost);
    jobApi.update('job-post', id, val);
  };

  useEffect(() => {
    async function fetchData() {
      const { data, status } = await jobApi.getAll('job-post');
      if (status === 200) {
        setPost(data);
      }
    }
    fetchData();
  }, [globalState]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setClickedCardId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4" ref={cardRef}>
      {post.map((data: CRUD.JobData) => (
        <div
          key={data.id}
          id={String(data.id)}
          onClick={() => handleCardClick(data.id as string)}
          aria-hidden="true"
          className={`card relative max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow ${
            clickedCardId === data.id ? '' : 'blurred'
          }`}
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{data.jobTitle}</h5>
          <p className="mb-3 font-normal text-gray-700">{data.companyName}</p>
          <p className="mb-3 font-normal text-gray-700">{data.industry}</p>
          <p className="mb-3 font-normal text-gray-700">{data.location}</p>
          {/* {clickedCardId === data.id && ( */}
          <div
            className={`absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 ${
              clickedCardId === data.id ? 'blurred ' : '-translate-x-[500%]'
            }`}
            aria-hidden="true"
          >
            <EditButton jobId={data.id as string} jobData={data} handleEdit={test} />
            <DeleteButton jobId={data.id as string} handleDelete={hDelete} />
          </div>
          {/*    )} */}
        </div>
      ))}
    </div>
  );
}

export default Card;
