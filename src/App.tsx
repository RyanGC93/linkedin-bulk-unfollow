import './App.css'
import ScrollAndUnfollowButton from './ScrollAndUnfollowButton'

function App() {

  return (
    <>
      <h1>Scroll And Unfollow </h1> 
      <h1>Linked In Button</h1>
      <p>This is used to mass unfollow LinkedIn pages</p>
      <ScrollAndUnfollowButton /> 
      <p className="read-the-docs">
        Just click the button to start unfollowing pages
      </p>
      <p>
        Note that this uses timeouts and is dependendant on network request time
        If there is still more to unfollow reset page and reclick the button
      </p>
    </>
  )
}

export default App
