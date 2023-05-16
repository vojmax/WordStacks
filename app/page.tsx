import Form from "@/components/Form";


export default function Home() {
  return (
    <main className="flex flex-row bg-slate-50 h-full ">
      <div className="flex flex-col h-full w-1/2 justify-center text-center " >
            <h1 className=" align-middle mt-5 text-3xl font-extrabold text-black sm:text-4xl ">
              Welcome to the word stacks
              <br className="max-md:hidden"/>
              <span className="text-center text-3xl text-purple-700">Login to continue to the dashboard</span>
            </h1>
      </div>
      <Form/>
    </main>
  )
}
