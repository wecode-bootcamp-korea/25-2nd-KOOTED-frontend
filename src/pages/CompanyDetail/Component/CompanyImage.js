import React from 'react';

function CompanyImage({ image }) {
  return (
    <div className="CompanyImage">
      <ul className="imageSlider">
        {image &&
          image.map(({ id, image_url }) => {
            return (
              <li key={id}>
                <img
                  className="companyImageItem"
                  alt="company"
                  src={image_url}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default CompanyImage;
