import { lazy } from 'react';
import {REGISTRATION, LOGIN, SCHEDULE, STATISTIC, REPEAT, PURPOSE, PURPOSE_SMART} from './utils/consts';
import Purpose from "./pages/Purpose";
import SMART from "./components/purpose/SMART";
const Auth = lazy(() => import('./pages/Auth'));
const Schedule = lazy(() => import('./pages/Schedule'));
const Statistic = lazy(() => import('./pages/Statistic'));
const Repeat = lazy(() => import('./pages/Repeat'));


export const publicRouter = [
    { path: REGISTRATION, Element: Auth },
    { path: LOGIN, Element: Auth },
];
export const privateRouter = [
    { path: SCHEDULE, Element: Schedule },
    { path: STATISTIC, Element: Statistic },
    { path: REPEAT, Element: Repeat },
    {path: PURPOSE, Element: Purpose},
    {path: PURPOSE_SMART, Element: SMART}
];