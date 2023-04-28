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
      onClick={() => handleCardClick(data.id as string)}
      className="card relative w-full rounded-lg border border-gray-200 bg-white p-6 shadow"
      aria-hidden="true"
    >
      <div className="flex">
        <div className="my-1">
          <NetSvg className="mr-2 h-8 w-8 rounded" />
        </div>
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{data.jobTitle}</h5>
          <p className="mb-3 font-normal text-gray-700">{`${data.companyName} - ${data.industry}`}</p>
          <p className="mb-3 font-normal text-gray-700">{`${data.location} (${data.remoteType})`}</p>
          <br className="py-3" />
          <p className="mb-3 font-normal text-gray-700">Part-Time (9.00 am - 5.00 pm IST)</p>
          <p className="mb-3 font-normal text-gray-700">{`Experience (${data.minimumExperience} - ${data.maximumExperience} years)`}</p>
          <p className="mb-3 font-normal text-gray-700">{`INR (₹) ${data.minimumSalary} - ${data.maximumSalary} / Month`}</p>
          <p className="mb-3 font-normal text-gray-700">{`${data.totalEmployee} employees`}</p>
          <div className="my-5 flex justify-center">
            <button
              className="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Apply Now
            </button>
            <button
              className="mb-2 mr-2 rounded-lg border border-blue-700 px-5 py-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
              type="button"
            >
              External Apply
            </button>
          </div>
        </div>
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 ${
          cardId === data.id ? 'blurred ' : '-translate-x-[500%]'
        }`}
        aria-hidden="true"
      >
        <EditButton
          height="564px"
          width="577px"
          jobId={data.id as string}
          jobData={data}
          handleEdit={editHandler}
        />
        <DeleteButton jobId={data.id as string} handleDelete={deleteHandler} />
      </div>
    </div>
  );
}

export default Card;
