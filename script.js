// JavaScript

const map = L.map('map').setView([35.65928078159938, 139.70370833867267], 15);

// タイルレイヤーを作成し、地図にセットする
// Open Street Map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',}).addTo(map);


  
  //アイコン
//const whiteIcon = L.icon({
   // iconUrl: 'images/ico.png',
   // shadowUrl: 'images/ico_shadow.png',
  
  //iconSize:     [40, 40], // size of the icon
  //shadowSize:   [40, 40], // size of the shadow
  //iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
  //shadowAnchor: [20, 40],  // the same for the shadow
  //popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
  //});

  //複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
  options: {
   shadowUrl: 'images/ico_shadow.png',
  iconSize: [60, 60],
   shadowSize: [60, 60],
    iconAnchor: [17, 60],
    shadowAnchor: [20, 40],
    popupAnchor: [0, -42]
  }
});

const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
  jelIcon = new circleIcon({ iconUrl: 'images/ico_jel.png' });
 



 // L.marker([33.67087278425273, 130.44455151332255], { icon: whiteIcon }).addTo(map)
  //.bindPopup('九州産業大学<br><img src="images/img01.png" alt="img">');
  L.marker([35.65928078159938, 139.70370833867267], { icon: jelIcon }).addTo(map).bindPopup('株式会社STPR<br><img src="images/img02.jpg" alt="img">');
  const circle = L.circle([35.65928078159938, 139.70370833867267], {
    color: '#ff8c00', //円の輪郭線の色
    fillColor: '#ff8c00', //円の塗りつぶしの色
    fillOpacity: 0.3, //塗りつぶしの不透明度
    radius: 1000 //半径、メートルで指定
  }).addTo(map);

