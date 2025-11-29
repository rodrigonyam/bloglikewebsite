// Medical Conditions Database
const medicalConditions = [
    {
        name: "Type 2 Diabetes",
        severity: "serious",
        description: "A chronic condition characterized by high blood sugar levels due to insulin resistance.",
        symptoms: "Increased thirst, frequent urination, fatigue",
        treatment: "Diet control, exercise, medications (Metformin, Sulfonylureas)",
        prevention: "Healthy diet, regular exercise, weight management",
        sources: [
            { title: "Type 2 Diabetes - CDC", url: "https://www.cdc.gov/diabetes/basics/type2.html" },
            { title: "Diabetes and Insulin Resistance - Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/type-2-diabetes/symptoms-causes/syc-20351193" },
            { title: "Management of Type 2 Diabetes - American Diabetes Association", url: "https://www.diabetes.org/resources/manage-your-diabetes" }
        ]
    },
    {
        name: "Hypertension",
        severity: "serious",
        description: "Elevated blood pressure that can lead to serious health complications.",
        symptoms: "Usually asymptomatic, but can cause headaches, chest pain",
        treatment: "ACE inhibitors, Beta-blockers, Diuretics, lifestyle changes",
        prevention: "Reduce salt intake, exercise, stress management",
        sources: [
            { title: "High Blood Pressure - CDC", url: "https://www.cdc.gov/bloodpressure/index.html" },
            { title: "Hypertension - Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/high-blood-pressure/symptoms-causes/syc-20373410" },
            { title: "Understanding Blood Pressure - American Heart Association", url: "https://www.heart.org/en/health-topics/consumer-top-articles-on-heart-attack" }
        ]
    },
    {
        name: "Common Cold",
        severity: "common",
        description: "A viral infection affecting the upper respiratory tract.",
        symptoms: "Runny nose, sore throat, cough, mild fever",
        treatment: "Rest, fluids, over-the-counter pain relievers",
        prevention: "Hand hygiene, avoid close contact with infected persons",
        sources: [
            { title: "Common Cold - CDC", url: "https://www.cdc.gov/rhinoviruses/index.html" },
            { title: "Cold, Flu, and Cough - Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/common-cold/symptoms-causes/syc-20351605" }
        ]
    },
    {
        name: "Asthma",
        severity: "serious",
        description: "A chronic inflammatory disease of the airways causing breathing difficulties.",
        symptoms: "Shortness of breath, chest tightness, wheezing, cough",
        treatment: "Inhalers (albuterol), corticosteroids, bronchodilators",
        prevention: "Avoid triggers, maintain healthy environment",
        sources: [
            { title: "Asthma Overview - CDC", url: "https://www.cdc.gov/asthma/index.html" },
            { title: "Asthma - Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653" },
            { title: "Asthma Action Plan - American Academy of Allergy, Asthma & Immunology", url: "https://www.aaaai.org/" }
        ]
    },
    {
        name: "Depression",
        severity: "serious",
        description: "A mental health disorder characterized by persistent sadness and loss of interest.",
        symptoms: "Persistent sadness, loss of interest, fatigue, sleep issues",
        treatment: "Therapy, antidepressants (SSRIs), lifestyle changes",
        prevention: "Social support, exercise, stress management",
        sources: [
            { title: "Depression - National Institute of Mental Health", url: "https://www.nimh.nih.gov/health/statistics/major-depression" },
            { title: "Major Depression - Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20350057" },
            { title: "Understanding Depression - American Psychiatric Association", url: "https://www.psychiatry.org/" }
        ]
    },
    {
        name: "Migraine",
        severity: "common",
        description: "A neurological condition characterized by intense, debilitating headaches.",
        symptoms: "Severe headache, nausea, sensitivity to light and sound",
        treatment: "Triptan medications, rest, pain relievers",
        prevention: "Identify triggers, maintain regular sleep schedule",
        sources: [
            { title: "Migraines - NIH", url: "https://www.ninds.nih.gov/Disorders/All-Disorders/Migraine-Information-Page" },
            { title: "Migraine - Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/migraine-headache/symptoms-causes/syc-20360201" },
            { title: "Migraine Research Foundation", url: "https://migraineresearchfoundation.org/" }
        ]
    },
    {
        name: "Arthritis",
        severity: "common",
        description: "Inflammation of one or more joints, causing pain and stiffness.",
        symptoms: "Joint pain, swelling, stiffness, reduced mobility",
        treatment: "NSAIDs, physical therapy, steroid injections",
        prevention: "Regular exercise, maintain healthy weight",
        sources: [
            { title: "Arthritis - CDC", url: "https://www.cdc.gov/arthritis/index.html" },
            { title: "Arthritis - Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/arthritis/symptoms-causes/syc-20350772" },
            { title: "Arthritis Foundation", url: "https://www.arthritis.org/" }
        ]
    },
    {
        name: "Heart Disease",
        severity: "serious",
        description: "A broad term for conditions affecting the heart and blood vessels.",
        symptoms: "Chest pain, shortness of breath, fatigue",
        treatment: "Medications, surgery, lifestyle modifications",
        prevention: "Healthy diet, exercise, avoid smoking",
        sources: [
            { title: "Heart Disease - CDC", url: "https://www.cdc.gov/heartdisease/index.html" },
            { title: "Heart Disease - Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/heart-disease/symptoms-causes/syc-20353619" },
            { title: "American Heart Association", url: "https://www.heart.org/" }
        ]
    },
    {
        name: "Gastroenteritis",
        severity: "common",
        description: "Inflammation of the stomach and intestines, commonly called stomach flu.",
        symptoms: "Nausea, vomiting, diarrhea, abdominal cramps",
        treatment: "Rest, hydration, electrolyte replacement",
        prevention: "Food safety, proper hygiene",
        sources: [
            { title: "Viral Gastroenteritis - CDC", url: "https://www.cdc.gov/norovirus/index.html" },
            { title: "Gastroenteritis - Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/viral-gastroenteritis/symptoms-causes/syc-20378847" }
        ]
    },
    {
        name: "Pneumonia",
        severity: "serious",
        description: "Infection causing inflammation of air sacs in the lungs.",
        symptoms: "Fever, cough, difficulty breathing, chest pain",
        treatment: "Antibiotics, oxygen therapy, hospitalization if severe",
        prevention: "Vaccination, avoid smoking, maintain hygiene",
        sources: [
            { title: "Pneumonia - CDC", url: "https://www.cdc.gov/pneumonia/index.html" },
            { title: "Pneumonia - Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/pneumonia/symptoms-causes/syc-20354204" },
            { title: "Pneumonia Vaccines - CDC", url: "https://www.cdc.gov/pneumococcal/index.html" }
        ]
    },
    {
        name: "Anxiety Disorder",
        severity: "common",
        description: "Excessive worry and fear that interferes with daily activities.",
        symptoms: "Worry, panic attacks, trembling, sweating",
        treatment: "Therapy, meditation, anxiety medications",
        prevention: "Stress management, regular exercise",
        sources: [
            { title: "Anxiety Disorders - NIMH", url: "https://www.nimh.nih.gov/health/statistics/any-anxiety-disorder" },
            { title: "Anxiety Disorders - Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/anxiety/symptoms-causes/syc-20350961" },
            { title: "Anxiety and Depression Association of America", url: "https://adaa.org/" }
        ]
    },
    {
        name: "Osteoporosis",
        severity: "serious",
        description: "Weakening of bones making them more susceptible to fractures.",
        symptoms: "Often asymptomatic, back pain, loss of height",
        treatment: "Calcium supplements, vitamin D, bisphosphonates",
        prevention: "Adequate calcium/vitamin D, weight-bearing exercise",
        sources: [
            { title: "Osteoporosis - NIH", url: "https://www.bones.nih.gov/" },
            { title: "Osteoporosis - Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/osteoporosis/symptoms-causes/syc-20351968" },
            { title: "National Osteoporosis Foundation", url: "https://www.nof.org/" }
        ]
    }
];

