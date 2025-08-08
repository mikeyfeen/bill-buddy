import { Button } from "@/components/ui/button"

function App() {

  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div className="flex flex-col items-center w-full align-center justify-center h-screen ">
      <Button onClick={handleClick}>Click me</Button>
    </div>
  )
}

export default App