import "../css/login.css"
import logo from '../imgs/logo.png'
import google from '../imgs/Google.png'
import { useNavigate } from "react-router-dom"
// import Signup from './SignUp';
const Signin = () => {
    const navigate = useNavigate();
    const ChangePath = () => {
        navigate("/");
    };
    const ChangeToMain = () => {
        navigate("/main");
    };
    return (  
        <div className="flex flex-row h-screen">
            <div className="basis-1/2 bg-black relative ">
                <div className="h-full flex flex-col left-side  text-white">
                    <div className="basis-1/4 flex items-center  font-medium">
                        <img className="logo" src={logo}alt="" />
                        <span className="  ml-2  text-4xl">
                            Greens
                        </span>

                    </div>

                  <div className="flex justify-center items-center basis-2/4">
                        <div className=" text-7xl text-left font-semibold " >
                            With Greens you can make your files managing easier
                        </div>
                  </div>
                  <div className="basis-1/4 flex items-center">
                            <div className=" text-2xl text-left">
                                all the rights saved for GreenHackers
                            </div>
                  </div>
                </div>
            </div> 
            <div className="basis-1/2 flex items-center justify-center relative ">
                 <div className="auth-box flex flex-col">
                    <div className="">
                        <p className="text-balck text-4xl text-left font-bold">Sign in</p>
                        <p className="text-black text-sm text-left ">don't have an Account ? <span onClick={ChangePath} className="text-cyan-400 create"> Create </span> </p>
                    </div>
                    <div className="mt-3">
                        <div className="flex flex-col space-y-3">
                            {/* <div className="flex flex-row space-x-4">
                                    <div className="basis-1/2 relative">
                                        <input type="text" className="w-full inputs" placeholder="First name" required />
                                    </div>
                                    <div className="basis-1/2 relative ">
                                        <input type="text" className="w-full inputs" placeholder="Last name"  required />
                                    </div>
                            </div> */}
                            <div className="">
                                <input type="email" className="w-full inputs" placeholder="Email"  required />
                            </div>
                            <div className="">
                                <input type="password" className="w-full inputs" placeholder="Password"  required  />
                            </div>
                        </div>
                    </div>
                    <div  className="text-left mt-2">
                        <div className="flex flex-row space-x-2">
                         <div><input className="inputs" type="checkbox" /></div>
                         <div className="flex items-center"><span className="text-xs"> i agree to DopeBass <span className="text-cyan-600">Terms of service </span>and <span className="text-cyan-600">Privacy policy</span> </span></div>
                        </div>
                    </div>
                    <div className="mt-3  buttons">
                        <div  className="flex flex-col space-y-3">
                            <div>
                            <input onClick={ChangeToMain} className="text-white bg-black" type="button" value="Login" />
                            </div>
                            <div>
                                <hr />
                            </div>
                            {/* <div className="flex w-full">
                                 <div className="basic-2/5 border-t-4 border-2 border-slate-900"></div>
                                 <div className="basic-1/5 ">or</div>
                                 <div className="basic-2/5 border-t-4 border-2 border-slate-900"></div>
                            </div> */}
                            <div>
                            <button  className="relative">
                                <img className="google" src={google} alt="" />
                                <span className="font-medium ">Continue with google</span>
                            </button>
                            </div>
                        </div>
                    </div>

                 </div>
            </div>
        </div>
    );
}
 
export default Signin;