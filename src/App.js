import { Route, Routes } from "react-router-dom";
import UserRegistrationForm from "./components/UserRegistrationForm";
import RegistrationConfirmation from "./components/RegistrationConfirmation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserRegistrationForm />} />
      <Route path="/success/:id" element = {<RegistrationConfirmation />} />
    </Routes>
  )
}

export default App;
