import React, { useCallback } from "react";
import { LoginContainer, LoginError, LoginForm } from "./Login.styles";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface FormTypes {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormTypes>();
  const onSubmit = useCallback((data: FormTypes) => {
    console.log(data);
  }, []);
  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <div className="login-title">
          <div className="login-title-wrapper-1 showup">
            <h1>Hello, &nbsp;</h1>
          </div>
          <div className="login-title-wrapper-2 reveal">
            <h1>
              Jun & Hyo&nbsp;<span>👋</span>
            </h1>
          </div>
        </div>
        <div className="login-contents">
          <div className="login-contents-wrapper">
            <input
              type="text"
              placeholder="이메일"
              {...register("email", {
                required: "이메일을 입력해주세요",
                pattern: {
                  value:
                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                  message: "이메일을 정확하게 입력해주세요",
                },
              })}
            />
            <AiOutlineUser />
            <ErrorMessage
              name="email"
              errors={errors}
              render={({ message }) => (
                <LoginError>
                  <p>{message}</p>
                </LoginError>
              )}
            />
          </div>
          <div className="login-contents-wrapper">
            <input
              type="password"
              placeholder="비밀번호"
              {...register("password", { required: "비밀번호를 입력해주세요" })}
            />
            <AiOutlineLock />
            <ErrorMessage
              name="password"
              errors={errors}
              render={({ message }) => (
                <LoginError>
                  <p>{message}</p>
                </LoginError>
              )}
            />
          </div>
        </div>
        <div className="login-button">
          <button type="submit">로그인</button>
        </div>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
