/**
 * ============================================================================
 * HARRIET RILEY — CENTRAL BUSINESS CONFIGURATION
 * All text, colors, services, contact details, and image URLs live exclusively here.
 * Any non-technical owner can edit this single file to update the entire site.
 * ============================================================================
 */

export const business = {
  // Core Identity
  name: "Harriet Riley",
  tradeType: "Garage Door Supplier",
  tagline: "Quality Garage Doors, Reliable Service",
  cityArea: "Solihull, England",
  fullAddress: "Homer House, Homer Road, Solihull, England, B91 3QQ",
  
  // Brand Styling & Color Tokens
  theme: {
    style: "Minimal",
    primaryColor: "#173829",      // Deep architectural British racing green
    primaryDark: "#0E241A",
    primaryLight: "#24523C",
    accentColor: "#2E6B4F",
    secondaryColor: "#FFFFFF",
    bgNeutral: "#FAFAF8",
    bgMuted: "#F2F5F1",
    textColor: "#121C16",
    textMuted: "#526157",
  },

  // Contact & Channels
  contact: {
    phone: "447455954506",
    phoneDisplay: "+44 7455 954506",
    phoneHref: "tel:447455954506",
    
    whatsapp: "447455954506",
    whatsappDisplay: "+44 7455 954506",
    whatsappHref: "https://wa.me/447455954506",
    
    email: null, // Omitted cleanly per business data
    
    address: "Homer House, Homer Road, Solihull, England, B91 3QQ",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Homer+House,+Homer+Road,+Solihull,+England,+B91+3QQ",
    directionsLabel: "Get Directions via Google Maps",
    
    consultationNote: "Consultations & on-site surveys available across Solihull & surrounding West Midlands.",
  },

  // Navigation Links
  navigation: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  // Primary Call-to-Actions
  actions: {
    primary: {
      label: "Message on WhatsApp",
      href: "https://wa.me/447455954506",
      isExternal: true,
    },
    secondary: {
      label: "View Services",
      href: "#services",
      isExternal: false,
    },
    callDirect: {
      label: "Call +44 7455 954506",
      href: "tel:447455954506",
      isExternal: false,
    },
  },

  // Hero Section
  hero: {
    eyebrow: "Solihull, England · Garage Door Supplier",
    headline: "Quality Garage Doors, Reliable Service",
    subheadline: "Specialist supply, precision installation, and dependable repair for homeowners and businesses in Solihull and the West Midlands.",
    trustMarker: "Homer House, Homer Road · Direct Local Service",
    backgroundImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    backgroundImageAlt: "Architectural home exterior featuring contemporary garage door in Solihull",
  },

  // About Section
  about: {
    eyebrow: "About Harriet Riley",
    headline: "Dependable garage door solutions, fitted with precision",
    paragraphs: [
      "Operating from Homer House on Homer Road, Harriet Riley provides a dedicated, craft-led approach to garage door supply, installation, and care throughout Solihull.",
      "Every property has unique practical and aesthetic demands—from maximizing driveway space and improving insulation, to seamless remote automation. We handle every project with meticulous care, clean workmanship, and direct personal accountability."
    ],
    highlights: [
      "Full supply-to-fit accountability without third-party runarounds",
      "Robust thermal insulation and weather-resistant sealing",
      "Specialist automation setup with obstacle-detection safety",
    ],
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Precision craftsmanship and structural fitting by Harriet Riley",
  },

  // Why Choose Us Section
  whyChooseUs: {
    eyebrow: "Local Standards",
    headline: "Why homeowners in Solihull trust Harriet Riley",
    description: "Built on direct communication, quality hardware, and reliable service from survey to completion.",
    points: [
      {
        number: "01",
        title: "Complete Supply to Fit",
        description: "From honest product guidance and exact structural surveying through to clean, certified installation.",
      },
      {
        number: "02",
        title: "Specialist Automation & Safety",
        description: "Smooth motorized operations, obstacle-detection sensors, and secure manual overrides fitted to current safety standards.",
      },
      {
        number: "03",
        title: "Fast Local Servicing & Repair",
        description: "Direct response from Homer Road for broken springs, jammed rollers, cable replacements, and routine maintenance.",
      },
      {
        number: "04",
        title: "Direct Accountability",
        description: "No subcontracted runaround. You deal with an experienced local specialist focused on dependable, lasting workmanship.",
      },
    ],
  },

  // Services Section
  services: {
    eyebrow: "Our Capabilities",
    headline: "Comprehensive Garage Door Services",
    description: "Supplying, installing, automating, and maintaining high-specification garage doors across Solihull.",
    ctaPrompt: "Need advice on the right door for your property?",
    ctaButton: "Inquire on WhatsApp",
    items: [
      {
        id: "garage-door-supply",
        title: "Garage Door Supply",
        description: "Direct supply of durable sectional, roller, up-and-over, and side-hinged doors from leading manufacturers.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Contemporary garage door supply showcase",
      },
      {
        id: "garage-door-installation",
        title: "Garage Door Installation",
        description: "Precision fitting with clean framework alignment, weatherproofing seals, and balanced spring tensioning.",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Accurate installation and structural framework alignment",
      },
      {
        id: "automatic-garage-doors",
        title: "Automatic Garage Doors",
        description: "Whisper-quiet motorized systems with remote keyfobs, wall consoles, and obstacle-detection safety.",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Smart motorized automated garage entry system",
      },
      {
        id: "sectional-garage-doors",
        title: "Sectional Garage Doors",
        description: "Vertical-opening insulated panels that preserve driveway space and keep your garage warm throughout winter.",
        image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Architectural insulated sectional garage door panels",
      },
      {
        id: "roller-garage-doors",
        title: "Roller Garage Doors",
        description: "Compact aluminum lath doors rolling smoothly into an overhead box, leaving ceiling rafters unobstructed.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Clean overhead roller garage door profile",
      },
      {
        id: "garage-door-repair",
        title: "Garage Door Repair",
        description: "Prompt diagnosis and repair for snapped cables, worn pulleys, broken springs, and off-track doors.",
        image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Professional garage door mechanical repair and adjustments",
      },
      {
        id: "garage-door-replacement",
        title: "Garage Door Replacement",
        description: "Safe decommissioning and removal of aged doors, followed by structural preparation and modern door fitting.",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Upgraded replacement garage door enhancing home exterior",
      },
      {
        id: "garage-door-maintenance",
        title: "Garage Door Maintenance",
        description: "Preventative tune-ups, track alignment, motor diagnostics, balance testing, and lubricant applications.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Preventative garage door servicing and maintenance",
      },
      {
        id: "garage-door-opener-supply",
        title: "Garage Door Opener Supply",
        description: "High-torque electric motors, smartphone receivers, belt-drive rails, and multi-channel remote handsets.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "High-torque electric motor and opener drive components",
      },
      {
        id: "garage-door-opener-installation",
        title: "Garage Door Opener Installation",
        description: "Retrofit automated openers to compatible existing manual doors or configure alongside new installs.",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Ceiling opener installation and motor track calibration",
      },
      {
        id: "custom-garage-door-solutions",
        title: "Custom Garage Door Solutions",
        description: "Tailored sizing, specific RAL color-matching, bespoke glazing inserts, and architectural finishes.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Customized architectural garage door design and finish",
      },
      {
        id: "commercial-garage-doors",
        title: "Commercial Garage Doors",
        description: "Heavy-duty security shutters and industrial insulated sectional doors for local business premises.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Commercial and industrial grade roller security shutters",
      },
    ],
  },

  // Testimonials (Omitted cleanly per instructions because no verified reviews were provided)
  testimonials: null,

  // FAQ Section (Genuine value for local homeowners)
  faq: {
    eyebrow: "Frequently Asked Questions",
    headline: "Clear answers before you begin",
    description: "Practical guidance on door types, automation suitability, and project timelines in Solihull.",
    items: [
      {
        question: "What is the difference between sectional and roller garage doors?",
        answer: "Sectional doors glide vertically and sit along your garage ceiling in insulated double-skinned panels, delivering maximum thermal retention and draught protection. Roller doors coil into a compact overhead roll above the opening, leaving full ceiling rafters free for overhead storage.",
      },
      {
        question: "Can an existing manual garage door be converted to automatic?",
        answer: "Yes, in many cases. If your current door is structurally sound, balanced, and operates smoothly by hand, we can supply and install a compatible electric operator system with remote controls and safety features.",
      },
      {
        question: "How do I choose the right style and material for my home in Solihull?",
        answer: "We factor in driveway length, garage ceiling height, insulation requirements (especially for integral garages beneath bedrooms), and architectural style. A quick conversation or photos shared via WhatsApp allows us to recommend ideal options.",
      },
      {
        question: "What should I do if my garage door is jammed or a cable has snapped?",
        answer: "Do not attempt to force the door open, as garage door springs are under high mechanical tension. Contact us directly on WhatsApp or telephone for prompt local repair assistance from Homer Road.",
      },
    ],
  },

  // Contact Section & Form
  contactSection: {
    eyebrow: "Direct Contact",
    headline: "Discuss your garage door requirements",
    description: "Reach out directly for quotations, on-site surveys, or repair inquiries in Solihull.",
    form: {
      title: "Send a Direct Inquiry",
      subtitle: "Fill out the details below and we will get back to you promptly.",
      fields: {
        name: { label: "Your Name", placeholder: "e.g. David Smith" },
        phone: { label: "Phone Number", placeholder: "e.g. 07455 954506" },
        service: {
          label: "Service Required",
          defaultOption: "Select a service...",
        },
        message: {
          label: "Project Details / Message",
          placeholder: "Describe your garage door requirements, door type, or issue...",
        },
      },
      submitButton: "Send Inquiry",
      successTitle: "Inquiry Sent Successfully",
      successMessage: "Thank you for reaching out. We have received your inquiry and will contact you shortly.",
      resetButton: "Send Another Inquiry",
    },
  },

  // Footer
  footer: {
    copyright: "© 2026 Harriet Riley. Quality Garage Doors, Reliable Service.",
    addressNote: "Homer House, Homer Road, Solihull, England, B91 3QQ",
    metaLine: "Solihull Garage Door Specialist · Supply · Installation · Automation · Repair",
  },
};
