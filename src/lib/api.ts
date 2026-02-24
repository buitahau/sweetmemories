import type {
  Category,
  Template,
  Settings,
  TemplateConfig,
  User,
  DashboardStats,
  GalleryItem,
  PublicBook,
} from '../types';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const MOCK_CATEGORIES: Category[] = [
  {
    id: 'baby',
    name: 'Baby Memories',
    photoCount: 12,
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA1Qhp41ajsjkJ2JQQcIikiuTfFK5jjWyOWOJtxv08zfwtJ2oKQ9eJjnq4wu8Ke2XYWKN4Yt8mISgck4CZrHgzC2_UMPNybfg3fgKvPm_-Q_68n6lRHcvSWoFJA1aE2tJj5ea7-PE2wami32l3ZeIOHuRrkTuI6J1tzfDaBMTNYGSc6SzLZJuroH-2ZU56f5Ytbq0eVkDygCwqLKCbU46c6CarSOroNu_RhuERL-rBlSX3GLA5oEYA2rEeFV6iYp1ADvsHSsTeyjzzr',
    updatedAt: 'Updated 2d ago',
    badge: 'Updated 2d ago',
  },
  {
    id: 'school',
    name: 'School Years',
    photoCount: 8,
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAHZwxnkqBYj8D8_wCHGy2VxtfJAllFInPjDWrm_GGW6mnn5CFrAnqt4EUjHHuV25jcpRXhOFpQQBxG_MI5Kyz4vuS96bS7uNBBfYZnbDgmfazY9JmKv4NPgcFg-Nr4w2k9CXFfsBCT--zFtSgbwrnu5hmGQkFVZ3QWcezg4to4M0R9UWqXDsRMIzE-kXwVtMF4DucLYzml9NQLNA8l3OPsJgQ5QxYp2dgkJLkqTObA18mp3c67iEHTg71l7Sx51sSmsRoR8prLfdgK',
    updatedAt: 'Updated 1w ago',
  },
  {
    id: 'vacation',
    name: 'Summer Vacation',
    photoCount: 22,
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB4YFtddkVuG9gHCK91TZurUTHvJ7gw1OsnCfkxkEE0lzXGfaKTAZisdJC8zaUR4PG6zWGVGTOXjloyNbzeKV1yYpI9b3lZYUOwpUMC21H4zk0jDtllmGuYnKShd4ckwFiqs5v8h5_Bg3Eafse7kPZPF3rXjLmPDWVBHHBAMiAqrnWSksun3BXIUt6_abdXBl8Q0DGyBqjbe43gNoo8iyX1uRx1wofm93Eh9D_Z3QyfpHdpP5K2k_niJRZFEHf_gx0CFiywuzkuoeFH',
    updatedAt: 'Updated 1mo ago',
  },
  {
    id: 'wedding',
    name: 'Wedding Day',
    photoCount: 45,
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ_zodGfo8bYYomWUQsVq8_hskoQwbFZtOoj0cocQZkLWhvjBM6IBLpEjMcg1sHQ-BlvlMOgeqp2b9WKZxjptehsF6SCeVNUZffHOabHiMMnsDU0LQcqrUroCFffFJeAGPy17iFOR8SKsBw3dU-1TJb7hSKy04pD-4uCbiiGKwXbyxbq6RuFPV9ADXoyerJcOqXe0S56LwgFBjA430GquJ7x44KeJoaRZkvFr0-6-Tu1gruVH8FDQhN-AQxBEodlviKNcY0zq5GDnV',
    updatedAt: 'Updated 3h ago',
    badge: 'Updated 3h ago',
  },
];

