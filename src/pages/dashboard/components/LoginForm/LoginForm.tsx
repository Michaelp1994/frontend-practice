import React from "react";
import styled from "styled-components";
import { FiUser, FiLock } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <Wrapper>
      <UsernameInputWrapper>
        <UsernameInput placeholder="Username" />
        <UsernameIcon />
      </UsernameInputWrapper>
      <PasswordInputWrapper>
        <PasswordInput type="password" placeholder="Password" />
        <PasswordIcon />
      </PasswordInputWrapper>
      <Row>
        <Label>
          <RememberMeCheckbox id="rememeberMe" type="checkbox" />
          Remember me
        </Label>
        <ForgotLink to="#">Forgot Password</ForgotLink>
      </Row>
      <SubmitButton type="submit" onClick={handleSubmit}>
        Log in
      </SubmitButton>
      <RegisterRow>
        Or <RegisterLink to="#">register now!</RegisterLink>
      </RegisterRow>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 32px;
`;

const RegisterRow = styled.div``;
const UsernameInputWrapper = styled.div`
  position: relative;
  margin-bottom: 32px;
`;
const UsernameInput = styled.input`
  padding: 10px 8px 10px 34px;
  width: 100%;
`;

const UsernameIcon = styled(FiUser)`
  position: absolute;
  margin: auto 8px;
  left: 0px;
  top: 0px;
  bottom: 0px;
  width: 24px;
  height: 24px;
  color: black;
`;
const PasswordInputWrapper = styled.div`
  position: relative;
  border: 1px black solid;
  margin-bottom: 32px;
`;
const PasswordInput = styled.input`
  padding: 10px 8px 10px 34px;
  width: 100%;
`;
const PasswordIcon = styled(FiLock)`
  position: absolute;
  margin: auto 8px;
  left: 0px;
  top: 0px;
  bottom: 0px;
  width: 24px;
  height: 24px;
  color: black;
`;

const Label = styled.label``;

const RememberMeCheckbox = styled.input`
  accent-color: var(--primary-color);
  margin-right: 8px;
  height: 1rem;
  width: 1rem;
`;
const ForgotLink = styled(Link)`
  color: var(--primary-color);
  text-decoration: none;
`;
const RegisterLink = styled(Link)`
  color: var(--primary-color);
  text-decoration: none;
`;
const SubmitButton = styled.button`
  background-color: var(--primary-color);
  padding: 4px;
  color: var(--text-on-primary-color);
  border: none;
  cursor: pointer;
`;

export default LoginForm;
