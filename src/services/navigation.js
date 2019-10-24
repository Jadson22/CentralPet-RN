import { NavigationActions } from 'react-navigation';
let nav;

function setTopLevelNavigator(navigatorRef) {
  nav = navigatorRef;
}

function navigate(routeName, params) {
  nav.dispatch(NavigationActions.navigate({ routeName, params }));
}

function back() {
  nav.dispatch(NavigationActions.back());
}

export default { setTopLevelNavigator, navigate, back };