const MOCK_TEMPLATES: Template[] = [
  {
    id: 'classic-white',
    name: 'Classic White',
    description: 'Elegant and traditional layout focusing on purity and peace.',
    previewImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCHQ7XtSYAzdmrSAg9AUaFd6K4FhPLDrUmvp864lzlkmPipEImyPocuLqXw5CFtfsa8XHmTrOvfq-spBvjBFIe5Qcx5XE9ezK7wrKo5cg7m8nmkrTEsJz2pBZG6_NcfZf0au6OXUq1d_0_RB9HIiI8NP8CGUdBoQThviXjXT_eAqPWTyVvN9ZjlebSiT2gv7jHD73I9CWDxvk6BX1Nuu2PryGqSKXuwc5eKO-Igt00GXFwDcz7rCkln27d5WcZp9EDZqlAs-yr7LB4T',
    isSelected: true,
  },
  {
    id: 'modern-timeline',
    name: 'Modern Timeline',
    description: "A dynamic chronological view of life's most precious milestones.",
    previewImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCufiP7Y9EVDGekyH5oYC24BB5j0cqMUlPNBb4_FOmQmdFxS00XrxrwNVA3uWONqwj21iKVmmVIrgldN79TBTOEsdhwa8_UlR1lmByWKyPQYEC1vkjBK5GSl_LpjkqaNZafFC1UvMSghJDQmSTWDmzwrsGYgm8pORPm3F8kP1NRa4We9tBpA_h1yrDq06mkLS50cW859tJoypWyUqu0RcXRtq7mg3wXSjzze82h_QtG1XwPQ5dN1yMItriOWmvksx9jgClNIkaCWZ1u',
  },
  {
    id: 'soft-gallery',
    name: 'Soft Gallery',
    description: 'Visual-first approach using beautiful photo grids and soft colors.',
    previewImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDYPVK5TiBpzILEs77NSWFbhTskwjYVlQjN8348RluCVPeHb5otlJEIVaG3tHEfzvgv4xyQxb5t82Z1aP4QB_C4BUmhD4jq1levx3viXFXUku7ToEqNisfxwvzw6VcFvfJYtAJlsT3Y8g5FAlRNQdujW0Rm0LIgCJm7CyU5u4HbTFfpvS95XoozJMhtnfAAAtt8ByLuzc3xqb42lIK0fthWJVsej2iGRhqJWbZSSk0oRI5FptIcFR9t9W0fv1-kf4_MrkfTDM3r__7N',
    isPopular: true,
  },
  {
    id: 'natures-peace',
    name: "Nature's Peace",
    description: 'Earth-toned palette and organic layouts for a calm remembrance.',
    previewImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDOCjqIZ7SYSHvRJm2Lf4q9mzbNLxykFOLiYiNUqpTr5zTv-UWVzjw4eKZol6adYpCKirKV6hbYs73JJ-icWnCSfHAqfk9QzXerg6Vp-sK6VAOq_I-kaHA2G9kl-AQmdPh72IIJB12c8tNmDlg4VIo8OuZgVyHM3yUTRSO0c5jUsWUwuENeRISO-GGD3w-BkL0rePKHqOZ0_6iRGGshP9gTNIhQeFbtRLwqFY1zO7aPjK4v1BGOddxlJs__z1FxMey9p9jOfUgQ7ebS',
  },
];

const MOCK_SETTINGS: Settings = {
  siteTitle: "Anna's Sweet Memories",
  description: '',
  subdomain: 'anna',
  isPublic: true,
  hideFromSearch: false,
};

const MOCK_TEMPLATE_CONFIG: TemplateConfig = {
  selectedTemplate: 'modern',
  isPublished: true,
  heroImageId: 'hero-1',
  description: '',
  selectedCategories: ['first-steps', 'birthday-bash'],
};

const MOCK_USER: User = {
  name: 'Alex Rivera',
  role: 'Admin Account',
  avatar:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCqqNL73i5WEepyIxQkYX-alDD1GuW5htrp7TlHsOnjBwnqbKxjl1vRNLlgHu4UuAI2lsVH2tlOPfT2j_dNBhjZNwCuXRCLlWwn2AtrUCMuCfTKa91Yy_kuYfcNnuL5SHJtDwWiPnTx887J3dxlEB68aFQBRjpVylkyH7y60pyQqdszpgtsXw_SLl70Fr243q_Gh7Pkt8RSM-30D6EvWfB_RppkWL2UMvJjATAt5Ajc-qQ5VgL0ziIbarhlZxgGLa9ZLib2VgmVAOXU',
};

