import {FaGithub, FaFacebook} from "../node_modules/react-icons/fa"
import {FcGoogle} from "../node_modules/react-icons/fc"

export default function Form() {
  return (
    <section className="flex flex-col h-full w-1/2 justify-center ">
        <form className="w-2/5  m-auto">
            <p className="text-center text-lg font-medium">Sign in</p>
            <input className="bg-slate-200 p-3 w-full my-4 text-xl rounded focus:border-gray-500 focus:ring-0" type="email" placeholder="Enter email"/>
            <br />
            <input className=" bg-slate-200 p-3 w-full my-4 text-xl rounded" type="password" placeholder="Password"/>
            <br/>      
            <br/>     
            <p className="text-center text-lg font-medium">Or continue with</p>
            <br/> 
            <button className="bg-black text-white my-4 p-3 w-full rounded text-xl hover:shadow-xl" placeholder="Github" title="Github"><FaGithub className="m-auto" size="32"/></button>
            <br/>            
            <button className="justify-center bg-white text-black my-4 p-2 w-full rounded text-xl border-2 hover:shadow-xl" ><FcGoogle className="m-auto" size="36"/></button>
            <br/>            
            <button className="bg-blue-700 text-white my-4 p-3 w-full rounded text-xl hover:shadow-xl" ><FaFacebook className="m-auto" size="32"/></button>
        </form>
    </section>
  )
}
