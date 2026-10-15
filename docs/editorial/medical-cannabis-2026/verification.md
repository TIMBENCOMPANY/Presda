# Medical cannabis editorial verification

Reviewed: 15 October 2026. Article: `medical-cannabis-science-benefits-risks`, Science, ID 264.

## Evidence and editorial decisions

- Full English, French, Spanish and Arabic editions have 44 matching content blocks and identical citation targets. English body is approximately 2,000 words. No invented patient vignette, quotation, diagnosis or dosing advice.
- The 2017 Dravet trial is cited through PubMed PMID 28538134. Median monthly convulsive seizures are 12.4 to 5.9 versus 14.9 to 14.1. The article does not misrepresent the non-significant 50% responder endpoint.
- FDA's 2025 Epidiolex label, 210365s023lbl.pdf, supplies the three indications and minimum age of one year. Older NCCIH/FDA overview wording is not used for the current indication list.
- FDA distinctions between Epidiolex, dronabinol products Marinol/Syndros and nabilone/Cesamet are preserved. Plant approval, retail access, specific medicine approval and reimbursement are kept separate.
- Cochrane's 2022 MS review supports qualified short-term, patient-reported spasticity benefit. The AHRQ 2025 review supports small short-term pain improvements with certain THC-containing products, alongside adverse effects. Neither is generalized to every product or patient.
- ASCO 2024 explicitly supports the boundary between supportive symptom care and cancer-directed treatment. No cancer-cure claim.
- FDA pregnancy, interaction and liver warnings; CDC dependence, psychiatric associations and driving risks are linked near the relevant text. No advice to abruptly discontinue prescribed seizure medication.
- WHO's 2020 scheduling change is not described as blanket legalization. Canada and England are illustrative regulatory examples, not an exhaustive legal map.
- Morocco: ANRAC's official Law 13-21 and institutional pages support the licensed lawful-use framework. Official ANRAC pages dated 29 January and 6 June 2026 document scientific events. These are explicitly not portrayed as medicine approvals, completed trials or verified patient benefits. No unverified production totals or new regulatory claims were added.
- A contextual internal link points to the existing paranoia feature; rendered localized URLs were checked.

## Illustration

User-approved source: `C:/Users/Microsoft/Desktop/Medical Cannabis Research Lab(1).png`.

Original composition is preserved. Each edition identifies it as an AI editorial illustration and explicitly states that the imagined labels/chemical diagrams do not depict approved medicines or provide medical guidance. Existing responsive derivative generation and hero layout are reused; no generated chemistry is presented as evidence.

## Validation before deployment

- Translation generation/parity passed: 789 complete translations.
- TypeScript passed with `--noEmit`.
- Targeted `tools/test-medical-cannabis.cjs` passed: four routes, schema headline/date/language/citations, self-canonicals, hreflang, RTL, hero, sitemap and Science listing.
- Eight Chrome views passed at 1440px and 390px: decoded hero, desktop overlay/mobile below-image title, red/white/gold accents, Arabic RTL, no horizontal overflow, illustration captions and localized internal links.
- French desktop and Arabic mobile screenshots inspected visually. Local screenshots and measurements are in ignored `test-results/medical-cannabis/local/`.
- Only article assets, data, localization outputs and minimal existing-component registration are included. No standalone full-site build was run locally; the production pipeline performs the required build once.

Production must be checked again after the deployment reports ready, using the same targeted and browser checks.
