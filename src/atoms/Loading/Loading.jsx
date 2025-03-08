import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function Loading() {
  return (
<div role="alert" aria-live="polite" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <FontAwesomeIcon icon={faSpinner} spin size="2x" style={{ color: '#007bff' }} />
      <span className="sr-only">Loading...</span>
    </div>  )
}
