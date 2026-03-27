"use client";

import { useState } from "react";
import GeneralInquiryForm from "@/components/vedant/inquiry/GeneralInquiryForm";
import ProductInquiryFormPage from "@/components/vedant/inquiry/ProductInquiryFormPage";
import BulkOrderForm from "@/components/vedant/inquiry/BulkOrderForm";
import PrivateLabelForm from "@/components/vedant/inquiry/PrivateLabelForm";

const tabs = [
  { id: "general", label: "General Inquiry" },
  { id: "product", label: "Product Inquiry" },
  { id: "bulk", label: "Bulk Order" },
  { id: "private-label", label: "Private Label" },
] as const;

type TabId = typeof tabs[number]["id"];

const InquiryTabs = () => {
  const [activeTab, setActiveTab] = useState<TabId>("general");

  return (
    <section className="section-spacing">
      <div className="container-tight">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 text-xs uppercase tracking-widest rounded-sm transition-colors ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-accent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "general" && <GeneralInquiryForm />}
        {activeTab === "product" && <ProductInquiryFormPage />}
        {activeTab === "bulk" && <BulkOrderForm />}
        {activeTab === "private-label" && <PrivateLabelForm />}
      </div>
    </section>
  );
};

export default InquiryTabs;
