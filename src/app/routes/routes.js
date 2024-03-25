import {Routes, Route} from "react-router-dom"
import { MainPage } from "../../pages/main-page/main-page"
import { PostPage } from "../../pages/post-page/post-page"
import { ErrorPage } from "../../pages/error-page/error-page"

export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/post/:todoId" element={<PostPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}