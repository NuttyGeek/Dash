import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import { Button } from "../components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/card";
import { Input } from "../components/input";
import { Label } from "../components/label";
import * as Yup from "yup";

const loginValidationSchema = Yup.object({
  email: Yup.string().required("Email is Required"),
  password: Yup.string().required("Password is Required"),
});
export const LoginPage = () => {
//   const formik = useFormik();

  return (
    <Formik
      onSubmit={() => { alert('submit')}}
      onReset={(e) => {}}
      validationSchema={loginValidationSchema}
      initialValues={{ email: "", password: "" }}
    >
        {({errors, touched}) => (
             <Form>
             <Card className="w-full max-w-sm mx-auto">
               <CardHeader>
                 <CardTitle className="text-2xl">Login</CardTitle>
                 <CardDescription>
                   Enter your email below to login to your account.
                 </CardDescription>
               </CardHeader>
               <CardContent className="grid gap-4">
                 <div className="grid gap-2">
                   <Label htmlFor="email" className="text-left">Email</Label>
                   <Field name={"email"} placeholder={"Email"} component={Input} className={errors?.password ? 'border-2 border-red-500': ''} />
                   {/* <Input id="email" name={'email'} type="email" placeholder="m@example.com" required /> */}
                   <ErrorMessage component={'span'} name={'email'} className="text-red-500 text-left text-sm"/>
                   {/* {formik?.errors?.email && <p>{formik?.errors?.email}</p>} */}
                 </div>
                 <div className="grid gap-2">
                   <Label className="text-left" htmlFor="password">Password</Label>
                   <Input id="password" type="password" className={errors?.password ? 'border-2 border-red-500': ''} />
                   <ErrorMessage component={'span'} name={'password'} className="text-red-500 text-left text-sm"/>
                 </div>
               </CardContent>
               <CardFooter>
                 <Button type={"submit"} className="w-full">
                   Login
                 </Button>
               </CardFooter>
             </Card>
           </Form>
        )}
     
    </Formik>
  );
};
