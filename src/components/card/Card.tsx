import { DeleteButton, EditButton } from '@components/index';
import { NetSvg } from '@svg/index';

function Card({
  data,
  cardId,
  handleCardClick,
  editHandler,
  deleteHandler,
}: CRUD.CardProps): JSX.Element {
  return (
    <div
      key={data.id}
      id={String(data.id)}
      className="job-card"
      onClick={() => handleCardClick(data.id as string)}
      aria-hidden="true"
    >
      <div className="flex">
        <div className="my-1">
          <NetSvg className="mr-2 h-11 w-11" />
        </div>
        <div>
          <h5 className="text-2xl font-medium">{data.jobTitle}</h5>
          <p className="font-normal">{`${data.companyName} - ${data.industry}`}</p>
          <p className="font-normal text-gray-600">{`${data.location} (${data.remoteType})`}</p>
          <br className="py-3" />
          <p className="job-text">Part-Time (9.00 am - 5.00 pm IST)</p>
          <p className="job-text">{`Experience (${data.minimumExperience} - ${data.maximumExperience} years)`}</p>
          <p className="job-text">{`INR (₹) ${data.minimumSalary} - ${data.maximumSalary} / Month`}</p>
          <p className="job-text">{`${data.totalEmployee} employees`}</p>
          <div className="mt-6 flex space-x-3">
            <button
              className={data.quickApply === true ? 'btn-apply' : 'btn-apply-outline'}
              type="button"
            >
              Apply Now
            </button>
            <button
              className={data.externalApply === true ? 'btn-apply' : 'btn-apply-outline'}
              type="button"
            >
              External Apply
            </button>
          </div>
        </div>
      </div>
      <div className={`blur-container ${cardId === data.id ? 'blurred ' : '-translate-x-[500%]'}`}>
        <EditButton jobId={data.id as string} jobData={data} handleEdit={editHandler} />
        <DeleteButton jobId={data.id as string} handleDelete={deleteHandler} />
      </div>
    </div>
  );
}

export default Card;
