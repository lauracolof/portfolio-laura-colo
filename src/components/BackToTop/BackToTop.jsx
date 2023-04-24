import React, {useEffect, useState} from 'react'

function BackToTop () {
  const [backToTopBtn, setBackToTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100) {
        setBackToTopBtn(true)
      } else {
        setBackToTopBtn(false);
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return <div className='btn-top'>
    {
      backToTopBtn && (
        <button onClick={scrollUp}
        style={{
          position: 'fixed',
          bottom: '25px',
          right: '25px',
          height: '50px',
          width: '50px',
          fontSize: '50px',
          color: '#cd5cd1',
          borderColor: '#cd5cd1',
          borderRadius: '10px',
          cursor: 'pointer'
          
        }}
        >
          ^
        </button>
      )
    }
</div> 
}   


export default BackToTop;