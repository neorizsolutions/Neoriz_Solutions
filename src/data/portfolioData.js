// Active curated portfolio containing the 6 approved projects
export const projectsData = [
  {
    id: "tablo-self-ordering",
    name: "TABLO — Self-Ordering",
    slug: "tablo-self-ordering",
    category: "Products",
    industry: "Quick-Service Restaurants / Express Ordering",
    projectType: "product",
    description: "Customer-owned smartphone ordering and counter collection solution featuring temporary inventory holds, online payments, and counter receipt validation.",
    image: "/images/portfolio/tablo/self-ordering/final/self-ordering-hero.jpg",
    gallery: [
      "/images/portfolio/tablo/self-ordering/final/self-ordering-hero.jpg",
      "/images/portfolio/tablo/self-ordering/final/self-ordering-product-collage.jpg",
      "/images/portfolio/tablo/self-ordering/final/self-ordering-mobile-showcase.jpg",
      "/images/portfolio/tablo/self-ordering/final/self-ordering-workflow.jpg",
      "/images/portfolio/tablo/self-ordering/final/self-ordering-alternate-showcase.jpg"
    ],
    website: "https://tablo.neorizsolutions.com/#self-ordering",
    ctaLabel: "View Product Overview",
    featured: true,
    tagline: "Mobile digital ordering, secure online checkout, and validated counter collection for express dining.",
    overview: "TABLO Self-Ordering is a digital ordering and counter-collection solution designed for quick-service restaurants, express cafés, and food courts. Rather than lining up at a cashier counter, guests scan a public Menu QR using their smartphone camera to browse the menu, customize items, and pay online directly in their mobile browser. Once payment is confirmed, the customer receives a distinct digital Order QR token that is scanned at the pickup counter to validate the order and automatically print itemized receipts and kitchen slips.",
    challenge: {
      requirements: "Provide a friction-free mobile ordering experience that operates across standard smartphone browsers without requiring diners to install a native app, while ensuring real-time menu availability and reliable counter pickup coordination.",
      businessProblem: "During busy meal periods, counter ordering bottlenecks lead to long customer queues, misheard order requests, and high cashier staffing overhead.",
      userChallenges: "Diners want to review clear item pricing, explore dish photos and dietary modifiers comfortably on their own devices, and complete checkout quickly without waiting for cashier availability.",
      industryChallenges: "Preventing customers from ordering items that have run out of stock during peak rushes, while separating open public menu browsing from paid, validated order collection."
    },
    strategy: {
      uxPlanning: "Engineered an 8-step customer journey: Public Menu QR Scan → Visual Catalog Exploration → 5-Minute Inventory Hold → Secure Online Payment → Separate Order QR Issuance → Counter Optical Validation → Single-Billing Thermal Print → Order Handover.",
      infoArchitecture: "Clear separation between public discovery and verified order fulfillment: the public Menu QR placard directs phones to the interactive catalog, whereas a dedicated Order QR token is generated only after payment is verified.",
      wireframes: "Mobile-optimized catalog layout with visual category tabs, transparent modifier selectors, dynamic cart summary, and high-visibility pickup token screens.",
      designDecisions: "A clean, responsive mobile web interface engineered to load instantly across standard mobile browsers without login or registration barriers."
    },
    designSystem: {
      typography: "Modern display typography for clear dish titles and category headers, paired with highly legible body styling for ingredients, pricing, and modifier options.",
      spacing: "Ergonomic mobile touch targets calibrated for comfortable one-handed navigation on personal smartphones.",
      philosophy: "Frictionless self-service. Eliminate app installation hurdles, keep inventory status transparent, and ensure counter pickup is quick and orderly.",
      components: "Dish selection cards, modifier option selectors, countdown cart reservation tickers, digital Order QR badges, and counter validation status panels.",
      hierarchy: "Prominent visual menu categories leading to dish customization, real-time cart review, and post-payment order token presentation."
    },
    process: {
      planning: "Workflow mapping across counter ordering touchpoints, checkout inventory holds, and optical pickup validation.",
      design: "Mobile-first digital menu interface, post-payment pickup token screens, and centralized restaurant management dashboards.",
      development: "Interactive customer ordering flow, temporary stock reservation timer, online payment verification, and counter validation workflow.",
      testing: "Cross-device browser compatibility testing on iOS Safari and Android Chrome across varied screen resolutions.",
      launch: "Product deployment, counter hardware setup guidance, and restaurant operational onboarding."
    },
    features: [
      {
        title: "Customer Smartphone Ordering",
        desc: "Diners scan the entrance or counter Menu QR to explore food categories, customize modifiers, and order directly on their mobile browser without downloading an app."
      },
      {
        title: "5-Minute Inventory Hold",
        desc: "Temporarily reserves selected dish quantities during checkout to prevent concurrent double-ordering, releasing stock automatically if payment is abandoned."
      },
      {
        title: "Secure Online Payment",
        desc: "Supports digital checkout via UPI, debit/credit cards, and netbanking, ensuring orders are verified before pickup tokens are generated."
      },
      {
        title: "Dedicated Order QR Pickup Token",
        desc: "Issues a unique digital Order QR and pickup number exclusively after successful payment, completely separate from the public restaurant menu QR code."
      },
      {
        title: "Counter Scanner & Thermal Printing",
        desc: "Hands-free optical scanning at the collection counter validates the Order QR, enforces single-billing duplicate protection, and automatically prints the official thermal receipt and kitchen slip."
      },
      {
        title: "Live Order Queue Monitor",
        desc: "Operational dashboard displaying incoming orders categorized by clear fulfillment stages: Pending, Paid, and Completed."
      },
      {
        title: "Stock & Availability Management",
        desc: "Instant one-tap toggles allow restaurant staff to mark dishes as available or out-of-stock, immediately updating customer digital menus."
      },
      {
        title: "Sales Analytics & Excel Reports",
        desc: "Summarizes gross sales, order volume, and average order value, with one-click export of itemized transaction data to Microsoft Excel for bookkeeping."
      }
    ],
    techStack: [
      "Mobile Web Ordering",
      "Digital Menu & QR Ordering",
      "Online Payments",
      "Inventory & Order Management",
      "Counter Scanner & Receipt Printing",
      "Sales Analytics & Excel Reports"
    ],
    intendedOutcomes: {
      title: "Intended Operational Benefits",
      description: "Operational objectives designed for fast-casual and counter-service dining:",
      points: [
        { title: "Queue Reduction", desc: "Designed to shift high-volume ordering from cashier queues to parallel customer smartphone ordering." },
        { title: "Stock Accuracy", desc: "Automated 5-minute stock reservations during checkout prevent concurrent ordering of depleted items." },
        { title: "Collection Control", desc: "Separating online payment confirmation from hands-free counter token validation prevents duplicate meal collections." }
      ]
    }
  },
  {
    id: "tablo-table-qr",
    name: "TABLO — Table QR",
    slug: "tablo-table-qr",
    category: "Products",
    industry: "Full-Service Dining / Table-Associated Ordering",
    projectType: "product",
    description: "Table-associated digital ordering and kitchen coordination solution for dine-in restaurants, enabling in-seat mobile ordering without counter hardware.",
    image: "/images/portfolio/tablo/table-qr/final/table-qr-hero.jpg",
    gallery: [
      "/images/portfolio/tablo/table-qr/final/table-qr-hero.jpg",
      "/images/portfolio/tablo/table-qr/final/table-qr-product-collage.jpg",
      "/images/portfolio/tablo/table-qr/final/table-qr-mobile-showcase.jpg",
      "/images/portfolio/tablo/table-qr/final/table-qr-workflow.jpg",
      "/images/portfolio/tablo/table-qr/final/table-qr-alternate-showcase.jpg"
    ],
    website: "https://tablo.neorizsolutions.com/#table-qr",
    ctaLabel: "View Product Overview",
    featured: true,
    tagline: "Table-linked digital ordering, live kitchen coordination, and centralized operational monitoring for dine-in venues.",
    overview: "TABLO Table QR is a table-associated digital ordering and dining management solution engineered for full-service restaurants, casual eateries, pubs, and table-service cafés. Guests scan a table-specific QR code placard from their seats using their smartphone camera, browse the interactive digital menu in their mobile browser without downloading an app, and submit orders directly to restaurant operations. Orders appear immediately on the restaurant's operational display with table information and itemized modifiers, allowing kitchen and floor staff to coordinate preparation and deliver meals accurately to the correct table.",
    challenge: {
      requirements: "Provide a responsive in-seat digital ordering experience linked to specific dining tables that works across standard mobile browsers without requiring guests to install an app, while keeping kitchen and service staff aligned in real time.",
      businessProblem: "During busy dining shifts, waitstaff spend significant time delivering paper menus, handwriting order notes, and manually re-entering tickets, leading to service delays and kitchen communication errors.",
      userChallenges: "Diners want immediate access to menus, transparent pricing, dish descriptions, allergen information, and dietary modifier options without waiting for available floor staff.",
      industryChallenges: "Connecting table-level dining requests directly with kitchen preparation workflows while preserving attentive guest hospitality and keeping front-of-house hardware simple."
    },
    strategy: {
      uxPlanning: "Structured around a verified 5-step table ordering workflow: Table QR Placard Scan → In-Seat Digital Menu Browsing → Table-Tagged Order Submission → Real-Time Kitchen Display Reception → Staff Food Delivery to Table.",
      infoArchitecture: "Binds the mobile session to the physical dining table number, routing submitted tickets directly to central kitchen and service displays while separating active ordering from planned end-of-meal tab settlement.",
      wireframes: "Clean mobile menu interface featuring clear category navigation, dish photography, itemized preparation modifier selectors, real-time availability badges, and table-tagged order confirmation views.",
      designDecisions: "A focused, accessible mobile web layout designed for clear readability across varied dining room lighting conditions, requiring zero guest registration or account setup."
    },
    designSystem: {
      typography: "Modern display typography for clear dish titles and category headers, paired with highly legible body styling for ingredients, pricing, and modifier options.",
      spacing: "Comfortable touch-friendly spacing calibrated for handheld mobile browsing while seated at a dining table.",
      philosophy: "Hospitality-first clarity. Make menu exploration intuitive from the seat, route orders accurately with table numbers, and eliminate front-of-house hardware complexity.",
      components: "Table identifier badges, category selection carousels, dish cards with modifier selectors, out-of-stock indicators, and operational kitchen ticket cards.",
      hierarchy: "Table identity banner leading to categorized dishes, item customization drawers, and table-confirmed order submission."
    },
    process: {
      planning: "Analysis of dine-in floor operations, table placard placement strategies, and kitchen order dispatch workflows.",
      design: "Mobile-first digital menu interface, table-associated order confirmation screens, and centralized kitchen operations displays.",
      development: "Table-linked session binding, interactive menu navigation, real-time order status tracking, and management dashboard controls.",
      testing: "Cross-device browser compatibility audits on iOS Safari and Android Chrome across varied tablet and mobile screen sizes.",
      launch: "Venue onboarding, table QR placard deployment guidance, and staff operational training."
    },
    features: [
      {
        title: "Table-Associated Mobile Ordering",
        desc: "Guests scan a dedicated table QR placard (e.g., Table 04) to access the digital menu and submit orders directly from their seats without app downloads."
      },
      {
        title: "Digital Dine-In Menu",
        desc: "Categorized digital catalog showcasing food photography, clear pricing, dish descriptions, dietary tags, and selectable preparation modifiers."
      },
      {
        title: "Kitchen Order Monitoring",
        desc: "Centralized operational screen displaying incoming orders tagged with table numbers, preparation notes, and status tracking across Pending, In Progress, and Completed."
      },
      {
        title: "Table-Side Hospitality Delivery",
        desc: "Kitchen staff prepare orders with clear digital table tags, enabling waitstaff to focus on meal quality, table care, and prompt food delivery."
      },
      {
        title: "Live Menu & Availability Controls",
        desc: "Instant one-tap management toggles allow staff to mark ingredients or dishes as available or out-of-stock, immediately reflecting on customer menus."
      },
      {
        title: "Sales Analytics & Excel Reports",
        desc: "Summarizes dine-in sales totals, order volumes, average order value, and peak dining trends, with one-click export to Microsoft Excel for bookkeeping."
      }
    ],
    techStack: [
      "Table QR Ordering",
      "Digital Dine-In Menu",
      "Kitchen Order Management",
      "Restaurant Operations Dashboard"
    ],
    intendedOutcomes: {
      title: "Intended Operational Benefits",
      description: "Operational objectives designed for full-service and casual dining rooms:",
      points: [
        { title: "Order-Taking Efficiency", desc: "Designed to allow guests to browse and order at their own pace upon seating, reducing initial wait times during peak dining rushes." },
        { title: "Kitchen Clarity", desc: "Digital tickets tagged with table numbers and specific guest preparation notes eliminate handwritten pad ambiguity and missed tickets." },
        { title: "Minimal Hardware Footprint", desc: "Operates completely on standard web screens and guest mobile devices, requiring no specialized counter scanners or dedicated billing terminals." }
      ]
    }
  },
  {
    id: "nox-fight-club",
    name: "NOX Fight Club",
    slug: "nox-fight-club",
    category: "Client Projects",
    industry: "Athletics / Combat Sports & Martial Arts",
    projectType: "client",
    description: "High-octane digital presence and admissions portal for Kozhikode's premier combat sports academy, featuring comprehensive martial arts disciplines and training batch schedules.",
    image: "/images/portfolio/nox-fight-club/final/nox-hero.jpg",
    gallery: [
      "/images/portfolio/nox-fight-club/final/nox-hero.jpg",
      "/images/portfolio/nox-fight-club/final/nox-website-collage.jpg",
      "/images/portfolio/nox-fight-club/final/nox-mobile-showcase.jpg",
      "/images/portfolio/nox-fight-club/final/nox-training-showcase.jpg",
      "/images/portfolio/nox-fight-club/final/nox-alternate-showcase.jpg"
    ],
    website: "https://noxfightclub.neorizsolutions.com/",
    ctaLabel: "View Live Website",
    featured: true,
    tagline: "Premier martial arts academy and boxing gym in Kozhikode, Kerala.",
    overview: "NOX Fight Club is an elite combat sports academy and boxing gym located in Olavanna, Kozhikode, Kerala. Designed with a high-intensity, dark athletic aesthetic, the website serves as the digital flagship for the academy. It showcases six core combat disciplines (Boxing, Muay Thai, Kickboxing, Grappling & BJJ, MMA, and Strength & Conditioning), daily batch schedules (Morning, Kids, and Night Batches), certified coaches, fighter training facility galleries, and single-tap WhatsApp trial booking.",
    challenge: {
      requirements: "Deliver an authoritative, cinematic combat sports web presence featuring detailed training curriculum breakdowns, daily batch timetables, coach profiles, and immediate lead generation via direct WhatsApp integration.",
      businessProblem: "Traditional gym websites often rely on generic fitness templates that fail to capture the discipline, technical intensity, and community culture of a genuine martial arts fight club.",
      userChallenges: "Prospective fighters, fitness enthusiasts, and parents need to quickly understand age prerequisites, training times (Morning, Kids, Night Batches), discipline requirements, and gym location before visiting.",
      industryChallenges: "Balancing dark, aggressive visual energy (deep blacks, blood-red #DC2626 accents, and heavy typography) with fast loading performance and accessible mobile navigation."
    },
    strategy: {
      uxPlanning: "Engineered an adrenaline-fueled conversion flow: High-Voltage Hero Statement → Core Combat Disciplines Grid → Daily Batch Schedule Matrix → Facility Gallery & Coach Roster → Direct WhatsApp Trial Registration.",
      infoArchitecture: "Comprehensive curriculum organized into six combat pillars: Traditional Boxing, Muay Thai (The Art of Eight Limbs), Kickboxing, Grappling & BJJ, Mixed Martial Arts (MMA), and Strength & Conditioning.",
      wireframes: "Split-layout discipline showcases with technical style breakdowns, batch timetable cards with exact hours, and persistent floating WhatsApp quick-contact triggers.",
      designDecisions: "Dark, battle-tested palette combining deep void blacks (#0A0A0A) and carbon grays with razor-sharp crimson red accents, paired with Bebas Neue display typography and Inter for instructional reading."
    },
    designSystem: {
      typography: "Bebas Neue for commanding, heavyweight athletic titles and display numbers; Inter for class descriptions, schedule details, and address metadata.",
      spacing: "Generous 80px-120px editorial breathing room allowing high-intensity training imagery and cinematic text statements to dominate the screen.",
      philosophy: "Uncompromising combat authority. Every design component reflects strength, technical precision, and elite physical conditioning.",
      components: "Combat discipline cards with who-it's-for breakdowns, daily batch schedule tiles, marquee banner tickers, and high-visibility WhatsApp booking triggers.",
      hierarchy: "Hero headline manifesto leading to training disciplines, structured batch schedules, athlete testimonials, and direct WhatsApp contact."
    },
    process: {
      planning: "Academy brand positioning, fighter persona mapping, class structure indexing, and local Kozhikode search discovery optimization.",
      design: "Dark combat aesthetic prototyping, typography hierarchy using Bebas Neue, and responsive mobile timetable design.",
      development: "Interactive web experience with responsive combat discipline showcases, schedule matrices, and direct messaging workflows.",
      testing: "Cross-device responsiveness testing across mobile viewports, typography legibility checks, and WhatsApp click-to-chat link verification.",
      launch: "High-performance production deployment with automated search engine indexing, structured business schema markup, and speed optimization."
    },
    features: [
      {
        title: "6 Specialized Combat Disciplines",
        desc: "Structured training modules for Western Boxing, Muay Thai, Kickboxing, Grappling & BJJ, MMA, and Strength & Conditioning with dedicated technical breakdowns."
      },
      {
        title: "Daily Batch Schedule Matrix",
        desc: "Clear timetables for Morning Batches (6:30 AM – 8:30 AM), Kids Batches (6:00 PM – 8:00 PM), and Night Batches (8:00 PM – 10:00 PM)."
      },
      {
        title: "Direct WhatsApp Trial Booking",
        desc: "Seamless click-to-chat WhatsApp integration pre-populated with inquiry messages for instant trial session reservations."
      },
      {
        title: "Interactive Facility & Training Gallery",
        desc: "High-contrast visual gallery highlighting ring sparring, heavy bag stations, mat rolling areas, and functional conditioning gear."
      },
      {
        title: "Local SEO & Location Integration",
        desc: "Google Maps integration, full business address in Olavanna, Kozhikode, and optimized schema metadata for combat sports searches in Kerala."
      }
    ],
    techStack: [
      "Combat Curriculum Showcase",
      "Daily Batch Timetables",
      "Direct WhatsApp Booking",
      "Facility & Training Gallery",
      "Local Map & Discovery"
    ],
    intendedOutcomes: {
      title: "Intended Business Benefits",
      description: "Operational and brand objectives established for the academy:",
      points: [
        { title: "Trial Conversion Funnel", desc: "Drives immediate visitor conversions directly to WhatsApp with pre-formatted inquiry text." },
        { title: "Schedule Autonomy", desc: "Enables prospective fighters and parents to quickly find age-appropriate batch times without back-and-forth messaging." },
        { title: "Combat Brand Authority", desc: "Positions NOX Fight Club as the premier martial arts and boxing destination in Kozhikode." }
      ]
    }
  },
  {
    id: "neoriz-whatsapp-automation",
    name: "Neoriz WhatsApp Automation",
    slug: "neoriz-whatsapp-automation",
    category: "Products",
    industry: "Business Automation / Conversational AI",
    projectType: "product",
    description: "Enterprise WhatsApp automation system enabling scheduled broadcasts, AI customer interactions, and multi-agent inbox synchronization.",
    image: "/images/portfolio/neoriz-whatsapp-automation/final/neoriz-whatsapp-hero.jpg",
    gallery: [
      "/images/portfolio/neoriz-whatsapp-automation/final/neoriz-whatsapp-hero.jpg",
      "/images/portfolio/neoriz-whatsapp-automation/final/neoriz-whatsapp-product-collage.jpg",
      "/images/portfolio/neoriz-whatsapp-automation/final/neoriz-whatsapp-mobile-showcase.jpg",
      "/images/portfolio/neoriz-whatsapp-automation/final/neoriz-whatsapp-automation-showcase.jpg",
      "/images/portfolio/neoriz-whatsapp-automation/final/neoriz-whatsapp-alternate-showcase.jpg"
    ],
    website: "",
    ctaLabel: "View Case Study",
    featured: false,
    tagline: "High-scale conversational commerce and messaging pipeline for modern business operations.",
    overview: "Neoriz WhatsApp Automation is a business messaging infrastructure designed to connect commercial catalogs, operational notifications, and client engagement directly through verified messaging channels. Engineered for reliable throughput, customer conversation tagging, and seamless system integration.",
    challenge: {
      requirements: "Build an automated communication framework capable of delivering targeted broadcast campaigns, customer triage flows, and real-time support routing.",
      businessProblem: "Manual messaging on personal numbers lacks auditability, analytics, and CRM synchronization, creating lead drop-offs.",
      userChallenges: "Customers expect immediate responses to inquiries and order confirmations within their primary messaging app.",
      industryChallenges: "Maintaining compliance with official messaging policies while sustaining high concurrency and webhook reliability."
    },
    strategy: {
      uxPlanning: "Clean management interface prioritizing inbox oversight, broadcast scheduling, and real-time conversation triage.",
      infoArchitecture: "Conversation threads tagged by status, automated triggers, contact metadata, and deliverability analytics.",
      wireframes: "Split-pane inbox with contact details, trigger sequence builders, and campaign performance dashboards.",
      designDecisions: "Focused operational interface using clean neutrals with brand blue and teal status accents."
    },
    designSystem: {
      typography: "Outfit for primary labels and headers; Inter for chat transcription and operational logs.",
      spacing: "Compact density system optimized for high data volume and swift multi-chat navigation.",
      philosophy: "Operational velocity. Zero latency between customer trigger and programmatic fulfillment.",
      components: "Message queue tickers, broadcast planners, contact badges, and trigger condition blocks.",
      hierarchy: "Account status summary, conversation triage inbox, trigger management console."
    },
    process: {
      planning: "Operational workflow mapping, event schema design, and conversation routing protocols.",
      design: "Console UX wireframes, message template editor, and metric visualization.",
      development: "Message dispatch pipeline, conversation state management, and real-time team synchronization.",
      testing: "Rate-limit compliance testing, failover handling, and delivery throughput audits.",
      launch: "Internal deployment, cloud integration, and enterprise validation."
    },
    features: [
      {
        title: "Automated Conversational Triage",
        desc: "Instant rule-based and AI-guided replies that resolve common customer queries around the clock."
      },
      {
        title: "Targeted Broadcast Dispatch",
        desc: "Compliant template messaging pipelines for transactional notifications and audience updates."
      },
      {
        title: "Multi-Agent Synchronized Inbox",
        desc: "Shared operational team inbox with conversation assignment, internal notes, and audit history."
      }
    ],
    techStack: [
      "Conversational Automation",
      "Template Broadcast Pipelines",
      "Shared Multi-Agent Inbox",
      "Customer Triage Workflows",
      "Live Delivery Analytics"
    ],
    intendedOutcomes: {
      title: "Intended Operational Impact",
      description: "Business objectives engineered into the automation platform:",
      points: [
        { title: "Response Latency", desc: "Reduces initial customer inquiry response time from hours to instantaneous acknowledgment." },
        { title: "Team Scalability", desc: "Allows support and sales representatives to manage high volumes through centralized triage." },
        { title: "Audit & Compliance", desc: "Provides full message history and delivery logs within enterprise compliance guidelines." }
      ]
    }
  },
  /* ==========================================================================
     TEMPORARILY HIDDEN: Cafe Serenity project is under development.
     Restore by uncommenting this complete block when approved.
     ==========================================================================
  {
    id: "cafe-serenity",
    name: "Cafe Serenity",
    slug: "cafe-serenity",
    category: "Client Projects",
    industry: "Hospitality / Healthy Lifestyle Cafe & Breakfast Favourites",
    projectType: "client",
    description: "Modern, health-conscious culinary web portal for Kakkanad's premier wellness cafe, featuring daily balanced meal plans, traditional Kerala breakfast menus, and direct WhatsApp ordering.",
    image: null,
    gallery: [],
    website: "https://cafeserenity.neorizsolutions.com/",
    ctaLabel: "View Live Website",
    featured: true,
    tagline: "Good food, made for everyday — healthy choices and cafe favourites in Kakkanad, Kochi.",
    overview: "Café Serenity is a healthy lifestyle café and everyday dining spot situated near Civil Station, Kakkanad, Kochi. Designed with an inviting culinary presentation, the digital flagship is structured around two complementary dining experiences: specialized portion-controlled healthy meal plans (Weight Loss, High Protein, Diabetic Friendly, Balanced, Corporate) and cherished morning café breakfast classics (steamed puttu, idli vada, ghee roast dosa, filter coffee) starting from 5:00 AM daily.",
    challenge: {
      requirements: "Deliver an appetizing, responsive web presence showcasing macro-nutrient balanced dietary plans and traditional breakfast items, paired with instant WhatsApp meal subscriptions and location discovery.",
      businessProblem: "Corporate professionals and fitness-minded residents in Kakkanad often struggle to find reliable, freshly prepared dietary meals with transparent macro profiles alongside everyday budget-friendly breakfast options.",
      userChallenges: "Diners want clear calorie and protein breakdowns for diet meal plans, scannable breakfast pricing, and a quick, frictionless channel to order or subscribe via WhatsApp.",
      industryChallenges: "Harmonizing two distinct customer journeys on one platform: subscription-focused wellness meal plans and fast-turnaround morning cafe dine-in/takeaway."
    },
    strategy: {
      uxPlanning: "Engineered a dual-focus menu experience: Hero Value Proposition → Dietary Health Plans Grid → Everyday Morning Cafe Menu → Chef Philosophy & FSSAI Standards → One-Tap WhatsApp Ordering.",
      infoArchitecture: "Separation between Healthy Choices (Weight Loss ₹199, High Protein ₹249, Diabetic Friendly ₹219, Corporate ₹199) and Everyday Cafe Favourites (Breakfast combos, Kerala meals, snacks, and beverages).",
      wireframes: "Clean, card-based meal item layouts with dietary badges (Veg / Non-Veg / Calorie-Controlled), price chips, and persistent floating WhatsApp order triggers.",
      designDecisions: "A serene, botanical color palette featuring warm cream backgrounds, natural olive/sage green accents (#3F6212), and crisp slate typography, creating an aura of wellness and freshness."
    },
    designSystem: {
      typography: "Outfit for warm, modern hospitality headlines; Inter for nutritional breakdowns, menu pricing, and ingredient details.",
      spacing: "Generous, breathable section spacing (80px-100px) that gives culinary photography room to breathe and inspires appetite.",
      philosophy: "Calm nourishment. Every screen reflects health, transparency, natural ingredients, and everyday culinary comfort.",
      components: "Nutritional meal plan cards, dietary filter pills, FSSAI certified badges, and interactive WhatsApp order connectors.",
      hierarchy: "Fresh food hero presentation leading to healthy choice meal tiers, morning cafe menus, and direct WhatsApp contact."
    },
    process: {
      planning: "Menu taxonomy design, dietary macro analysis, corporate subscription mapping, and Kakkanad local SEO setup.",
      design: "Clean culinary UI wireframing, botanical color palette crafting, and mobile-first menu card layouts.",
      development: "Interactive digital menu presentation, nutritional meal tier catalog, and direct messaging order integration.",
      testing: "Cross-device responsive testing across iOS and Android browsers, touch target accessibility, and WhatsApp direct links.",
      launch: "High-performance production deployment, automated sitemap indexing, and Google Maps location discovery."
    },
    features: [
      {
        title: "Targeted Dietary Meal Plans",
        desc: "Structured meal plans for Weight Loss (₹199), High Protein (₹249), Diabetic Friendly (₹219), Balanced, and Corporate subscribers with transparent calorie guidance."
      },
      {
        title: "Everyday Morning Cafe Menu",
        desc: "Affordable authentic Kerala breakfast favorites starting daily at 5:00 AM, including Idli Vada combos, Ghee Roast Dosa, Puttu, and freshly brewed Filter Coffee."
      },
      {
        title: "Direct WhatsApp Ordering & Subscription",
        desc: "Instant click-to-chat WhatsApp ordering connecting customers directly to the kitchen with pre-formatted meal requests."
      },
      {
        title: "Certified Food Safety & Transparency",
        desc: "Verified FSSAI license display (21324005000123) and ingredient freshness commitments guaranteeing clean, safe meal preparation."
      },
      {
        title: "Local Kakkanad Hub Discovery",
        desc: "Interactive Google Maps integration and location details near Civil Station, Echamuku, Kakkanad for swift dine-in and takeaway pickups."
      }
    ],
    techStack: [
      "Dietary Meal Plan Subscriptions",
      "Morning Cafe & Breakfast Catalog",
      "Direct WhatsApp Ordering",
      "Nutritional Macro Profiles",
      "FSSAI Certified Safety Details"
    ],
    intendedOutcomes: {
      title: "Intended Business Benefits",
      description: "Operational and brand objectives engineered for the cafe:",
      points: [
        { title: "Subscription Conversion", desc: "Drives recurring dietary meal plan inquiries directly into WhatsApp without third-party commission overhead." },
        { title: "Menu Clarity & Speed", desc: "Allows working professionals to quickly browse early-morning breakfast items and order ahead." },
        { title: "Neighborhood Brand Presence", desc: "Establishes Cafe Serenity as Kakkanad's trusted destination for both fitness meals and everyday comfort food." }
      ]
    }
  },
  ========================================================================== */
  {
    id: "emblingo",
    name: "Emblingo Learning App",
    slug: "emblingo-learning-app",
    category: "Products",
    industry: "EdTech / Competitive Exam Preparation",
    projectType: "product",
    description: "Engineering and medical entrance exam preparation platform featuring high-resolution previous year question (PYQ) image archives, chapter-wise practice tests, and persistent progress tracking.",
    image: "/images/portfolio/emblingo-learning-app/final/emblingo-hero.jpg",
    gallery: [
      "/images/portfolio/emblingo-learning-app/final/emblingo-hero.jpg",
      "/images/portfolio/emblingo-learning-app/final/emblingo-product-collage.jpg",
      "/images/portfolio/emblingo-learning-app/final/emblingo-mobile-showcase.jpg",
      "/images/portfolio/emblingo-learning-app/final/emblingo-learning-showcase.jpg",
      "/images/portfolio/emblingo-learning-app/final/emblingo-alternate-showcase.jpg"
    ],
    website: "https://play.google.com/store/apps/details?id=com.emblingo.app",
    ctaLabel: "View on Google Play",
    featured: true,
    tagline: "Comprehensive previous year question banks, chapter-wise mock practice, and structured entrance exam preparation on mobile.",
    overview: "Emblingo is a dedicated education technology platform engineered to empower engineering and medical entrance exam aspirants (KEAM, NEET, JEE) across core subjects including Physics, Chemistry, and Mathematics. Delivered as an intuitive, high-performance mobile learning application, Emblingo provides students with indexed previous year question paper (PYQ) archives, interactive question practice with instant answer validation, step-by-step hints and solutions, topic-level question bookmarking, and continuous study session tracking that automatically resumes where the learner left off.",
    challenge: {
      requirements: "Deliver an accessible, distraction-free mobile learning experience capable of rendering high-resolution multi-page question paper scans with zero latency, pinch-to-zoom fidelity, and interactive answer verification, paired with reliable offline caching on Android devices.",
      businessProblem: "Entrance exam candidates often struggle with fragmented physical question guides, cumbersome offline answer keys, and difficulty systematically tracking which questions and chapters they have completed during intensive revision.",
      userChallenges: "Students need rapid, thumb-friendly navigation across large subject syllabi, immediate visual feedback on multiple-choice options (A, B, C, D), step-by-step solution breakdowns, and the ability to bookmark difficult problems for revision before exams.",
      industryChallenges: "Handling large archives of digitized question papers with clear image scaling across diverse handset screen resolutions, maintaining secure authentication with proactive renewal, and persisting student progress without interrupting study flow."
    },
    strategy: {
      uxPlanning: "Engineered an ergonomic 4-branch navigation architecture: Home Daily Dashboard (greeting, continue learning resume card, banner carousel) → Explore & Subject Catalog (Physics, Chemistry, Mathematics with chapter hierarchies) → Saved Bookmarks (filtered by subject and chapter) → Student Profile (account management and study activity).",
      infoArchitecture: "A structured, hierarchical learning taxonomy: Exam Goal → Subject → Chapter → Question Batches / PYQ Pages → Interactive Practice & Explanations, with granular page-level bookmarking and scroll-based progress detection.",
      wireframes: "Thumb-accessible bottom navigation shell with stateful tab persistence, shimmer loading skeletons, double-tap zoomable image modal viewers, and high-contrast option selection bottom sheets.",
      designDecisions: "A crisp, welcoming visual palette combining clean white and dark-slate backgrounds with focused cobalt blue (#2563EB) primary accents, paired with Outfit for approachable headings and Inter for high-legibility question reading."
    },
    designSystem: {
      typography: "Outfit font family for clear screen headings, subject banners, and modal titles; Inter for instructional chapter content, question options, and step-by-step solution texts.",
      spacing: "Compact, ergonomic mobile layout with 48px+ touch targets, rounded card groupings (12px-16px border radii), and smooth edge-to-edge padding.",
      philosophy: "Academic focus and clarity. Eliminate distracting banner advertisements and intrusive popups, giving students an uninterrupted, clean digital study environment.",
      components: "Subject progress cards with chapter counts, continue learning hero modules, multi-page PYQ image viewers with pinch-to-zoom, option selection pill selectors, and bookmark action buttons.",
      hierarchy: "Personalized greeting header with quick search, active study session resume card, followed by subject listings and structured chapter catalogs."
    },
    process: {
      planning: "Detailed syllabus mapping for major state and national engineering entrance examinations (KEAM, Physics, Chemistry, Mathematics) and question batch taxonomy.",
      design: "Mobile-first UI/UX wireframing, component design, responsive image viewer specifications, and dark/light mode contrast auditing.",
      development: "Mobile learning application construction, multi-branch navigation, interactive answer evaluation, and cloud study sync.",
      testing: "Automated test suites, security validation, question option verification, and cross-device performance testing on varied display resolutions.",
      launch: "Google Play Store publishing, compliance verification, and scalable cloud infrastructure deployment."
    },
    features: [
      {
        title: "Subject & Chapter Syllabus Catalog",
        desc: "Structured syllabus breakdowns across Physics, Chemistry, and Mathematics displaying chapter counts, topic difficulty, and completed question tracking."
      },
      {
        title: "High-Resolution PYQ Image Batches",
        desc: "Digitized multi-page question paper archives featuring pinch-to-zoom, double-tap full-screen inspection, and rapid batch scrolling."
      },
      {
        title: "Interactive Practice & Instant Answer Keys",
        desc: "Multiple-choice practice interface with instant correct/incorrect visual feedback, authoritative answer key mapping, and detailed solution explanations."
      },
      {
        title: "Continue Learning Study Resumption",
        desc: "Scroll-based progress detection automatically saves the student's exact chapter, batch, and page, enabling instant one-tap session resumption from the home screen."
      },
      {
        title: "Personalized Question Bookmarking",
        desc: "Students can bookmark challenging questions or specific PYQ pages with subject and chapter filters for quick revision before exams."
      },
      {
        title: "Secure Authentication & Token Management",
        desc: "Encrypted credential storage with proactive expiration detection and automatic refresh to prevent session dropouts during revision."
      },
      {
        title: "Offline Image & Content Caching",
        desc: "Cached image storage allows previously reviewed question pages to be accessed smoothly even during intermittent mobile network connectivity."
      },
      {
        title: "Admin Portal & Content Management",
        desc: "Dedicated administrative portal enabling instructors to upload question batches, configure answer keys, and manage subject syllabi."
      }
    ],
    techStack: [
      "Entrance Exam Question Bank (PYQ)",
      "Interactive MCQ Practice & Answers",
      "One-Tap Study Resumption",
      "Offline Content & Image Caching",
      "Personalized Subject Bookmarks",
      "Instructor Content Portal"
    ],
    intendedOutcomes: {
      title: "Intended Learning Outcomes",
      description: "Educational and accessibility goals designed into the platform:",
      points: [
        { title: "Systematic Entrance Revision", desc: "Allows students to work systematically through hundreds of previous entrance questions without confusing physical paper copies." },
        { title: "Immediate Feedback & Conceptual Clarity", desc: "Helps learners identify knowledge gaps instantly through authoritative answer keys and step-by-step problem explanations." },
        { title: "Frictionless Study Resumption", desc: "Eliminates time lost searching for the last-studied page, allowing students to pick up their study session instantly on their smartphones." }
      ]
    }
  },
  {
    id: "felora-dress-rental",
    name: "Felora",
    slug: "felora-dress-rental",
    category: "Client Projects",
    industry: "E-Commerce / Fashion & Designer Dress Rental",
    projectType: "client",
    description: "Premium designer apparel rental and bridal boutique platform featuring event-based calendar booking, transparent rental durations, and direct WhatsApp styling consultations.",
    image: "/images/portfolio/felora/final/felora-hero.jpg",
    gallery: [
      "/images/portfolio/felora/final/felora-hero.jpg",
      "/images/portfolio/felora/final/felora-website-collage.jpg",
      "/images/portfolio/felora/final/felora-mobile-showcase.jpg",
      "/images/portfolio/felora/final/felora-product-showcase.jpg",
      "/images/portfolio/felora/final/felora-alternate-showcase.jpg"
    ],
    website: "https://felora.neorizsolutions.com/",
    ctaLabel: "View Live Website",
    featured: true,
    tagline: "Rent luxury bridal gowns, lehengas, and designer evening wear for your special occasions.",
    overview: "Felora is an exclusive luxury fashion and bridal dress rental boutique offering an elevated alternative to fast fashion and high-cost event attire. Built with an editorial luxury aesthetic combining champagne neutrals, warm rose tones, and high-fashion typography, the ecommerce platform showcases curated collections of bridal lehengas, couture wedding gowns, reception sarees, and cocktail dresses. Customers can browse designer collections by occasion, check real-time rental availability via date-range selectors, choose rental tenures (3-day, 5-day, or 7-day windows), and connect directly with dedicated bridal stylists via WhatsApp for bespoke fittings.",
    challenge: {
      requirements: "Create a sophisticated, trustworthy designer rental experience that handles date-based reservation logic, garment security deposits, size measurements, and personalized fitting coordination.",
      businessProblem: "High-end bridal and festive attire is typically worn once or twice, leaving customers hesitant to spend significant amounts on outright purchases while local rental boutiques struggle with disorganized manual phone bookings.",
      userChallenges: "Shoppers need transparent rental pricing, clear availability calendars for upcoming event dates, detailed garment measurement charts, and reassurance regarding hygiene and dry-cleaning standards.",
      industryChallenges: "Preventing double-booking conflicts across overlapping wedding dates, communicating damage deposit and return policies clearly, and providing personalized stylist assistance online."
    },
    strategy: {
      uxPlanning: "Engineered an aspirational, high-conversion boutique journey: Editorial Campaign Hero → Curated Collection Discovery (Bridal, Reception, Evening) → Event Date Availability Checker → Transparent Rental Tier Selection → Direct Stylist Fitting & Booking.",
      infoArchitecture: "Organized by Occasion (Bridal Couture, Sangeet & Reception, Evening Glamour), Category (Lehengas, Gowns, Anarkalis, Indowestern), and Flexible Rental Durations (3, 5, or 7 days).",
      wireframes: "Luxury magazine-style editorial layout, multi-angle garment photography carousels, date-picker reservation widgets, and sticky WhatsApp consultation triggers.",
      designDecisions: "An opulent minimalist palette featuring warm ivory (#FAF9F6), soft blush rose, deep charcoal, and muted champagne gold accents, paired with elegant serif headings and clean sans-serif product details."
    },
    designSystem: {
      typography: "Outfit for refined, couture-inspired editorial titles and collection banners; Inter for fabric descriptions, rental terms, and size dimensions.",
      spacing: "Expansive editorial whitespace (80px-120px) creating an unhurried, luxury boutique atmosphere.",
      philosophy: "Sustainable luxury. Make high-end designer fashion accessible, effortless, and environmentally conscious through seamless circular rental.",
      components: "Date-range availability pickers, rental duration pill selectors, fabric care and hygiene assurance badges, and one-tap WhatsApp bridal concierge triggers.",
      hierarchy: "Runway-inspired hero showcase leading to categorized designer galleries, rental how-it-works guidelines, and personal stylist booking."
    },
    process: {
      planning: "Rental workflow mapping, date reservation requirements, deposit and return policy formulation, and local bridal search optimization.",
      design: "High-fashion UI wireframing, neutral-palette color tuning, and mobile-first product gallery prototyping.",
      development: "Interactive designer catalog, calendar reservation widgets, dynamic rental tier pricing, and direct WhatsApp styling integration.",
      testing: "Cross-device responsiveness across mobile and tablet viewports, image load optimization, and booking link testing.",
      launch: "Production deployment, catalog categorization, and search engine metadata configuration."
    },
    features: [
      {
        title: "Curated Bridal & Festive Collections",
        desc: "Handpicked catalog of premium bridal lehengas, couture wedding gowns, reception wear, and party dresses categorized by occasion and style."
      },
      {
        title: "Event Date & Duration Selector",
        desc: "Interactive rental duration selector (3-day, 5-day, or 7-day periods) with clear date scheduling to ensure garments arrive ahead of wedding festivities."
      },
      {
        title: "Transparent Rental Pricing & Security Deposit",
        desc: "Clear upfront rental rates with detailed security deposit and complimentary return dry-cleaning disclosures, eliminating hidden fees."
      },
      {
        title: "Direct WhatsApp Bridal Concierge",
        desc: "One-tap direct messaging connecting customers directly to experienced boutique stylists for custom sizing, alterations, and fitting inquiries."
      },
      {
        title: "Hygiene & Fabric Care Assurance",
        desc: "Strict multi-stage professional sanitization and garment inspection guarantee ensuring pristine condition upon delivery."
      }
    ],
    techStack: [
      "Curated Bridal & Designer Catalog",
      "Event Date Availability Checker",
      "Flexible 3, 5 & 7-Day Rental Tiers",
      "Direct WhatsApp Stylist Concierge",
      "Garment Hygiene & Care Assurance"
    ],
    intendedOutcomes: {
      title: "Intended Business Benefits",
      description: "Commercial and customer experience objectives established for the boutique:",
      points: [
        { title: "Circular Luxury Adoption", desc: "Allows style-conscious customers to wear designer bridal fashion at a fraction of retail purchase cost." },
        { title: "Zero-Friction Inquiries", desc: "Channels pre-qualified rental inquiries directly to WhatsApp with specific garment and date details." },
        { title: "Prestige Brand Image", desc: "Elevates local boutique rental operations to an international-standard digital luxury showroom." }
      ]
    }
  }
];

