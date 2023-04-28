import { useState, useEffect, useRef } from 'react';
import { Card } from '@components/index';
import { useGlobalState } from '@components/Home';
import jobApi from '@services/job.service';
import '@styles/Card.css';

function CardHandler(): JSX.Element {
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
    setClickedCardId(null);
    setJobPost(jobPost.filter((data: CRUD.JobData) => data.id !== val));
    jobApi.delete('job-post', Number(val));
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
    <div
      className="grid grid-cols-1 place-items-center gap-4 px-10 py-10 sm:grid-cols-2"
      ref={cardRef}
    >
      {jobPost.map((values: CRUD.JobData) => (
        <Card
          key={values.id}
          data={values}
          cardId={clickedCardId}
          editHandler={editHandler}
          handleCardClick={handleCardClick}
          deleteHandler={deleteHandler}
        />
      ))}
    </div>
  );
}

export default CardHandler;
