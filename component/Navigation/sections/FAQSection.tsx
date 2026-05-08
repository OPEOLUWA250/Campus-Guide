"use client";

import React, { useState } from "react";
import { COLORS } from "@/constant/design";
import { ChevronUpIcon } from "@/assets/icons";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQ[];
  title?: string;
  subtitle?: string;
}

const DEFAULT_FAQS: FAQ[] = [
  {
    question: "Is CampusGuide available for all campuses?",
    answer:
      "We're continuously expanding our coverage. If you haven't seen your campus yet, let us know, and we'll prioritize adding it to the list.",
  },
  {
    question: "How can I contribute to the CampusGuide project?",
    answer:
      "You can contribute by uploading and mapping your campus boundaries, verifying existing data, or joining our community of campus mappers.",
  },
  {
    question: "What information is included in CampusGuide maps?",
    answer:
      "Our maps include building locations, campus pathways, landmarks, accessibility information, and real-time navigation features to help you navigate your campus.",
  },
  {
    question: "Is CampusGuide free to use?",
    answer:
      "Yes, CampusGuide is completely free to use for all students and campus visitors. We believe in making campus navigation accessible to everyone.",
  },
];

export const FAQSection: React.FC<FAQSectionProps> = ({
  faqs = DEFAULT_FAQS,
  title = "Frequently Asked Question",
  subtitle = "Here are answers to our most frequently\nasked questions on CampusGuide",
}) => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <section className="w-full py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center space-y-2 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {title}
            </h2>
            <p className="text-base text-gray-600 flex-wrap whitespace-pre-line">
              {subtitle}
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-3xl overflow-hidden border border-gray-200 transition-all"
                style={{
                  backgroundColor: "white",
                }}
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setExpandedIdx(expandedIdx === idx ? null : idx)
                  }
                  className="w-full px-3 sm:px-4 py-4 flex items-center justify-between hover:opacity-80 transition"
                >
                  <h3 className="text-lg font-medium text-gray-900 text-left">
                    {faq.question}
                  </h3>
                  <div
                    className="flex-shrink-0 ml-4 transition-transform rounded-full flex items-center justify-center"
                    style={{
                      width: "32px",
                      height: "32px",
                      backgroundColor: "#F4F6F8",
                      transform:
                        expandedIdx === idx ? "rotate(0deg)" : "rotate(180deg)",
                    }}
                  >
                    <ChevronUpIcon size={16} color={COLORS.secondary} />
                  </div>
                </button>

                {/* Answer */}
                {expandedIdx === idx && (
                  <div
                    className="px-3 sm:px-4 py-4"
                    style={{ backgroundColor: "white" }}
                  >
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
