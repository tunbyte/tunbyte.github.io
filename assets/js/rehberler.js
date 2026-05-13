const places = [
    {
        id: 1, name: "Ayasofya", category: "camii",
        images: ["ayasofya1.jpg", "ayasofya2.jpg", "ayasofya3.jpg"],
        description: "Dünyanın en önemli ve etkileyici yapılarından biri olan Ayasofya, yaklaşık 1500 yıllık tarihiyle İstanbul'un simgesi hâline gelmiştir. İlk olarak bir Bizans katedrali olarak inşa edilen yapı, daha sonra camiye dönüştürülmüş; uzun yıllar müze olarak hizmet verdikten sonra yeniden cami olarak ibadete açılmıştır.",
        location: "Ayasofya Meydanı, Sultanahmet"
    },
    {
        id: 2, name: "Orta Köy Camii", category: "camii",
        images: ["ortakoy1.jpg", "ortakoy2.jpg", "ortakoy3.jpg"],
        description: "Boğaziçi kıyısında, Boğaz Köprüsü'nün hemen dibinde yer alan Ortaköy Camii, İstanbul'un en fotoğraflanan yapılarından biridir. 19. yüzyılda Osmanlı Barok mimarisiyle inşa edilen cami, çevresiyle birlikte eşsiz bir manzara sunar.",
        location: "Ortaköy Meydanı, Beşiktaş"
    },
    {
        id: 3, name: "Sultan Ahmet Camii", category: "camii",
        images: ["sultanahmet1.jpg", "sultanahmet2.jpg", "sultanahmet3.jpg"],
        description: "Altı minaresiyle dünyada eşine az rastlanan camilerden biri olan Sultanahmet Camii, 17. yüzyılda inşa edilmiştir. İç mekânı süsleyen yaklaşık 20.000 adet el yapımı İznik çinisiyle ünlüdür.",
        location: "Sultanahmet Meydanı, Fatih"
    },
    {
        id: 4, name: "Yeni Camii", category: "camii",
        images: ["yenicami1.jpg", "yenicami2.jpg", "yenicami3.jpg"],
        description: "Eminönü semtinin simgesi olan Yeni Camii, 17. yüzyılda tamamlanmıştır. Mısır Çarşısı ile yan yana konumuyla İstanbul'un en işlek ve ziyaretçi çeken noktalarından biridir.",
        location: "Eminönü Meydanı, Fatih"
    },
    {
        id: 5, name: "Dolmabahçe Sarayı", category: "saray",
        images: ["dolmabahçe1.jpg", "dolmabahçe2.jpg", "dolmabahçe3.jpg"],
        description: "Boğaz kıyısında uzanan Dolmabahçe Sarayı, 19. yüzyılda Osmanlı İmparatorluğu'nun Batı'ya açılma döneminde inşa edilmiştir. Avrupa Barok mimarisiyle Osmanlı sanat anlayışını harmanlayan saray, 285 odası ve 46 salonu ile Avrupa'nın en büyük saraylarından biri olma özelliğini taşır.",
        location: "Dolmabahçe Caddesi, Beşiktaş"
    },
    {
        id: 6, name: "Topkapı Sarayı", category: "saray",
        images: ["topkapı1.jpg", "topkapı2.jpg", "topkapı3.jpg"],
        description: "Yaklaşık 400 yıl boyunca Osmanlı İmparatorluğu'nun yönetim merkezi olan Topkapı Sarayı, Sarayburnu'nda Haliç, Boğaziçi ve Marmara Denizi'nin kesiştiği noktada yer alır. İçinde barındırdığı hazine, silah ve kutsal emanetler koleksiyonuyla dünyanın en önemli müzelerinden biri kabul edilmektedir.",
        location: "Sarayburnu, Fatih"
    },
    {
        id: 7, name: "Çırağan Sarayı", category: "saray",
        images: ["çırağan1.jpg", "çırağan2.jpg", "çırağan3.jpg"],
        description: "Boğaz kıyısında yer alan Çırağan Sarayı, 19. yüzyılda inşa edilmiş ve çeşitli tarihi olaylara sahne olmuştur. Bugün lüks bir otele dönüştürülen saray, özgün mimarisini koruyarak ziyaretçilere hem tarihi hem de modern bir deneyim sunmaktadır.",
        location: "Çırağan Caddesi, Beşiktaş"
    },
    {
        id: 8, name: "Yıldız Sarayı", category: "saray",
        images: ["yıldız1.jpg", "yıldız2.jpg", "yıldız3.jpg"],
        description: "Beşiktaş'taki geniş bir park içine yayılmış olan Yıldız Sarayı, çeşitli köşkleri ve bahçeleriyle Osmanlı saray mimarisinin özgün bir örneğini sunar. 19. yüzyılda Sultan II. Abdülhamid tarafından yoğun biçimde kullanılmış ve genişletilmiştir.",
        location: "Yıldız, Beşiktaş"
    },
    {
        id: 9, name: "Galata Kulesi", category: "manzara",
        images: ["galatakulesi1.jpg", "galatakulesi2.jpg", "galatakulesi3.jpg"],
        description: "Ortaçağ'dan bu yana İstanbul silüetinin vazgeçilmez parçası olan Galata Kulesi, 14. yüzyılda Cenevizliler tarafından inşa edilmiştir. Tepe noktasındaki seyir terası, Haliç'i, Boğaz'ı ve tarihi yarımadayı kapsayan 360 derecelik bir panorama sunar.",
        location: "Galata Meydanı, Beyoğlu"
    },
    {
        id: 10, name: "Kız Kulesi", category: "manzara",
        images: ["kızkulesi1.jpg", "kızkulesi2.jpg", "kızkulesi3.jpg"],
        description: "İstanbul Boğazı'nın Anadolu yakasına yakın küçük bir adacık üzerinde yükselen Kız Kulesi, şehrin en ikonik yapılarından biridir. Efsanelere ve tarihi olaylara konu olan kule, bugün restoran ve kafe olarak hizmet vermekte, tekne turlarıyla ziyaret edilmektedir.",
        location: "Salacak açıkları, Üsküdar"
    },
    {
        id: 11, name: "Boğaziçi", category: "manzara",
        images: ["boğaz1.jpg", "boğaz2.jpg", "boğaz3.jpg"],
        description: "Asya ile Avrupa kıtalarını birbirinden ayıran Boğaziçi, İstanbul'un doğal ve kültürel kimliğinin merkezinde yer alır. Kıyı boyunca sıralanan yalılar, camiler ve saraylarla çerçevelenen boğaz, vapur turlarıyla en güzel şekilde keşfedilebilir.",
        location: "İstanbul Boğazı"
    },
    {
        id: 12, name: "İstanbul 360", category: "manzara",
        images: ["istanbul360.jpg", "istanbul3602.jpg", "istanbul3603.jpg"],
        description: "İstanbul'un panoramik manzarasını sunmak üzere tasarlanan İstanbul 360, şehrin dört bir yanını kuşbakışı görmek isteyenler için ideal bir noktadır. Gün batımında ve gece ışıkları eşliğinde büyüleyici bir deneyim sunar.",
        location: "Beyoğlu, İstanbul"
    },
    {
        id: 13, name: "Kapalıçarşı", category: "carsi",
        images: ["kapalıçarşı1.jpg", "kapalıçarşı2.jpg", "kapalıçarşı3.jpg"],
        description: "Dünyanın en büyük ve en eski kapalı çarşılarından biri olan Kapalıçarşı, 15. yüzyıldan bu yana ticaretin kalbinde atmaktadır. 4.000'i aşkın dükkanıyla mücevher, halı, baharat ve geleneksel el sanatlarından oluşan geniş bir ticaret ağına ev sahipliği yapar.",
        location: "Beyazıt, Fatih"
    },
    {
        id: 14, name: "Mısır Çarşısı", category: "carsi",
        images: ["mısırçarşısı1.jpg", "mısırçarşısı2.jpg", "mısırçarşısı3.jpg"],
        description: "Eminönü'nde yer alan Mısır Çarşısı, 17. yüzyıldan bu yana baharatlar, kuruyemişler ve geleneksel Türk lezzetleriyle ziyaretçileri karşılamaktadır. Tarihi yapısı ve özgün atmosferiyle İstanbul'un en çok sevilen pazarlarından biridir.",
        location: "Eminönü, Fatih"
    },
    {
        id: 15, name: "Bakırcılar Çarşısı", category: "carsi",
        images: ["bakırcılar1.jpg", "bakırcılar2.jpg", "bakırcılar3.jpg"],
        description: "Geleneksel el işçiliğiyle ünlü Bakırcılar Çarşısı, özellikle bakır işlemeciliğinin yaşatıldığı tarihi bir ticaret merkezidir. Ustaların el yapımı bakır ürünler ürettiği bu çarşı, kültürel mirası ve zanaatkârlığıyla dikkat çeker. Yerli ve yabancı ziyaretçiler için otantik bir alışveriş deneyimi sunar.",
        location: "Bakırcılar Çarşısı, Tarihi Çarşı Bölgesi"
    },
    {
        id: 16, name: "Mikla Restaurant", category: "restaurant",
        images: ["mikla1.jpg", "mikla2.jpg", "mikla3.jpg"],
        description: "İstanbul'un en ünlü fine dining restoranlarından biri olan Mikla, modern Anadolu mutfağını çağdaş sunumlarla birleştirir. Şef Mehmet Gürs tarafından kurulan restoran, özellikle Boğaz ve tarihi yarımada manzarasıyla dikkat çeker. Michelin rehberinde yer alması ve yüksek kaliteli gastronomi deneyimi sunmasıyla bilinir.",
        location: "Mikla, The Marmara Pera Oteli, Asmalımescit"
    },
    {
        id: 17, name: "Pandeli Restaurant", category: "restaurant",
        images: ["pandeli1.jpg", "pandeli2.jpg", "pandeli3.jpg"],
        description: "İstanbul'un en tarihi restoranlarından biri olan Pandeli, 1901 yılından beri hizmet vermektedir. Mısır Çarşısı'nın içinde yer alan bu köklü mekân, Osmanlı ve geleneksel Türk mutfağının seçkin örneklerini sunar. Tarihi atmosferi ve duvarlarındaki mavi çinileriyle özellikle yerli ve yabancı turistlerin ilgisini çeker.",
        location: "Pandeli Restaurant, Mısır Çarşısı içi, Eminönü"
    }
];

