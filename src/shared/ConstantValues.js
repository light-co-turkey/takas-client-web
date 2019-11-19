const ConstantValues = {
  dummyValues: {
    1: {
      tr: 'Türkçe Dummy',
      en: 'İngilizce Dummy',
    },
  },
  userRoles: {
    1: {
      tr: 'Restoran Çalışanı',
      en: 'Restaurant Staff',
    },
    2: {
      tr: 'Restoran Yöneticisi',
      en: 'Restaurant Manager',
    },
    // 3: {
    //   tr: 'Zincir Kullanıcısı',
    //   en: 'Chain User',
    // },
    // 4: {
    //   tr: 'Super User',
    //   en: 'Super User',
    // },
  },
  companyTypes: {
    1: {
      tr: 'Bireysel',
      en: 'Personal',
    },
    2: {
      tr: 'Kurumsal',
      en: 'Corporate',
    },
  },
  foodOrderStatuses: {
    100: { tr: 'Tamamlanmadı', en: 'Incomplete' },
    200: { tr: 'Durduruldu', en: 'Aborted' },
    300: { tr: 'Gözatılıyor', en: 'Browsing' },
    400: { tr: 'Onay Bekleniyor', en: 'Verifying' },
    500: { tr: 'Hazırlanıyor', en: 'Preparing' },
    550: { tr: 'Hazırlandı', en: 'Prepared' },
    600: { tr: 'Kurye Onayı Bekleniyor', en: 'Handover' },
    700: { tr: 'Müşteriye Gidiyor', en: 'Onway' },
    800: { tr: 'Adrese Ulaştı', en: 'Reached' },
    900: { tr: 'Teslim Edildi', en: 'Delivered' },
    1000: { tr: 'Oylandı', en: 'Rated' },
    1500: { tr: 'Admin İptal Etti', en: 'Canceled by Admin' },
    1600: { tr: 'Restoran İptal Etti', en: 'Canceled by Restaurant' },
  },
  RESTAURANT_STATUS: {
    100: {
      tr: 'Açık',
      en: 'Open',
    },
    200: {
      tr: 'Meşgul',
      en: 'Busy',
    },
    300: {
      tr: 'Kapalı',
      en: 'Closed',
    },
    400: {
      tr: 'Silindi',
      en: 'Deleted',
    },
  },
  BANK_CODES: {
    1: {
      bankIca: '2110',
      eftCode: '0046',
      name: 'Akbank T.A.S.',
      code: 1,
    },
    2: {
      bankIca: '2030',
      eftCode: '0062',
      name: 'Turkiye Garanti Bankasi A.S.',
      code: 2,
    },
    3: {
      bankIca: '1684',
      eftCode: '0111',
      name: 'Finansbank A.S.',
      code: 3,
    },
    4: {
      bankIca: '2117',
      eftCode: '0067',
      name: 'Yapi Ve Kredi Bankasi A.S.',
      code: 4,
    },
    5: {
      bankIca: '9165',
      eftCode: '0032',
      name: 'Turk Ekonomi Bankasi A.S.',
      code: 5,
    },
    6: {
      bankIca: '2119',
      eftCode: '0015',
      name: 'Turkiye Vakiflar Bankasi T.A.O.',
      code: 6,
    },
    7: {
      bankIca: '2374',
      eftCode: '0010',
      name: 'T.C. Ziraat Bankasi A.S.',
      code: 7,
    },
    8: {
      bankIca: '3081',
      eftCode: '0012',
      name: 'Turkiye Halk Bankasi A.S.',
      code: 8,
    },
    9: {
      bankIca: '9088',
      eftCode: '0096',
      name: 'Turkish Bank A.S.',
      code: 9,
    },
    10: {
      bankIca: '6701',
      eftCode: '0109',
      name: 'Tekstil Bankasi A.S.',
      code: 10,
    },
    11: {
      bankIca: '7244',
      eftCode: '0092',
      name: 'Citibank A.S.',
      code: 11,
    },
    12: {
      bankIca: '7182',
      eftCode: '0103',
      name: 'Fibabanka A.S.',
      code: 12,
    },
    13: {
      bankIca: '7338',
      eftCode: '0134',
      name: 'Denizbank A.S.',
      code: 13,
    },
    14: {
      bankIca: '7656',
      eftCode: '0123',
      name: 'HSBC Bank A.S.',
      code: 14,
    },
    15: {
      bankIca: '2029',
      eftCode: '0099',
      name: 'ING Bank A.S.',
      code: 15,
    },
    16: {
      bankIca: '7160',
      eftCode: '0135',
      name: 'Anadolubank A.S.',
      code: 16,
    },
    17: {
      bankIca: '9299',
      eftCode: '0059',
      name: 'Sekerbank T.A.S.',
      code: 17,
    },
    18: {
      bankIca: '8914',
      eftCode: '0205',
      name: 'Kuveyt Turk Katilim Bankasi',
      code: 18,
    },
    19: {
      bankIca: '4033',
      eftCode: '0208',
      name: 'Asya Katilim Bankasi A.S.',
      code: 19,
    },
    20: {
      bankIca: '10554',
      eftCode: '0203',
      name: 'Albaraka Turk Katilim Bankasi',
      code: 20,
    },
    21: {
      bankIca: '10684',
      eftCode: '0206',
      name: 'Turkiye Finans Katilim Bankasi',
      code: 21,
    },
    22: {
      bankIca: '3771',
      eftCode: '0064',
      name: 'Turkiye Is Bankasi A.S.',
      code: 22,
    },
    23: {
      bankIca: '14348',
      eftCode: '0142',
      name: 'Bankpozitif Kredi Ve Kalkinma Bankasi A.S.',
      code: 23,
    },
    24: {
      bankIca: '14194',
      eftCode: '0146',
      name: 'Odea Bank A.S.',
      code: 24,
    },
    25: {
      bankIca: '15140',
      eftCode: '0143',
      name: 'Aktif Yatirim Bankasi A.S.',
      code: 25,
    },
    26: {
      bankIca: '',
      eftCode: '0124',
      name: 'Alternatif Bank A.S.',
      code: 26,
    },
  },
  PRODUCT_OPTION_TYPES: {
    1: {
      tr: 'Metin',
      en: 'Text',
    },
    2: {
      tr: 'Ürün',
      en: 'Product',
    },
  },
};

export default ConstantValues;
