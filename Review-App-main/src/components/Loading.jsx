// src/components/Loading.jsx
import React from 'react';
import { FadeLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="loading-overlay">
      <FadeLoader color="#75d5c7" height={20} radius={16} width={5} />
    </div>
  );
};

export default Loading;
