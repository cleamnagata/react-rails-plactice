import React, { FC } from "react"

const Application: FC<{ initData: any }> = ({ initData }) => {
  console.log(initData);
  return (
    <React.Fragment>
      Init Data: {initData.path}
    </React.Fragment>
  );
};

export default Application
