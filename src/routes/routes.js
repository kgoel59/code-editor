
// Layout Types
import DefaultLayout from "layouts/DefaultLayout";

import Main from 'views/Main';

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: Main
  }
];
