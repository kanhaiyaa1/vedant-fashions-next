export const PRODUCT_IMAGES = {
  blouses: [
    "/images/blouses/blue-animal-print-blouse.jpeg",
    "/images/blouses/blue-diagonal-blouse.jpeg",
    "/images/blouses/burgundy-button-blouse.jpeg",
    "/images/blouses/coral-button-blouse.jpeg",
    "/images/blouses/cream-bell-sleeve-tassel-blouse.jpeg",
    "/images/blouses/cream-button-blouse.jpeg",
    "/images/blouses/cream-polka-dot-blouse.jpeg",
    "/images/blouses/cream-ruffled-blouse.jpeg",
    "/images/blouses/dark-ruffled-blouse.jpeg",
    "/images/blouses/gray-button-blouse.jpeg",
    "/images/blouses/gray-floral-blouse.jpeg",
    "/images/blouses/gray-tunic-blouse.jpeg",
    "/images/blouses/green-striped-blouse.jpeg",
    "/images/blouses/light-blue-eyelet-blouse.jpeg",
    "/images/blouses/mustard-button-blouse.jpeg",
    "/images/blouses/olive-button-blouse.jpeg",
    "/images/blouses/pink-embroidered-blouse.jpeg",
    "/images/blouses/teal-patterned-blouse.jpeg",
    "/images/blouses/white-sleeveless-lace-blouse.jpeg",
  ],
  dresses: [
    "/images/dresses/black-white-abstract-print-dress.jpeg",
    "/images/dresses/black-white-polka-dot-ruffle-dress.jpeg",
    "/images/dresses/dark-floral-kaftan-dress.jpeg",
    "/images/dresses/dark-multi-floral-dress.jpeg",
    "/images/dresses/geometric-pattern-dress.jpeg",
    "/images/dresses/light-floral-ruffle-dress.jpeg",
    "/images/dresses/maroon-floral-midi-dress.jpeg",
    "/images/dresses/orange-tie-dye-dress.jpeg",
    "/images/dresses/pink-satin-wrap-dress.jpeg",
    "/images/dresses/red-floral-print-dress.jpeg",
    "/images/dresses/red-floral-wrap-dress.jpeg",
    "/images/dresses/teal-tie-dye-dress.jpeg",
    "/images/dresses/white-blue-floral-dress.jpeg",
  ],
  tops: [
    "/images/tops/beige-blazer-top.jpeg",
    "/images/tops/black-mesh-tie-blouse.jpeg",
    "/images/tops/black-patterned-blouse-short-sleeve.jpeg",
    "/images/tops/black-patterned-blouse.jpeg",
    "/images/tops/black-text-print-blouse.jpeg",
    "/images/tops/blue-floral-print-blouse.jpeg",
    "/images/tops/coral-patterned-blouse.jpeg",
    "/images/tops/dark-quilted-blouse.jpeg",
    "/images/tops/dark-sequin-blouse.jpeg",
    "/images/tops/floral-multi-color-blouse.jpeg",
    "/images/tops/floral-patterned-blouse.jpeg",
    "/images/tops/grey-patterned-blouse.jpeg",
    "/images/tops/light-blue-green-patterned-top.jpeg",
    "/images/tops/light-blue-tie-blouse.jpeg",
    "/images/tops/light-grey-blue-blouse.jpeg",
    "/images/tops/maroon-floral-blouse.jpeg",
    "/images/tops/multi-color-floral-top.jpeg",
    "/images/tops/navy-blue-patterned-blouse.jpeg",
    "/images/tops/navy-blue-tunic-top.jpeg",
    "/images/tops/navy-floral-blouse.jpeg",
    "/images/tops/orange-floral-pattern-blouse.jpeg",
    "/images/tops/pink-white-patterned-blouse.jpeg",
    "/images/tops/red-floral-print-blouse.jpeg",
    "/images/tops/red-green-floral-blouse.jpeg",
    "/images/tops/red-patterned-blouse.jpeg",
    "/images/tops/red-white-floral-blouse.jpeg",
    "/images/tops/royal-blue-ruffle-blouse.jpeg",
    "/images/tops/sage-green-blouse.jpeg",
    "/images/tops/striped-colorful-top.jpeg",
    "/images/tops/teal-ombre-blouse.jpeg",
    "/images/tops/white-floral-vneck-blouse.jpeg",
    "/images/tops/white-three-quarter-blouse.jpeg",
    "/images/tops/yellow-blue-embroidered-blouse.jpeg",
    "/images/tops/yellow-blue-floral-blouse.jpeg",
    "/images/tops/yellow-floral-blouse.jpeg",
  ],
  pants: [
    "/images/pants/camo-print-pants.jpeg",
    "/images/pants/dark-grey-wide-leg-pants.jpeg",
    "/images/pants/striped-tropical-print-pants.jpeg",
  ],
  skirts: [
    "/images/skirts/red-floral-print-maxi-skirt.jpeg",
    "/images/skirts/yellow-geometric-print-midi-skirt.jpeg",
    "/images/skirts/blue-tie-dye-palazzo-pants.jpeg",
  ],
}

