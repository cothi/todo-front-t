import { gql, useMutation } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const COMPLETE_MUTATION = gql`
  mutation KakaoAuth($code: String!) {
    kakaoAuth(input: { code: $code }) {
      accessToken
      refreshToken
    }
  }
`;

function AuthCallback() {
  const [completeAuth, { loading, error }] = useMutation(COMPLETE_MUTATION);
  const location = useLocation();
  const [message, setMessage] = useState('Completing authentication');

  useEffect(() => {
    const searchParam = new URLSearchParams(location.search);
    const code = searchParam.get('code');
    if (code) {
      completeAuth({ variables: { code } })
        .then(({ data }) => {
          console.log('## data', data);
          localStorage.setItem('accessToken', data.kakaoAuth.accessToken);
          localStorage.setItem('refreshToken', data.kakaoAuth.refreshToken);
          setMessage('Authentication successful. Redirecting...');
          setTimeout(() => {
            window.location.href = '/home';
          }, 2000);
        })
        .catch(err => {
          console.error('Authentication error:', err);
          setMessage('Authentication failed. Please try again.');
        });
    } else {
      setMessage('No authentication code found.');
    }
  }, [completeAuth, location]);

  if (loading) return <div>Loading...</div>;
  console.log('errrr', error);
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div>{message}</div>
      <div>카카오 로그인 성공~!</div>
    </>
  );
}

export default AuthCallback;
