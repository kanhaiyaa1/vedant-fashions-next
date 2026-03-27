"use client";
const categories = [
  {
    title: "By Fabric",
    items: ["Organic Cotton", "Tencel™ Lyocell", "Recycled Polyester", "Linen Blends", "Bamboo Viscose", "Hemp"],
  },
  {
    title: "By Product",
    items: ["Shirting", "Suiting", "Denim", "Knits & Jersey", "Outerwear", "Accessories"],
  },
  {
    title: "By Collection",
    items: ["SS 2026", "AW 2025", "Essentials", "Sustainable Core", "Limited Edition"],
  },
];

const MegaMenu = () => {
  return (
    <div className="bg-card border-b border-border shadow-lg">
      <div className="container-wide py-10">
        <div className="grid grid-cols-3 gap-12">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h4 className="text-subheading mb-4">{cat.title}</h4>
              <ul className="space-y-2.5">
                {cat.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-body text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t border-border flex justify-between items-center">
          <p className="text-caption">Minimum order: 500 units per style</p>
          <a href="#" className="text-sm font-medium text-primary hover:underline">
            View Full Catalogue →
          </a>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
