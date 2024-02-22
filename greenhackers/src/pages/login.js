import "../css/login.css"
import logo from '../imgs/logo.png'
const Login = () => {
    return (  
        <div className="flex flex-row h-screen">
            <div className="basis-1/2 bg-black relative ">
                <div className="h-full flex flex-col left-side  text-white">
                    <div className="basis-1/4 flex items-center  font-medium">
                        <img src={logo}alt="" />
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
                    <div className="mrt ">
                        <p className="text-balck text-2xl text-left font-bold">Create account</p>
                        <p className="text-black text-sm text-left ">Already have an account ? <span className="text-cyan-400"> Login </span> </p>
                    </div>
                    <div className="mrt ">
                        <div className="flex flex-row">
                                <div className="basis-1/2 relative">
                                    <input type="text" className="w-full" placeholder="First name" required />
                                </div>
                                <div className="basis-1/2 relative ">
                                    <input type="text" className="w-full" placeholder="Last name"  required />
                                </div>
                        </div>
                        <div className="">
                            <input type="email" className="w-full" placeholder="Email"  required />
                        </div>
                        <div className="">
                            <input type="password" className="w-full" placeholder="Password"  required  />
                        </div>
                    </div>
                    <div  className="text-left mt-1">
                        <input type="checkbox" /> <span> i agree to DopeBass <span>Terms of service </span>and <span>Privacy policy</span> </span>
                    </div>
                    <div className="mrt ">
                        <div>
                            <div>
                            <input type="button" value="Create Account" />
                            </div>
                            <div>
                                 
                            </div>
                            <div>
                            <input type="button" value="Continue with google" />
                            </div>
                        </div>
                    </div>

                 </div>
            </div>
        </div>
    );
}
 
export default Login;