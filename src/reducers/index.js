import { combineReducers } from 'redux';
import Login from './Login';
import MenuBar from './MenuBar';
import Register from './Register';
import PhotoGalery from './PhotoGalery';
import AccountManagement from './AccountManagement';
import UserGalery from './UserGalery';
import PhotoUpload from './PhotoUpload';
import PhotoDetails from './PhotoDetails';
import UserProfileForm from './UserProfileForm';
import PlatformStatistics from './PlatformStatistics';

export default combineReducers({
  Login,
  MenuBar,
  Register,
  PhotoGalery,
  AccountManagement,
  UserGalery,
  PhotoUpload,
  PhotoDetails,
  UserProfileForm,
  PlatformStatistics,
});
