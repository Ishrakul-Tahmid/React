
import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import Simpleform from './components/Simpleform/Simpleform'
// import SatatefulForm from './components/StatefulForm/SatatefulForm'
// import RefForm from './components/RefForm/RefForm'

function App() {

  const handleSignupSubmit = (data) => {
    console.log('Sifn up data:', data);
}
  const handleUpdateProfile = (data) => {
    console.log('Profile update data:', data);
}

  return (
    <>
      
      <h1>Vite + React</h1>
      {/* <Simpleform></Simpleform> */}
      {/* <SatatefulForm></SatatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={'Sign Up'} submitBtnText='Submit' handleSubmit={handleSignupSubmit}>
        <div>
          <h2>Please SignUp</h2>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} submitBtnText='Update' handleSubmit={handleUpdateProfile}>
        <div>
          <h2>Please Update your profile</h2>
        </div>
      </ReusableForm>
    </>
  )
}

export default App
