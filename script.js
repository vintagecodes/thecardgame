let cards = [
  {
    image:
      'https://p.kindpng.com/picc/s/115-1159106_marvel-avengers-thor-png-picsartallpng-thor-marvel-avengers.png',
    value: 1,
    status: 'closed',
    alt: 'thor'
  },
  {
    image:
      'https://p.kindpng.com/picc/s/94-946937_transparent-marvel-png-avengers-thor-png-png-download.png',
    value: 1,
    status: 'closed',
    alt: 'thor'
  },
  {
    image:
      'https://p.kindpng.com/picc/s/236-2363210_avengers-hulk-png-transparent-png.png',
    value: 2,
    status: 'closed',
    alt: 'hulk'
  },
  {
    image:
      'https://p.kindpng.com/picc/s/236-2363222_dbx-fanon-wikia-avengers-alliance-hulk-hd-png.png',
    value: 2,
    status: 'closed',
    alt: 'hulk'
  },
  {
    image:
      'https://p.kindpng.com/picc/s/2-20084_captain-america-high-resolution-hd-png-download.png',
    value: 3,
    status: 'closed',
    alt: 'captain'
  },
  {
    image:
      'https://p.kindpng.com/picc/s/2-20167_rogers-the-avengers-png-image-transparent-png.png',
    value: 3,
    status: 'closed',
    alt: 'captain'
  },
  {
    image:
      'https://p.kindpng.com/picc/s/366-3663840_avengers-png-download-transparent-iron-man-png-png.png',
    value: 4,
    status: 'closed',
    alt: 'ironman'
  },
  {
    image:
      'https://p.kindpng.com/picc/s/154-1542310_ironman-avengers-avengers-iron-man-png-transparent-png.png',
    value: 4,
    status: 'closed',
    alt: 'ironman'
  },
  {
    image:
      'https://p.kindpng.com/picc/s/139-1391434_transparent-black-widow-png-avengers-2012-black-widow.png',
    value: 5,
    status: 'closed',
    alt: 'blackwidow'
  },
  {
    image:
      'https://p.kindpng.com/picc/s/104-1044953_black-widow-avengers-avengers-infinity-war-black-widow.png',
    value: 5,
    status: 'closed',
    alt: 'blackwidow'
  }
];

// dunsten shuffle algorithm

let temp;
for (let i = cards.length - 1; i >= 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));

  temp = cards[i];
  cards[i] = cards[j];
  cards[j] = temp;
}

let setCopy = cards;
console.log(cards);

function displayCards(data) {
  let cardsString = '';

  data.forEach(function(card, index) {
    cardsString += `
    <div class="card" style="background-image:url('${card.image}')">
      <div class=" overlay ${card.status}" onclick="openCard(${index})"></div>
    </div>





    `;
  });

  document.getElementById('cards').innerHTML = cardsString;
}

displayCards(cards);
let score = 0;
let cardCount = 1;
let val1 = null,
  val2 = null;
function openCard(index) {
  cards[index].status = 'opened';
  if (cardCount === 1) {
    val1 = cards[index].value;
    cardCount++;
  } else if (cardCount === 2) {
    val2 = cards[index].value;
    if (val1 === val2) {
      score++;
      document.getElementById('score').innerHTML = score;

      val1 = null;
      val2 = null;
      cardCount = 1;
    } else {
      alert('Game Over');
      location.reload();
    }
  }
  displayCards(cards);
}
