import React, { useState, useEffect } from 'react';
import { Map, MapMarker, useMap } from 'react-kakao-maps-sdk';
import '../../styles/kakaomap.css';

function KakaoKeywordMap() {
  const [map, setMap] = useState<any>();
  const [markers, setMarkers] = useState<any[]>([]);
  const [places, setPlaces] = useState<any[]>([]);

  const [searchInput, setSearchInput] = useState('이태원 맛집');
  const [keyword, setKeyword] = useState('이태원 맛집');
  const [selectedPlace, setSelectedPlace] = useState();

  const markerImageSrc =
    'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png';
  const imageSize = { width: 36, height: 37 };
  const spriteSize = { width: 36, height: 691 };

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setKeyword(searchInput);
  };

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(keyword, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        setPlaces(data);

        /* 이하는 function displayPlaces(places) 내용 */
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  }, [map, keyword]);

  const EventMarkerContainer = ({ position, content, i }: any) => {
    const map = useMap();
    const [isVisible, setIsVisible] = useState(false);

    return (
      <MapMarker
        position={position}
        image={{
          src: markerImageSrc,
          size: imageSize,
          options: {
            spriteSize: spriteSize,
            spriteOrigin: new kakao.maps.Point(0, i * 46 + 10),
            offset: new kakao.maps.Point(13, 37),
          },
        }}
        onClick={(marker) => {
          map.panTo(marker.getPosition());
          setSelectedPlace(places[i]);
        }}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      >
        {isVisible && <div style={{ color: '#000' }}>{content}</div>}
      </MapMarker>
    );
  };

  return (
    <div className="map_wrap">
      <Map // 로드뷰를 표시할 Container
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        style={{
          width: '100%',
          height: '500px',
        }}
        level={3}
        onCreate={setMap}
      >
        {markers.map((marker, i) => (
          <EventMarkerContainer
            key={`EventMarkerContainer-${marker.position.lat}-${marker.position.lng}`}
            position={marker.position}
            content={marker.content}
            i={i}
          />
        ))}
      </Map>
      <div id="menu_wrap" className="bg_white">
        <div className="option">
          <div>
            <form onSubmit={handleSearchSubmit}>
              키워드 :{' '}
              <input
                type="text"
                value={searchInput}
                onChange={handleKeywordChange}
                id="keyword"
                size={15}
              />
              <button type="submit">검색하기</button>
            </form>
          </div>
        </div>
        <hr />
        <ul id="placesList">
          {places.map((item, i) => (
            <li
              key={i}
              className="item"
              onClick={() => {
                map.panTo(
                  new kakao.maps.LatLng(
                    markers[i].position.lat,
                    markers[i].position.lng
                  )
                );
                setSelectedPlace(item);
              }}
            >
              <span className={`markerbg marker_${i + 1}`}></span>
              <div className="info">
                <h5>{item.place_name}</h5>
                {item.road_address_name ? (
                  <>
                    <span>{item.road_address_name}</span>
                    <span className="jibun gray">{item.address_name}</span>
                  </>
                ) : (
                  <span>{item.address_name}</span>
                )}
                <span className="tel">{item.phone}</span>
              </div>
            </li>
          ))}
        </ul>
        <div id="pagination"></div>
      </div>
    </div>
  );
}

export default KakaoKeywordMap;
