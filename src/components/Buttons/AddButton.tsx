import { AddSvg } from '@svg/index';

function AddButton(): JSX.Element {
  return (
    <div className="fixed bottom-10 right-10 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 hover:bg-blue-700">
      <button type="button" className="text-white">
        <AddSvg className="w-8 h-8" />
      </button>
    </div>
  );
}

export default AddButton;
