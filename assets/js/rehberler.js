const places = [
  { id: 1,  category: "camii",      nameKey: "place_name_ayasofya",    descKey: "place_desc_ayasofya",    locKey: "loc_ayasofya",    images: ["ayasofya1.jpg",     "ayasofya2.jpg",     "ayasofya3.jpg"]     },
  { id: 2,  category: "camii",      nameKey: "place_name_ortakoy",     descKey: "place_desc_ortakoy",     locKey: "loc_ortakoy",     images: ["ortakoy1.jpg",      "ortakoy2.jpg",      "ortakoy3.jpg"]      },
  { id: 3,  category: "camii",      nameKey: "place_name_sultanahmet", descKey: "place_desc_sultanahmet", locKey: "loc_sultanahmet", images: ["sultanahmet1.jpg",  "sultanahmet2.jpg",  "sultanahmet3.jpg"]  },
  { id: 4,  category: "camii",      nameKey: "place_name_yenicami",    descKey: "place_desc_yenicami",    locKey: "loc_yenicami",    images: ["yenicami1.jpg",     "yenicami2.jpg",     "yenicami3.jpg"]     },
  { id: 5,  category: "saray",      nameKey: "place_name_dolmabahce",  descKey: "place_desc_dolmabahce",  locKey: "loc_dolmabahce",  images: ["dolmabahçe1.jpg",   "dolmabahçe2.jpg",   "dolmabahçe3.jpg"]   },
  { id: 6,  category: "saray",      nameKey: "place_name_topkapi",     descKey: "place_desc_topkapi",     locKey: "loc_topkapi",     images: ["topkapı1.jpg",      "topkapı2.jpg",      "topkapı3.jpg"]      },
  { id: 7,  category: "saray",      nameKey: "place_name_ciragan",     descKey: "place_desc_ciragan",     locKey: "loc_ciragan",     images: ["çırağan1.jpg",      "çırağan2.jpg",      "çırağan3.jpg"]      },
  { id: 8,  category: "saray",      nameKey: "place_name_yildiz",      descKey: "place_desc_yildiz",      locKey: "loc_yildiz",      images: ["yıldız1.jpg",       "yıldız2.jpg",       "yıldız3.jpg"]       },
  { id: 9,  category: "manzara",    nameKey: "place_name_galata",      descKey: "place_desc_galata",      locKey: "loc_galata",      images: ["galatakulesi1.jpg", "galatakulesi2.jpg", "galatakulesi3.jpg"] },
  { id: 10, category: "manzara",    nameKey: "place_name_kizkulesi",   descKey: "place_desc_kizkulesi",   locKey: "loc_kizkulesi",   images: ["kızkulesi1.jpg",    "kızkulesi2.jpg",    "kızkulesi3.jpg"]    },
  { id: 11, category: "manzara",    nameKey: "place_name_bogaz",       descKey: "place_desc_bogaz",       locKey: "loc_bogaz",       images: ["boğaz1.jpg",        "boğaz2.jpg",        "boğaz3.jpg"]        },
  { id: 12, category: "manzara",    nameKey: "place_name_istanbul360", descKey: "place_desc_istanbul360", locKey: "loc_istanbul360", images: ["istanbul360.jpg",   "istanbul3600.jpg",  "istanbul36000.jpg"]  },
  { id: 13, category: "carsi",      nameKey: "place_name_kapalicarsi", descKey: "place_desc_kapalicarsi", locKey: "loc_kapalicarsi", images: ["kapalıçarşı1.jpg",  "kapalıçarşı2.jpg",  "kapalıçarşı3.jpg"]  },
  { id: 14, category: "carsi",      nameKey: "place_name_misircarsi",  descKey: "place_desc_misircarsi",  locKey: "loc_misircarsi",  images: ["mısırçarşısı1.jpg", "mısırçarşısı2.jpg", "mısırçarşısı3.jpg"] },
  { id: 15, category: "carsi",      nameKey: "place_name_bakırcilar",  descKey: "place_desc_bakırcilar",  locKey: "loc_bakırcilar",  images: ["bakırcılar1.jpg",   "bakırcılar2.jpg",   "bakırcılar3.jpg"]   },
  { id: 16, category: "restaurant", nameKey: "place_name_mikla",       descKey: "place_desc_mikla",       locKey: "loc_mikla",       images: ["mikla1.jpg",        "mikla2.jpg",        "mikla3.jpg"]        },
  { id: 17, category: "restaurant", nameKey: "place_name_pandeli",     descKey: "place_desc_pandeli",     locKey: "loc_pandeli",     images: ["pandeli1.jpg",      "pandeli2.jpg",      "pandeli3.jpg"]      },
];

function renderCards(locale = {}) {
  const grid = document.getElementById('places-grid');
  if (!grid) return;

  grid.innerHTML = places.map(place => `
    <div class="col-12 col-md-4 card-item">
      <div class="card card-hover" data-id="${place.id}" data-category="${place.category}">
        <img src="images/${place.images[0]}" class="card-img2" loading="lazy" alt="${locale[place.nameKey] || ''}">
        <div class="card-body">
          <h5>${locale[place.nameKey] || ''}</h5>
          <p>${place.category.charAt(0).toUpperCase() + place.category.slice(1)}</p>
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.card-hover').forEach(card => {
    card.addEventListener('click', () => openPlaceModal(parseInt(card.dataset.id), locale));
  });
}

function openPlaceModal(id, locale = {}) {
  const place = places.find(p => p.id === id);
  if (!place) return;

  const name = locale[place.nameKey] || '';
  const desc = locale[place.descKey] || '';
  const loc  = locale[place.locKey]  || '';

  document.getElementById('modal-title').textContent = name;
  document.getElementById('modal-description').textContent = desc;
  document.getElementById('modal-location').innerHTML =
    `<a href="https://maps.google.com/?q=${encodeURIComponent(loc)}" target="_blank" style="text-decoration:none;">
      ${loc}
    </a>`;

  document.getElementById('modal-indicators').innerHTML = place.images.map((_, i) => `
    <button type="button" data-bs-target="#modal-carousel" data-bs-slide-to="${i}"
      ${i === 0 ? 'class="active"' : ''}></button>
  `).join('');

  document.getElementById('modal-images').innerHTML = place.images.map((img, i) => `
    <div class="carousel-item ${i === 0 ? 'active' : ''}">
      <img src="images/${img}" class="d-block w-100 slide-image2" alt="${name}">
    </div>
  `).join('');

  // Hangi place açık olduğunu modal'a kaydet
  document.getElementById('placeModal').dataset.activeId = id;

  const modalEl = document.getElementById('placeModal');
  modalEl.addEventListener('shown.bs.modal', () => {
    const carouselEl = document.getElementById('modal-carousel');
    const existing = bootstrap.Carousel.getInstance(carouselEl);
    if (existing) existing.dispose();
    new bootstrap.Carousel(carouselEl, { interval: 2500, ride: 'carousel' });
  }, { once: true });

  new bootstrap.Modal(modalEl).show();
}

// i18n gelmeden önce Türkçe ile test et
$(document).ready(function () {
  fetch('locales/tr.json')
    .then(r => r.json())
    .then(data => renderCards(data));
});