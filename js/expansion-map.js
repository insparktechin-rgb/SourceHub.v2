/**
 * SOURCEHUB.IN - PAN-INDIA & KARNATAKA EXPANSION FOOTPRINT MAP
 */

const HUB_DATA = {
  krpuram: {
    name: 'KR Puram Mega Distribution Hub',
    code: 'Hub Code: #BLR-E01 • East Corridor',
    state: 'Bengaluru Urban (East)',
    status: 'Operational • 24/7 Active',
    Horeca: '1 MEGASTORE',
    HorecaqFt: '15-20 thousand sq.ft.',
    evFleet: '15-20 EV Cargo Units',
    avgDeliveryTime: '4-6 Hours',
    coverage: 'KR Puram, Whitefield, Mahadevapura, Hoodi, Marathahalli & East ORR Corridor'
  },
  yelahanka: {
    name: 'Yelahanka North Gateway Hub',
    code: 'Hub Code: #BLR-N01 • North Corridor',
    state: 'Bengaluru Urban (North)',
    status: 'Operational • 24/7 Active',
    Horeca: '1 MEGASTORE',
    HorecaqFt: '15-20 thousand sq.ft.',
    evFleet: '15-20 EV Cargo Units',
    avgDeliveryTime: '4-6 Hours',
    coverage: 'Yelahanka, Hebbal, Sahakarnagar, Jakkur, Vidyaranyapura & Airport Road'
  },
  hoskote: {
    name: 'Hoskote Industrial Fulfillment Hub',
    code: 'Hub Code: #BLR-E02 • East Industrial Node',
    state: 'Bengaluru Rural / East Node',
    status: 'Operational • Live',
    Horeca: '1 MEGASTORE',
    HorecaqFt: '15-20 thousand sq.ft.',
    evFleet: '15-20 EV Cargo Units',
    avgDeliveryTime: '4-6 Hours',
    coverage: 'Hoskote Industrial Area, Malur Road, NH 75 Corridor & East Industrial Outskirts'
  },
  sarjapura: {
    name: 'Sarjapura Tech-Belt Logistics Hub',
    code: 'Hub Code: #BLR-SE01 • South-East Corridor',
    state: 'Bengaluru Urban (South-East)',
    status: 'Operational • Live',
    Horeca: '1 MEGASTORE',
    HorecaqFt: '15-20 thousand sq.ft.',
    evFleet: '15-20 EV Cargo Units',
    avgDeliveryTime: '4-6 Hours',
    coverage: 'Sarjapur Road, Bellandur, Carmelaram, Dommasandra, Hadosiddapura & Attibele'
  },
  kengeri: {
    name: 'Kengeri West Distribution Hub',
    code: 'Hub Code: #BLR-W01 • West Mysore Rd Corridor',
    state: 'Bengaluru Urban (West)',
    status: 'Operational • Live',
    Horeca: '1 MEGASTORE',
    HorecaqFt: '15-20 thousand sq.ft.',
    evFleet: '15-20 EV Cargo Units',
    avgDeliveryTime: '4-6 Hours',
    coverage: 'Kengeri Satellite Town, Rajarajeshwari Nagar, Mysore Road & Nayandahalli'
  },
  kanakapura: {
    name: 'Kanakapura South Gateway Hub',
    code: 'Hub Code: #BLR-S01 • South Corridor',
    state: 'Bengaluru Urban (South)',
    status: 'Operational • Live',
    Horeca: '1 MEGASTORE',
    HorecaqFt: '15-20 thousand sq.ft.',
    evFleet: '15-20 EV Cargo Units',
    avgDeliveryTime: '4-6 Hours',
    coverage: 'Kanakapura Road, JP Nagar, Banashankari, Thalaghattapura & Harohalli Corridor'
  },
  // Fallbacks for legacy keys
  bengaluru: {
    name: 'KR Puram Mega Distribution Hub',
    code: 'Hub Code: #BLR-E01 • East Corridor',
    state: 'Bengaluru Urban (HQ)',
    status: 'Operational • 24/7 Active',
    Horeca: '1 Megastore',
    HorecaqFt: '15-20 thousand sq.ft.',
    evFleet: '15-20 EV Scooters & Vans',
    avgDeliveryTime: '4-6 Hours',
    coverage: 'KR Puram, Whitefield, Mahadevapura, Hoodi, Marathahalli & East ORR Corridor'
  }
};

function initExpansionMap() {
  const pins = document.querySelectorAll('.city-hub-pin');
  const hubCityName = document.getElementById('hub-city-title');
  const hubStatusBadge = document.getElementById('hub-status-badge');
  const hubCodeBadge = document.getElementById('hub-code-badge');
  const hubHoreca = document.getElementById('hub-warehouse-count');
  const hubArea = document.getElementById('hub-area-size');
  const hubFleet = document.getElementById('hub-fleet-size');
  const hubDeliveryTime = document.getElementById('hub-delivery-time');
  const hubCoverageText = document.getElementById('hub-coverage-text');

  pins.forEach(pin => {
    pin.addEventListener('click', () => {
      const cityKey = pin.dataset.city;
      const data = HUB_DATA[cityKey];
      if (!data) return;

      pins.forEach(p => p.classList.remove('active'));
      pin.classList.add('active');

      if (hubCityName) hubCityName.textContent = data.name;
      if (hubStatusBadge) hubStatusBadge.textContent = data.status;
      if (hubCodeBadge && data.code) hubCodeBadge.textContent = data.code;
      if (hubHoreca) hubHoreca.textContent = data.Horeca;
      if (hubArea) hubArea.textContent = data.HorecaqFt;
      if (hubFleet) hubFleet.textContent = data.evFleet;
      if (hubDeliveryTime) hubDeliveryTime.textContent = data.avgDeliveryTime;
      if (hubCoverageText) hubCoverageText.textContent = data.coverage;
    });
  });
}

document.addEventListener('DOMContentLoaded', initExpansionMap);
