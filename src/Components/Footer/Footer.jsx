import React from 'react';

const Footer = () => {
  const social = [
    {
      link: 'https://linkedin.com/in/kshitiz sharma',
      icon: 'fa-brands fa-linkedin',
    },
    {
      link: 'https://twitter.com/kshitiz24451721',
      icon: 'fa-twitter',
    },
    {
      link: 'https://instagram.com/_kshitiz__sharma',
      icon: 'fa-instagram',
    },
    {
      link: 'https://github.com/kshitiz11101',
      icon: 'fa-github',
    },
    {
      link: 'https://medium.com/@kshitiz01sharma',
      icon: 'fa-medium',
    },
  ];

  return (
    <div>
      <br />
      <br />
      <br />
      <div>
        <h3 className="text-center">Connect with me</h3>
        <div className="text-center">
          {social.map((s, index) => (
            <span key={index} style={{ marginRight: '12px' }}>
              <a href={s.link}>
                <i className={`fa ${s.icon}`} style={{ fontSize: '25px',color:'black' }}></i>
              </a>
            </span>
          ))}
        </div>
        <br/>
        <h4 className="text-center">Made with ❤️ by Kshitiz Sharma</h4>
      </div>
    </div>
  );
};

export default Footer;
