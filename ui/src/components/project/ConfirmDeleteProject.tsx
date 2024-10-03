import { Button } from "../../common/components/Button";

interface Props {
  handleDelete: (id: number) => void;
  handleCloseModal: () => void;
  isOpen: boolean;
  projectId: number;
}

export const ConfirmDeleteProject: React.FC<Props> = ({
  handleDelete,
  handleCloseModal,
  isOpen,
  projectId
}) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="absolute z-0 inset-0 bg-black opacity-50"></div>
      <div className="flex z-30 flex-col border-2 items-center justify-center w-2/5 h-2/6 bg-white rounded-xl">
        <p className="text-xl font-bold text-black">Are you sure you want to delete this project?</p>
        <div className="flex flex-row gap-5 pt-5">
          <Button label="Confirm" type="button" onClick={() => handleDelete(projectId)}/>
          <Button label="Cancel" type="button" onClick={handleCloseModal} />
        </div>
      </div>
    </div>
  )
}
