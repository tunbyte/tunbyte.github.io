const I18N = (() => {
    const defaultLang = 'tr';

    const langMeta = {
        az: { flagClass: 'fi-az' },
        tr: { flagClass: 'fi-tr' },
        en: { flagClass: 'fi-gb' },
        ar: { flagClass: 'fi-sa' },
        fa: { flagClass: 'fi-ir' },
    };

    async function loadLocale(lang) {
        try {
            const res = await fetch(`locales/${lang}.json`);
            if (!res.ok) throw new Error(`${lang}.json bulunamadı`);
            return await res.json();
        } catch (err) {
            console.error('Locale yüklenemedi:', err);
            return {};
        }
    }

    function updateFlag(lang) {
        const meta = langMeta[lang];
        if (!meta) return;
        $('#currentFlag').attr('class', `fi fis ${meta.flagClass}`);
        $('.lang-item').removeClass('active');
        $(`.lang-item[data-lang="${lang}"]`).addClass('active');
    }

    async function applyLang(lang) {
        const data = await loadLocale(lang);

        $('html').attr('lang', lang).attr('dir', data.dir || 'ltr');

        const isRtl = data.dir === 'rtl';
        $('#bootstrap-css').attr(
            'href',
            isRtl
                ? 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css'
                : 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
        );

        $('[data-i18n]').each(function () {
            const key = $(this).data('i18n');
            if (data[key]) $(this).text(data[key]);
        });

        $('[data-i18n-placeholder]').each(function () {
            const key = $(this).data('i18n-placeholder');
            if (data[key]) $(this).attr('placeholder', data[key]);
        });

        $('[data-i18n-option]').each(function () {
            const key = $(this).data('i18n-option');
            if (data[key]) $(this).text(data[key]);
        });

        updateFlag(lang);
        localStorage.setItem('lang', lang);

        renderCards(data);

        const openModal = document.querySelector('#placeModal.show');
        if (openModal && typeof openPlaceModal === 'function') {
            const activeId = parseInt(openModal.dataset.activeId);
            if (activeId) openPlaceModal(activeId, data);
        }

        $(document).trigger('langChanged');
    }

    function init() {
        const saved = localStorage.getItem('lang') || defaultLang;
        applyLang(saved); 

        $(document).on('click', '.lang-item', function (e) {
            e.preventDefault();
            const lang = $(this).data('lang');
            localStorage.setItem('lang', lang); 
            location.reload();                  
        })
    };

    return { init, applyLang };
})();

$(document).ready(() => I18N.init());
