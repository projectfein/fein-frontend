import React from 'react';

export default function Header({ currentPage = '' }) {
  return <header>{currentPage}</header>;
}
