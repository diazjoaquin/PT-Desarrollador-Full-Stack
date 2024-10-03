import { Form, Formik } from "formik";
import { FormField } from "../../common/components/FormField";
import { DatePicker } from "../../common/components/DataPicker";
import { Button } from "../../common/components/Button";
import { createProjectSchema } from "../../validators/createProject.schema";
import { IProjectFormData } from "../../interfaces/IProjectFormData";
import { Notification } from "../../types/notification.type";

interface CreateProjectFormProps {
  handleCloseModal: () => void;
  isOpen: boolean;
  handleSubmit: (
    values: IProjectFormData,
    getNotification: (type: Notification, msg: string) => void
  ) => void;
  initialValues: IProjectFormData;
  getNotification: (type: Notification, msg: string) => void
}

export const CreateProjectForm: React.FC<CreateProjectFormProps> = ({
  handleCloseModal,
  isOpen,
  handleSubmit,
  initialValues,
  getNotification,
}) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="absolute z-0 inset-0 bg-black opacity-50"></div>
      <div className="flex z-20 flex-col border-2 items-center justify-center w-3/5 lg:w-2/5 h-5/6 lg:h-4/5 bg-white rounded-xl">
        <button
          className="pb-2"
          onClick={handleCloseModal}
        >
          <span className="text-red-600 font-bold text-md underline">close</span>
        </button>
        <h1 className="text-xl font-bold text-black">Create new Project</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => handleSubmit(values, getNotification)}
          validationSchema={createProjectSchema}
        >
          {() => (
            <Form
            className="flex flex-col justify-center gap-2 lg:h-4/5 w-4/5">
              <FormField
                type="text"
                name="name"
                label="Name"
                id="name"
                placeHolder="Project name"
                required
              />
              <FormField
                type="text"
                name="description"
                label="Description"
                id="description"
                placeHolder="Project Description"
                required
              />
              <DatePicker
								label={'Starting date'}
								name={'starting-date'}
								id={'starting-date'}
								required={true}
							/>
              <DatePicker
								label={'Ending date'}
								name={'ending-date'}
								id={'ending-date'}
								required={true}
							/>
              <div className="pt-6">
                <Button
                  label="Create"
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