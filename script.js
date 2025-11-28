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

// Set today's date as default
document.getElementById('date').valueAsDate = new Date();

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadEntries();
    renderConditions(medicalConditions);
    renderNeuroDiversity(neuroDiversityConditions);
    renderFacts();
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
