import React, { useState, useEffect } from 'react';

export function Header({ title, children }) {
    useEffect(() => {
      document.title = title;
    }, [title]);
  
    return (
      <header>
        <h1>{title}</h1>
        {children}
      </header>
    );
  }
  
  export function SubHeader({ title }) {
    useEffect(() => {
      document.title = title;
    }, [title]);
  
    return (
      <header>
        <h3>{title}</h3>
      </header>
    );
  }