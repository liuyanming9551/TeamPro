import React from 'react';

export default function(props) {
  const {
    match: {
      params: { page: param },
    },
  } = props;
  return <div>this is sss 路由参数为：{param}</div>;
}
