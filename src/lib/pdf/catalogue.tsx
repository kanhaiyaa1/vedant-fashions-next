import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    size: "A4",
    paddingTop: 40,
    paddingBottom: 60,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: "#ffffff",
    fontFamily: "Helvetica",
  } as any,
  header: {
    backgroundColor: "#1a1a1a",
    padding: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
    marginTop: -40,
    marginLeft: -40,
    marginRight: -40,
  },
  headerText: {
    color: "#ffffff",
    fontSize: 10,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1a1a1a",
    borderBottomWidth: 1,
    borderBottomColor: "#c9a96e",
    borderBottomStyle: "solid",
    paddingBottom: 6,
    marginBottom: 12,
  },
  productCard: {
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderStyle: "solid",
    borderRadius: 4,
    padding: 16,
    marginBottom: 12,
  },
  productName: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  productDesc: {
    fontSize: 9,
    color: "#666666",
    marginBottom: 8,
  },
  specsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  specBadge: {
    backgroundColor: "#f5f5f0",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 3,
    fontSize: 8,
    color: "#444444",
  },
  table: {
    width: "100%",
    marginBottom: 8,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#1a1a1a",
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  tableHeaderCell: {
    color: "#ffffff",
    fontSize: 8,
    fontWeight: "bold",
    flex: 1,
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
    borderBottomStyle: "solid",
  },
  tableCell: {
    fontSize: 8,
    color: "#444444",
    flex: 1,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    borderTopWidth: 1,
    borderTopColor: "#eeeeee",
    borderTopStyle: "solid",
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerText: {
    fontSize: 7,
    color: "#999999",
  },
  pageNumber: {
    fontSize: 7,
    color: "#999999",
  },
  coverPage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    margin: -40,
    padding: 80,
  },
  coverTitle: {
    fontSize: 32,
    color: "#ffffff",
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  coverSubtitle: {
    fontSize: 14,
    color: "#c9a96e",
    marginBottom: 40,
    textAlign: "center",
  },
  coverDetail: {
    fontSize: 10,
    color: "#aaaaaa",
    marginBottom: 4,
    textAlign: "center",
  },
  certBadge: {
    borderWidth: 1,
    borderColor: "#c9a96e",
    borderStyle: "solid",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 3,
    margin: 4,
  },
  certBadgeText: {
    fontSize: 8,
    color: "#c9a96e",
  },
  twoCol: {
    flexDirection: "row",
    gap: 16,
  },
  col: {
    flex: 1,
  },
  bodyText: {
    fontSize: 9,
    color: "#444444",
    lineHeight: 1.5,
    marginBottom: 8,
  },
  label: {
    fontSize: 8,
    color: "#999999",
    marginBottom: 2,
  },
  value: {
    fontSize: 9,
    color: "#1a1a1a",
    marginBottom: 6,
  },
  categoryHeader: {
    backgroundColor: "#1a1a1a",
    padding: 12,
    marginBottom: 12,
    borderRadius: 4,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 4,
  },
  categoryMeta: {
    fontSize: 9,
    color: "#c9a96e",
  },
  grid2: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  gridCard: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderStyle: "solid",
    borderRadius: 4,
    padding: 12,
  },
});

const PageFooter = () => (
  <View style={styles.footer} fixed>
    <Text style={styles.footerText}>Vedant Fashion — Confidential B2B Catalogue</Text>
    <Text style={styles.footerText}>contact@vedantfashion.com</Text>
    <Text
      style={styles.pageNumber}
      render={({ pageNumber, totalPages }: { pageNumber: number; totalPages: number }) =>
        `Page ${pageNumber} of ${totalPages}`
      }
    />
  </View>
);

interface GroupedCategory {
  category: string;
  products: Array<{
    name: string;
    shortDescription: string;
    moq: string;
    leadTime: string;
    certifications: string[];
    fabricOptions: Array<{ composition: string; gsm: number }>;
    sku?: string;
  }>;
}

interface CataloguePDFProps {
  products: GroupedCategory[];
  categories: string[];
  generatedDate: string;
}

const KEY_FACTS = [
  ["Founded", "2024"],
  ["Location", "Mumbai, India"],
  ["Factory", "5,000 sq ft"],
  ["Workers", "15 skilled staff"],
  ["Machines", "60"],
  ["MOQ", "100 pcs per style"],
  ["Lead Time", "60–90 days bulk"],
  ["FOB Price", "USD 5–8 per piece"],
];

