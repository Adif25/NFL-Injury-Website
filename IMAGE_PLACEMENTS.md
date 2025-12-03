# Research Page Image Placement Guide

## Total Images: 14

### Section 1: Introduction
**Figure 1** - Hines Ward Super Bowl XLIII ✅ ADDED
- Location: After first paragraph
- File: `assets/images/hines-ward-superbowl.jpg`
- Caption: Hines Ward celebrating Super Bowl XLIII victory, just two weeks after MCL injury recovery using PRP therapy.
- Citation: NFL/Getty Images (2009)

### Section 2: Medical Disparity

**Figure 2** - NFL Medical Staff ✅ ADDED  
- Location: Immediate Access to Elite Care subsection
- File: `assets/images/nfl-medical-staff.jpg`
- Caption: NFL medical staff providing immediate sideline care, including team physicians and athletic trainers.
- Citation: NFL Photos (2023)

**Figure 3** - Hyperbaric Chamber
- Location: Cutting-Edge Therapies subsection
- File: `assets/images/hyperbaric-chamber.jpg`
- Caption: Hyperbaric oxygen chamber, commonly used in NFL facilities to accelerate tissue healing and reduce inflammation.
- Citation: Sports Medicine Today (2022)

**Figure 4** - PRP Injection Process
- Location: Cutting-Edge Therapies subsection (after PRP mention)
- File: `assets/images/prp-injection.jpg`
- Caption: Platelet-Rich Plasma (PRP) injection procedure, showing centrifuged blood being prepared for injection to promote healing.
- Citation: Johns Hopkins Medicine (2023)

**Figure 5** - NFL Training Facility Rehab
- Location: Intensive Rehabilitation Programs subsection
- File: `assets/images/nfl-training-facility.jpg`
- Caption: State-of-the-art NFL training facility featuring advanced rehabilitation equipment including anti-gravity treadmills and motion analysis systems.
- Citation: NFL Facilities Report (2024)

### Section 3: Financial Disparity

**Figure 6** - Adrian Peterson Training
- Location: The Cost of Accelerated Healing subsection
- File: `assets/images/adrian-peterson-training.jpg`
- Caption: Adrian Peterson during intensive rehabilitation, investing $10,000 per week in specialized recovery therapies.
- Citation: ESPN Features (2012)

**Figure 7** - Cost Comparison Chart
- Location: Financial Barriers subsection
- File: `assets/images/cost-comparison-chart.png`
- Caption: Cost comparison of advanced injury treatments: PRP therapy ($750-850 per injection), stem cell therapy ($5,000-8,000), hyperbaric oxygen sessions ($250-450 per session).
- Citation: Healthcare Cost Analysis, American Sports Medicine Institute (2024)

**Figure 8** - Insurance Coverage Gap
- Location: Financial Barriers subsection
- File: `assets/images/insurance-coverage.jpg`
- Caption: Visualization of treatment coverage disparities between NFL team medical plans and standard health insurance for recreational athletes.
- Citation: Sports Insurance Review (2023)

### Section 4: Ethical Considerations

**Figure 9** - Team Doctor Sideline
- Location: Pressure to Return subsection
- File: `assets/images/team-doctor-conflict.jpg`
- Caption: Team physician examining player on sideline, illustrating the potential conflict of interest between team needs and player health.
- Citation: Sports Medicine Ethics Journal (2023)

**Figure 10** - Concussion Protocol
- Location: Concussion Management Ethics subsection
- File: `assets/images/concussion-protocol.jpg`
- Caption: NFL independent neurologist conducting sideline concussion assessment using standardized protocol.
- Citation: NFL Health & Safety (2024)

### Section 5: Case Comparisons

**Figure 11** - Drew Brees Comeback
- Location: Shoulder Labrum case card
- File: `assets/images/drew-brees-comeback.jpg`
- Caption: Drew Brees throwing during his remarkable comeback season after shoulder labrum surgery, 8-9 months post-op.
- Citation: Sports Illustrated (2006)

**Figure 12** - ACL Surgery Diagram
- Location: ACL Tear case card
- File: `assets/images/acl-surgery-diagram.jpg`
- Caption: Medical illustration of ACL reconstruction surgery, showing graft placement and surgical technique.
- Citation: Orthopedic Surgery Today (2023)

**Figure 13** - MRI Knee Comparison
- Location: ACL Tear case card  
- File: `assets/images/mri-knee-comparison.jpg`
- Caption: MRI images comparing healthy ACL (left) with torn ACL (right), demonstrating typical injury severity.
- Citation: Radiology Institute (2024)

**Figure 14** - Recovery Timeline Infographic
- Location: Conclusion section
- File: `assets/images/recovery-timeline-infographic.png`
- Caption: Comparative infographic showing average recovery timelines for common injuries: NFL players vs. non-professional athletes aged 20-29.
- Citation: Created by Author based on research data (2025)

## Image Specifications

- **Format**: JPG for photos, PNG for infographics/diagrams
- **Size**: Max width 1200px, optimized for web
- **Alt text**: Descriptive for accessibility
- **File naming**: Lowercase, hyphenated, descriptive

## Citation Format

All images use the format:
```html
<figure class="research-image [optional: research-image-right or research-image-left]">
    <img src="assets/images/[filename]" alt="[descriptive alt text]">
    <figcaption>
        <strong>Figure #:</strong> [Caption describing the image]
        <span class="image-citation">Source: [Source name (Year)]</span>
    </figcaption>
</figure>
```

## Layout Classes

- `research-image` - Full width, centered
- `research-image-right` - Float right, text wraps left
- `research-image-left` - Float left, text wraps right
