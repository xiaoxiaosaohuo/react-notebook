import UserContext from './userContext';

function User() {
  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context
  return (
    <UserContext.Consumer >
      {({name,setName}) => (
        <button
        onClick={setName}
          >
          {name}
        </button>
      )}
    </UserContext.Consumer>
  );
}

export default User;