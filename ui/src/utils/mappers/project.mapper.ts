import { IProjectFormData } from "../../interfaces/IProjectFormData";

export function fromProjectFormToData (
  formValues: IProjectFormData,
  userId: number,
) {
  return {
    userId: userId,
    name: formValues.name,
    description: formValues.description,
    startingDate: formValues['starting-date'],
    endingDate: formValues['ending-date'],
  }
}