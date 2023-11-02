import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import router from './router/router';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