const MOCK_STATS: DashboardStats = {
  totalPhotos: 42,
  lastUpdateRelative: '2 hours ago',
};

const MOCK_GALLERY: GalleryItem[] = [
  {
    id: '1',
    title: "Baby's First Steps",
    subtitle: 'Stored securely forever',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA9aAaCBF--9sQDRXoVADG9vh_XlVjbBN_OHiD3Buzwb3QHSDt09m5qjFPQpnfR6FefWWFdJgU9KzEpXFXcv8g_XBtFR09FAs7z2tksWkQPR4n_V4wFjpUtmt0GVCD7I1pGfi5LNFaoK4ZW9Kh6JlCf8Gb4kZB76AtvfrgxlASrFDgYCGCt_1n0-KvCCn-gJtZN7t5nvG_JJzE5LM9fC4wyQBN3jVlJ_Y99UBNPG1PNLnEgPHxrTmQfWmGxb9IBtIuVVTl_K2RAdFc0',
  },
  {
    id: '2',
    title: 'Summer Vacations',
    subtitle: 'Shared privately with relatives',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDY28kqTeDsFVudqRepUZMv4gCCZ0yt4VpNm9MsLmY0UsFvSmk4X5-5iDNbzQOlPZ0UtkFwfz0JhAKRMsad3WnpKlRXpnkoPNzhXp3zyLc96E6tsYjwgjVB_Ijqvw9ayeucFXpRiVbQSTirBCguk_ItdAkv5uexwEMoH2sDKq-5NNzKa-yNHjK434E66Y_6IMgsl5dtebiEBTxJCI2xx76xqiLzcj-NgWNKb3pMekzZue9Tt9hyoLSXPGwEVaRbubO_6CMzoaaAG9ZD',
  },
  {
    id: '3',
    title: 'Holiday Traditions',
    subtitle: 'Organized automatically by year',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCwG-A90ouhM5e8qum6S1feT23hwAUFpzDQAHFzTblnZcoI06buOoAjfot1RMi_KKJegBjn8skot9u6TVcJoJKgqdKC5q4pNvJNE6HMwStjBa5wCOsgQAH-Nh0N5lPxYEPKN1tQhJdlEixzIz5TxvSLrhAmhvLACuCNHAcD_n5e8QsPkd_zqICAglGVX_ktEIHoLpSVBpYO5sHOYw0EZVyhPp2FiSJIMq1RhX-fY2MdxHDIfEfWGvStHNe2dZwevuIafZMHN7pn7h_F',
  },
];

