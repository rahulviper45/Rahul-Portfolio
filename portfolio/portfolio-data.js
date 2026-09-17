/**
 * Rahul // Graphic Designer Portfolio
 * Structured Project Data System
 * 
 * To add a new project:
 * Simply add a new object to the corresponding category array below!
 */

const PORTFOLIO_DATA = {
  // ========================================================================
  // CATEGORY 01: CREATIVE ADS (15 Real Client Campaigns)
  // ========================================================================
  creativeAds: [
    {
      id: "ca-01",
      title: "Zandu Dirghayuprash // Anti-Aging & Immunity Campaign",
      brand: "Zandu Care",
      category: "Creative Ads",
      client: "Zandu Care (Emami)",
      year: "2024",
      description: "High-converting social & e-commerce creative highlighting verified customer reviews and 4.5★ Amazon ratings for Zandu Dirghayuprash. Structured around vitality, stamina, and anti-aging benefits.",
      tags: ["Zandu Care", "Health & Wellness", "Social Ad", "Amazon Ad"],
      aspectClass: "aspect-square",
      image: "/Ceative%20Ads/1200x1200%20(4).jpg",
      featured: true
    },
    {
      id: "ca-02",
      title: "Zandu Livital // Ayurvedic Liver Detox Campaign",
      brand: "Zandu Care",
      category: "Creative Ads",
      client: "Zandu Care (Emami)",
      year: "2024",
      description: "Elegantly composed wellness creative featuring customer review badge and herbal tabletop presentation for Zandu Livital Revitalizes Liver Health tablets.",
      tags: ["Zandu Care", "Ayurveda", "Performance Ad", "Social Campaign"],
      aspectClass: "aspect-square",
      image: "/Ceative%20Ads/Artboard%205.jpg",
      featured: true
    },
    {
      id: "ca-03",
      title: "Zandu Shilajit Cool Rush // Burn Without The Heat",
      brand: "Zandu Care",
      category: "Creative Ads",
      client: "Zandu Care (Emami)",
      year: "2024",
      description: "Dynamic sports and fitness performance creative. Pairs athlete planking action with cool-rush formula messaging and promotional 20% discount offer for summer endurance.",
      tags: ["Zandu Care", "Fitness Ad", "Sports Nutrition", "Summer Campaign", "Sale & Offers"],
      aspectClass: "aspect-square",
      image: "/Ceative%20Ads/Burn%20Without%20the%20Heat_Cool%20Rush_1200x1200%20(1).jpg",
      featured: true
    },
    {
      id: "ca-04",
      title: "Meaty Story // Celebrate Bhai Dooj Festive Campaign",
      brand: "Meaty Story",
      category: "Creative Ads",
      client: "Meaty Story",
      year: "2024",
      description: "Warm, appetizing festive dinner table creative celebrating Bhai Dooj. Displays ready-to-eat chicken strips and nuggets with instant grocery delivery partner badges (Blinkit & Zepto).",
      tags: ["Meaty Story", "Festive Ad", "Food & Beverage", "Social Creative"],
      aspectClass: "aspect-square",
      image: "/Ceative%20Ads/Celebrate%20Bhai%20Dooj%20Meaty%20Story.jpg.jpeg",
      featured: true
    },
    {
      id: "ca-05",
      title: "Zandu Gold Plus // Energy + Recovery Combo",
      brand: "Zandu Care",
      category: "Creative Ads",
      client: "Zandu Care (Emami)",
      year: "2024",
      description: "Premium gold-toned fitness product ad showcasing Shilajit Gold Plus and Ashwagandha Gold Plus bundle. Clean gym lighting with striking offer pricing hierarchy.",
      tags: ["Zandu Care", "Combo Offer", "Fitness Nutrition", "Sale & Offers"],
      aspectClass: "aspect-square",
      image: "/Ceative%20Ads/Energy+Recovery_960x1200.jpg",
      featured: true
    },
    {
      id: "ca-06",
      title: "Zandu Good Gut // Cleanse & Detox Shots",
      brand: "Zandu Care",
      category: "Creative Ads",
      client: "Zandu Care (Emami)",
      year: "2024",
      description: "Clean health and active lifestyle creative demonstrating clinically proven results: 89% reduction in bloating with prebiotic and postbiotic Cleanse & Detox shots.",
      tags: ["Zandu Care", "Health & Fitness", "Digestion", "Social Campaign"],
      aspectClass: "aspect-square",
      image: "/Ceative%20Ads/Good%20Gut%20fitness_1200x1200_.jpg",
      featured: false
    },
    {
      id: "ca-07",
      title: "FeedSmart // Herbalicious Jain Ketchup with Pasta",
      brand: "FeedSmart",
      category: "Creative Ads",
      client: "FeedSmart Family Nutrition",
      year: "2024",
      description: "Mouthwatering food photography and product packaging creative pairing FeedSmart herbalicious ketchup (no onion, no garlic) with Italian pasta and fresh farm ingredients.",
      tags: ["FeedSmart", "Food Packaging", "Social Ad", "Healthy Living"],
      aspectClass: "aspect-square",
      image: "/Ceative%20Ads/Jain%20Ketchup%20with%20pasta.jpg.jpeg",
      featured: false
    },
    {
      id: "ca-08",
      title: "FeedSmart // The Healthiest Ketchup Cinematic Look",
      brand: "FeedSmart",
      category: "Creative Ads",
      client: "FeedSmart Family Nutrition",
      year: "2024",
      description: "Award-caliber cinematic commercial key visual featuring floating garden-fresh tomatoes and basil with FeedSmart child-friendly, jaggery-sweetened natural ketchup pouch.",
      tags: ["FeedSmart", "Cinematic Ad", "Key Visual", "Art Direction"],
      aspectClass: "aspect-square",
      image: "/Ceative%20Ads/Ketchup%20Cinematic%20Look.jpg.jpeg",
      featured: true
    },
    {
      id: "ca-09",
      title: "Meaty Story // Happy Dussehra Celebration Post",
      brand: "Meaty Story",
      category: "Creative Ads",
      client: "Meaty Story",
      year: "2024",
      description: "Dramatic crimson textured vector illustration honoring Dussehra and the victory of good over evil. Features an illuminated silhouette of Lord Rama drawing a bow.",
      tags: ["Meaty Story", "Festive Creative", "Vector Art", "Brand Awareness"],
      aspectClass: "aspect-square",
      image: "/Ceative%20Ads/Meaty%20Story%20Dussehra%20Posts.jpg.jpeg",
      featured: false
    },
    {
      id: "ca-10",
      title: "Zandu Care // Payday Sale Flat 35% Off",
      brand: "Zandu Care",
      category: "Creative Ads",
      client: "Zandu Care (Emami)",
      year: "2024",
      description: "High-impact monthly e-commerce flash promotion. Features punchy 3D typography, floating currency motifs, and a lineup of best-selling wellness supplements.",
      tags: ["Zandu Care", "Payday Sale", "Flash Sale", "Sale & Offers"],
      aspectClass: "aspect-square",
      image: "/Ceative%20Ads/PAY%20DAY%20SALE_1200X1200.jpg",
      featured: false
    },
    {
      id: "ca-11",
      title: "Zandu Care // Ayurvedic Pain Relief Potli Therapy",
      brand: "Zandu Care",
      category: "Creative Ads",
      client: "Zandu Care (Emami)",
      year: "2024",
      description: "Serene herbal therapy creative showcasing Zandu Ayurvedic Pain Relief Potli on a carved stone podium with natural sage green lighting.",
      tags: ["Zandu Care", "Ayurveda", "Product Launch", "Pain Relief"],
      aspectClass: "aspect-square",
      image: "/Ceative%20Ads/Potli.jpg",
      featured: true
    },
    {
      id: "ca-12",
      title: "Zandu Care // Republic Day Sale Special",
      brand: "Zandu Care",
      category: "Creative Ads",
      client: "Zandu Care (Emami)",
      year: "2024",
      description: "National holiday themed promotional creative with elegant tricolor elements and an exclusive Free Shilajit + Upto 60% Off gift campaign.",
      tags: ["Zandu Care", "National Holiday", "Special Sale", "Sale & Offers"],
      aspectClass: "aspect-square",
      image: "/Ceative%20Ads/Republic%20Sale%201200x1200.jpg",
      featured: false
    },
    {
      id: "ca-13",
      title: "Zandu Care // Summer Saver Sale Flat 20% Off",
      brand: "Zandu Care",
      category: "Creative Ads",
      client: "Zandu Care (Emami)",
      year: "2024",
      description: "Sunny beachfront summer promotion spotlighting Chandraprash, Ashwagandha 66, and cooling Good Gut shots on golden sand.",
      tags: ["Zandu Care", "Summer Campaign", "Seasonal Discount", "Sale & Offers"],
      aspectClass: "aspect-square",
      image: "/Ceative%20Ads/Summer%20Saver%20Sale%201200x1200.jpg",
      featured: false
    },
    {
      id: "ca-14",
      title: "Zandu Care // Winter Fitness Sale Flat 26% Off",
      brand: "Zandu Care",
      category: "Creative Ads",
      client: "Zandu Care (Emami)",
      year: "2024",
      description: "Crisp outdoor morning grass setting featuring fitness athlete reaching for daily wellness and Shilajitprash supplements with promotional code FIT26.",
      tags: ["Zandu Care", "Winter Campaign", "Fitness Motivation", "Sale & Offers"],
      aspectClass: "aspect-square",
      image: "/Ceative%20Ads/WINTER%20FITNESS%20SALE_1200X1200.jpg",
      featured: false
    },
    {
      id: "ca-15",
      title: "Zandu Care // 'Yawning All Day?' Hidden Stress Ad",
      brand: "Zandu Care",
      category: "Creative Ads",
      client: "Zandu Care (Emami)",
      year: "2024",
      description: "Relatable, high-engagement hook advertisement illustrating workplace fatigue and anxiety, presenting Ashwagandha Gold Plus as the daily stress relief solution.",
      tags: ["Zandu Care", "Problem-Solution Ad", "Stress Relief", "Social Ad"],
      aspectClass: "aspect-square",
      image: "/Ceative%20Ads/Yawning%20All%20Day%201200x1200.jpg",
      featured: true
    }
  ],

  // ========================================================================
  // CATEGORY 02: VIDEO ADS
  // ========================================================================
  videoAds: [
    {
      id: "va-01",
      title: "Zandu Good Gut // Acidity & Bloating Relief Ad",
      category: "Video Ads",
      client: "Zandu Care Official",
      year: "2024",
      duration: "0:30",
      description: "High-impact commercial video advertisement and promotional motion creative for Zandu Good Gut (100% Ayurvedic Fizz). Features realistic product integration, effervescent motion dynamics, and energetic visual storytelling built for social and digital screens.",
      tags: ["Commercial", "Video Ad", "Product Film", "Ayurveda", "Brand Campaign"],
      aspectClass: "aspect-video",
      image: "/video-ads-cover.png",
      videoUrl: "/zandu-good-gut.mp4",
      featured: true
    },
    {
      id: "va-02",
      title: "Velocity Running // Faster Than Light",
      category: "Video Ads",
      client: "Velocity Athletic",
      year: "2024",
      duration: "0:15",
      description: "Punchy, fast-paced kinetic typography and athlete motion graphics cut to an 140 BPM electronic track. Built to convert on TikTok and Meta Stories.",
      tags: ["Kinetic Typography", "Sports Motion", "Short-Form"],
      aspectClass: "aspect-video",
      image: "/cat-video-ads.svg",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      featured: true
    },
    {
      id: "va-03",
      title: "FinTrack Mobile // Future of Wealth",
      category: "Video Ads",
      client: "FinTrack Global",
      year: "2024",
      duration: "0:30",
      description: "Smooth app interface reveal animation with fluid isometric card motions, glowing graph visualizations, and clean UI transitions designed to drive app installs.",
      tags: ["UI Animation", "Fintech Promo", "Explainer Ad"],
      aspectClass: "aspect-video",
      image: "/cat-video-ads.svg",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      featured: false
    },
    {
      id: "va-04",
      title: "Echo Soundscape // Hear Everything",
      category: "Video Ads",
      client: "Echo Acoustics",
      year: "2023",
      duration: "0:20",
      description: "Visual soundwave animations that pulse and deform with atmospheric audio design, showcasing active noise cancellation in immersive urban environments.",
      tags: ["Soundwave Motion", "Tech Product", "Motion Graphics"],
      aspectClass: "aspect-video",
      image: "/cat-video-ads.svg",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
      featured: false
    },
    {
      id: "va-05",
      title: "Volt Energy // Pure Focus Teaser",
      category: "Video Ads",
      client: "Volt Beverages",
      year: "2023",
      duration: "0:15",
      description: "High-voltage motion cut combining glitch transitions, bold neon type lockups, and liquid splash effects for peak social media engagement.",
      tags: ["Brand Teaser", "Glitch Effects", "Fast Cut"],
      aspectClass: "aspect-video",
      image: "/cat-video-ads.svg",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      featured: false
    },
    {
      id: "va-06",
      title: "Horizon Electronic Music Festival 2024",
      category: "Video Ads",
      client: "Horizon Live",
      year: "2023",
      duration: "0:45",
      description: "Full lineup motion graphics reveal featuring laser grid simulations, 3D chrome typography, and dynamic festival stage visual teasers.",
      tags: ["Festival Trailer", "3D Chrome", "Event Visuals"],
      aspectClass: "aspect-video",
      image: "/cat-video-ads.svg",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      featured: true
    }
  ],

  // ========================================================================
  // CATEGORY 03: PRINT MEDIA
  // ========================================================================
  printMedia: [
    {
      id: "pm-01",
      title: "Happy Jars Afters // 6 Flavors Product Leaflet & Flyer",
      category: "Print Media",
      client: "Happy Jars",
      year: "2024",
      description: "Promotional print leaflet and product brochure design for Happy Jars Afters healthy dessert bites. Features 6 distinct flavor pouches (Dark Chocolate, Orange Burst, Coffee Shot, Very Berry, Paan, Nutty Cashew), nutritional callouts (Vegan, High Protein, Gluten Free, No Preservatives), retail partner ecosystem (Amazon, Blinkit, Zepto, CRED), and introductory promotional discount.",
      tags: ["Packaging", "Flyer", "Brochure", "Editorial", "Print Design"],
      aspectClass: "aspect-print",
      image: "/Print Media/Leaflate.png",
      featured: true
    },
    {
      id: "pm-02",
      title: "Happy Jars Retail // In-Store Shelf Strip Collateral",
      category: "Print Media",
      client: "Happy Jars",
      year: "2024",
      description: "Retail point-of-sale shelf strips and supermarket shelf branding banners. High-contrast, vibrant yellow and magenta packaging graphics spotlighting 'Afters Healthy Dessert Bites', 'Chocolate Hazelnut Spread (40% Less Sugar)', and 'High Protein Spreads'.",
      tags: ["Packaging", "POS", "Retail", "Shelf Strip", "Editorial"],
      aspectClass: "aspect-banner",
      image: "/Print Media/Shelf Strip.png",
      featured: true
    },
    {
      id: "pm-03",
      title: "Astral Roast // Specialty Coffee Packaging",
      category: "Print Media",
      client: "Astral Coffee Roasters",
      year: "2024",
      description: "Premium matte black coffee pouch system with holographic copper foil stamping, custom origin badge typography, and embossed tasting note grids.",
      tags: ["Packaging", "Foil Stamping", "Brand Identity"],
      aspectClass: "aspect-print",
      image: "/cat-print-media.svg",
      featured: false
    },
    {
      id: "pm-04",
      title: "Monolith // Architectural Monograph",
      category: "Print Media",
      client: "Studio Monolith Architecture",
      year: "2024",
      description: "Hardcover 240-page architectural portfolio book with Swiss modernist grid system, cloth-bound spine, debossed title typography, and uncoated cotton paper.",
      tags: ["Editorial", "Book Layout", "Typography"],
      aspectClass: "aspect-print",
      image: "/cat-print-media.svg",
      featured: false
    },
    {
      id: "pm-05",
      title: "Nexus Tech Summit 2024 Official Poster",
      category: "Print Media",
      client: "Nexus Global Conference",
      year: "2023",
      description: "A1 silkscreen poster series exploring digital connectivity through bold geometric grids, fluorescent Pantone spot inks, and mathematical typographic rhythm.",
      tags: ["Poster", "Event Poster", "Swiss Style"],
      aspectClass: "aspect-print",
      image: "/cat-print-media.svg",
      featured: false
    },
    {
      id: "pm-06",
      title: "Vanguard Botanicals // Small Batch Gin Bottle",
      category: "Print Media",
      client: "Vanguard Distillery",
      year: "2023",
      description: "Bespoke die-cut wrap-around bottle label with intricate vintage filigree border illustration, metallic gold foil, and textured heritage paper stock.",
      tags: ["Packaging", "Spirits Packaging", "Luxury"],
      aspectClass: "aspect-print",
      image: "/cat-print-media.svg",
      featured: false
    }
  ],

  // ========================================================================
  // CATEGORY 04: WEBSITE CREATIVES
  // ========================================================================
  websiteCreatives: [
    {
      id: "wc-01",
      title: "Happy Jars // Chocolate Hazelnut Spread (40% Less Sugar) Hero Banner",
      category: "Website Creatives",
      client: "Happy Jars",
      year: "2024",
      description: "E-commerce hero website banner celebrating the launch of Happy Jars Chocolate Hazelnut Spread with 40% less sugar. Features dynamic chocolate fluid motion, hazelnut elements, high-contrast typography, and vibrant magenta brand backdrop.",
      tags: ["Hero Banner", "E-Commerce", "Web Creative", "Product Launch"],
      aspectClass: "aspect-banner",
      image: "/Website Banners/Banners (3).png",
      featured: true
    },
    {
      id: "wc-02",
      title: "Happy Jars For Kids // High-Protein Chocolate Spreads Suite",
      category: "Website Creatives",
      client: "Happy Jars",
      year: "2024",
      description: "Multi-color blocked e-commerce category banner showcasing four kid-friendly high-protein spreads: Hazelnut, Banana Chocolate, Almond Berries, and Orange Almond with playful brand illustrations.",
      tags: ["Hero Banner", "E-Commerce", "Collection", "Website Banners"],
      aspectClass: "aspect-banner",
      image: "/Website Banners/Banners (1).png",
      featured: true
    },
    {
      id: "wc-03",
      title: "Happy Jars Afters // Healthy Dessert Bites Four-Flavor Banner",
      category: "Website Creatives",
      client: "Happy Jars",
      year: "2024",
      description: "Clean, high-impact digital storefront promotional banner for Happy Jars Afters dessert bites, featuring Dark Chocolate, Very Berry, Coffee Shot, and Orange Burst with paint-swatch ingredient anchors.",
      tags: ["Hero Banner", "E-Commerce", "Promotion", "Website Banners"],
      aspectClass: "aspect-banner",
      image: "/Website Banners/Banners (2).png",
      featured: true
    },
    {
      id: "wc-04",
      title: "Happy Jars Afters // Real Dark Chocolate & Nuts Ingredient Banner",
      category: "Website Creatives",
      client: "Happy Jars",
      year: "2024",
      description: "Editorial e-commerce banner showcasing the assorted variety plate of Afters dessert bites surrounded by wholesome ingredients: dates, raw almonds, roasted coffee beans, fresh orange, and dark chocolate blocks.",
      tags: ["Hero Banner", "E-Commerce", "Editorial", "Web Creative"],
      aspectClass: "aspect-banner",
      image: "/Website Banners/Banners (4).png",
      featured: false
    },
    {
      id: "wc-05",
      title: "Zandu Care Official // E-Commerce Storefront & Hero Campaign",
      category: "Website Creatives",
      client: "Zandu Care Official",
      year: "2024",
      description: "High-impact homepage hero banner and digital storefront UI creative for Zandu Care, featuring bold headline typography ('Double The Josh'), dynamic 3D product showcase arrangement, and promotional campaign badge.",
      tags: ["Hero Banner", "E-Commerce", "Web Creative", "Brand Campaign"],
      aspectClass: "aspect-banner",
      image: "/Zandu Home page.png",
      featured: true
    },
    {
      id: "wc-06",
      title: "Apex Gaming Portal // Homepage Redesign Assets",
      category: "Website Creatives",
      client: "Apex Gaming Club",
      year: "2024",
      description: "Immersive dark gaming community header graphics, tournament announcement badges, and leaderboards designed for high-density modern screens.",
      tags: ["Hero Banner", "Gaming UI", "Community Portal"],
      aspectClass: "aspect-banner",
      image: "/cat-website-creatives.svg",
      featured: false
    }
  ],

  // ========================================================================
  // CATEGORY 05: ILLUSTRATION
  // ========================================================================
  illustration: [
    {
      id: "il-01",
      title: "Lunar Divide // Broken Heart Moon Silhouette",
      category: "Illustration",
      client: "Editorial & Music Artwork",
      year: "2024",
      description: "Poetic minimalist silhouette illustration depicting two parted lovers standing on opposing cliff edges under a giant, luminous full moon, holding glowing halves of a broken heart across a deep cosmic chasm.",
      tags: ["Vector", "Surrealism", "Minimalist", "Editorial Art"],
      aspectClass: "aspect-square",
      image: "/Illustration/Illustration (5).png",
      featured: true
    },
    {
      id: "il-02",
      title: "The Viper // Randy Orton Tribute Digital Vector Art",
      category: "Illustration",
      client: "Personal Art / Sports Entertainment",
      year: "2024",
      description: "Monumental vector illustration and digital portrait of WWE legend Randy Orton ('The Viper / RKO') posed against a fierce golden-and-crimson viper crest. Combines intricate tattoo vector tracing with clean anatomical cell-shading.",
      tags: ["Vector", "Character Art", "Viper", "Portrait"],
      aspectClass: "aspect-square",
      image: "/Illustration/Illustration (2).png",
      featured: true
    },
    {
      id: "il-03",
      title: "The Game // Triple H 'Thank You HHH' Tribute",
      category: "Illustration",
      client: "Tribute Art Series",
      year: "2024",
      description: "Iconic digital illustration celebrating the legendary career of Triple H ('The Game / The King of Kings'). Features a dramatic green arena light aura, barbed sledgehammer skull emblem, and career highlight photo collage integrated into the bold 'THANK YOU HHH' typographic letters.",
      tags: ["Vector", "Character Art", "Tribute", "Pop Culture"],
      aspectClass: "aspect-square",
      image: "/Illustration/Illustration (1).png",
      featured: true
    },
    {
      id: "il-04",
      title: "Gamer Focus // Red Bull Esports Creator Portrait",
      category: "Illustration",
      client: "Esports & Gaming Collaboration",
      year: "2024",
      description: "High-energy stylized vector illustration of an esports creator drinking Red Bull during an intense gaming session. Styled with custom Red Bull headband, sharp beard line work, and glowing crimson neon gamer bear logo in the dark background.",
      tags: ["Character Art", "Vector", "Esports", "Brand Art"],
      aspectClass: "aspect-square",
      image: "/Illustration/Illustration (3).png",
      featured: true
    },
    {
      id: "il-05",
      title: "Neon Rebel & Pet Hyena // Street Comic Concept",
      category: "Illustration",
      client: "Character Design & Graphic Novel",
      year: "2023",
      description: "Edgy urban graphic novel illustration featuring a dual-colored hair street fighter holding a custom baseball bat with her punk pet hyena against a gritty, glowing green graffiti and neon urban alley backdrop.",
      tags: ["Character Art", "Surrealism", "Comic Art", "Concept Art"],
      aspectClass: "aspect-square",
      image: "/Illustration/Illustration (4).png",
      featured: false
    },
    {
      id: "il-06",
      title: "Totem Beasts // Stylized Animal Icons",
      category: "Illustration",
      client: "Apparel Brand Collab",
      year: "2023",
      description: "Minimalist, aggressive animal heraldry (Viper, Falcon, Wolf, Panther) constructed entirely from golden ratio curves and bold geometric blocks.",
      tags: ["Vector", "Emblem", "Iconography", "Geometry"],
      aspectClass: "aspect-square",
      image: "/cat-illustration.svg",
      featured: false
    }
  ]
};

