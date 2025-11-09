import Hello from "../../components/hello";


const HomePage = () => {

  console.log("Hello from the HomePage component!");

  return (
    <main>
      <div className="text-5xl underline text-orange-500">
        Hello World!! &#x1f383; 
      </div>
      <Hello />
    </main>
  )
}

export default HomePage