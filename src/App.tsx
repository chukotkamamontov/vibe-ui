import { Button } from 'champ-ui'; 
import 'champ-ui/index.css';

function App() {

  const handleButtonClick = () => {
    console.log('[click]');
  }

  return (
    <>
      <div>
        <Button variant='primary' onClick={handleButtonClick}>Click me</Button>
      </div>
    </>
  )
};

export default App;
