/**
 * Rahul // Graphic Designer Portfolio
 * Structured Project Data System
 * 
 * To add a new project:
 * Simply add a new object to the corresponding category array below!
 */

const PORTFOLIO_DATA = {
  // ========================================================================
  // CATEGORY 01: CREATIVE ADS
  // ========================================================================
  creativeAds: [
    {
      id: "ca-01",
      title: "Zandu Shilajit // The Right Energy Campaign",
      category: "Creative Ads",
      client: "Zandu Care Official",
      year: "2024",
      description: "High-impact performance creative and advertising campaign designed for Zandu 100% Pure Himalayan Shilajit. Emphasizes daily vitality, bold typography ('Every Great Day Starts With The Right Energy'), and product-focused visual hierarchy.",
      tags: ["Creative Ad", "Social Campaign", "Art Direction", "Performance Creative"],
      aspectClass: "aspect-ad",
      image: "/creative-ads-cover.png",
      featured: true
    },
    {
      id: "ca-02",
      title: "Aura Audio // Pure Silence Series",
      category: "Creative Ads",
      client: "Aura Sound Labs",
      year: "2024",
      description: "Minimalist, sleek dark aesthetic product ad series spotlighting noise-canceling technology through dramatic lighting, negative space, and refined luxury typography.",
      tags: ["Product Launch", "Luxury Tech", "Print & Digital"],
      aspectClass: "aspect-ad",
      image: "/cat-creative-ads.svg",
      featured: true
    },
    {
      id: "ca-03",
      title: "Verve Botanical // Pure Glow Launch",
      category: "Creative Ads",
      client: "Verve Skincare",
      year: "2024",
      description: "Sophisticated editorial advertising suite incorporating organic earth tones, serene glass textures, and clean typography that communicates purity and premium botanical science.",
      tags: ["Beauty & Wellness", "Social Campaign", "Editorial"],
      aspectClass: "aspect-ad",
      image: "/cat-creative-ads.svg",
      featured: false
    },
    {
      id: "ca-04",
      title: "CyberPulse // Esports Series",
      category: "Creative Ads",
      client: "Pulse Gaming Gear",
      year: "2023",
      description: "Aggressive, high-energy gaming peripheral ad series engineered for Twitch, YouTube pre-rolls, and tech retail displays with glowing cyber-orange highlights.",
      tags: ["Esports", "Display Ads", "Branding"],
      aspectClass: "aspect-ad",
      image: "/cat-creative-ads.svg",
      featured: false
    },
    {
      id: "ca-05",
      title: "Solstice Summer // Retail Billboard",
      category: "Creative Ads",
      client: "Solstice Apparel",
      year: "2023",
      description: "Vibrant high-fashion seasonal campaign blending urban streetwear lifestyle photography with graphic layout overlays and striking typographic statements.",
      tags: ["Fashion Retail", "Outdoor Billboard", "Ad Design"],
      aspectClass: "aspect-ad",
      image: "/cat-creative-ads.svg",
      featured: false
    },
    {
      id: "ca-06",
      title: "Nova Motors // The Electric Edge",
      category: "Creative Ads",
      client: "Nova Automotive",
      year: "2023",
      description: "Futuristic luxury EV promotional creative series capturing aerodynamic motion, speed light trails, and premium German-inspired geometric layouts.",
      tags: ["Automotive", "Key Visual", "Performance Ad"],
      aspectClass: "aspect-ad",
      image: "/cat-creative-ads.svg",
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

function initPortfolioGallery(categoryKey) {
  const container = document.getElementById('gallery-container');
  if (!container) return;

  const projects = PORTFOLIO_DATA[categoryKey] || [];
  let activeFilter = 'all';

  function render(items) {
    container.innerHTML = '';

    if (items.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: #94a3b8;">
          <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">No projects found in this view.</p>
        </div>
      `;
      return;
    }

    items.forEach(project => {
      const card = document.createElement('article');
      card.className = 'gallery-card';
      card.setAttribute('data-id', project.id);
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View details for ${project.title}`);

      const isVideo = categoryKey === 'videoAds' || Boolean(project.videoUrl);

      card.innerHTML = `
        <div class="card-media-wrap ${project.aspectClass || 'aspect-ad'}">
          <img src="${project.image}" alt="${project.title}" class="card-image" loading="lazy" />
          <div class="card-media-overlay"></div>
          
          ${isVideo ? `
            <div class="video-play-badge" title="Watch Video">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            ${project.duration ? `<span class="video-duration">${project.duration}</span>` : ''}
          ` : `
            <div class="card-expand-badge" title="Expand Project">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15 3 21 3 21 9"></polyline>
                <polyline points="9 21 3 21 3 15"></polyline>
                <line x1="21" y1="3" x2="14" y2="10"></line>
                <line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
            </div>
          `}
        </div>

        <div class="card-info">
          <h3 class="card-title">${project.title}</h3>
          
          <div class="card-tags">
            ${(project.tags || []).map(t => `<span class="card-tag">#${t}</span>`).join('')}
          </div>

          <div class="card-footer-action">
            <span>View Full Artwork</span>
            <span class="action-arrow">→</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openModal(project, isVideo));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(project, isVideo);
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
        render(projects.filter(p => p.tags && p.tags.some(t => t.toLowerCase().includes(filter.toLowerCase()))));
      }
    });
  });

  // Initial render
  render(projects);
}

// Modal handling
function openModal(project, isVideo) {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  const mediaArea = modal.querySelector('.modal-media-area');
  const tagEl = modal.querySelector('.modal-tag');
  const titleEl = modal.querySelector('.modal-title');
  const descEl = modal.querySelector('.modal-desc');
  const clientEl = modal.querySelector('.modal-client-val');
  const yearEl = modal.querySelector('.modal-year-val');
  const categoryEl = modal.querySelector('.modal-category-val');

  if (isVideo && project.videoUrl) {
    mediaArea.innerHTML = `
      <div class="modal-video-wrapper">
        <video controls autoplay playsinline src="${project.videoUrl}" style="width:100%;height:100%;">
          Your browser does not support the video tag.
        </video>
      </div>
    `;
  } else {
    mediaArea.innerHTML = `<img src="${project.image}" alt="${project.title}" />`;
  }

  if (tagEl) tagEl.textContent = project.category;
  if (titleEl) titleEl.textContent = project.title;
  if (descEl) descEl.textContent = '';
  if (clientEl) clientEl.textContent = '';
  if (yearEl) yearEl.textContent = '';
  if (categoryEl) categoryEl.textContent = (project.tags || []).join(' • ');

  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
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

// Setup modal event listeners
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal-close-btn');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
});
