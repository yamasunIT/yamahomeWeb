import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';
import styles from './login-form.module.css';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function LoginForm() {
  const router = useRouter();

  const loginPress = () => {
    // 登入方法寫在這
    
    router.push('/posts/first-post');
  }

  return (
    <div className={styles.login_box + ' p-3'}>
      <h1 className="display-6 mb-3">Login</h1>
      <Formik
        initialValues={{username: '', password: ''}}
        validationSchema={Yup.object({
          username: Yup.string().required('*使用者帳號為必填'),
          password: Yup.string().required('*使用者密碼為必填')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div className="mb-3">
            <Field className="form-control" id="username" name="username" placeholder="使用者名稱" aria-describedby="usernameHelp" />
            <ErrorMessage name="username" />
          </div>
          <div className="mb-3">
            <Field className="form-control" id="password" name="password" placeholder="使用者密碼" type="password" />
            <ErrorMessage name="password" />
          </div>
          <button type="submit" className="btn btn-primary">登入</button>
        </Form>
      </Formik>
    </div>
  );
  };