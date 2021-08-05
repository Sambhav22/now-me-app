import React from 'react'

const FooterItem = ({url,name}) => {
    return (
        <div className="middle__item">
        <img
          className="footer__image"
          src={url}
          alt="new"
        />
        <div className="footer__text">{name}</div>
      </div>
    )
}

export default FooterItem
