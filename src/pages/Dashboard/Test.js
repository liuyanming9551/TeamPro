import React from 'react';
import router from 'umi/router';

function goToPage() {
  router.push('/match/text/3');
}
export default function() {
  return <div onClick={goToPage}>this is test page.</div>;
}
