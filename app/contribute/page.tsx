"use client";

import React, { useState } from "react";
import ContributeForm, {
  ContributeFormData,
} from "@/component/Navigation/sections/ContributeForm";
import ContributeSuccess from "@/component/Navigation/sections/contribute/ContributeSuccess";

export default function ContributePage() {
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  const [submittedFormData, setSubmittedFormData] =
    useState<ContributeFormData | null>(null);

  const handleContributeSubmit = (formData: ContributeFormData) => {
    console.log("Contribute form submitted:", formData);
    setSubmittedFormData(formData);
    setShowSuccessPage(true);
  };

  if (showSuccessPage && submittedFormData) {
    return (
      <ContributeSuccess
        userName={submittedFormData.contributorName || "youthmapperX"}
        userEmail={submittedFormData.email || "youthmapperX@gmail.com"}
      />
    );
  }

  return (
    <ContributeForm
      onClose={() => (window.location.href = "/")}
      onSubmit={handleContributeSubmit}
    />
  );
}
