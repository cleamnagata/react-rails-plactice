import React, { FC, WeakValidationMap } from "react"
import PropTypes from "prop-types"
import axios from 'axios';
import getCsrfToken from "../utils/getCsrfToken"

const postTest = async () => {
  const token = getCsrfToken();
  const conn = axios.create({ headers: { 'X-CSRF-TOKEN': token } });
  const res = await conn.post('/v1/users');
  console.log(token, res);
}

type User = {
  id: number,
  name: string,
  email: string,
};

type InitData = {
  path: string,
  user?: User,
};

type AppProps = {
  initData: InitData;
};

const propTypes: WeakValidationMap<AppProps> = {
  initData: PropTypes.exact<WeakValidationMap<InitData>>({
    path: PropTypes.string.isRequired,
    user: PropTypes.exact<WeakValidationMap<User>>({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  })
};

const Application: FC<AppProps> = ({ initData }) => {
  postTest().then(postTest).then(postTest);
  return (
    <React.Fragment>
      Init Data: {initData.path}
    </React.Fragment>
  );
};

Application.propTypes = propTypes;

export default Application
