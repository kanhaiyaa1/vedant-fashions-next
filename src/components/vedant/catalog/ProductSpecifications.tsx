"use client";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Shield, Droplets, Ruler, FlaskConical, Truck, Tag, Waves, CircleAlert } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductSpecificationsProps {
  product: Product;
}

const ProductSpecifications = ({ product }: ProductSpecificationsProps) => {
  return (
    <Tabs defaultValue="fabric" className="w-full">
      <TabsList className="w-full justify-start bg-secondary/50 rounded-sm h-auto flex-wrap gap-1 p-1">
        <TabsTrigger value="fabric" className="text-xs uppercase tracking-wider">Fabric Specs</TabsTrigger>
        <TabsTrigger value="care" className="text-xs uppercase tracking-wider">Care & Washing</TabsTrigger>
        <TabsTrigger value="quality" className="text-xs uppercase tracking-wider">Quality Standards</TabsTrigger>
        <TabsTrigger value="sizes" className="text-xs uppercase tracking-wider">Size Chart</TabsTrigger>
        <TabsTrigger value="compliance" className="text-xs uppercase tracking-wider">Export & HS Codes</TabsTrigger>
      </TabsList>

      {/* ── Fabric Specifications ──────────────────────────────────── */}
      <TabsContent value="fabric" className="mt-6">
        <div className="space-y-6">
          {product.fabricOptions.map((fabric, i) => (
            <div key={i} className="border border-border rounded overflow-hidden">
              <div className="bg-secondary/30 px-4 md:px-6 py-3 flex items-center justify-between">
                <h4 className="font-display text-lg font-medium text-foreground">{fabric.name}</h4>
                {fabric.hsCode && (
                  <span className="text-caption bg-background px-2 py-1 rounded-sm">HS: {fabric.hsCode}</span>
                )}
              </div>
              <div className="p-4 md:p-6">
                {/* Primary specs table */}
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-transparent">
                        <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Property</TableHead>
                        <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Specification</TableHead>
                        <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-medium hidden md:table-cell">Standard</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <SpecRow icon={<FlaskConical className="w-3.5 h-3.5" />} label="Composition" value={fabric.composition} standard="EU Reg. 1007/2011" />
                      <SpecRow icon={<Ruler className="w-3.5 h-3.5" />} label="Weight (GSM)" value={`${fabric.gsm} g/m²`} standard="ISO 3801" />
                      <SpecRow icon={<Waves className="w-3.5 h-3.5" />} label="Weave Type" value={fabric.weave} />
                      <SpecRow icon={<Ruler className="w-3.5 h-3.5" />} label="Width" value={fabric.width} />
                      <SpecRow icon={<CircleAlert className="w-3.5 h-3.5" />} label="Shrinkage Tolerance" value={fabric.shrinkage} standard="ISO 3759 / ISO 6330" />
                      <SpecRow icon={<Droplets className="w-3.5 h-3.5" />} label="Colorfastness" value={fabric.colorfastness} standard="ISO 105-C06 / X12" />
                      {fabric.tearStrength && <SpecRow icon={<Shield className="w-3.5 h-3.5" />} label="Tear Strength" value={fabric.tearStrength} standard="ISO 13937" />}
                      {fabric.pillingResistance && <SpecRow icon={<Shield className="w-3.5 h-3.5" />} label="Pilling Resistance" value={fabric.pillingResistance} standard="ISO 12945-2" />}
                      {fabric.finish && <SpecRow icon={<Tag className="w-3.5 h-3.5" />} label="Finish" value={fabric.finish} />}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          ))}
          <p className="text-caption">All values indicative. Final specifications confirmed upon sample approval. Testing per ISO / EN standards.</p>
        </div>
      </TabsContent>

      {/* ── Care & Washing ─────────────────────────────────────────── */}
      <TabsContent value="care" className="mt-6">
        <div className="space-y-6">
          {/* Wash care symbols */}
          {product.washCareSymbols && product.washCareSymbols.length > 0 && (
            <div className="border border-border rounded p-4 md:p-6">
              <h4 className="font-display text-lg font-medium text-foreground mb-4">Care Instructions</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {product.washCareSymbols.map((symbol, i) => (
                  <div key={i} className="flex items-center gap-3 bg-secondary/30 rounded-sm px-4 py-3">
                    <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center shrink-0">
                      <Droplets className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-body-sm text-foreground">{symbol}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Per-fabric washing instructions */}
          {product.fabricOptions.some((f) => f.washingInstructions) && (
            <div className="border border-border rounded p-4 md:p-6">
              <h4 className="font-display text-lg font-medium text-foreground mb-4">Fabric-Specific Washing</h4>
              <div className="space-y-3">
                {product.fabricOptions.filter((f) => f.washingInstructions).map((fabric, i) => (
                  <div key={i} className="flex items-start gap-3 text-body-sm border-b border-border/50 pb-3 last:border-0 last:pb-0">
                    <span className="font-medium text-foreground shrink-0 min-w-[140px]">{fabric.name}:</span>
                    <span className="text-muted-foreground">{fabric.washingInstructions}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fallback */}
          {!product.washCareSymbols?.length && !product.fabricOptions.some((f) => f.washingInstructions) && (
            <div className="border border-border rounded p-6 text-center">
              <p className="text-body-sm text-muted-foreground">Care instructions are confirmed upon sample approval and included on garment care labels per EU Regulation 1007/2011.</p>
            </div>
          )}
        </div>
      </TabsContent>

      {/* ── Quality Standards ──────────────────────────────────────── */}
      <TabsContent value="quality" className="mt-6">
        <div className="border border-border rounded p-4 md:p-6 space-y-6">
          {product.qualityStandards && product.qualityStandards.length > 0 ? (
            <>
              <h4 className="font-display text-lg font-medium text-foreground">Testing Standards Applied</h4>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-medium w-10">#</TableHead>
                      <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Standard & Description</TableHead>
                      <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-medium hidden md:table-cell">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {product.qualityStandards.map((std, i) => (
                      <TableRow key={i}>
                        <TableCell className="text-caption font-medium">{i + 1}</TableCell>
                        <TableCell className="text-body-sm">{std}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Badge className="bg-olive text-olive-foreground border-0 text-[10px] uppercase tracking-wider rounded-sm">Tested</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </>
          ) : (
            <p className="text-body-sm text-muted-foreground">Quality testing is performed per ISO / EN standards. Detailed test reports are provided with each shipment.</p>
          )}

          {/* Certifications */}
          <div>
            <h4 className="font-display text-base font-medium text-foreground mb-3">Certifications</h4>
            <div className="flex flex-wrap gap-2">
              {product.certifications.map((cert) => (
                <Badge key={cert} className="bg-olive text-olive-foreground border-0 rounded-sm px-3 py-1">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </TabsContent>

      {/* ── Size Chart ─────────────────────────────────────────────── */}
      <TabsContent value="sizes" className="mt-6">
        <div className="border border-border rounded overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/30 hover:bg-secondary/30">
                  <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Size</TableHead>
                  <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-medium">EU</TableHead>
                  <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-medium">UK</TableHead>
                  <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-medium">US</TableHead>
                  {product.sizeChart[0]?.chest && <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Chest (cm)</TableHead>}
                  {product.sizeChart[0]?.waist && <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Waist (cm)</TableHead>}
                  {product.sizeChart[0]?.hip && <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Hip (cm)</TableHead>}
                  {product.sizeChart[0]?.length && <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Length (cm)</TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {product.sizeChart.map((row) => (
                  <TableRow key={row.size}>
                    <TableCell className="font-medium text-foreground">{row.size}</TableCell>
                    <TableCell>{row.eu}</TableCell>
                    <TableCell>{row.uk}</TableCell>
                    <TableCell>{row.us}</TableCell>
                    {row.chest && <TableCell>{row.chest}</TableCell>}
                    {row.waist && <TableCell>{row.waist}</TableCell>}
                    {row.hip && <TableCell>{row.hip}</TableCell>}
                    {row.length && <TableCell>{row.length}</TableCell>}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <p className="text-caption mt-4">All measurements in cm. Tolerance ±1 cm. Custom size grading available for orders over 2,000 pcs.</p>
      </TabsContent>

      {/* ── Export Compliance & HS Codes ────────────────────────────── */}
      <TabsContent value="compliance" className="mt-6">
        <div className="space-y-6">
          {/* HS Code & Origin */}
          <div className="border border-border rounded p-4 md:p-6">
            <h4 className="font-display text-lg font-medium text-foreground mb-4">Trade Classification</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {product.hsCode && (
                <div className="bg-secondary/30 rounded-sm px-4 py-3">
                  <p className="text-caption mb-1">HS Code</p>
                  <p className="text-body-sm font-medium text-foreground font-mono">{product.hsCode}</p>
                </div>
              )}
              {product.countryOfOrigin && (
                <div className="bg-secondary/30 rounded-sm px-4 py-3">
                  <p className="text-caption mb-1">Country of Origin</p>
                  <p className="text-body-sm font-medium text-foreground">{product.countryOfOrigin}</p>
                </div>
              )}
              <div className="bg-secondary/30 rounded-sm px-4 py-3">
                <p className="text-caption mb-1">Preferential Tariff</p>
                <p className="text-body-sm font-medium text-foreground">GSP eligible (EU)</p>
              </div>
            </div>
            {/* Per-fabric HS codes */}
            {product.fabricOptions.some((f) => f.hsCode) && (
              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-caption mb-2">Fabric-level HS codes:</p>
                <div className="space-y-1">
                  {product.fabricOptions.filter((f) => f.hsCode).map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-body-sm">
                      <span className="text-muted-foreground">{f.name}:</span>
                      <span className="font-mono font-medium text-foreground">{f.hsCode}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Compliance standards */}
          <div className="border border-border rounded p-4 md:p-6">
            <h4 className="font-display text-lg font-medium text-foreground mb-4">Export Compliance Standards</h4>
            <div className="space-y-2.5">
              {product.exportCompliance.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-body-sm">
                  <Truck className="w-3.5 h-3.5 text-olive mt-1 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Documentation */}
          <div className="border border-border rounded p-4 md:p-6">
            <h4 className="font-display text-lg font-medium text-foreground mb-4">Shipment Documentation</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Commercial Invoice",
                "Packing List",
                "Bill of Lading / Airway Bill",
                "Certificate of Origin (GSP Form A)",
                "GOTS Transaction Certificate",
                "OEKO-TEX Test Report",
                "AQL Inspection Report",
                "Fabric Test Reports (ISO/EN)",
              ].map((doc, i) => (
                <div key={i} className="flex items-center gap-2 text-body-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-olive shrink-0" />
                  {doc}
                </div>
              ))}
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

// ── Spec row component ──────────────────────────────────────────────

const SpecRow = ({ icon, label, value, standard }: { icon: React.ReactNode; label: string; value: string; standard?: string }) => (
  <TableRow>
    <TableCell className="text-body-sm">
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground">{icon}</span>
        <span className="font-medium text-foreground">{label}</span>
      </div>
    </TableCell>
    <TableCell className="text-body-sm text-foreground">{value}</TableCell>
    <TableCell className="text-caption hidden md:table-cell">{standard || "—"}</TableCell>
  </TableRow>
);

export default ProductSpecifications;
