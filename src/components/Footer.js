import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <footer>
            <div className="social">
              <a href="https://github.com/Sessions21/t-shirt-paradise"><ion-icon name="logo-github"></ion-icon></a>
              <a href="https://www.sanmar.com"><ion-icon name="shirt"></ion-icon></a>
              <a href="https://www.ssactivewear.com"><ion-icon name="bicycle"></ion-icon></a>
              <a href="https://www.koozie.com"><ion-icon name="beer"></ion-icon></a>
            </div>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="/">Home</a></li>
                <li className="list-inline-item"><a href="/gallery">Gallery</a></li>
                <li className="list-inline-item"><a href="/user">User</a></li>
                <li className="list-inline-item"><a href="/about">About</a></li>
                <li className="list-inline-item"><a href="/contact">Contact</a></li>
            </ul>
            <p className="social">© 2022 Smith Sales Inc.</p>
        </footer>
    </div>
  )
}

export default Footer