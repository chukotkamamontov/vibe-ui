import { Button } from 'champ-ui';

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
