import React, { FC } from "react"
import axios from 'axios';
import getCsrfToken from "../utils/getCsrfToken"

const postTest = async () => {
  const token = getCsrfToken();
  const conn = axios.create({ headers: { 'X-CSRF-TOKEN': token } });
  const res = await conn.post('/v1/users');
  console.log(token, res);
}

const Application: FC<{ initData: any }> = ({ initData }) => {
  postTest().then(postTest).then(postTest);
  return (
    <React.Fragment>
      Init Data: {initData.path}
    </React.Fragment>
  );
};

export default Application