// Re-export common site configuration data for backward-compatibility
export const servicesData = [
  {
    id: "01",
    name: "Website Development",
    slug: "website-development",
    description: "We build business websites that are structured for Google from the ground up. Clean code, fast loading, and content organised the way your customers think."
  },
  {
    id: "02",
    name: "Mobile App Development",
    slug: "mobile-app-development",
    description: "We build mobile applications that are fast, intuitive, and structured for real user engagement across iOS and Android."
  },
  {
    id: "03",
    name: "UI/UX Designing",
    slug: "ui-ux-designing",
    description: "We design interfaces that are clear, conversion-focused, and aligned with how your customers actually think and act."
  },
  {
    id: "04",
    name: "Software Development",
    slug: "software-development",
    description: "We build custom software that automates workflows, connects teams, and scales with your business goals."
  },
  {
    id: "05",
    name: "Ecommerce",
    slug: "ecommerce",
    description: "We build ecommerce experiences that load fast, convert visitors, and make product discovery effortless on every device."
  },
  {
    id: "06",
    name: "Website Revamp",
    slug: "website-revamp",
    description: "We modernize outdated websites with better design, stronger SEO, faster performance, and clearer conversion paths."
  }
];

export const technologiesData = [
  "Custom Web Applications",
  "Digital Platforms",
  "E-Commerce Systems",
  "Hospitality & QR Ordering",
  "Business Process Automation",
  "Cloud Systems",
  "UI/UX Design Systems",
  "Mobile Experiences",
  "Data Analytics",
  "API Integration"
];