// ========================================================================
// Dynamic Gallery Renderer & Lightbox Controller
// ========================================================================

// ========================================================================
// Dynamic Gallery Renderer & Lightbox Controller
// ========================================================================

let currentGalleryList = [];
let currentGalleryIndex = 0;
let currentIsVideo = false;

function displayCurrentGalleryItem() {
  if (!currentGalleryList || currentGalleryList.length === 0) return;
  const project = currentGalleryList[currentGalleryIndex];
  if (!project) return;

  const modal = document.getElementById('project-modal');
  if (!modal) return;

  // Media Area: Display 1:1 preview image or video
  const lightboxMedia = modal.querySelector('#modal-media-area') || modal.querySelector('.modal-media-area');
  const titleEl = modal.querySelector('#modal-title') || modal.querySelector('.modal-title');

  if (lightboxMedia) {
    if (currentIsVideo && project.videoUrl) {
      lightboxMedia.innerHTML = `
        <div class="lightbox-video-wrapper">
          <video controls autoplay playsinline src="${project.videoUrl}" class="lightbox-video">
            Your browser does not support the video tag.
          </video>
        </div>
      `;
    } else {
      lightboxMedia.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="lightbox-fullscreen-img" />
      `;
    }
  }

  // Display ONLY the main Project Heading below the square image
  if (titleEl) {
    titleEl.textContent = project.title;
  }

  // Ensure all other metadata elements are cleared / hidden
  const counterEl = modal.querySelector('#modal-counter');
  const brandEl = modal.querySelector('#modal-brand-pill');
  const descEl = modal.querySelector('#modal-desc') || modal.querySelector('.modal-desc');
  const tagsEl = modal.querySelector('#modal-tags');
  const metaGrid = modal.querySelector('.modal-meta-grid');
  const tagEl = modal.querySelector('.modal-tag');
  
  if (counterEl) counterEl.textContent = '';
  if (brandEl) brandEl.textContent = '';
  if (descEl) descEl.textContent = '';
  if (tagsEl) tagsEl.innerHTML = '';
  if (tagEl) tagEl.textContent = '';
  if (metaGrid) metaGrid.innerHTML = '';

  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function openModal(project, isVideo, index, items) {
  if (items && items.length > 0) {
    currentGalleryList = items;
    currentGalleryIndex = typeof index === 'number' ? index : items.indexOf(project);
    if (currentGalleryIndex < 0) currentGalleryIndex = 0;
  } else {
    currentGalleryList = [project];
    currentGalleryIndex = 0;
  }
  currentIsVideo = Boolean(isVideo);
  displayCurrentGalleryItem();
}

function nextGalleryItem() {
  if (!currentGalleryList || currentGalleryList.length <= 1) return;
  currentGalleryIndex = (currentGalleryIndex + 1) % currentGalleryList.length;
  displayCurrentGalleryItem();
}

function prevGalleryItem() {
  if (!currentGalleryList || currentGalleryList.length <= 1) return;
  currentGalleryIndex = (currentGalleryIndex - 1 + currentGalleryList.length) % currentGalleryList.length;
  displayCurrentGalleryItem();
}

function closeModal() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  // Stop video playback if playing
  const video = modal.querySelector('video');
  if (video) {
    video.pause();
    video.src = '';
  }

  modal.classList.remove('is-open');
  document.body.style.overflow = '';
}

function initPortfolioGallery(categoryKey) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  const container = document.getElementById('gallery-container');
  if (!container) return;

  const projects = PORTFOLIO_DATA[categoryKey] || [];
  let activeFilter = 'all';

  function render(items) {
    container.innerHTML = '';

    if (items.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: #94a3b8;">
          <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">No projects found matching this filter.</p>
        </div>
      `;
      return;
    }

    items.forEach((project, idx) => {
      const card = document.createElement('article');
      card.className = 'gallery-card clean-square-card';
      card.setAttribute('data-id', project.id);
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View full-screen preview for ${project.title}`);

      const isVideo = categoryKey === 'videoAds' || Boolean(project.videoUrl);

      card.innerHTML = `
        <div class="card-media-wrap aspect-square">
          <img src="${project.image}" alt="${project.title}" class="card-image" loading="lazy" />
          
          <!-- Hover State: Smooth Dark Overlay + Centered Project Heading only -->
          <div class="card-hover-overlay">
            <h3 class="card-hover-title">${project.title}</h3>
          </div>

          ${isVideo ? `
            <div class="video-play-badge" title="Watch Video">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            ${project.duration ? `<span class="video-duration">${project.duration}</span>` : ''}
          ` : ''}
        </div>
      `;

      card.addEventListener('click', () => openModal(project, isVideo, idx, items));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(project, isVideo, idx, items);
        }
      });

      container.appendChild(card);
    });
  }

  // Filter Buttons Hookup
  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.getAttribute('data-filter');
      activeFilter = filter;

      if (filter === 'all') {
        render(projects);
      } else if (filter === 'featured') {
        render(projects.filter(p => p.featured));
      } else {
        render(projects.filter(p => 
          (p.brand && p.brand.toLowerCase().includes(filter.toLowerCase())) ||
          (p.tags && p.tags.some(t => t.toLowerCase().includes(filter.toLowerCase()))) ||
          (p.title && p.title.toLowerCase().includes(filter.toLowerCase()))
        ));
      }
    });
  });

  // Initial render
  render(projects);
}

// Setup Theme Toggle for Category Pages
function setupPortfolioThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  function updateAriaLabel(theme) {
    const label = theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme';
    themeToggleBtn.setAttribute('aria-label', label);
    themeToggleBtn.setAttribute('title', label);
  }

  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  updateAriaLabel(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const targetTheme = activeTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', targetTheme);
    updateAriaLabel(targetTheme);

    try {
      localStorage.setItem('portfolio-theme', targetTheme);
    } catch (e) {
      console.warn('Could not save theme preference:', e);
    }
  });
}

// Setup modal and theme event listeners
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    setupPortfolioThemeToggle();

    const modal = document.getElementById('project-modal');
    if (!modal) return;

    const closeBtn = modal.querySelector('#modal-close-btn') || modal.querySelector('.modal-close-btn') || modal.querySelector('.lightbox-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    const prevBtn = modal.querySelector('#modal-prev-btn') || modal.querySelector('.lightbox-prev-btn');
    if (prevBtn) prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      prevGalleryItem();
    });

    const nextBtn = modal.querySelector('#modal-next-btn') || modal.querySelector('.lightbox-next-btn');
    if (nextBtn) nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      nextGalleryItem();
    });

    // Clicking OUTSIDE the image / card wrapper closes the modal
    modal.addEventListener('click', (e) => {
      const isInsideCard = e.target.closest('#modal-card-wrapper') || e.target.closest('.modal-container');
      const isNavBtn = e.target.closest('.lightbox-nav-btn') || e.target.closest('.lightbox-close-btn') || e.target.closest('.modal-close-btn');

      if (!isInsideCard && !isNavBtn) {
        closeModal();
      }
    });

    // Keyboard support: Esc to close, Arrow keys to navigate gallery
    document.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('is-open')) return;

      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevGalleryItem();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextGalleryItem();
      }
    });
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PORTFOLIO_DATA, initPortfolioGallery, openModal, closeModal };
}
