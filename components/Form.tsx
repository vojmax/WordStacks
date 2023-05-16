

export default function Form() {
  return (
    <section className="flex flex-col h-full w-1/2 justify-center ">
        <form className="w-2/5  m-auto">
            <p className="text-center text-lg font-semibold">Sign in</p>
            <input className="bg-slate-200 p-3 w-full my-4 text-xl rounded" type="email" placeholder="Enter email"/>
            <br />
            <input className="bg-slate-200 p-3 w-full my-4 text-xl rounded" type="password" placeholder="Password"/>
            <br/>            
            <button className="bg-black text-white my-4 p-3 w-full rounded text-xl hover:shadow-lg" >Github</button>
            <br/>            
            <button className="bg-white text-black my-4 p-3 w-full rounded text-xl border hover:shadow-lg" >Google</button>
            <br/>            
            <button className="bg-blue-700 text-white my-4 p-3 w-full rounded text-xl hover:shadow-lg" >Facebook</button>

        </form>
    </section>
  )
}
