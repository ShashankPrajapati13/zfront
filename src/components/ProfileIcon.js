import React from 'react';

const ProfileIcon = ({ name }) => {
  const getRandomColor = () => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FF8F33'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Check if name is defined and has a valid length
  const firstLetter = name && name.charAt(0).toUpperCase();
  const backgroundColor = getRandomColor();

  return (
    <div
      style={{
        backgroundColor,
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold',
      }}
    >
      {firstLetter || '?'}
    </div>
  );
};

export default ProfileIcon;
