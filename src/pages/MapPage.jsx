import { Map, MapMarker } from "react-kakao-maps-sdk";
import './MapPage.css';

function MapPage() {

  const destination = { lat: 37.578969, lng: 126.980439 }; // 학회 위치

  return(
    <>
    <div className="MapPage">
      <h3>찾아오시는 길</h3>

      <div className="map-container">

        <Map className="Map"// 지도를 표시할 Container
          center={destination} 
          style={{
            // 지도의 크기
            width: "100%",
            height: "450px",
          }}
          level={2} // 지도의 확대 레벨
        >
          <MapMarker // 마커를 생성합니다
            position={destination}
          />
        </Map>
        
        <a
          href="https://map.kakao.com/link/to/학회장소,37.578969,126.980439"
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            display: "inline-block", 
            marginTop: "10px", 
            padding: "8px 16px", 
            background: "#5f8661", 
            color: "#fff", 
            textDecoration: "none", 
            borderRadius: "4px" 
          }}
        >
          카카오맵에서 길찾기
        </a>

      <div className="map-description">
        <h4>지하철 이용</h4>
        <p>3호선 안국역 1번 출구 → 삼청로 따라 도보 약 10분</p> 
        <p>3호선 경복궁역 4번 출구 → 도보 약 12분</p> 
        <p>5호선 광화문역 2번 출구 → 도보 약 15분</p>
        <br/>
        <h4>버스 이용</h4>
        <p>국립현대미술관 서울관 정류장 하차 (도보 1분)</p>
        <p>주요 노선: 1020, 1711, 7016, 7212 등</p>
        <p>삼청파출소 앞 하차 후 도보 이동도 가능</p>
        <br/>
        <h4>자가용 이용</h4>
        <p>주소: 서울 종로구 삼청로 30</p>
        <p>지하 2·3층 주차장 이용 가능</p>
        <p>유료 주차 / 전시 관람 시 일부 할인 제공</p>
        <br/>
        <p>※ 주차 공간이 협소하니 대중교통 이용을 권장합니다.</p>
      </div>
      </div>

    </div>
    </>
  )
}

export default MapPage;