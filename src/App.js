import {Route, Switch} from 'react-router-dom';
import AddMeetUpPage from './pages/AddMeetup';
import FavouriteMeetUpPage from './pages/FavouriteMeetup';
import ViewMeetUpPage from './pages/ViewMeetups';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact={true}>
          <ViewMeetUpPage/>
        </Route>

        <Route path="/add-meetup">
          <AddMeetUpPage/>
        </Route>

        <Route path="/favourite">
          <FavouriteMeetUpPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
