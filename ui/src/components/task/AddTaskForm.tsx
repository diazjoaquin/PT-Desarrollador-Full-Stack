import { Form, Formik } from "formik"
import { Button } from "../../common/components/Button"
import { FormField } from "../../common/components/FormField"
import { ITask } from "../../interfaces/ITask";

interface Props {
  handleCloseModal: () => void;
  isOpen: boolean;
  handleSubmit: (values: ITask, handleCloseModal: () => void) => void;
  initialValues: ITask;
}

export const AddTaskForm: React.FC<Props> = ({ handleCloseModal, isOpen, handleSubmit, initialValues }) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="absolute z-0 inset-0 bg-black opacity-50"></div>
        <div className="flex z-20 flex-col border-2 items-center justify-center w-2/5 lg:w-1/4 h-3/6 lg:h-2/5 bg-white rounded-xl">
          <button
            className="pb-2 lg:pt-8"
            onClick={handleCloseModal}
          >
            <span className="text-red-600 font-bold text-md underline">close</span>
          </button>
            <h1 className="text-xl font-bold text-black">Add a new task</h1>
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => handleSubmit(values, handleCloseModal)}
              validationSchema={null}
            >
              {() => (
                <Form
                className="flex flex-col justify-center gap-2 lg:h-4/5 w-4/5">
                  <FormField
                    type="text"
                    name="task-name"
                    label="Name"
                    id="task-name"
                    placeHolder="Task name"
                    required
                  />
                  <FormField
                    type="text"
                    name="task-description"
                    label="Description"
                    id="task-description"
                    placeHolder="Project Description"
                    required
                  />
                  <div className="pt-6">
                    <Button
                      label="Add"
                      type="submit"
                    />
                  </div>
                </Form>          
              )}
            </Formik>
        </div>
    </div>
  )
}