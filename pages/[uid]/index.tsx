import React from 'react';
import { Typography } from '@mui/material';
import { fetchUserData } from '../../apis/userApi';
import UpdateButton from '@/components/UpdateButton';

const Home: React.FC = (userData: any) => {
  return (
    <div>
      <Typography variant='h4'>
        {userData?.userData?.name ?? 'User'}&apos;s Page
      </Typography>
      <UpdateButton />
    </div>
  );
};

export const getServerSideProps = async ({
  params,
}: {
  params: { uid: string };
}) => {
  let userData;

  try {
    const token =
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IjMzMDUxMThiZTBmNTZkYzA4NGE0NmExN2RiNzU1NjVkNzY4YmE2ZmUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZWJ1ZGR5LTU0Yjk0IiwiYXVkIjoiZWJ1ZGR5LTU0Yjk0IiwiYXV0aF90aW1lIjoxNzE4MTMwMTAzLCJ1c2VyX2lkIjoiUUk0RnhWaUdybGh1VVpMZTJQWTZoZzZ6VXlhMiIsInN1YiI6IlFJNEZ4VmlHcmxodVVaTGUyUFk2aGc2elV5YTIiLCJpYXQiOjE3MTgxMzAxMDMsImV4cCI6MTcxODEzMzcwMywiZW1haWwiOiJnaG9iYXk3NEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZ2hvYmF5NzRAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.CSQJ4lfO0CX2Q00lnxkIni7Jb204tRJcSWqnkI9IU-2aBatS5p8vcVWEje1x-YQ7UGqePaU9lID9wANklHFDCbkw4ekcw_vTV0gkPNiiLvgZMJgdzlErtQl1kILbjMTFAJ7LUZmqOEFLOX8IkGB0bFoybZxL61s-_vQqfop-NRAx_MBzK4ElIPJARAeBscscXEeeMwHd5OutlH89L0UZV-fU1zVwOq-TtsM5UW3OFRRqbGtrvTB_JRG1vsAMRljiT84-rI_cxo7eop7VfOgrVw7z4rfzTMfN-rcs_8gi_S32TEv9gTWbH_ntYsp4O6-ruHJHir0qroIZXFRGhtudHw';

    userData = await fetchUserData(params.uid, token);
  } catch (error: any) {
    console.log(error);
  }

  return {
    props: {
      userData,
    },
  };
};

export default Home;
