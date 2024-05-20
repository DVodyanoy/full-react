import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
};

export const routeConfig: RouteProps[] = [
    {
        path: routePath.main,
        element: <MainPage />
    },
    {
        path: routePath.about,
        element: <AboutPage />
    }
];