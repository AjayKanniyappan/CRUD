import { useState, useEffect, useRef } from 'react';
import { DeleteButton, EditButton } from '@components/index';
import { useGlobalState } from '@components/Home';
import jobApi from '@services/job.service';
import '@styles/Card.css';

function Card(): JSX.Element {
  const { globalState } = useGlobalState();
  const [jobPost, setJobPost] = useState([]);
  const [clickedCardId, setClickedCardId] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const editHandler = (id: number, data: CRUD.JobData) => {
    const mergeData = { id, ...data };
    jobApi.update('job-post', id, mergeData).then(() => {
      const indexToUpdate = jobPost.findIndex(
        (cardData: CRUD.JobData) => Number(cardData.id) === Number(id),
      );
      const updatedPost = [...jobPost];
      updatedPost[indexToUpdate] = mergeData as never;
      setJobPost(updatedPost);
      setClickedCardId(null);
    });
  };

  const deleteHandler = (val: string) => {
    jobApi.delete('job-post', Number(val)).then(() => {
      setJobPost(jobPost.filter((data: CRUD.JobData) => data.id !== val));
      setClickedCardId(null);
    });
  };

  const handleCardClick = (id: string) => {
    setClickedCardId(id);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
      setClickedCardId(null);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const { data, status } = await jobApi.getAll('job-post');
      if (status === 200) {
        setJobPost(data);
      }
    }
    fetchData();

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [globalState]);

  return (
    <div className="grid grid-cols-1 gap-4 px-10 py-10 sm:grid-cols-2" ref={cardRef}>
      {jobPost.map((data: CRUD.JobData) => (
        <div
          key={data.id}
          id={String(data.id)}
          onClick={() => handleCardClick(data.id as string)}
          className="card relative max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow"
          aria-hidden="true"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{data.jobTitle}</h5>
          <p className="mb-3 font-normal text-gray-700">{data.companyName}</p>
          <p className="mb-3 font-normal text-gray-700">{data.industry}</p>
          <p className="mb-3 font-normal text-gray-700">{data.location}</p>
          <div
            className={`absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 ${
              clickedCardId === data.id ? 'blurred ' : '-translate-x-[500%]'
            }`}
            aria-hidden="true"
          >
            <EditButton jobId={data.id as string} jobData={data} handleEdit={editHandler} />
            <DeleteButton jobId={data.id as string} handleDelete={deleteHandler} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
