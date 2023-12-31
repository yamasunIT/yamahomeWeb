import { useRouter } from 'next/router';
import Link from 'next/link';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Layout } from '../../components/account/Layout';
import { userService } from '../../helpers/api/user';

export default function Login() {
    const router = useRouter();

    const loginPress = async (values) => {
      const res = await userService.login(values.username,values.password)
      if(res.statusCode == 200){
        localStorage.setItem('user-name', res.data);
        router.push('/dashboard/home');
      }
      else{
        alert('登入失敗');
      }
    }

  return (
    <Layout>
      <div style={{height: '69vh'}}>
        <div className="card" >
          <h4 className="card-header">使用者登入</h4>
          <div className="card-body">
            <Formik
              initialValues={{username: '', password: ''}}
              validationSchema={Yup.object({
                username: Yup.string().required('*使用者帳號為必填'),
                password: Yup.string().required('*使用者密碼為必填')
              })}
              onSubmit={(values) => {loginPress(values);}}
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
                <Link href="/account/register" className="btn btn-link">註冊</Link>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </Layout>
  );
}