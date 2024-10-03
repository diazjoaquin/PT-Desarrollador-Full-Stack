import { Form, Formik } from "formik"
import { FormField } from "../../common/components/FormField"
import { Button } from "../../common/components/Button"
import { signInSchema } from "../../validators/signIn.schema"
import { IApiService } from "../../interfaces/IApiService";
import { FormValues } from "../../hooks/useSignIn";
import { Notification } from "../../types/notification.type";

interface SignInProps {
	apiService: IApiService;
  handleSubmit: (
    values: FormValues, 
    apiService: IApiService, 
    getNotification: (type: Notification, msg: string) => void) => void;
  initialValues: FormValues;
  loading: boolean;
  getNotification: (type: Notification, msg: string) => void;
}

export const SignInForm: React.FC<SignInProps> = ({ 
  apiService, 
  handleSubmit, 
  initialValues, 
  loading, 
  getNotification }) => {

  
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:py-24 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {handleSubmit(values, apiService, getNotification)}}
          validationSchema={signInSchema}
        >
          {() => (
          <Form className="space-y-6">
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
            <div>
              <p
                className="mt-5 text-center text-sm text-gray-500"
              >
                Not a member?{' '}
                <a
                  href="/sign-up"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 pb-2"
                >
                  Sign up
                </a>
              </p>
              <Button
              loading={loading}
              type="submit"
              label="Sign in"
              />
            </div>
          </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}