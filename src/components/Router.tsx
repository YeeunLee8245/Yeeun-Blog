import Home from '@pages/home';
import LoginPage from '@pages/login';
import PostList from '@pages/posts';
import PostDetail from '@pages/posts/detail';
import PostEdit from '@pages/posts/edit';
import PostNew from '@pages/posts/new';
import ProfilePage from '@pages/profile';
import SignUpPage from '@pages/signup';
import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function Router() {
  // firebase Auth 인증 => true
  const [isAuthenticated, setIsAuthen] = useState<boolean>(false);
  return (
    <>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/posts/new" element={<PostNew />} />
            <Route path="/posts/edit/:id" element={<PostEdit />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            {/* 기본 Path 설정 */}
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<LoginPage />} />
          </>
        )}
      </Routes>
    </>
  );
}
