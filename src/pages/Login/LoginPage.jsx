import React from "react";
import { useState } from "react";
import LoginPageLogic from "./LoginPageLogic";
import ImageAndPar from "./ImageAndPar";
import Footer from "../../components/Footer";

const LoginPage = () => {
  const {
    loginUser,
    handleFormChange,
    registerUser,
    wrongEmail,
    wrongPassword1,
    wrongPassword2,
    wrongPassword,
    wrongUsername,
    wrongForm,
    wrongFormReg,
  } = LoginPageLogic();
  const [register, setRegister] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col xs:flex-col text-gray-200 lg:flex-row w-full bg-slate-700 -translate-y-20 -skew-y-[3.5deg] justify-center gap-32 lg:justify-between px-8 lg:px-28 py-32 items-center">
        <div className="flex flex-col w-full lg:mb-32 skew-y-[3.5deg]  item-center xs:text-center lg:text-left justify-center gap-20">
          <h1 className="tracking-wide font-bold s:text-5xl lg:text-6xl text ">
            Familudget
          </h1>
          <p className="text-3xl">An app to track your income and expenses.</p>
        </div>
        <div className="flex  w-full  skew-y-[3.5deg]  justify-center items-center">
          {register ? (
            <>
              <form
                className="grid card absolute -top-14 xs:right-auto lg:right-0 lg:mt-32 max-w-[500px] place-items-center items-center justify-center w-full grid-cols-1 gap-8"
                onSubmit={registerUser}
              >
                <div className="flex w-[80%] flex-col gap-2">
                  <input
                    className="input text-center w-full"
                    type="email"
                    placeholder="Email*"
                    name="email"
                    onChange={handleFormChange}
                    required
                    style={{
                      border: wrongEmail
                        ? "1px solid red"
                        : "1px solid rgb(156,156,156)",
                    }}
                  />
                  {wrongEmail ? (
                    <p className="text-red-500 text-sm">Email not valid</p>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="flex w-[80%] flex-col gap-2">
                  <input
                    className="input text-center w-full"
                    type="text"
                    placeholder="Username*"
                    name="username"
                    onChange={handleFormChange}
                    required
                    style={{
                      border: wrongUsername
                        ? "1px solid red"
                        : "1px solid rgb(156,156,156)",
                    }}
                  />
                  {wrongUsername ? (
                    <p className="text-red-500 text-sm">Username not valid</p>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="flex w-[80%] flex-col gap-2">
                  <input
                    className="input text-center w-full"
                    type="password"
                    placeholder="Password*"
                    name="password1"
                    onChange={handleFormChange}
                    required
                    style={{
                      border: wrongPassword1
                        ? "1px solid red"
                        : "1px solid rgb(156,156,156)",
                    }}
                  />
                  {wrongPassword1 ? (
                    <p className="text-red-500 text-sm">
                      Password must contain at least: <br />
                      • 8 character <br />
                      • One capital letter <br /> • One number
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="flex w-[80%] flex-col gap-2">
                  <input
                    className="input text-center w-full"
                    type="password"
                    placeholder="Confirm Password*"
                    name="password2"
                    onChange={handleFormChange}
                    required
                    style={{
                      border: wrongPassword2
                        ? "1px solid red"
                        : "1px solid rgb(156,156,156)",
                    }}
                  />
                  {wrongPassword2 ? (
                    <p className="text-red-500 text-sm">
                      Passwords don't match
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
                {wrongFormReg ? (
                  <p className="text-red-500 text-sm">User already exists</p>
                ) : (
                  <></>
                )}
                <input
                  type="submit"
                  className="text-center input w-[40%] text-gray-200 bg-slate-700"
                  value="Register"
                />
                <p className="italic">
                  or{" "}
                  <span
                    className="font-bold underline underline-offset-1 not-italic cursor-pointer"
                    onClick={() => {
                      setRegister(false);
                    }}
                  >
                    login
                  </span>
                </p>
              </form>
            </>
          ) : (
            <>
              <form
                className="grid card absolute -top-8 xs:right-auto lg:right-0 lg:mt-32 max-w-[500px] place-items-center items-center justify-center w-full grid-cols-1 gap-8"
                onSubmit={loginUser}
              >
                <div className="flex w-[80%] flex-col gap-2">
                  <input
                    className="input text-center w-full"
                    type="email"
                    placeholder="Email*"
                    name="email"
                    onChange={handleFormChange}
                    required
                    style={{
                      border: wrongEmail
                        ? "1px solid red"
                        : "1px solid rgb(156,156,156)",
                    }}
                  />
                  {wrongEmail ? (
                    <p className="text-red-500 text-sm">Email not valid</p>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="flex w-[80%] flex-col gap-2">
                  <input
                    className="input text-center w-full"
                    type="password"
                    placeholder="Password*"
                    name="password"
                    onChange={handleFormChange}
                    required
                    style={{
                      border: wrongPassword
                        ? "1px solid red"
                        : "1px solid rgb(156,156,156)",
                    }}
                  />
                  {wrongPassword ? (
                    <p className="text-red-500 text-sm">
                      Password must contain at least 8 character, one capital
                      letter and one number
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
                {wrongForm ? (
                  <p className="text-red-500 text-sm">
                    Wrong username or password
                  </p>
                ) : (
                  <></>
                )}

                <input
                  type="submit"
                  value="Login"
                  className="text-center input w-[40%] text-gray-200 bg-slate-700"
                />
                <p className="italic">
                  or{" "}
                  <span
                    className="font-bold not-italic underline underline-offset-1 cursor-pointer"
                    onClick={() => {
                      setRegister(true);
                    }}
                  >
                    register
                  </span>
                </p>
              </form>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-40 lg:gap-0 items-center mt-96 lg:mt-0 justify-center w-full ">
        <ImageAndPar
          img={require("../../assets/summary.png")}
          title="Categorised overview of your cashflow"
          parag="Quickly visualize income and expenses in categories, month by month"
          pos={"-1"}
        />
        <ImageAndPar
          img={require("../../assets/listitems.png")}
          title="List of individual entries"
          parag="See how much you have spent or earned, when and on what"
          pos={"1"}
        />
        <ImageAndPar
          img={require("../../assets/addnew.png")}
          title="Entry options"
          parag="Add and edit entries, tags, categories and dates"
          pos={"-1"}
        />
        <ImageAndPar
          img={require("../../assets/settings.png")}
          title="Support for many currencies"
          parag="Specify your preferred settings"
          pos={"1"}
        />
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
