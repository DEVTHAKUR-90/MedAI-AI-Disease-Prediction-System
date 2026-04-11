export interface DiseaseInfo {
  overview: string;
  causes: string[];
  symptomsDetail: string[];
  precautions: string[];
  medications: string[];
  homeRemedies: string[];
  whenToSeeDoctor: string[];
  specialist: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  recoveryTime: string;
  icdCode?: string;
}

export interface Disease {
  name: string;
  symptoms: string[];
  weight: number; // severity weight
  info: DiseaseInfo;
}

export const DISEASES: Disease[] = [
  {
    name: "Influenza (Flu)",
    symptoms: ["fever", "chills", "body_ache", "headache", "fatigue", "cough", "sore_throat", "runny_nose", "loss_of_appetite", "sweating"],
    weight: 0.75,
    info: {
      overview: "Influenza is a contagious respiratory illness caused by influenza viruses that infect the nose, throat, and lungs. It can cause mild to severe illness and at times can lead to death. The flu is different from a cold and usually comes on suddenly.",
      causes: ["Influenza A, B, or C virus infection", "Direct contact with infected person's respiratory droplets", "Touching contaminated surfaces then touching face", "Weakened immune system", "Seasonal exposure during flu season (Oct–Mar)"],
      symptomsDetail: ["Sudden onset high fever (100–104°F / 38–40°C)", "Severe muscle aches and body pain", "Intense fatigue and weakness", "Dry, persistent cough", "Severe headache and sore throat", "Chills and sweating episodes"],
      precautions: ["Get annual flu vaccination", "Wash hands frequently with soap for 20+ seconds", "Avoid close contact with sick individuals", "Stay home if symptomatic to prevent spread", "Cover coughs and sneezes with elbow or tissue", "Disinfect commonly touched surfaces"],
      medications: ["Oseltamivir (Tamiflu) — antiviral, most effective within 48 hrs of symptom onset", "Zanamivir (Relenza) — inhaled antiviral for high-risk patients", "Acetaminophen (Tylenol) — for fever and body ache relief", "Ibuprofen (Advil) — for pain and fever (avoid in children)", "Decongestants — for nasal congestion relief"],
      homeRemedies: ["Rest completely and sleep as much as possible", "Drink plenty of warm fluids (broth, herbal tea, water) to stay hydrated", "Use a humidifier to ease nasal congestion", "Gargle warm salt water for sore throat relief"],
      whenToSeeDoctor: ["Difficulty breathing or shortness of breath", "Persistent chest pain or pressure", "Confusion, altered mental status, or seizures", "Severe vomiting preventing fluid intake", "Symptoms improve then return with fever and worsening cough"],
      specialist: "Infectious Disease Specialist / General Physician",
      riskLevel: "Medium",
      recoveryTime: "7–14 days; fatigue may persist 2–3 weeks",
      icdCode: "J09–J11"
    }
  },
  {
    name: "Common Cold",
    symptoms: ["runny_nose", "sneezing", "sore_throat", "mild_fever", "cough", "congestion", "watery_eyes", "fatigue"],
    weight: 0.4,
    info: {
      overview: "The common cold is a viral infection of the upper respiratory tract primarily caused by rhinoviruses. It is the most frequent infectious disease in humans, with adults averaging 2–4 colds per year. Symptoms are generally mild and self-limiting.",
      causes: ["Rhinovirus (most common — over 100 strains)", "Coronavirus strains (non-COVID)", "RSV and adenoviruses", "Exposure to cold, dry air which dries mucous membranes", "Direct contact with infected individuals or surfaces"],
      symptomsDetail: ["Runny or stuffy nose with clear or yellowish discharge", "Frequent sneezing episodes", "Mild sore throat, often scratchy", "Low-grade fever (usually below 101°F)", "Mild fatigue and general malaise", "Watery eyes and congestion"],
      precautions: ["Wash hands regularly — especially before eating", "Avoid touching eyes, nose, and mouth", "Use separate towels and utensils from sick individuals", "Boost immunity through vitamin C and zinc intake", "Keep indoor air humid during winter"],
      medications: ["Antihistamines (Cetirizine, Loratadine) — for runny nose and sneezing", "Decongestants (Pseudoephedrine) — for nasal congestion", "Acetaminophen — for fever and throat pain", "Cough suppressants (Dextromethorphan) — for dry cough", "Zinc lozenges — may reduce duration if taken early"],
      homeRemedies: ["Drink warm honey-lemon tea to soothe throat", "Inhale steam from hot water bowl to relieve congestion", "Rest and sleep to allow immune system to fight the virus", "Eat warm soups — chicken broth has anti-inflammatory properties"],
      whenToSeeDoctor: ["Symptoms lasting more than 10 days without improvement", "High fever above 103°F (39.4°C)", "Severe headache or sinus pain", "Difficulty breathing or wheezing", "Rash appearing alongside cold symptoms"],
      specialist: "General Physician / ENT Specialist",
      riskLevel: "Low",
      recoveryTime: "7–10 days",
      icdCode: "J00"
    }
  },
  {
    name: "Hypertension (High Blood Pressure)",
    symptoms: ["headache", "dizziness", "blurred_vision", "chest_pain", "shortness_of_breath", "nosebleed", "fatigue", "palpitations"],
    weight: 0.85,
    info: {
      overview: "Hypertension is a chronic condition where the force of blood against artery walls is consistently too high (≥130/80 mmHg). Often called the 'silent killer,' it usually has no symptoms until serious damage occurs. It significantly increases risk of heart disease, stroke, and kidney failure.",
      causes: ["Sedentary lifestyle and physical inactivity", "High sodium diet and processed food consumption", "Obesity and excess body weight", "Chronic stress and anxiety", "Genetics and family history", "Alcohol and tobacco use", "Underlying conditions: diabetes, kidney disease, sleep apnea"],
      symptomsDetail: ["Persistent severe headaches, especially in the morning", "Dizziness and lightheadedness", "Blurred or double vision", "Chest pain or pressure", "Shortness of breath during normal activities", "Nosebleeds (epistaxis) — in severe cases"],
      precautions: ["Monitor blood pressure at home regularly", "Follow a DASH diet (low sodium, high potassium, fruits and vegetables)", "Exercise 30 minutes daily — brisk walking, swimming, cycling", "Limit alcohol to 1 drink/day (women) or 2 drinks/day (men)", "Quit smoking completely", "Manage stress through meditation, yoga, and deep breathing"],
      medications: ["ACE Inhibitors (Lisinopril, Enalapril) — relax blood vessels", "ARBs (Losartan, Valsartan) — block angiotensin II", "Calcium Channel Blockers (Amlodipine) — relax vessel walls", "Diuretics (Hydrochlorothiazide) — reduce fluid volume", "Beta-blockers (Metoprolol) — slow heart rate"],
      homeRemedies: ["Practice daily deep breathing exercises and meditation", "Consume hibiscus tea — shown to mildly lower blood pressure", "Reduce salt intake; use herbs and spices instead", "Maintain a healthy weight through balanced diet"],
      whenToSeeDoctor: ["Blood pressure reading above 180/120 mmHg (hypertensive crisis)", "Sudden severe headache with visual changes", "Chest pain or difficulty breathing", "Sudden weakness or numbness on one side of body", "Confusion or difficulty speaking"],
      specialist: "Cardiologist / Internal Medicine Physician",
      riskLevel: "High",
      recoveryTime: "Chronic condition requiring lifelong management; BP can be controlled within weeks of treatment",
      icdCode: "I10"
    }
  },
  {
    name: "Type 2 Diabetes Mellitus",
    symptoms: ["frequent_urination", "excessive_thirst", "fatigue", "blurred_vision", "slow_healing", "frequent_infections", "weight_loss", "numbness_tingling", "dark_patches_skin"],
    weight: 0.9,
    info: {
      overview: "Type 2 diabetes is a chronic metabolic disorder characterized by insulin resistance and relative insulin deficiency, resulting in elevated blood glucose levels. It accounts for 90–95% of all diabetes cases and is closely linked to lifestyle factors including obesity and physical inactivity.",
      causes: ["Insulin resistance — cells don't respond properly to insulin", "Pancreatic beta-cell dysfunction over time", "Obesity — especially abdominal/visceral fat", "Physical inactivity and sedentary lifestyle", "Genetic predisposition and family history", "Age over 45 years", "Prediabetes and gestational diabetes history"],
      symptomsDetail: ["Polyuria — frequent urination, especially at night", "Polydipsia — excessive thirst and dry mouth", "Unexplained weight loss despite normal eating", "Chronic fatigue and lack of energy", "Blurred vision due to lens fluid changes", "Slow healing of cuts, wounds, and bruises", "Tingling, numbness, or pain in hands and feet (neuropathy)"],
      precautions: ["Monitor blood glucose levels daily with a glucometer", "Follow a low-glycemic index diet (whole grains, vegetables, lean protein)", "Exercise 150 minutes per week — improves insulin sensitivity", "Maintain healthy weight — even 5–10% weight loss improves control", "Attend regular HbA1c, kidney, and eye check-ups", "Check feet daily for sores, blisters, or infections"],
      medications: ["Metformin — first-line medication; reduces liver glucose production", "SGLT2 Inhibitors (Empagliflozin, Dapagliflozin) — reduce glucose reabsorption", "GLP-1 Agonists (Semaglutide, Liraglutide) — enhance insulin secretion", "DPP-4 Inhibitors (Sitagliptin) — lower post-meal glucose", "Insulin therapy — for advanced cases or inadequate control"],
      homeRemedies: ["Consume bitter gourd (karela) juice — may help lower blood sugar", "Include cinnamon in diet — shown to improve insulin sensitivity", "Drink fenugreek seed water in the morning", "Practice yoga and daily walking to improve glucose metabolism"],
      whenToSeeDoctor: ["Blood glucose above 300 mg/dL consistently", "Symptoms of diabetic ketoacidosis: nausea, vomiting, fruity breath", "Severe hypoglycemia: shakiness, confusion, loss of consciousness", "Non-healing foot ulcers or wounds", "Sudden vision changes or significant blurring"],
      specialist: "Endocrinologist / Diabetologist",
      riskLevel: "High",
      recoveryTime: "Chronic condition; blood sugar can be controlled within 3–6 months of treatment initiation",
      icdCode: "E11"
    }
  },
  {
    name: "Pneumonia",
    symptoms: ["fever", "cough", "chest_pain", "shortness_of_breath", "fatigue", "chills", "sweating", "rapid_breathing", "confusion", "loss_of_appetite"],
    weight: 0.88,
    info: {
      overview: "Pneumonia is an acute infection of the lung parenchyma caused by bacteria, viruses, or fungi, leading to inflammation and fluid accumulation in the alveoli. It can range from mild (walking pneumonia) to life-threatening, and is a leading cause of death globally, especially in young children and elderly.",
      causes: ["Streptococcus pneumoniae — most common bacterial cause", "Mycoplasma pneumoniae — atypical/walking pneumonia", "Influenza and respiratory viruses", "Fungi (Pneumocystis jirovecii in immunocompromised)", "Aspiration of food or liquids into lungs", "Weakened immune system from illness or medications"],
      symptomsDetail: ["High fever (102–105°F) with chills and sweating", "Productive cough with yellow, green, or bloody mucus", "Sharp, stabbing chest pain worsening with breathing", "Rapid, labored breathing (tachypnea)", "Progressive shortness of breath", "Extreme fatigue and weakness", "Confusion or delirium, especially in elderly"],
      precautions: ["Get pneumococcal and flu vaccines annually", "Avoid smoking — damages lung defenses", "Wash hands frequently to prevent spread", "Treat underlying conditions like COPD and asthma", "Avoid close contact with infected individuals", "Stay warm and dry in cold weather"],
      medications: ["Amoxicillin / Augmentin — first-line for community-acquired pneumonia", "Azithromycin (Z-pak) — for atypical pneumonia", "Levofloxacin / Moxifloxacin — for resistant or severe cases", "Antivirals (Oseltamivir) — for viral pneumonia", "Oxygen therapy — for hypoxia", "Corticosteroids — for severe inflammatory cases"],
      homeRemedies: ["Rest completely — avoid physical exertion", "Stay well hydrated with water, warm broths, and herbal teas", "Use steam inhalation with eucalyptus oil to loosen mucus", "Sleep with head elevated to aid breathing"],
      whenToSeeDoctor: ["Oxygen saturation below 95% (measured by pulse oximeter)", "Breathing rate over 30 breaths per minute", "Blood pressure drops significantly (hypotension)", "Confusion or altered consciousness", "Coughing up blood", "Symptoms not improving after 3 days of antibiotics"],
      specialist: "Pulmonologist / Respiratory Medicine Specialist",
      riskLevel: "High",
      recoveryTime: "2–4 weeks for mild cases; 6–8 weeks for severe/hospitalized cases",
      icdCode: "J18"
    }
  },
  {
    name: "Gastroenteritis (Stomach Flu)",
    symptoms: ["nausea", "vomiting", "diarrhea", "stomach_pain", "fever", "loss_of_appetite", "dehydration", "headache", "muscle_aches", "chills"],
    weight: 0.7,
    info: {
      overview: "Gastroenteritis is inflammation of the stomach and intestines, typically caused by viral or bacterial infection, resulting in vomiting, diarrhea, and abdominal cramps. It is extremely common, affecting nearly 1.7 billion people worldwide annually. Most cases resolve within a few days with proper hydration.",
      causes: ["Norovirus — most common cause in adults", "Rotavirus — most common in children", "Bacterial contamination (Salmonella, E. coli, Campylobacter)", "Contaminated food or water consumption", "Person-to-person transmission via fecal-oral route", "Travel to areas with poor sanitation"],
      symptomsDetail: ["Sudden onset nausea and repeated vomiting", "Watery, non-bloody diarrhea (3+ loose stools/day)", "Crampy abdominal pain and bloating", "Low-grade fever (99–101°F)", "Chills and body aches", "Signs of dehydration: dry mouth, decreased urination, dizziness"],
      precautions: ["Wash hands thoroughly after using bathroom and before eating", "Avoid preparing food for others while sick", "Drink only filtered or boiled water when traveling", "Cook meats and eggs to proper temperatures", "Refrigerate perishables promptly", "Disinfect bathroom surfaces when someone is ill"],
      medications: ["Oral Rehydration Solution (ORS) — primary treatment to replace fluids/electrolytes", "Ondansetron (Zofran) — anti-nausea medication", "Loperamide (Imodium) — reduces diarrhea frequency (not for bacterial causes)", "Probiotics (Lactobacillus) — may shorten illness duration", "Antibiotics only if bacterial cause confirmed"],
      homeRemedies: ["Sip clear fluids slowly (water, diluted juice, coconut water, ORS)", "Follow BRAT diet once tolerating food: Bananas, Rice, Applesauce, Toast", "Avoid dairy, fatty, and spicy foods until fully recovered", "Ginger tea — natural anti-nausea remedy"],
      whenToSeeDoctor: ["Signs of severe dehydration: extreme thirst, no urination for 8+ hours, sunken eyes", "Blood in vomit or stool", "High fever above 104°F (40°C)", "Symptoms lasting more than 3 days without improvement", "Inability to keep any fluids down for 24 hours"],
      specialist: "Gastroenterologist / General Physician",
      riskLevel: "Medium",
      recoveryTime: "1–3 days for viral; 3–7 days for bacterial",
      icdCode: "A09"
    }
  },
  {
    name: "Urinary Tract Infection (UTI)",
    symptoms: ["frequent_urination", "burning_urination", "cloudy_urine", "pelvic_pain", "fever", "back_pain", "foul_smelling_urine", "blood_in_urine", "urgency_urination"],
    weight: 0.78,
    info: {
      overview: "A urinary tract infection (UTI) is a bacterial infection affecting any part of the urinary system including kidneys, ureters, bladder, and urethra. It is one of the most common bacterial infections, significantly more prevalent in women. Prompt treatment prevents progression to kidney infection.",
      causes: ["Escherichia coli (E. coli) — responsible for 80-85% of UTIs", "Staphylococcus saprophyticus — common in sexually active women", "Klebsiella and Proteus species", "Poor genital hygiene practices", "Sexual activity introducing bacteria", "Urinary catheter use", "Urinary obstruction or structural abnormalities"],
      symptomsDetail: ["Dysuria — burning or stinging sensation during urination", "Urgency — sudden, strong urge to urinate", "Frequency — urinating more often than usual", "Hematuria — blood in urine (pink, red, or cola-colored)", "Cloudy or strong-smelling urine", "Pelvic pressure or lower abdominal pain", "Fever and chills if infection reaches kidneys (pyelonephritis)"],
      precautions: ["Drink 8–10 glasses of water daily to flush bacteria", "Urinate immediately after sexual intercourse", "Wipe front to back after using toilet (women)", "Avoid holding urine for prolonged periods", "Wear breathable cotton underwear", "Avoid irritants: perfumed soaps, douches, bubble baths"],
      medications: ["Trimethoprim-Sulfamethoxazole (Bactrim) — first-line antibiotic for uncomplicated UTI", "Nitrofurantoin (Macrobid) — for lower UTIs, not kidney infections", "Fosfomycin — single-dose treatment option", "Ciprofloxacin — for complicated or recurrent UTIs", "Phenazopyridine — urinary analgesic for pain/burning relief (not an antibiotic)"],
      homeRemedies: ["Drink unsweetened pure cranberry juice — may prevent bacterial adhesion", "Stay very well hydrated with plain water", "Apply a heating pad to lower abdomen for pain relief", "Take probiotics to maintain healthy urinary microbiome"],
      whenToSeeDoctor: ["High fever (above 101°F) with chills suggesting kidney involvement", "Back or flank pain (sign of kidney infection)", "Symptoms persist after completing antibiotic course", "Blood in urine", "Recurrent UTIs (3+ per year)", "UTI symptoms in men, children, or pregnant women"],
      specialist: "Urologist / Gynecologist (for women)",
      riskLevel: "Medium",
      recoveryTime: "3–7 days with antibiotics",
      icdCode: "N39.0"
    }
  },
  {
    name: "Migraine",
    symptoms: ["severe_headache", "nausea", "vomiting", "light_sensitivity", "sound_sensitivity", "visual_disturbances", "throbbing_pain", "fatigue", "neck_stiffness"],
    weight: 0.72,
    info: {
      overview: "Migraine is a neurological disorder characterized by recurrent episodes of intense, throbbing headache (usually unilateral) lasting 4–72 hours, often accompanied by nausea, vomiting, and extreme sensitivity to light and sound. It affects approximately 1 billion people worldwide and is 3x more common in women.",
      causes: ["Hormonal changes — estrogen fluctuations (menstrual migraine)", "Stress and anxiety — most common trigger", "Sleep disturbances — too much or too little sleep", "Dietary triggers: aged cheese, red wine, caffeine, MSG, tyramine", "Environmental factors: bright lights, strong smells, weather changes", "Genetic predisposition — family history of migraine", "Dehydration and skipping meals"],
      symptomsDetail: ["Severe unilateral throbbing or pulsating headache", "Prodrome: mood changes, food cravings, neck stiffness (hours before)", "Aura: visual disturbances like zigzag lines, blind spots, flashing lights (in 25% of migraineurs)", "Nausea and vomiting", "Extreme photophobia (light sensitivity) and phonophobia (sound sensitivity)", "Aggravation with routine physical activity", "Postdrome: fatigue, confusion, and mood changes after headache resolves"],
      precautions: ["Keep a migraine diary to identify and avoid personal triggers", "Maintain consistent sleep schedule (same wake/sleep times daily)", "Stay well hydrated — drink 2–3 liters of water daily", "Eat regular meals; never skip breakfast", "Limit screen time and use blue-light filtering glasses", "Manage stress with yoga, meditation, and regular exercise"],
      medications: ["Triptans (Sumatriptan, Rizatriptan) — most effective abortive treatment", "NSAIDs (Ibuprofen, Naproxen) — for mild-moderate attacks", "Ergotamines — for prolonged attacks", "Anti-emetics (Metoclopramide) — for nausea", "Preventive medications: Propranolol, Topiramate, Amitriptyline, CGRP monoclonal antibodies (Aimovig)"],
      homeRemedies: ["Apply cold compress or ice pack to forehead and neck", "Rest in a dark, quiet room during attack", "Practice progressive muscle relaxation and deep breathing", "Massage temples and neck gently with peppermint oil"],
      whenToSeeDoctor: ["'Thunderclap' headache — worst headache of life, sudden onset", "Headache with fever, stiff neck, or rash (possible meningitis)", "New severe headache after age 50", "Headache with neurological symptoms: vision loss, speech difficulty, weakness", "Headaches increasing in frequency or changing character"],
      specialist: "Neurologist / Headache Specialist",
      riskLevel: "Medium",
      recoveryTime: "Individual attack: 4–72 hours; chronic migraine requires long-term preventive therapy",
      icdCode: "G43"
    }
  },
  {
    name: "Asthma",
    symptoms: ["wheezing", "shortness_of_breath", "chest_tightness", "cough", "breathlessness", "nocturnal_symptoms", "exercise_intolerance"],
    weight: 0.82,
    info: {
      overview: "Asthma is a chronic inflammatory airway disease characterized by reversible airflow obstruction, bronchial hyperresponsiveness, and airway remodeling. It affects 235+ million people globally. Triggers cause the airways to swell, narrow, and produce excess mucus, making breathing difficult.",
      causes: ["Allergens: dust mites, pet dander, pollen, mold", "Air pollutants and cigarette smoke", "Respiratory infections (viral — RSV, rhinovirus)", "Physical exercise (exercise-induced bronchoconstriction)", "Cold air and weather changes", "Emotional stress and strong emotional responses", "Occupational exposures: chemicals, dust, fumes"],
      symptomsDetail: ["Recurrent episodes of wheezing — high-pitched whistling sound during breathing", "Shortness of breath, especially at night or early morning", "Chest tightness or pressure", "Chronic dry cough, often worse at night", "Symptoms triggered by exercise, allergens, or cold air", "Rapid breathing during attacks"],
      precautions: ["Use prescribed controller inhalers daily even when feeling well", "Identify and avoid personal asthma triggers", "Keep home dust-free: use HEPA filters, wash bedding weekly in hot water", "Avoid exposure to tobacco smoke", "Keep reliever inhaler (Salbutamol/Albuterol) always accessible", "Get annual flu vaccination — respiratory infections worsen asthma"],
      medications: ["Short-acting Beta-2 Agonists (Salbutamol/Albuterol) — rescue inhaler for acute attacks", "Inhaled Corticosteroids (Fluticasone, Budesonide) — main controller medication", "Long-acting Beta-2 Agonists (Salmeterol, Formoterol) — combined with ICS for better control", "Leukotriene Modifiers (Montelukast) — additional controller option", "Biologics (Omalizumab, Dupilumab) — for severe allergic or eosinophilic asthma"],
      homeRemedies: ["Practice pursed-lip breathing technique during mild breathlessness", "Maintain humidity between 30–50% indoors", "Use air purifiers with HEPA filters", "Ginger tea and turmeric may have mild anti-inflammatory airway benefits"],
      whenToSeeDoctor: ["Reliever inhaler not working during an acute attack", "Shortness of breath at rest or with minimal activity", "Cyanosis — bluish discoloration of lips or fingernails", "Speaking difficulty due to breathlessness", "Heart rate above 120 beats per minute during episode"],
      specialist: "Pulmonologist / Allergist",
      riskLevel: "High",
      recoveryTime: "Chronic condition; attacks resolve in hours-days; long-term control with daily medication",
      icdCode: "J45"
    }
  },
  {
    name: "Dengue Fever",
    symptoms: ["high_fever", "severe_headache", "eye_pain", "joint_pain", "muscle_pain", "rash", "nausea", "vomiting", "fatigue", "bleeding"],
    weight: 0.9,
    info: {
      overview: "Dengue fever is a mosquito-borne viral illness caused by dengue virus (DENV 1–4) transmitted by Aedes aegypti mosquitoes. It affects 400 million people annually across 100+ countries. Classic dengue causes severe flu-like illness; dengue hemorrhagic fever can be life-threatening with plasma leakage and bleeding.",
      causes: ["Dengue virus (4 serotypes: DENV-1, 2, 3, 4)", "Bite from infected Aedes aegypti or Aedes albopictus mosquito", "Previous infection with a different serotype increases severe disease risk", "Living in or traveling to tropical/subtropical regions", "Urban areas with stagnant water (mosquito breeding sites)"],
      symptomsDetail: ["Sudden high fever (104°F/40°C) — 'saddleback fever' pattern", "Severe headache, especially behind the eyes (retro-orbital pain)", "Intense joint and muscle pain — 'breakbone fever'", "Skin rash appearing 2–5 days after fever onset", "Nausea, vomiting, and abdominal pain", "Mild bleeding: nosebleed, gum bleeding, easy bruising", "Platelet count drops significantly (thrombocytopenia)"],
      precautions: ["Use mosquito repellents containing DEET, picaridin, or IR3535", "Wear long-sleeved clothing, especially during dawn and dusk", "Install window and door screens; use mosquito nets", "Eliminate standing water in containers, flowerpots, and gutters", "Dengvaxia vaccine for seropositive individuals in endemic areas", "Monitor platelet count with blood tests during illness"],
      medications: ["Paracetamol (acetaminophen) — only safe fever reducer (NOT ibuprofen/aspirin — worsen bleeding)", "IV fluids — for maintaining hydration and blood pressure", "Blood/platelet transfusions — for severe thrombocytopenia with bleeding", "Strict rest and close monitoring of vital signs", "No specific antiviral treatment; management is supportive"],
      homeRemedies: ["Drink plenty of fluids: ORS, coconut water, fresh fruit juices", "Papaya leaf extract — may help boost platelet count (traditional remedy)", "Rest completely and avoid physical exertion", "Monitor for warning signs (severe abdominal pain, bleeding) at home"],
      whenToSeeDoctor: ["Platelet count below 100,000 per microliter", "Severe abdominal pain or persistent vomiting", "Bleeding from nose, gums, or in vomit/stool", "Difficulty breathing or rapid breathing", "Lethargy, restlessness, or pale/cold/clammy skin", "Any dengue warning signs require immediate hospitalization"],
      specialist: "Infectious Disease Specialist / General Physician",
      riskLevel: "High",
      recoveryTime: "7–14 days; severe dengue may require 3–4 weeks",
      icdCode: "A90"
    }
  },
  {
    name: "Malaria",
    symptoms: ["high_fever", "chills", "sweating", "headache", "nausea", "vomiting", "muscle_pain", "fatigue", "anemia", "cyclical_fever"],
    weight: 0.88,
    info: {
      overview: "Malaria is a life-threatening disease caused by Plasmodium parasites transmitted through bites of infected female Anopheles mosquitoes. Despite being preventable and curable, it kills over 600,000 people annually, mostly in sub-Saharan Africa. Plasmodium falciparum causes the most severe form.",
      causes: ["Plasmodium falciparum — most deadly species", "Plasmodium vivax — most widespread species globally", "Plasmodium malariae and Plasmodium ovale — milder forms", "Bite of infected female Anopheles mosquito", "Travel to or living in endemic tropical regions", "Rarely: blood transfusion or sharing contaminated needles"],
      symptomsDetail: ["Classic cyclical fever with chills, sweating, and rigors every 48–72 hours", "High fever (104–106°F) with intense chills", "Severe headache and muscle aches", "Nausea, vomiting, and diarrhea", "Anemia from red blood cell destruction", "Enlarged spleen (splenomegaly)", "Cerebral malaria: seizures, coma, and neurological symptoms (P. falciparum)"],
      precautions: ["Use permethrin-treated bed nets when sleeping", "Apply DEET-containing insect repellent", "Take prescribed antimalarial prophylaxis when traveling to endemic areas", "Wear protective clothing covering arms and legs", "Use indoor residual spraying", "Drain or treat standing water near home"],
      medications: ["Artemisinin-Combination Therapy (ACT) — first-line for P. falciparum (e.g., Artemether-Lumefantrine)", "Chloroquine — for P. vivax (where sensitive)", "Primaquine — to eliminate liver-stage P. vivax and prevent relapse", "Quinine + Doxycycline — for drug-resistant falciparum", "IV Artesunate — for severe/cerebral malaria", "Prophylaxis: Atovaquone-Proguanil (Malarone), Doxycycline, or Mefloquine"],
      homeRemedies: ["Rest completely and avoid physical activity during fever", "Stay very well hydrated with water, ORS, and coconut water", "Apply cold compresses during high fever episodes", "Eat small, easily digestible meals; avoid spicy and fatty foods"],
      whenToSeeDoctor: ["Any suspected malaria requires immediate blood smear or RDT test", "High fever after returning from malaria-endemic region", "Altered consciousness, confusion, or seizures", "Difficulty breathing or extreme weakness", "Inability to tolerate oral medications"],
      specialist: "Infectious Disease Specialist / Tropical Medicine Physician",
      riskLevel: "High",
      recoveryTime: "Uncomplicated malaria: 1–3 weeks with treatment; severe malaria: 4–8 weeks",
      icdCode: "B50-B54"
    }
  },
  {
    name: "Tuberculosis (TB)",
    symptoms: ["persistent_cough", "blood_in_sputum", "fever", "night_sweats", "weight_loss", "fatigue", "loss_of_appetite", "chest_pain", "shortness_of_breath"],
    weight: 0.92,
    info: {
      overview: "Tuberculosis is a contagious bacterial infection caused by Mycobacterium tuberculosis, primarily affecting the lungs. It is one of the top 10 causes of death worldwide and the leading infectious disease killer. TB is airborne — spread through respiratory droplets when infected persons cough or sneeze.",
      causes: ["Mycobacterium tuberculosis — the causative bacterium", "Airborne transmission from active TB patient", "Weakened immune system: HIV/AIDS, malnutrition, diabetes", "Overcrowded living conditions and poor ventilation", "Healthcare exposure without proper protection", "Immunosuppressive medications (steroids, biologics)"],
      symptomsDetail: ["Persistent productive cough lasting 3+ weeks", "Hemoptysis — coughing up blood or blood-stained mucus", "Low-grade fever and chills, especially in afternoons", "Night sweats — drenching sweats during sleep", "Progressive unintentional weight loss", "Chronic fatigue and weakness", "Chest pain worsening with breathing or coughing"],
      precautions: ["Complete the full TB treatment course (6–9 months) without interruption", "Cover mouth when coughing; use respiratory masks", "Improve ventilation in living and working spaces", "Get BCG vaccination (protective especially for children)", "Test close contacts of TB patients", "HIV-positive individuals should be regularly screened for TB"],
      medications: ["First-line RIPE Therapy: Rifampicin + Isoniazid + Pyrazinamide + Ethambutol (initial 2 months)", "Continuation phase: Rifampicin + Isoniazid for 4 more months", "Pyridoxine (Vitamin B6) — to prevent isoniazid-related neuropathy", "Directly Observed Therapy (DOT) — ensures medication adherence", "Drug-Resistant TB (MDR-TB): Bedaquiline + Pretomanid + Linezolid"],
      homeRemedies: ["Eat a high-protein, calorie-rich diet to combat weight loss", "Supplement with Vitamin D — enhances immune response against TB", "Practice deep breathing exercises and incentive spirometry", "Get adequate rest and sleep during treatment"],
      whenToSeeDoctor: ["Cough lasting more than 3 weeks", "Coughing up blood at any amount", "Unintentional weight loss without dieting", "Close contact with confirmed TB patient", "Night sweats with fever and fatigue", "Any suspected exposure in a high-prevalence setting"],
      specialist: "Pulmonologist / Infectious Disease Specialist",
      riskLevel: "High",
      recoveryTime: "6–9 months with full treatment; DR-TB may require 18–24 months",
      icdCode: "A15"
    }
  },
  {
    name: "Chickenpox (Varicella)",
    symptoms: ["fever", "itchy_rash", "blisters", "fatigue", "loss_of_appetite", "headache", "body_ache", "red_spots"],
    weight: 0.85,
    info: {
      overview: "Chickenpox is a highly contagious viral illness caused by the Varicella-Zoster Virus (VZV), characterized by a distinctive itchy blister rash that appears in successive crops. While usually mild in healthy children, it can cause serious complications in adults, immunocompromised individuals, and newborns.",
      causes: ["Varicella-Zoster Virus (VZV) — a herpesvirus", "Direct contact with rash or blister fluid", "Airborne transmission via respiratory droplets", "No prior vaccination or infection", "Exposure to person with active shingles (same virus)"],
      symptomsDetail: ["Characteristic itchy rash progressing from red spots → papules → vesicles → crusts", "Rash appears first on trunk, then spreads to face and extremities", "Low-grade to moderate fever (101–103°F)", "Malaise, fatigue, and loss of appetite 1–2 days before rash", "Successive crops of new blisters for 3–5 days", "Intensely pruritic (itchy) blisters", "Lesions may also appear on mucous membranes (mouth, genitals)"],
      precautions: ["Varicella vaccination (2 doses) is highly effective preventive measure", "Keep nails trimmed short to prevent scratching and secondary infection", "Isolate infected person until all blisters crust over (7–10 days)", "Avoid contact with pregnant women, newborns, and immunocompromised individuals", "Do not use aspirin in children (Reye's syndrome risk)"],
      medications: ["Antihistamines (Diphenhydramine, Cetirizine) — relieve itching", "Calamine lotion — topical itch relief", "Acyclovir (Zovirax) — antiviral for severe cases, adults, or high-risk patients", "Varicella-Zoster Immune Globulin (VZIG) — post-exposure prophylaxis for high-risk", "Paracetamol/Acetaminophen — for fever (NOT aspirin or ibuprofen in children)"],
      homeRemedies: ["Oatmeal baths — significantly relieve itching", "Apply calamine lotion to blisters for cooling effect", "Keep skin cool and dry; avoid overheating", "Wear loose, soft cotton clothing to minimize irritation"],
      whenToSeeDoctor: ["Rash near eyes (risk of corneal damage)", "Signs of bacterial superinfection: red, warm, swollen, or pus-filled blisters", "High fever (above 103°F) or fever returning after initial improvement", "Neurological symptoms: severe headache, confusion, stiff neck", "Breathing difficulty or chest pain", "Immunocompromised patients — require immediate antiviral treatment"],
      specialist: "Pediatrician / Infectious Disease Specialist / Dermatologist",
      riskLevel: "Medium",
      recoveryTime: "7–14 days for skin healing; full recovery in 2–3 weeks",
      icdCode: "B01"
    }
  },
  {
    name: "Hypothyroidism",
    symptoms: ["fatigue", "weight_gain", "cold_intolerance", "constipation", "dry_skin", "hair_loss", "depression", "muscle_weakness", "slow_heart_rate", "puffy_face"],
    weight: 0.78,
    info: {
      overview: "Hypothyroidism occurs when the thyroid gland doesn't produce enough thyroid hormones (T3 and T4) to meet the body's needs. This slows down metabolic processes throughout the body. It is 8x more common in women and affects 2–3% of the general population. Most cases are managed effectively with daily medication.",
      causes: ["Hashimoto's thyroiditis — autoimmune attack on thyroid (most common cause)", "Previous thyroid surgery or radioactive iodine treatment", "Iodine deficiency — leading cause in developing countries", "Certain medications: Amiodarone, Lithium, Interferon", "Pituitary gland disorders affecting TSH production", "Congenital hypothyroidism (cretinism in infants)"],
      symptomsDetail: ["Persistent fatigue, sluggishness, and low energy", "Unintentional weight gain despite no change in diet", "Cold intolerance — feeling cold when others are comfortable", "Constipation and sluggish bowel movements", "Dry, rough skin and brittle nails", "Hair thinning and diffuse hair loss", "Depression, poor memory, and difficulty concentrating ('brain fog')", "Slow heart rate (bradycardia) and puffiness of face"],
      precautions: ["Take levothyroxine consistently — same time each day, on empty stomach", "Attend regular TSH monitoring every 6–12 months", "Avoid consuming soy products, calcium, or iron supplements within 4 hours of medication", "Ensure adequate iodine intake through diet (iodized salt, seafood)", "Do not adjust medication dose without consulting physician"],
      medications: ["Levothyroxine (Synthroid, Tirosint) — synthetic T4, first-line standard treatment", "Liothyronine (Cytomel) — synthetic T3, used in combination in some patients", "Natural Desiccated Thyroid (NDT/Armour Thyroid) — contains both T3 and T4", "Dose adjustment based on TSH, T3, T4 blood levels", "Regular monitoring to prevent over-treatment (hyperthyroidism)"],
      homeRemedies: ["Include selenium-rich foods (Brazil nuts, tuna, eggs) — supports thyroid function", "Avoid goitrogenic foods in excess: raw cruciferous vegetables, soy", "Exercise regularly — improves metabolism and energy levels", "Practice stress reduction techniques — stress impairs thyroid function"],
      whenToSeeDoctor: ["Severe fatigue interfering with daily activities", "Rapid weight gain", "Myxedema coma symptoms: extreme cold, confusion, slowed breathing (medical emergency)", "New symptoms while on levothyroxine", "Pregnancy — thyroid disorders require close monitoring during pregnancy"],
      specialist: "Endocrinologist / Thyroidologist",
      riskLevel: "Medium",
      recoveryTime: "Symptoms improve within 2–4 weeks of treatment; full optimization takes 3–6 months",
      icdCode: "E03"
    }
  },
  {
    name: "Gastroesophageal Reflux Disease (GERD)",
    symptoms: ["heartburn", "acid_regurgitation", "chest_pain", "difficulty_swallowing", "nausea", "sour_taste", "bloating", "chronic_cough", "hoarseness"],
    weight: 0.7,
    info: {
      overview: "GERD is a chronic digestive disorder where stomach acid flows back into the esophagus, irritating its lining. It occurs when the lower esophageal sphincter (LES) weakens or relaxes inappropriately. Affecting 20% of the Western population, GERD can cause esophagitis, Barrett's esophagus, and esophageal cancer if untreated.",
      causes: ["Weakened or dysfunctional lower esophageal sphincter (LES)", "Hiatal hernia — stomach bulges through diaphragm", "Obesity increasing abdominal pressure on stomach", "Dietary triggers: fatty foods, chocolate, coffee, alcohol, tomatoes", "Pregnancy — increased abdominal pressure", "Smoking — weakens LES", "Certain medications: NSAIDs, calcium channel blockers, antihistamines"],
      symptomsDetail: ["Heartburn — burning sensation in chest, worse after meals and when lying down", "Regurgitation — sour or bitter fluid rising to throat or mouth", "Chronic dry cough not explained by respiratory causes", "Hoarseness or sore throat in the morning", "Difficulty swallowing (dysphagia)", "Non-cardiac chest pain", "Bloating, belching, and early satiety"],
      precautions: ["Eat smaller, more frequent meals rather than large meals", "Avoid eating within 3 hours of bedtime", "Elevate the head of bed by 6–8 inches", "Maintain healthy weight — even modest weight loss improves GERD", "Avoid trigger foods: caffeine, alcohol, spicy/fatty foods, citrus", "Quit smoking"],
      medications: ["Proton Pump Inhibitors (PPIs) — Omeprazole, Pantoprazole — most effective long-term treatment", "H2 Receptor Antagonists — Famotidine (Pepcid), Ranitidine — for milder symptoms", "Antacids (Gaviscon, Maalox, Tums) — for immediate short-term relief", "Prokinetics (Metoclopramide) — improve stomach emptying", "Surgery: Laparoscopic Nissen Fundoplication — for refractory GERD"],
      homeRemedies: ["Chew non-mint gum after meals — increases saliva and neutralizes acid", "Drink a small amount of aloe vera juice before meals", "Elevate head during sleep using a wedge pillow", "Licorice root (DGL) supplements — protect esophageal lining"],
      whenToSeeDoctor: ["Difficulty or pain when swallowing solid foods", "Unintentional weight loss", "Vomiting blood or black/tarry stools", "Chest pain — must rule out cardiac causes", "Symptoms not improving after 2 weeks of over-the-counter treatment", "Frequent heartburn (2+ times per week)"],
      specialist: "Gastroenterologist",
      riskLevel: "Medium",
      recoveryTime: "Symptoms controlled within weeks of treatment; chronic management required",
      icdCode: "K21"
    }
  },
  {
    name: "Anemia",
    symptoms: ["fatigue", "pale_skin", "shortness_of_breath", "dizziness", "cold_hands", "weakness", "headache", "irregular_heartbeat", "chest_pain", "brittle_nails"],
    weight: 0.75,
    info: {
      overview: "Anemia is a condition characterized by a deficiency in the number or quality of red blood cells or hemoglobin, reducing oxygen-carrying capacity of the blood. Iron-deficiency anemia is the most common nutritional disorder worldwide, affecting over 2 billion people. It is especially prevalent in women of reproductive age and children.",
      causes: ["Iron deficiency — poor dietary intake or absorption, chronic blood loss", "Vitamin B12 or folate deficiency (megaloblastic anemia)", "Chronic diseases: kidney disease, cancer, rheumatoid arthritis", "Hemolytic anemias — red blood cell destruction (sickle cell, thalassemia)", "Bone marrow disorders: aplastic anemia, leukemia", "Chronic blood loss: heavy menstruation, GI bleeding (ulcers, hemorrhoids)", "Pregnancy — increased iron demands"],
      symptomsDetail: ["Persistent fatigue and weakness disproportionate to activity", "Pallor — pale skin, nail beds, conjunctiva, and mucous membranes", "Shortness of breath and palpitations with minimal exertion", "Dizziness, lightheadedness, and near-fainting", "Cold hands and feet", "Brittle or spoon-shaped nails (koilonychia) — in iron deficiency", "Pica — craving for non-food items (ice, clay, dirt) — in iron deficiency"],
      precautions: ["Eat iron-rich foods: red meat, spinach, lentils, tofu, fortified cereals", "Consume vitamin C with iron-rich foods to enhance absorption", "Avoid tea and coffee with meals — tannins reduce iron absorption", "Regular blood tests (CBC, serum ferritin) to monitor levels", "Treat underlying causes (GI bleeding, heavy menstruation)"],
      medications: ["Oral Iron Supplements (Ferrous Sulfate, Ferrous Gluconate) — first-line for iron-deficiency", "IV Iron Infusion (Ferric Carboxymaltose) — for severe cases or poor oral tolerance", "Vitamin B12 injections — for B12 deficiency (pernicious anemia)", "Folic Acid supplements — for folate deficiency anemia", "Erythropoietin — for anemia of chronic kidney disease", "Blood transfusions — for severe symptomatic anemia"],
      homeRemedies: ["Cook in cast-iron cookware — small amounts of iron leach into food", "Eat amla (Indian gooseberry) — rich in Vitamin C enhancing iron absorption", "Include dates, raisins, and pomegranate in daily diet", "Consume beet juice — rich in folate and iron"],
      whenToSeeDoctor: ["Hemoglobin below 8 g/dL", "Rapid worsening of symptoms despite supplementation", "Symptoms of severe anemia: chest pain, rapid heart rate, fainting", "Blood in stool or urine as underlying cause", "Anemia not responding to iron therapy after 3–4 weeks"],
      specialist: "Hematologist / Internal Medicine Physician",
      riskLevel: "Medium",
      recoveryTime: "Iron deficiency: 3–6 months with supplementation; recovery depends on underlying cause",
      icdCode: "D50-D64"
    }
  }
];

export const ALL_SYMPTOMS = Array.from(
  new Set(DISEASES.flatMap(d => d.symptoms))
).sort();

export function formatSymptom(s: string): string {
  return s.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}
