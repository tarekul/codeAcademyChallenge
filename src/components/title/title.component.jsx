import React from 'react';
import './title.styles.css';

export default function Title({ quiz }) {
  return <h2 className="title">{quiz}</h2>;
}