export const CLIENT_LOGOS = [
  { name: "Bonprix", src: "/images/clients/Bonprix.png" },
  { name: "WITT Weiden", src: "/images/clients/Witt-Weiden.png" },
  { name: "Saibaba", src: "/images/clients/saibaba.png" },
]

export const FACTORY_IMAGES = [
  { src: "/images/site-files/silai-machine.JPG", alt: "Sewing machines at Vedant Fashion" },
  { src: "/images/site-files/Straight-knife-cutting-machine.png", alt: "Fabric cutting machine" },
  { src: "/images/site-files/cloth-crafting.png", alt: "Garment crafting process" },
  { src: "/images/site-files/colth-crafting.JPG", alt: "In-house stitching" },
  { src: "/images/site-files/cloth-measurement.JPG", alt: "Measurement quality check" },
  { src: "/images/site-files/cloth-parcel.JPG", alt: "Export packing process" },
  { src: "/images/site-files/cloth-internation-packages.JPG", alt: "International packaging" },
  { src: "/images/site-files/new-cotton-lawns-the-list-group.jpg", alt: "Fabric sourcing" },
  { src: "/images/site-files/high-fashion-women-garment.jpg", alt: "Premium ladies garments" },
  { src: "/images/site-files/CLO-Masha-Coat-3D-and-2D-View.png", alt: "3D garment design view" },
  { src: "/images/site-files/hermes-rivera-.jpg", alt: "Ladies fashion garment" },
]

export const CERTIFICATIONS_DOCS = [
  { src: "/images/docs/GST-Certificate.jpeg", alt: "GST Certificate" },
  { src: "/images/docs/Udyam-Registration-Certificate.jpg", alt: "Udyam Registration" },
  { src: "/images/docs/Registration-Certificate.jpg", alt: "Registration Certificate" },
]

export const FOUNDER_IMAGE = "/images/docs/shravan-diwan.png"

export const MAKE_IN_INDIA = "/images/site-files/make-in-india.png"

export function getImages(arr: string[], count: number, offset = 0): string[] {
  return arr.slice(offset, offset + count)
}

export function getProductImages(category: string, index: number): string[] {
  const cycle = (arr: string[], off: number, count = 8): string[] => {
    if (arr.length === 0) return []
    const start = off % arr.length
    const extended = [...arr, ...arr, ...arr]
    return extended.slice(start, start + count)
  }
  const offset = index * 4
  if (category === "woven-blouses") return cycle(PRODUCT_IMAGES.blouses, offset)
  if (category === "cotton-dresses") return cycle(PRODUCT_IMAGES.dresses, offset)
  if (category === "linen-shirts") return cycle(PRODUCT_IMAGES.tops, offset)
  if (category === "resort-wear") {
    const pool = [...PRODUCT_IMAGES.skirts, ...PRODUCT_IMAGES.pants, ...PRODUCT_IMAGES.dresses]
    return cycle(pool, offset)
  }
  if (category === "coord-sets") return cycle(PRODUCT_IMAGES.tops, offset)
  if (category === "kurtis") return cycle(PRODUCT_IMAGES.tops, 10 + offset)
  if (category === "embroidery") {
    const pool = [PRODUCT_IMAGES.blouses[16], ...PRODUCT_IMAGES.blouses, ...PRODUCT_IMAGES.tops]
    return cycle(pool, offset)
  }
  if (category === "sequin-occasion") {
    const pool = [PRODUCT_IMAGES.tops[8], ...PRODUCT_IMAGES.tops]
    return cycle(pool, offset)
  }
  if (category === "bottoms") {
    const pool = [...PRODUCT_IMAGES.pants, ...PRODUCT_IMAGES.skirts, ...PRODUCT_IMAGES.tops]
    return cycle(pool, offset)
  }
  return cycle(PRODUCT_IMAGES.blouses, offset)
}

export function getCategoryImages(category: string): string[] {
  if (category === "woven-blouses") return PRODUCT_IMAGES.blouses
  if (category === "cotton-dresses") return PRODUCT_IMAGES.dresses
  if (category === "linen-shirts") return PRODUCT_IMAGES.tops
  if (category === "resort-wear") return [
    ...PRODUCT_IMAGES.skirts,
    ...PRODUCT_IMAGES.pants,
    ...PRODUCT_IMAGES.dresses.slice(0, 3),
  ]
  return PRODUCT_IMAGES.blouses
}
