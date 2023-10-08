import { Route, Routes } from "react-router-dom";
import { Articles } from "@/features/articles/routes/Articles";
import { Article } from "@/features/articles/routes/Article";

export const ArticlesRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Articles/>}/>
      <Route path=":articleId" element={<Article/>}/>
    </Routes>
  )
}