import React, { useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import {
  updateUserDataRequest,
  updateUserDataSuccess,
  updateUserDataFailure,
  fetchUserDataFailure,
  fetchUserDataRequest,
  fetchUserDataSuccess,
} from '../store/userSlice';
import { fetchUserData, updateUserData } from '../apis/userApi';
import { auth } from '../apis/firebaseConfig';
import { useAppDispatch, useAppSelector } from '@/store/store';

const UpdateButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state: any) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchUserDataRequest());
      const token = localStorage.getItem('accessToken');
      if (token) {
        try {
          const userData = await fetchUserData('KeP0RmmaWJYQic8SJZhR', token);

          dispatch(fetchUserDataSuccess(userData));
        } catch (error: any) {
          dispatch(fetchUserDataFailure(error.message));
        }
      } else {
        dispatch(fetchUserDataFailure('User not logged in'));
      }
    };
    fetchData();
  }, [dispatch]);

  const handleUpdate = async () => {
    dispatch(updateUserDataRequest());
    const access = localStorage.getItem('accessToken');
    const user = auth.currentUser;
    if (user && access) {
      try {
        const token = await user.getIdToken();
        await updateUserData({ age: data.age + 1 }, token);
        dispatch(updateUserDataSuccess({ age: data.age + 1 }));
      } catch (error: any) {
        dispatch(updateUserDataFailure(error.message));
      }
    } else {
      dispatch(updateUserDataFailure('User not logged in'));
    }
  };

  return (
    <div>
      <Button onClick={handleUpdate} disabled={loading}>
        Update Data
      </Button>
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color='error'>{error}</Typography>}
      {data && <Typography>Age: {data.age}</Typography>}
    </div>
  );
};

export default UpdateButton;
