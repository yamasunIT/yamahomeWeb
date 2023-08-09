import { useRouter } from 'next/router';
import Link from 'next/link';

import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Layout } from '../../components/account';

export default function Register() {
    const router = useRouter();

    const loginPress = (values) => {
      // 註冊方法寫在這
        console.log(values);
    }

    return (
        <Layout>
            <div className="card">
                <h4 className="card-header">使用者註冊</h4>
                <div className="card-body">
                    <Formik
                        initialValues={{username: '', password: '', passwordCheck: ''}}
                        validationSchema={Yup.object({
                        username: Yup.string().required('*使用者帳號為必填'),
                        password: Yup.string().required('*使用者密碼為必填'),
                        passwordCheck: Yup.string().required('*使用者密碼為必填'),
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
                            <div className="mb-3">
                                <Field className="form-control" id="passwordCheck" name="passwordCheck" placeholder="再輸入一次密碼" type="password" />
                                <ErrorMessage name="passwordCheck" />
                            </div>
                            <button type="submit" className="btn btn-primary">註冊</button>
                            <Link href="/account/login" className="btn btn-link">取消</Link>
                        </Form>
                    </Formik>
                </div>
            </div>
        </Layout>
    );
}