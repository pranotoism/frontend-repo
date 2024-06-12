import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5005/api',
});

export const fetchUserData = async (
  uid = 'KeP0RmmaWJYQic8SJZhR',
  token: string
) => {
  const response = await api.get(`/fetch-user-data/${uid}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const updateUserData = async (userData: any, token: string) => {
  const response = await api.put(
    `/update-user-data/KeP0RmmaWJYQic8SJZhR`,
    userData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
