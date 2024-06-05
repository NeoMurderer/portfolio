import React from 'react';

export function Overlay() {
  const date = new Date();
  const formattedDate = date.getFullYear()
  return (
    <div className='overlay' style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a target='_blank' href="https://github.com/NeoMurderer" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        Oleh Coder
        <br />
        Full Stack Engineer
      </a>
      <a target='_blank' href="https://linkedin.com/in/olehnesterov" style={{ position: 'absolute', bottom: 40, left: 250, fontSize: '13px' }}>
        LinkedIn
      </a>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>2010-{formattedDate}</div>
    </div>
  );
}
