import { useState } from "react"
import { LoginForm } from "./components/LoginForm"
import { SignUpForm } from "./components/SignUpForm"

function App() {
  const [isRegister, setIsRegister] = useState<boolean>(false)

  const toggleState = (state: boolean) => {
    setIsRegister(state);
  }

  return (
    <div className="flex items-center justify-center h-screen bg-[#FFFFFF] p-4 font-sans">
      {isRegister ? (
        <LoginForm onClick={toggleState} state={isRegister} />
      ) : (
        <SignUpForm onClick={toggleState} state={isRegister} />
      )}
    </div>
  )
}

export default App