function renderCards() {
    const grid = document.getElementById('places-grid');
    if (!grid) return;

    grid.innerHTML = places.map(place => `
    <div class="col-12 col-md-4 card-item">
      <div class="card card-hover" data-id="${place.id}" data-category = "${place.category}">
        <img src="images/${place.images[0]}" class="card-img2" loading="lazy" alt="${place.name}">
        <div class="card-body">
          <h5>${place.name}</h5>
          <p>${place.category.charAt(0).toUpperCase() + place.category.slice(1)}</p>
        </div>
      </div>
    </div>
  `).join('');

    grid.querySelectorAll('.card-hover').forEach(card => {
        card.addEventListener('click', () => openPlaceModal(parseInt(card.dataset.id)));
    });
}

function openPlaceModal(id) {
    const place = places.find(p => p.id === id);
    if (!place) return;

    document.getElementById('modal-title').textContent = place.name;
    document.getElementById('modal-description').textContent = place.description;
    document.getElementById('modal-location').innerHTML =
        `<a href="https://maps.google.com/?q=${place.location}" target="_blank" style="text-decoration:none;">Konum: ${place.location}</a>`;

    document.getElementById('modal-indicators').innerHTML = place.images.map((_, i) => `
    <button type="button" data-bs-target="#modal-carousel" data-bs-slide-to="${i}"
      ${i === 0 ? 'class="active"' : ''}></button>
  `).join('');

    document.getElementById('modal-images').innerHTML = place.images.map((img, i) => `
    <div class="carousel-item ${i === 0 ? 'active' : ''}">
      <img src="images/${img}" class="d-block w-100 slide-image2" alt="${place.name}">
    </div>
  `).join('');

    const modalEl = document.getElementById('placeModal');

    modalEl.addEventListener('shown.bs.modal', () => {
        const carouselEl = document.getElementById('modal-carousel');
        const existing = bootstrap.Carousel.getInstance(carouselEl);
        if (existing) existing.dispose();
        new bootstrap.Carousel(carouselEl, { interval: 2500, ride: 'carousel' });
    }, { once: true });

    new bootstrap.Modal(modalEl).show();
}

renderCards();