import React from 'react';
import { Result, Button } from 'antd';
import './App.less';

function App() {
  return (
    <div >
      <Result
        status="success"
        title="Welcome to React"
        subTitle="This boilerplate is created using create-react-app with typescript and antd configured."
        extra={[
          <Button type="link" target="_blank" href="https://reactjs.org">Learn React</Button>
        ]}
      />



    </div>
  );
}

export default App;
