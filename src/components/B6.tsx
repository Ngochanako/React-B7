import React, { useEffect, useState } from 'react'

export default function B6() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    // Lắng nghe sự kiện cuộn màn hình
    window.addEventListener('scroll', handleScroll);

    // Cleanup: loại bỏ sự kiện khi component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  return (
    <div>
      <p>Bài 6</p>
       <h1>Scroll Position: {scrollPosition}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatibus laborum tenetur tempora veniam, corrupti nemo id sequi voluptate accusantium enim dolores recusandae incidunt necessitatibus deserunt. Animi ducimus perferendis voluptatem.</p>
    </div>
  )
}
