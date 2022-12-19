import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    }
  ];

  const consoleLog = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    console.log('Clicked', e, id )
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  const styleObj = {
    border: '1px solid black',
    padding: '1rem'
  }

  return (
    <div className='App'>
      {/* <Greet name="Kenny" messageCount={5} isLoggedIn={false}  />
      <Person name={personName} />
      <PersonList list={nameList} /> */}
      {/* <Status status='loading' />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Greet name="Kenny" isLoggedIn={true} messageCount={10} /> */}
      {/* <Button handleClick={(event, id) => consoleLog(event, id)} />
      <Input value='' handleChange={(e) => handleInput(e) } /> */}
      <Container styles={styleObj} />
    </div>
  );
}

export default App;
