import { Button } from 'vibe-ui'; 

function App() {

  const handleButtonClick = () => {
    console.log('[click]')
  }

  return (
    <>
      <div>
        <Button onClick={handleButtonClick}>Click me</Button>
      </div>
    </>
  )
} 

export default App
