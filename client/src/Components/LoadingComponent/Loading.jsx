import { Spin } from "antd";
import React from "react";

const Loading = ({ childer, isLoading, delay = 200 }) => {
  return (
    <Spin spinning={isLoading} delay={delay}>
      {childer}
    </Spin>
  );
};

export default Loading;