// Neurodiversity & Chronic Pain Database
const neuroDiversityConditions = [
    {
        name: "Autism Spectrum Disorder (ASD)",
        category: "autism",
        description: "A developmental condition characterized by differences in social communication, sensory processing, and behavioral patterns.",
        characteristics: "Varying support needs, unique sensory experiences, different communication styles, special interests",
        strengths: "Attention to detail, pattern recognition, deep focus, creative problem-solving, honesty",
        support: "Occupational therapy, speech therapy, behavioral support, sensory accommodations, peer support groups",
        neurodiversity_note: "Autism is a difference in neurology, not a defect. Each autistic individual has unique needs and strengths.",
        sources: [
            { title: "Autism Spectrum Disorder - CDC", url: "https://www.cdc.gov/ncbddd/autism/index.html" },
            { title: "Autism - Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/autism-spectrum-disorder/symptoms-causes/syc-20353928" },
            { title: "Autism Society of America", url: "https://www.autism-society.org/" },
            { title: "Neurodiversity and Autism - Research", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5050307/" }
        ]
    },
    {
        name: "Attention-Deficit/Hyperactivity Disorder (ADHD)",
        category: "adhd",
        description: "A neurodevelopmental condition affecting attention, impulse control, and activity regulation.",
        characteristics: "Difficulty with sustained attention, impulsivity, hyperactivity (varies by presentation), executive function challenges",
        strengths: "Hyperfocus ability, creativity, high energy, resilience, quick problem-solving",
        support: "Stimulant medications (methylphenidate, amphetamines), cognitive behavioral therapy, coaching, organizational tools, environmental modifications",
        neurodiversity_note: "ADHD presents differently in individuals and across genders. Many adults go undiagnosed, especially women.",
        sources: [
            { title: "ADHD - CDC", url: "https://www.cdc.gov/ncbddd/adhd/index.html" },
            { title: "ADHD - Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/adhd/symptoms-causes/syc-20350889" },
            { title: "ADHD Institute", url: "https://www.adhdinstitute.com/" },
            { title: "ADHD in Adults - NIMH", url: "https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd" }
        ]
    },
    {
        name: "Attention Deficit Disorder (ADD)",
        category: "adhd",
        description: "Primarily inattentive presentation of ADHD, characterized by difficulties with focus and organization without hyperactivity.",
        characteristics: "Inattention, procrastination, distractibility, forgetfulness, difficulty organizing tasks, time blindness",
        strengths: "Big-picture thinking, creative solutions, empathy, adaptability, hyperfocus on interests",
        support: "Non-stimulant medications (atomoxetine, guanfacine), time management strategies, external accountability, coaching",
        neurodiversity_note: "ADD is often overlooked because it lacks the hyperactivity component, leading to underdiagnosis.",
        sources: [
            { title: "ADD/ADHD Inattentive Type - Psychology Today", url: "https://www.psychologytoday.com/us/basics/adhd/predominantly-inattentive-type" },
            { title: "Inattentive ADHD - CHADD", url: "https://chadd.org/" },
            { title: "Predominantly Inattentive ADHD - Medical News Today", url: "https://www.medicalnewstoday.com/articles/322349" }
        ]
    },
    {
        name: "Dyslexia",
        category: "autism",
        description: "A specific learning disability affecting reading, spelling, and language processing.",
        characteristics: "Difficulty with phonemic awareness, spelling, reading speed, but often strong in visualization and big-picture thinking",
        strengths: "Spatial reasoning, creative thinking, problem-solving, visual learning abilities",
        support: "Specialized tutoring (Orton-Gillingham), audiobooks, text-to-speech technology, extra time on tests, multisensory learning",
        neurodiversity_note: "Dyslexia is not related to intelligence. Many successful individuals are dyslexic.",
        sources: [
            { title: "Dyslexia - Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/dyslexia/symptoms-causes/syc-20353552" },
            { title: "What is Dyslexia - IDA", url: "https://dyslexiaida.org/what-is-dyslexia/" },
            { title: "Dyslexia Research - NIH", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4000841/" },
            { title: "Dyslexia-NICHD", url: "https://www.nichd.nih.gov/health/topics/learning-disabilities/information-pages/dyslexia" }
        ]
    },
    {
        name: "Chronic Pain Syndrome",
        category: "chronic-pain",
        description: "Persistent pain lasting more than 3-6 months, often without clear tissue damage, affecting physical and mental health.",
        characteristics: "Widespread or localized pain, fatigue, sleep disruption, mood changes, reduced function, pain fluctuations",
        triggers: "Stress, activity level, weather changes, sleep quality, emotional factors, inflammation",
        support: "Multimodal approach: physical therapy, cognitive behavioral therapy, pain medications, mindfulness, gentle exercise, specialist care",
        neurodiversity_note: "Chronic pain is real and complex. Central sensitization plays a role in pain perception and amplification.",
        sources: [
            { title: "Chronic Pain - Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/chronic-pain/symptoms-causes/syc-20355645" },
            { title: "Chronic Pain - CDC", url: "https://www.cdc.gov/injury/features/chronic-pain/index.html" },
            { title: "Central Sensitization - NIH", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5913636/" }
        ]
    },
    {
        name: "Fibromyalgia",
        category: "chronic-pain",
        description: "A chronic condition characterized by widespread musculoskeletal pain, often accompanied by fatigue and sleep problems.",
        characteristics: "Widespread body pain, tender points, extreme fatigue, brain fog, sleep disturbance, mood disorders, sensory sensitivity",
        triggers: "Physical or emotional stress, poor sleep, inactivity or overactivity, cold or damp weather",
        support: "Regular low-impact exercise, sleep hygiene, stress management, medications (duloxetine, pregabalin), heat therapy, support groups",
        neurodiversity_note: "Fibromyalgia involves central nervous system amplification of pain signals, not just peripheral tissue damage.",
        sources: [
            { title: "Fibromyalgia - Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/fibromyalgia/symptoms-causes/syc-20354780" },
            { title: "Fibromyalgia - NIH", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2891757/" },
            { title: "National Fibromyalgia Association", url: "https://www.fmaware.org/" }
        ]
    },
    {
        name: "Complex Regional Pain Syndrome (CRPS)",
        category: "chronic-pain",
        description: "A painful condition usually affecting a limb after injury, characterized by excessive pain response.",
        characteristics: "Burning pain, swelling, skin changes (color/temperature), mobility loss, autonomic symptoms, severe pain disproportionate to injury",
        triggers: "Initial injury, movement, cold exposure, emotional stress",
        support: "Physical and occupational therapy, pain medications, graded motor imagery, sympathetic nerve blocks, multidisciplinary pain management",
        neurodiversity_note: "CRPS is a dysregulation of the nervous system response to injury. Early recognition and treatment are crucial.",
        sources: [
            { title: "Complex Regional Pain Syndrome - NIH", url: "https://www.ninds.nih.gov/Disorders/All-Disorders/Complex-Regional-Pain-Syndrome-Information-Page" },
            { title: "CRPS - Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/complex-regional-pain-syndrome/symptoms-causes/syc-20355640" },
            { title: "RSDSA - CRPS", url: "https://www.rsdsa.org/" }
        ]
    },
    {
        name: "Ehlers-Danlos Syndrome (EDS)",
        category: "chronic-pain",
        description: "A group of genetic disorders affecting connective tissues, causing joint hypermobility, pain, and various systemic issues.",
        characteristics: "Joint hypermobility, chronic pain, skin hyperextensibility, tissue fragility, autonomic dysfunction, fatigue",
        triggers: "Overactivity, improper posture, stress, dehydration, temperature extremes",
        support: "Physical therapy focused on stability, bracing, pacing strategies, pain management, genetic counseling, multidisciplinary care",
        neurodiversity_note: "EDS often co-occurs with autism and ADHD. Many people are undiagnosed or misdiagnosed for years.",
        sources: [
            { title: "Ehlers-Danlos Syndrome - NIH", url: "https://www.ninds.nih.gov/Disorders/All-Disorders/Ehlers-Danlos-Syndrome-Information-Page" },
            { title: "EDS - Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/ehlers-danlos-syndrome/symptoms-causes/syc-20362466" },
            { title: "Ehlers-Danlos Society", url: "https://www.ehlers-danlos.com/" },
            { title: "EDS and Neurodivergence - Research", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8088095/" }
        ]
    },
    {
        name: "Myalgic Encephalomyelitis/Chronic Fatigue Syndrome (ME/CFS)",
        category: "chronic-pain",
        description: "A serious, complex chronic illness characterized by profound fatigue and post-exertional malaise.",
        characteristics: "Severe fatigue, post-exertional malaise (worsening after activity), cognitive dysfunction, sleep problems, pain, autonomic symptoms",
        triggers: "Physical activity, cognitive effort, stress, infections, certain foods or environmental factors",
        support: "Pacing strategies, graded rest/activity balance, cognitive behavioral therapy considerations, symptom management, multidisciplinary care",
        neurodiversity_note: "ME/CFS is a serious biological disease. Pacing and avoiding post-exertional malaise is critical for management.",
        sources: [
            { title: "ME/CFS - CDC", url: "https://www.cdc.gov/me-cfs/index.html" },
            { title: "ME/CFS - NIH", url: "https://www.ninds.nih.gov/Disorders/All-Disorders/Myalgic-Encephalomyelitis-Chronic-Fatigue-Syndrome-Information-Page" },
            { title: "ME/CFS - Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/chronic-fatigue-syndrome/symptoms-causes/syc-20360490" },
            { title: "ME/CFS Alliance", url: "https://www.mecfsalliance.org/" }
        ]
    },
    {
        name: "Mast Cell Activation Syndrome (MCAS)",
        category: "chronic-pain",
        description: "A condition where mast cells release excessive mediators, causing multiple system symptoms and often associated with hypermobility.",
        characteristics: "Flushing, hives, itching, GI symptoms, respiratory issues, anaphylaxis-like reactions, fatigue, brain fog",
        triggers: "Stress, heat, certain foods/additives, infections, medications, scents",
        support: "Antihistamines (H1 and H2 blockers), mast cell stabilizers, trigger avoidance, low-histamine diet, emergency action plan",
        neurodiversity_note: "MCAS frequently co-occurs with EDS, ADHD, and autism. Proper diagnosis requires specialized testing.",
        sources: [
            { title: "MCAS - The Mastocytosis Society", url: "https://www.tmsforaccess.org/" },
            { title: "MCAS - Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/mast-cell-activation-syndrome/symptoms-causes/syc-20777913" },
            { title: "MCAS Research - NIH", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6099192/" }
        ]
    }
];

// Medical Facts Database
const medicalFacts = [
    {
        category: "Anatomy",
        title: "The Heart",
        content: "The human heart pumps approximately 2,000 gallons of blood per day through 60,000 miles of blood vessels. It beats approximately 100,000 times daily."
    },
    {
        category: "Pharmacology",
        title: "Aspirin",
        content: "Aspirin, derived from willow bark, has been used for pain relief for centuries. It works by inhibiting prostaglandin production, reducing pain and inflammation."
    },
    {
        category: "Nutrition",
        title: "Vitamin D",
        content: "Vitamin D is crucial for calcium absorption and bone health. The human body can produce vitamin D when exposed to sunlight for 10-30 minutes."
    },
    {
        category: "Pathophysiology",
        title: "Inflammation",
        content: "Inflammation is the body's natural response to injury or infection. While protective, chronic inflammation is linked to heart disease, cancer, and diabetes."
    },
    {
        category: "Immunology",
        title: "Antibodies",
        content: "Antibodies are Y-shaped proteins produced by white blood cells. They can neutralize pathogens and mark them for destruction by the immune system."
    },
    {
        category: "Neurology",
        title: "Neuroplasticity",
        content: "The brain has the remarkable ability to rewire itself throughout life through neuroplasticity. This allows recovery from injury and learning of new skills."
    },
    {
        category: "Epidemiology",
        title: "Epidemiological Studies",
        content: "Epidemiology studies disease patterns in populations. Case-control and cohort studies help identify risk factors for various diseases."
    },
    {
        category: "Microbiology",
        title: "Antibiotics Resistance",
        content: "Antibiotic resistance occurs when bacteria evolve to survive antibiotic treatment. This is a growing global health concern requiring responsible antibiotic use."
    },
    {
        category: "Metabolism",
        title: "Basal Metabolic Rate",
        content: "BMR is the amount of energy your body needs at rest. It decreases with age and can be affected by muscle mass, genetics, and hormones."
    },
    {
        category: "Genetics",
        title: "DNA Replication",
        content: "DNA replication occurs before cell division, creating two identical copies of DNA. Any errors in this process can lead to mutations."
    }
];

// Clinical Cases Database
const clinicalCases = [
    {
        id: 1,
        title: "Case 1: Type 2 Diabetes with Complications",
        diagnosis: "Type 2 Diabetes Mellitus with Diabetic Retinopathy",
        age: "62-year-old male",
        presentation: "Patient presents with blurred vision, high fasting blood glucose (280 mg/dL), and mild proteinuria. History of poor glucose control.",
        clinical_findings: "Retinal microaneurysms, hard exudates, HbA1c 9.2%, BMI 32",
        management: "Intensified glycemic control, ACE inhibitor for proteinuria, referral to ophthalmology, patient education on diet and exercise",
        learning_points: "Importance of early diabetes management to prevent complications; regular eye screening in diabetic patients"
    },
    {
        id: 2,
        title: "Case 2: Acute Myocardial Infarction",
        diagnosis: "ST-Elevation Myocardial Infarction (STEMI)",
        age: "58-year-old male",
        presentation: "Sudden onset chest pain radiating to left arm, diaphoresis, dyspnea. Arrived at hospital 2 hours after symptom onset.",
        clinical_findings: "ST elevation in leads II, III, aVF; elevated troponin I (4.2 ng/mL); ejection fraction 38%",
        management: "Emergency PCI with stent placement, dual antiplatelet therapy, ACE inhibitor, beta-blocker, cardiac rehabilitation",
        learning_points: "Time is muscle in STEMI management; importance of rapid reperfusion therapy; post-MI rehabilitation critical"
    },
    {
        id: 3,
        title: "Case 3: Severe Asthma Exacerbation",
        diagnosis: "Acute Severe Asthma Attack (Status Asthmaticus)",
        age: "24-year-old female",
        presentation: "Acute onset severe dyspnea, wheezing, inability to speak full sentences. Triggered by upper respiratory infection.",
        clinical_findings: "Peak flow 35% predicted, SpO2 88%, using accessory muscles, silent chest on auscultation",
        management: "IV methylprednisolone, continuous albuterol nebulization, ipratropium, IV magnesium, supplemental oxygen, ICU admission",
        learning_points: "Recognition of severe asthma exacerbation; importance of rapid treatment initiation; need for close monitoring"
    },
    {
        id: 4,
        title: "Case 4: Acute Bacterial Meningitis",
        diagnosis: "Bacterial Meningitis (Streptococcus pneumoniae)",
        age: "34-year-old male",
        presentation: "High fever, severe headache, neck stiffness, photophobia, confusion. Presented to ER with rapid deterioration.",
        clinical_findings: "Petechial rash, positive Kernig and Brudzinski signs, CSF analysis showing high protein and low glucose",
        management: "Empiric antibiotics (ceftriaxone, vancomycin), dexamethasone, supportive care, ICU monitoring",
        learning_points: "Meningitis is a medical emergency requiring immediate antibiotics; lumbar puncture and CSF analysis crucial; empiric therapy before culture results"
    },
    {
        id: 5,
        title: "Case 5: Acute Appendicitis",
        diagnosis: "Acute Appendicitis",
        age: "19-year-old female",
        presentation: "Right lower quadrant pain that started periumbilically and migrated, nausea, fever (38.5°C). Classic presentation.",
        clinical_findings: "McBurney's point tenderness, positive Rovsing's sign, mild leukocytosis (WBC 12,500), CT shows inflamed appendix",
        management: "Emergency appendectomy, prophylactic antibiotics, IV fluids, pain management",
        learning_points: "Classic teaching case for appendicitis; diagnostic imaging improves accuracy; surgical intervention prevents perforation"
    },
    {
        id: 6,
        title: "Case 6: Pulmonary Embolism",
        diagnosis: "Acute Pulmonary Embolism",
        age: "52-year-old female",
        presentation: "Sudden onset dyspnea and chest pain post-flight (long haul from Europe). Risk factors: recent surgery, oral contraceptives.",
        clinical_findings: "Elevated D-dimer (>500), CT pulmonary angiography shows filling defect in right pulmonary artery, mild hypoxia (SpO2 93%)",
        management: "Anticoagulation with unfractionated heparin bridging to warfarin, oxygen, monitoring for hemodynamic instability",
        learning_points: "Post-travel thrombotic risk; importance of D-dimer and CTPA in diagnosis; anticoagulation prevents recurrence"
    },
    {
        id: 7,
        title: "Case 7: Severe Sepsis from Urinary Tract Infection",
        diagnosis: "Urosepsis with Septic Shock",
        age: "78-year-old male",
        presentation: "Fever, hypotension, confusion, frequent urination with dysuria. Community-acquired infection.",
        clinical_findings: "BP 85/50, HR 112, RR 24, lactate 4.2 mmol/L, positive urine and blood cultures (E. coli)",
        management: "Broad-spectrum antibiotics (piperacillin-tazobactam), IV fluid resuscitation, vasopressors, source control",
        learning_points: "Sepsis in elderly from UTI source; importance of rapid fluid resuscitation and antibiotics; septic shock mortality significant"
    },
    {
        id: 8,
        title: "Case 8: Acute Stroke (Ischemic)",
        diagnosis: "Acute Ischemic Stroke - Middle Cerebral Artery",
        age: "68-year-old male",
        presentation: "Sudden onset weakness on left side, slurred speech, facial droop. Wife called 911 immediately (2 hours from onset).",
        clinical_findings: "NIHSS score 14, CT head negative for hemorrhage, MRI shows acute infarct in right MCA territory",
        management: "IV thrombolysis (alteplase), aspirin, statin, monitoring in stroke unit, physical/occupational therapy",
        learning_points: "Time-window critical for thrombolysis; imaging crucial to rule out hemorrhage; acute rehabilitation improves outcomes"
    },
    {
        id: 9,
        title: "Case 9: Acute Pancreatitis",
        diagnosis: "Acute Biliary Pancreatitis",
        age: "45-year-old female",
        presentation: "Sudden severe epigastric pain radiating to back, nausea/vomiting, history of gallstones on ultrasound.",
        clinical_findings: "Lipase 1,200 U/L, amylase 950 U/L, mild hyperglycemia, transabdominal ultrasound confirms gallstones",
        management: "NPO, IV hydration, pain management, H2-blocker, ERCP if biliary obstruction, cholecystectomy after recovery",
        learning_points: "Gallstones most common cause of pancreatitis; supportive care is mainstay; ERCP indicated if obstruction suspected"
    },
    {
        id: 10,
        title: "Case 10: Anaphylactic Shock",
        diagnosis: "Anaphylaxis (Peanut Allergy)",
        age: "28-year-old male",
        presentation: "Ingested food containing peanuts, developed urticaria, angioedema, dyspnea, hypotension within 10 minutes.",
        clinical_findings: "BP 90/55, HR 135, diffuse urticaria, lip/tongue swelling, wheezing, tryptase elevated",
        management: "IM epinephrine (0.3 mg), IV access, antihistamines, corticosteroids, oxygen, observation for biphasic reaction",
        learning_points: "Epinephrine is first-line treatment; rapid recognition is critical; risk of biphasic reaction requires observation"
    },
    {
        id: 11,
        title: "Case 11: Community-Acquired Pneumonia",
        diagnosis: "Community-Acquired Pneumonia (Streptococcus pneumoniae)",
        age: "71-year-old male",
        presentation: "Productive cough with rusty sputum, fever (39.2°C), chest pain, dyspnea. Recent URI.",
        clinical_findings: "Consolidation in left lower lobe on CXR, elevated CRP, WBC 14,200, positive pneumococcal urinary antigen",
        management: "Empiric antibiotics (amoxicillin-clavulanate), supplemental oxygen, observation for complications",
        learning_points: "Typical CAP presentation; chest imaging aids diagnosis; empiric therapy covers common pathogens; prognosis generally good"
    },
    {
        id: 12,
        title: "Case 12: Diabetic Ketoacidosis",
        diagnosis: "Diabetic Ketoacidosis (Type 1 Diabetes)",
        age: "22-year-old female",
        presentation: "Recent diagnosis of Type 1 diabetes, non-compliance with insulin, polyuria, polydipsia, Kussmaul respirations.",
        clinical_findings: "Blood glucose 520 mg/dL, arterial pH 7.25, HCO3 12 mEq/L, positive ketones, anion gap metabolic acidosis",
        management: "IV insulin, aggressive fluid resuscitation, electrolyte replacement, bicarbonate if severe acidosis, ICU monitoring",
        learning_points: "DKA is medical emergency; insulin therapy critical; fluid and electrolyte management complex; education prevents recurrence"
    },
    {
        id: 13,
        title: "Case 13: Acute Coronary Syndrome (Unstable Angina)",
        diagnosis: "Unstable Angina Pectoris",
        age: "55-year-old male",
        presentation: "New onset chest pain at rest with increasing frequency, not relieved by nitrates, risk factors present.",
        clinical_findings: "EKG shows ST depression and T-wave inversion in anterolateral leads; troponin negative initially then mildly elevated",
        management: "Dual antiplatelet therapy, anticoagulation, beta-blocker, ACE inhibitor, coronary angiography",
        learning_points: "ACS spectrum includes unstable angina; EKG changes and troponin guide management; invasive strategy reduces recurrent events"
    },
    {
        id: 14,
        title: "Case 14: Acute Kidney Injury",
        diagnosis: "Acute Kidney Injury (Post-hypotensive episode)",
        age: "64-year-old male",
        presentation: "Severe dehydration from gastroenteritis, oliguria, confusion. Presented 3 days after symptom onset.",
        clinical_findings: "Creatinine 4.2 mg/dL (baseline 1.0), BUN 85 mg/dL, hyperkalemia 6.2 mEq/L, urinary sodium <20 mEq/L",
        management: "IV fluid resuscitation, electrolyte management, monitoring renal function, consideration of dialysis if needed",
        learning_points: "AKI reversible if cause addressed; prerenal azotemia differentiable by urinary sodium; volume status crucial"
    },
    {
        id: 15,
        title: "Case 15: Acute Exacerbation of COPD",
        diagnosis: "COPD Exacerbation (Alpha-1 Antitrypsin Deficiency)",
        age: "58-year-old male",
        presentation: "Increased dyspnea, sputum production, wheezing. Smoker with advanced COPD, FEV1 35% predicted.",
        clinical_findings: "SpO2 86% on room air, hyperinflation on CXR, elevated CO2 (62 mmHg), yellow sputum",
        management: "Supplemental oxygen (with caution for CO2 retention), bronchodilators, systemic corticosteroids, antibiotics if infected",
        learning_points: "Careful oxygen titration in CO2 retainers; identification of infection; education on smoking cessation critical"
    },
    {
        id: 16,
        title: "Case 16: Acute Myxedema Coma",
        diagnosis: "Myxedema Coma (Severe Hypothyroidism)",
        age: "72-year-old female",
        presentation: "Altered mental status, bradycardia (45 bpm), severe hypothermia (32°C), confusion, history of untreated hypothyroidism.",
        clinical_findings: "TSH >100 mIU/L, free T4 <0.4 ng/dL, hypoglycemia, hyponatremia, severe bradycardia",
        management: "IV levothyroxine, passive rewarming, supportive care, vasopressors if hypotensive, ICU monitoring",
        learning_points: "Medical emergency with high mortality; hypothermia and altered mental status key features; slow rewarming reduces complications"
    },
    {
        id: 17,
        title: "Case 17: Acute Hepatic Encephalopathy",
        diagnosis: "Hepatic Encephalopathy (Cirrhosis Decompensation)",
        age: "54-year-old male",
        presentation: "Altered mental status, asterixis, confusion. History of alcoholic cirrhosis with known varices.",
        clinical_findings: "Elevated ammonia (150 μmol/L), INR 2.8, albumin 2.1 g/dL, elevated bilirubin, altered EEG",
        management: "Lactulose, rifaxomicin, protein restriction, treatment of precipitants, evaluation for transplant candidacy",
        learning_points: "Hepatic encephalopathy indicates advanced liver disease; ammonia not always correlates; multifactorial approach needed"
    },
    {
        id: 18,
        title: "Case 18: Guillain-Barré Syndrome",
        diagnosis: "Acute Inflammatory Demyelinating Polyneuropathy (AIDP)",
        age: "35-year-old female",
        presentation: "Ascending paralysis starting in legs, progressing to arms and face over several days. Recent GI infection.",
        clinical_findings: "Weakness in lower extremities spreading upward, diminished deep tendon reflexes, elevated CSF protein, EMG findings suggestive",
        management: "IVIG or plasmapheresis, supportive care, respiratory support if needed, rehabilitation",
        learning_points: "GBS is autoimmune neurological emergency; ascending paralysis is classic; early immunotherapy improves outcomes"
    },
    {
        id: 19,
        title: "Case 19: Acute Angle-Closure Glaucoma",
        diagnosis: "Acute Angle-Closure Glaucoma",
        age: "62-year-old female",
        presentation: "Sudden severe eye pain, blurred vision, headache, nausea/vomiting, halos around lights.",
        clinical_findings: "IOP >40 mmHg, corneal edema, fixed mid-dilated pupil, narrow angles on gonioscopy",
        management: "Topical and systemic medications (prostaglandin analogs, beta-blockers, carbonic anhydrase inhibitors), emergency laser iridotomy",
        learning_points: "Ophthalmic emergency requiring immediate treatment; laser iridotomy prevents attack in fellow eye; high stakes for vision"
    },
    {
        id: 20,
        title: "Case 20: Thyroid Storm",
        diagnosis: "Thyroid Storm (Grave's Disease Decompensation)",
        age: "28-year-old female",
        presentation: "High fever (40.5°C), tachycardia (140 bpm), confusion, tremor, agitation. Recent stressor after inadequate antithyroid therapy.",
        clinical_findings: "TSH <0.01 mIU/L, free T4 >7.77 ng/dL, elevated cardiac enzymes, hyperglycemia, shock-like presentation",
        management: "Antithyroid drugs (PTU preferred), beta-blockade, iodine solution, corticosteroids, plasmapheresis if refractory, ICU care",
        learning_points: "Thyroid storm is medical emergency with high mortality; recognition critical; multifactorial management essential"
    }
];

// FAQ Database
const faqItems = [
    {
        question: "What is the difference between Autism and ADHD?",
        answer: "Autism Spectrum Disorder (ASD) and ADHD are distinct neurodevelopmental conditions. Autism is characterized by differences in social communication, sensory processing, and behavioral patterns. ADHD involves difficulties with attention, impulse control, and activity regulation. While they can co-occur and share some similarities, they are separate diagnoses requiring different support strategies. Some autistic individuals may also have ADHD, and vice versa."
    },
    {
        question: "How can I tell the difference between a migraine and a tension headache?",
        answer: "Migraines typically involve severe throbbing pain on one side of the head, often accompanied by nausea, sensitivity to light (photophobia), and sensitivity to sound. They can last 4-72 hours. Tension headaches cause a dull, pressing sensation across the head and scalp, are usually bilateral, and last 30 minutes to several hours. Migraines are often more disabling and may have an aura (visual disturbances) beforehand."
    },
    {
        question: "What should I do if I suspect I'm having a heart attack?",
        answer: "Call emergency services (911 in the US) immediately. Do not drive yourself. Chew an aspirin if available and not allergic. Sit or lie down in a comfortable position and try to stay calm. Describe your symptoms to the dispatcher. Time is critical in heart attacks - early treatment can minimize heart damage. Do not wait to see if symptoms go away; seek immediate medical attention."
    },
    {
        question: "How is Type 2 Diabetes different from Type 1?",
        answer: "Type 1 Diabetes is an autoimmune condition where the pancreas produces little to no insulin. It's usually diagnosed in children and young adults and requires insulin therapy. Type 2 Diabetes occurs when the body can't effectively use insulin (insulin resistance) and typically develops in adults, though increasingly in young people. Type 2 is often managed with lifestyle modifications, oral medications, or injectable medications, with insulin as a later option."
    },
    {
        question: "What are the early warning signs of a stroke?",
        answer: "Remember 'FAST': Face drooping, Arm weakness, Speech difficulty, Time to call 911. Other signs include sudden vision changes, dizziness, loss of balance, severe headache, and difficulty walking. Seek immediate emergency care if you notice any of these symptoms. Rapid treatment within the first few hours can be life-saving and minimize brain damage."
    },
    {
        question: "Can neurodivergent conditions be cured?",
        answer: "Autism, ADHD, and other neurodevelopmental conditions are differences in how the brain is wired - not diseases to be cured. The neurodiversity paradigm emphasizes that neurodivergent individuals have strengths and abilities alongside challenges. Rather than 'curing,' the focus is on support, accommodations, and helping individuals thrive. Therapy, medication when appropriate, and environmental modifications can help manage symptoms and improve quality of life."
    },
    {
        question: "What's the difference between chronic pain and acute pain?",
        answer: "Acute pain is a normal response to injury or illness, usually lasting less than 3-6 months and resolving as the underlying condition heals. Chronic pain persists beyond the expected healing time or occurs from ongoing conditions. Chronic pain involves complex nervous system changes (central sensitization) and requires different management approaches including multimodal therapy combining physical, psychological, and pharmacological interventions."
    },
    {
        question: "How is high blood pressure treated?",
        answer: "Treatment starts with lifestyle modifications: reducing sodium intake, regular exercise, maintaining healthy weight, limiting alcohol, and stress management. If lifestyle changes aren't sufficient, medications are prescribed, often starting with ACE inhibitors, ARBs, beta-blockers, or diuretics. Treatment is individualized based on other health conditions, age, and response to medication. Regular monitoring is essential."
    },
    {
        question: "What should I know about antibiotics?",
        answer: "Antibiotics only treat bacterial infections, not viral infections like the common cold. Taking antibiotics unnecessarily contributes to antibiotic resistance, making infections harder to treat. Always complete the full course even if you feel better. Report any allergies to your doctor. Common side effects include stomach upset and yeast infections. Never share antibiotics with others or use old prescriptions."
    },
    {
        question: "How can I improve my mental health?",
        answer: "Mental health improvement involves multiple approaches: regular exercise, adequate sleep, healthy nutrition, stress management techniques, social connection, and seeking professional help when needed. Therapy (CBT, DBT, psychotherapy) and meditation/mindfulness can be beneficial. If experiencing depression or anxiety, don't hesitate to talk to a healthcare provider. Mental health is as important as physical health."
    },
    {
        question: "What is the safest way to manage pain?",
        answer: "Multimodal pain management combines multiple strategies: physical therapy, non-medication techniques (heat, ice, relaxation), non-opioid medications (acetaminophen, NSAIDs), and when appropriate, prescription medications. Opioids should be used cautiously due to addiction risk. Talk to your doctor about all options. Chronic pain often requires a team approach including physical therapists, psychologists, and physicians."
    },
    {
        question: "What are the benefits of regular exercise?",
        answer: "Regular exercise improves cardiovascular health, strengthens muscles and bones, helps maintain healthy weight, improves mental health and mood, reduces disease risk, and increases longevity. Aim for 150 minutes of moderate-intensity or 75 minutes of vigorous-intensity aerobic activity weekly, plus strength training twice weekly. Start slowly and consult your doctor before starting a new exercise program, especially if you have health conditions."
    },
    {
        question: "How long does it typically take to recover from surgery?",
        answer: "Recovery time varies widely depending on the type and extent of surgery. Minor procedures may have recovery in days to weeks, while major surgery can take weeks to months. Factors include age, overall health, type of anesthesia, and post-operative complications. Follow post-operative instructions carefully, including wound care, activity restrictions, and medication. Pain and fatigue are normal post-operative symptoms."
    },
    {
        question: "What is the importance of preventive care?",
        answer: "Preventive care catches health issues early when they're easier to treat, reduces serious complications, and often costs less long-term than treating advanced diseases. This includes regular screenings, vaccinations, health checks, and lifestyle modifications. Early detection of conditions like cancer, diabetes, and heart disease significantly improves outcomes. Talk to your doctor about age-appropriate screenings."
    },
    {
        question: "How can I manage anxiety without medication?",
        answer: "Non-medication strategies include breathing exercises, progressive muscle relaxation, mindfulness meditation, regular exercise, limiting caffeine, ensuring adequate sleep, and cognitive behavioral techniques. Therapy can teach coping strategies. Social support from friends and family is helpful. While these techniques work well for some, others may benefit from medication in combination with these approaches. Discuss options with a healthcare provider."
    },
    {
        question: "What should I know about vaccines?",
        answer: "Vaccines train your immune system to recognize and fight diseases, either preventing infection or reducing severity. They're among the most effective public health interventions, having eradicated or controlled many dangerous diseases. Common side effects are mild (arm soreness, low fever). Serious side effects are very rare. Talk to your doctor about which vaccines are appropriate for your age and health status."
    },
    {
        question: "How is fibromyalgia diagnosed and managed?",
        answer: "Fibromyalgia is diagnosed through clinical criteria: widespread pain lasting >3 months and tender point assessment (though new diagnostic criteria exist). No blood test definitively diagnoses it. Management includes regular low-impact exercise, sleep hygiene, cognitive behavioral therapy, stress management, and medications like duloxetine or pregabalin. Multimodal approach works best. Support groups and patient education are valuable."
    },
    {
        question: "What is the role of sleep in health?",
        answer: "Quality sleep is essential for immune function, cognitive performance, emotional regulation, metabolism, and overall health. Adults need 7-9 hours nightly. Poor sleep increases risk of obesity, diabetes, cardiovascular disease, depression, and accidents. Sleep hygiene tips: consistent schedule, dark cool room, no screens before bed, exercise regularly, limit caffeine/alcohol. If sleep problems persist, consult a healthcare provider."
    },
    {
        question: "How do I know if I need to see a doctor?",
        answer: "Seek immediate medical attention for chest pain, severe bleeding, severe allergic reactions, signs of stroke, or severe injuries. Call your doctor for persistent symptoms lasting >1-2 weeks, severe pain, high fever, or symptoms affecting daily function. Schedule regular check-ups even when feeling well for preventive care and screening. Trust your instincts - if something feels wrong, it's worth getting checked."
    },
    {
        question: "What is the most important thing I can do for my health?",
        answer: "Build strong relationships and social connections - loneliness and isolation are linked to poor health outcomes. Also essential: regular exercise, healthy eating, adequate sleep, stress management, not smoking, limiting alcohol, and preventive healthcare. The combination of physical health behaviors and social-emotional well-being creates the foundation for optimal health. Start with small sustainable changes and build from there."
    },
    {
        question: "How do I perform CPR (Cardiopulmonary Resuscitation)?",
        answer: "CPR steps: 1) Check for responsiveness and breathing. 2) Call 911 immediately. 3) Place person on firm, flat surface. 4) Position yourself at their side. 5) Place the heel of one hand on center of chest, place other hand on top. 6) Push hard and fast at least 2 inches deep at 100-120 compressions per minute (pace of 'Stayin' Alive'). 7) Give 30 compressions, then 2 rescue breaths (if trained). 8) Continue until emergency services arrive or person shows signs of life. Hands-only CPR (compressions without breaths) is also effective."
    },
    {
        question: "How do I treat severe bleeding?",
        answer: "For severe bleeding: 1) Call 911. 2) Ensure scene is safe. 3) Wear gloves if available. 4) Apply direct pressure with clean cloth or bandage. 5) Keep pressure constant - don't remove the cloth, add more on top if bleeding continues. 6) Elevate the injured area above the heart if possible. 7) Apply pressure to pressure points (inside of arm above elbow, inside of groin) if bleeding won't stop. 8) Use a tourniquet above the wound as last resort if bleeding is life-threatening. 9) Don't remove embedded objects - stabilize around them. Keep person calm and warm while waiting for help."
    },
    {
        question: "What should I do if someone is choking?",
        answer: "For a choking person: 1) Ask 'Are you choking?' If they can't speak or cough, act. 2) Stand behind them and wrap arms around their waist. 3) Make a fist above their navel, below the ribcage. 4) Grasp your fist with your other hand. 5) Press hard into abdomen with quick, upward thrusts (Heimlich maneuver). 6) Repeat thrusts until object is expelled or person becomes unconscious. 7) If unconscious, position person on back, open airway, and look for object - remove if visible. 8) Begin CPR if needed. For infants (under 1 year): alternate 5 back blows between shoulder blades with 5 chest thrusts."
    },
    {
        question: "How do I treat burns?",
        answer: "For burns: 1) Stop the burning - remove from heat source, remove burning clothing (unless stuck to skin). 2) Cool the burn - run cool (not cold) water over it for 10-20 minutes or apply cool, clean cloths. 3) For minor burns: cover with antibiotic ointment and sterile bandage. 4) Take over-the-counter pain reliever (ibuprofen, acetaminophen). 5) Don't apply ice directly, use butter, or pop blisters. 6) For severe burns (deep, large area, face, joints): call 911, cover with clean dry cloth, elevate burned area if possible, remove jewelry/tight items before swelling occurs. 7) Watch for signs of shock. Seek medical attention for burns larger than 3 inches or on sensitive areas."
    },
    {
        question: "What do I do for a sprain or fracture?",
        answer: "Use RICE protocol: 1) Rest - stop activity and immobilize the injury. 2) Ice - apply ice for 15-20 minutes, several times daily for first 48-72 hours (reduces swelling). 3) Compression - wrap with elastic bandage (not too tight). 4) Elevation - raise injured area above heart level to reduce swelling. Additionally: take over-the-counter pain reliever, avoid heat for first 48 hours. For suspected fractures: don't move the injured area, immobilize with splint if possible, call 911 if severe. Signs of fracture: severe pain, deformity, inability to bear weight, numbness/tingling."
    },
    {
        question: "How do I survive if I'm lost outdoors?",
        answer: "Survival priorities in order: 1) Shelter - protect from elements (hypothermia is deadly). Build windbreak or use natural shelter. 2) Water - dehydration is critical. Find clean water source. Boil, filter, or use purification tablets if possible. 3) Fire - provides warmth and signals rescuers. Gather dry materials. 4) Food - less urgent; you can survive weeks without food. 5) Stay in one place if possible - easier for rescuers to find. Signal for help: use mirror, bright cloth, fire smoke, or three of anything (universal distress signal). Conserve energy, stay calm, make smart decisions. Tell someone where you're going before leaving."
    },
    {
        question: "What's in a basic first aid kit and why?",
        answer: "Essential first aid kit items: Adhesive bandages (minor cuts), gauze pads and tape (bleeding), elastic bandage (sprains), antibiotic ointment (infection prevention), pain relievers (ibuprofen, acetaminophen), antihistamine (allergies), antacid (stomach issues), hydrocortisone cream (itching), tweezers (splinters), scissors, CPR face shield, gloves, thermometer, flashlight with batteries, and a first aid instruction booklet. Keep in accessible location at home, car, and workplace. Check and refresh expiration dates annually. Customize for family needs (add medications for chronic conditions, specific allergies)."
    },
    {
        question: "How do I treat shock?",
        answer: "Shock is a life-threatening emergency. If someone shows signs (extreme weakness, rapid weak pulse, pale/cold/clammy skin, rapid breathing, confusion, loss of consciousness): 1) Call 911 immediately. 2) Lay person on back. 3) Elevate legs about 12 inches (not if head/spine/leg injury suspected). 4) Keep warm with blankets but don't overheat. 5) Don't give food or water. 6) Loosen tight clothing. 7) Turn head to side if vomiting. 8) Stay with person and monitor breathing. Shock can develop after trauma, severe blood loss, heart attack, severe infection, or extreme allergic reactions. Early recognition and treatment improves survival."
    },
    {
        question: "What should I do for a nosebleed?",
        answer: "For a nosebleed: 1) Sit upright and lean forward (prevents blood from going down throat). 2) Pinch the soft part of nose below the bridge with thumb and index finger. 3) Keep pressure for 10-15 minutes - don't release to check if bleeding stopped. 4) Breathe through mouth. 5) Apply ice pack to bridge of nose if available. 6) After 15 minutes, release slowly. If bleeding continues, pinch again for another 10 minutes. 7) Once stopped, don't pick or blow nose. 8) Seek medical help if: nosebleed lasts >30 minutes, very heavy bleeding, caused by injury, or recurrent nosebleeds. Avoid blood thinners and hard blowing to prevent recurrence."
    },
    {
        question: "How do I help someone having a panic attack or anxiety?",
        answer: "If someone is having a panic attack: 1) Stay calm - your calmness helps them. 2) Move to quiet, safe space if possible. 3) Don't dismiss their feelings ('it's all in your head'). 4) Have them sit or lie down. 5) Help slow breathing: 'Breathe in for 4 counts, hold for 4, out for 4' (box breathing). 6) Ground them using senses: 'Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste.' 7) Use reassuring touch if they're comfortable. 8) Let them know it will pass - panic attacks typically peak in 10 minutes. 9) Don't leave them alone. 10) After, help them rest and recover. If frequent, encourage professional help."
    },
    {
        question: "What are the warning signs of a medical emergency?",
        answer: "Call 911 or emergency services immediately for: chest pain/pressure, severe difficulty breathing, severe allergic reactions, signs of stroke (facial drooping, arm weakness, speech difficulty), severe bleeding, loss of consciousness, severe injuries, poisoning or overdose, severe abdominal pain, sudden severe headache, signs of shock (pale, rapid pulse, weakness), difficulty speaking, sudden confusion, choking, severe burns, suspected heart attack, or anything life-threatening. When in doubt, call 911 - better safe than sorry. Describe symptoms clearly to dispatcher."
    },
    {
        question: "How do I perform the recovery position?",
        answer: "Recovery position is used for unconscious people who are breathing: 1) Place person on their side. 2) Tilt head back slightly to keep airway open. 3) Place one arm under head for support. 4) Place other arm across body. 5) Bend one knee for stability. 6) Monitor breathing and be ready to perform CPR if needed. 7) Keep warm with blanket. This position prevents choking if person vomits and keeps airway open. Use if person is unconscious but breathing, before emergency services arrive. Check responsiveness and breathing frequently."
    },
    {
        question: "What's the proper way to bandage a wound?",
        answer: "To bandage a wound: 1) Clean hands first. 2) Gently clean wound with soap and cool water. 3) Pat dry with clean cloth. 4) Apply thin layer of antibiotic ointment. 5) If bleeding, apply pressure with gauze until bleeding stops. 6) Cover with sterile gauze or bandage. 7) Secure with medical tape (don't make too tight). 8) Change bandage daily or if it gets wet/dirty. 9) Watch for signs of infection: increased redness, warmth, pus, increasing pain. 10) For large or deep wounds, seek medical attention. Proper bandaging prevents infection and promotes healing."
    },
    {
        question: "How do I help someone who is poisoned or overdosed?",
        answer: "For poisoning or overdose: 1) Call Poison Control (1-800-222-1222 in US) or 911 immediately. 2) Have information ready: what was taken, how much, when, person's age/weight. 3) Don't make them vomit - can cause more harm. 4) If ingested, have them rinse mouth with water. 5) If inhaled, move to fresh air. 6) If on skin, remove contaminated clothing, rinse with water. 7) If unconscious, place in recovery position. 8) Monitor breathing and be ready to perform CPR. 9) Save the substance/container for medical team. 10) Don't leave person alone. Poison Control is free and available 24/7 - they provide expert guidance."
    },
    {
        question: "What should everyone know about dehydration?",
        answer: "Dehydration occurs when body loses more fluid than taken in. Early signs: thirst, dry mouth, dark urine, fatigue, dizziness. Severe signs: confusion, rapid heartbeat, extreme weakness, fainting. Prevention: drink water regularly (about 8 glasses daily, more in hot weather/exercise), eat water-rich foods. Treatment: drink water gradually (don't chug), electrolyte drinks for severe cases, cool environment, rest. Seek medical help if: severe symptoms, unable to drink, persistent vomiting/diarrhea, unresponsiveness, or symptoms don't improve. Elderly, children, and athletes are at higher risk. Dehydration affects thinking, coordination, and physical performance."
    },
    {
        question: "How do I recognize and treat hypothermia?",
        answer: "Hypothermia (dangerously low body temperature) signs: shivering, confusion, slurred speech, weakness, numbness, pale skin. Severe: no shivering, loss of consciousness. Treatment: 1) Move to warm area. 2) Remove wet clothing. 3) Wrap in blankets. 4) Warm gradually (don't use direct heat). 5) Give warm (not hot) beverages if conscious and able to swallow. 6) Seek medical help. DON'T: rub skin vigorously, give alcohol, use direct heat (causes shock). Prevention: dress in layers, stay dry, limit time in cold, keep moving. Hypothermia is life-threatening - seek immediate medical attention for severe cases."
    },
    {
        question: "What's the best way to prevent infection?",
        answer: "Prevent infection through: 1) Hand hygiene - wash hands frequently, especially before eating/touching face, after bathroom, after contact with others. 2) Keep wounds clean and covered. 3) Use hand sanitizer when soap/water unavailable. 4) Don't share personal items (toothbrush, razors, drinks). 5) Practice respiratory hygiene - cover coughs/sneezes with elbow. 6) Keep environment clean. 7) Get vaccinated as recommended. 8) Stay home when sick. 9) Prepare food safely - wash produce, cook meat thoroughly, avoid cross-contamination. 10) Practice good oral hygiene. Hand washing is the single most important infection prevention measure."
    },
    {
        question: "How do I help someone having a seizure?",
        answer: "If someone is having a seizure: 1) Stay calm. 2) Protect them from injury - move dangerous objects away. 3) Cushion head with something soft. 4) Turn head to side to keep airway clear. 5) DON'T restrain them or force anything in mouth. 6) Time the seizure. 7) Stay with them. 8) After seizure ends, place in recovery position. 9) Check breathing and consciousness. 10) Be reassuring - they may be confused. 11) Call 911 if: first seizure, seizure lasts >5 minutes, multiple seizures, person is injured, or doesn't regain consciousness. Most seizures stop on their own within minutes. Stay calm and protective."
    },
    {
        question: "What are basic survival supplies I should always have?",
        answer: "Basic emergency/survival supplies: water (1 gallon per person per day, several days supply), non-perishable food, first aid kit, medications, flashlight with batteries, whistle (three blasts = distress signal), multi-tool/knife, rope/paracord, matches/lighter in waterproof container, blanket/emergency blanket, map and compass, phone charger/power bank, cash, important documents copies, duct tape, plastic sheeting, and a battery or hand-crank radio. Keep emergency kit in: home, car, and workplace. Update supplies annually. Personalize for your location/season. In natural disaster, these supplies can sustain you until help arrives."
    }
];


// Set today's date as default
document.getElementById('date').valueAsDate = new Date();

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadEntries();
    renderConditions(medicalConditions);
    renderNeuroDiversity(neuroDiversityConditions);
    renderFacts();
    renderClinicalCases(clinicalCases);
    renderFAQ();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    document.getElementById('entryForm').addEventListener('submit', handleFormSubmit);
    document.getElementById('searchConditions').addEventListener('input', handleSearchConditions);
    document.getElementById('filterAllBtn').addEventListener('click', () => filterConditions('all'));
    document.getElementById('filterCommonBtn').addEventListener('click', () => filterConditions('common'));
    document.getElementById('filterSeriousBtn').addEventListener('click', () => filterConditions('serious'));
    
    // Neurodiversity event listeners
    document.getElementById('searchNeuro').addEventListener('input', handleSearchNeuro);
    document.getElementById('neuroFilterAllBtn').addEventListener('click', () => filterNeuro('all'));
    document.getElementById('neuroFilterAutismBtn').addEventListener('click', () => filterNeuro('autism'));
    document.getElementById('neuroFilterADHDBtn').addEventListener('click', () => filterNeuro('adhd'));
    document.getElementById('neuroFilterPainBtn').addEventListener('click', () => filterNeuro('chronic-pain'));
    
    // Clinical cases event listener
    document.getElementById('searchCases').addEventListener('input', handleSearchCases);
}

// Handle Form Submission
function handleFormSubmit(e) {
    e.preventDefault();

    const entry = {
        id: Date.now(),
        date: document.getElementById('date').value,
        title: document.getElementById('title').value,
        category: document.getElementById('category').value,
        condition: document.getElementById('condition').value,
        content: document.getElementById('content').value,
        timestamp: new Date().toISOString()
    };

    // Save to localStorage
    let entries = JSON.parse(localStorage.getItem('medicalEntries')) || [];
    entries.unshift(entry);
    localStorage.setItem('medicalEntries', JSON.stringify(entries));

    // Reset form
    document.getElementById('entryForm').reset();
    document.getElementById('date').valueAsDate = new Date();

    // Reload entries
    loadEntries();

    // Show success message
    showNotification('Entry added successfully!');
}

// Load and Display Entries
function loadEntries() {
    const entries = JSON.parse(localStorage.getItem('medicalEntries')) || [];
    const entriesList = document.getElementById('entriesList');

    if (entries.length === 0) {
        entriesList.innerHTML = '<div class="empty-state"><p>No entries yet. Add your first medical entry above!</p></div>';
        return;
    }

    entriesList.innerHTML = entries.map(entry => `
        <div class="entry-card">
            <div class="entry-header">
                <div class="entry-title">${entry.title}</div>
                <button class="btn-delete" onclick="deleteEntry(${entry.id})">Delete</button>
            </div>
            <div class="entry-meta">
                <span class="entry-date">📅 ${new Date(entry.date).toLocaleDateString()}</span>
                <span class="entry-category">${entry.category.charAt(0).toUpperCase() + entry.category.slice(1)}</span>
                ${entry.condition ? `<span class="entry-condition">🔬 ${entry.condition}</span>` : ''}
            </div>
            <div class="entry-content">${entry.content}</div>
        </div>
    `).join('');
}

// Delete Entry
function deleteEntry(id) {
    if (confirm('Are you sure you want to delete this entry?')) {
        let entries = JSON.parse(localStorage.getItem('medicalEntries')) || [];
        entries = entries.filter(entry => entry.id !== id);
        localStorage.setItem('medicalEntries', JSON.stringify(entries));
        loadEntries();
        showNotification('Entry deleted successfully!');
    }
}

// Render Medical Conditions
function renderConditions(conditions) {
    const conditionsList = document.getElementById('conditionsList');

    if (conditions.length === 0) {
        conditionsList.innerHTML = '<div class="empty-state"><p>No conditions found. Try a different search.</p></div>';
        return;
    }

    conditionsList.innerHTML = conditions.map(condition => `
        <div class="condition-card ${condition.severity}">
            <div class="condition-name">${condition.name}</div>
            <span class="condition-severity ${condition.severity}">
                ${condition.severity === 'serious' ? '🔴' : '🟢'} ${condition.severity.toUpperCase()}
            </span>
            <p class="condition-description">${condition.description}</p>
            <div class="condition-details">
                <div class="condition-details-item">
                    <strong>Symptoms:</strong><br>${condition.symptoms}
                </div>
                <div class="condition-details-item">
                    <strong>Treatment:</strong><br>${condition.treatment}
                </div>
                <div class="condition-details-item">
                    <strong>Prevention:</strong><br>${condition.prevention}
                </div>
                ${condition.sources ? `<div class="sources-section">
                    <strong>📚 Sources & References:</strong>
                    <ul class="sources-list">
                        ${condition.sources.map(source => `<li><a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.title}</a></li>`).join('')}
                    </ul>
                </div>` : ''}
            </div>
        </div>
    `).join('');
}

// Filter Conditions
function filterConditions(severity) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filter and render
    let filtered = medicalConditions;
    if (severity !== 'all') {
        filtered = medicalConditions.filter(c => c.severity === severity);
    }
    renderConditions(filtered);
}

// Search Conditions
function handleSearchConditions(e) {
    const query = e.target.value.toLowerCase();
    const filtered = medicalConditions.filter(condition =>
        condition.name.toLowerCase().includes(query) ||
        condition.description.toLowerCase().includes(query) ||
        condition.symptoms.toLowerCase().includes(query)
    );
    renderConditions(filtered);
    
    // Reset filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('filterAllBtn').classList.add('active');
}

// Render Neurodiversity Conditions
function renderNeuroDiversity(conditions) {
    const neuroDiversityList = document.getElementById('neuroDiversityList');

    if (conditions.length === 0) {
        neuroDiversityList.innerHTML = '<div class="empty-state"><p>No conditions found. Try a different search.</p></div>';
        return;
    }

    neuroDiversityList.innerHTML = conditions.map(condition => `
        <div class="neuro-condition-card ${condition.category}">
            <div class="condition-name">${condition.name}</div>
            <span class="neuro-category-badge">${condition.category === 'autism' ? '🧩 Autism Spectrum' : condition.category === 'adhd' ? '⚡ ADHD/ADD' : '💔 Chronic Pain'}</span>
            <p class="condition-description">${condition.description}</p>
            <div class="condition-details">
                <div class="condition-details-item">
                    <strong>Characteristics:</strong><br>${condition.characteristics}
                </div>
                <div class="condition-details-item">
                    <strong>Strengths:</strong><br>${condition.strengths}
                </div>
                <div class="condition-details-item">
                    <strong>Support & Management:</strong><br>${condition.support}
                </div>
                ${condition.triggers ? `<div class="condition-details-item">
                    <strong>Common Triggers:</strong><br>${condition.triggers}
                </div>` : ''}
                <div class="neurodiversity-note">
                    <strong>💡 Note:</strong><br>${condition.neurodiversity_note}
                </div>
                ${condition.sources ? `<div class="sources-section">
                    <strong>📚 Sources & References:</strong>
                    <ul class="sources-list">
                        ${condition.sources.map(source => `<li><a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.title}</a></li>`).join('')}
                    </ul>
                </div>` : ''}
            </div>
        </div>
    `).join('');
}

// Filter Neurodiversity Conditions
function filterNeuro(category) {
    // Update active button
    document.querySelectorAll('#neuroFilterAllBtn, #neuroFilterAutismBtn, #neuroFilterADHDBtn, #neuroFilterPainBtn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filter and render
    let filtered = neuroDiversityConditions;
    if (category !== 'all') {
        filtered = neuroDiversityConditions.filter(c => c.category === category);
    }
    renderNeuroDiversity(filtered);
}

// Search Neurodiversity Conditions
function handleSearchNeuro(e) {
    const query = e.target.value.toLowerCase();
    const filtered = neuroDiversityConditions.filter(condition =>
        condition.name.toLowerCase().includes(query) ||
        condition.description.toLowerCase().includes(query) ||
        condition.characteristics.toLowerCase().includes(query) ||
        condition.strengths.toLowerCase().includes(query)
    );
    renderNeuroDiversity(filtered);
    
    // Reset filter buttons
    document.querySelectorAll('#neuroFilterAllBtn, #neuroFilterAutismBtn, #neuroFilterADHDBtn, #neuroFilterPainBtn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('neuroFilterAllBtn').classList.add('active');
}

// Render Facts
function renderFacts() {
    const factsList = document.getElementById('factsList');
    factsList.innerHTML = medicalFacts.map(fact => `
        <div class="fact-card">
            <div class="fact-category">${fact.category}</div>
            <div class="fact-title">${fact.title}</div>
            <div class="fact-content">${fact.content}</div>
        </div>
    `).join('');
}

// Render Clinical Cases
function renderClinicalCases(cases) {
    const casesList = document.getElementById('casesList');

    if (cases.length === 0) {
        casesList.innerHTML = '<div class="empty-state"><p>No cases found. Try a different search.</p></div>';
        return;
    }

    casesList.innerHTML = cases.map(clinicalCase => `
        <div class="case-card">
            <div class="case-header">
                <div class="case-title">${clinicalCase.title}</div>
                <span class="case-id">Case #${clinicalCase.id}</span>
            </div>
            <div class="case-content">
                <div class="case-item">
                    <strong>Diagnosis:</strong> ${clinicalCase.diagnosis}
                </div>
                <div class="case-item">
                    <strong>Patient:</strong> ${clinicalCase.age}
                </div>
                <div class="case-item">
                    <strong>Presentation:</strong><br>${clinicalCase.presentation}
                </div>
                <div class="case-item">
                    <strong>Clinical Findings:</strong><br>${clinicalCase.clinical_findings}
                </div>
                <div class="case-item">
                    <strong>Management:</strong><br>${clinicalCase.management}
                </div>
                <div class="case-item learning">
                    <strong>🎓 Learning Points:</strong><br>${clinicalCase.learning_points}
                </div>
            </div>
        </div>
    `).join('');
}

// Search Clinical Cases
function handleSearchCases(e) {
    const query = e.target.value.toLowerCase();
    const filtered = clinicalCases.filter(clinicalCase =>
        clinicalCase.title.toLowerCase().includes(query) ||
        clinicalCase.diagnosis.toLowerCase().includes(query) ||
        clinicalCase.presentation.toLowerCase().includes(query) ||
        clinicalCase.clinical_findings.toLowerCase().includes(query)
    );
    renderClinicalCases(filtered);
}

// Render FAQ
function renderFAQ() {
    const faqContainer = document.getElementById('faqContainer');
    
    faqContainer.innerHTML = faqItems.map((item, index) => `
        <div class="faq-item">
            <button class="faq-question" onclick="toggleFAQ(${index})">
                <span>${item.question}</span>
                <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer" id="faq-answer-${index}">
                <p>${item.answer}</p>
            </div>
        </div>
    `).join('');
}

// Toggle FAQ Answer
function toggleFAQ(index) {
    const answer = document.getElementById(`faq-answer-${index}`);
    const button = answer.previousElementSibling;
    
    answer.classList.toggle('active');
    button.classList.toggle('active');
    
    const icon = button.querySelector('.faq-icon');
    icon.textContent = answer.classList.contains('active') ? '−' : '+';
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #667eea;
        color: white;
        padding: 15px 25px;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
