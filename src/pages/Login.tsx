import { useState } from 'react';
import { STYLES } from '../styles';
import { useAppDispatch } from '../stores/hooks';
import { setUserData } from '../stores/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [usernameInput, setUsernameInput] = useState<string | null>('');
  const [passwordInput, setPasswordInput] = useState<string | null>('');
  const dispatch = useAppDispatch();
  const naviagate = useNavigate();

  const loginHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_HOST_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: usernameInput,
          password: passwordInput,
        }),
      });
      const data = await res.json();

      const customerPoint = await fetch(
        `${import.meta.env.VITE_HOST_URL}/customer-package/get?customer_id=${
          data.id
        }`
      );

      const customerPointData = await customerPoint.json();
      console.log(customerPointData);
      const customerPoints = customerPointData.map((cus: any) => ({
        packge_id: cus['package_id'].id,
        currentPoints: cus.points,
      }));

      dispatch(
        setUserData({ data: { ...data, currentPointsAry: customerPoints } })
      );
      naviagate('/');
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div
      className={`${STYLES.max_width} ${STYLES.margin_center} ${STYLES.paddingX} ${STYLES.paddingY} h-[calc(100vh-70px)]  flex items-center justify-center`}
    >
      <form onSubmit={loginHandle} className="flex flex-col">
        <h3>Login Page</h3>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsernameInput(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <button className="bg-green-200">Login</button>
      </form>
    </div>
  );
};

export default Login;
