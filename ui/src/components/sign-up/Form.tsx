import { Form, Formik } from "formik"
import { FormField } from "../../common/components/FormField"
import { Button } from "../../common/components/Button"
import { signUpSchema } from "../../validators/signUp.schema"
import { IApiService } from "../../interfaces/IApiService"
import { FormValues } from "../../hooks/useSignUp"
import { Notification } from "../../types/notification.type"

interface SignUpFormProps {
	apiService: IApiService;
  handleSubmit: (
    values: FormValues, 
    apiService: IApiService, 
    getNotification: (type: Notification, msg: string) => void) => void;
  initialValues: FormValues;
  loading: boolean;
  getNotification: (type: Notification, msg: string) => void;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ 
  apiService, 
  handleSubmit, 
  initialValues, 
  loading,
  getNotification }) => {

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:py-14 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-5 tracking-tight text-gray-900">Sign up</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => handleSubmit(values, apiService, getNotification)}
          validationSchema={signUpSchema}
        >
          {() => (
          <Form className="space-y-4">
            <FormField
            type="text"
            name="name"
            label="Name"
            id="name"
            placeHolder="Your name"
            required
            />
            <FormField
            type="email"
            name="email"
            label="Email address"
            id="email"
            placeHolder="Email address"
            required
            />
            <FormField
            type="password"
            name="password"
            label="Password"
            id="password"
            placeHolder="Your password"
            required
            />
            <FormField
            type="password"
            name="confirm-password"
            label="Confirm Password"
            id="confirm-password"
            placeHolder="Confirm your password"
            required
            />
            <div className="pt-4">
              <p
                className="mt-5 text-center text-sm text-gray-500 pb-2"
              >
                Already a member?{' '}
                <a
                  href="/sign-in"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Sign in
                </a>
              </p>
              <Button
              loading={loading}
              type="submit"
              label="Sign up"
              />
            </div>
          </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}