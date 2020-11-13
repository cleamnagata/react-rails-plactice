import React, { FC } from "react"

const Application: FC<{ initData: any }> = ({ initData }) => {
  console.log(initData);
  return (
    <React.Fragment>
      Init Data: {initData.hoge.toString()}
    </React.Fragment>
  );
};

export default Application
