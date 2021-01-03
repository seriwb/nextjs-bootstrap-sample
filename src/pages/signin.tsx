import { Layout } from "../components/layouts/signin";
import styled from "styled-components";
import { NextPage } from "next";
import * as application from "../constants/application";

const SigninPage: NextPage = () => {
  return (
    <Layout title={`Signin Template · ${application.TITLE}`}>
      <S_SinginForm className="form-signin text-center">
        <img className="mb-4" src="bootstrap-logo.svg" alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="visually-hidden">
          Email address
        </label>
        <S_EmailForm
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required={true}
          autoFocus={true}
        />
        <label htmlFor="inputPassword" className="visually-hidden">
          Password
        </label>
        <S_PasswordForm type="password" id="inputPassword" className="form-control" placeholder="Password" required={true} />
        <S_Checkbox className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </S_Checkbox>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
      </S_SinginForm>
    </Layout>
  );
};

export default SigninPage;

// ------------ Style settings ------------
const S_SinginForm = styled.form`
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
`;

const S_Checkbox = styled.div`
  font-weight: 400;
`;

const S_Form = styled.input`
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;

  &:focus {
    z-index: 2;
  }
`;

const S_EmailForm = styled(S_Form)`
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
`;

const S_PasswordForm = styled(S_Form)`
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;
