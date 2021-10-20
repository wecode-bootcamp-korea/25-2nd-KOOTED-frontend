import React, { useEffect } from 'react';
/* global kakao */

const Location = () => {
  useEffect(() => {
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(37.5292864, 126.9192783),
      level: 3,
    };
    let map = new kakao.maps.Map(container, options);
    let markerPosition = new kakao.maps.LatLng(37.5292864, 126.9192783);

    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  }, []);

  return (
    <div>
      <div id="map" style={{ height: '400px' }} />
    </div>
  );
};

export default Location;
