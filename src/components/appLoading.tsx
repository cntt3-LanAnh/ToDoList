import React from 'react';

export function AppLoading() {
  return (
    <div className="fixed inset-0 bg-primary-light-400 flex justify-center items-center" style={{ zIndex: 999 }}>
      <div className="lds-ripple">
        <div />
        <div />
      </div>
    </div>
  );
}