const EXPORT_INFO = [
  ["Markets", "UAE, Russia, Poland, South Africa"],
  ["Incoterms", "FOB Mumbai"],
  ["Payment", "60-day LC / TT"],
  ["Currencies", "USD, EUR"],
  ["Bank", "Union Bank of India"],
];

const FABRICS = ["Viscose", "Linen Blends", "Rayon", "Georgette", "Crepe"];

const PRODUCT_RANGE = [
  "Ladies Woven Tops & Bottoms",
  "Western Wear",
  "Embroidery",
  "Sequin Clothing",
  "Co-ord Sets",
  "Blouses",
  "Kurtis",
  "Dresses",
];

function formatCategoryName(slug: string) {
  return slug
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}

export function CataloguePDF({ products, categories, generatedDate }: CataloguePDFProps) {
  return (
    <Document title="Vedant Fashion — B2B Product Catalogue" author="Vedant Fashion">
      {/* PAGE 1 — Cover */}
      <Page size="A4" style={{ backgroundColor: "#1a1a1a", padding: 80 }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 11, color: "#c9a96e", letterSpacing: 4, marginBottom: 24, textAlign: "center" }}>
            VEDANT FASHION
          </Text>
          <Text style={styles.coverTitle}>Product Catalogue</Text>
          <Text style={styles.coverSubtitle}>Ladies Woven Wear — B2B Wholesale</Text>

          <View style={{ borderTopWidth: 1, borderTopColor: "#c9a96e", borderTopStyle: "solid", width: 60, marginBottom: 32 }} />

          <Text style={styles.coverDetail}>Mumbai, India · Est. 2024</Text>
          <Text style={styles.coverDetail}>contact@vedantfashion.com</Text>
          <Text style={styles.coverDetail}>+91 99309 68116</Text>
          <Text style={styles.coverDetail}>vedantfashion.com</Text>

          <Text style={{ fontSize: 8, color: "#666666", marginTop: 40, marginBottom: 16, textAlign: "center" }}>
            Generated {generatedDate}
          </Text>

          <View style={{ flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>
            {["GOTS Certified", "OEKO-TEX", "FOB Mumbai"].map((cert) => (
              <View key={cert} style={styles.certBadge}>
                <Text style={styles.certBadgeText}>{cert}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>

      {/* PAGE 2 — Company Overview */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Vedant Fashion</Text>
          <Text style={styles.bodyText}>
            Vedant Fashion is a Mumbai-based B2B manufacturer and exporter of premium ladies woven wear. Founded in 2024, we
            specialise in GOTS-certified organic cotton, Tencel™ lyocell, and linen-blend garments for wholesale buyers across
            the UAE, Russia, Poland, and South Africa. Our 5,000 sq ft facility operates 60 machines and employs 15 skilled
            craftspeople. We offer FOB pricing from USD 5–8 per piece with MOQ from 100 pieces per style and full private
            label services including custom branding, packaging, and Arabic/English bilingual care labels for GCC compliance.
          </Text>
        </View>

        <View style={styles.twoCol}>
          <View style={styles.col}>
            <Text style={[styles.sectionTitle, { fontSize: 11 }]}>Key Facts</Text>
            <View style={styles.table}>
              {KEY_FACTS.map(([label, val]) => (
                <View key={label} style={styles.tableRow}>
                  <Text style={[styles.tableCell, { color: "#999999", flex: 0.9 }]}>{label}</Text>
                  <Text style={[styles.tableCell, { flex: 1.1 }]}>{val}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.col}>
            <Text style={[styles.sectionTitle, { fontSize: 11 }]}>Export Information</Text>
            <View style={styles.table}>
              {EXPORT_INFO.map(([label, val]) => (
                <View key={label} style={styles.tableRow}>
                  <Text style={[styles.tableCell, { color: "#999999", flex: 0.9 }]}>{label}</Text>
                  <Text style={[styles.tableCell, { flex: 1.1 }]}>{val}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { fontSize: 11 }]}>Product Range</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
            {PRODUCT_RANGE.map((item) => (
              <View key={item} style={styles.specBadge}>
                <Text style={{ fontSize: 8, color: "#444444" }}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { fontSize: 11 }]}>Fabrics We Work With</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
            {FABRICS.map((f) => (
              <View key={f} style={styles.specBadge}>
                <Text style={{ fontSize: 8, color: "#444444" }}>{f}</Text>
              </View>
            ))}
          </View>
        </View>

        <PageFooter />
      </Page>

      {/* PAGES 3+ — One page per category */}
      {products.map((group) => (
        <Page key={group.category} size="A4" style={styles.page}>
          <View style={styles.categoryHeader}>
            <Text style={styles.categoryName}>{formatCategoryName(group.category)}</Text>
            <Text style={styles.categoryMeta}>
              {group.products.length} styles · FOB Mumbai · MOQ from 100 pcs
            </Text>
          </View>

          <View style={styles.grid2}>
            {group.products.map((p) => (
              <View key={p.sku ?? p.name} style={styles.gridCard}>
                <Text style={styles.productName}>{p.name}</Text>
                <Text style={styles.productDesc}>{p.shortDescription}</Text>
                <View style={styles.specsRow}>
                  <View style={styles.specBadge}>
                    <Text style={{ fontSize: 8, color: "#444444" }}>MOQ: {p.moq}</Text>
                  </View>
                  <View style={styles.specBadge}>
                    <Text style={{ fontSize: 8, color: "#444444" }}>{p.leadTime}</Text>
                  </View>
                  {p.fabricOptions[0] && (
                    <View style={styles.specBadge}>
                      <Text style={{ fontSize: 8, color: "#444444" }}>
                        {p.fabricOptions[0].composition} · {p.fabricOptions[0].gsm} GSM
                      </Text>
                    </View>
                  )}
                </View>
                {p.certifications.length > 0 && (
                  <View style={[styles.specsRow, { marginTop: 6 }]}>
                    {p.certifications.map((cert) => (
                      <View key={cert} style={[styles.specBadge, { backgroundColor: "#f0f4ec" }]}>
                        <Text style={{ fontSize: 7, color: "#5a7a4a" }}>{cert}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>

          <PageFooter />
        </Page>
      ))}

      {/* LAST PAGE — Terms & Contact */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ordering Information</Text>
          <View style={styles.table}>
            {[
              ["MOQ", "100 pcs per style (standard); 300 pcs for GOTS-certified styles"],
              ["Sample Process", "Sealed sample approval before bulk. Digital lab-dip available."],
              ["Lead Time", "45–60 days production + 18–22 days sea freight to Jebel Ali"],
              ["Payment Terms", "60-day LC or 30% TT deposit, balance before shipment"],
              ["Incoterms", "FOB JNPT Mumbai. CIF available on request."],
            ].map(([label, val]) => (
              <View key={label} style={styles.tableRow}>
                <Text style={[styles.tableCell, { color: "#999999", flex: 0.8 }]}>{label}</Text>
                <Text style={[styles.tableCell, { flex: 1.2 }]}>{val}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quality Assurance</Text>
          <Text style={styles.bodyText}>
            All garments are inspected under AQL 2.5 at our ISO 9001 facility. In-line and final QC checks are standard.
            Third-party testing through SGS or Intertek is available on request. AZO-free dyes with formaldehyde below 75 ppm
            (EU REACH compliant). Full QC reports and packing lists provided with each shipment.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          <View style={[styles.twoCol, { gap: 24 }]}>
            <View style={styles.col}>
              <Text style={[styles.value, { fontWeight: "bold", fontSize: 11 }]}>Shravan Diwan</Text>
              <Text style={styles.label}>Director, Export Operations</Text>
              <Text style={{ fontSize: 9, color: "#1a1a1a", marginTop: 8, marginBottom: 2 }}>contact@vedantfashion.com</Text>
              <Text style={{ fontSize: 9, color: "#1a1a1a", marginBottom: 2 }}>+91 99309 68116</Text>
              <Text style={{ fontSize: 9, color: "#1a1a1a", marginBottom: 2 }}>WhatsApp: +91 99309 68116</Text>
              <Text style={{ fontSize: 9, color: "#1a1a1a" }}>vedantfashion.com</Text>
            </View>
            <View style={styles.col}>
              <Text style={styles.label}>Factory Address</Text>
              <Text style={styles.bodyText}>Mumbai, Maharashtra, India</Text>
              <Text style={styles.label}>Shipping Port</Text>
              <Text style={styles.bodyText}>JNPT Mumbai</Text>
              <Text style={styles.label}>Export Licence</Text>
              <Text style={styles.bodyText}>IEC Registered · GST Verified</Text>
            </View>
          </View>
        </View>

        <View style={{ borderTopWidth: 1, borderTopColor: "#e5e5e5", borderTopStyle: "solid", paddingTop: 12, marginTop: 16 }}>
          <Text style={{ fontSize: 7, color: "#999999", textAlign: "center" }}>
            This catalogue is for wholesale buyers only. Prices are indicative FOB Mumbai.
            All specifications subject to change without notice. © 2024 Vedant Fashion. All rights reserved.
          </Text>
        </View>

        <PageFooter />
      </Page>
    </Document>
  );
}