const MOCK_PUBLIC_BOOK: PublicBook = {
  slug: 'anna',
  title: "Anna's First Years",
  subtitle: 'A digital legacy of small moments and big milestones.',
  heroImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAvsTLxXEZECLNeD8QuHxBaNP0tdRCvtjf8YoPTlinZ8hLcLgESR8MJbwk3QopEdbEt1BtueJgVYvPuDMt93K9lsKg0KF1wlVT6fTlULpIJ47gA5NN6_2AM_HIl0_HQatdRDudarK0yEeGRssT3hv8D_5F7Car2VaiVdlonJn-anPpKS2WRDz5Lj8hXQSTVqh9DmzTqpRSZeiI7wndeQVhgFXH2dIzV4kKFBUjtu0qzj0Glp6PcZ9NkJCLGyHXFvT0E7hYFEvo2vZhy',
  introText: "A high-end digital photo album of Anna's journey",
  heartCount: 128,
  tabs: ['The First Month', 'Family Holidays', 'First Steps'],
  chapters: [
    {
      id: 'first-month',
      chapterNumber: 'Chapter One',
      title: 'The First Month',
      date: 'August 2023',
      layout: 'featured-grid',
      items: [
        {
          id: 'arrival',
          title: 'Arrival Day',
          description:
            'The day our world changed forever. Weighing 7lbs 4oz, Anna arrived on a quiet Tuesday morning. The air felt still and the light was perfect.',
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAwXUMhvey3fd2wmH4sXdAUmkkze-lyqsGMV7TdY99N-N-C4YprspwccQj-xq10GwqJZyRO1ym79uJFz7r-wgSksVidhq_ldqPijfrL_TYlLoUKvu7Fplf1bS88f962jUQYGNrH9GnvEG8Bsr-GONZ8GH7qMZbSA5YpZ-PU29f4OAUKbgu_XRfFbaOzGCjzfaMb-DHVZaVrYKOF92spkA_Nb0XGfy6G5LX8Zjd7z5sW8VI0iiI9OwRMH1bUEaABq4eLqF9TF60hpaAs',
        },
        {
          id: 'tiny-details',
          title: 'Tiny Details',
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuD3Fl9YgszyOd71feWA2o1KfTJyYL43zPsdsZFfVDatnCc62N1bIdi9ACliIBVu3ieJ14gk2930gqiuvAt4U-6kxdI5GUdDmGc6szlzjTqCnghRIeq-ysIRSUqpgCbCc1LbY-NaYFkW5fXQ_276uNbYAHDtcoX6UCUe5HN9-HpCw1MdPfaOuumflbJGJ_OaTXuwYsRNWgxaAbtEZ0GZLbf4OOLhjiHSQZNSM0yHyqnRDBfQuzNdQYwsQzkWvsATlbDZSwTI53hDNqKT',
        },
        {
          id: 'first-night',
          title: 'First Night Home',
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCO5jSZOYsXIQF9oHf_3aYjMr1PXkiakPKkqx0odQeDVTGxYfCLFwcnKE-xbGNJU_KT1qU0qDaByOZHKuuYwiCN2RWh5yqGQ7N4UOUT0K1ao4KgEpj1H1apV7F1P5NsDyJav2f55xPLPJMcUdqsU2Kd0QnDkaVOkYRdFoMP-PP09BbZ5mmwooW6al8z4demx_4c5QmsCYIAwfCj31d6UuVo5SeX4v027Gg95klMPEjrHH-BFGRNJWzk0E70Bf1y5qtUu3CIvgGQYBWD',
        },
      ],
    },
    {
      id: 'family-holidays',
      chapterNumber: 'Chapter Two',
      title: 'Family Holidays',
      date: 'December 2023',
      layout: 'photo-strip',
      items: [
        {
          id: 'holiday-1',
          title: 'Holiday Sweater',
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAWvQYLY-mAmGFm3BL8QhrwqTcBWTXICrWSS_Z3EhOLRllvDT7fn5IKVehwcHDhwClQ_b0YRm2d0U6lokkSx0lProXJbpdSWbxAHm1rAQC4217rX1U7Lf4kJNiz6Em2vsNpP8KFMLeKhfLjMcC9IGXlnoh4rHsPoZC3yFykSM1PQf_S_AZ-pO3c3KnvuI5GBuMkJh-lXbMYItuGiV3EAerC9z_zvaGWhIrRc3AEgoVYiT7qUhxRwIwJvnMhHyT_Bj66Ahsdf8bMxY-G',
        },
        {
          id: 'holiday-2',
          title: 'Family Dinner',
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAHnJheNS4GjSA4c5r6UJ_UEsCR0VTpgXhT6K8RhBZwHOquM2aHCPl1DvDqcGI6H5U1uT6ko8XFvG9wO_ykQ98IS3FY_gZwKiEjWa_SA6sXKlxl0WH9F43kKmgLRm3ET-ufzprH8sIcAgtZFehx53QHdE9MHIKUplUTOQKbVNp70Bi7COLwWWW3foE6NWRtQgC0g90YaIc0JZtXLE_3LRSv9WBuegXkMKsaLwMC0ynk4p2Gcc0X4o0bFEgvSyQtfIwhr1ewTo8v9jO6',
        },
        {
          id: 'holiday-3',
          title: 'Wrapped Gifts',
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCjJg1HolXm1-ltHxX_NfwV75YBqZuSiNMq0xTvyP0MxztoovrTTswLtGb_ecHCIM4_I5nyGYEJV3xnNWAMsdCRHez2kiFtb_nsVYgp3j2NGi-vro5z6_YJ3smqeIRAe-PvWVeZfiyw7vh1g5Noeg1zkNj8eFtb56HWHcVQuPtsD2hqm-jomocB8UKiTmFg9TOZMPy4SJwHQovtWF63KG_CwtVNFRtz-AHwvBdDT4o8hKuZ0MMlX95TgY0m4YgyaJwb0G1fuFWom9Zf',
        },
        {
          id: 'holiday-4',
          title: 'Cozy Winter',
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCQsxUrlnqOwxPVJI9jMVNV_aTLSmSf7Fgs8H62DxzlETr6bTbrpjEYVhP7bAaGAHWZpI_R2mALc05K86hL7C7eOchyL_FH0YIk83VJmRAM7v2fk1BzHcdpRoDKB2dblcBrzzLnva7v4yrX1m7ZsWqYIO9B9K_qWCoqVRMqKN8g03ZZMfwBxIUKcsooqPI7aMcGyqlr8hxPg6fjNXN2ihOWcTaaAG5wxhRytnDV0hO4hAfp9BFim-H81FZDDPkhSIt9gmpCOwf-VfA3',
        },
      ],
    },
    {
      id: 'first-steps',
      chapterNumber: 'Chapter Three',
      title: 'First Steps',
      date: 'June 2024',
      layout: 'quote-video',
      quote:
        '"One small step for Anna, one giant leap for our living room carpet. Today, June 14th, she let go of the coffee table and took three shaky, magnificent steps toward us."',
      videoThumbnail:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAXLW3ta1xARElFpASE6MIkdOgnYor3f8kT-Opjm2VWzEfFDJbrhx15MLa52qGi2F2YouX4eCw-JqGpCdeXKYWBkGJ_qO3BkCXcrB4o6xZsax-XXO8sx-SNupv_kXYP2WP1Kg0I5nnrtOwvNwmR30wp4VDKP81apF4Nyrraz17vmRFkzHP0rmqA10qs936IhjMu2v7h3LSerlXhFhBp6fhFobgovgXRbkwIr2LwaGCseGC5nKysgwZp5HvuW4PuQWAxf-XirM-cxFDU',
      items: [],
    },
  ],
};

