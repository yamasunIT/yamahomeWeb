import { useRouter } from 'next/router';
import Link from 'next/link';
import { userService } from '../../helpers/api/user';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Layout } from '../../components/account/Layout';

export default function Register() {
    const router = useRouter();

    const loginPress = async(values) => {
      // 註冊方法寫在這
        if(values.password != values.passwordCheck) {
            alert('密碼必須一致');
            return;
        }else {
            const res=await userService.register(values.account, values.password, values.userName);
            console.log(res);
                if(res.statusCode == 200){
                    alert('註冊成功');
                    router.push('/account/login');
                }else {
                    alert('註冊失敗');
                    return;
                }
        }
    }

    return (
        <Layout>
            <div className="card">
                <h4 className="card-header">使用者註冊</h4>
                <div className="card-body">
                    <Formik
                        initialValues={{account: '', userName: '', password: '', passwordCheck: ''}}
                        validationSchema={Yup.object({
                            userName: Yup.string().required('*使用者名稱為必填'),
                            account: Yup.string().required('*使用者帳號為必填'),
                            password: Yup.string().required('*使用者密碼為必填'),
                            passwordCheck: Yup.string().required('*使用者密碼為必填'),
                    })}
                    onSubmit={(values) => {loginPress(values);}}
                    >
                        <Form>
                            <div className="mb-3">
                                <Field className="form-control" id="userName" name="userName" placeholder="使用者名稱" aria-describedby="userNameHelp" />
                                <ErrorMessage name="userName" />
                            </div>
                            <div className="mb-3">
                                <Field className="form-control" id="account" name="account" placeholder="使用者帳號" aria-describedby="accountHelp" />
                                <ErrorMessage name="account" />
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