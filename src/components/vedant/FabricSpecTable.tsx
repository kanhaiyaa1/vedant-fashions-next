"use client";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FadeUp, FadeIn } from "@/components/vedant/animations";

const specs = [
  { fabric: "Milano Twill", composition: "100% Organic Cotton", weight: "120 GSM", width: "150 cm", shrinkage: "< 3%", colorfastness: "4-5", cert: "GOTS" },
  { fabric: "Nordic Linen", composition: "55% Linen, 45% Tencel™", weight: "180 GSM", width: "145 cm", shrinkage: "< 5%", colorfastness: "4", cert: "GRS" },
  { fabric: "Alpine Fleece", composition: "70% rPET, 30% Organic Cotton", weight: "280 GSM", width: "160 cm", shrinkage: "< 2%", colorfastness: "4-5", cert: "GRS" },
  { fabric: "Riviera Chambray", composition: "100% Organic Cotton", weight: "150 GSM", width: "150 cm", shrinkage: "< 3%", colorfastness: "4-5", cert: "GOTS" },
  { fabric: "Côte Satin", composition: "100% Tencel™ Lyocell", weight: "95 GSM", width: "140 cm", shrinkage: "< 2%", colorfastness: "4-5", cert: "OEKO-TEX" },
  { fabric: "Fjord Jersey", composition: "95% OC, 5% EA", weight: "200 GSM", width: "155 cm", shrinkage: "< 4%", colorfastness: "4", cert: "GOTS" },
];

const FabricSpecTable = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-wide">
        <FadeUp className="text-center mb-16 space-y-4">
          <p className="text-subheading text-gold">Technical Data</p>
          <h2 className="text-display-md text-foreground">Fabric Specifications</h2>
          <p className="text-body text-muted-foreground max-w-xl mx-auto">
            Detailed technical specifications for our core fabric range. Custom compositions available on request.
          </p>
        </FadeUp>

        <FadeIn delay={1}>
          <div className="border border-border rounded overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary hover:bg-secondary">
                  <TableHead className="font-display text-sm font-semibold text-foreground">Fabric</TableHead>
                  <TableHead className="font-display text-sm font-semibold text-foreground">Composition</TableHead>
                  <TableHead className="font-display text-sm font-semibold text-foreground">Weight</TableHead>
                  <TableHead className="font-display text-sm font-semibold text-foreground hidden md:table-cell">Width</TableHead>
                  <TableHead className="font-display text-sm font-semibold text-foreground hidden lg:table-cell">Shrinkage</TableHead>
                  <TableHead className="font-display text-sm font-semibold text-foreground hidden lg:table-cell">Colorfastness</TableHead>
                  <TableHead className="font-display text-sm font-semibold text-foreground">Certification</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {specs.map((spec) => (
                  <TableRow key={spec.fabric}>
                    <TableCell className="font-medium text-foreground">{spec.fabric}</TableCell>
                    <TableCell className="text-muted-foreground">{spec.composition}</TableCell>
                    <TableCell>{spec.weight}</TableCell>
                    <TableCell className="hidden md:table-cell">{spec.width}</TableCell>
                    <TableCell className="hidden lg:table-cell">{spec.shrinkage}</TableCell>
                    <TableCell className="hidden lg:table-cell">{spec.colorfastness}</TableCell>
                    <TableCell>
                      <Badge className="bg-olive text-olive-foreground border-0 text-[10px] uppercase tracking-wider rounded-sm">
                        {spec.cert}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </FadeIn>

        <p className="text-caption text-center mt-6">
          All values are indicative. Final specs confirmed upon sample approval. Testing per ISO / EN standards.
        </p>
      </div>
    </section>
  );
};

export default FabricSpecTable;