export async function getCategories(): Promise<Category[]> {
  await delay(200);
  return MOCK_CATEGORIES;
}

export async function getTemplates(): Promise<Template[]> {
  await delay(200);
  return MOCK_TEMPLATES;
}

export async function getSettings(): Promise<Settings> {
  await delay(200);
  return { ...MOCK_SETTINGS };
}

export async function updateSettings(settings: Settings): Promise<Settings> {
  await delay(200);
  return settings;
}

export async function getTemplateConfig(): Promise<TemplateConfig> {
  await delay(200);
  return { ...MOCK_TEMPLATE_CONFIG };
}

export async function updateTemplateConfig(config: TemplateConfig): Promise<TemplateConfig> {
  await delay(200);
  return config;
}

export async function getUser(): Promise<User> {
  await delay(200);
  return { ...MOCK_USER };
}

export async function getDashboardStats(): Promise<DashboardStats> {
  await delay(200);
  return { ...MOCK_STATS };
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
  await delay(200);
  return MOCK_GALLERY;
}

export async function getPublicBook(slug: string): Promise<PublicBook> {
  await delay(200);
  if (slug === 'anna' || slug) {
    return { ...MOCK_PUBLIC_BOOK, slug };
  }
  throw new Error(`Book not found: ${slug}`);
}
