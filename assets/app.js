/* ===================== DEMO CONTENT =====================
   Faculty, fellows and their posts are fictional sample people.
   Events, dates and venues come from ROEYA's own 2026–27 calendar.
   Guideline statements are paraphrased from the cited ESGE documents. */

const FAC = {
  karim:   { name:'Prof. Karim El-Sawy',   role:'Interventional endoscopy · ERCP', city:'Cairo',      hue:198 },
  rania:   { name:'Dr. Rania Mahfouz',     role:'Endoscopic ultrasound',           city:'Alexandria', hue:168 },
  chinedu: { name:'Dr. Chinedu Okafor',    role:'Therapeutic EUS',                 city:'Lagos',      hue:32  },
  lina:    { name:'Dr. Lina Haddad',       role:'ESD & early neoplasia',           city:'Beirut',     hue:276 },
  tarek:   { name:'Prof. Tarek Hamdan',    role:'Third-space endoscopy',           city:'Riyadh',     hue:14  },
  nadia:   { name:'Dr. Nadia Rahimi',      role:'Colonoscopy quality',             city:'Amman',      hue:330 },
  omar:    { name:'Dr. Omar Benali',       role:'GI bleeding & hemostasis',        city:'Algiers',    hue:356 },
  youssef: { name:'Dr. Youssef Darwish',   role:'Bariatric endoscopy',             city:'Jeddah',     hue:46  },
  sara:    { name:'Dr. Sara Al-Mansoori',  role:'IBD & small bowel',               city:'Dubai',      hue:150 },
  hana:    { name:'Hana Kamel, RN',        role:'Endoscopy nursing & reprocessing',city:'Cairo',      hue:300 },
  zaki:    { name:'Dr. Ahmed Zaki',        role:'Research methods & biostatistics',city:'Cairo',      hue:222 },
  marco:   { name:'Dr. Marco Leone',       role:'HPB & laparoscopic surgery',      city:'Milan',      hue:96  },
};

const MODS = ['ERCP','EUS','Third space','Upper GI','Colonoscopy','Hemostasis','Bariatric','Small bowel & IBD','Nursing','Laparoscopy','Research'];
const TYPES = ['Lecture','Technique','Live case','Masterclass','Case of the week','Guideline digest','Webinar'];
const LEVELS = ['Foundation','Intermediate','Advanced','Expert','All levels'];

/* art: s = scene style, sd = seed, m = monitor mode, x = extra layer */
const VIDEOS = [
  { id:'ercp-cannulation', t:'Wire-guided biliary cannulation: the first five minutes', type:'Technique', mod:'ERCP', lvl:'Foundation', dur:18, fac:'karim', cme:0.5, views:4820, date:'2026-11-08', isNew:true, code:'ERCP-001', art:{s:'wli',x:'papilla',sd:11,m:'WLI'}, kit:'biliary-cannulation', model:'biliary',
    desc:'How to position the duodenoscope, read the papilla and align the sphincterotome with the bile duct axis before the wire ever leaves the catheter. Includes the three scope positions that fix most failed attempts.' },
  { id:'ercp-difficult', t:'Difficult cannulation: pancreatic guidewire, precut and when to stop', type:'Masterclass', mod:'ERCP', lvl:'Advanced', dur:42, fac:'karim', cme:1.0, views:3110, date:'2026-10-21', code:'ERCP-007', art:{s:'fluoro',sd:7,m:'FLUORO'}, kit:'biliary-cannulation', model:'papilla',
    desc:'A decision path for the papilla that will not cooperate: double-guidewire technique, transpancreatic septotomy, needle-knife precut, and the point where a second session is the safer choice.' },
  { id:'ercp-sphincterotomy', t:'Sphincterotomy step by step: direction, length and current', type:'Technique', mod:'ERCP', lvl:'Intermediate', dur:22, fac:'karim', cme:0.5, views:2960, date:'2026-10-02', code:'ERCP-004', art:{s:'wli',x:'papilla',sd:23,m:'LCI'}, kit:'sphincterotomy', model:'papilla',
    desc:'Cutting between 11 and 1 o’clock, controlling wire contact to avoid a zipper cut, and choosing a length that matches the papilla and the stone you need to remove.' },
  { id:'ercp-stones', t:'Large bile duct stones: EPLBD, mechanical lithotripsy and cholangioscopy', type:'Masterclass', mod:'ERCP', lvl:'Advanced', dur:36, fac:'karim', cme:1.0, views:2475, date:'2026-11-05', isNew:true, code:'ERCP-011', art:{s:'fluoro',x:'stones',sd:31,m:'FLUORO'}, kit:'stone-extraction', model:'biliary',
    desc:'When a balloon and basket are not enough: sizing the large-balloon dilation, setting up mechanical lithotripsy, and when to move to cholangioscopy-guided lithotripsy.' },
  { id:'ercp-pep', t:'Preventing post-ERCP pancreatitis: what the ESGE guideline actually says', type:'Guideline digest', mod:'ERCP', lvl:'All levels', dur:14, fac:'zaki', cme:0.5, views:5230, date:'2026-09-28', code:'GUIDE-02', art:{s:'slide',sd:5}, kit:'biliary-cannulation',
    desc:'Rectal NSAIDs for everyone without a contraindication, pancreatic stents for selected high-risk cases, and the patient and procedure factors that put someone in that group.' },
  { id:'ercp-live-hilar', t:'Live case: hilar stricture, bilateral metal stents', type:'Live case', mod:'ERCP', lvl:'Expert', dur:58, fac:'karim', cme:1.0, views:1890, date:'2026-10-14', code:'LIVE-ERCP', art:{s:'fluoro',sd:44,m:'FLUORO'}, model:'biliary',
    desc:'A full live procedure with panel commentary: drainage planning from the MRCP, selective wire placement into both hepatic systems, and stent-in-stent deployment.' },
  { id:'ercp-cholangioscopy', t:'Digital cholangioscopy for indeterminate biliary strictures', type:'Lecture', mod:'ERCP', lvl:'Advanced', dur:27, fac:'karim', cme:0.5, views:1620, date:'2026-09-16', code:'ERCP-013', art:{s:'chol',sd:12,m:'WLI'}, kit:'stone-extraction',
    desc:'Visual signs that point to malignancy, how to take targeted biopsies under direct vision, and how cholangioscopy fits after a non-diagnostic brushing.' },

  { id:'eus-stations', t:'The linear EUS stations, one by one', type:'Technique', mod:'EUS', lvl:'Foundation', dur:31, fac:'rania', cme:1.0, views:4410, date:'2026-10-30', code:'EUS-001', art:{s:'eus',sd:3,m:'EUS 7.5MHz'}, kit:'eus-fnb', model:'euscyst',
    desc:'From the aortopulmonary window to the papilla: the landmark at each station, the scope movement that gets you there, and how to recover when you lose orientation.' },
  { id:'eus-fnb', t:'EUS-FNB of solid pancreatic masses: needle choice and fanning', type:'Technique', mod:'EUS', lvl:'Intermediate', dur:24, fac:'rania', cme:0.5, views:3380, date:'2026-11-03', isNew:true, code:'EUS-006', art:{s:'eus',x:'needle',sd:19,m:'EUS 7.5MHz'}, kit:'eus-fnb', model:'euscyst',
    desc:'Choosing between 22G and 25G biopsy needles, the fanning technique, suction versus slow-pull, and how many passes you need when on-site evaluation is not available.' },
  { id:'eus-lams', t:'EUS-guided drainage of walled-off necrosis with a LAMS', type:'Live case', mod:'EUS', lvl:'Expert', dur:47, fac:'chinedu', cme:1.0, views:2240, date:'2026-10-09', code:'LIVE-EUS', art:{s:'eus',x:'needle',sd:28,m:'EUS 5MHz'}, kit:'lams-drainage', model:'euscyst',
    desc:'Freehand electrocautery-enhanced LAMS placement into a walled-off collection, followed by the decision about direct necrosectomy.' },
  { id:'eus-cysts', t:'Pancreatic cysts: when EUS changes management', type:'Lecture', mod:'EUS', lvl:'Intermediate', dur:29, fac:'chinedu', cme:0.5, views:1980, date:'2026-09-08', code:'EUS-010', art:{s:'slide',sd:14},
    desc:'Which cysts need EUS at all, the morphological features that matter, and when fluid analysis and through-the-needle biopsy add information.' },
  { id:'eus-gallbladder', t:'EUS-guided gallbladder drainage: patient selection', type:'Masterclass', mod:'EUS', lvl:'Expert', dur:38, fac:'rania', cme:1.0, views:1310, date:'2026-08-27', code:'EUS-014', art:{s:'eus',sd:41,m:'EUS 7.5MHz'}, kit:'lams-drainage',
    desc:'Acute cholecystitis in patients unfit for surgery: anatomy, stent choice, and how this compares with percutaneous drainage.' },

  { id:'esd-colorectal', t:'Colorectal ESD: marking, injection, incision, dissection', type:'Technique', mod:'Third space', lvl:'Advanced', dur:44, fac:'lina', cme:1.0, views:3620, date:'2026-11-06', isNew:true, code:'ESD-003', art:{s:'esd',x:'knife',sd:8,m:'BLI'}, kit:'colorectal-esd', model:'esdstomach',
    desc:'The full sequence on a lateral spreading tumour, with the pocket-creation method, traction options and how to manage bleeding without losing the plane.' },
  { id:'esd-gastric', t:'Live case: gastric ESD for early gastric cancer', type:'Live case', mod:'Third space', lvl:'Expert', dur:52, fac:'lina', cme:1.0, views:2050, date:'2026-10-18', code:'LIVE-ESD', art:{s:'esd',sd:17,m:'LCI'}, kit:'colorectal-esd', model:'esdstomach',
    desc:'Delineation with image-enhanced endoscopy, circumferential incision and dissection of a lesion on the lesser curve, streamed with the panel.' },
  { id:'poem', t:'POEM for achalasia: tunnel, myotomy, closure', type:'Technique', mod:'Third space', lvl:'Expert', dur:49, fac:'tarek', cme:1.0, views:2890, date:'2026-10-25', code:'POEM-001', art:{s:'tunnel',sd:6,m:'WLI'}, kit:'poem', model:'poem',
    desc:'Mucosotomy, submucosal tunnelling onto the cardia, selective circular myotomy and clip closure, with the landmarks that confirm you have reached the stomach.' },
  { id:'gpoem', t:'G-POEM: who benefits and how to do it', type:'Lecture', mod:'Third space', lvl:'Advanced', dur:26, fac:'tarek', cme:0.5, views:1440, date:'2026-09-21', code:'POEM-004', art:{s:'tunnel',sd:29,m:'BLI'}, kit:'poem', model:'poem',
    desc:'Selecting patients with refractory gastroparesis, the pyloric myotomy itself, and what the outcome data can and cannot tell us.' },
  { id:'esd-pathology', t:'Reading the ESD specimen: what pathology needs from you', type:'Lecture', mod:'Third space', lvl:'Intermediate', dur:19, fac:'lina', cme:0.5, views:1180, date:'2026-08-30', code:'ESD-009', art:{s:'slide',sd:22},
    desc:'Pinning and orienting the specimen, the margins that decide curative resection, and how to write a request form the pathologist can act on.' },

  { id:'egd-systematic', t:'A systematic EGD: a photo-documentation routine that misses nothing', type:'Technique', mod:'Upper GI', lvl:'Foundation', dur:16, fac:'nadia', cme:0.5, views:5110, date:'2026-10-11', code:'UGI-001', art:{s:'wli',sd:2,m:'WLI'}, model:'esdstomach',
    desc:'A fixed sequence of views from the oesophagus to the second part of the duodenum, with retroflexion, inspection time and the images every report should carry.' },
  { id:'barrett-ied', t:'Image-enhanced endoscopy in Barrett’s oesophagus', type:'Technique', mod:'Upper GI', lvl:'Intermediate', dur:21, fac:'nadia', cme:0.5, views:2330, date:'2026-09-30', code:'UGI-005', art:{s:'nbi',sd:15,m:'NBI'},
    desc:'Prague classification, virtual chromoendoscopy for subtle dysplasia, and targeted biopsies alongside the four-quadrant protocol.' },
  { id:'colon-adr', t:'Raising your adenoma detection rate', type:'Lecture', mod:'Colonoscopy', lvl:'Foundation', dur:23, fac:'nadia', cme:0.5, views:4670, date:'2026-10-05', code:'COL-002', art:{s:'lci',sd:9,m:'LCI'}, model:'polypcolon',
    desc:'Withdrawal technique, position changes, bowel preparation scoring and the image-enhancement modes that help most.' },
  { id:'cold-snare', t:'Cold snare polypectomy for small polyps', type:'Technique', mod:'Colonoscopy', lvl:'Foundation', dur:12, fac:'nadia', cme:0.5, views:5980, date:'2026-11-02', isNew:true, code:'COL-006', art:{s:'wli',x:'polyp',sd:33,m:'WLI'}, kit:'cold-snare', model:'polypcolon',
    desc:'Snare choice, a margin of normal tissue, and complete resection of polyps up to 9 mm without electrocautery.' },
  { id:'pedunculated', t:'Pedunculated polyps: loops, clips and safe resection', type:'Technique', mod:'Colonoscopy', lvl:'Intermediate', dur:17, fac:'omar', cme:0.5, views:2210, date:'2026-09-12', code:'COL-009', art:{s:'lci',x:'polyp',sd:37,m:'LCI'}, model:'polypcolon',
    desc:'Prophylactic mechanical haemostasis for thick stalks, transection level, and retrieval of large specimens.' },
  { id:'ai-cade', t:'AI-assisted colonoscopy: what CADe changes in practice', type:'Lecture', mod:'Colonoscopy', lvl:'All levels', dur:20, fac:'nadia', cme:0.5, views:3490, date:'2026-10-27', code:'COL-012', art:{s:'lci',x:'cade',sd:45,m:'LCI · CADe'},
    desc:'What computer-aided detection does to adenoma detection, false positives and withdrawal behaviour, and how to work alongside the box on the screen.' },

  { id:'nvugib', t:'Non-variceal bleeding: combination therapy and when to use OTSC', type:'Technique', mod:'Hemostasis', lvl:'Intermediate', dur:26, fac:'omar', cme:0.5, views:3870, date:'2026-10-16', code:'HEM-003', art:{s:'wli',x:'blood',sd:4,m:'WLI'}, kit:'nvugib', model:'bleeding',
    desc:'Forrest classification at the bedside, epinephrine plus a second modality, and the over-the-scope clip for recurrent bleeding.' },
  { id:'evl', t:'Variceal band ligation done right', type:'Technique', mod:'Hemostasis', lvl:'Foundation', dur:15, fac:'omar', cme:0.5, views:4130, date:'2026-09-24', code:'HEM-001', art:{s:'wli',x:'varix',sd:13,m:'WLI'}, kit:'evl', model:'varix',
    desc:'Loading the ligator, starting at the gastro-oesophageal junction and working upwards, and the interval to the next session.' },
  { id:'bleeding-live', t:'Live case: Forrest Ia ulcer, injection and clips', type:'Live case', mod:'Hemostasis', lvl:'Intermediate', dur:33, fac:'omar', cme:1.0, views:2680, date:'2026-10-29', code:'LIVE-HEM', art:{s:'wli',x:'blood',sd:39,m:'WLI'}, kit:'nvugib', model:'bleeding',
    desc:'An actively spurting duodenal ulcer: clearing the field, dilute epinephrine, and clip placement across the vessel.' },
  { id:'powder', t:'Hemostatic powder: rescue, bridge or first line?', type:'Lecture', mod:'Hemostasis', lvl:'Intermediate', dur:13, fac:'omar', cme:0.5, views:1760, date:'2026-08-19', code:'HEM-008', art:{s:'slide',sd:27}, kit:'nvugib',
    desc:'Where topical agents fit in malignant bleeding and as a bridge, and why they are not a substitute for definitive therapy.' },

  { id:'esg', t:'Endoscopic sleeve gastroplasty: suture pattern step by step', type:'Technique', mod:'Bariatric', lvl:'Advanced', dur:39, fac:'youssef', cme:1.0, views:1960, date:'2026-10-07', code:'BAR-002', art:{s:'wli',sd:52,m:'WLI'},
    desc:'Patient selection, the suture pattern from the incisura to the fundus, and avoiding the complications that bring patients back.' },
  { id:'sleeve-leaks', t:'Endoscopic management of leaks after sleeve gastrectomy', type:'Lecture', mod:'Bariatric', lvl:'Advanced', dur:28, fac:'youssef', cme:0.5, views:1350, date:'2026-09-03', code:'BAR-005', art:{s:'slide',sd:36},
    desc:'Internal drainage with pigtail stents, covered stents, and when an over-the-scope clip is the right first choice.' },

  { id:'ius', t:'Intestinal ultrasound in IBD: the five-minute scan', type:'Technique', mod:'Small bowel & IBD', lvl:'Foundation', dur:22, fac:'sara', cme:0.5, views:2140, date:'2026-10-23', code:'IUS-001', art:{s:'us',sd:18,m:'IUS 9MHz'},
    desc:'Probe choice, bowel wall thickness, Doppler signal and how to scan the terminal ileum and colon in a busy clinic.' },
  { id:'dae', t:'Device-assisted enteroscopy: setup and technique', type:'Technique', mod:'Small bowel & IBD', lvl:'Advanced', dur:30, fac:'sara', cme:0.5, views:1080, date:'2026-08-24', code:'SB-003', art:{s:'wli',sd:61,m:'WLI'},
    desc:'Single- and double-balloon systems, the push-and-pull cycle, and marking the deepest point reached.' },
  { id:'capsule', t:'Capsule endoscopy reading: a structured approach', type:'Lecture', mod:'Small bowel & IBD', lvl:'Intermediate', dur:18, fac:'sara', cme:0.5, views:1490, date:'2026-09-19', code:'SB-005', art:{s:'lci',sd:63,m:'CE'},
    desc:'Landmarks, reading speed, and how to describe and report lesions so the next endoscopist can find them.' },

  { id:'reprocessing', t:'Endoscope reprocessing: the steps auditors check', type:'Technique', mod:'Nursing', lvl:'Foundation', dur:21, fac:'hana', cme:0.5, views:2780, date:'2026-10-12', code:'NUR-001', art:{s:'slide',sd:40},
    desc:'Bedside pre-cleaning, leak testing, manual cleaning, high-level disinfection, drying and storage, with the records each step needs.' },
  { id:'nurse-ercp', t:'Assisting at ERCP: the nurse’s role in cannulation', type:'Technique', mod:'Nursing', lvl:'Foundation', dur:19, fac:'hana', cme:0.5, views:1640, date:'2026-11-01', isNew:true, code:'NUR-004', art:{s:'fluoro',sd:48,m:'FLUORO'}, kit:'biliary-cannulation', model:'biliary',
    desc:'Wire control, exchange technique and clear communication with the endoscopist during cannulation and stenting.' },

  { id:'lap-basic', t:'Basic laparoscopy skills: camera, ports and knots', type:'Technique', mod:'Laparoscopy', lvl:'Foundation', dur:25, fac:'marco', cme:0.5, views:1210, date:'2026-10-19', code:'LAP-001', art:{s:'lap',sd:21},
    desc:'Camera navigation, port placement and intracorporeal knot tying, the skills behind the EGH basic laparoscopy crash course.' },
  { id:'lap-chole', t:'Laparoscopic cholecystectomy: the critical view of safety', type:'Technique', mod:'Laparoscopy', lvl:'Intermediate', dur:31, fac:'marco', cme:0.5, views:1530, date:'2026-09-26', code:'LAP-004', art:{s:'lap',sd:57},
    desc:'Achieving the critical view of safety, bail-out options when you cannot, and how to document it.' },

  { id:'abstract', t:'From a ROEYA course to an ESGE abstract', type:'Lecture', mod:'Research', lvl:'All levels', dur:24, fac:'zaki', cme:0.5, views:2390, date:'2026-11-04', isNew:true, code:'RES-001', art:{s:'stats',sd:10},
    desc:'Turning course feedback and logbook data into a structured abstract, using our own ESGE Days 2026 ePoster as the worked example.' },
  { id:'survival', t:'Survival analysis for endoscopists: Kaplan–Meier without fear', type:'Lecture', mod:'Research', lvl:'Intermediate', dur:35, fac:'zaki', cme:1.0, views:1720, date:'2026-10-01', code:'RES-004', art:{s:'stats',sd:24},
    desc:'Censoring, the log-rank test and hazard ratios, explained with GI oncology examples.' },
  { id:'population-data', t:'Population databases for GI cancer research', type:'Lecture', mod:'Research', lvl:'Intermediate', dur:28, fac:'zaki', cme:0.5, views:1260, date:'2026-09-14', code:'RES-006', art:{s:'stats',sd:35},
    desc:'Using registry data such as SEER: what the variables really mean, common biases, and how to design a question the data can answer.' },
  { id:'cotw-diverticulum', t:'Case of the week: cannulation in a periampullary diverticulum', type:'Case of the week', mod:'ERCP', lvl:'Advanced', dur:9, fac:'karim', cme:0, views:3040, date:'2026-11-09', isNew:true, code:'COTW-46', art:{s:'wli',x:'papilla',sd:58,m:'WLI'}, kit:'biliary-cannulation', model:'papilla',
    desc:'The papilla sits on the inner rim of a large diverticulum and two attempts have failed. Vote on the next step, then watch what was done.' },
  { id:'single-use', t:'Single-use duodenoscopes: where they fit', type:'Webinar', mod:'ERCP', lvl:'All levels', dur:46, fac:'karim', cme:1.0, views:1580, date:'2026-10-26', code:'WEB-03', art:{s:'slide',sd:50},
    desc:'Infection risk with reusable duodenoscopes, what single-use devices change for the unit, and the cost questions every department will ask.' },
];

const CHAPTERS = {
  'ercp-cannulation':[
    [0,'Why the first five minutes matter','Most failed cannulations are decided before the wire moves'],
    [95,'The kit on the table','Sphincterotome, wire, contrast and who holds what'],
    [190,'Getting the long position','Shortening the scope and centring the papilla'],
    [330,'Reading the papilla','Orifice, intraduodenal segment, and the bile duct axis'],
    [500,'Aligning to 11–12 o’clock','Bowing the sphincterotome and lifting with the elevator'],
    [690,'Wire-guided entry','Probing gently and confirming position on fluoroscopy'],
    [890,'When it does not go in','Three corrections before you call it difficult'],
    [1020,'Summary','What to rehearse on the papilla model'],
  ],
  'esd-colorectal':[
    [0,'Lesion assessment','Morphology, surface pattern and depth signs'],[260,'Marking and injection','Margin, lifting solution and dye'],
    [560,'Mucosal incision','Starting on the anal side'],[900,'Pocket creation','Getting under the lesion early'],
    [1400,'Dissection','Staying in the plane and using traction'],[2000,'Bleeding control','Coagulation forceps and when to clip'],
    [2350,'Specimen handling','Pinning and orientation'],[2560,'Summary','Practice drills on the ESD model'],
  ],
  'eus-fnb':[
    [0,'Indications','When tissue changes management'],[170,'Needle choice','22G versus 25G biopsy needles'],
    [420,'Targeting','Doppler and the safest window'],[640,'Fanning','More tissue from one puncture'],
    [880,'Suction or slow-pull','What the evidence suggests'],[1120,'How many passes','Without on-site evaluation'],[1310,'Summary','Handling the core for histology'],
  ],
};

const TRANSCRIPT_EN = [
  [0,'Welcome. In this session we focus on the first five minutes of biliary cannulation.'],
  [24,'Most difficult cannulations are not difficult papillae. They are poor scope positions.'],
  [95,'On the table: a pull-type sphincterotome, a hydrophilic guidewire and diluted contrast.'],
  [190,'Shorten the scope until the papilla sits in the centre of the image, slightly below the midline.'],
  [330,'Look at the orifice and the intraduodenal segment. Imagine the bile duct running up towards eleven to twelve o’clock.'],
  [500,'Bow the sphincterotome gently and use the elevator to lift the tip into that axis.'],
  [690,'Advance the wire a few millimetres at a time. Let the wire find the duct; do not push the catheter.'],
  [890,'If the wire goes to the pancreas twice, leave it there and try alongside it.'],
  [1020,'Before your next list, rehearse this position on the papilla model until it is automatic.'],
];
const TRANSCRIPT_AR = [
  [0,'مرحبًا بكم. نركّز في هذه الجلسة على الدقائق الخمس الأولى من قسطرة القناة الصفراوية.'],
  [24,'معظم حالات القسطرة الصعبة ليست بسبب الحليمة نفسها، بل بسبب وضع المنظار.'],
  [95,'على الطاولة: قاطع حليمي، وسلك توجيه محبّ للماء، ومادة تباين مخففة.'],
  [190,'قصّر المنظار حتى تصبح الحليمة في منتصف الصورة، أسفل الخط الأوسط بقليل.'],
  [330,'انظر إلى الفتحة والجزء داخل الإثني عشر. تخيّل القناة الصفراوية متجهة نحو الساعة الحادية عشرة إلى الثانية عشرة.'],
  [500,'اثنِ القاطع برفق واستخدم الرافعة لرفع الطرف في هذا المحور.'],
  [690,'ادفع السلك بضعة مليمترات في كل مرة. دع السلك يجد القناة، ولا تدفع القسطرة.'],
  [890,'إذا دخل السلك إلى البنكرياس مرتين، اتركه هناك وحاول بجانبه.'],
  [1020,'قبل قائمتك القادمة، تدرّب على هذا الوضع على نموذج الحليمة حتى يصبح تلقائيًا.'],
];

const QUIZ = {
  ercp:[
    {q:'Which pharmacological prophylaxis for post-ERCP pancreatitis does ESGE recommend for patients without a contraindication?', o:['Rectal diclofenac or indomethacin 100 mg immediately before ERCP','Intravenous octreotide infusion','Oral allopurinol the night before','Intravenous hydrocortisone at induction'], a:0, e:'ESGE recommends routine rectal administration of 100 mg diclofenac or indomethacin immediately before ERCP in all patients without contraindications.'},
    {q:'On the endoscopic view of the papilla, the bile duct axis usually runs toward:', o:['11–12 o’clock','3 o’clock','5–6 o’clock','9 o’clock'], a:0, e:'Biliary cannulation is aimed toward 11–12 o’clock; sphincterotomy is kept between 11 and 1 o’clock.'},
    {q:'After repeated unintended pancreatic duct cannulation, a reasonable next step is to:', o:['Leave a wire in the pancreatic duct and cannulate alongside it','Inject more contrast into the pancreatic duct','Abandon the procedure immediately','Switch to a forward-viewing scope'], a:0, e:'The double-guidewire technique straightens the common channel and protects the pancreatic orifice; a prophylactic pancreatic stent is often placed afterwards.'},
  ],
  eus:[
    {q:'Which manoeuvre samples more of a solid lesion within a single EUS needle pass?', o:['Fanning','Reinserting the stylet','Increasing the frequency','Inflating the water balloon'], a:0, e:'Fanning moves the needle through several areas of the lesion in one puncture by using the elevator and up/down deflection.'},
    {q:'Drainage of walled-off necrosis is generally deferred until about how long after onset of pancreatitis?', o:['About 4 weeks','24 hours','1 week','6 months'], a:0, e:'Waiting roughly four weeks allows the collection to encapsulate, which makes endoscopic drainage safer.'},
    {q:'Before each EUS puncture you should:', o:['Check the path with Doppler','Switch to radial mode','Withdraw the scope to the stomach','Deflate the balloon fully'], a:0, e:'Doppler confirms there is no vessel in the needle path.'},
  ],
  esd:[
    {q:'Why is indigo carmine added to the submucosal injection?', o:['It stains the submucosa so it is distinct from the muscle layer','It stops bleeding','It sterilises the field','It lifts the muscle layer'], a:0, e:'The blue submucosa makes the dissection plane visible and helps you stay above the muscle.'},
    {q:'In POEM, which muscle layer is primarily divided?', o:['The inner circular layer','The outer longitudinal layer only','The mucosa','The serosa'], a:0, e:'POEM is designed as a selective circular myotomy, although full-thickness myotomy is used by some operators.'},
    {q:'The main reason ESD aims for en-bloc resection is that it:', o:['Allows accurate histological assessment of the margins','Is faster than piecemeal resection','Needs fewer accessories','Avoids submucosal injection'], a:0, e:'An en-bloc specimen lets the pathologist assess lateral and deep margins and decide whether the resection was curative.'},
  ],
  upper:[
    {q:'In Barrett’s surveillance, random biopsies are taken in four quadrants every:', o:['2 cm','5 cm','10 cm','Only from visible lesions'], a:0, e:'The Seattle protocol takes four-quadrant biopsies every 2 cm alongside targeted biopsies of visible lesions.'},
    {q:'Narrow-band and blue-light imaging are examples of:', o:['Virtual chromoendoscopy','Confocal endomicroscopy','Dye-based chromoendoscopy','Endocytoscopy'], a:0, e:'They enhance mucosal and vascular patterns optically or digitally without spraying dye.'},
    {q:'ESGE’s performance measures suggest a minimum procedure time for a first diagnostic upper GI endoscopy of:', o:['7 minutes','2 minutes','15 minutes','30 minutes'], a:0, e:'A procedure time of at least 7 minutes is associated with better detection of neoplastic lesions.'},
  ],
  colon:[
    {q:'ESGE recommends which technique for polyps up to 9 mm?', o:['Cold snare polypectomy','Hot snare polypectomy','Cold forceps for all sizes','Argon plasma coagulation'], a:0, e:'Cold snare polypectomy gives high complete resection rates with fewer delayed complications for diminutive and small polyps.'},
    {q:'A commonly cited minimum adenoma detection rate in ESGE quality measures is:', o:['25%','10%','50%','5%'], a:0, e:'ESGE lists an adenoma detection rate of at least 25% as a key performance measure.'},
    {q:'The minimum standard for caecal intubation rate is:', o:['90%','70%','99%','50%'], a:0, e:'ESGE sets a caecal intubation rate of at least 90% as the minimum standard.'},
  ],
  hemo:[
    {q:'Which Forrest class does NOT routinely need endoscopic therapy?', o:['Forrest IIc (flat pigmented spot)','Forrest Ia (spurting)','Forrest Ib (oozing)','Forrest IIa (visible vessel)'], a:0, e:'Flat pigmented spots (IIc) and clean-based ulcers (III) have a low rebleeding risk and do not need endoscopic haemostasis.'},
    {q:'Epinephrine injection for active ulcer bleeding should be:', o:['Combined with a second modality','Used alone as definitive therapy','Avoided altogether','Given only intravenously'], a:0, e:'Epinephrine alone is inferior; combine it with clips, thermal therapy or another mechanical method.'},
    {q:'During oesophageal band ligation, bands are usually placed starting:', o:['At the gastro-oesophageal junction and moving upwards','In the mid oesophagus','In the gastric fundus','At the upper oesophageal sphincter'], a:0, e:'Starting distally keeps the view clear as you work proximally.'},
  ],
  bariatric:[
    {q:'Endoscopic sleeve gastroplasty is performed with:', o:['Full-thickness endoscopic suturing','Band ligation','Argon plasma coagulation','Intragastric balloon'], a:0, e:'ESG uses a full-thickness suturing device to reduce gastric volume along the greater curve.'},
    {q:'A common endoscopic approach to a chronic leak after sleeve gastrectomy is:', o:['Internal drainage with double-pigtail stents','Repeat band ligation','Sclerotherapy','Observation only'], a:0, e:'Endoscopic internal drainage with pigtail stents is widely used for chronic leaks and collections.'},
    {q:'Migration is a recognised limitation of:', o:['Fully covered stents','Pigtail plastic stents','Over-the-scope clips','Endoscopic sutures'], a:0, e:'Fully covered stents migrate more often, especially across the sleeve.'},
  ],
  sb:[
    {q:'On intestinal ultrasound, terminal ileal wall thickness above which value suggests active Crohn’s disease?', o:['3 mm','1 mm','8 mm','15 mm'], a:0, e:'A bowel wall thickness above 3 mm is the commonly used threshold for inflammation in the terminal ileum.'},
    {q:'Device-assisted enteroscopy includes:', o:['Single-balloon, double-balloon and spiral systems','Only capsule endoscopy','Only push enteroscopy','Colon capsule'], a:0, e:'All three systems use an overtube or balloon mechanism to pleat the small bowel.'},
    {q:'Capsule retention risk is highest in patients with:', o:['Known Crohn’s strictures','Iron-deficiency anaemia alone','Coeliac disease without symptoms','Normal small-bowel imaging'], a:0, e:'Established stricturing Crohn’s disease carries the highest retention risk; a patency capsule can help.'},
  ],
  nursing:[
    {q:'The leak test is performed:', o:['Before immersing the endoscope for manual cleaning','After high-level disinfection','Only once a month','After drying and storage'], a:0, e:'Leak testing before immersion prevents fluid damage to a perforated scope.'},
    {q:'High-level disinfection must always be preceded by:', o:['Thorough manual cleaning','Drying with alcohol','Leak testing alone','A sterile wrap'], a:0, e:'Organic material left after poor manual cleaning stops the disinfectant from working.'},
    {q:'Bedside pre-cleaning should happen:', o:['Immediately after the procedure','At the end of the list','The next morning','Only for infected patients'], a:0, e:'Wiping the insertion tube and suctioning detergent straight away prevents biofilm from drying in the channels.'},
  ],
  lap:[
    {q:'The critical view of safety requires two structures entering the gallbladder, a cleared hepatocystic triangle, and:', o:['The lower gallbladder separated from the cystic plate','The common bile duct fully dissected','An intra-operative cholangiogram','The cystic artery divided'], a:0, e:'Separating the lower third of the gallbladder from the liver bed is the third element of the critical view.'},
    {q:'A typical pneumoperitoneum pressure in adults is:', o:['12–15 mmHg','2–4 mmHg','25–30 mmHg','40 mmHg'], a:0, e:'12–15 mmHg gives adequate working space with acceptable haemodynamic effects in most adults.'},
    {q:'A simple check of Veress needle position is the:', o:['Saline drop test','Leak test','Doppler signal','Pulse oximetry trace'], a:0, e:'Saline should drop freely into the peritoneal cavity when the needle tip is correctly placed.'},
  ],
  research:[
    {q:'A Kaplan–Meier curve estimates:', o:['The probability of surviving beyond each time point, accounting for censoring','The mean survival time only','The hazard ratio between groups','The incidence of disease'], a:0, e:'Censored patients contribute information until they are lost to follow-up.'},
    {q:'A hazard ratio of 0.70 means:', o:['A 30% lower instantaneous risk in the comparison group','A 70% lower risk','A 30% higher risk','No difference'], a:0, e:'A hazard ratio below 1 means a lower event rate relative to the reference group.'},
    {q:'A structured congress abstract usually uses the headings:', o:['Background/aims, methods, results, conclusions','Introduction and discussion only','Title, keywords, references','Case, image, quiz'], a:0, e:'Most endoscopy congresses, including ESGE Days, require a structured format.'},
  ],
};
const MOD_QUIZ = { 'ERCP':'ercp','EUS':'eus','Third space':'esd','Upper GI':'upper','Colonoscopy':'colon','Hemostasis':'hemo','Bariatric':'bariatric','Small bowel & IBD':'sb','Nursing':'nursing','Laparoscopy':'lap','Research':'research' };

const TECHNIQUES = [
  { id:'biliary-cannulation', name:'Biliary cannulation', mod:'ERCP', lvl:'Foundation', art:{s:'wli',x:'papilla',sd:71,m:'WLI'},
    sum:'Selective deep cannulation of the common bile duct with a wire-guided sphincterotome.',
    ind:['Bile duct stones and cholangitis','Malignant or benign biliary obstruction','Bile leak after cholecystectomy'],
    steps:['<b>Long position.</b> Shorten the duodenoscope so the papilla sits centrally, just below the midline.','<b>Read the papilla.</b> Identify the orifice and the intraduodenal segment; picture the duct at 11–12 o’clock.','<b>Align.</b> Bow the sphincterotome and lift with the elevator into the biliary axis.','<b>Wire first.</b> Probe with the hydrophilic wire in small steps; let it find the duct.','<b>Confirm.</b> Check wire position on fluoroscopy before injecting contrast.','<b>Escalate early.</b> After two pancreatic passes, use the double-guidewire technique.'],
    kit:[['Therapeutic duodenoscope','4.2 mm working channel','Check elevator function before the list'],['Sphincterotome','Pull-type, 20–30 mm cutting wire','A rotatable tip helps with an unusual axis'],['Guidewire','0.025 or 0.035 in, hydrophilic tip, long length','Short-wire systems need the locking device'],['Contrast','Iodinated, diluted about 50%','Avoid injecting before deep position is confirmed'],['Pancreatic stent','5 Fr, 3–5 cm','For selected high-risk patients'],['Rectal NSAID','Diclofenac or indomethacin 100 mg','Immediately before ERCP unless contraindicated']],
    settings:null,
    pit:['Pushing the catheter instead of the wire, which causes papillary oedema','Repeated contrast injection into the pancreatic duct','Persisting too long before changing technique'],
    model:'biliary', videos:['ercp-cannulation','ercp-difficult','nurse-ercp','cotw-diverticulum','ercp-pep'] },
  { id:'sphincterotomy', name:'Endoscopic sphincterotomy', mod:'ERCP', lvl:'Intermediate', art:{s:'wli',x:'papilla',sd:72,m:'LCI'},
    sum:'Controlled cutting of the biliary sphincter along the 11–1 o’clock axis.',
    ind:['Stone extraction','Access for stenting','Sphincter dysfunction in selected patients'],
    steps:['<b>Deep position.</b> Keep the wire deep in the bile duct throughout.','<b>Wire contact.</b> Only the distal third of the cutting wire should touch the roof.','<b>Direction.</b> Cut between 11 and 1 o’clock in short, controlled steps.','<b>Length.</b> Stop at the transverse fold, or earlier in a small papilla.','<b>Check.</b> Look for bleeding and manage it before moving on.'],
    kit:[['Sphincterotome','Pull-type, 20–30 mm cutting wire','Same device used for cannulation'],['Electrosurgical unit','With a fractionated cutting mode','Neutral electrode placed before the procedure'],['Injection needle','Epinephrine 1:10,000','For oozing after the cut'],['Extraction balloon','For tamponade','Also used to sweep the duct'],['Fully covered metal stent','For refractory bleeding','ESGE suggests this as a rescue option']],
    settings:[['Mode','Fractionated cut (e.g. EndoCut I)'],['Effect','2'],['Cut duration','3'],['Cut interval','3']],
    pit:['A “zipper” cut from too much wire contact or continuous current','Cutting outside the 11–1 o’clock window, which risks bleeding and perforation','Cutting beyond the transverse fold'],
    model:'papilla', videos:['ercp-sphincterotomy','ercp-stones'] },
  { id:'stone-extraction', name:'Large stone extraction', mod:'ERCP', lvl:'Advanced', art:{s:'fluoro',x:'stones',sd:73,m:'FLUORO'},
    sum:'Clearing large or difficult bile duct stones with balloon dilation, lithotripsy or cholangioscopy.',
    ind:['Stones larger than about 15 mm','Stones above a narrowed distal duct','Impacted or barrel-shaped stones'],
    steps:['<b>Plan.</b> Measure the stone and the distal duct on the cholangiogram.','<b>Open the outflow.</b> Limited sphincterotomy followed by large-balloon dilation.','<b>Extract.</b> Balloon or basket, working from the lowest stone up.','<b>Fragment.</b> Mechanical lithotripsy when the stone will not pass.','<b>Cholangioscopy.</b> Electrohydraulic or laser lithotripsy for what remains.','<b>Bridge.</b> Place a plastic stent if clearance is incomplete.'],
    kit:[['Extraction balloon','Adjustable 8.5–15 mm','Occlusion cholangiogram at the end'],['Retrieval basket','Lithotripsy-compatible','Check compatibility before you need it'],['Mechanical lithotripter','Matched to the basket','Have the emergency lithotripter on the trolley'],['Dilation balloon','12–20 mm, controlled radial expansion','Do not exceed the distal duct diameter'],['Digital cholangioscope','With EHL or laser fibre','Saline irrigation throughout'],['Plastic biliary stent','7–10 Fr','When clearance is incomplete']],
    settings:null,
    pit:['Dilating beyond the size of the distal bile duct','Trapping a basket around a stone too large to pass','Leaving residual fragments without a stent'],
    model:'biliary', videos:['ercp-stones','ercp-cholangioscopy'] },
  { id:'eus-fnb', name:'EUS-guided fine-needle biopsy', mod:'EUS', lvl:'Intermediate', art:{s:'eus',x:'needle',sd:74,m:'EUS 7.5MHz'},
    sum:'Tissue acquisition from solid lesions with a biopsy needle under real-time EUS guidance.',
    ind:['Solid pancreatic masses','Subepithelial lesions','Lymph nodes that change staging'],
    steps:['<b>Station.</b> Find the shortest window with the lesion in the needle path.','<b>Doppler.</b> Confirm no vessel lies in the path.','<b>Puncture.</b> Advance the needle under continuous view.','<b>Fan.</b> Sample several areas using the elevator and up/down deflection.','<b>Passes.</b> Usually two to three with a biopsy needle when no on-site evaluation is available.'],
    kit:[['Linear echoendoscope','Standard or therapeutic channel','Balloon filled for good contact'],['Biopsy needle','22G or 25G (Franseen or fork-tip)','22G for core in most solid masses'],['Syringe','10 mL for suction','Or slow-pull with the stylet'],['Specimen containers','Formalin for cores, slides for smears','Label each pass']],
    settings:[['Frequency','5–7.5 MHz'],['Doppler','On before every puncture'],['Gain','Adjust to the lesion edge']],
    pit:['Puncturing through a vessel without Doppler check','Too few passes for histology','Over-suction that fills the core with blood'],
    model:'euscyst', videos:['eus-fnb','eus-stations'] },
  { id:'lams-drainage', name:'EUS-guided LAMS drainage', mod:'EUS', lvl:'Expert', art:{s:'eus',x:'needle',sd:75,m:'EUS 5MHz'},
    sum:'Transmural drainage of pancreatic fluid collections with an electrocautery-enhanced lumen-apposing metal stent.',
    ind:['Symptomatic walled-off necrosis after about 4 weeks','Symptomatic pseudocysts','Selected gallbladder drainage'],
    steps:['<b>Window.</b> Collection within 1 cm of the gastric or duodenal wall, no vessel in the path.','<b>Access.</b> Freehand puncture with the cautery-enhanced delivery system.','<b>Deploy.</b> Open the distal flange under EUS, the proximal flange in the channel or under endoscopic view.','<b>Confirm.</b> Fluid or necrosis should drain immediately.','<b>Plan.</b> Decide about dilation and direct necrosectomy.'],
    kit:[['Therapeutic linear echoendoscope','3.7–3.8 mm channel','Needed for the delivery system'],['Cautery-enhanced LAMS','15 or 20 mm','Size to the collection and plan'],['Dilation balloon','15–20 mm','Before endoscopic necrosectomy'],['Necrosectomy accessories','Snares, baskets and nets','Irrigation with saline']],
    settings:[['Mode','Pure cut'],['Power','About 100 W'],['Source','Follow the LAMS instructions for use']],
    pit:['Drainage before the collection has encapsulated','Maldeployment of the distal flange','Ignoring a nearby pseudoaneurysm'],
    model:'euscyst', videos:['eus-lams','eus-gallbladder'] },
  { id:'colorectal-esd', name:'Colorectal ESD', mod:'Third space', lvl:'Advanced', art:{s:'esd',x:'knife',sd:76,m:'BLI'},
    sum:'En-bloc resection of large or suspicious colorectal lesions through the submucosal layer.',
    ind:['Lesions suspicious for superficial submucosal invasion','Large non-granular lateral spreading tumours','Residual or recurrent lesions not suitable for EMR'],
    steps:['<b>Assess.</b> Morphology, surface and vascular pattern, signs of deep invasion.','<b>Inject.</b> Saline with indigo carmine, plus a viscous agent for a longer lift.','<b>Incise.</b> Start on the anal side, then create a pocket under the lesion.','<b>Dissect.</b> Stay just above the muscle, using traction when the plane is poor.','<b>Haemostasis.</b> Coagulate vessels before cutting them.','<b>Specimen.</b> Pin it flat and orient it for pathology.'],
    kit:[['Colonoscope or gastroscope','With water jet','A gastroscope helps in the rectum'],['Transparent cap','Tapered or straight','Opens the submucosal space'],['ESD knife','Needle-type, with or without an insulated tip','Choose one and learn it well'],['Lifting solution','Saline + indigo carmine ± hyaluronic acid or gelatin','Re-inject before you lose the plane'],['Coagulation forceps','Monopolar','For larger vessels'],['Clips','Through-the-scope','For defect closure when needed'],['CO₂ insufflation','','Reduces discomfort and perforation risk']],
    settings:[['Marking','Soft coag'],['Incision','Fractionated cut (EndoCut I), effect 2'],['Dissection','Swift or forced coag'],['Vessel coagulation','Soft coag with forceps']],
    pit:['Dissecting too deep once the blue plane is lost','Starting incision on the oral side and losing the lesion into the lumen','Poor scope position that cannot be improved'],
    model:'esdstomach', videos:['esd-colorectal','esd-gastric','esd-pathology'] },
  { id:'poem', name:'Peroral endoscopic myotomy', mod:'Third space', lvl:'Expert', art:{s:'tunnel',sd:77,m:'WLI'},
    sum:'Submucosal tunnelling and selective circular myotomy for achalasia and other motility disorders.',
    ind:['Achalasia types I–III','Failed pneumatic dilation or Heller myotomy','Other spastic oesophageal disorders'],
    steps:['<b>Mucosotomy.</b> After a submucosal bleb, a short longitudinal incision.','<b>Tunnel.</b> Dissect down onto the cardia, keeping the mucosa intact.','<b>Confirm.</b> Use landmarks such as the palisade vessels and the blue cardia.','<b>Myotomy.</b> Divide the circular muscle from proximal to distal.','<b>Close.</b> Clip the mucosal entry.'],
    kit:[['Gastroscope with cap','Water jet','CO₂ insufflation essential'],['Triangle-tip or hybrid knife','','A water-jet knife saves exchanges'],['Injection solution','Saline + indigo carmine',''],['Coagulation forceps','',''],['Clips','Through-the-scope','For mucosotomy closure']],
    settings:[['Mucosotomy','Fractionated cut'],['Tunnelling','Spray or swift coag'],['Myotomy','Fractionated cut or swift coag']],
    pit:['Mucosal injury in the tunnel','Myotomy too short on the gastric side','Inadequate closure of the entry'],
    model:'poem', videos:['poem','gpoem'] },
  { id:'cold-snare', name:'Cold snare polypectomy', mod:'Colonoscopy', lvl:'Foundation', art:{s:'wli',x:'polyp',sd:78,m:'WLI'},
    sum:'Resection of small polyps with a snare and no electrocautery.',
    ind:['Diminutive and small polyps up to 9 mm','Sessile serrated lesions under 10 mm'],
    steps:['<b>Position.</b> Bring the polyp to 5 o’clock, close to the scope.','<b>Margin.</b> Open the snare around the polyp with 1–2 mm of normal tissue.','<b>Close.</b> Tighten steadily and transect without lifting.','<b>Retrieve.</b> Suction into a trap.','<b>Inspect.</b> Check the defect for residual tissue.'],
    kit:[['Dedicated cold snare','Thin wire, about 10 mm','Stiffer snares cut more reliably'],['Polyp trap','Multi-chamber for several polyps',''],['Clips','Not routinely needed','For immediate bleeding that does not stop']],
    settings:null,
    pit:['No margin of normal tissue','“Tenting” the polyp instead of cutting flat','Using cold snare for lesions 10 mm or larger with suspicious features'],
    model:'polypcolon', videos:['cold-snare','colon-adr','pedunculated'] },
  { id:'nvugib', name:'Non-variceal haemostasis', mod:'Hemostasis', lvl:'Intermediate', art:{s:'wli',x:'blood',sd:79,m:'WLI'},
    sum:'Endoscopic control of bleeding peptic ulcers using combination and mechanical therapy.',
    ind:['Forrest Ia and Ib active bleeding','Forrest IIa non-bleeding visible vessel','Forrest IIb adherent clot, after clot removal'],
    steps:['<b>Clear the field.</b> Water jet and a large channel.','<b>Classify.</b> Forrest class decides whether to treat.','<b>Inject.</b> Dilute epinephrine around the vessel.','<b>Second modality.</b> Clips or thermal therapy across the vessel.','<b>Rescue.</b> Over-the-scope clip for recurrent bleeding; powder as a bridge.'],
    kit:[['Therapeutic gastroscope','Large channel, water jet',''],['Injection needle','23–25G, epinephrine 1:10,000','Never as monotherapy'],['Through-the-scope clips','Rotatable','Place across the vessel'],['Coagulation forceps or bipolar probe','',''],['Over-the-scope clip system','','For recurrent bleeding'],['Haemostatic powder','','Rescue or bridging therapy']],
    settings:[['Coagulation forceps','Soft coag'],['Power','About 80 W, effect 5'],['Bipolar probe','Per probe instructions']],
    pit:['Epinephrine monotherapy','Treating Forrest IIc or III lesions','Clip placed parallel to, not across, the vessel'],
    model:'bleeding', videos:['nvugib','bleeding-live','powder'] },
  { id:'evl', name:'Variceal band ligation', mod:'Hemostasis', lvl:'Foundation', art:{s:'wli',x:'varix',sd:80,m:'WLI'},
    sum:'Mechanical ligation of oesophageal varices for active bleeding and secondary prevention.',
    ind:['Acute variceal bleeding','Secondary prophylaxis','Primary prophylaxis when beta-blockers are not suitable'],
    steps:['<b>Load.</b> Attach the ligator and check the trigger cord.','<b>Start low.</b> Begin at the gastro-oesophageal junction.','<b>Suction.</b> Draw the varix fully into the cap before firing.','<b>Spiral up.</b> Work proximally, avoiding bands at the same level.','<b>Repeat.</b> Sessions every 2–4 weeks until eradication.'],
    kit:[['Gastroscope','Standard',''],['Multi-band ligator','6–7 bands','Cap reduces the field of view'],['Sclerotherapy needle','','Backup if banding is not possible']],
    settings:null,
    pit:['Firing before the varix fills the cap','Several bands at one level, which risks stenosis','Starting proximally and losing the view'],
    model:'varix', videos:['evl'] },
];

const MODELS = [
  { id:'biliary', name:'Ex-vivo Biliary Model', tissue:'Porcine duodenum, papilla and biliary tree', tech:['Cannulation','Sphincterotomy','Stone extraction','Stenting'], art:{s:'wli',x:'papilla',sd:91,m:'MODEL'}, note:'Used at the ROEYA ERCP Training Course' },
  { id:'papilla', name:'Papilla Cartridge', tissue:'Replaceable papilla insert', tech:['Cannulation drills','Sphincterotomy','Precut practice'], art:{s:'wli',x:'papilla',sd:92,m:'MODEL'}, note:'Several cuts per session, quick to swap' },
  { id:'esdstomach', name:'ESD Stomach Model', tissue:'Porcine stomach', tech:['Marking','Injection','ESD','EMR'], art:{s:'esd',sd:93,m:'MODEL'}, note:'Used at the ROEYA ESD Training Course' },
  { id:'poem', name:'Third-Space Oesophagus Model', tissue:'Porcine oesophagus with gastric cardia', tech:['Tunnelling','POEM','Closure'], art:{s:'tunnel',sd:94,m:'MODEL'}, note:'Long segment for full tunnels' },
  { id:'bleeding', name:'Bleeding Ulcer Model', tissue:'Porcine stomach with perfused vessels', tech:['Injection','Clips','Thermal therapy','Over-the-scope clip'], art:{s:'wli',x:'blood',sd:95,m:'MODEL'}, note:'Used at the ROEYA Hemostasis & Polypectomy course' },
  { id:'varix', name:'Variceal Band Model', tissue:'Oesophagus with simulated varices', tech:['Band ligation','Sclerotherapy'], art:{s:'wli',x:'varix',sd:96,m:'MODEL'}, note:'Repeatable banding drills' },
  { id:'polypcolon', name:'Polyp Colon Model', tissue:'Colon segment with artificial polyps', tech:['Cold snare','Hot snare','EMR','Clip closure'], art:{s:'wli',x:'polyp',sd:97,m:'MODEL'}, note:'Mix of diminutive, small and stalked polyps' },
  { id:'euscyst', name:'EUS Cyst & Drainage Model', tissue:'Porcine stomach with fluid-filled targets', tech:['EUS-FNA/FNB','Cyst puncture','LAMS placement'], art:{s:'eus',sd:98,m:'MODEL'}, note:'Ultrasound-visible targets at set depths' },
];

const PATHWAYS = [
  { id:'ercp', name:'ERCP: from cannulation to independent practice', mod:'ERCP', lvl:'Foundation → Advanced', hours:32, cme:18, mentor:'karim', enrolled:true, cur:2,
    blurb:'Theory, papilla and biliary model drills, the ROEYA ERCP course, observed live lists and a supervised logbook, ending in a competency assessment.',
    stages:[
      {k:'learn', n:'Learn', d:'Online modules', items:[['v','ercp-pep',1],['v','ercp-cannulation',1],['v','ercp-sphincterotomy',1],['v','nurse-ercp',1],['v','ercp-difficult',1],['v','ercp-stones',1],['v','ercp-cholangioscopy',2],['v','ercp-live-hilar',0]]},
      {k:'simulate', n:'Simulate', d:'ROEYA model sessions', items:[['m','papilla',1,'Cannulation drills — 2 sessions'],['m','papilla',1,'Sphincterotomy on the cartridge'],['m','biliary',2,'Stone extraction on the biliary model']]},
      {k:'handson', n:'Hands-on', d:'ROEYA course', items:[['e','ercp-4',2,'ERCP Training Course — 4th wave']]},
      {k:'observe', n:'Observe', d:'Live lists', items:[['o','',1,'Live list at a partner teaching hospital, Cairo'],['o','',0,'Second live list'],['o','',0,'Third live list']]},
      {k:'log', n:'Log', d:'Supervised cases', items:[['l','',2,'46 of 100 supervised ERCPs logged']]},
      {k:'assess', n:'Assess', d:'Competency', items:[['a','',0,'MCQ assessment, 40 questions'],['a','',0,'DOPS with your mentor']]},
    ]},
  { id:'eus', name:'Linear EUS: stations to therapeutic EUS', mod:'EUS', lvl:'Intermediate → Expert', hours:28, cme:15, mentor:'rania', enrolled:false, cur:0,
    blurb:'Station-by-station anatomy, FNB on the cyst model, the Qasr Al-Ainy EUS course and a progression into drainage.',
    stages:[{k:'learn',n:'Learn',d:'Online modules',items:[['v','eus-stations',0],['v','eus-fnb',0],['v','eus-cysts',0],['v','eus-lams',0],['v','eus-gallbladder',0]]},{k:'simulate',n:'Simulate',d:'ROEYA model sessions',items:[['m','euscyst',0,'FNB drills on the cyst model'],['m','euscyst',0,'LAMS deployment']]},{k:'handson',n:'Hands-on',d:'Course',items:[['e','kasr-eus',0,'Qasr Al-Ainy EUS course']]},{k:'observe',n:'Observe',d:'Live lists',items:[['o','',0,'Two observed EUS lists']]},{k:'log',n:'Log',d:'Supervised cases',items:[['l','',0,'0 of 150 supervised EUS logged']]},{k:'assess',n:'Assess',d:'Competency',items:[['a','',0,'Station recognition test'],['a','',0,'DOPS']]}]},
  { id:'esd', name:'ESD & third space', mod:'Third space', lvl:'Advanced → Expert', hours:30, cme:16, mentor:'lina', enrolled:false, cur:0,
    blurb:'From injection and marking to full ESD and POEM, built around the ROEYA ESD course and the stomach and oesophagus models.',
    stages:[{k:'learn',n:'Learn',d:'Online modules',items:[['v','esd-colorectal',0],['v','esd-gastric',0],['v','poem',0],['v','gpoem',0],['v','esd-pathology',0]]},{k:'simulate',n:'Simulate',d:'ROEYA model sessions',items:[['m','esdstomach',0,'Marking, injection and incision'],['m','esdstomach',0,'Full ESD on the stomach model'],['m','poem',0,'Tunnelling on the oesophagus model']]},{k:'handson',n:'Hands-on',d:'Course',items:[['e','esd-4',0,'ESD Training Course — 4th wave']]},{k:'observe',n:'Observe',d:'Live cases',items:[['o','',0,'EGH third-space live session']]},{k:'log',n:'Log',d:'Supervised cases',items:[['l','',0,'Supervised ESD cases']]},{k:'assess',n:'Assess',d:'Competency',items:[['a','',0,'Video-based assessment']]}]},
  { id:'diag', name:'Diagnostic upper GI & colonoscopy quality', mod:'Colonoscopy', lvl:'Foundation', hours:16, cme:9, mentor:'nadia', enrolled:false, cur:0,
    blurb:'Systematic EGD, Barrett’s surveillance, ADR and polypectomy, for first-year fellows.',
    stages:[{k:'learn',n:'Learn',d:'Online modules',items:[['v','egd-systematic',0],['v','barrett-ied',0],['v','colon-adr',0],['v','cold-snare',0],['v','ai-cade',0]]},{k:'simulate',n:'Simulate',d:'ROEYA model sessions',items:[['m','polypcolon',0,'Polypectomy drills']]},{k:'handson',n:'Hands-on',d:'Course',items:[['e','upper-5',0,'Upper & Colonoscopy Training Course — 5th wave']]},{k:'observe',n:'Observe',d:'Lists',items:[['o','',0,'Observed list']]},{k:'log',n:'Log',d:'Cases',items:[['l','',0,'Colonoscopies with ADR tracking']]},{k:'assess',n:'Assess',d:'Competency',items:[['a','',0,'DOPS']]}]},
  { id:'hemo', name:'GI bleeding & haemostasis', mod:'Hemostasis', lvl:'Foundation → Intermediate', hours:12, cme:7, mentor:'omar', enrolled:true, done:true, cur:6,
    blurb:'Non-variceal and variceal bleeding, from classification to over-the-scope clips.',
    stages:[{k:'learn',n:'Learn',d:'Online modules',items:[['v','nvugib',1],['v','evl',1],['v','bleeding-live',1],['v','powder',1]]},{k:'simulate',n:'Simulate',d:'ROEYA model sessions',items:[['m','bleeding',1,'Clips and injection'],['m','varix',1,'Banding drills']]},{k:'handson',n:'Hands-on',d:'Course',items:[['e','hemo-3',1,'Hemostasis & Polypectomy Training Course — 3rd wave']]},{k:'observe',n:'Observe',d:'Lists',items:[['o','',1,'Emergency endoscopy list']]},{k:'log',n:'Log',d:'Cases',items:[['l','',1,'20 of 20 supervised cases']]},{k:'assess',n:'Assess',d:'Competency',items:[['a','',1,'MCQ and DOPS passed']]}]},
  { id:'nursing', name:'Endoscopy nursing & reprocessing', mod:'Nursing', lvl:'Foundation', hours:10, cme:6, mentor:'hana', enrolled:false, cur:0,
    blurb:'Reprocessing to audit standard, assisting at ERCP and EUS, and safe sedation monitoring.',
    stages:[{k:'learn',n:'Learn',d:'Online modules',items:[['v','reprocessing',0],['v','nurse-ercp',0]]},{k:'simulate',n:'Simulate',d:'Models',items:[['m','biliary',0,'Wire handling on the biliary model']]},{k:'handson',n:'Hands-on',d:'Course',items:[['e','egh',0,'Endoscopy Nurses Training at EGH 2026']]},{k:'observe',n:'Observe',d:'Unit visit',items:[['o','',0,'Reprocessing unit visit']]},{k:'log',n:'Log',d:'Cases',items:[['l','',0,'Assisted procedures']]},{k:'assess',n:'Assess',d:'Competency',items:[['a','',0,'Practical assessment']]}]},
  { id:'research', name:'Research to publication', mod:'Research', lvl:'All levels', hours:14, cme:8, mentor:'zaki', enrolled:true, cur:0,
    blurb:'Design a question, use your course and logbook data, write the abstract and submit to ESGE Days or UEG Week.',
    stages:[{k:'learn',n:'Learn',d:'Online modules',items:[['v','abstract',1],['v','survival',2],['v','population-data',0]]},{k:'simulate',n:'Draft',d:'Your protocol',items:[['o','',0,'One-page protocol reviewed by a mentor']]},{k:'handson',n:'Workshop',d:'Writing clinic',items:[['o','',0,'Abstract writing clinic (online)']]},{k:'observe',n:'Analyse',d:'Your data',items:[['o','',0,'Statistics review session']]},{k:'log',n:'Submit',d:'Congress',items:[['o','',0,'Submission to ESGE Days 2027']]},{k:'assess',n:'Publish',d:'Manuscript',items:[['o','',0,'Full manuscript']]}]},
  { id:'lap', name:'Basic laparoscopy', mod:'Laparoscopy', lvl:'Foundation', hours:9, cme:5, mentor:'marco', enrolled:false, cur:0,
    blurb:'Camera, ports, knots and the critical view of safety, linked to the EGH basic laparoscopy crash course.',
    stages:[{k:'learn',n:'Learn',d:'Online modules',items:[['v','lap-basic',0],['v','lap-chole',0]]},{k:'simulate',n:'Simulate',d:'Box trainer',items:[['o','',0,'Box trainer drills']]},{k:'handson',n:'Hands-on',d:'Course',items:[['e','egh',0,'Basic Laparoscopy crash course, EGH 2026']]},{k:'observe',n:'Observe',d:'Theatre',items:[['o','',0,'Observed list']]},{k:'log',n:'Log',d:'Cases',items:[['l','',0,'Assisted cases']]},{k:'assess',n:'Assess',d:'Competency',items:[['a','',0,'Skills test']]}]},
];

/* From ROEYA's 2026–27 events calendar */
const EVENTS = [
  { id:'ercp-4',   name:'ERCP Training Course — 4th wave', start:'2026-11-06', end:'2026-11-10', place:'ROEYA Training Center, Cairo', kind:'Hands-on course', passport:true },
  { id:'sahgeed',  name:'SAHGEED 2026 — congress hands-on', start:'2026-11-13', end:'2026-11-13', place:'Hotel El Aurassi, Algiers', kind:'Congress' },
  { id:'upper-5',  name:'Upper & Colonoscopy Training Course — 5th wave', start:'2026-11-20', end:'2026-11-21', place:'ROEYA Training Center, Cairo', kind:'Hands-on course', passport:true },
  { id:'kasr-eus', name:'Qasr Al-Ainy EUS course', start:'2026-12-09', end:'2026-12-09', place:'Cairo', kind:'Hands-on course', passport:true },
  { id:'egh',      name:'EGH 2026 — Egypt Gastro Hep', start:'2026-12-10', end:'2026-12-12', place:'Cairo Marriott, Zamalek', kind:'Congress', featured:true },
  { id:'eus-marathon', name:'EUS World Live Marathon', start:'2026-12-10', end:'2026-12-10', place:'Online (Zoom webinar)', kind:'Online' },
  { id:'esd-4',    name:'ESD Training Course — 4th wave', start:'2026-12-15', end:'2026-12-17', place:'ROEYA Training Center, Cairo', kind:'Hands-on course', passport:true },
  { id:'sddf',     name:'SDDF 2026 — all congress hands-on', start:'2026-12-16', end:'2026-12-19', place:'Jeddah, KSA', kind:'Congress' },
  { id:'royal',    name:'Royal Hospital Congress', start:'2026-12-17', end:'2026-12-17', place:'Muscat, Oman', kind:'Congress' },
  { id:'hemo-4',   name:'Hemostasis & Polypectomy Training Course — 4th wave', start:'2026-12-25', end:'2026-12-26', place:'ROEYA Training Center, Cairo', kind:'Hands-on course', passport:true },
  { id:'ircad',    name:'IRCAD India — Therapeutic EUS course', start:'2027-01-22', end:'2027-01-23', place:'India', kind:'Hands-on course' },
  { id:'bootcamp', name:'ROEYA Innovation Boot Camp 2027', start:'2027-02-05', end:'2027-02-06', place:'Dubai, UAE', kind:'Hands-on course', passport:true },
  { id:'aem',      name:'AEM 2027 — International Advanced Endoscopy Masterclass', start:'2027-04-14', end:'2027-04-16', place:'Valletta, Malta', kind:'Congress' },
  { id:'workshop', name:'Workshop Week 2027', start:'2027-04-22', end:'2027-04-24', place:'Düsseldorf, Germany', kind:'Congress' },
];
const EVENT_DONE = { 'hemo-3':'Hemostasis & Polypectomy Training Course — 3rd wave' };

const SESSIONS = [
  { id:'oh-cannulation', t:'Office hours: difficult biliary cannulation', fac:'karim', when:'2026-11-12T19:00:00+02:00', mins:60, kind:'Office hours', seats:64, taken:51 },
  { id:'cotw-review', t:'Case of the week: the vote and the outcome', fac:'karim', when:'2026-11-16T20:00:00+02:00', mins:30, kind:'Case review', seats:200, taken:118 },
  { id:'jc-simulators', t:'Journal club: ESGE technical review on simulators', fac:'zaki', when:'2026-11-15T20:00:00+02:00', mins:45, kind:'Journal club', seats:100, taken:39 },
  { id:'qa-eus', t:'Live Q&A: EUS stations for beginners', fac:'rania', when:'2026-11-17T18:30:00+02:00', mins:60, kind:'Live Q&A', seats:80, taken:72 },
  { id:'nurse-huddle', t:'Nursing huddle: the reprocessing audit checklist', fac:'hana', when:'2026-11-18T17:00:00+02:00', mins:40, kind:'Huddle', seats:60, taken:22 },
];

const PEOPLE = [
  { id:'karim', fac:'karim', kind:'Expert', mods:['ERCP'], course:true, hours:true },
  { id:'rania', fac:'rania', kind:'Expert', mods:['EUS'], hours:true },
  { id:'lina', fac:'lina', kind:'Expert', mods:['Third space'], hours:true },
  { id:'omar', fac:'omar', kind:'Expert', mods:['Hemostasis'], course:true },
  { id:'tarek', fac:'tarek', kind:'Expert', mods:['Third space'] },
  { id:'nadia', fac:'nadia', kind:'Expert', mods:['Colonoscopy'] },
  { id:'chinedu', fac:'chinedu', kind:'Expert', mods:['EUS'] },
  { id:'zaki', fac:'zaki', kind:'Expert', mods:['Research'], hours:true },
  { id:'mariam', name:'Dr. Mariam Saleh', role:'GI fellow, year 3', city:'Khartoum', hue:188, kind:'Fellow', mods:['ERCP'], course:true },
  { id:'ali', name:'Dr. Ali Al-Rubaie', role:'GI fellow, year 2', city:'Baghdad', hue:210, kind:'Fellow', mods:['EUS'] },
  { id:'fatou', name:'Dr. Fatou Diallo', role:'GI fellow, year 1', city:'Dakar', hue:28, kind:'Fellow', mods:['Colonoscopy'] },
  { id:'hassan', name:'Dr. Hassan Okoth', role:'GI fellow, year 2', city:'Nairobi', hue:120, kind:'Fellow', mods:['Hemostasis'], course:true },
  { id:'reem', name:'Dr. Reem Al-Harbi', role:'Advanced endoscopy fellow', city:'Riyadh', hue:310, kind:'Fellow', mods:['Third space'] },
  { id:'amina', name:'Dr. Amina Belkacem', role:'GI fellow, year 3', city:'Oran', hue:262, kind:'Fellow', mods:['ERCP'], course:true },
  { id:'samir', name:'Dr. Samir Tahiri', role:'Consultant gastroenterologist', city:'Casablanca', hue:58, kind:'Fellow', mods:['Third space'] },
  { id:'ibrahim', name:'Dr. Ibrahim Musa', role:'GI fellow, year 2', city:'Kano', hue:16, kind:'Fellow', mods:['ERCP'] },
  { id:'yara', name:'Dr. Yara Nassar', role:'EUS fellow', city:'Beirut', hue:176, kind:'Fellow', mods:['EUS'] },
  { id:'nesma', name:'Nesma Fouad, RN', role:'Endoscopy nurse', city:'Cairo', hue:330, kind:'Nurse', mods:['Nursing'], course:true },
];

const CIRCLES = [
  { name:'ERCP Fellows · MEA', members:412, icon:'layers' },
  { name:'EUS Club', members:268, icon:'radio' },
  { name:'Third Space Society', members:155, icon:'kit' },
  { name:'Endoscopy Nurses · Egypt', members:301, icon:'users' },
  { name:'Research & Publications Lab', members:189, icon:'feed' },
];

const POSTS = [
  { id:'p1', by:'roeya', at:'2h', tags:['Events','EGH2026'], art:{s:'wli',x:'papilla',sd:101,m:'LIVE · MIH'},
    text:'EGH 2026 runs 10–12 December at the Cairo Marriott, Zamalek: the 19th Hepatology & Gastroenterology Postgraduate Course and the 29th Egyptian Workshop on Therapeutic Endoscopy.\n\nFifteen live cases transmitted from Misr International Hospital, ten hands-on stations running three times over, and seven crash courses on Saturday 12 December.',
    link:{t:'Egypt Gastro Hep 2026 — programme', s:'egyptgastrohep.com', u:'https://www.egyptgastrohep.com/', ic:'calendar'}, likes:214, comments:[['mariam','Booked the ERCP & cholangioscopy crash course. See you there.'],['ibrahim','Is there a group rate for fellows travelling from Nigeria?']] },
  { id:'p2', by:'karim', at:'5h', tags:['Case of the week','ERCP'], poll:{q:'Papilla on the inner rim of a large periampullary diverticulum, two failed attempts. Your next step?', o:[['Double-guidewire technique',142],['Needle-knife precut',88],['EUS-guided rendezvous',61],['Stop and repeat in 48 hours',37]]},
    text:'Case of the week #46. 78-year-old with cholangitis and a 14 mm CBD stone. Vote below; I will show what we did in Monday’s review session.', likes:96, comments:[['amina','I would start with a clip to evert the diverticulum edge before anything more aggressive.']] },
  { id:'p3', by:'roeya', at:'Yesterday', tags:['Guidelines','ERCP'], digest:true,
    text:'Guideline digest: post-ERCP pancreatitis.\n\nESGE recommends routine rectal administration of 100 mg diclofenac or indomethacin immediately before ERCP in all patients without contraindications, and prophylactic pancreatic stenting in selected patients at high risk.',
    link:{t:'ERCP-related adverse events: ESGE Guideline', s:'Endoscopy 2020;52:127–149', u:'https://www.esge.com/', ic:'book'}, likes:331, comments:[] },
  { id:'p4', by:'research', at:'Yesterday', tags:['Research','ROEYA'],
    text:'Our multi-country experience with a mobile endoscopy training centre was presented as an ePoster at ESGE Days 2026 and published in Endoscopy. If your course feedback and logbook data could become an abstract, the Research to publication pathway walks you through it.',
    link:{t:'Mobile Endoscopy Training in Growing Emerging Markets', s:'Endoscopy 2026;58(S03):S695 · DOI 10.1055/s-0046-1821996', u:'https://doi.org/10.1055/s-0046-1821996', ic:'award'}, likes:187, comments:[['ali','Would love to see the survey instrument you used.']] },
  { id:'p5', by:'lina', at:'2d', tags:['Tip','ESD'], art:{s:'esd',x:'knife',sd:105,m:'BLI'},
    text:'ESD tip: if you lose the submucosal plane, stop. Re-inject until the layer is blue again before you cut. Speed comes from staying in the plane, not from cutting faster.', likes:402, comments:[['reem','The re-inject rule saved me twice last week.'],['samir','Do you add hyaluronic acid routinely in the colon?']] },
  { id:'p6', by:'roeya', at:'2d', tags:['Training','Simulation'],
    text:'ESGE’s 2025 technical review catalogues the simulators and training models used in diagnostic and therapeutic endoscopy. Most products have little validation data; ex-vivo platforms remain among the best studied. Join Sunday’s journal club to discuss what it means for how we train.',
    link:{t:'Simulators and training models for diagnostic and therapeutic endoscopy — ESGE technical review', s:'esge.com · 2025', u:'https://www.esge.com/assets/downloads/pdfs/guidelines/2025_a-2569-7736.pdf', ic:'file'}, likes:156, comments:[] },
  { id:'p7', by:'mariam', at:'3d', tags:['Milestone','ERCP'],
    text:'Milestone: 50 supervised ERCPs logged. Biggest lesson so far: fix the scope position before you touch the sphincterotome. Thank you to everyone who answered my questions here.', likes:268, comments:[['karim','Well done. Now track your cannulation rate over the next 50.']] },
  { id:'p8', by:'roeya', at:'4d', tags:['New tech','Upper GI'],
    text:'Magnetically controlled capsule gastroscopy is now part of routine practice at Changhai Hospital, Shanghai. Prof. Alessandro Repici shared his own exam: about 15 minutes, no sedation, with a nurse steering the capsule from outside. Office-based upper GI screening may be closer than we think.', likes:244, comments:[['sara','The training implications for nurses are interesting.']] },
  { id:'p9', by:'roeya', at:'5d', tags:['Events','EUS'],
    text:'EUS World Live Marathon on 10 December brings together EUS experts across Europe, Africa and the Middle East. Prof. Mostafa Ibrahim is among the live demonstrators and Prof. Hussein Okasha moderates. Registration is free on Zoom.', likes:173, comments:[] },
  { id:'p10', by:'hana', at:'6d', tags:['Nursing','Reprocessing'],
    text:'Reprocessing reminder for every unit: leak test before immersion, every time. A perforated scope that goes into the sink becomes an expensive repair. The full audit checklist is in this week’s nursing huddle.', likes:121, comments:[] },
];
const POST_AUTHORS = {
  roeya:{name:'ROEYA Lumen', role:'Editorial team', org:true, hue:198},
  research:{name:'ROEYA Research', role:'Research & publications', org:true, hue:222},
};

const CONVS = [
  { id:'c1', with:'karim', unread:true, msgs:[['them','Saw your question under the cannulation video. Your second scope position is right; you are lifting too early with the elevator.','Mon 18:20'],['me','That makes sense. I was bowing and lifting at the same time.','Mon 18:31'],['them','Separate them. Bow first, then lift. Try ten reps on the papilla cartridge before Thursday.','Mon 18:34'],['them','And bring the case from your logbook to office hours on Thursday.','Today 09:12']] },
  { id:'c2', with:'mariam', unread:true, msgs:[['them','Are you going to the ERCP crash course at EGH?','Sun 21:02'],['me','Yes, booked last week. You?','Sun 21:10'],['them','Same. Let’s compare logbooks before then.','Today 08:45']] },
  { id:'c3', group:'ERCP Fellows · MEA', hue:198, msgs:[['amina','Anyone tried the transpancreatic septotomy video yet?','Sat 14:00'],['ibrahim','Yes, chapter 4 is excellent.','Sat 14:22'],['me','Watching tonight.','Sat 15:05']] },
  { id:'c4', desk:true, name:'ROEYA Course Desk', hue:46, msgs:[['them','Your Course Passport for the ERCP Training Course — 4th wave is active. Pre-course modules are unlocked in your ERCP pathway.','Fri 10:00']] },
  { id:'c5', with:'rania', msgs:[['me','Thank you for the case discussion yesterday.','Thu 19:40'],['them','My pleasure. Upload the follow-up CT when you have it.','Thu 19:52']] },
];

const LOG = [
  ['2026-11-09','ERCP','CBD stones, cholangitis','Performed (supervised)','Prof. Karim El-Sawy','Cannulated; 2 stones cleared',true],
  ['2026-11-09','ERCP','Malignant distal stricture','Performed (supervised)','Prof. Karim El-Sawy','Cannulated; SEMS placed',true],
  ['2026-11-08','ERCP','Stent exchange','Performed (supervised)','Prof. Karim El-Sawy','Plastic stent exchanged',true],
  ['2026-11-07','ERCP','CBD stone, large','Assisted','Prof. Karim El-Sawy','EPLBD, cleared',true],
  ['2026-11-04','EGD','Dyspepsia, age over 55','Independent','—','Normal, biopsies taken',true],
  ['2026-11-03','ERCP','Bile leak after cholecystectomy','Performed (supervised)','Prof. Karim El-Sawy','Failed cannulation; precut by supervisor',false],
  ['2026-11-02','Colonoscopy','Positive FIT','Independent','—','2 adenomas, cold snare',true],
  ['2026-10-29','ERCP','CBD stones','Performed (supervised)','Dr. Hossam R.','Cannulated; cleared',true],
  ['2026-10-28','ERCP','Hilar stricture','Observed','Prof. Karim El-Sawy','Bilateral SEMS',true],
  ['2026-10-26','EUS','Pancreatic head mass','Assisted','Dr. Rania Mahfouz','FNB 22G, 3 passes',true],
  ['2026-10-22','ERCP','Cholangitis','Performed (supervised)','Prof. Karim El-Sawy','Cannulated; plastic stent',true],
  ['2026-10-21','Colonoscopy','Surveillance','Independent','—','No polyps',true],
  ['2026-10-19','ERCP','CBD stones','Performed (supervised)','Prof. Karim El-Sawy','Cannulated; cleared',true],
  ['2026-10-15','EGD','Variceal screening','Independent','—','Grade 2 varices, banded',true],
  ['2026-10-14','ERCP','Pancreatic duct stricture','Observed','Prof. Karim El-Sawy','PD stent',true],
];

const CME = [
  ['2026-11-08','Wire-guided biliary cannulation — module and assessment','ROEYA Lumen online',0.5],
  ['2026-11-05','Large bile duct stones — masterclass','ROEYA Lumen online',1.0],
  ['2026-11-04','From a ROEYA course to an ESGE abstract','ROEYA Lumen online',0.5],
  ['2026-10-30','The linear EUS stations, one by one','ROEYA Lumen online',1.0],
  ['2026-10-14','Live case: hilar stricture','ROEYA Lumen online',1.0],
  ['2026-09-26','Hemostasis & Polypectomy Training Course — 3rd wave','ROEYA hands-on course',12.0],
  ['2026-09-12','Pedunculated polyps','ROEYA Lumen online',0.5],
  ['2026-08-19','Hemostatic powder','ROEYA Lumen online',0.5],
  ['2026-08-02','Office hours: difficult cannulation','ROEYA Lumen live',1.5],
];

const NOTIFS = [
  ['karim','Prof. Karim El-Sawy replied to your question on the cannulation video','12 min'],
  ['roeya','New in ERCP: Large bile duct stones masterclass','2 h'],
  ['karim','Your logbook entry from 9 Nov was signed off','5 h'],
  ['roeya','EGH 2026 opens in a month. Crash course seats are filling','1 d'],
  ['mariam','Dr. Mariam Saleh accepted your connection request','2 d'],
];

const PLANS = {
  regions:{
    eg:{label:'Egypt', cur:'EGP', fellow:[299,2990], pro:[599,5990], seat:2400},
    mea:{label:'Africa & Middle East', cur:'USD', fellow:[12,120], pro:[24,240], seat:90},
    intl:{label:'International', cur:'USD', fellow:[19,190], pro:[39,390], seat:150},
  },
};

const DEMO_USER = { name:'Dr. Nour Adel', first:'Nour', email:'test@roeya.com', role:'GI fellow, year 2', city:'Cairo', hue:204, plan:'Fellow Pro', billing:'Annual', verified:true, joined:'March 2026' };

;
/* ===================== PROCEDURAL MONITOR ART =====================
   Every image in the demo is drawn here: no stock photos, no patient images.
   Styles: wli nbi lci (mucosa), esd, tunnel (POEM), chol, eus, us, fluoro, lap, slide, stats. */
const TAU = Math.PI * 2;
function mulberry(a){ return function(){ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }

const PAL = {
  wli:{l0:'#050101',l1:'#2a0806',m:'#8e2a1e',p:'#c85a43',e:'#f0a284',v:'rgba(110,14,20,',f:'rgba(255,205,185,',hl:'255,246,238'},
  nbi:{l0:'#020302',l1:'#121709',m:'#3d3a22',p:'#5f8a76',e:'#9ccbbb',v:'rgba(74,36,18,',f:'rgba(205,245,230,',hl:'232,255,250'},
  bli:{l0:'#020306',l1:'#0d1520',m:'#33495b',p:'#6d96af',e:'#abd0e2',v:'rgba(84,40,32,',f:'rgba(212,236,250,',hl:'236,248,255'},
  lci:{l0:'#060102',l1:'#300810',m:'#a3302a',p:'#e26c48',e:'#f8bb98',v:'rgba(122,20,62,',f:'rgba(255,218,192,',hl:'255,249,242'},
  chol:{l0:'#030301',l1:'#191506',m:'#6c692c',p:'#b2a75a',e:'#e2d69c',v:'rgba(150,40,30,',f:'rgba(255,250,212,',hl:'255,255,242'},
};
function palFor(spec){
  const m=(spec.m||'').toUpperCase();
  if(spec.s==='chol') return PAL.chol;
  if(m.includes('NBI')||spec.s==='nbi') return PAL.nbi;
  if(m.includes('BLI')) return PAL.bli;
  if(m.includes('LCI')||spec.s==='lci') return PAL.lci;
  return PAL.wli;
}
const MUCOSAL = ['wli','nbi','lci','esd','chol'];

function geom(W,H,s,mode){
  if(mode==='lens'){ const R=Math.min(W,H)/2; return {cx:W/2,cy:H/2,R,lens:true}; }
  if(mode==='free'){ const R=Math.min(W,H)*.46; return {cx:W*.52,cy:H*.47,R}; }
  if(s==='chol') return {cx:W*.6,cy:H*.5,R:H*.42};
  return {cx:W*.6,cy:H*.5,R:H*.5};
}
function clipShape(ctx,W,H,s,g){
  ctx.beginPath();
  if(g.lens){ ctx.arc(g.cx,g.cy,g.R,0,TAU); ctx.clip(); return; }
  if(s==='lap'){ ctx.rect(0,0,W,H); ctx.clip(); return; }
  if(s==='eus'){ const e=eusGeom(g); ctx.moveTo(e.ax,e.ay); ctx.arc(e.ax,e.ay,e.RR,Math.PI/2-e.half,Math.PI/2+e.half); ctx.closePath(); ctx.clip(); return; }
  if(s==='us'||s==='fluoro'){ const r=usRect(g); roundRect(ctx,r.x,r.y,r.w,r.h,s==='fluoro'?g.R*.32:g.R*.02); ctx.clip(); return; }
  if(s==='chol'){ ctx.arc(g.cx,g.cy,g.R,0,TAU); ctx.clip(); return; }
  ctx.arc(g.cx,g.cy,g.R,0,TAU); ctx.clip();
  ctx.beginPath(); const S=g.R*1.8; ctx.rect(g.cx-S/2,g.cy-S/2,S,S); ctx.clip();
}
function eusGeom(g){ return g.lens ? {ax:g.cx,ay:g.cy-g.R*.92,RR:g.R*1.85,half:60*Math.PI/180} : {ax:g.cx+g.R*.06,ay:g.cy-g.R*.92,RR:g.R*1.8,half:58*Math.PI/180}; }
function usRect(g){ return {x:g.cx-g.R*1.12,y:g.cy-g.R*.9,w:g.R*2.24,h:g.R*1.8}; }
function roundRect(ctx,x,y,w,h,r){ ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r); ctx.arcTo(x+w,y+h,x,y+h,r); ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); ctx.closePath(); }
function ell(ctx,x,y,rx,ry,rot=0){ ctx.beginPath(); ctx.ellipse(x,y,Math.max(.1,rx),Math.max(.1,ry),rot,0,TAU); }
function blurOn(ctx,px){ try{ ctx.filter = px>0.3 ? `blur(${px.toFixed(1)}px)` : 'none'; }catch(e){} }
function blurOff(ctx){ try{ ctx.filter='none'; }catch(e){} }

/* value noise */
function noiseGrid(rng,gw,gh){ const a=new Float32Array((gw+1)*(gh+1)); for(let i=0;i<a.length;i++) a[i]=rng(); return {a,gw,gh}; }
function sampleN(n,u,v){ // u,v in 0..1
  const x=Math.min(n.gw-.001,Math.max(0,u*n.gw)), y=Math.min(n.gh-.001,Math.max(0,v*n.gh));
  const x0=x|0, y0=y|0, fx=x-x0, fy=y-y0, sx=fx*fx*(3-2*fx), sy=fy*fy*(3-2*fy), w=n.gw+1;
  const a=n.a[y0*w+x0], b=n.a[y0*w+x0+1], c=n.a[(y0+1)*w+x0], d=n.a[(y0+1)*w+x0+1];
  return a+(b-a)*sx+(c-a)*sy+(a-b-c+d)*sx*sy;
}

/* ---------- mucosa ---------- */
function drawMucosa(ctx,g,rng,pal,spec){
  const {cx,cy,R}=g, x=spec.x, duod = x==='papilla';
  let lx,ly;
  if(duod){ lx=cx-R*.98; ly=cy-R*.82; }
  else { const a=rng()*TAU, d=R*(.04+rng()*.2); lx=cx+Math.cos(a)*d; ly=cy+Math.sin(a)*d; }
  const gr=ctx.createRadialGradient(lx,ly,R*.01,lx,ly,R*(duod?2.25:1.28));
  gr.addColorStop(0,pal.l0); gr.addColorStop(duod?.05:.09,pal.l1); gr.addColorStop(duod?.2:.3,pal.m); gr.addColorStop(duod?.48:.62,pal.p); gr.addColorStop(1,pal.e);
  ctx.fillStyle=gr; ctx.fillRect(cx-R*1.4,cy-R*1.4,R*2.8,R*2.8);
  // mottling
  blurOn(ctx,R*.06);
  for(let i=0;i<16;i++){ const bx=cx+(rng()-.5)*R*2, by=cy+(rng()-.5)*R*2, br=R*(.08+rng()*.25); ctx.fillStyle = rng()<.5?'rgba(255,255,255,.035)':'rgba(40,0,0,.05)'; ell(ctx,bx,by,br,br*(.6+rng()*.6),rng()*3); ctx.fill(); }
  blurOff(ctx);
  if(duod){ for(let i=0;i<6;i++){ const y=cy-R*.95+i*R*.36+(rng()-.5)*R*.05; wavyFold(ctx,cx,y,R,rng,pal); } }
  else if(spec.s!=='esd' || true){ const n=spec.s==='chol'?3:5; for(let i=0;i<n;i++){ const rr=R*(.13+i*.2+rng()*.05); foldRing(ctx,lx,ly,rr,rng,pal,R); } }
  const nv = (pal===PAL.nbi||pal===PAL.bli) ? 34 : 22;
  for(let i=0;i<nv;i++) vessel(ctx,g,lx,ly,rng,pal,R,1);
  if(duod) papilla(ctx,cx+R*.04,cy+R*.14,R*.22,rng,pal);
  if(x==='polyp'||x==='cade'){ const a=rng()*TAU, d=R*(.42+rng()*.16); polyp(ctx,cx+Math.cos(a)*d*.9,cy+Math.sin(a)*d*.8,R*(.12+rng()*.05),rng,pal,x==='cade'); }
  if(x==='varix') varices(ctx,g,lx,ly,rng);
  if(spec.s==='esd') esdField(ctx,g,rng);
  if(x==='blood') blood(ctx,g,rng);
  speculars(ctx,g,lx,ly,rng,pal, duod?9:13);
  if(x==='knife') knife(ctx,g);
  vignette(ctx,g);
}
function foldRing(ctx,lx,ly,rr,rng,pal,R){
  const n=64, ph=rng()*TAU, ph2=rng()*TAU, k=2+Math.floor(rng()*3), amp=.05+rng()*.08, sq=.78+rng()*.36, rot=rng()*TAU, c=Math.cos(rot), s=Math.sin(rot);
  const pts=[];
  for(let i=0;i<=n;i++){ const a=i/n*TAU, r=rr*(1+amp*Math.sin(k*a+ph)+amp*.5*Math.sin((k+3)*a+ph2)); const x=Math.cos(a)*r, y=Math.sin(a)*r*sq; pts.push([lx+x*c-y*s, ly+x*s+y*c]); }
  const path=(sc)=>{ ctx.beginPath(); pts.forEach((p,i)=>{ const X=lx+(p[0]-lx)*sc, Y=ly+(p[1]-ly)*sc; i?ctx.lineTo(X,Y):ctx.moveTo(X,Y); }); };
  blurOn(ctx,R*.018); path(.97); ctx.lineWidth=R*.055; ctx.strokeStyle='rgba(0,0,0,.2)'; ctx.stroke();
  blurOn(ctx,R*.012); path(1.02); ctx.lineWidth=R*.03; ctx.strokeStyle=pal.f+'.16)'; ctx.stroke();
  blurOff(ctx); path(1.025); ctx.lineWidth=Math.max(.6,R*.007); ctx.strokeStyle=pal.f+'.2)'; ctx.stroke();
}
function wavyFold(ctx,cx,y,R,rng,pal){
  const ph=rng()*TAU, a=R*(.03+rng()*.03), pts=[];
  for(let i=0;i<=40;i++){ const x=cx-R*1.3+i/40*R*2.6; pts.push([x,y+Math.sin(i*.35+ph)*a+Math.sin(i*.9+ph)*a*.3]); }
  const path=(dy)=>{ ctx.beginPath(); pts.forEach((p,i)=> i?ctx.lineTo(p[0],p[1]+dy):ctx.moveTo(p[0],p[1]+dy)); };
  blurOn(ctx,R*.02); path(R*.03); ctx.lineWidth=R*.07; ctx.strokeStyle='rgba(30,0,0,.2)'; ctx.stroke();
  blurOn(ctx,R*.012); path(0); ctx.lineWidth=R*.035; ctx.strokeStyle=pal.f+'.15)'; ctx.stroke();
  blurOff(ctx);
}
function vessel(ctx,g,lx,ly,rng,pal,R,depth){
  let x,y;
  for(let t=0;t<8;t++){ const a=rng()*TAU, d=R*(.3+rng()*.75); x=g.cx+Math.cos(a)*d; y=g.cy+Math.sin(a)*d; if(Math.hypot(x-lx,y-ly)>R*.38) break; }
  vesselFrom(ctx,x,y,rng()*TAU,R*(.0035+rng()*.006),14+(rng()*24|0),.22+rng()*.35,rng,pal,R,depth);
}
function vesselFrom(ctx,x,y,dir,w,steps,al,rng,pal,R,depth){
  ctx.strokeStyle=pal.v+al+')'; ctx.lineWidth=Math.max(.5,w); ctx.lineCap='round'; ctx.beginPath(); ctx.moveTo(x,y);
  const br=[];
  for(let i=0;i<steps;i++){ dir+=(rng()-.5)*.85; x+=Math.cos(dir)*R*.022; y+=Math.sin(dir)*R*.022; ctx.lineTo(x,y); if(depth>0 && rng()<.12) br.push([x,y,dir+(rng()<.5?-1:1)*(.5+rng()*.6)]); }
  ctx.stroke();
  br.forEach(b=>vesselFrom(ctx,b[0],b[1],b[2],w*.6,6+(rng()*10|0),al*.8,rng,pal,R,depth-1));
}
function speculars(ctx,g,lx,ly,rng,pal,n){
  const {R}=g;
  for(let i=0;i<n;i++){
    const a=rng()*TAU, d=R*(.18+rng()*.72), x=lx+Math.cos(a)*d, y=ly+Math.sin(a)*d*.9, r=R*(.006+rng()*.028);
    const gr=ctx.createRadialGradient(x,y,0,x,y,r*2.4); gr.addColorStop(0,`rgba(${pal.hl},.95)`); gr.addColorStop(.35,`rgba(${pal.hl},.45)`); gr.addColorStop(1,`rgba(${pal.hl},0)`);
    ctx.fillStyle=gr; ell(ctx,x,y,r*2.4*(1+rng()*1.6),r*2.4,a+Math.PI/2); ctx.fill();
  }
  for(let i=0;i<n*2;i++){ const x=g.cx+(rng()-.5)*R*1.7, y=g.cy+(rng()-.5)*R*1.7, r=Math.max(.6,R*(.002+rng()*.004)); ctx.fillStyle=`rgba(${pal.hl},${.5+rng()*.4})`; ell(ctx,x,y,r,r); ctx.fill(); }
}
function vignette(ctx,g){
  const vg=ctx.createRadialGradient(g.cx,g.cy,g.R*.6,g.cx,g.cy,g.R*1.02);
  vg.addColorStop(0,'rgba(0,0,0,0)'); vg.addColorStop(1,'rgba(0,0,0,.8)');
  ctx.fillStyle=vg; ctx.fillRect(g.cx-g.R*1.5,g.cy-g.R*1.5,g.R*3,g.R*3);
}
function papilla(ctx,x,y,r,rng,pal){
  blurOn(ctx,r*.2); ctx.fillStyle='rgba(50,6,4,.4)'; ell(ctx,x,y+r*.3,r*1.2,r*.85); ctx.fill(); blurOff(ctx);
  // hooding fold
  blurOn(ctx,r*.06); ctx.lineCap='round'; ctx.lineWidth=r*.28; ctx.strokeStyle=pal.f+'.16)'; ctx.beginPath(); ctx.ellipse(x,y-r*.35,r*1.25,r*.7,0,Math.PI*1.08,Math.PI*1.92); ctx.stroke(); blurOff(ctx);
  const gr=ctx.createRadialGradient(x-r*.25,y-r*.4,r*.05,x,y,r*1.05);
  gr.addColorStop(0,'#f8c2a4'); gr.addColorStop(.45,pal.e); gr.addColorStop(.8,pal.p); gr.addColorStop(1,pal.m);
  ctx.fillStyle=gr; ell(ctx,x,y,r,r*.84); ctx.fill();
  for(let i=0;i<70;i++){ const a=rng()*TAU, d=Math.sqrt(rng())*r*.9; ctx.fillStyle=`rgba(255,225,205,${.08+rng()*.12})`; ell(ctx,x+Math.cos(a)*d,y+Math.sin(a)*d*.84,Math.max(.5,r*.025),Math.max(.5,r*.025)); ctx.fill(); }
  const o=ctx.createRadialGradient(x,y-r*.36,0,x,y-r*.36,r*.24); o.addColorStop(0,'rgba(22,2,2,.95)'); o.addColorStop(.6,'rgba(60,8,8,.55)'); o.addColorStop(1,'rgba(70,10,8,0)');
  ctx.fillStyle=o; ell(ctx,x,y-r*.36,r*.26,r*.15); ctx.fill();
  blurOn(ctx,r*.05); ctx.lineWidth=r*.16; ctx.strokeStyle=pal.f+'.16)'; ctx.beginPath(); ctx.moveTo(x,y+r*.75); ctx.quadraticCurveTo(x+r*.12,y+r*1.4,x-r*.05,y+r*2.2); ctx.stroke(); blurOff(ctx);
  const h=ctx.createRadialGradient(x-r*.35,y-r*.2,0,x-r*.35,y-r*.2,r*.22); h.addColorStop(0,'rgba(255,250,245,.9)'); h.addColorStop(1,'rgba(255,250,245,0)');
  ctx.fillStyle=h; ell(ctx,x-r*.35,y-r*.2,r*.3,r*.16,-.4); ctx.fill();
}
function polyp(ctx,x,y,r,rng,pal,box){
  blurOn(ctx,r*.25); ctx.fillStyle='rgba(40,4,4,.45)'; ell(ctx,x+r*.12,y+r*.3,r*1.15,r*.8); ctx.fill(); blurOff(ctx);
  const gr=ctx.createRadialGradient(x-r*.3,y-r*.35,r*.05,x,y,r*1.05);
  gr.addColorStop(0,'#fbcdb2'); gr.addColorStop(.5,pal.e); gr.addColorStop(.85,pal.p); gr.addColorStop(1,pal.m);
  ctx.fillStyle=gr; ell(ctx,x,y,r,r*.9); ctx.fill();
  for(let i=0;i<90;i++){ const a=rng()*TAU, d=Math.sqrt(rng())*r*.88; ctx.fillStyle=`rgba(110,25,25,${.1+rng()*.18})`; ell(ctx,x+Math.cos(a)*d,y+Math.sin(a)*d*.9,Math.max(.5,r*.03),Math.max(.5,r*.022),a); ctx.fill(); }
  const h=ctx.createRadialGradient(x-r*.35,y-r*.38,0,x-r*.35,y-r*.38,r*.3); h.addColorStop(0,'rgba(255,252,248,.95)'); h.addColorStop(1,'rgba(255,252,248,0)');
  ctx.fillStyle=h; ell(ctx,x-r*.35,y-r*.38,r*.34,r*.18,-.5); ctx.fill();
  if(box){
    ctx.strokeStyle='#3BE37F'; ctx.lineWidth=Math.max(1.5,r*.07); ctx.strokeRect(x-r*1.4,y-r*1.3,r*2.8,r*2.6);
    ctx.fillStyle='#3BE37F'; ctx.font=`600 ${Math.max(8,r*.32)}px "JetBrains Mono",monospace`; ctx.textBaseline='bottom'; ctx.fillText('CADe 0.94',x-r*1.4,y-r*1.36);
  }
}
function varices(ctx,g,lx,ly,rng){
  const {R}=g;
  for(let i=0;i<4;i++){
    const a0=i/4*TAU+rng()*.7, pts=[];
    for(let k=0;k<=24;k++){ const d=R*(.12+k/24*1.05), a=a0+Math.sin(k*.6+i)*.08; pts.push([lx+Math.cos(a)*d,ly+Math.sin(a)*d]); }
    const path=(o)=>{ ctx.beginPath(); pts.forEach((p,j)=> j?ctx.lineTo(p[0]+o,p[1]+o):ctx.moveTo(p[0]+o,p[1]+o)); };
    blurOn(ctx,R*.02); path(R*.02); ctx.lineCap='round'; ctx.lineWidth=R*.13; ctx.strokeStyle='rgba(20,0,10,.25)'; ctx.stroke();
    blurOn(ctx,R*.012); path(0); ctx.lineWidth=R*.11; ctx.strokeStyle='rgba(104,112,172,.62)'; ctx.stroke();
    blurOff(ctx); path(-R*.02); ctx.lineWidth=R*.025; ctx.strokeStyle='rgba(205,218,255,.35)'; ctx.stroke();
    if(i===1) for(let k=6;k<20;k+=4){ ctx.fillStyle='rgba(200,30,40,.75)'; ell(ctx,pts[k][0],pts[k][1],R*.014,R*.01); ctx.fill(); }
  }
}
function esdField(ctx,g,rng){
  const {cx,cy,R}=g, ex=cx-R*.04, ey=cy+R*.1, rx=R*.5, ry=R*.36;
  ctx.fillStyle='rgba(255,196,170,.14)'; ell(ctx,ex,ey,rx,ry); ctx.fill();
  ctx.save(); ell(ctx,ex,ey+ry*.12,rx*1.04,ry*.92); ctx.clip();
  ctx.beginPath(); ctx.moveTo(ex-rx*1.2,ey+ry*1.2);
  for(let i=0;i<=20;i++){ const x=ex-rx*1.2+i/20*rx*2.4; ctx.lineTo(x,ey-ry*.05+Math.sin(i*.8)*ry*.08); }
  ctx.lineTo(ex+rx*1.2,ey+ry*1.2); ctx.closePath();
  const bg=ctx.createLinearGradient(ex,ey,ex,ey+ry); bg.addColorStop(0,'#2a66b0'); bg.addColorStop(.5,'#5ea5e2'); bg.addColorStop(1,'#b6dcf6');
  ctx.fillStyle=bg; ctx.fill();
  for(let i=0;i<34;i++){ const y=ey+ry*(.05+rng()*.85), x0=ex-rx*1.1, ph=rng()*TAU; ctx.beginPath(); for(let k=0;k<=12;k++){ const x=x0+k/12*rx*2.2; const yy=y+Math.sin(k*.7+ph)*ry*.05; k?ctx.lineTo(x,yy):ctx.moveTo(x,yy); } ctx.strokeStyle=`rgba(255,255,255,${.12+rng()*.28})`; ctx.lineWidth=Math.max(.5,R*(.002+rng()*.004)); ctx.stroke(); }
  for(let i=0;i<5;i++) vesselFrom(ctx,ex+(rng()-.5)*rx*1.6,ey+ry*(.3+rng()*.5),rng()*TAU,R*.006,10,.5,rng,{v:'rgba(110,30,90,'},R,0);
  ctx.restore();
  ctx.beginPath(); for(let i=0;i<=20;i++){ const x=ex-rx+i/20*rx*2; const y=ey-ry*.05+Math.sin(i*.8)*ry*.08; i?ctx.lineTo(x,y):ctx.moveTo(x,y); }
  ctx.strokeStyle='rgba(120,20,30,.7)'; ctx.lineWidth=R*.014; ctx.stroke(); ctx.strokeStyle='rgba(255,240,230,.5)'; ctx.lineWidth=Math.max(.6,R*.004); ctx.stroke();
  for(let i=0;i<12;i++){ const a=i/12*TAU+rng()*.12, x=ex+Math.cos(a)*rx*1.2, y=ey+Math.sin(a)*ry*1.22, r=R*.026; const m=ctx.createRadialGradient(x,y,0,x,y,r); m.addColorStop(0,'rgba(255,252,240,.95)'); m.addColorStop(.6,'rgba(235,215,180,.8)'); m.addColorStop(1,'rgba(120,60,30,0)'); ctx.fillStyle=m; ell(ctx,x,y,r,r); ctx.fill(); }
}
function blood(ctx,g,rng){
  const {cx,cy,R}=g, ux=cx-R*.14, uy=cy+R*.1, ur=R*.17;
  const rim=ctx.createRadialGradient(ux,uy,ur*.6,ux,uy,ur*1.5); rim.addColorStop(0,'rgba(150,20,20,.8)'); rim.addColorStop(1,'rgba(150,20,20,0)');
  ctx.fillStyle=rim; ell(ctx,ux,uy,ur*1.5,ur*1.25); ctx.fill();
  const b=ctx.createRadialGradient(ux-ur*.2,uy-ur*.2,0,ux,uy,ur); b.addColorStop(0,'#f2ead6'); b.addColorStop(.7,'#d9c9a6'); b.addColorStop(1,'#a2704f');
  ctx.fillStyle=b; ell(ctx,ux,uy,ur,ur*.8); ctx.fill();
  const vx=ux+ur*.15, vy=uy-ur*.05;
  ctx.fillStyle='#4d0606'; ell(ctx,vx,vy,ur*.2,ur*.17); ctx.fill();
  for(let i=0;i<10;i++){ ctx.strokeStyle=`rgba(${190+rng()*50|0},${10+rng()*25|0},18,${.45+rng()*.45})`; ctx.lineWidth=Math.max(.6,R*(.004+rng()*.012)); ctx.lineCap='round'; ctx.beginPath(); ctx.moveTo(vx,vy); ctx.quadraticCurveTo(vx+(rng()-.5)*R*.7,vy-R*(.45+rng()*.4),vx+(rng()-.35)*R*1.1,vy-R*(.15+rng()*.95)); ctx.stroke(); }
  for(let i=0;i<6;i++){ ctx.strokeStyle='rgba(120,6,6,.55)'; ctx.lineWidth=R*(.01+rng()*.02); ctx.beginPath(); const sx=ux+(rng()-.5)*ur*1.6; ctx.moveTo(sx,uy+ur*.6); ctx.bezierCurveTo(sx+(rng()-.5)*R*.2,uy+R*.3,sx,uy+R*.5,sx+(rng()-.5)*R*.3,cy+R*.75); ctx.stroke(); }
  const p=ctx.createLinearGradient(0,cy+R*.5,0,cy+R*1.05); p.addColorStop(0,'#7c0707'); p.addColorStop(1,'#2a0101');
  ctx.fillStyle=p; ell(ctx,cx,cy+R*.82,R*.95,R*.34); ctx.fill();
  for(let i=0;i<5;i++){ const x=cx+(rng()-.5)*R*1.2, y=cy+R*(.66+rng()*.15); ctx.fillStyle=`rgba(255,220,220,${.35+rng()*.4})`; ell(ctx,x,y,R*(.01+rng()*.03),R*.006,0); ctx.fill(); }
}
function knife(ctx,g){
  const {cx,cy,R}=g, x0=cx+R*1.0, y0=cy+R*.92, x1=cx+R*.2, y1=cy+R*.24;
  ctx.lineCap='round';
  ctx.strokeStyle='#17212c'; ctx.lineWidth=R*.09; ctx.beginPath(); ctx.moveTo(x0,y0); ctx.lineTo(x1,y1); ctx.stroke();
  ctx.strokeStyle='rgba(170,196,220,.35)'; ctx.lineWidth=R*.016; ctx.beginPath(); ctx.moveTo(x0-R*.03,y0-R*.035); ctx.lineTo(x1-R*.02,y1-R*.025); ctx.stroke();
  ctx.strokeStyle='#dbe2ea'; ctx.lineWidth=Math.max(1,R*.016); ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x1-R*.1,y1-R*.085); ctx.stroke();
  ctx.strokeStyle='rgba(255,255,255,.07)'; ctx.lineWidth=R*.06; ctx.beginPath(); ctx.arc(cx,cy,R*.93,0,TAU); ctx.stroke();
}

/* ---------- POEM tunnel ---------- */
function drawTunnel(ctx,g,rng){
  const {cx,cy,R}=g, tx=cx+R*.05, ty=cy-R*.08;
  const gr=ctx.createRadialGradient(tx,ty,R*.01,tx,ty,R*1.3);
  gr.addColorStop(0,'#02060c'); gr.addColorStop(.1,'#0b2236'); gr.addColorStop(.34,'#2e6a9a'); gr.addColorStop(.7,'#91c2df'); gr.addColorStop(1,'#d9edf6');
  ctx.fillStyle=gr; ctx.fillRect(cx-R*1.4,cy-R*1.4,R*2.8,R*2.8);
  ctx.save(); ctx.beginPath(); ctx.moveTo(cx-R*1.4,cy+R*1.4);
  for(let i=0;i<=24;i++){ const x=cx-R*1.4+i/24*R*2.8; ctx.lineTo(x,cy+R*.42+Math.sin(i*.5)*R*.05); }
  ctx.lineTo(cx+R*1.4,cy+R*1.4); ctx.closePath(); ctx.clip();
  const m=ctx.createLinearGradient(0,cy+R*.4,0,cy+R); m.addColorStop(0,'#b26260'); m.addColorStop(1,'#6e3436'); ctx.fillStyle=m; ctx.fillRect(cx-R*1.4,cy+R*.3,R*2.8,R*1.2);
  for(let i=0;i<22;i++){ const y=cy+R*(.45+i*.028); ctx.beginPath(); for(let k=0;k<=20;k++){ const x=cx-R*1.4+k/20*R*2.8; const yy=y+Math.sin(k*.6+i)*R*.008; k?ctx.lineTo(x,yy):ctx.moveTo(x,yy); } ctx.strokeStyle=i%2?'rgba(255,215,205,.14)':'rgba(60,10,15,.18)'; ctx.lineWidth=R*.01; ctx.stroke(); }
  ctx.restore();
  blurOn(ctx,R*.004);
  for(let i=0;i<80;i++){ const a=rng()*TAU, d=R*(.12+rng()*.9), x=tx+Math.cos(a)*d, y=ty+Math.sin(a)*d*.8; const len=R*(.15+rng()*.5), ang=a+Math.PI/2+(rng()-.5)*.8; ctx.beginPath(); ctx.moveTo(x-Math.cos(ang)*len/2,y-Math.sin(ang)*len/2); ctx.quadraticCurveTo(x+(rng()-.5)*R*.1,y+(rng()-.5)*R*.1,x+Math.cos(ang)*len/2,y+Math.sin(ang)*len/2); ctx.strokeStyle=`rgba(255,255,255,${.08+rng()*.3})`; ctx.lineWidth=Math.max(.5,R*(.002+rng()*.006)); ctx.stroke(); }
  blurOff(ctx);
  for(let i=0;i<6;i++) vesselFrom(ctx,cx+(rng()-.5)*R*1.4,cy+(rng()-.5)*R*.8,rng()*TAU,R*.006,12,.45,rng,{v:'rgba(110,40,110,'},R,1);
  ctx.fillStyle='rgba(30,100,190,.07)'; ctx.fillRect(cx-R*1.4,cy-R*1.4,R*2.8,R*2.8);
  speculars(ctx,g,tx,ty,rng,{hl:'240,250,255'},8);
  knife(ctx,g); vignette(ctx,g);
}

/* ---------- EUS (per-pixel) ---------- */
function drawEUS(ctx,W,H,g,rng,spec){
  const e=eusGeom(g), {ax,ay,RR,half}=e;
  const x0=Math.max(0,Math.floor(ax-RR)), x1=Math.min(W,Math.ceil(ax+RR)), y0=Math.max(0,Math.floor(ay)), y1=Math.min(H,Math.ceil(ay+RR));
  const w=x1-x0, h=y1-y0; if(w<2||h<2) return;
  const oc=document.createElement('canvas'); oc.width=w; oc.height=h; const oct=oc.getContext('2d'); const img=oct.createImageData(w,h); const d=img.data;
  const n1=noiseGrid(rng,40,40), n2=noiseGrid(rng,140,140), n3=noiseGrid(rng,12,12);
  const polar=(rn,th)=>[ax+Math.sin(th)*rn*RR, ay+Math.cos(th)*rn*RR];
  const [mx,my]=polar(.5,-.14), mrx=RR*.15, mry=RR*.1;
  const cyst = (spec.sd||0)%2===1; const [qx,qy]=polar(.34,.4), qr=RR*.07;
  const vcx=ax-RR*.95, vcy=ay+RR*1.2, vr=RR*.98;
  const needle = spec.x==='needle'; const [nx0,ny0]=polar(.08,.62); const nx1=mx+mrx*.2, ny1=my-mry*.1;
  const ndx=nx1-nx0, ndy=ny1-ny0, nl2=ndx*ndx+ndy*ndy, px=Math.max(1,W/700);
  for(let j=0;j<h;j++){ const y=y0+j;
    for(let i=0;i<w;i++){ const x=x0+i, dx=x-ax, dy=y-ay, r=Math.hypot(dx,dy), o=(j*w+i)*4;
      if(r>RR||dy<0){ d[o+3]=0; continue; }
      const th=Math.atan2(dx,dy); if(Math.abs(th)>half){ d[o+3]=0; continue; }
      const rn=r/RR, u=x/W, v=y/H; let val;
      if(rn<.045) val=.05+.06*rng();
      else if(rn<.13){ const k=Math.min(4,Math.floor((rn-.045)/.085*5)); val=[.9,.18,.85,.22,.7][k]*(.8+.35*rng()); }
      else { val=.3+.34*(sampleN(n1,u,v)-.5)*1.7+.16*(sampleN(n2,u,v)-.5); val*=.62+.72*rng(); }
      let em=((x-mx)/mrx)**2+((y-my)/mry)**2; em*=1+.5*(sampleN(n3,u,v)-.5);
      if(em<1) val*=.28+.22*em;
      if(cyst){ const qd=Math.hypot(x-qx,y-qy); if(qd<qr) val=.02+.05*rng(); else if(qd<qr*1.12) val=Math.max(val,.75); else if(Math.abs(x-qx)<qr*.9 && y>qy && y<qy+qr*3) val*=1.35; }
      const vd=Math.abs(Math.hypot(x-vcx,y-vcy)-vr);
      if(vd<RR*.022) val=.03+.04*rng(); else if(vd<RR*.03) val=Math.max(val,.82*(.8+.3*rng()));
      if(needle){ const t=Math.max(0,Math.min(1,((x-nx0)*ndx+(y-ny0)*ndy)/nl2)); const nd=Math.hypot(x-(nx0+t*ndx),y-(ny0+t*ndy)); if(nd<1.4*px) val=1; else if(nd<3.5*px) val=Math.max(val,.55+.3*rng()); }
      val*=1-rn*.42;
      const edge=half-Math.abs(th); if(edge<.05) val*=edge/.05;
      val=Math.max(0,Math.min(1,val)); val=Math.pow(val,.92);
      d[o]=val*226+6; d[o+1]=val*232+8; d[o+2]=val*242+12; d[o+3]=255;
    }
  }
  oct.putImageData(img,0,0); ctx.drawImage(oc,x0,y0);
  ctx.fillStyle='rgba(200,225,245,.75)'; const fs=Math.max(7,H*.028); ctx.font=`500 ${fs}px "JetBrains Mono",monospace`; ctx.textBaseline='middle';
  for(let c=1;c<=8;c++){ const rn=c/8.6, th=half-.035; const [tx,ty]=polar(rn,th); ctx.fillRect(tx-px*3,ty-px*.6,px*6,px*1.2); }
  const [fx,fy]=polar(.5,half-.07); ctx.beginPath(); ctx.moveTo(fx,fy); ctx.lineTo(fx+px*6,fy-px*4); ctx.lineTo(fx+px*6,fy+px*4); ctx.closePath(); ctx.fill();
}

/* ---------- intestinal ultrasound ---------- */
function drawUS(ctx,W,H,g,rng){
  const rc=usRect(g), x0=Math.max(0,rc.x|0), y0=Math.max(0,rc.y|0), w=Math.min(W,Math.ceil(rc.x+rc.w))-x0, h=Math.min(H,Math.ceil(rc.y+rc.h))-y0;
  const oc=document.createElement('canvas'); oc.width=w; oc.height=h; const oct=oc.getContext('2d'); const img=oct.createImageData(w,h), d=img.data;
  const n1=noiseGrid(rng,36,24), n2=noiseGrid(rng,120,80);
  const bx=w*.56, by=h*.6, brx=w*.36, bry=h*.17;
  for(let j=0;j<h;j++){ const dep=j/h;
    for(let i=0;i<w;i++){ const o=(j*w+i)*4, u=i/w, v=j/h; let val;
      const tex=sampleN(n1,u,v), sp=sampleN(n2,u,v);
      if(dep<.018) val=.9;
      else if(dep<.2) val=.2+.22*tex+.12*Math.max(0,Math.sin(i*.035+tex*9)*Math.sin(j*.4))*2;
      else if(dep<.33) val=.38+.28*Math.max(0,Math.sin(j*1.1+tex*5))+.08*sp;
      else val=.24+.2*tex+.12*sp;
      val*=.65+.6*rng();
      const e=Math.sqrt(((i-bx)/brx)**2+((j-by)/bry)**2);
      if(e<1){ if(e>.95) val=.85; else if(e>.85) val=.16; else if(e>.68) val=.72*(.85+.3*rng()); else if(e>.62) val=.18; else val=.07+.05*rng(); if(e<.62 && j<by-bry*.45 && j>by-bry*.62) val=.95; }
      if(Math.abs(i-bx)<brx*.4 && j>by+bry*.62 && j<by+bry*2.4) val*=.55;
      val*=1-dep*.35; val=Math.max(0,Math.min(1,val));
      d[o]=d[o+1]=d[o+2]=val*238+6; d[o+3]=255;
    }
  }
  oct.putImageData(img,0,0); ctx.drawImage(oc,x0,y0);
  for(let i=0;i<9;i++){ const a=rng()*TAU, e=.72+rng()*.12, x=x0+bx+Math.cos(a)*brx*e, y=y0+by+Math.sin(a)*bry*e, r=Math.max(1,W*.006+rng()*W*.006); ctx.fillStyle=rng()<.7?'rgba(235,70,40,.85)':'rgba(60,130,240,.85)'; ell(ctx,x,y,r*1.4,r,a); ctx.fill(); }
  ctx.fillStyle='rgba(200,225,245,.7)'; for(let c=1;c<=6;c++){ ctx.fillRect(x0+w-6,y0+h*c/6.3,5,1.2); }
}

/* ---------- fluoroscopy ---------- */
function drawFluoro(ctx,W,H,g,rng,spec){
  const {cx,cy,R}=g;
  const bg=ctx.createRadialGradient(cx,cy,R*.1,cx,cy,R*1.5); bg.addColorStop(0,'#bdbdbd'); bg.addColorStop(.55,'#8d8d8d'); bg.addColorStop(1,'#3a3a3a');
  ctx.fillStyle=bg; ctx.fillRect(cx-R*1.6,cy-R*1.6,R*3.2,R*3.2);
  blurOn(ctx,R*.08); for(let i=0;i<10;i++){ ctx.fillStyle=rng()<.5?'rgba(255,255,255,.06)':'rgba(0,0,0,.07)'; ell(ctx,cx+(rng()-.5)*R*2,cy+(rng()-.5)*R*2,R*(.2+rng()*.4),R*(.15+rng()*.3),rng()*3); ctx.fill(); } blurOff(ctx);
  blurOn(ctx,R*.02);
  for(let i=-1;i<6;i++){ const y=cy-R*1.05+i*R*.4, x=cx+R*.62; ctx.fillStyle='rgba(55,55,55,.3)'; ctx.beginPath(); roundRect(ctx,x-R*.2,y,R*.4,R*.32,R*.06); ctx.fill(); ctx.strokeStyle='rgba(30,30,30,.3)'; ctx.lineWidth=R*.012; ctx.stroke(); ctx.fillStyle='rgba(40,40,40,.25)'; ell(ctx,x-R*.13,y+R*.16,R*.05,R*.07); ctx.fill(); ell(ctx,x+R*.13,y+R*.16,R*.05,R*.07); ctx.fill(); }
  ctx.strokeStyle='rgba(40,40,40,.16)'; ctx.lineWidth=R*.06; for(let i=0;i<3;i++){ ctx.beginPath(); ctx.arc(cx+R*.7,cy-R*1.6+i*R*.32,R*1.1,Math.PI*.55,Math.PI*.95); ctx.stroke(); }
  blurOff(ctx);
  const P0=[cx-R*.02,cy+R*.32];
  ctx.lineCap='round';
  const scope=()=>{ ctx.beginPath(); ctx.moveTo(cx-R*1.3,cy-R*.95); ctx.quadraticCurveTo(cx-R*.55,cy-R*.4,cx-R*.48,cy+R*.15); ctx.quadraticCurveTo(cx-R*.42,cy+R*.62,cx-R*.08,cy+R*.5); };
  scope(); ctx.strokeStyle='rgba(24,24,24,.92)'; ctx.lineWidth=R*.13; ctx.stroke();
  ctx.setLineDash([R*.012,R*.03]); scope(); ctx.strokeStyle='rgba(255,255,255,.09)'; ctx.lineWidth=R*.11; ctx.stroke(); ctx.setLineDash([]);
  const stones=spec.x==='stones', wC=stones?R*.095:R*.058;
  const top=[cx+R*.14,cy-R*.36];
  ctx.strokeStyle='rgba(22,22,22,.86)'; ctx.lineWidth=wC; ctx.beginPath(); ctx.moveTo(P0[0],P0[1]); ctx.bezierCurveTo(cx+R*.06,cy+R*.1,cx+R*.02,cy-R*.1,top[0],top[1]); ctx.stroke();
  const duct=(x,y,ang,len,w,dep)=>{ const ex=x+Math.cos(ang)*len, ey=y+Math.sin(ang)*len, mx=(x+ex)/2+(rng()-.5)*len*.3, my=(y+ey)/2+(rng()-.5)*len*.3; ctx.lineWidth=w; ctx.beginPath(); ctx.moveTo(x,y); ctx.quadraticCurveTo(mx,my,ex,ey); ctx.stroke(); if(dep>0){ duct(ex,ey,ang-.35-rng()*.4,len*.62,w*.66,dep-1); duct(ex,ey,ang+.3+rng()*.4,len*.58,w*.62,dep-1); } };
  duct(top[0],top[1],-Math.PI/2+.55,R*.42,wC*.75,2);
  duct(top[0],top[1],-Math.PI/2-.75,R*.4,wC*.7,2);
  if((spec.sd||0)%3===0 && !stones){ ctx.lineWidth=R*.03; ctx.beginPath(); ctx.moveTo(cx+R*.07,cy-R*.02); ctx.quadraticCurveTo(cx+R*.3,cy-R*.05,cx+R*.42,cy+R*.05); ctx.stroke(); ctx.fillStyle='rgba(40,40,40,.55)'; ell(ctx,cx+R*.55,cy+R*.12,R*.16,R*.26,-.6); ctx.fill(); }
  ctx.strokeStyle='rgba(8,8,8,.95)'; ctx.lineWidth=Math.max(1,R*.009); ctx.beginPath(); ctx.moveTo(cx-R*.1,cy+R*.48); ctx.lineTo(P0[0],P0[1]); ctx.bezierCurveTo(cx+R*.06,cy+R*.1,cx+R*.02,cy-R*.1,top[0],top[1]); ctx.quadraticCurveTo(cx+R*.3,cy-R*.6,cx+R*.38,cy-R*.86); ctx.stroke();
  if(stones){ blurOn(ctx,R*.008); [[.06,.02,.042,.03],[.08,-.16,.038,.028],[.11,-.29,.03,.024]].forEach(s=>{ ctx.fillStyle='rgba(176,176,176,.95)'; ell(ctx,cx+R*s[0],cy+R*s[1],R*s[2],R*s[3],.4); ctx.fill(); }); blurOff(ctx); }
  grain(ctx,cx-R*1.3,cy-R*1.1,R*2.6,R*2.2,rng,.13);
  const vg=ctx.createRadialGradient(cx,cy,R*.7,cx,cy,R*1.35); vg.addColorStop(0,'rgba(0,0,0,0)'); vg.addColorStop(1,'rgba(0,0,0,.7)'); ctx.fillStyle=vg; ctx.fillRect(cx-R*1.6,cy-R*1.6,R*3.2,R*3.2);
}
let GRAIN=null;
function grainTile(){ if(GRAIN) return GRAIN; const c=document.createElement('canvas'); c.width=c.height=160; const x=c.getContext('2d'), im=x.createImageData(160,160); const r=mulberry(42); for(let i=0;i<im.data.length;i+=4){ const v=r()*255; im.data[i]=im.data[i+1]=im.data[i+2]=v; im.data[i+3]=255; } x.putImageData(im,0,0); GRAIN=c; return c; }
function grain(ctx,x,y,w,h,rng,al,ox=0,oy=0){ const t=grainTile(); ctx.save(); ctx.globalAlpha=al; ctx.globalCompositeOperation='overlay'; const p=ctx.createPattern(t,'repeat'); ctx.translate(ox,oy); ctx.fillStyle=p; ctx.fillRect(x-ox,y-oy,w,h); ctx.restore(); }

/* ---------- laparoscopy ---------- */
function drawLap(ctx,W,H,g,rng){
  const bg=ctx.createRadialGradient(W*.5,H*.55,H*.1,W*.5,H*.55,W*.7); bg.addColorStop(0,'#d58a6e'); bg.addColorStop(1,'#7e3429'); ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);
  ctx.beginPath(); ctx.moveTo(-10,-10); ctx.lineTo(W+10,-10); ctx.lineTo(W+10,H*.3);
  for(let i=20;i>=0;i--){ const x=i/20*W; ctx.lineTo(x,H*(.36+Math.sin(i*.7)*.04+(i/20)*.06)); }
  ctx.closePath(); const lv=ctx.createLinearGradient(0,0,0,H*.45); lv.addColorStop(0,'#4f1512'); lv.addColorStop(1,'#8f3326'); ctx.fillStyle=lv; ctx.fill();
  for(let i=0;i<6;i++){ const x=W*(.1+rng()*.8), y=H*(.08+rng()*.22), r=W*(.02+rng()*.03); const gr=ctx.createRadialGradient(x,y,0,x,y,r); gr.addColorStop(0,'rgba(255,240,235,.45)'); gr.addColorStop(1,'rgba(255,240,235,0)'); ctx.fillStyle=gr; ell(ctx,x,y,r,r*.35,(rng()-.5)*.6); ctx.fill(); }
  const gx=W*.56, gy=H*.5; const gb=ctx.createRadialGradient(gx-W*.04,gy-H*.06,H*.02,gx,gy,H*.3); gb.addColorStop(0,'#e3e8c6'); gb.addColorStop(.6,'#a7b98a'); gb.addColorStop(1,'#62774f');
  ctx.fillStyle=gb; ell(ctx,gx,gy,W*.15,H*.2,-.55); ctx.fill();
  for(let i=0;i<8;i++) vesselFrom(ctx,gx+(rng()-.5)*W*.15,gy+(rng()-.5)*H*.2,rng()*TAU,H*.004,10,.5,rng,{v:'rgba(150,40,40,'},H*.5,1);
  for(let i=0;i<9;i++){ const x=W*(.05+rng()*.35), y=H*(.62+rng()*.35), r=H*(.05+rng()*.08); const f=ctx.createRadialGradient(x-r*.3,y-r*.3,0,x,y,r); f.addColorStop(0,'#fbe6a2'); f.addColorStop(1,'#c99a44'); ctx.fillStyle=f; ell(ctx,x,y,r,r*.85); ctx.fill(); }
  const tool=(x0,y0,x1,y1,jaw)=>{ const lg=ctx.createLinearGradient(x0,y0-H*.04,x0,y0+H*.04); ctx.lineCap='round'; ctx.strokeStyle='#3d444b'; ctx.lineWidth=H*.075; ctx.beginPath(); ctx.moveTo(x0,y0); ctx.lineTo(x1,y1); ctx.stroke(); ctx.strokeStyle='rgba(230,236,242,.45)'; ctx.lineWidth=H*.012; ctx.beginPath(); ctx.moveTo(x0,y0-H*.02); ctx.lineTo(x1,y1-H*.02); ctx.stroke(); const a=Math.atan2(y1-y0,x1-x0); ctx.strokeStyle='#22282e'; ctx.lineWidth=H*.03; ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x1+Math.cos(a-jaw)*H*.09,y1+Math.sin(a-jaw)*H*.09); ctx.moveTo(x1,y1); ctx.lineTo(x1+Math.cos(a+jaw)*H*.09,y1+Math.sin(a+jaw)*H*.09); ctx.stroke(); };
  tool(-W*.02,H*1.05,W*.44,H*.62,.35); tool(W*1.02,H*.98,W*.66,H*.6,.05);
  const vg=ctx.createRadialGradient(W*.5,H*.5,H*.45,W*.5,H*.5,W*.6); vg.addColorStop(0,'rgba(0,0,0,0)'); vg.addColorStop(1,'rgba(0,0,0,.92)'); ctx.fillStyle=vg; ctx.fillRect(0,0,W,H);
}

/* ---------- slides & statistics ---------- */
function wrapText(ctx,text,maxW,maxLines){
  const words=String(text||'').split(/\s+/), lines=[]; let cur='';
  for(const w of words){ const t=cur?cur+' '+w:w; if(ctx.measureText(t).width>maxW && cur){ lines.push(cur); cur=w; } else cur=t; }
  if(cur) lines.push(cur);
  if(lines.length>maxLines){ const l=lines.slice(0,maxLines); l[maxLines-1]=l[maxLines-1].replace(/\s+\S*$/,'')+'…'; return l; }
  return lines;
}
function drawSlide(ctx,W,H,spec,meta,rng){
  const bg=ctx.createLinearGradient(0,0,W,H); bg.addColorStop(0,'#0a1730'); bg.addColorStop(1,'#11294b'); ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);
  const stats=spec.s==='stats';
  if(!stats){ for(let i=0;i<6;i++){ ctx.strokeStyle=`rgba(22,162,221,${.06+i*.03})`; ctx.lineWidth=H*.012; ctx.beginPath(); ctx.arc(W*.86,H*.52,H*(.12+i*.075),0,TAU); ctx.stroke(); } ctx.fillStyle='#F08A6E'; ell(ctx,W*.86,H*.52,H*.05,H*.05); ctx.fill(); }
  else {
    const x0=W*.6,x1=W*.95,y0=H*.18,y1=H*.78; ctx.strokeStyle='rgba(169,184,206,.6)'; ctx.lineWidth=Math.max(1,H*.004); ctx.beginPath(); ctx.moveTo(x0,y0); ctx.lineTo(x0,y1); ctx.lineTo(x1,y1); ctx.stroke();
    const curve=(col,rate,seed)=>{ const r=mulberry(seed); let y=0, x=0; ctx.strokeStyle=col; ctx.lineWidth=Math.max(1.4,H*.008); ctx.beginPath(); ctx.moveTo(x0,y0); const pts=[]; while(x<1){ const dx=.04+r()*.07; x=Math.min(1,x+dx); ctx.lineTo(x0+(x1-x0)*x,y0+(y1-y0)*y); y=Math.min(.95,y+rate*(.5+r())); ctx.lineTo(x0+(x1-x0)*x,y0+(y1-y0)*y); pts.push([x,y]); } ctx.stroke(); ctx.lineWidth=Math.max(1,H*.004); pts.forEach((p,i)=>{ if(i%3===1){ const X=x0+(x1-x0)*p[0]-H*.02, Y=y0+(y1-y0)*p[1]; ctx.beginPath(); ctx.moveTo(X,Y-H*.012); ctx.lineTo(X,Y+H*.012); ctx.stroke(); } }); };
    curve('#5CC4F0',.045,(spec.sd||1)*3); curve('#F08A6E',.075,(spec.sd||1)*7);
    ctx.fillStyle='rgba(169,184,206,.85)'; ctx.font=`500 ${H*.032}px "JetBrains Mono",monospace`; ctx.textBaseline='top'; ctx.textAlign='right'; ctx.fillText('HR 0.70 (0.55–0.89)',x1,y0-H*.06); ctx.textAlign='left';
  }
  ctx.fillStyle='#16A2DD'; ctx.fillRect(W*.06,H*.17,Math.max(2,H*.012),H*.09);
  ctx.textBaseline='top'; ctx.fillStyle='#5CC4F0'; ctx.font=`500 ${H*.038}px "JetBrains Mono",monospace`;
  ctx.fillText(((meta.code?meta.code+'  ·  ':'')+(meta.type||'Lecture')).toUpperCase(),W*.085,H*.18);
  ctx.fillStyle='#EAF0F8'; const fs=H*.078; ctx.font=`700 ${fs}px Archivo, Inter, system-ui, sans-serif`;
  const lines=wrapText(ctx,meta.title||'ROEYA Lumen',W*(stats?.47:.62),4);
  lines.forEach((l,i)=>ctx.fillText(l,W*.085,H*.31+i*fs*1.18));
  ctx.fillStyle='#7FA3C8'; ctx.font=`500 ${H*.034}px "JetBrains Mono",monospace`; ctx.fillText((meta.fac||'').toUpperCase(),W*.085,H*.85);
  ctx.textAlign='right'; ctx.fillStyle='rgba(169,184,206,.6)'; ctx.fillText('ROEYA LUMEN',W*.95,H*.85); ctx.textAlign='left';
}

/* ---------- OSD ---------- */
const MODE_DEFAULT={wli:'WLI',nbi:'NBI',lci:'LCI',esd:'BLI',tunnel:'WLI',chol:'WLI',eus:'EUS 7.5MHz',us:'IUS 9MHz',fluoro:'FLUORO',lap:'LAP 4K'};
function drawOSD(ctx,W,H,spec,meta,clock,elapsed){
  if(W<200) return;
  const s=spec.s, fs=Math.max(8.5,H*.034), lh=fs*1.42, x=W*.03; let y=H*.065;
  ctx.font=`500 ${fs}px "JetBrains Mono",ui-monospace,monospace`; ctx.textBaseline='top'; ctx.textAlign='left';
  ctx.fillStyle='rgba(191,230,255,.92)';
  const mode=spec.m||MODE_DEFAULT[s]||'';
  const extra = s==='eus'?['G:62  D:8cm','DR:65']: s==='us'?['G:54  D:6cm','PRF:1.0k']: s==='fluoro'?['kV:78  mA:2.1','LIH 15p/s']: s==='lap'?['1080p','CO2 12mmHg']:['Eh:A5  Ce:3','Cvp:1'];
  const lines=['ROEYA·LUMEN','ID '+(meta.code||'00-0412'),meta.facShort||'','',meta.dateOSD||'10/11/2026',clock||'09:41:00','',mode,...extra];
  lines.forEach((l,i)=>{ if(i===0){ ctx.fillStyle='rgba(92,196,240,.95)'; } else ctx.fillStyle='rgba(191,230,255,.88)'; ctx.fillText(l,x,y+i*lh); });
  const rx=W*.97, ry=H*.065; ctx.textAlign='right';
  if(meta.live){ ctx.fillStyle='rgba(255,220,215,.95)'; ctx.fillText('REC',rx,ry); const w=ctx.measureText('REC').width; ctx.fillStyle='#F2625A'; ell(ctx,rx-w-fs*.6,ry+fs*.5,fs*.32,fs*.32); ctx.fill(); }
  else if(elapsed){ ctx.fillStyle='rgba(191,230,255,.88)'; ctx.fillText('▶ '+elapsed,rx,ry); }
  ctx.textAlign='left';
}

/* ---------- public API ---------- */
function drawScene(ctx,W,H,spec,meta={},mode='frame'){
  const s=spec.s, rng=mulberry((spec.sd||1)*9973+7);
  ctx.fillStyle='#03060C'; ctx.fillRect(0,0,W,H);
  if(s==='slide'||s==='stats'){ drawSlide(ctx,W,H,spec,meta,rng); return null; }
  const g=geom(W,H,s,mode);
  ctx.save(); clipShape(ctx,W,H,s,g);
  if(s==='eus') drawEUS(ctx,W,H,g,rng,spec);
  else if(s==='us') drawUS(ctx,W,H,g,rng);
  else if(s==='fluoro') drawFluoro(ctx,W,H,g,rng,spec);
  else if(s==='lap') drawLap(ctx,W,H,g,rng);
  else if(s==='tunnel') drawTunnel(ctx,g,rng);
  else drawMucosa(ctx,g,rng,palFor(spec),spec);
  ctx.restore();
  return g;
}
const ART_CACHE=new Map();
function artURL(spec,W,H,meta={},mode='frame',osd=true){
  const key=[spec.s,spec.x||'',spec.sd||0,spec.m||'',W,H,mode,osd?1:0,meta.code||'',meta.title||''].join('|');
  if(ART_CACHE.has(key)) return ART_CACHE.get(key);
  const c=document.createElement('canvas'); c.width=W; c.height=H; const ctx=c.getContext('2d');
  drawScene(ctx,W,H,spec,meta,mode);
  if(osd && mode==='frame' && spec.s!=='slide' && spec.s!=='stats') drawOSD(ctx,W,H,spec,meta,meta.clock||'09:41:00',meta.elapsed||'');
  let url; try{ url=c.toDataURL('image/jpeg',.86); }catch(e){ url=''; }
  ART_CACHE.set(key,url); return url;
}

/* animated scene on a live canvas */
function animateCanvas(cv,spec,meta,opts={}){
  const dpr=Math.min(window.devicePixelRatio||1,2);
  const rect=cv.getBoundingClientRect();
  const W=Math.max(320,Math.min(1600,Math.round((rect.width||640)*dpr))), H=Math.max(180,Math.round((rect.height||360)*dpr));
  cv.width=W; cv.height=H;
  const mode=opts.mode||'frame', s=spec.s;
  const base=document.createElement('canvas'); base.width=W; base.height=H;
  const g=drawScene(base.getContext('2d'),W,H,spec,meta,mode);
  const ctx=cv.getContext('2d'); let raf=0, t0=performance.now(), stopped=false;
  const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const frame=(now)=>{
    if(stopped) return;
    const t=(now-t0)/1000, moving = opts.isPlaying ? opts.isPlaying() : true;
    const tt = moving ? t : (opts.frozenT||0);
    ctx.fillStyle='#03060C'; ctx.fillRect(0,0,W,H);
    if(!g){ ctx.drawImage(base,0,0); }
    else {
      ctx.save(); clipShape(ctx,W,H,s,g);
      const sc=1.045+.012*Math.sin(tt*.7), rot= MUCOSAL.includes(s)||s==='tunnel' ? .018*Math.sin(tt*.35) : 0;
      const pivotX = s==='eus' ? eusGeom(g).ax : g.cx, pivotY = s==='eus' ? eusGeom(g).ay : g.cy;
      ctx.translate(pivotX+Math.sin(tt*.5)*g.R*.006,pivotY+Math.cos(tt*.43)*g.R*.006); ctx.rotate(rot); ctx.scale(sc,sc); ctx.translate(-pivotX,-pivotY);
      ctx.drawImage(base,0,0);
      ctx.setTransform(1,0,0,1,0,0);
      if(s==='eus'||s==='us') grain(ctx,0,0,W,H,null,.18,(Math.random()*160)|0,(Math.random()*160)|0);
      if(s==='fluoro') grain(ctx,0,0,W,H,null,.1,(Math.random()*160)|0,(Math.random()*160)|0);
      ctx.restore();
    }
    if(mode==='frame' && opts.osd!==false && s!=='slide' && s!=='stats'){
      const el = opts.getTime ? opts.getTime() : t;
      drawOSD(ctx,W,H,spec,meta,clockStr(9*3600+41*60+el),opts.getTime?hms(el):'');
    }
    if(opts.onFrame) opts.onFrame();
    if(!reduce) raf=requestAnimationFrame(frame);
  };
  raf=requestAnimationFrame(frame);
  return { stop(){ stopped=true; cancelAnimationFrame(raf); }, redraw(){ if(reduce) frame(performance.now()); } };
}
function hms(s){ s=Math.max(0,Math.floor(s)); const h=Math.floor(s/3600), m=Math.floor(s%3600/60), x=s%60; return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(x).padStart(2,'0')}`; }
function clockStr(s){ return hms(s%86400); }

/* profile cover */
function drawCover(cv,hue){
  const dpr=Math.min(window.devicePixelRatio||1,2), r=cv.getBoundingClientRect(), W=Math.max(300,Math.round(r.width*dpr)), H=Math.max(120,Math.round(r.height*dpr));
  cv.width=W; cv.height=H; const ctx=cv.getContext('2d');
  const bg=ctx.createLinearGradient(0,0,W,H); bg.addColorStop(0,'#081326'); bg.addColorStop(1,'#163463'); ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);
  for(let i=0;i<9;i++){ ctx.strokeStyle=`rgba(92,196,240,${.05+i*.022})`; ctx.lineWidth=H*.03; ctx.beginPath(); ctx.arc(W*.82,H*.5,H*(.15+i*.16),0,TAU); ctx.stroke(); }
  ctx.fillStyle='rgba(240,138,110,.9)'; ell(ctx,W*.82,H*.5,H*.07,H*.07); ctx.fill();
  ctx.fillStyle='rgba(191,230,255,.55)'; ctx.font=`500 ${H*.09}px "JetBrains Mono",monospace`; ctx.textBaseline='top'; ctx.fillText('ROEYA·LUMEN  ·  MEMBER SINCE MAR 2026',W*.03,H*.1);
}

;
/* ===================== UI FOUNDATION ===================== */
const LOGO_D="data:image/png;base64,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", LOGO_L="data:image/png;base64,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";
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* demo clock: real time, kept inside the demo window */
const NOW=(()=>{ const n=new Date(); if(window.LUMEN_LIVE) return n; const lo=new Date('2026-11-01T00:00:00+02:00'), hi=new Date('2026-12-09T00:00:00+02:00'); return (n<lo||n>hi)? new Date('2026-11-10T14:00:00+02:00') : n; })();

/* ---------- icons ---------- */
const IC={
 home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
 play:'<path d="M7 4.5v15l12-7.5z" fill="currentColor" stroke="none"/>',
 pause:'<path d="M6.5 4h4v16h-4zM13.5 4h4v16h-4z" fill="currentColor" stroke="none"/>',
 lib:'<rect x="3" y="4" width="18" height="13" rx="2"/><path d="m10 8 5 2.5-5 2.5z"/><path d="M7 21h10"/>',
 route:'<circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="5" r="2.5"/><path d="M8.5 19H15a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h6.5"/>',
 kit:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8V21h3.2l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/>',
 box:'<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
 radio:'<circle cx="12" cy="12" r="2"/><path d="M8.5 15.5a5 5 0 0 1 0-7M15.5 8.5a5 5 0 0 1 0 7M5.6 18.4a9 9 0 0 1 0-12.8M18.4 5.6a9 9 0 0 1 0 12.8"/>',
 feed:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/>',
 users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"/>',
 msg:'<path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4V6a1 1 0 0 1 1-1z"/>',
 steth:'<path d="M5 3v6a5 5 0 0 0 10 0V3"/><path d="M10 14v2a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="12" r="2"/>',
 clip:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h3"/>',
 award:'<circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
 gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
 bell:'<path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 21h4"/>',
 bookmark:'<path d="M6 3h12v18l-6-4-6 4z"/>',
 bookmarkF:'<path d="M6 3h12v18l-6-4-6 4z" fill="currentColor"/>',
 share:'<circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="m8.2 10.8 7.6-4.4M8.2 13.2l7.6 4.4"/>',
 download:'<path d="M12 4v11m-5-5 5 5 5-5M5 20h14"/>',
 check:'<path d="m5 12.5 4.5 4.5L19 7"/>',
 x:'<path d="M6 6l12 12M18 6 6 18"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 chevR:'<path d="m9 5 7 7-7 7"/>', chevL:'<path d="m15 5-7 7 7 7"/>', chevD:'<path d="m5 9 7 7 7-7"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 pin:'<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
 cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
 globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
 moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
 lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
 like:'<path d="M7 10v11H4V10zM7 10l4-7a2.5 2.5 0 0 1 3 3l-1 4h5.5a2 2 0 0 1 2 2.4l-1.4 6.5A2.5 2.5 0 0 1 16.6 21H7"/>',
 cmt:'<path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5A8 8 0 1 1 21 12z"/>',
 repost:'<path d="M17 2l3 3-3 3M4 11V9a4 4 0 0 1 4-4h12M7 22l-3-3 3-3M20 13v2a4 4 0 0 1-4 4H4"/>',
 send:'<path d="M21 3 10 14M21 3l-7 18-4-7-7-4z"/>',
 more:'<circle cx="5" cy="12" r="1.4" fill="currentColor"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/><circle cx="19" cy="12" r="1.4" fill="currentColor"/>',
 file:'<path d="M14 3H6v18h12V7z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
 book:'<path d="M4 4h6a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H4zM20 4h-6a3 3 0 0 0-3 3"/><path d="M20 4v15h-7"/>',
 layers:'<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
 cc:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10.5 10a2.5 2.5 0 1 0 0 4M17 10a2.5 2.5 0 1 0 0 4"/>',
 gauge:'<path d="M4 18a8 8 0 1 1 16 0"/><path d="m12 14 4-5"/>',
 full:'<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
 vol:'<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',
 rew:'<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/>', fwd:'<path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 4v5h-5"/>',
 filter:'<path d="M3 5h18l-7 8v6l-4 2v-8z"/>',
 shield:'<path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
 card:'<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M2.5 10h19M6 15h4"/>',
 logout:'<path d="M15 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4M10 16l-4-4 4-4M6 12h10"/>',
 upload:'<path d="M12 16V4m-5 5 5-5 5 5M5 20h14"/>',
 image:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-9 9"/>',
 poll:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
 video:'<rect x="2.5" y="6" width="13" height="12" rx="2"/><path d="m15.5 10 6-3.5v11l-6-3.5"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
 alert:'<path d="M12 3 2 20h20z"/><path d="M12 10v4M12 17v.5"/>',
 arrowR:'<path d="M5 12h14m-6-6 6 6-6 6"/>', arrowL:'<path d="M19 12H5m6-6-6 6 6 6"/>',
 menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
 eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
 eyeOff:'<path d="M3 3l18 18M10.6 5.1A10 10 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 4M6.6 6.6C3.8 8.4 2 12 2 12s3.5 7 10 7a9.6 9.6 0 0 0 5.4-1.6M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',
 link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
 ticket:'<path d="M3 7h18v3a2 2 0 0 0 0 4v3H3v-3a2 2 0 0 0 0-4z"/><path d="M14 7v10" stroke-dasharray="2 2.5"/>',
 laptop:'<rect x="4" y="5" width="16" height="11" rx="1"/><path d="M2 19h20"/>',
 phone:'<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18h2"/>',
 verified:'<path d="M12 2.5l2.4 1.7 2.9-.1.9 2.8 2.4 1.7-.9 2.8.9 2.8-2.4 1.7-.9 2.8-2.9-.1L12 21.5l-2.4-1.7-2.9.1-.9-2.8-2.4-1.7.9-2.8-.9-2.8 2.4-1.7.9-2.8 2.9.1z" fill="currentColor" stroke="none"/><path d="m8.5 12 2.4 2.4 4.6-4.8" stroke="var(--bg)" stroke-width="2.2"/>',
 sparkle:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
 target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/>',
 hand:'<path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V11M11 10V4.5a1.5 1.5 0 0 1 3 0V11M14 10.5V6a1.5 1.5 0 0 1 3 0v8a7 7 0 0 1-7 7h-.5A6.5 6.5 0 0 1 4 16l-1.3-3.2a1.5 1.5 0 0 1 2.6-1.4L8 15"/>',
 pen:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>',
 trend:'<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>',
 hash:'<path d="M5 9h15M4 15h15M10 3 8 21M16 3l-2 18"/>',
 grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
 attach:'<path d="M20 11.5 12 19.5a5 5 0 0 1-7-7l8.5-8.5a3.5 3.5 0 0 1 5 5L10 17.5a2 2 0 0 1-3-3l7.5-7.5"/>',
 quiz:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6M12 17v.5"/>',
 list:'<path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01"/>',
 copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
 ext:'<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
 flask:'<path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3"/><path d="M7 15h10"/>',
 star:'<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>',
};
function ic(n,cls=''){ return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${cls?` class="${cls}"`:''}>${IC[n]||''}</svg>`; }

/* ---------- state ---------- */
const STORE_KEY=window.LUMEN_STORE_KEY||'roeya-lumen-demo-v1';
const DEFAULT_STATE={
  auth:false, user:null, theme:'system', lang:'en', nlDone:false, nlSub:null,
  bm:['ercp-stones','poem','eus-lams'], prog:{'ercp-cannulation':411,'esd-colorectal':1320,'eus-stations':600,'nvugib':1560},
  watched:[], notes:{'ercp-cannulation':[[505,'Bow first, then lift. Separate the two movements.']]},
  likes:[], votes:{}, cmts:{}, myPosts:[], conn:['karim','rania','mariam'], pending:[], circles:['ERCP Fellows · MEA'],
  msgs:{}, consults:[], logAdd:[], quiz:{}, cmeAdd:[], reminders:['oh-cannulation'], follow:['karim'],
  bill:'annual', region:'eg', subs:'en', autoplay:true, notif:{brief:true,live:true,msgs:true,mentions:true,digest:false}, privacy:{profile:true,logbook:true},
};
let S=load();
function load(){ try{ const raw=localStorage.getItem(STORE_KEY); if(raw){ return Object.assign(structuredClone(DEFAULT_STATE),JSON.parse(raw)); } }catch(e){} return structuredClone(DEFAULT_STATE); }
function save(){ try{ localStorage.setItem(STORE_KEY,JSON.stringify(S)); }catch(e){} onSaved(); }
/* hooks: the Firebase build replaces these */
function onSaved(){}
function isDemo(){ return S.demo!==false; }
function isAdmin(){ return false; }
function liveWho(id){ return null; }
let SESSION={ nlShown:false, next:null };

/* ---------- i18n (interface only; content stays in its language) ---------- */
const AR={
 'Today':'اليوم','Library':'المكتبة','Pathways':'المسارات','Technique kits':'أدوات التقنيات','Models':'النماذج','Live & events':'البث والفعاليات',
 'Feed':'الأخبار','Network':'الشبكة','Messages':'الرسائل','Consultations':'الاستشارات','Logbook & CME':'السجل والساعات المعتمدة',
 'Learn':'تعلّم','Practise':'تدرّب','Community':'المجتمع','Track':'المتابعة','Plans':'الاشتراكات','Sign in':'تسجيل الدخول','Join':'انضم',
 'Create account':'إنشاء حساب','Sign out':'تسجيل الخروج','Profile':'الملف الشخصي','Account':'الحساب','Search lectures, techniques, people':'ابحث عن محاضرات وتقنيات وأشخاص',
 'Continue watching':'تابع المشاهدة','New this week':'جديد هذا الأسبوع','Most watched':'الأكثر مشاهدة','Live cases':'حالات مباشرة','Resume':'استئناف',
 'Open pathway':'افتح المسار','This week':'هذا الأسبوع','See all':'عرض الكل','Remind me':'ذكّرني','Reminder set':'تم ضبط التذكير',
 'Chapters':'الفصول','Transcript':'النص','Kit':'الأدوات','Quiz':'اختبار','Notes':'ملاحظات','Save':'حفظ','Saved':'محفوظ','Share':'مشاركة','Download':'تنزيل',
 'Ask the expert':'اسأل الخبير','Questions & answers':'أسئلة وأجوبة','Up next':'التالي','Practise this on the model':'تدرّب على النموذج',
 'Check answers':'تحقق من الإجابات','Try again':'أعد المحاولة','Add note':'أضف ملاحظة','Indications':'دواعي الاستخدام','Step by step':'خطوة بخطوة',
 'The kit':'الأدوات','Pitfalls':'أخطاء شائعة','Generator settings':'إعدادات المولّد','Videos':'الفيديوهات','Practise on':'تدرّب على',
 'Request a session':'اطلب جلسة','Order for your unit':'اطلب لوحدتك','Register':'سجّل','Details':'التفاصيل','Reserve seat':'احجز مقعدًا','Reserved':'تم الحجز',
 'Post':'نشر','Like':'إعجاب','Comment':'تعليق','Repost':'إعادة نشر','Connect':'تواصل','Connected':'متصل','Pending':'قيد الانتظار','Message':'راسل',
 'Join circle':'انضم','Joined':'منضم','Book':'احجز','Confirm booking':'تأكيد الحجز','Add procedure':'أضف إجراء','Download transcript':'تنزيل السجل',
 'Edit profile':'تعديل الملف','Current plan':'الخطة الحالية','Monthly':'شهري','Annual':'سنوي','Subscribe':'اشترك','Not now':'ليس الآن',
 'Everyone':'الجميع','Experts':'الخبراء','Fellows':'الزملاء','Nurses':'التمريض','All':'الكل','Following':'أتابعهم','Guidelines':'الإرشادات','Events':'الفعاليات',
 'Research':'الأبحاث','Cases':'حالات','Field news':'أخبار المجال','Notifications':'الإشعارات','Mark all read':'تحديد الكل كمقروء','Menu':'القائمة',
 'Your pathways':'مساراتك','All pathways':'كل المسارات','Continue':'متابعة','View':'عرض','Enrol':'التحق','Enrolled':'ملتحق','Your mentor':'مرشدك',
 'Upcoming':'القادم','Office hours':'ساعات مكتبية','Happening now':'يجري الآن','Live archive':'أرشيف البث','Trending':'الأكثر تداولًا','Suggested for you':'مقترحات لك',
 'Circles':'المجموعات','Send':'إرسال','Back':'رجوع','Settings':'الإعدادات','Plan & billing':'الخطة والفوترة','Preferences':'التفضيلات','Privacy':'الخصوصية','Devices':'الأجهزة',
 'Language':'اللغة','Theme':'المظهر','System':'النظام','Dark':'داكن','Light':'فاتح','Subtitles':'الترجمة','Autoplay next video':'تشغيل الفيديو التالي تلقائيًا',
 'Competencies':'الكفاءات','Recent procedures':'آخر الإجراءات','CME transcript':'سجل الساعات المعتمدة','Certificates':'الشهادات','Saved videos':'الفيديوهات المحفوظة',
 'Clear filters':'مسح الفلاتر','Newest':'الأحدث','Shortest':'الأقصر','Level':'المستوى','Sort':'ترتيب','Type':'النوع','Module':'الوحدة','Description':'الوصف',
 'Good morning':'صباح الخير','Good afternoon':'مساء الخير','Good evening':'مساء الخير','Create free account':'أنشئ حسابًا مجانيًا','Talk to us':'تحدث إلينا',
 'Frequently asked questions':'الأسئلة الشائعة','Compare plans':'قارن الخطط','Book a consultation':'احجز استشارة','Upcoming consultations':'الاستشارات القادمة',
};
const t=s=> S.lang==='ar' ? (AR[s]||s) : s;

/* ---------- formatting ---------- */
const MON=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const pd=d=> d instanceof Date ? d : new Date(String(d).length<=10 ? d+'T12:00:00+02:00' : d);
function fmtDate(d,yr=true){ d=pd(d); return `${d.getDate()} ${MON[d.getMonth()]}${yr?' '+d.getFullYear():''}`; }
function fmtRange(a,b){ a=pd(a); b=pd(b); if(+a===+b) return fmtDate(a); if(a.getMonth()===b.getMonth()) return `${a.getDate()}–${b.getDate()} ${MON[a.getMonth()]} ${a.getFullYear()}`; return `${fmtDate(a,false)} – ${fmtDate(b)}`; }
function ago(d){ const s=((window.LUMEN_LIVE?Date.now():NOW)-pd(d))/1000; if(s<60&&s>-300) return 'Just now'; if(s<3600) return Math.max(1,Math.round(s/60))+' min ago'; if(s<86400) return Math.round(s/3600)+' h ago'; const days=Math.round(s/86400); if(days===1) return 'Yesterday'; if(days<14) return days+' days ago'; if(days<60) return Math.round(days/7)+' weeks ago'; return fmtDate(d); }
const fmtViews=n=> n>=1000 ? (n/1000).toFixed(n>=10000?0:1).replace(/\.0$/,'')+'K' : String(n);
const mmss=s=>{ s=Math.max(0,Math.floor(s)); const m=Math.floor(s/60), x=s%60; return `${String(m).padStart(2,'0')}:${String(x).padStart(2,'0')}`; };
const money=(cur,n)=> `${cur==='USD'?'$':'EGP '}${Math.round(n).toLocaleString('en-US')}`;
function osdDate(d){ d=pd(d); return `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`; }
function shortName(n){ const p=n.replace(/^(Prof\.|Dr\.)\s*/,'').split(/\s+/); const title=n.match(/^(Prof\.|Dr\.)/)?.[0]||''; return (title?title.toUpperCase()+' ':'')+(p.length>1? p[0][0]+'. '+p.slice(1).join(' ') : p[0]).toUpperCase().replace(', RN',''); }

/* ---------- people ---------- */
function who(id){
  if(id==='me'||(S.user&&id===S.user.uid)){ const d=isDemo(); return {id:'me',name:S.user?.name||DEMO_USER.name,role:S.user?.role||(d?DEMO_USER.role:''),city:S.user?.city||(d?DEMO_USER.city:''),hue:S.user?.hue??DEMO_USER.hue,joined:S.user?.joined||(d?DEMO_USER.joined:''),mods:S.user?.mods||[],me:true}; }
  const lw=liveWho(id); if(lw) return lw;
  if(FAC[id]) return {id,...FAC[id],faculty:true};
  const p=PEOPLE.find(x=>x.id===id); if(p) return p.fac ? {...FAC[p.fac],...p,faculty:true} : p;
  if(POST_AUTHORS[id]) return {id,...POST_AUTHORS[id]};
  return {id,name:'Member',role:'',hue:200};
}
function initials(n){ const p=n.replace(/^(Prof\.|Dr\.)\s*/,'').replace(/,.*$/,'').split(/\s+/).filter(Boolean); return ((p[0]||'?')[0]+((p[1]||'')[0]||'')).toUpperCase(); }
function av(p,size=40,o={}){
  if(typeof p==='string') p=who(p);
  if(p.org) return `<span class="avatar" style="width:${size}px;height:${size}px;background:var(--surface-2);border:1px solid var(--line-2)">${brandImgs(size*.62)}</span>`;
  const h=p.hue??200;
  return `<span class="avatar${o.ring?' ring':''}" style="width:${size}px;height:${size}px;font-size:${Math.round(size*.36)}px;background:radial-gradient(circle at 32% 28%,hsl(${h} 80% 76%),hsl(${h} 62% 52%) 58%,hsl(${(h+24)%360} 58% 34%))" aria-hidden="true">${esc(initials(p.name||'?'))}${o.online?'<i class="on-dot"></i>':''}</span>`;
}
function brandImgs(w=34){ return `<img class="logo-d" src="${LOGO_D}" alt="" style="width:${w}px"><img class="logo-l" src="${LOGO_L}" alt="" style="width:${w}px">`; }
function brand(href){ return `<a class="wordmark" href="${href}" aria-label="ROEYA Lumen home">${brandImgs(34)}<span class="wm"><small>ROEYA</small><b>Lumen</b></span></a>`; }

/* ---------- art placeholders (hydrated after render) ---------- */
const ARTQ=new Map(); let artSeq=0;
function vmeta(v){ return {code:v.code,facShort:shortName(FAC[v.fac].name),title:v.t,type:v.type,fac:FAC[v.fac].name,dateOSD:osdDate(v.date),live:v.type==='Live case'}; }
function artImg(spec,W,H,meta={},o={}){
  const k='a'+(++artSeq); ARTQ.set(k,{spec,W,H,meta,mode:o.mode||'frame',osd:o.osd!==false});
  return `<img data-art="${k}" alt="${esc(o.alt||'')}" ${o.cls?`class="${o.cls}"`:''} style="background:#03060C${o.style?';'+o.style:''}" loading="eager" decoding="async">`;
}
const vthumbImg=v=>artImg(v.art,480,270,vmeta(v),{alt:''});
let hydrating=false;
function hydrate(){
  const step=()=>{
    const t0=performance.now();
    const list=$$('img[data-art]:not([src])');
    for(const im of list){ const q=ARTQ.get(im.dataset.art); if(!q){ im.src='data:,'; continue; }
      im.src=artURL(q.spec,q.W,q.H,q.meta,q.mode,q.osd)||'data:,';
      if(performance.now()-t0>14) break; }
    if($('img[data-art]:not([src])')) requestAnimationFrame(step); else hydrating=false;
  };
  if(!hydrating){ hydrating=true; requestAnimationFrame(step); }
}

/* ---------- small components ---------- */
function ringSVG(pct,size=56,sw=5,color='var(--brand)'){
  const r=(size-sw)/2, c=2*Math.PI*r, off=c*(1-Math.max(0,Math.min(1,pct)));
  return `<div class="ring" style="width:${size}px;height:${size}px"><svg width="${size}" height="${size}"><circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="var(--surface-3)" stroke-width="${sw}"/><circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${off.toFixed(1)}"/></svg><span>${Math.round(pct*100)}%</span></div>`;
}
const levelTag=l=>`<span class="tag">${esc(l)}</span>`;
function vcard(v,o={}){
  const p=S.prog[v.id], pct=p? Math.min(1,p/(v.dur*60)) : 0, bm=S.bm.includes(v.id);
  return `<article class="vcard">
    <button class="bm${bm?' on':''}" data-act="bm" data-id="${v.id}" aria-label="${bm?'Remove from saved':'Save video'}">${ic(bm?'bookmarkF':'bookmark')}</button>
    <a href="#v-${v.id}" class="vthumb" aria-label="${esc(v.t)}">${vthumbImg(v)}
      <span class="badges">${v.type==='Live case'?'<span class="tag live">Live case</span>':''}${v.isNew?'<span class="tag new">New</span>':''}${o.lock?`<span class="tag">${ic('lock')}Members</span>`:''}</span>
      <span class="dur">${v.dur} min</span>
      ${pct>0?`<span class="prog"><i style="width:${(pct*100).toFixed(0)}%"></i></span>`:''}
      <span class="play"><span>${ic('play')}</span></span>
    </a>
    <div class="vmeta"><a href="#v-${v.id}" class="t">${esc(v.t)}</a>
      <div class="s"><span>${esc(FAC[v.fac].name)}</span><i></i><span>${v.mod}</span>${v.cme?`<i></i><span>${v.cme} CME</span>`:''}</div></div>
  </article>`;
}
function row(title,list,o={}){
  if(!list.length) return '';
  const id='r'+Math.random().toString(36).slice(2,8);
  return `<section class="row-wrap"><div class="row-head"><h2>${esc(title)}</h2><div class="ctrl">${o.more?`<a class="btn btn-ghost btn-sm" href="${o.more}">${t('See all')}</a>`:''}<button class="icon-btn" data-act="scrollrow" data-row="${id}" data-dir="-1" aria-label="Scroll left">${ic('chevL','flip')}</button><button class="icon-btn" data-act="scrollrow" data-row="${id}" data-dir="1" aria-label="Scroll right">${ic('chevR','flip')}</button></div></div>
  <div class="row cols-4" id="${id}">${list.map(v=>vcard(v,o)).join('')}</div></section>`;
}
function toast(msg,icon='check'){ const el=document.createElement('div'); el.className='toast'; el.innerHTML=ic(icon)+`<span>${msg}</span>`; $('#toasts').appendChild(el); setTimeout(()=>{ el.style.transition='opacity .3s'; el.style.opacity='0'; setTimeout(()=>el.remove(),320); },3200); }
let modalOnClose=null;
function openModal(html,o={}){
  closeModal(true);
  const root=$('#modal-root'); root.innerHTML=`<div class="modal-bg" data-act="modal-bg"><div class="modal" role="dialog" aria-modal="true"${o.wide?' style="max-width:640px"':''}>${html}</div></div>`;
  modalOnClose=o.onClose||null; setTimeout(()=>{ const f=$('#modal-root [autofocus]')||$('#modal-root .modal'); f&&f.focus&&f.focus(); },30); hydrate();
}
function closeModal(silent){ const root=$('#modal-root'); if(root && root.innerHTML){ root.innerHTML=''; if(!silent && modalOnClose){ const f=modalOnClose; modalOnClose=null; f(); } } }
const mh=(title,sub='')=>`<div class="mh"><div><h2>${title}</h2>${sub?`<p class="muted" style="margin-top:6px;font-size:14px">${sub}</p>`:''}</div><button type="button" class="icon-btn" data-act="close-modal" aria-label="Close">${ic('x')}</button></div>`;

/* ---------- plan content ---------- */
const PLAN_DEFS=[
  {id:'free',name:'Explore',tl:'A first look at the library and the community.',feats:['Case of the week and guideline digests','3 lectures a month from the library','The feed and public events','The Lumen Brief, every Sunday'],cta:'Create free account'},
  {id:'fellow',name:'Fellow',tl:'The full curriculum for one verified fellow.',key:'fellow',head:'Everything in Explore, plus:',feats:['The whole library and live case archive','All 8 pathways and 10 technique kits','English and Arabic subtitles','Self-assessment quizzes and CME transcript','Messages and the fellows network','Offline downloads in the app']},
  {id:'pro',name:'Fellow Pro',tl:'Everything a fellow needs, with experts on call.',key:'pro',pop:true,head:'Everything in Fellow, plus:',feats:['2 expert consultations a month','Ask live in office hours','Logbook with supervisor sign-off','Course Passport: priority seats on ROEYA hands-on courses','Competency reports and certificates']},
  {id:'inst',name:'Programme',tl:'For hospitals and fellowship programmes.',custom:true,head:'Fellow Pro for every fellow, plus:',feats:['Programme director dashboard','Cohort progress and logbook sign-off','Pooled expert consultations','Group model sessions at ROEYA','One invoice, minimum 10 seats']},
];
const CMP=[
  ['Learn'],
  ['Recorded lectures and techniques','3 a month',true,true,true],
  ['Live case archive',false,true,true,true],
  ['Pathways','Preview','All 8','All 8','All 8 + cohorts'],
  ['Technique kits and generator settings','Summary',true,true,true],
  ['English and Arabic subtitles',true,true,true,true],
  ['Offline downloads in the app',false,true,true,true],
  ['Practise'],
  ['Self-assessment quizzes',false,true,true,true],
  ['Model sessions at ROEYA',false,'Member rate','Priority booking','Group booking'],
  ['Course Passport',false,false,'Priority seats','Reserved seats'],
  ['Connect'],
  ['Feed and public events',true,true,true,true],
  ['Messages and network','Read only',true,true,true],
  ['Live office hours',false,'Watch','Ask live','Ask live'],
  ['Expert consultations',false,false,'2 a month','Pooled'],
  ['Track'],
  ['Logbook',false,'Personal','Supervisor sign-off','Programme-wide'],
  ['CME transcript and certificates',false,true,true,true],
  ['Programme director dashboard',false,false,false,true],
];
const FAQ=[
  ['Who can join ROEYA Lumen?','Lumen is for gastroenterology and endoscopy fellows, consultants who train them, endoscopy nurses and surgeons who work in the endoscopy unit. Explore is open to any healthcare professional; paid plans need verification.'],
  ['How do you verify that I am a fellow?','Upload your fellowship letter or hospital ID when you sign up. Our team checks it within two working days. If you attended a ROEYA hands-on course, your course code verifies you straight away.'],
  ['Does a ROEYA course include Lumen?','Yes. Every ROEYA hands-on course comes with a Course Passport: Lumen access that unlocks the pre-course modules for that technique and stays open after the course so you can revise.'],
  ['Can my hospital or programme pay?','Yes. The Programme plan gives each fellow Fellow Pro access, adds a dashboard for the programme director and is invoiced once a year. Talk to us for a quote.'],
  ['Are the activities CME-accredited?','Each module shows its hours. We are working towards formal CME accreditation; until it is granted, Lumen issues a certificate of completion with the hours for your portfolio.'],
  ['Do videos have Arabic subtitles?','Every lecture is produced with English and Arabic subtitles and a searchable transcript. Technical terms stay in English where that is how they are used in the unit.'],
  ['Can I cancel?','You can cancel any time from your account. Annual plans stay active until the end of the year you paid for. Your logbook and certificates remain yours and can be exported.'],
  ['Are consultations medical advice for my patient?','No. Consultations are educational case discussions between clinicians. Decisions stay with the treating team, and you must remove all patient identifiers before sharing images.'],
];
const QA={
  ERCP:[['mariam','At 08:20 you lift with the elevator before bowing the sphincterotome. Is that deliberate?'],['karim','In that case, yes, because the papilla was low. In general bow first, then lift. Try both on the papilla cartridge and you will feel the difference.',1],['ibrahim','Would you give rectal diclofenac even after a failed cannulation?'],['zaki','Yes. It is given before the procedure regardless of how it goes, unless there is a contraindication.',1]],
  EUS:[['ali','How do you keep the needle in view when the lesion is close to the duodenal wall?'],['rania','Keep the tip deflected and make small movements with the elevator rather than the big wheel. Short scope position helps.',1]],
  'Third space':[['reem','What do you do when the submucosa becomes fibrotic in the middle of the dissection?'],['lina','Slow down, use traction and re-inject more often. Sometimes coming from the other side is faster than forcing through.',1]],
  default:[['hassan','Is there a model session for this technique at the ROEYA center?'],['roeya','Yes. Use “Practise this on the model” on this page to request a session, or ask at your next ROEYA course.',1]],
};
const GENERIC_CH={
  'Technique':[['Indications and setup','Who benefits and how to prepare'],['The kit','What is on the trolley'],['Step by step','The technique in sequence'],['Common pitfalls','What goes wrong and how to recover'],['Summary','What to rehearse']],
  'Lecture':[['Why it matters','The clinical problem'],['What the evidence shows','Key studies and guidelines'],['How to apply it','In your unit'],['Cases','Worked examples'],['Take-home points','Five things to remember']],
  'Live case':[['The case','History and imaging'],['Planning','Strategy and kit'],['Procedure','Live, with commentary'],['Panel discussion','Questions from the audience'],['Outcome','What happened next']],
  'Masterclass':[['The problem','Where most people get stuck'],['Decision path','Choosing the next step'],['Technique in detail','Close-up, step by step'],['Troubleshooting','When it still does not work'],['Summary','What to practise']],
  'Case of the week':[['The case','Presentation and first attempts'],['Your vote','What would you do?'],['What was done','And why']],
  'Guideline digest':[['The question','What the guideline addresses'],['The recommendation','In plain words'],['Who it applies to','Patients and settings'],['In practice','How to apply it tomorrow']],
  'Webinar':[['Introduction','Why this topic now'],['Presentations','Three short talks'],['Panel','Discussion'],['Questions','From the audience']],
};
function chaptersFor(v){
  const total=v.dur*60;
  if(CHAPTERS[v.id]) return CHAPTERS[v.id].map(c=>({t:c[0],title:c[1],d:c[2]}));
  const g=GENERIC_CH[v.type]||GENERIC_CH.Lecture;
  return g.map((c,i)=>({t:Math.round(i*total/g.length),title:c[0],d:c[1]}));
}

;
/* ===================== PAGES ===================== */
const R={};
const V=id=>VIDEOS.find(v=>v.id===id);
const TK=id=>TECHNIQUES.find(x=>x.id===id);
const MD=id=>MODELS.find(x=>x.id===id);
const PW=id=>PATHWAYS.find(x=>x.id===id);
const EV=id=>EVENTS.find(x=>x.id===id);
const daysTo=d=>Math.ceil((pd(d)-NOW)/86400000);
const isEnrolled=p=>(isDemo()&&p.enrolled)||(S.enr||[]).includes(p.id);
function convUnread(c){ return !!c.unread && !(S.read||[]).includes(c.id); }
function unreadCount(){ return allConvs().filter(convUnread).length; }
/* ---------- data hooks: the Firebase build replaces these ---------- */
function feedPosts(){ return [...S.myPosts,...POSTS]; }
function likeCount(p){ return (p.likes||0)+(S.likes.includes(p.id)?1:0); }
function isLiked(p){ return S.likes.includes(p.id); }
function postComments(p){ return [...(p.comments||[]),...(S.cmts[p.id]||[])]; }
function myVote(p){ return S.votes[p.id]; }
function pollCounts(p){ const m=myVote(p); return p.poll.o.map((o,i)=>(o[1]||0)+(m===i?1:0)); }
function postTime(p){ return p.at; }
function canDeletePost(p){ return p.by==='me'; }
function qaList(v){ return [...(QA[v.mod]||QA.default),...((S.cmts['v:'+v.id])||[]).map(c=>[c[0],c[1],0,c[2]])]; }
function networkPeople(){ return PEOPLE.map(p=>({...who(p.id),...p,name:who(p.id).name})); }
function notifList(){ return isDemo()?NOTIFS:[]; }
function isVerified(){ return isDemo(); }
function myCourses(){ return S.courses||[]; }
PATHWAYS.forEach(p=>p.stages.forEach((s,si)=>s.items.forEach((it,ii)=>{ it.key=p.id+'.'+si+'.'+ii; })));
function pwDone(p){ return pwProgress(p).pct>=1; }

/* ---------- public chrome ---------- */
function pubNav(active){
  return `<header class="pub-nav"><div class="wrap">${brand('#home')}
    <nav class="pub-links" aria-label="Main">
      <button data-act="scrollto" data-to="sec-how">Curriculum</button>
      <button data-act="scrollto" data-to="sec-lib">Library</button>
      <button data-act="scrollto" data-to="sec-feat">Features</button>
      <a href="#plans" class="${active==='plans'?'on':''}">${t('Plans')}</a>
    </nav>
    <div class="pub-actions">
      <button class="icon-btn" data-act="lang" aria-label="Switch language"><b style="font-size:13px">${S.lang==='ar'?'EN':'ع'}</b></button>
      <button class="icon-btn" data-act="theme" aria-label="Switch theme">${ic(effTheme()==='dark'?'sun':'moon')}</button>
      <a class="btn btn-ghost hide-s" href="#login">${t('Sign in')}</a>
      <a class="btn btn-primary" href="#signup">${t('Join')}</a>
    </div></div></header>`;
}
function footer(){
  return `<footer class="footer"><div class="wrap">
    <div style="display:flex;gap:12px;align-items:center">${brandImgs(26)}<span>© 2026 ROEYA · Training · Simulation · Innovation</span></div>
    <div style="display:flex;gap:18px;flex-wrap:wrap"><a href="#plans">Plans</a><button data-act="toast" data-msg="Terms and privacy pages are part of the final build.">Terms</button><button data-act="toast" data-msg="Terms and privacy pages are part of the final build.">Privacy</button><span class="tag warn">Demo build · sample faculty and members are fictional</span></div>
  </div></footer>`;
}

/* ---------- landing ---------- */
R.home=()=>{
  const sample=['ercp-cannulation','esd-colorectal','eus-fnb','nvugib'].map(V);
  const steps=[['Learn','Recorded lectures, techniques and live cases, chaptered and subtitled.','lib'],['Simulate','Rehearse on the ROEYA model made for that exact technique.','box'],['Hands-on','Your ROEYA course, with the pre-course modules already done.','hand'],['Observe','Live lists and congress live cases, with the panel in your ear.','eye'],['Log','Every supervised case, signed off by your mentor.','clip'],['Assess','Quizzes, DOPS and a certificate you can show.','target']];
  const feats=[['lib','A library built like a streaming service','Lectures, step-by-step techniques, live cases, masterclasses and a weekly case of the week, every one framed on the endoscopy monitor.'],['kit','The exact kit for every technique','Accessories, sizes and generator settings next to the video, so the trolley is right before the list starts.'],['box','Practise on our own models','Each technique links to the ROEYA ex-vivo model for it. Book a session at the training center or order models for your unit.'],['route','Pathways from first video to independent practice','Six stages, a mentor and a logbook, built around the ROEYA hands-on courses.'],['users','A network for the people holding the scope','Fellows and experts from across Africa and the Middle East, with circles, messages and office hours.'],['steth','Consultations with the faculty','Book a 20-minute case discussion or a written second opinion, with de-identified images.'],['radio','Live from the field','Office hours, journal clubs and congress live cases, with a feed of real news from the specialty.'],['clip','Logbook and CME in one place','Cases, competencies and hours that follow you from course to course.'],['globe','English and Arabic','Every lecture subtitled in both languages, with an Arabic interface.']];
  return pubNav('home')+`<main>
  <section class="hero"><div class="wrap hero-grid">
    <div>
      <p class="eyebrow">ROEYA Lumen · for GI and endoscopy fellows</p>
      <h1 style="margin-top:14px">Watch it. Practise it. <em>Log it.</em></h1>
      <p class="lede">The members-only curriculum for endoscopy training in Africa and the Middle East: recorded lectures and live cases, the exact kit for every technique, the ROEYA model to rehearse on, and the experts to ask when it does not go in.</p>
      <div class="cta"><a class="btn btn-primary btn-lg" href="#plans">See plans ${ic('arrowR','flip')}</a><a class="btn btn-secondary btn-lg" href="#login">${t('Sign in')}</a></div>
      <div class="proof">
        <div><b class="tnum">${VIDEOS.length}</b><span>lectures and live cases</span></div>
        <div><b class="tnum">${PATHWAYS.length}</b><span>pathways</span></div>
        <div><b class="tnum">${TECHNIQUES.length}</b><span>technique kits</span></div>
        <div><b class="tnum">${MODELS.length}</b><span>training models</span></div>
      </div>
    </div>
    <div class="monitor"><canvas data-anim="hero" aria-label="Animated endoscopy monitor showing the duodenal papilla"></canvas><span class="bezel-tag">ROEYA LUMEN · ERCP-001</span></div>
  </div></section>

  <section class="section band" id="sec-how"><div class="wrap">
    <div class="section-head"><div><p class="eyebrow">The curriculum</p><h2 style="margin-top:10px">One technique, six steps, one record.</h2><p>Every pathway follows the same route from the first video to independent practice. Your ROEYA course sits in the middle of it, not on its own.</p></div></div>
    <div class="journey">${steps.map((s,i)=>`<div class="st"><span class="n">0${i+1}</span><h4>${s[0]}</h4><p>${s[1]}</p>${ic(s[2])}</div>`).join('')}</div>
  </div></section>

  <section class="section" id="sec-lib"><div class="wrap" style="display:grid;gap:24px">
    <div class="section-head" style="margin:0"><div><p class="eyebrow">Inside the library</p><h2 style="margin-top:10px">Every video on the monitor you actually use.</h2><p>Chapters, transcripts in English and Arabic, the kit list, a quiz and the model to practise on, next to the video.</p></div><a class="btn btn-secondary" href="#signup">Get access</a></div>
    <div class="vgrid">${sample.map(v=>vcard(v,{lock:true})).join('')}</div>
  </div></section>

  <section class="section band" id="sec-feat"><div class="wrap">
    <div class="section-head"><div><p class="eyebrow">What members get</p><h2 style="margin-top:10px">Built around the endoscopy unit, not a classroom.</h2></div></div>
    <div class="feature-grid">${feats.map(f=>`<div class="feature"><span class="ic">${ic(f[0])}</span><h3>${f[1]}</h3><p>${f[2]}</p></div>`).join('')}</div>
  </div></section>

  <section class="section"><div class="wrap">
    <div class="passport">
      <span class="stamp">${ic('ticket')}</span>
      <div><h3>Every ROEYA course comes with a Course Passport</h3><p>Register for a ROEYA hands-on course and your Lumen access opens the same day: pre-course modules, the kit lists, and the recordings to revise afterwards.</p></div>
      <a class="btn btn-primary" href="#plans">How it works</a>
    </div>
  </div></section>

  <section class="section tight band"><div class="wrap brief-band">
    <div><p class="eyebrow">The Lumen Brief</p><h2 style="font-size:clamp(24px,3vw,32px);margin-top:10px">One email on Sunday. Five minutes.</h2><p class="muted" style="margin-top:10px">The case of the week, one guideline in plain words, new videos in your fields and the next ROEYA events.</p></div>
    <form data-form="brief-public" style="display:flex;gap:10px;flex-wrap:wrap" novalidate><input class="input" style="flex:1;min-width:220px" type="email" name="email" placeholder="you@hospital.org" aria-label="Email address" required><button class="btn btn-primary" type="submit">Subscribe</button><p class="hint" style="width:100%">No spam. Unsubscribe in one click.</p></form>
  </div></section>
  </main>`+footer();
};

/* ---------- auth ---------- */
function authArt(cap){
  return `<div class="auth-art"><canvas data-anim="auth" aria-hidden="true"></canvas><div class="top">${brand('#home')}</div>${cap}</div>`;
}
R.login=()=>`<div class="auth">${authArt(`<div class="cap"><p class="eyebrow" style="color:#8FD3F5">Case of the week #46</p><h2 style="margin-top:10px">Papilla on the rim of a diverticulum. Two failed attempts. What next?</h2><p>Sign in to vote, then watch what was done in Monday’s review.</p></div>`)}
  <div class="auth-panel"><form class="auth-card" data-form="login" novalidate>
    <div><h1>Welcome back</h1><p class="muted" style="margin-top:8px">Sign in to continue your pathway.</p></div>
    <div class="sso"><button type="button" class="btn btn-secondary" data-act="sso">${ic('globe')}Continue with Google</button><button type="button" class="btn btn-secondary" data-act="sso">${ic('grid')}Continue with Microsoft</button></div>
    <div class="or">OR</div>
    <div class="field"><label for="em">Email</label><input class="input" id="em" name="email" type="email" autocomplete="username" placeholder="you@hospital.org" required></div>
    <div class="field"><label for="pw" style="display:flex;justify-content:space-between">Password <a href="#forgot" style="color:var(--brand-2);font-weight:600">Forgot password?</a></label>
      <div style="position:relative"><input class="input" id="pw" name="password" type="password" autocomplete="current-password" required style="padding-inline-end:46px"><button type="button" class="icon-btn" data-act="pwtoggle" style="position:absolute;inset-inline-end:3px;top:3px" aria-label="Show password">${ic('eye')}</button></div></div>
    <p class="err-msg" id="login-err" hidden>${ic('alert')}<span></span></p>
    <label class="check"><input type="checkbox" name="remember" checked> Keep me signed in on this device</label>
    <button class="btn btn-primary btn-lg btn-block" type="submit">${t('Sign in')}</button>
    <div class="demo-cred"><div>Demo account<br><code>test@roeya.com</code> · <code>roeya2026</code></div><button type="button" class="btn btn-sm btn-secondary" data-act="fill-demo">Fill in</button></div>
    <p class="muted" style="font-size:14px;text-align:center">New to Lumen? <a href="#signup" style="color:var(--brand-2);font-weight:600">${t('Create account')}</a></p>
  </form></div></div>`;

let SU={step:1, role:'fellow', interests:['ERCP','EUS'], name:'', email:'', country:'Egypt', center:'', file:''};
R.signup=()=>{
  const st=SU.step, dots=[1,2,3,4].map(i=>`<i class="${i<=st?'on':''}"></i>`).join('');
  const roles=[['fellow','GI fellow','Year 1–3 of training'],['adv','Advanced endoscopy fellow','ERCP, EUS or third space'],['cons','Consultant','Trainer or practising endoscopist'],['nurse','Endoscopy nurse','Assisting and reprocessing'],['surg','Surgeon','HPB, bariatric or upper GI'],['res','Resident','Before fellowship']];
  let body='';
  if(st===1) body=`<div><h1>Create your account</h1><p class="muted" style="margin-top:8px">Step 1 of 4 · About you</p></div>
    <div class="field"><label for="su-n">Full name</label><input class="input" id="su-n" name="name" value="${esc(SU.name)}" placeholder="Dr. First Last" required></div>
    <div class="field"><label for="su-e">Work email</label><input class="input" id="su-e" name="email" type="email" value="${esc(SU.email)}" placeholder="you@hospital.org" required></div>
    <div class="field"><label for="su-p">Password</label><input class="input" id="su-p" name="password" type="password" minlength="8" required><span class="hint">At least 8 characters.</span></div>`;
  if(st===2) body=`<div><h1>Your role</h1><p class="muted" style="margin-top:8px">Step 2 of 4 · We use this to suggest a pathway</p></div>
    <div class="role-grid">${roles.map(r=>`<button type="button" class="role${SU.role===r[0]?' on':''}" data-act="su-role" data-id="${r[0]}"><b>${r[1]}</b><span>${r[2]}</span></button>`).join('')}</div>
    <div class="field"><label for="su-c">Country</label><select class="select" id="su-c" name="country">${['Egypt','Saudi Arabia','United Arab Emirates','Algeria','Morocco','Nigeria','Kenya','Sudan','Iraq','Jordan','Lebanon','Oman','Other'].map(c=>`<option${SU.country===c?' selected':''}>${c}</option>`).join('')}</select></div>
    <div class="field"><label for="su-h">Training center</label><input class="input" id="su-h" name="center" value="${esc(SU.center)}" placeholder="Hospital or university"></div>`;
  if(st===3) body=`<div><h1>Verify you are a fellow</h1><p class="muted" style="margin-top:8px">Step 3 of 4 · Checked by our team within two working days</p></div>
    <label class="upload" for="su-f">${ic('upload')}<div><b style="font-size:14px">${SU.file?esc(SU.file):'Upload fellowship letter or hospital ID'}</b><p class="hint">PDF, JPG or PNG up to 5 MB${SU.file?' · ready to submit':''}</p></div></label><input id="su-f" type="file" accept=".pdf,.jpg,.jpeg,.png" class="sr" data-change="su-file">
    <div class="or">OR</div>
    <div class="field"><label for="su-code">ROEYA course code</label><input class="input" id="su-code" name="code" placeholder="e.g. ERCP4-2026"><span class="hint">On your course confirmation email. Verifies you instantly.</span></div>
    <div class="notice info">${ic('shield')}<span>Your document is only used for verification and deleted after review.</span></div>`;
  if(st===4) body=`<div><h1>What do you want to learn?</h1><p class="muted" style="margin-top:8px">Step 4 of 4 · Pick at least one field</p></div>
    <div class="chips">${MODS.map(m=>`<button type="button" class="chip${SU.interests.includes(m)?' on':''}" data-act="su-int" data-id="${esc(m)}">${esc(m)}</button>`).join('')}</div>
    <label class="check"><input type="checkbox" name="brief" checked> Send me The Lumen Brief every Sunday</label>
    <label class="check"><input type="checkbox" name="terms" required> I agree to the terms and to remove patient identifiers from anything I share</label>`;
  return `<div class="auth">${authArt(`<div class="cap"><p class="eyebrow" style="color:#8FD3F5">Join ROEYA Lumen</p><h2 style="margin-top:10px">From the first video to your first independent list.</h2><p>Verified fellows, real faculty, and the ROEYA models behind every technique.</p></div>`)}
  <div class="auth-panel"><form class="auth-card" data-form="signup" novalidate><div class="steps-dots">${dots}</div>${body}
    <p class="err-msg" id="su-err" hidden>${ic('alert')}<span></span></p>
    <div style="display:flex;gap:10px">${st>1?`<button type="button" class="btn btn-secondary btn-lg" data-act="su-back">${t('Back')}</button>`:''}<button class="btn btn-primary btn-lg" style="flex:1" type="submit">${st<4?'Continue':'Create account'}</button></div>
    <p class="muted" style="font-size:14px;text-align:center">Already a member? <a href="#login" style="color:var(--brand-2);font-weight:600">${t('Sign in')}</a></p>
  </form></div></div>`;
};
let FORGOT_SENT=false;
R.forgot=()=>`<div class="auth">${authArt('')}
  <div class="auth-panel"><form class="auth-card" data-form="forgot" novalidate>
  ${FORGOT_SENT?`<div class="feature" style="text-align:start"><span class="ic">${ic('mail')}</span><h3>Check your inbox</h3><p>If an account exists for that email, a reset link is on its way. It expires in 30 minutes.</p></div><a class="btn btn-primary btn-lg btn-block" href="#login">Back to sign in</a>`:
  `<div><h1>Reset your password</h1><p class="muted" style="margin-top:8px">We will email you a link to choose a new one.</p></div>
   <div class="field"><label for="fe">Email</label><input class="input" id="fe" name="email" type="email" placeholder="you@hospital.org" required></div>
   <p class="err-msg" id="fg-err" hidden>${ic('alert')}<span></span></p>
   <button class="btn btn-primary btn-lg btn-block" type="submit">Send reset link</button><a class="btn btn-ghost btn-block" href="#login">${t('Back')}</a>`}
  </form></div></div>`;

/* ---------- app shell ---------- */
function effTheme(){ if(S.theme==='dark'||S.theme==='light') return S.theme; return matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'; }
function shell(active,inner){
  const u=who('me'), unread=unreadCount(), egh=daysTo('2026-12-10');
  const groups=[[t('Learn'),[['today','home','Today'],['library','lib','Library'],['pathways','route','Pathways']]],[t('Practise'),[['techniques','kit','Technique kits'],['models','box','Models'],['live','radio','Live & events']]],[t('Community'),[['feed','feed','Feed'],['network','users','Network'],['messages','msg','Messages',unread],['consult','steth','Consultations']]],[t('Track'),[['logbook','clip','Logbook & CME']]]];
  return `<div class="shell">
  <aside class="side" aria-label="Sidebar">${brand('#today')}
    ${groups.map(g=>`<div class="nav-group"><span>${g[0]}</span><nav class="nav">${g[1].map(n=>`<a href="#${n[0]}" class="${active===n[0]?'on':''}">${ic(n[1])}<span>${t(n[2])}</span>${n[3]?`<span class="count">${n[3]}</span>`:''}</a>`).join('')}</nav></div>`).join('')}
    <div class="side-foot">${planCard()}<span class="build">Demo build · v0.9</span></div>
  </aside>
  <div class="main">
    <header class="topbar">
      <a class="m-brand" href="#today" aria-label="Home">${brandImgs(30)}</a>
      <div class="search" id="search">${ic('search')}<input id="q" type="search" placeholder="${t('Search lectures, techniques, people')}" autocomplete="off" aria-label="Search"><kbd>/</kbd><div class="search-pop" id="search-pop" hidden></div></div>
      <div class="top-actions">
        <a class="live-pill" href="#live"><span class="live-dot"></span>EGH 2026 · ${egh>0?`${egh} days`:'now'}</a>
        <button class="icon-btn m-search" data-act="msearch" aria-label="Search">${ic('search')}</button>
        <button class="icon-btn" data-act="lang" aria-label="Switch language"><b style="font-size:13px">${S.lang==='ar'?'EN':'ع'}</b></button>
        <button class="icon-btn" data-act="theme" aria-label="Switch theme">${ic(effTheme()==='dark'?'sun':'moon')}</button>
        <div style="position:relative"><button class="icon-btn" data-act="notifs" aria-label="${t('Notifications')}">${ic('bell')}${S.notifRead?'':'<span class="dot"></span>'}</button><div id="notif-menu"></div></div>
        <div style="position:relative"><button data-act="usermenu" aria-label="Account menu" style="display:grid;padding:3px">${av(u,32,{ring:true})}</button><div id="user-menu"></div></div>
      </div>
    </header>
    <main class="page" id="page">${inner}</main>
  </div>
  <nav class="tabbar" aria-label="Main">${[['today','home','Today'],['library','lib','Library'],['live','radio','Live & events'],['feed','feed','Feed']].map(n=>`<a href="#${n[0]}" class="${active===n[0]?'on':''}">${ic(n[1])}<span>${t(n[2]).split(' ')[0]}</span></a>`).join('')}<button data-act="drawer">${ic('menu')}<span>${t('Menu')}</span></button></nav>
  </div>`;
}
function planCard(){
  if(isDemo()) return `<div class="plan-card"><div style="display:flex;justify-content:space-between;align-items:center"><b>${esc(DEMO_USER.plan)}</b><span class="tag brand">${S.bill==='monthly'?'Monthly':'Annual'}</span></div><small>Renews 1 March 2027 · 2 consultations left this month</small><a href="#account" class="btn btn-sm btn-secondary">${t('Plan & billing')}</a></div>`;
  return `<div class="plan-card"><div style="display:flex;justify-content:space-between;align-items:center"><b>Pilot access</b><span class="tag ok">Free</span></div><small>Full access while Lumen is in pilot. Paid plans open at launch.</small><a href="#plans" class="btn btn-sm btn-secondary">${t('Plans')}</a></div>`;
}
function pageHead(title,sub,right=''){ return `<div class="page-head"><div><h1>${title}</h1>${sub?`<p>${sub}</p>`:''}</div>${right?`<div style="display:flex;gap:8px;flex-wrap:wrap">${right}</div>`:''}</div>`; }

/* ---------- pathway helpers ---------- */
function itemStatus(it){ if(it[0]==='v'&&S.watched.includes(it[1])) return 1; if(it.key&&(S.steps||{})[it.key]) return 1; if(isDemo()) return it[2]; if(it[0]==='v'&&(S.prog[it[1]]||0)>0) return 2; return 0; }
function stageStatus(st){ const s=st.items.map(i=>itemStatus(i)); if(s.every(x=>x===1)) return 'done'; if(s.some(x=>x===2)||s.some(x=>x===1)) return 'cur'; return ''; }
function pwProgress(p){ const all=p.stages.flatMap(s=>s.items); const done=all.filter(i=>itemStatus(i)===1).length; const calc=p.stages.findIndex(s=>stageStatus(s)!=='done'); const cur=(isDemo()&&typeof p.cur==='number'&&p.cur<p.stages.length&&p.cur>0)?p.cur:(calc<0?p.stages.length-1:calc); return {pct:done/all.length,done,total:all.length,cur}; }

/* ---------- today ---------- */
R.today=()=>{
  const u=who('me'), hr=NOW.getHours(), greet=hr<12?'Good morning':hr<18?'Good afternoon':'Good evening';
  const inprog=Object.keys(S.prog).filter(id=>V(id)&&!S.watched.includes(id)).sort((a,b)=>a==='ercp-cannulation'?-1:b==='ercp-cannulation'?1:0);
  const cw=V(inprog[0]||'ercp-cannulation'), pos=S.prog[cw.id]||0;
  const pw=isDemo()?PW('ercp'):PATHWAYS.find(isEnrolled), pr=pw?pwProgress(pw):null, stage=pw?pw.stages[Math.max(0,pr.cur)]:null;
  const next=pw?pw.stages.flatMap(s=>s.items).filter(i=>itemStatus(i)!==1).slice(0,3):[];
  const cotw=feedPosts().find(p=>p.id==='p2'&&p.poll)||POSTS.find(p=>p.id==='p2');
  const ercpLogged=(isDemo()?46:0)+S.logAdd.filter(r=>r[1]==='ERCP').length;
  const newV=VIDEOS.filter(v=>v.isNew).sort((a,b)=>pd(b.date)-pd(a.date));
  return shell('today',`
  ${pageHead(`${t(greet)}, ${esc((S.user?.first)||DEMO_USER.first)}`,todaySub(pw,pr,ercpLogged),`<a class="btn btn-secondary" href="#logbook">${ic('clip')}${t('Logbook & CME')}</a>`)}
  <section class="feature-hero">
    <div class="monitor"><canvas data-anim="cw" data-vid="${cw.id}" aria-label="${esc(cw.t)}"></canvas><span class="bezel-tag">${cw.code}</span></div>
    <div><p class="eyebrow">${pos>0?t('Continue watching'):'Start here'}</p><h2 style="margin-top:10px">${esc(cw.t)}</h2><p>${esc(cw.desc)}</p>
      <div class="meta"><span class="tag brand">${cw.type}</span><span class="tag">${cw.mod}</span>${levelTag(cw.lvl)}<span class="tag">${cw.dur} min</span>${cw.cme?`<span class="tag ok">${cw.cme} CME</span>`:''}</div>
      <div style="display:grid;gap:6px;margin-top:16px"><div class="bar mucosa"><i style="width:${Math.round(pos/(cw.dur*60)*100)}%"></i></div><span class="hint">${mmss(pos)} of ${cw.dur}:00 · ${esc(FAC[cw.fac].name)}</span></div>
      <div class="cta"><a class="btn btn-primary" href="#v-${cw.id}">${ic('play')}${pos>0?t('Resume')+' '+mmss(pos):'Start watching'}</a><a class="btn btn-secondary" href="${pw?'#p-'+pw.id:'#pathways'}">${pw?t('Open pathway'):'Choose a pathway'}</a></div></div>
  </section>
  <div class="grid-3">
    ${pw?`<section class="panel"><div class="panel-head"><h3>${esc(pw.mod)} pathway</h3><a href="#p-${pw.id}">${t('Open pathway')}</a></div>
      <div style="display:flex;gap:14px;align-items:center">${ringSVG(pr.pct,64,6)}<div><b style="font-size:15px">Stage ${pr.cur+1} of 6 · ${stage.n}</b><p class="hint">${pr.done} of ${pr.total} steps done · Mentor: ${esc(FAC[pw.mentor].name)}</p></div></div>
      ${next.map(it=>pwItemRow(it)).join('')}
    </section>`:`<section class="panel"><div class="panel-head"><h3>Start a pathway</h3><a href="#pathways">${t('See all')}</a></div>${PATHWAYS.slice(0,3).map(x=>`<div class="mod"><span class="st-ic">${ic('route')}</span><div class="grow"><a href="#p-${x.id}">${esc(x.name)}</a><br><small>${x.hours} h · ${x.cme} CME</small></div><button class="btn btn-sm btn-secondary" data-act="enrol" data-id="${x.id}">${t('Enrol')}</button></div>`).join('')}</section>`}
    <section class="panel"><div class="panel-head"><h3>${t('This week')}</h3><a href="#live">${t('See all')}</a></div>
      ${SESSIONS.length?'':'<p class="hint">No live sessions scheduled this week.</p>'}${SESSIONS.slice(0,3).map(s=>{ const d=pd(s.when), on=S.reminders.includes(s.id); return `<div class="mod"><span class="st-ic${on?' cur':''}">${ic('clock')}</span><div class="grow"><b style="font-size:14px;font-weight:600">${esc(s.t)}</b><br><small>${['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][d.getDay()]} ${fmtDate(d,false)} · ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')} Cairo · ${esc(FAC[s.fac].name)}</small></div><button class="btn btn-sm ${on?'btn-secondary':'btn-ghost'}" data-act="remind" data-id="${s.id}">${on?ic('check'):ic('bell')}</button></div>`; }).join('')}
    </section>
    <section class="panel" style="display:grid;gap:14px;align-content:start"><div class="panel-head" style="margin:0"><h3>EGH 2026</h3><span class="tag live"><span class="live-dot"></span>15 live cases</span></div>
      <p class="muted" style="font-size:14px">10–12 December · Cairo Marriott, Zamalek. Live cases from Misr International Hospital, hands-on stations and seven crash courses.</p>
      <div class="countdown" data-countdown="2026-12-10T09:00:00+02:00">${cdCells('2026-12-10T09:00:00+02:00')}</div>
      <a class="btn btn-secondary" href="#live">Programme and registration</a>
    </section>
  </div>
  ${row(t('New this week'),newV,{more:'#library'})}
  <div class="grid-2">
    <section class="panel"><div class="panel-head"><h3>Case of the week #46</h3><span class="tag">Closes Monday</span></div>
      <p style="font-size:14.5px">${esc(cotw.poll.q)}</p>
      <div class="poll" style="margin-top:12px">${pollHTML(cotw)}</div>
      <a class="btn btn-ghost btn-sm" href="#feed" style="margin-top:10px">Discuss in the feed ${ic('arrowR','flip')}</a>
    </section>
    <section class="panel"><div class="panel-head"><h3>Guideline digest</h3><span class="tag brand">ESGE</span></div>
      <p style="font-weight:600">Post-ERCP pancreatitis: rectal NSAIDs for everyone without a contraindication.</p>
      <p class="muted" style="font-size:14px;margin-top:8px">100 mg diclofenac or indomethacin immediately before ERCP, and a prophylactic pancreatic stent for selected high-risk patients.</p>
      <div style="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap"><a class="btn btn-secondary btn-sm" href="#v-ercp-pep">${ic('play')}Watch the 14-min digest</a><a class="btn btn-ghost btn-sm" href="https://www.esge.com/" target="_blank" rel="noopener">${ic('ext')}ESGE guidelines</a></div>
    </section>
  </div>
  ${row(pw?`Because you are on the ${pw.mod} pathway`:'Start with ERCP',VIDEOS.filter(v=>v.mod===(pw?pw.mod:'ERCP')&&!v.isNew),{more:'#library'})}
  ${row(t('Most watched'),[...VIDEOS].sort((a,b)=>b.views-a.views).slice(0,10))}
  ${row(t('Live archive'),VIDEOS.filter(v=>v.type==='Live case'))}
  `);
};
function todaySub(pw,pr,n){
  if(isDemo()) return `You are ${n} cases into your ERCP logbook and on stage ${pr.cur+1} of 6.${courseLine()}`;
  if(!pw) return 'Welcome to Lumen. Pick a pathway to start your curriculum, or browse the library.';
  return `You are on stage ${pr.cur+1} of 6 of ${pw.name}.${n?` ${n} ERCP${n===1?'':'s'} in your logbook.`:''}`;
}
function courseLine(){ const e=EV('ercp-4'); const a=pd(e.start), b=pd(e.end+'T23:59:00+02:00'); if(NOW>=a&&NOW<=b){ const d=Math.floor((NOW-a)/864e5)+1, n=Math.round((pd(e.end)-a)/864e5)+1; return d===n?' Your ERCP course finishes today.':` Day ${d} of ${n} of your ERCP course.`; } return NOW<a?` Your ERCP course starts ${fmtDate(e.start,false)}.`:' Your ERCP course recordings are in the pathway.'; }
function pwItemRow(it){
  const s=itemStatus(it), icn=s===1?ic('check'):s===2?ic('play'):'';
  let main='';
  if(it[0]==='v'){ const v=V(it[1]); main=`<a href="#v-${v.id}">${esc(v.t)}</a><br><small>${v.type} · ${v.dur} min${v.cme?` · ${v.cme} CME`:''}</small>`; }
  else if(it[0]==='m'){ main=`<a href="#models">${esc(it[3])}</a><br><small>${esc(MD(it[1]).name)} · ROEYA Training Center</small>`; }
  else if(it[0]==='e'){ const e=EV(it[1]); main=`<a href="#live">${esc(it[3])}</a><br><small>${e?fmtRange(e.start,e.end)+' · '+esc(e.place):'Completed'}</small>`; }
  else main=`<span>${esc(it[3])}</span><br><small>${{o:'Observation',l:'Logbook',a:'Assessment'}[it[0]]}</small>`;
  const self=it[0]!=='v'&&it.key&&(s!==1||(S.steps||{})[it.key]);
  return `<div class="mod"><span class="st-ic${s===1?' done':s===2?' cur':''}">${icn}</span><div class="grow">${main}</div>${self?`<button class="btn btn-sm btn-ghost" data-act="step" data-k="${it.key}">${s===1?ic('check')+'Done':'Mark done'}</button>`:''}</div>`;
}
function cdCells(target){ const ms=Math.max(0,pd(target)-Date.now()), d=Math.floor(ms/864e5), h=Math.floor(ms%864e5/36e5), m=Math.floor(ms%36e5/6e4), s=Math.floor(ms%6e4/1e3); return [[d,'days'],[h,'hrs'],[m,'min'],[s,'sec']].map(x=>`<div><b>${String(x[0]).padStart(2,'0')}</b><span>${x[1]}</span></div>`).join(''); }
function pollHTML(p){
  const mine=myVote(p), counts=pollCounts(p), tot=counts.reduce((a,b)=>a+b,0);
  return p.poll.o.map((o,i)=>{ const pct=tot?Math.round(counts[i]/tot*100):0; return `<button class="${mine===i?'mine':''}" data-act="vote" data-post="${p.id}" data-i="${i}">${mine!=null?`<i style="width:${pct}%"></i>`:''}<span><span>${esc(o[0])}</span>${mine!=null?`<b class="tnum">${pct}%</b>`:''}</span></button>`; }).join('')+(mine!=null?`<p class="hint">${tot} vote${tot===1?'':'s'} · You voted</p>`:'<p class="hint">Vote to see what others chose</p>');
}

/* ---------- library ---------- */
let LIB={type:'All',mod:'',lvl:'',sort:'new',saved:false,q:''};
R.library=()=>{
  const types=['All',...TYPES], filtered=LIB.type!=='All'||LIB.mod||LIB.lvl||LIB.saved||LIB.q;
  let list=VIDEOS.filter(v=>(LIB.type==='All'||v.type===LIB.type)&&(!LIB.mod||v.mod===LIB.mod)&&(!LIB.lvl||v.lvl===LIB.lvl)&&(!LIB.saved||S.bm.includes(v.id))&&(!LIB.q||(v.t+' '+v.mod+' '+FAC[v.fac].name+' '+v.desc).toLowerCase().includes(LIB.q.toLowerCase())));
  list.sort(LIB.sort==='views'?(a,b)=>b.views-a.views:LIB.sort==='short'?(a,b)=>a.dur-b.dur:(a,b)=>pd(b.date)-pd(a.date));
  const feat=V('ercp-stones');
  const byMod=m=>VIDEOS.filter(v=>v.mod===m);
  return shell('library',`
  ${pageHead(t('Library'),`${VIDEOS.length} lectures, techniques and live cases from ${Object.keys(FAC).length} faculty. New videos every week.`,`<button class="btn btn-secondary${LIB.saved?' on':''}" data-act="lib-saved">${ic(LIB.saved?'bookmarkF':'bookmark')}${t('Saved videos')} · ${S.bm.length}</button>`)}
  <div style="display:grid;gap:12px">
    <div class="chips scroll" role="tablist" aria-label="${t('Type')}">${types.map(x=>`<button class="chip${LIB.type===x?' on':''}" data-act="lib-type" data-id="${esc(x)}">${x==='All'?t('All'):esc(x)}</button>`).join('')}</div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">
      <div class="search" style="max-width:320px;flex:1 1 220px">${ic('search')}<input type="search" data-input="lib-q" value="${esc(LIB.q)}" placeholder="Filter this library" aria-label="Filter videos" style="padding-inline-end:14px"></div>
      <select class="select" style="width:auto;height:40px" data-change="lib-mod" aria-label="${t('Module')}"><option value="">All modules</option>${MODS.map(m=>`<option${LIB.mod===m?' selected':''}>${esc(m)}</option>`).join('')}</select>
      <select class="select" style="width:auto;height:40px" data-change="lib-lvl" aria-label="${t('Level')}"><option value="">All levels</option>${LEVELS.map(m=>`<option${LIB.lvl===m?' selected':''}>${m}</option>`).join('')}</select>
      <select class="select" style="width:auto;height:40px" data-change="lib-sort" aria-label="${t('Sort')}"><option value="new"${LIB.sort==='new'?' selected':''}>${t('Newest')}</option><option value="views"${LIB.sort==='views'?' selected':''}>${t('Most watched')}</option><option value="short"${LIB.sort==='short'?' selected':''}>${t('Shortest')}</option></select>
      ${filtered?`<button class="btn btn-ghost btn-sm" data-act="lib-clear">${ic('x')}${t('Clear filters')}</button>`:''}
    </div>
  </div>
  ${filtered?`<p class="hint" style="margin-bottom:-20px">${list.length} video${list.length===1?'':'s'}</p>${list.length?`<div class="vgrid">${list.map(v=>vcard(v)).join('')}</div>`:`<div class="empty">${LIB.saved?'Nothing saved yet. Use the bookmark on any video to keep it here.':'No videos match these filters.'}<br><button class="btn btn-secondary btn-sm" data-act="lib-clear" style="margin-top:12px">${t('Clear filters')}</button></div>`}`:`
  <section class="feature-hero">
    <a class="monitor" href="#v-${feat.id}" aria-label="${esc(feat.t)}">${artImg(feat.art,960,540,vmeta(feat))}<span class="bezel-tag">${feat.code}</span></a>
    <div><p class="eyebrow">New masterclass</p><h2 style="margin-top:10px">${esc(feat.t)}</h2><p>${esc(feat.desc)}</p>
      <div class="meta"><span class="tag brand">${feat.type}</span><span class="tag">${feat.mod}</span>${levelTag(feat.lvl)}<span class="tag">${feat.dur} min</span><span class="tag ok">${feat.cme} CME</span></div>
      <div class="cta"><a class="btn btn-primary" href="#v-${feat.id}">${ic('play')}Watch now</a><button class="btn btn-secondary" data-act="bm" data-id="${feat.id}">${ic(S.bm.includes(feat.id)?'bookmarkF':'bookmark')}${S.bm.includes(feat.id)?t('Saved'):t('Save')}</button></div></div>
  </section>
  ${row("What’s new",[...VIDEOS].sort((a,b)=>pd(b.date)-pd(a.date)).slice(0,10))}
  ${row(t('Most watched'),[...VIDEOS].sort((a,b)=>b.views-a.views).slice(0,10))}
  ${row('ERCP',byMod('ERCP'))}
  ${row('Endoscopic ultrasound',byMod('EUS'))}
  ${row('Third space: ESD and POEM',byMod('Third space'))}
  ${row('Live cases',VIDEOS.filter(v=>v.type==='Live case'))}
  ${row('Upper GI and colonoscopy',[...byMod('Upper GI'),...byMod('Colonoscopy')])}
  ${row('Bleeding and haemostasis',byMod('Hemostasis'))}
  ${row('Guideline digests and webinars',VIDEOS.filter(v=>v.type==='Guideline digest'||v.type==='Webinar'))}
  ${row('Bariatric, small bowel and IBD',[...byMod('Bariatric'),...byMod('Small bowel & IBD')])}
  ${row('Nursing and laparoscopy',[...byMod('Nursing'),...byMod('Laparoscopy')])}
  ${row('Research and publication',byMod('Research'))}`}
  `);
};

/* ---------- watch ---------- */
let P={id:null,t:0,playing:false,speed:1,cc:'en',dur:0,last:0,tab:'chapters',trLang:'en',lastSave:0,lastCh:-1,lastTr:-1,anim:null};
R.watch=(id)=>{
  const v=V(id); if(!v) return R.notfound();
  const f=FAC[v.fac], chs=chaptersFor(v), hasTr=v.id==='ercp-cannulation', model=v.model?MD(v.model):null, bm=S.bm.includes(v.id);
  const next=VIDEOS.filter(x=>x.id!==v.id&&(x.mod===v.mod||x.kit&&x.kit===v.kit)).slice(0,4);
  const fill=next.length<4?VIDEOS.filter(x=>x.id!==v.id&&!next.includes(x)).slice(0,4-next.length):[];
  return shell('library',`
  <div class="watch">
    <div style="display:grid;grid-template-columns:minmax(0,1fr);gap:20px;min-width:0">
      <div class="player" id="player">
        <canvas id="pcv" aria-label="Video: ${esc(v.t)}"></canvas>
        <div class="cc" id="cc" aria-live="off"></div>
        <button class="big-play" id="bigplay" data-act="pplay" aria-label="Play">${'<span>'+ic('play')+'</span>'}</button>
        <div class="ctl">
          <div class="scrub" id="scrub" data-act="scrub" role="slider" aria-label="Seek" aria-valuemin="0" aria-valuemax="${v.dur*60}" tabindex="0"><i id="sbar"></i>${chs.slice(1).map(c=>`<b style="inset-inline-start:${(c.t/(v.dur*60)*100).toFixed(2)}%"></b>`).join('')}</div>
          <div class="row-c">
            <button data-act="pplay" id="pbtn" aria-label="Play">${ic('play')}</button>
            <button data-act="pseek" data-d="-10" aria-label="Back 10 seconds">${ic('rew')}</button>
            <button data-act="pseek" data-d="10" aria-label="Forward 10 seconds">${ic('fwd')}</button>
            <button class="hide-s" data-act="toast" data-msg="Audio is part of the final recording." aria-label="Volume">${ic('vol')}</button>
            <span class="time" id="ptime">00:00 / ${mmss(v.dur*60)}</span>
            <span style="flex:1"></span>
            <button data-act="pcc" id="ccbtn" class="${hasTr&&P.cc!=='off'?'on':''}" aria-label="Subtitles" title="${hasTr?'Subtitles: English / Arabic / off':'Subtitles arrive with the final recording'}">${ic('cc')}</button>
            <button data-act="pspeed" aria-label="Playback speed" id="spbtn" style="width:auto;padding-inline:8px;font-family:var(--f-mono);font-size:12px">${P.speed}×</button>
            <button data-act="pfull" aria-label="Full screen">${ic('full')}</button>
          </div>
        </div>
        <div class="speed-pop" id="speedpop" hidden>${[0.75,1,1.25,1.5,2].map(s=>`<button data-act="pspeedset" data-s="${s}">${s}×</button>`).join('')}</div>
      </div>
      <div class="watch-title">
        <div class="chips" style="gap:6px">${v.type==='Live case'?'<span class="tag live">Live case</span>':`<span class="tag brand">${v.type}</span>`}<span class="tag">${v.mod}</span>${levelTag(v.lvl)}${v.cme?`<span class="tag ok">${v.cme} CME</span>`:''}<span class="tag">EN · AR</span></div>
        <h1 style="margin-top:12px">${esc(v.t)}</h1>
        <div class="watch-meta">
          <div class="byline">${av(v.fac,40,{ring:true})}<div><b>${esc(f.name)}</b><small>${esc(f.role)} · ${esc(f.city)}</small></div></div>
          <button class="btn btn-sm ${S.follow.includes(v.fac)?'btn-secondary':'btn-primary'}" data-act="follow" data-id="${v.fac}">${S.follow.includes(v.fac)?ic('check')+t('Following'):ic('plus')+'Follow'}</button>
          <span class="hint">${fmtViews(v.views)} views · ${ago(v.date)}</span>
          <div class="watch-actions">
            <button class="btn btn-secondary btn-sm" data-act="bm" data-id="${v.id}">${ic(bm?'bookmarkF':'bookmark')}${bm?t('Saved'):t('Save')}</button>
            <button class="btn btn-secondary btn-sm" data-act="share">${ic('share')}${t('Share')}</button>
            <button class="btn btn-secondary btn-sm" data-act="toast" data-msg="Offline downloads are available in the Lumen app for Fellow plans.">${ic('download')}${t('Download')}</button>
            <button class="btn btn-primary btn-sm" data-act="ask" data-id="${v.fac}" data-vid="${v.id}">${ic('msg')}${t('Ask the expert')}</button>
          </div>
        </div>
      </div>
      <section class="panel"><h3>${t('Description')}</h3><p class="muted" style="margin-top:8px">${esc(v.desc)}</p>
        <div class="table-wrap" style="margin-top:14px;border:0"><table class="t" style="min-width:0"><tbody>
          <tr><td class="faint" style="width:34%">Faculty</td><td>${esc(f.name)}</td></tr>
          <tr><td class="faint">Published</td><td>${fmtDate(v.date)} · ${v.code}</td></tr>
          <tr><td class="faint">Duration</td><td>${v.dur} minutes · ${chs.length} chapters</td></tr>
          <tr><td class="faint">Credit</td><td>${v.cme?`${v.cme} CME hours after the quiz`:'Not credit-bearing'}</td></tr>
          <tr><td class="faint">Subtitles</td><td>English, العربية</td></tr>
        </tbody></table></div>
      </section>
      ${model?`<div class="practise">${artImg(model.art,320,200,{code:'MODEL',facShort:'ROEYA'},{alt:model.name})}<div><b>${t('Practise this on the model')}: ${esc(model.name)}</b><p>${esc(model.tissue)}. ${esc(model.note)}.</p></div><button class="btn btn-primary btn-sm" data-act="model-req" data-id="${model.id}">${t('Request a session')}</button></div>`:''}
      ${qaSection(v)}
      <section class="row-wrap"><div class="row-head"><h2>${t('Up next')}</h2></div><div class="vgrid">${[...next,...fill].map(x=>vcard(x)).join('')}</div></section>
    </div>
    <aside class="side-tabs" aria-label="Video tools">
      <div class="tabs" role="tablist">${[['chapters','Chapters'],['transcript','Transcript'],['kit','Kit'],['quiz','Quiz'],['notes','Notes']].map(x=>`<button role="tab" class="${P.tab===x[0]?'on':''}" data-act="ptab" data-id="${x[0]}">${t(x[1])}</button>`).join('')}</div>
      <div class="tab-body" id="tabbody">${tabBody(v)}</div>
    </aside>
  </div>`);
};
function qaSection(v){
  const qa=qaList(v);
  return `<section class="panel" id="qa"><div class="panel-head"><h3>${t('Questions & answers')} <span class="faint" style="font-weight:500">· ${qa.length}</span></h3><span class="hint">Faculty answer within 48 hours</span></div>
        <form class="cmt-in" data-form="vqa" data-id="${v.id}" style="margin:0 0 6px">${av('me',34)}<input class="input" name="q" placeholder="Ask a question about this video" aria-label="Your question" autocomplete="off"><button class="btn btn-primary" type="submit">${t('Post')}</button></form>
        ${qa.map(c=>{ const p=who(c[0]); return `<div class="comment" style="${c[2]?'padding-inline-start:44px':''}">${av(p,34)}<div class="body"><b>${esc(p.name)}</b>${c[2]?' <span class="tag brand">Faculty</span>':''}<small>${c[3]||(c[2]?'2 days ago':'3 days ago')}</small><p>${esc(c[1])}</p></div></div>`; }).join('')}
      </section>`;
}
function tabBody(v){
  const chs=chaptersFor(v);
  if(P.tab==='chapters') return chs.map((c,i)=>`<button class="chap" data-act="pgo" data-t="${c.t}" data-ch="${i}"><span class="ts">${mmss(c.t)}</span><span><span class="ct">${esc(c.title)}</span><br><span class="cd">${esc(c.d)}</span></span></button>`).join('');
  if(P.tab==='transcript'){
    if(v.id!=='ercp-cannulation') return `<div class="empty" style="text-align:start">${ic('file')}<p style="margin-top:8px">The English and Arabic transcripts are attached when the final recording is uploaded.</p><p style="margin-top:8px">Open <a href="#v-ercp-cannulation" style="color:var(--brand-2)">Wire-guided biliary cannulation</a> to see how they work.</p></div>`;
    const tr=P.trLang==='ar'?TRANSCRIPT_AR:TRANSCRIPT_EN;
    return `<div class="seg" style="margin-bottom:10px"><button class="${P.trLang==='en'?'on':''}" data-act="trlang" data-id="en">English</button><button class="${P.trLang==='ar'?'on':''}" data-act="trlang" data-id="ar">العربية</button></div>
      <div class="${P.trLang==='ar'?'tr-ar':''}">${tr.map((l,i)=>`<button class="tr-line" data-act="pgo" data-t="${l[0]}" data-tr="${i}"><span class="ts">${mmss(l[0])}</span><span>${esc(l[1])}</span></button>`).join('')}</div>`;
  }
  if(P.tab==='kit'){
    const k=v.kit?TK(v.kit):null;
    if(!k) return `<div class="empty" style="text-align:start">This lecture has no procedure kit. Browse <a href="#techniques" style="color:var(--brand-2)">all technique kits</a>.</div>`;
    return `<p class="eyebrow">${esc(k.name)}</p>${k.kit.map((r,i)=>`<div class="kit-row"><span class="k">${i+1}</span><div><b>${esc(r[0])}</b><span>${esc(r[1])}${r[2]?' · '+esc(r[2]):''}</span></div></div>`).join('')}
      ${k.settings?`<div class="osd-box" style="margin-top:12px">${k.settings.map(s=>`<div class="r"><span>${esc(s[0])}</span><span>${esc(s[1])}</span></div>`).join('')}<div class="warn">Illustrative. Follow your unit protocol and the generator’s instructions.</div></div>`:''}
      <a class="btn btn-secondary btn-block" style="margin-top:12px" href="#t-${k.id}">Open the full technique kit</a>`;
  }
  if(P.tab==='quiz'){
    const pool=QUIZ[MOD_QUIZ[v.mod]]||QUIZ.ercp, st=S.quiz[v.id]||{a:[],done:false};
    const score=st.done?pool.filter((q,i)=>st.a[i]===q.a).length:0;
    return `<p class="hint" style="margin-bottom:4px">${pool.length} questions${v.cme?` · pass all to add ${v.cme} CME hours`:''}</p>
      ${pool.map((q,i)=>`<div class="quiz-q"><p>${i+1}. ${esc(q.q)}</p>${q.o.map((o,j)=>{ let c=''; if(st.done){ if(j===q.a) c=' right'; else if(st.a[i]===j) c=' wrong'; } else if(st.a[i]===j) c=' sel'; return `<button class="opt${c}" data-act="qopt" data-q="${i}" data-o="${j}" ${st.done?'disabled':''}><i>${'ABCD'[j]}</i><span>${esc(o)}</span></button>`; }).join('')}${st.done?`<p class="explain">${esc(q.e)}</p>`:''}</div>`).join('')}
      ${st.done?`<div class="notice ${score===pool.length?'info':''}" style="margin-top:12px">${ic(score===pool.length?'award':'info')}<span><b>${score} of ${pool.length} correct.</b> ${score===pool.length?(v.cme?`${v.cme} CME hours added to your transcript.`:'Well done.'):'Review the explanations and try again.'}</span></div><button class="btn btn-secondary btn-block" style="margin-top:10px" data-act="qreset">${t('Try again')}</button>`:`<button class="btn btn-primary btn-block" style="margin-top:12px" data-act="qcheck">${t('Check answers')}</button>`}`;
  }
  if(P.tab==='notes'){
    const ns=S.notes[v.id]||[];
    return `<form data-form="note" style="display:grid;gap:8px"><textarea class="textarea" name="n" placeholder="Write a note. It is pinned to the current time." aria-label="Note" style="min-height:76px"></textarea><button class="btn btn-primary" type="submit">${ic('pen')}<span id="notebtn">${t('Add note')} at ${mmss(P.t)}</span></button></form>
      <div style="margin-top:10px">${ns.length?ns.map((n,i)=>`<div class="tr-line" style="align-items:flex-start"><button class="ts" data-act="pgo" data-t="${n[0]}" style="color:var(--brand-2)">${mmss(n[0])}</button><span style="flex:1">${esc(n[1])}</span><button class="icon-btn" style="width:28px;height:28px" data-act="note-del" data-i="${i}" aria-label="Delete note">${ic('x')}</button></div>`).join(''):'<p class="hint">No notes yet.</p>'}</div>`;
  }
  return '';
}

/* ---------- pathways ---------- */
R.pathways=()=>{
  const mine=PATHWAYS.filter(isEnrolled), other=PATHWAYS.filter(p=>!isEnrolled(p));
  const card=p=>{ const pr=pwProgress(p); return `<article class="pw-card"><div class="pw-top"><div><span class="tag ${pwDone(p)?'ok':isEnrolled(p)?'brand':''}">${pwDone(p)?'Completed':isEnrolled(p)?t('Enrolled'):p.mod}</span><h3>${esc(p.name)}</h3></div>${ringSVG(pr.pct,56,5,pwDone(p)?'var(--ok)':'var(--brand)')}</div>
    <p>${esc(p.blurb)}</p><div class="pw-facts"><span>${p.hours} h</span><span>${p.cme} CME</span><span>${esc(p.lvl)}</span><span>${t('Your mentor')}: ${esc(FAC[p.mentor].name)}</span></div>
    <div class="pw-stages">${p.stages.map(s=>`<i class="${stageStatus(s)==='done'?'done':stageStatus(s)==='cur'?'cur':''}" title="${s.n}"></i>`).join('')}</div>
    <div style="display:flex;gap:8px"><a class="btn ${isEnrolled(p)&&!pwDone(p)?'btn-primary':'btn-secondary'}" href="#p-${p.id}">${isEnrolled(p)&&!pwDone(p)?t('Continue'):t('View')}</a>${!isEnrolled(p)?`<button class="btn btn-ghost" data-act="enrol" data-id="${p.id}">${ic('plus')}${t('Enrol')}</button>`:''}</div></article>`; };
  return shell('pathways',`${pageHead(t('Pathways'),'Six stages from the first video to independent practice: learn, simulate, hands-on, observe, log and assess. Each pathway has a mentor and ends in a certificate.')}
    <section class="row-wrap"><div class="row-head"><h2>${t('Your pathways')}</h2></div><div class="grid-3">${mine.length?mine.map(card).join(''):'<div class="empty" style="grid-column:1/-1">You have not enrolled in a pathway yet. Pick one below.</div>'}</div></section>
    <section class="row-wrap"><div class="row-head"><h2>${t('All pathways')}</h2></div><div class="grid-3">${other.map(card).join('')}</div></section>`);
};
R.pathway=(id)=>{
  const p=PW(id); if(!p) return R.notfound();
  const pr=pwProgress(p), m=FAC[p.mentor], enr=isEnrolled(p);
  const icons={learn:'lib',simulate:'box',handson:'hand',observe:'eye',log:'clip',assess:'target'};
  return shell('pathways',`
  <div style="display:flex;gap:22px;align-items:center;flex-wrap:wrap">${ringSVG(pr.pct,96,8,pwDone(p)?'var(--ok)':'var(--brand)')}
    <div style="flex:1;min-width:240px"><p class="eyebrow">Pathway · ${esc(p.mod)}</p><h1 style="font-size:clamp(24px,3vw,34px);margin-top:8px">${esc(p.name)}</h1><p class="muted" style="margin-top:8px;max-width:70ch">${esc(p.blurb)}</p>
      <div class="pw-facts" style="margin-top:12px"><span>${p.hours} hours</span><span>${p.cme} CME</span><span>${esc(p.lvl)}</span><span>${pr.done}/${pr.total} steps</span></div></div>
    <div style="display:flex;gap:8px">${enr?`<span class="tag ${pwDone(p)?'ok':'brand'}">${pwDone(p)?'Completed':t('Enrolled')}</span>`:`<button class="btn btn-primary" data-act="enrol" data-id="${p.id}">${ic('plus')}${t('Enrol')}</button>`}</div>
  </div>
  <div class="split">
    <div class="stages">${p.stages.map((s,i)=>{ const ss=stageStatus(s); const d=s.items.filter(x=>itemStatus(x)===1).length; return `<div class="stage ${ss}"><span class="node">${ss==='done'?ic('check'):ic(icons[s.k]||'layers')}</span><div class="box"><div class="hd"><div><span class="eyebrow">Stage ${i+1} · ${esc(s.d)}</span><h3 style="margin-top:4px">${esc(s.n)}</h3></div><span class="tag ${ss==='done'?'ok':ss==='cur'?'new':''}">${ss==='done'?'Done':ss==='cur'?'In progress':'Not started'} · ${d}/${s.items.length}</span></div>${s.items.map(pwItemRow).join('')}</div></div>`; }).join('')}</div>
    <aside style="display:grid;gap:18px">
      <section class="panel"><div class="panel-head"><h3>${t('Your mentor')}</h3></div><div class="byline">${av(p.mentor,48,{ring:true,online:true})}<div><b>${esc(m.name)}</b><small>${esc(m.role)} · ${esc(m.city)}</small></div></div>
        <div style="display:flex;gap:8px;margin-top:14px"><button class="btn btn-primary btn-sm" data-act="ask" data-id="${p.mentor}">${ic('msg')}${t('Message')}</button><a class="btn btn-secondary btn-sm" href="#consult">${t('Book')}</a></div></section>
      <section class="panel"><div class="panel-head"><h3>Competency</h3></div>
        ${(p.id==='ercp'&&isDemo()?[['Selective biliary cannulation',.72],['Sphincterotomy',.55],['Stone extraction',.38],['Stent placement',.46]]:[['Knowledge',pr.pct],['Simulation',Math.max(0,pr.pct-.1)],['Supervised practice',Math.max(0,pr.pct-.2)]]).map(c=>`<div class="comp"><div class="r"><span>${c[0]}</span><small>${Math.round(c[1]*100)}%</small></div><div class="bar"><i style="width:${Math.round(c[1]*100)}%"></i></div></div>`).join('')}</section>
      <div class="cert${pwDone(p)?'':' locked'}"><span class="eyebrow">${pwDone(p)?'Certificate earned':'Certificate'}</span><h3>${esc(p.name)}</h3><small>${pwDone(p)?(isDemo()?'Issued 26 Sep 2026 · ID RL-HEM-0412':'Earned · ID RL-'+p.id.toUpperCase()+'-'+String(S.user?.uid||'0000').slice(0,4).toUpperCase()):'Unlocks after the final assessment'}</small></div>
    </aside>
  </div>`);
};

/* ---------- technique kits ---------- */
let TKF='';
R.techniques=()=>{
  const mods=[...new Set(TECHNIQUES.map(x=>x.mod))], list=TECHNIQUES.filter(x=>!TKF||x.mod===TKF);
  return shell('techniques',`${pageHead(t('Technique kits'),'For every technique: indications, the steps, the exact accessories and sizes, generator settings, common pitfalls and the ROEYA model to practise on.')}
  <div class="chips scroll"><button class="chip${!TKF?' on':''}" data-act="tk-f" data-id="">${t('All')}</button>${mods.map(m=>`<button class="chip${TKF===m?' on':''}" data-act="tk-f" data-id="${esc(m)}">${esc(m)}</button>`).join('')}</div>
  <div class="grid-2">${list.map(k=>`<a class="tk-card" href="#t-${k.id}">${artImg(k.art,192,192,{},{mode:'lens',osd:false,alt:''})}<div><span class="tag brand">${esc(k.mod)}</span> ${levelTag(k.lvl)}<h3>${esc(k.name)}</h3><p>${esc(k.sum)}</p><p class="mono" style="font-size:11.5px;margin-top:8px">${k.kit.length} items${k.settings?' · settings':''} · ${k.videos.length} videos</p></div></a>`).join('')}</div>`);
};
R.technique=(id)=>{
  const k=TK(id); if(!k) return R.notfound(); const m=MD(k.model);
  return shell('techniques',`
  <div class="tk-hero">${artImg(k.art,400,400,{},{mode:'lens',osd:false,alt:k.name})}<div><p class="eyebrow">Technique kit · ${esc(k.mod)}</p><h1 style="margin-top:8px">${esc(k.name)}</h1><p>${esc(k.sum)}</p>
    <div class="chips" style="margin-top:14px;gap:6px">${levelTag(k.lvl)}<span class="tag">${k.kit.length} kit items</span><span class="tag">${k.videos.length} videos</span></div>
    <div style="display:flex;gap:8px;margin-top:16px;flex-wrap:wrap"><a class="btn btn-primary" href="#v-${k.videos[0]}">${ic('play')}Watch the technique</a><button class="btn btn-secondary" data-act="kit-copy" data-id="${k.id}">${ic('copy')}Copy kit list</button></div></div></div>
  <div class="split">
    <div style="display:grid;grid-template-columns:minmax(0,1fr);gap:20px;min-width:0">
      <section class="panel"><h3>${t('Indications')}</h3><ul class="plain" style="margin-top:12px">${k.ind.map(x=>`<li>${ic('check')}<span>${esc(x)}</span></li>`).join('')}</ul></section>
      <section class="panel"><h3>${t('Step by step')}</h3><ol class="steps" style="margin:14px 0 0;padding:0">${k.steps.map(s=>`<li><span>${s}</span></li>`).join('')}</ol></section>
      <section class="row-wrap"><div class="row-head"><h2>${t('The kit')}</h2></div><div class="table-wrap"><table class="t"><thead><tr><th>Item</th><th>Specification</th><th>Note</th></tr></thead><tbody>${k.kit.map(r=>`<tr><td><b>${esc(r[0])}</b></td><td>${esc(r[1])||'—'}</td><td class="muted">${esc(r[2])||'—'}</td></tr>`).join('')}</tbody></table></div></section>
      <section class="panel"><h3>${t('Pitfalls')}</h3><ul class="plain warn" style="margin-top:12px">${k.pit.map(x=>`<li>${ic('alert')}<span>${esc(x)}</span></li>`).join('')}</ul></section>
    </div>
    <aside style="display:grid;gap:18px">
      ${k.settings?`<section class="panel"><div class="panel-head"><h3>${t('Generator settings')}</h3></div><div class="osd-box">${k.settings.map(s=>`<div class="r"><span>${esc(s[0])}</span><span>${esc(s[1])}</span></div>`).join('')}<div class="warn">Illustrative starting points. Always follow your unit’s protocol and the manufacturer’s instructions for your generator.</div></div></section>`:''}
      ${m?`<section class="model">${artImg(m.art,480,300,{code:'MODEL',facShort:'ROEYA'},{alt:m.name})}<div class="bd"><span class="eyebrow">${t('Practise on')}</span><h3>${esc(m.name)}</h3><p>${esc(m.tissue)}</p><button class="btn btn-primary btn-sm" data-act="model-req" data-id="${m.id}">${t('Request a session')}</button></div></section>`:''}
      <section class="panel"><div class="panel-head"><h3>${t('Videos')}</h3></div>${k.videos.map(V).filter(Boolean).map(v=>`<a class="sr-item" href="#v-${v.id}">${vthumbImg(v)}<div><div class="t">${esc(v.t)}</div><div class="s">${v.type} · ${v.dur} min</div></div></a>`).join('')}</section>
    </aside>
  </div>`);
};

/* ---------- models ---------- */
R.models=()=>shell('models',`${pageHead(t('Models'),'ROEYA designs and builds the ex-vivo models used on our courses. Each one is matched to the techniques it trains. Book a session at the ROEYA Training Center in Cairo or order models for your own unit.',`<button class="btn btn-primary" data-act="model-order">${ic('box')}${t('Order for your unit')}</button>`)}
  <div class="notice info">${ic('info')}<span>ESGE’s 2025 technical review on simulators found validation data for most training products is limited, and ex-vivo platforms are among the best studied. Every ROEYA model links to the pathway stages it supports.</span></div>
  <div class="grid-4">${MODELS.map(m=>`<article class="model">${artImg(m.art,480,300,{code:'MODEL',facShort:'ROEYA'},{alt:m.name})}<div class="bd"><h3>${esc(m.name)}</h3><p>${esc(m.tissue)}</p><div class="facts">${m.tech.map(x=>`<span class="tag">${esc(x)}</span>`).join('')}</div><p class="hint">${esc(m.note)}</p><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-primary btn-sm" data-act="model-req" data-id="${m.id}">${t('Request a session')}</button><button class="btn btn-ghost btn-sm" data-act="model-order" data-id="${m.id}">${t('Order for your unit')}</button></div></div></article>`).join('')}</div>`);

/* ---------- live & events ---------- */
let EVF='All';
R.live=()=>{
  const now=EVENTS.find(e=>pd(e.start)<=NOW && pd(e.end+'T23:59:00+02:00')>=NOW);
  const egh=EV('egh');
  const kinds=['All','Hands-on course','Congress','Online'];
  const list=EVENTS.filter(e=>e.id!=='egh'&&pd(e.end+'T23:59:00+02:00')>=NOW&&(EVF==='All'||e.kind===EVF));
  const months={}; list.forEach(e=>{ const d=pd(e.start), k=MON[d.getMonth()]+' '+d.getFullYear(); (months[k]=months[k]||[]).push(e); });
  return shell('live',`${pageHead(t('Live & events'),'Online sessions with the faculty, ROEYA hands-on courses and the congresses where we run the hands-on and live cases.')}
  ${now?`<section class="panel" style="display:flex;gap:18px;align-items:center;flex-wrap:wrap;border-color:color-mix(in srgb,var(--mucosa) 45%,var(--line))"><span class="live-pill"><span class="live-dot"></span>${t('Happening now')}</span><div style="flex:1;min-width:220px"><b style="font-size:16px">${esc(now.name)}</b><p class="hint">Day ${Math.floor((NOW-pd(now.start))/864e5)+1} of ${Math.round((pd(now.end)-pd(now.start))/864e5)+1} · ${esc(now.place)}. Course members have the pre-course modules and recordings in their pathway.</p></div><a class="btn btn-secondary" href="#p-ercp">${t('Open pathway')}</a></section>`:''}
  <section class="feature-hero">
    <div class="monitor"><canvas data-anim="egh" aria-label="Live endoscopy monitor"></canvas><span class="bezel-tag">LIVE · MIH → MARRIOTT</span></div>
    <div><p class="eyebrow">Featured congress</p><h2 style="margin-top:10px">EGH 2026 · Egypt Gastro Hep</h2>
      <p>The 19th Hepatology &amp; Gastroenterology Postgraduate Course and the 29th Egyptian Workshop on Therapeutic Endoscopy. ${fmtRange(egh.start,egh.end)} · ${esc(egh.place)}.</p>
      <div class="grid-3" style="gap:10px;margin-top:16px"><div class="stat"><b>15</b><span>live cases from Misr International Hospital</span></div><div class="stat"><b>10</b><span>hands-on stations</span></div><div class="stat"><b>7</b><span>crash courses on Saturday</span></div></div>
      <div class="countdown" style="margin-top:16px" data-countdown="2026-12-10T09:00:00+02:00">${cdCells('2026-12-10T09:00:00+02:00')}</div>
      <div class="cta"><a class="btn btn-primary" href="https://www.egyptgastrohep.com/" target="_blank" rel="noopener">${ic('ext')}${t('Register')}</a><button class="btn btn-secondary" data-act="cal-add" data-id="egh">${ic('cal')}Add to calendar</button></div></div>
  </section>
  <section class="row-wrap"><div class="row-head"><h2>Online this week</h2><span class="hint">Times in Cairo (GMT+2)</span></div>
    <div style="display:grid;gap:10px">${SESSIONS.map(s=>{ const d=pd(s.when), on=S.reminders.includes(s.id), left=s.seats-s.taken-(on?1:0); return `<div class="ev"><div class="date"><b>${d.getDate()}</b><span>${MON[d.getMonth()]}</span></div><div><h3>${esc(s.t)}</h3><div class="s"><span>${ic('clock')}${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')} · ${s.mins} min</span><span>${ic('user')}${esc(FAC[s.fac].name)}</span><span>${ic('users')}${left} seats left</span></div><div class="tags"><span class="tag brand">${s.kind}</span>${s.kind==='Office hours'?'<span class="tag">Fellow Pro: ask live</span>':''}</div></div><div class="go"><button class="btn ${on?'btn-secondary':'btn-primary'} btn-sm" data-act="remind" data-id="${s.id}">${on?ic('check')+t('Reserved'):t('Reserve seat')}</button></div></div>`; }).join('')}</div>
  </section>
  <section class="row-wrap"><div class="row-head"><h2>Courses and congresses</h2></div>
    <div class="chips scroll">${kinds.map(k=>`<button class="chip${EVF===k?' on':''}" data-act="ev-f" data-id="${k}">${k==='All'?t('All'):k+'s'}</button>`).join('')}</div>
    ${Object.keys(months).length?Object.entries(months).map(([mo,es])=>`<p class="month-label">${mo}</p><div style="display:grid;gap:10px">${es.map(e=>{ const d=pd(e.start); return `<div class="ev"><div class="date"><b>${d.getDate()}</b><span>${MON[d.getMonth()]}</span></div><div><h3>${esc(e.name)}</h3><div class="s"><span>${ic('cal')}${fmtRange(e.start,e.end)}</span><span>${ic('pin')}${esc(e.place)}</span></div><div class="tags"><span class="tag">${e.kind}</span>${e.passport?`<span class="tag ok">${ic('ticket')}Includes Lumen access</span>`:''}${now&&now.id===e.id?'<span class="tag live">Now</span>':''}</div></div><div class="go"><button class="btn btn-secondary btn-sm" data-act="ev-detail" data-id="${e.id}">${t('Details')}</button></div></div>`; }).join('')}</div>`).join(''):`<div class="empty">No upcoming events of this type.</div>`}
  </section>
  ${row(t('Live archive'),VIDEOS.filter(v=>v.type==='Live case'))}`);
};

/* ---------- feed ---------- */
let FEEDF='All';
function postHTML(p){
  const a=who(p.by), liked=isLiked(p), cm=postComments(p), lc=likeCount(p);
  const verified=a.org||a.faculty;
  return `<article class="post" id="post-${p.id}">
    <div class="hd">${av(a,44)}<div><b>${esc(a.name)}${verified?ic('verified'):''}</b><small>${esc(a.role||'')}${a.city?' · '+esc(a.city):''} · ${postTime(p)}</small></div><button class="icon-btn more" data-act="post-more" data-post="${p.id}" aria-label="Post options">${ic('more')}</button></div>
    <div class="bd"><div class="tags">${p.sample?'<span class="tag">Sample</span>':''}${(p.tags||[]).map(x=>`<span class="tag${x==='Guidelines'?' brand':x==='Events'?' warn':x==='Research'?' ok':''}">${esc(x)}</span>`).join('')}</div>
      <p>${esc(p.text)}</p>
      ${p.poll?`<div class="poll"><p style="font-weight:600;font-size:14px">${esc(p.poll.q)}</p>${pollHTML(p)}</div>`:''}
      ${p.link?`<a class="linkcard" href="${p.link.u}" target="_blank" rel="noopener"><span class="ic">${ic(({calendar:'cal'})[p.link.ic]||p.link.ic||'link')}</span><span><b>${esc(p.link.t)}</b><small>${esc(p.link.s)}</small></span></a>`:''}
    </div>
    ${p.art?`<div class="media">${artImg(p.art,960,540,{code:'EGH-26',facShort:'LIVE CASE',live:(p.art.m||'').includes('LIVE')})}</div>`:''}
    <div class="counts" style="padding-top:10px"><span>${lc} like${lc===1?'':'s'}</span><span>${cm.length} comments</span></div>
    <div class="acts"><button class="${liked?'on':''}" data-act="like" data-post="${p.id}">${ic('like')}${t('Like')}</button><button data-act="cfocus" data-post="${p.id}">${ic('cmt')}${t('Comment')}</button><button data-act="repost" data-post="${p.id}">${ic('repost')}${t('Repost')}</button><button data-act="share">${ic('send')}${t('Share')}</button></div>
    <div class="cmts">${cm.map(c=>{ const w=who(c[0]); return `<div class="comment">${av(w,32)}<div class="body"><b>${esc(w.name)}</b>${w.faculty?' <span class="tag brand">Faculty</span>':''}<p>${esc(c[1])}</p></div></div>`; }).join('')}
      <form class="cmt-in" data-form="cmt" data-post="${p.id}">${av('me',32)}<input class="input" name="c" placeholder="Write a comment" aria-label="Write a comment" autocomplete="off"><button class="btn btn-secondary" type="submit" aria-label="Send">${ic('send')}</button></form></div>
  </article>`;
}
R.feed=()=>{
  const all=feedPosts();
  const f={All:()=>true,Following:p=>S.follow.includes(p.by)||S.conn.includes(p.by)||p.by==='me',Guidelines:p=>p.tags?.includes('Guidelines'),Events:p=>p.tags?.includes('Events'),Research:p=>p.tags?.includes('Research'),Cases:p=>p.tags?.some(x=>['Case of the week','Tip','Milestone'].includes(x)),'Field news':p=>who(p.by).org}[FEEDF];
  const list=all.filter(f);
  const trends=[['#EGH2026','Events'],['#PostERCPpancreatitis','Guidelines'],['#ESD','Cases'],['#EUSMarathon','Events'],['#MedEd','Research']];
  const sugg=networkPeople().filter(p=>!S.conn.includes(p.id)&&!S.pending.includes(p.id)&&p.kind!=='Expert').slice(0,3);
  return shell('feed',`<div class="feed">
    <div style="display:grid;grid-template-columns:minmax(0,1fr);gap:16px;min-width:0">
      ${pageHead(t('Feed'),'News from the field, guideline digests, cases and milestones from the community.')}
      <section class="panel composer"><form data-form="post" style="display:grid;gap:12px"><div class="top">${av('me',44)}<textarea class="textarea" name="text" id="compose" placeholder="Share a case, a question or a paper" aria-label="Write a post"></textarea></div>
        <div class="bot"><button type="button" class="btn btn-ghost btn-sm" data-act="compose-tpl" data-k="case">${ic('flask')}Case</button><button type="button" class="btn btn-ghost btn-sm" data-act="compose-tpl" data-k="paper">${ic('book')}Paper</button><button type="button" class="btn btn-ghost btn-sm" data-act="compose-tpl" data-k="question">${ic('quiz')}Question</button><button type="button" class="btn btn-ghost btn-sm" data-act="toast" data-msg="Images: remove names, dates, record numbers and faces before you upload." data-icon="shield">${ic('image')}Image</button><span style="flex:1"></span><button class="btn btn-primary btn-sm" type="submit">${t('Post')}</button></div>
        <p class="hint" style="display:flex;gap:6px;align-items:center">${ic('shield')}Never post patient identifiers. Posts are visible to verified members only.</p></form></section>
      <div class="chips scroll">${['All','Following','Field news','Guidelines','Events','Research','Cases'].map(x=>`<button class="chip${FEEDF===x?' on':''}" data-act="feed-f" data-id="${x}">${t(x)}</button>`).join('')}</div>
      ${list.length?list.map(postHTML).join(''):`<div class="empty">Nothing here yet.</div>`}
    </div>
    <aside class="aside" style="display:grid;gap:18px;position:sticky;top:calc(var(--top) + 20px)">
      <section class="panel"><div class="panel-head"><h3>${t('Trending')}</h3></div>${trends.map((x,i)=>`<button class="trend" style="width:100%" data-act="feed-f" data-id="${x[1]}"><span>${x[0]}</span><small>${[48,31,22,19,12][i]} posts</small></button>`).join('')}</section>
      <section class="panel"><div class="panel-head"><h3>${t('Upcoming')}</h3><a href="#live">${t('See all')}</a></div>${EVENTS.filter(e=>pd(e.start)>NOW).slice(0,4).map(e=>{ const d=pd(e.start); return `<div class="circle"><span class="ic" style="border-radius:8px;font-family:var(--f-mono);font-size:11px;flex-direction:column;line-height:1.1;text-align:center">${d.getDate()}<br>${MON[d.getMonth()].toUpperCase()}</span><div><b>${esc(e.name)}</b><small>${esc(e.place)}</small></div></div>`; }).join('')}</section>
      <section class="panel"><div class="panel-head"><h3>${t('Suggested for you')}</h3></div>${sugg.map(p=>`<div class="circle">${av(p,42)}<div style="flex:1;min-width:0"><b>${esc(p.name)}</b><small>${esc(p.role)} · ${esc(p.city)}</small></div><button class="btn btn-secondary btn-sm" data-act="connect" data-id="${p.id}">${ic('plus')}</button></div>`).join('')||'<p class="hint">You are connected with everyone we would suggest.</p>'}</section>
    </aside></div>`);
};

/* ---------- network ---------- */
let NETF='Everyone', NETQ='';
R.network=()=>{
  const f={Everyone:()=>true,Experts:p=>p.kind==='Expert',Fellows:p=>p.kind==='Fellow',Nurses:p=>p.kind==='Nurse','Same course':p=>p.course};
  const list=networkPeople().filter(f[NETF]).filter(p=>!NETQ||(p.name+' '+(p.role||'')+' '+(p.city||'')+' '+(p.mods||[]).join(' ')).toLowerCase().includes(NETQ.toLowerCase()));
  const card=p=>{ const c=S.conn.includes(p.id), pe=S.pending.includes(p.id); return `<article class="person">${av(p,72,{ring:p.kind==='Expert',online:['karim','rania','mariam','reem'].includes(p.id)})}<div><h3>${esc(p.name)}</h3><p>${esc(p.role)}</p><p>${esc(p.city)}</p></div><div class="tags">${p.sample?'<span class="tag">Sample</span>':''}${p.kind==='Expert'?'<span class="tag brand">Faculty</span>':''}${(p.mods||[]).slice(0,3).map(m=>`<span class="tag">${esc(m)}</span>`).join('')}${p.course?'<span class="tag ok">ERCP course</span>':''}${p.hours?'<span class="tag warn">Office hours</span>':''}</div><div class="acts"><button class="btn btn-sm ${c?'btn-secondary':pe?'btn-secondary':'btn-primary'}" data-act="connect" data-id="${p.id}" ${c||pe?'disabled':''}>${c?ic('check')+t('Connected'):pe?t('Pending'):ic('plus')+t('Connect')}</button><button class="btn btn-sm btn-secondary" data-act="ask" data-id="${p.id}">${ic('msg')}${t('Message')}</button></div></article>`; };
  return shell('network',`${pageHead(t('Network'),'Fellows, faculty and nurses from across Africa and the Middle East. Everyone here is verified.',`<span class="tag brand pill">${S.conn.length} connections</span>`)}
  <div class="split">
    <div style="display:grid;grid-template-columns:minmax(0,1fr);gap:16px;min-width:0">
      <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center"><div class="chips scroll" style="flex:1 1 auto">${Object.keys(f).map(x=>`<button class="chip${NETF===x?' on':''}" data-act="net-f" data-id="${x}">${t(x)}</button>`).join('')}</div>
      <div class="search" style="max-width:260px;flex:1 1 200px">${ic('search')}<input type="search" data-input="net-q" value="${esc(NETQ)}" placeholder="Name, city or field" aria-label="Search people" style="padding-inline-end:14px"></div></div>
      ${list.length?`<div class="grid-3">${list.map(card).join('')}</div>`:'<div class="empty">No one matches that search.</div>'}
    </div>
    <aside style="display:grid;gap:18px">
      <section class="panel"><div class="panel-head"><h3>${t('Circles')}</h3></div>${CIRCLES.map(c=>{ const j=S.circles.includes(c.name); return `<div class="circle"><span class="ic">${ic(c.icon)}</span><div style="flex:1;min-width:0"><b>${esc(c.name)}</b><small>${c.members+(j&&c.name!=='ERCP Fellows · MEA'?1:0)} members</small></div><button class="btn btn-sm ${j?'btn-secondary':'btn-primary'}" data-act="circle" data-id="${esc(c.name)}">${j?t('Joined'):t('Join circle')}</button></div>`; }).join('')}</section>
      <section class="panel"><div class="panel-head"><h3>${t('Office hours')}</h3><a href="#live">${t('See all')}</a></div>${SESSIONS.filter(s=>s.kind==='Office hours'||s.kind==='Live Q&A').map(s=>`<div class="circle">${av(s.fac,42)}<div><b>${esc(s.t)}</b><small>${fmtDate(s.when,false)} · ${esc(FAC[s.fac].name)}</small></div></div>`).join('')}</section>
    </aside>
  </div>`);
};

/* ---------- messages ---------- */
let MSG={cur:null,q:''};
function convMeta(c){ return convMetaBase(c); }
function convMetaBase(c){ if(c.with){ const p=who(c.with); return {name:p.name,sub:p.role,av:av(p,44,{online:['karim','mariam','rania'].includes(c.with)})}; } if(c.group) return {name:c.group,sub:'412 members · circle',av:`<span class="avatar" style="width:44px;height:44px;background:var(--surface-3);color:var(--brand-2)">${ic('users')}</span>`}; return {name:c.name,sub:'Course desk · replies in 1 working day',av:`<span class="avatar" style="width:44px;height:44px;background:var(--surface-2);border:1px solid var(--line-2)">${brandImgs(26)}</span>`}; }
function convMsgs(c){ return convMsgsBase(c); }
function convMsgsBase(c){ return [...c.msgs,...(S.msgs[c.id]||[])]; }
function allConvs(){ return allConvsBase(); }
function allConvsBase(){ const extra=(S.newConvs||[]).map(x=>({id:x.id,with:x.with,msgs:[]})); return [...extra,...(isDemo()?CONVS:[])]; }
R.messages=()=>{
  const convs=allConvs().filter(c=>!MSG.q||convMeta(c).name.toLowerCase().includes(MSG.q.toLowerCase()));
  const cur=allConvs().find(c=>c.id===MSG.cur)||(window.innerWidth>980?allConvs()[0]:null);
  if(cur){ S.read=[...new Set([...(S.read||[]),cur.id])]; save(); }
  const m=cur?convMeta(cur):null;
  return shell('messages',`${pageHead(t('Messages'),'Direct messages with faculty and fellows, your circles, and the ROEYA course desk.')}
  <div class="chat${cur&&MSG.cur?' has-thread':''}">
    <div class="convs"><div class="s"><div class="search" style="max-width:none">${ic('search')}<input type="search" data-input="msg-q" value="${esc(MSG.q)}" placeholder="Search messages" aria-label="Search messages" style="padding-inline-end:14px"></div></div>
      ${convs.map(c=>{ const mm=convMeta(c), ms=convMsgs(c), last=ms[ms.length-1], un=c.unread&&!(S.read||[]).includes(c.id); return `<button class="conv${cur&&cur.id===c.id?' on':''}" data-act="conv" data-id="${c.id}">${mm.av}<div class="grow"><b><span>${esc(mm.name)}</span><small>${last?esc(last[2]):''}</small></b><p>${last?(last[0]==='me'?'You: ':'')+esc(last[1]):'Start the conversation'}</p></div>${un?'<span class="unread"></span>':''}</button>`; }).join('')}
    </div>
    <div class="thread">${cur?`
      <div class="hd"><button class="icon-btn" data-act="conv-back" aria-label="${t('Back')}" style="${window.innerWidth>980?'display:none':''}">${ic('chevL','flip')}</button>${m.av}<div style="flex:1;min-width:0"><b>${esc(m.name)}</b><small>${esc(m.sub)}</small></div>${cur.with&&FAC[cur.with]?`<a class="btn btn-secondary btn-sm" href="#consult">${ic('steth')}${t('Book')}</a>`:''}</div>
      <div class="msgs" id="msgs"><span class="msg-day">THIS WEEK</span>${convMsgs(cur).map(x=>{ const mine=x[0]==='me'; const from=cur.group&&!mine?`<b style="display:block;font-size:12px;margin-bottom:2px">${esc(who(x[0]).name)}</b>`:''; return `<div class="msg${mine?' me':''}">${from}${esc(x[1])}<small>${esc(x[2])}</small></div>`; }).join('')}<div id="typing"></div></div>
      <form class="composer-bar" data-form="msg" data-id="${cur.id}"><button type="button" class="icon-btn" data-act="toast" data-msg="Attach de-identified images or PDFs up to 10 MB." aria-label="Attach">${ic('attach')}</button><input class="input" name="m" placeholder="Write a message" aria-label="Write a message" autocomplete="off"><button class="btn btn-primary" type="submit" aria-label="${t('Send')}">${ic('send')}</button></form>`
    :`<div class="empty" style="margin:auto">${allConvs().length?'Select a conversation':'No conversations yet. Open the Network page and press Message on a member.'}</div>`}</div>
  </div>`);
};

/* ---------- consultations ---------- */
let CONS={exp:'karim',type:'video',day:0,slot:null,err:'',file:''};
function nextDays(n){ const out=[]; const d=new Date(NOW); d.setHours(12,0,0,0); while(out.length<n){ d.setDate(d.getDate()+1); if(d.getDay()!==5) out.push(new Date(d)); } return out; }
R.consult=()=>{
  const experts=['karim','rania','lina','omar','nadia','tarek','chinedu','zaki'];
  const days=nextDays(5), used=S.consults.length, left=Math.max(0,2-used);
  const slots=['16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30'];
  const rng=mulberry(experts.indexOf(CONS.exp)*31+CONS.day*7+3);
  const dis=slots.map(()=>rng()<.38);
  return shell('consult',`${pageHead(t('Consultations'),'Book a case discussion with the faculty. Included in Fellow Pro: two a month.',`<span class="tag pill ${left?'ok':'warn'}">${left} of 2 left this month</span>`)}
  ${S.consults.length?`<section class="panel"><div class="panel-head"><h3>${t('Upcoming consultations')}</h3></div>${S.consults.map(c=>`<div class="circle">${av(c.exp,42)}<div style="flex:1"><b>${esc(FAC[c.exp].name)} · ${c.type==='video'?'20-min video call':'Written second opinion'}</b><small>${esc(c.when)} · ${esc(c.summary.slice(0,80))}${c.summary.length>80?'…':''}</small></div><span class="tag ok">Confirmed</span></div>`).join('')}</section>`:''}
  <div class="notice">${ic('alert')}<span>Consultations are educational discussions between clinicians. They do not replace the judgement of the treating team. Remove all patient identifiers before sharing images or reports.</span></div>
  <div class="split">
    <form data-form="consult" style="display:grid;grid-template-columns:minmax(0,1fr);gap:22px;min-width:0" novalidate>
      <section class="row-wrap"><div class="row-head"><h2>1 · Choose an expert</h2></div><div class="grid-2">${experts.map(e=>{ const f=FAC[e]; return `<button type="button" class="expert${CONS.exp===e?' on':''}" data-act="c-exp" data-id="${e}">${av(e,46,{online:['karim','rania','lina'].includes(e)})}<div><b>${esc(f.name)}</b><small>${esc(f.role)}</small><small>${esc(f.city)} · next: ${fmtDate(days[e.length%3],false)}</small></div>${CONS.exp===e?`<span style="color:var(--brand-2)">${ic('check')}</span>`:''}</button>`; }).join('')}</div></section>
      <section class="row-wrap"><div class="row-head"><h2>2 · Format</h2></div><div class="role-grid"><button type="button" class="role${CONS.type==='video'?' on':''}" data-act="c-type" data-id="video"><b>${ic('video')} 20-minute video call</b><span>Discuss the case live, share your screen</span></button><button type="button" class="role${CONS.type==='written'?' on':''}" data-act="c-type" data-id="written"><b>${ic('file')} Written second opinion</b><span>Reply within 48 hours</span></button></div></section>
      ${CONS.type==='video'?`<section class="row-wrap"><div class="row-head"><h2>3 · Pick a time</h2><span class="hint">Cairo time</span></div>
        <div class="seg" style="width:max-content;max-width:100%;overflow-x:auto">${days.map((d,i)=>`<button type="button" class="${CONS.day===i?'on':''}" data-act="c-day" data-i="${i}">${['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][d.getDay()]} ${d.getDate()}</button>`).join('')}</div>
        <div class="slots">${slots.map((s,i)=>`<button type="button" class="slot${CONS.slot===s?' on':''}" data-act="c-slot" data-id="${s}" ${dis[i]?'disabled':''}>${s}</button>`).join('')}</div></section>`:''}
      <section class="row-wrap"><div class="row-head"><h2>${CONS.type==='video'?'4':'3'} · The case</h2></div>
        <div class="field"><label for="c-sum">Case summary and your question</label><textarea class="textarea" id="c-sum" name="summary" placeholder="Age and sex, indication, what has been done, imaging, and the specific question you want answered." style="min-height:130px">${esc(CONS.summary||'')}</textarea></div>
        <label class="upload" for="c-file">${ic('upload')}<div><b style="font-size:14px">${CONS.file?esc(CONS.file):'Add images, video clips or reports'}</b><p class="hint">De-identified only · up to 200 MB</p></div></label><input id="c-file" type="file" class="sr" multiple data-change="c-file">
        <label class="check"><input type="checkbox" name="consent"> I have removed names, dates of birth, record numbers and faces from everything I share</label>
        ${CONS.err?`<p class="err-msg">${ic('alert')}<span>${esc(CONS.err)}</span></p>`:''}
        <button class="btn btn-primary btn-lg" type="submit" ${left?'':'disabled'}>${ic('steth')}${t('Confirm booking')}</button>
      </section>
    </form>
    <aside style="display:grid;gap:18px;position:sticky;top:calc(var(--top) + 20px)">
      <section class="panel"><div class="panel-head"><h3>Summary</h3></div>${(()=>{ const f=FAC[CONS.exp]; return `<div class="byline">${av(CONS.exp,44,{ring:true})}<div><b>${esc(f.name)}</b><small>${esc(f.role)}</small></div></div>
        <div class="table-wrap" style="border:0;margin-top:12px"><table class="t" style="min-width:0"><tbody><tr><td class="faint">Format</td><td>${CONS.type==='video'?'Video call · 20 min':'Written · 48 h'}</td></tr>${CONS.type==='video'?`<tr><td class="faint">When</td><td>${CONS.slot?fmtDate(days[CONS.day])+' · '+CONS.slot:'Choose a time'}</td></tr>`:''}<tr><td class="faint">Cost</td><td>Included in Fellow Pro</td></tr></tbody></table></div>`; })()}</section>
      <section class="panel"><div class="panel-head"><h3>How it works</h3></div><ol class="steps" style="margin:0;padding:0"><li><span>The expert reviews your summary before the call.</span></li><li><span>You meet in Lumen. No other app needed.</span></li><li><span>A short written note is saved to your logbook.</span></li></ol></section>
    </aside>
  </div>`);
};

/* ---------- logbook ---------- */
R.logbook=()=>{
  const rows=[...S.logAdd.map(r=>[...r,'pending']),...(isDemo()?LOG:[])];
  const perf=rows.filter(r=>r[1]==='ERCP'&&r[3].startsWith('Performed')), succ=perf.filter(r=>r[6]===true).length;
  const ercp=(isDemo()?46:0)+S.logAdd.filter(r=>r[1]==='ERCP').length;
  const cme=[...S.cmeAdd,...(isDemo()?CME:[])], cmeTot=cme.reduce((a,c)=>a+c[3],0);
  const weeks=isDemo()?[2,3,1,4,3,5,2,4,6,3,5,7]:Array.from({length:12},(_,i)=>{ const end=NOW.getTime()-(11-i)*7*864e5, start=end-7*864e5; return S.logAdd.filter(r=>{ const tm=pd(r[0]).getTime(); return tm>start&&tm<=end; }).length; });
  const mx=Math.max(1,...weeks), W=600, H=120, pts=weeks.map((w,i)=>[(i/(weeks.length-1))*W, H-8-(w/mx)*(H-24)]);
  const path=pts.map((p,i)=>(i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)).join(' ');
  return shell('logbook',`${pageHead(t('Logbook & CME'),'Your cases, competencies and hours in one record. Supervisors sign off entries from their own account.',`<button class="btn btn-secondary" data-act="toast" data-msg="Your transcript PDF is generated in the final build.">${ic('download')}${t('Download transcript')}</button><button class="btn btn-primary" data-act="log-add">${ic('plus')}${t('Add procedure')}</button>`)}
  <div class="grid-4">
    <section class="panel stat"><span>ERCPs logged</span><b>${ercp}</b><div class="bar"><i style="width:${ercp}%"></i></div><span>${ercp} of 100 for independent practice</span></section>
    <section class="panel stat"><span>Cannulation success</span><b>${perf.length?Math.round(succ/perf.length*100):0}%</b><span>Last ${perf.length} performed cases</span></section>
    <section class="panel stat"><span>CME hours</span><b>${cmeTot.toFixed(1)}</b><span>This academic year</span></section>
    <section class="panel stat"><span>Awaiting sign-off</span><b>${S.logAdd.length}</b><span>${S.logAdd.length?(isDemo()?'Sent to Prof. Karim El-Sawy':'Sent to your supervisor'):'All entries signed'}</span></section>
  </div>
  <div class="split">
    <div style="display:grid;grid-template-columns:minmax(0,1fr);gap:20px;min-width:0">
      <section class="panel"><div class="panel-head"><h3>Cases per week</h3><span class="hint">Last 12 weeks</span></div>
        <svg class="spark" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img" aria-label="Cases per week over the last 12 weeks"><defs><linearGradient id="sg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="var(--brand)" stop-opacity=".35"/><stop offset="1" stop-color="var(--brand)" stop-opacity="0"/></linearGradient></defs><path d="${path} L ${W} ${H} L 0 ${H} Z" fill="url(#sg)"/><path d="${path}" fill="none" stroke="var(--brand)" stroke-width="2.5" vector-effect="non-scaling-stroke"/></svg></section>
      <section class="row-wrap"><div class="row-head"><h2>${t('Recent procedures')}</h2></div><div class="table-wrap"><table class="t"><thead><tr><th>Date</th><th>Procedure</th><th>Role</th><th>Outcome</th><th>Sign-off</th></tr></thead><tbody>${rows.length?'':'<tr><td colspan="5" class="muted">No procedures yet. Use Add procedure to log your first case.</td></tr>'}${rows.map(r=>`<tr><td class="mono" style="font-size:12.5px;white-space:nowrap">${fmtDate(r[0],false)}</td><td><b>${esc(r[1])}</b><small>${esc(r[2])}</small></td><td>${esc(r[3])}<small>${esc(r[4])}</small></td><td>${esc(r[5])}</td><td>${r[7]==='pending'?'<span class="tag warn">Pending</span>':r[6]===false?'<span class="tag">Signed · learning case</span>':'<span class="tag ok">Signed</span>'}</td></tr>`).join('')}</tbody></table></div></section>
      <section class="row-wrap"><div class="row-head"><h2>${t('CME transcript')}</h2><span class="hint">${cmeTot.toFixed(1)} hours</span></div><div class="table-wrap"><table class="t"><thead><tr><th>Date</th><th>Activity</th><th>Provider</th><th style="text-align:end">Hours</th></tr></thead><tbody>${cme.length?'':'<tr><td colspan="4" class="muted">Pass a video quiz to earn your first hours.</td></tr>'}${cme.map(c=>`<tr><td class="mono" style="font-size:12.5px;white-space:nowrap">${fmtDate(c[0],false)}</td><td>${esc(c[1])}</td><td class="muted">${esc(c[2])}</td><td class="mono" style="text-align:end">${c[3].toFixed(1)}</td></tr>`).join('')}</tbody></table></div><p class="hint">Certificates of completion with hours. Formal CME accreditation is in progress.</p></section>
    </div>
    <aside style="display:grid;gap:18px">
      <section class="panel"><div class="panel-head"><h3>${t('Competencies')}</h3><span class="tag">ERCP</span></div>${[['Selective biliary cannulation',.72],['Sphincterotomy',.55],['Stone extraction',.38],['Plastic stent placement',.6],['Metal stent placement',.25],['Cholangiogram interpretation',.8]].map(c=>isDemo()?c:[c[0],0]).map(c=>`<div class="comp"><div class="r"><span>${c[0]}</span><small>${Math.round(c[1]*100)}%</small></div><div class="bar${c[1]>=.7?' ok':''}"><i style="width:${Math.round(c[1]*100)}%"></i></div></div>`).join('')}</section>
      <h3 style="font-size:18px">${t('Certificates')}</h3>
      ${isDemo()?`<div class="cert"><span class="eyebrow">Pathway certificate</span><h3>GI bleeding &amp; haemostasis</h3><small>Issued 26 Sep 2026 · RL-HEM-0412</small></div>
      <div class="cert"><span class="eyebrow">Course certificate</span><h3>Hemostasis &amp; Polypectomy Training Course — 3rd wave</h3><small>ROEYA Training Center · 12 hours</small></div>
      <div class="cert locked"><span class="eyebrow">In progress</span><h3>ERCP: from cannulation to independent practice</h3><small>Unlocks after the competency assessment</small></div>`:(PATHWAYS.filter(pwDone).map(x=>`<div class="cert"><span class="eyebrow">Pathway certificate</span><h3>${esc(x.name)}</h3><small>Earned on Lumen</small></div>`).join('')||`<div class="cert locked"><span class="eyebrow">No certificates yet</span><h3>Finish a pathway to earn one</h3><small>Every completed pathway issues a certificate</small></div>`)}
    </aside>
  </div>`);
};

/* ---------- profile ---------- */
R.profile=()=>{
  const u=who('me'), mine=feedPosts().filter(p=>p.by==='me'||(S.user&&p.by===S.user.uid));
  return shell('',`<div><div class="cover"><canvas data-anim="cover" aria-hidden="true"></canvas></div>
    <div class="prof-head">${av(u,112)}<div style="padding-bottom:6px"><h1>${esc(u.name)} ${isVerified()?`<span style="color:var(--brand-2)" title="Verified">${ic('verified')}</span>`:'<span class="tag warn" style="vertical-align:middle">Verification pending</span>'}</h1><p>${[u.role,u.city].filter(Boolean).map(esc).join(' · ')}${u.joined?' · Member since '+esc(u.joined):''}</p></div>
      <div class="acts"><button class="btn btn-secondary" data-act="edit-profile">${ic('pen')}${t('Edit profile')}</button><button class="btn btn-secondary" data-act="share">${ic('share')}${t('Share')}</button></div></div></div>
  <div class="split">
    <div style="display:grid;grid-template-columns:minmax(0,1fr);gap:18px;min-width:0">
      <section class="panel"><h3>About</h3><p class="muted" style="margin-top:8px">${S.bio?esc(S.bio):(isDemo()?'Second-year GI fellow in Cairo working towards independent ERCP. Interested in biliary endoscopy and in research on how endoscopy training changes outcomes.':'<button class="btn btn-ghost btn-sm" data-act="edit-profile" style="padding-inline:0">Add a short bio</button>')}</p>
        <div class="chips" style="margin-top:12px;gap:6px">${(isDemo()?['ERCP','EUS','Research','Hemostasis']:(u.mods||[])).map(x=>`<span class="tag">${esc(x)}</span>`).join('')}</div></section>
      <section class="panel"><div class="panel-head"><h3>ROEYA courses</h3></div>
        ${isDemo()?`        <div class="circle"><span class="ic">${ic('ticket')}</span><div style="flex:1"><b>ERCP Training Course — 4th wave</b><small>6–10 Nov 2026 · ROEYA Training Center</small></div><span class="tag new">Attending</span></div>
        <div class="circle"><span class="ic">${ic('award')}</span><div style="flex:1"><b>Hemostasis &amp; Polypectomy Training Course — 3rd wave</b><small>Sep 2026 · 12 CME hours</small></div><span class="tag ok">Completed</span></div>
        <div class="circle"><span class="ic">${ic('cal')}</span><div style="flex:1"><b>EGH 2026 · ERCP crash course</b><small>12 Dec 2026 · Cairo Marriott</small></div><span class="tag">Registered</span></div>`:(myCourses().map(c=>`<div class="circle"><span class="ic">${ic('ticket')}</span><div style="flex:1"><b>${esc(c.course||c.code)}</b><small>Course Passport · ${esc(c.code)}</small></div><span class="tag ok">Linked</span></div>`).join('')||`<p class="muted" style="margin-top:8px">No courses linked yet. <button class="btn btn-ghost btn-sm" data-act="passport" style="padding-inline:0">Add a course code</button></p>`)}</section>
      <section class="row-wrap"><div class="row-head"><h2>Activity</h2></div>${mine.length?mine.map(postHTML).join(''):`<div class="panel"><p class="muted">Your posts and milestones appear here. <a href="#feed" style="color:var(--brand-2)">Write your first post</a>.</p></div>`}</section>
    </div>
    <aside style="display:grid;gap:18px">
      <section class="panel"><div class="grid-3" style="gap:10px;text-align:center"><div class="stat"><b>${S.conn.length}</b><span>${t('Connected')}</span></div><div class="stat"><b>${(isDemo()?46:0)+S.logAdd.filter(r=>r[1]==='ERCP').length}</b><span>ERCPs</span></div><div class="stat"><b>${S.watched.length+(isDemo()?12:0)}</b><span>Videos</span></div></div></section>
      <section class="panel"><div class="panel-head"><h3>${t('Your pathways')}</h3></div>${PATHWAYS.filter(isEnrolled).length?'':'<p class="hint">No pathways yet.</p>'}${PATHWAYS.filter(isEnrolled).map(p=>`<a class="circle" href="#p-${p.id}">${ringSVG(pwProgress(p).pct,42,4,pwDone(p)?'var(--ok)':'var(--brand)')}<div><b>${esc(p.name)}</b><small>${pwDone(p)?'Completed':'In progress'}</small></div></a>`).join('')}</section>
      <section class="panel"><div class="panel-head"><h3>${t('Circles')}</h3></div>${S.circles.map(c=>`<div class="circle"><span class="ic">${ic('users')}</span><div><b>${esc(c)}</b></div></div>`).join('')||'<p class="hint">Join a circle from the Network page.</p>'}</section>
    </aside>
  </div>`);
};

/* ---------- account ---------- */
R.account=()=>{
  const sw=(k,on,lbl,sub)=>`<div class="set-row"><div><b>${lbl}</b><small>${sub}</small></div><label class="switch"><input type="checkbox" data-change="${k}" ${on?'checked':''} aria-label="${esc(lbl)}"><span></span></label></div>`;
  const reg=PLANS.regions[S.region], price=S.bill==='annual'?money(reg.cur,reg.pro[1])+' / year':money(reg.cur,reg.pro[0])+' / month';
  return shell('',`${pageHead(t('Account'),'Plan, billing, preferences and privacy.')}
  <div class="grid-2" style="align-items:start">
    <div style="display:grid;gap:18px">
      <section class="panel"><div class="panel-head"><h3>${t('Plan & billing')}</h3><a href="#plans">${t('Compare plans')}</a></div>
        ${isDemo()?`        <div style="display:flex;justify-content:space-between;gap:12px;align-items:center;flex-wrap:wrap"><div><b style="font-size:18px">Fellow Pro</b><p class="hint">${price} · renews 1 March 2027</p></div><span class="tag ok">Active</span></div>
        <div class="set-row"><div><b>Payment method</b><small>Visa ending 4242 · expires 08/28</small></div><button class="btn btn-secondary btn-sm" data-act="toast" data-msg="Payments are handled by the payment provider in the final build.">Update</button></div>
        <div class="set-row"><div><b>Invoices</b><small>1 Mar 2026 · Fellow Pro annual · Paid</small></div><button class="btn btn-ghost btn-sm" data-act="toast" data-msg="Invoice PDFs are generated in the final build.">${ic('download')}PDF</button></div>
        `:`<div style="display:flex;justify-content:space-between;gap:12px;align-items:center;flex-wrap:wrap"><div><b style="font-size:18px">Pilot access</b><p class="hint">Free while Lumen is in pilot. Paid plans and billing open at launch.</p></div><span class="tag ok">Active</span></div>`}
        <div class="set-row"><div><b>Course Passport</b><small>${isDemo()?'ERCP Training Course — 4th wave · linked':(myCourses().map(c=>esc(c.code)).join(', ')||'No course linked')}</small></div><button class="btn btn-secondary btn-sm" data-act="passport">Add course code</button></div></section>
      <section class="panel"><div class="panel-head"><h3>${t('Preferences')}</h3></div>
        <div class="set-row"><div><b>${t('Language')}</b><small>Interface language</small></div><div class="seg"><button class="${S.lang==='en'?'on':''}" data-act="set-lang" data-id="en">English</button><button class="${S.lang==='ar'?'on':''}" data-act="set-lang" data-id="ar">العربية</button></div></div>
        <div class="set-row"><div><b>${t('Theme')}</b><small>Follows your device by default</small></div><div class="seg">${['system','dark','light'].map(x=>`<button class="${S.theme===x?'on':''}" data-act="set-theme" data-id="${x}">${t(x[0].toUpperCase()+x.slice(1))}</button>`).join('')}</div></div>
        <div class="set-row"><div><b>${t('Subtitles')}</b><small>Default subtitle language</small></div><div class="seg">${[['en','English'],['ar','العربية'],['off','Off']].map(x=>`<button class="${S.subs===x[0]?'on':''}" data-act="set-subs" data-id="${x[0]}">${x[1]}</button>`).join('')}</div></div>
        ${sw('pref-autoplay',S.autoplay,t('Autoplay next video'),'Within the same pathway')}</section>
    </div>
    <div style="display:grid;gap:18px">
      <section class="panel"><div class="panel-head"><h3>${t('Notifications')}</h3></div>
        ${sw('n-brief',S.notif.brief,'The Lumen Brief','Weekly email on Sunday')}${sw('n-live',S.notif.live,'Live session reminders','One hour before')}${sw('n-msgs',S.notif.msgs,'Messages','Push and email')}${sw('n-mentions',S.notif.mentions,'Mentions and replies','In the feed and Q&A')}${sw('n-digest',S.notif.digest,'Monthly progress report','Pathways, logbook and CME')}</section>
      <section class="panel"><div class="panel-head"><h3>${t('Privacy')}</h3></div>
        ${sw('p-profile',S.privacy.profile,'Profile visible to members','Verified members only, never public')}${sw('p-logbook',S.privacy.logbook,'Share logbook with mentors','Needed for sign-off')}</section>
      <section class="panel"><div class="panel-head"><h3>${t('Devices')}</h3></div>
        <div class="device">${ic('laptop')}<div class="grow"><b style="font-size:14px">${isDemo()?'Chrome on Windows':'This browser'}</b><br><small class="faint">${isDemo()?'Cairo · ':''}this device</small></div><span class="tag ok">Active</span></div>
        ${isDemo()?`<div class="device">${ic('phone')}<div class="grow"><b style="font-size:14px">Lumen app · iPhone</b><br><small class="faint">Cairo · 2 hours ago</small></div><button class="btn btn-ghost btn-sm" data-act="toast" data-msg="Device signed out.">${t('Sign out')}</button></div>`:''}</section>
      <button class="btn btn-secondary" data-act="logout">${ic('logout')}${t('Sign out')}</button>
    </div>
  </div>`);
};

/* ---------- plans ---------- */
function plansBody(inApp){
  const reg=PLANS.regions[S.region], an=S.bill==='annual';
  const price=(p)=>{ if(p.id==='free') return `<div class="price"><b>${reg.cur==='USD'?'$0':'EGP 0'}</b></div><p class="bill">Free forever</p>`; if(p.custom) return `<div class="price"><b>Custom</b></div><p class="bill">From ${money(reg.cur,reg.seat)} per fellow per year</p>`; const pr=reg[p.key]; return `<div class="price"><b>${money(reg.cur,an?pr[1]/12:pr[0])}</b><span>/ month</span></div><p class="bill">${an?`${money(reg.cur,pr[1])} billed annually`:'Billed monthly · switch to annual for 2 months free'}</p>`; };
  const cta=(p)=>{ if(inApp&&p.id==='pro') return `<button class="btn btn-secondary btn-block" disabled>${t('Current plan')}</button>`; if(p.id==='free') return inApp?`<button class="btn btn-ghost btn-block" data-act="toast" data-msg="Downgrades take effect at the end of your billing year.">Switch to Explore</button>`:`<a class="btn btn-secondary btn-block" href="#signup">${t('Create free account')}</a>`; if(p.custom) return `<button class="btn btn-secondary btn-block" data-act="talk">${t('Talk to us')}</button>`; return inApp?`<button class="btn btn-${p.pop?'primary':'secondary'} btn-block" data-act="toast" data-msg="Plan changes are handled at checkout in the final build.">Switch to ${p.name}</button>`:`<a class="btn btn-${p.pop?'primary':'secondary'} btn-block" href="#signup">Get ${p.name}</a>`; };
  const cell=v=> v===true?ic('check'):v===false?`<span class="no">—</span>`:`<span style="font-size:13px">${esc(v)}</span>`;
  return `<div class="plans-head"><p class="eyebrow">${t('Plans')}</p><h1>One subscription. The whole curriculum.</h1><p>Annual membership for verified GI and endoscopy fellows, with regional pricing. Every ROEYA hands-on course includes access.</p>
    <div class="plan-ctrls"><div class="seg" role="tablist" aria-label="Billing"><button class="${!an?'on':''}" data-act="bill" data-id="monthly">${t('Monthly')}</button><button class="${an?'on':''}" data-act="bill" data-id="annual">${t('Annual')}<span class="save">2 months free</span></button></div>
    <div class="seg" role="tablist" aria-label="Region">${Object.entries(PLANS.regions).map(([k,r])=>`<button class="${S.region===k?'on':''}" data-act="region" data-id="${k}">${r.label}</button>`).join('')}</div></div></div>
  <div class="plans">${PLAN_DEFS.map(p=>`<article class="plan${p.pop?' pop':''}">${p.pop?'<span class="tag brand pop-tag">Recommended for fellows</span>':''}<div><h3>${p.name}</h3><p class="tl">${p.tl}</p></div>${price(p)}${cta(p)}<ul>${p.head?`<li class="head">${p.head}</li>`:''}${p.feats.map(f=>`<li>${ic('check')}<span>${f}</span></li>`).join('')}</ul></article>`).join('')}</div>
  <div class="passport"><span class="stamp">${ic('ticket')}</span><div><h3>Registered for a ROEYA course?</h3><p>Your registration includes a Course Passport: Lumen access for that technique, opened the day you register. Enter the code from your confirmation email.</p></div><button class="btn btn-primary" data-act="passport">Activate with course code</button></div>
  <section class="row-wrap"><div class="row-head"><h2>${t('Compare plans')}</h2></div><div class="cmp-wrap"><table class="cmp"><thead><tr><th></th>${PLAN_DEFS.map(p=>`<th>${p.name}</th>`).join('')}</tr></thead><tbody>${CMP.map(r=>r.length===1?`<tr class="grp"><td colspan="5">${r[0]}</td></tr>`:`<tr><td>${r[0]}</td>${r.slice(1).map(v=>`<td>${cell(v)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
    <p class="hint">Prices include taxes where applicable. Demo pricing; final prices to be confirmed. Paid plans require verification of fellow status.</p></section>
  <section class="row-wrap" style="max-width:860px;width:100%;margin-inline:auto"><div class="row-head"><h2>${t('Frequently asked questions')}</h2></div><div class="faq">${FAQ.map(q=>`<details><summary>${esc(q[0])}${ic('plus')}</summary><p>${esc(q[1])}</p></details>`).join('')}</div></section>`;
}
R.plans=()=> S.auth ? shell('',plansBody(true)) : pubNav('plans')+`<main class="wrap" style="display:grid;gap:44px;padding-block:48px 72px">${plansBody(false)}</main>`+footer();

R.notfound=()=>shell('',`<div class="empty" style="padding:64px 20px"><h2 style="font-size:24px;color:var(--fg)">This page is not part of the demo</h2><p style="margin-top:8px">Try the library or your pathways.</p><div style="display:flex;gap:8px;justify-content:center;margin-top:16px"><a class="btn btn-primary" href="#today">${t('Today')}</a><a class="btn btn-secondary" href="#library">${t('Library')}</a></div></div>`);

;
/* ===================== ROUTER, EVENTS, PLAYER ===================== */
const PUBLIC=['home','login','signup','forgot','plans'];
let ANIMS=[], TIMERS=[], CUR='';
function stopAll(){ ANIMS.forEach(a=>a.stop()); ANIMS=[]; TIMERS.forEach(clearInterval); TIMERS=[]; P.playing=false; }
function applyPrefs(){
  const de=document.documentElement;
  if(S.theme==='system') de.removeAttribute('data-theme'); else de.setAttribute('data-theme',S.theme);
  de.lang=S.lang==='ar'?'ar':'en'; de.dir=S.lang==='ar'?'rtl':'ltr';
}
function parse(){ const h=(location.hash||'').replace(/^#/,''); return h || (S.auth?'today':'home'); }
function render(keepScroll){
  const r=parse(), y=window.scrollY;
  if(!PUBLIC.includes(r) && !S.auth){ SESSION.next=r; location.replace('#login'); return; }
  if(S.auth && ['home','login','signup','forgot'].includes(r)){ location.replace('#today'); return; }
  stopAll(); closeModal(true); ARTQ.clear();
  let html, name=r, param=null;
  const m=r.match(/^(v|p|t)-(.+)$/);
  if(m){ name={v:'watch',p:'pathway',t:'technique'}[m[1]]; param=m[2]; }
  const fn=R[name]||R.notfound;
  if(name==='watch' && P.id!==param){ P.id=param; P.t=S.prog[param]||0; P.tab='chapters'; P.cc=S.subs==='off'?'off':S.subs; P.trLang=S.subs==='ar'?'ar':'en'; P.lastCh=-1; P.lastTr=-1; P.started=false; }
  try{ html=fn(param); }catch(e){ console.error(e); html=R.notfound(); }
  const keep=keepScroll&&CUR===r?captureInputs():null;
  $('#app').innerHTML=html;
  if(keep) restoreInputs(keep);
  document.title = 'ROEYA Lumen';
  if(keepScroll && CUR===r) window.scrollTo(0,y); else window.scrollTo(0,0);
  CUR=r;
  CURNAME=name; CURPARAM=param;
  mount(name,param);
  hydrate();
}
let CURNAME='', CURPARAM=null, LASTW=window.innerWidth;
function refresh(){ render(true); }
function inputKey(el){ const f=el.closest('form'); return [f?f.dataset.form:'',f?(f.dataset.post||f.dataset.id||''):'',el.name||el.id||el.dataset.input||''].join('|'); }
function captureInputs(){ const a=document.activeElement, out={vals:{},focus:null}; $$('#app input[type=text],#app input[type=search],#app input:not([type]),#app input[type=email],#app textarea').forEach(el=>{ if(el.id==='q') return; if(el.value) out.vals[inputKey(el)]=el.value; }); if(a&&a.matches&&a.matches('#app input,#app textarea')&&a.id!=='q') out.focus={k:inputKey(a),s:a.selectionStart,e:a.selectionEnd}; return out; }
function restoreInputs(o){ $$('#app input,#app textarea').forEach(el=>{ const k=inputKey(el); if(o.vals[k]!=null && !el.value) el.value=o.vals[k]; if(o.focus&&o.focus.k===k){ el.focus(); try{ el.setSelectionRange(o.focus.s,o.focus.e); }catch(_){} } }); }
window.addEventListener('hashchange',()=>render(false));

/* ---------- per-page mounting ---------- */
function mount(name,param){
  mountCanvases(name,param);
  $$('[data-countdown]').forEach(el=>{ const tgt=el.dataset.countdown; TIMERS.push(setInterval(()=>{ el.innerHTML=cdCells(tgt); },1000)); });
  if(name==='messages'){ const m=$('#msgs'); if(m) m.scrollTop=m.scrollHeight; if(MSG.prefill){ const i=$('form[data-form="msg"] input'); if(i){ i.value=MSG.prefill; i.focus(); } MSG.prefill=''; } }
  if(S.auth && !S.nlDone && !SESSION.nlShown && name==='today'){ SESSION.nlShown=true; setTimeout(()=>{ if(CUR==='today' && !$('#modal-root').innerHTML) newsletterModal(); else SESSION.nlShown=false; },650); }
  afterMount(name,param);
}
function afterMount(){}
function mountCanvases(name,param){
  $$('canvas[data-anim]').forEach(cv=>{
    const k=cv.dataset.anim;
    if(k==='cover'){ drawCover(cv); return; }
    let spec, meta={};
    if(k==='hero'){ const v=V('ercp-cannulation'); spec=v.art; meta=vmeta(v); }
    else if(k==='auth'){ spec={s:'wli',x:'papilla',sd:58,m:'WLI'}; meta={code:'COTW-46',facShort:'CASE OF THE WEEK',dateOSD:'09/11/2026'}; }
    else if(k==='cw'){ const v=V(cv.dataset.vid); spec=v.art; meta=vmeta(v); }
    else if(k==='egh'){ spec={s:'fluoro',sd:44,m:'FLUORO'}; meta={code:'EGH-26',facShort:'LIVE · ROOM 1',dateOSD:'10/12/2026',live:true}; }
    if(spec) ANIMS.push(animateCanvas(cv,spec,meta,{mode:k==='auth'?'free':'frame',osd:k!=='auth'}));
  });
  if(name==='watch') mountPlayer(V(param));
}

/* ---------- player ---------- */
function mountPlayer(v){
  if(!v) return;
  P.dur=v.dur*60; P.last=performance.now(); P.lastSave=0;
  const cv=$('#pcv');
  const a=animateCanvas(cv,v.art,vmeta(v),{mode:'frame',osd:cv.getBoundingClientRect().width>=520,getTime:()=>P.t,isPlaying:()=>P.playing,frozenT:0,onFrame:playerTick});
  ANIMS.push(a);
  // keep time running even with reduced motion
  if(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches){ TIMERS.push(setInterval(()=>{ playerTick(); a.redraw(); },250)); }
  playerUI(true);
}
function playerTick(){
  const now=performance.now();
  if(P.playing){ P.t=Math.min(P.dur,P.t+(now-P.last)/1000*P.speed); if(P.t>=P.dur){ P.playing=false; markWatched(P.id); }
    if(now-P.lastSave>3000){ S.prog[P.id]=Math.floor(P.t); save(); P.lastSave=now; } }
  P.last=now; playerUI(false);
}
function playerUI(force){
  const v=V(P.id); if(!v||!$('#player')) return;
  const sb=$('#sbar'); if(sb) sb.style.width=(P.t/P.dur*100).toFixed(2)+'%';
  const tm=$('#ptime'); if(tm) tm.textContent=`${mmss(P.t)} / ${mmss(P.dur)}`;
  const nb=$('#notebtn'); if(nb) nb.textContent=`${t('Add note')} at ${mmss(P.t)}`;
  const bp=$('#bigplay'); if(bp) bp.style.display=P.playing||P.started?'none':'grid';
  const pb=$('#pbtn'); if(pb && (force||pb.dataset.st!==String(P.playing))){ pb.innerHTML=ic(P.playing?'pause':'play'); pb.dataset.st=String(P.playing); pb.setAttribute('aria-label',P.playing?'Pause':'Play'); }
  const chs=chaptersFor(v); let ci=0; chs.forEach((c,i)=>{ if(P.t>=c.t) ci=i; });
  if(force||ci!==P.lastCh){ P.lastCh=ci; $$('.chap').forEach(el=>el.classList.toggle('on',+el.dataset.ch===ci)); }
  const cc=$('#cc');
  if(v.id==='ercp-cannulation'){
    const tr=P.cc==='ar'?TRANSCRIPT_AR:TRANSCRIPT_EN; let ti=0; TRANSCRIPT_EN.forEach((l,i)=>{ if(P.t>=l[0]) ti=i; });
    if(force||ti!==P.lastTr||cc.dataset.lang!==P.cc){ P.lastTr=ti; cc.dataset.lang=P.cc; cc.innerHTML=(P.cc==='off'||!P.started)?'':`<span dir="${P.cc==='ar'?'rtl':'ltr'}">${esc(tr[ti][1])}</span>`; $$('.tr-line').forEach(el=>el.classList.toggle('on',+el.dataset.tr===ti)); }
  }
}
function seek(s){ P.t=Math.max(0,Math.min(P.dur,s)); S.prog[P.id]=Math.floor(P.t); save(); playerUI(true); }
function markWatched(id){ if(!S.watched.includes(id)){ S.watched.push(id); save(); toast('Marked as watched. Your pathway is updated.'); } }

/* ---------- newsletter ---------- */
function newsletterModal(){
  const topics=['ERCP','EUS','Third space','Colonoscopy','Hemostasis','Research','Nursing'], pre=['ERCP','EUS','Research'];
  openModal(`<div class="nl-art">${artImg({s:'wli',x:'papilla',sd:5,m:'WLI'},1040,300,{},{osd:false})}<div class="osd">THE LUMEN BRIEF<br>ISSUE 47 · SUN 15 NOV<br>CASE · GUIDELINE · EVENTS</div></div>
  <form data-form="brief">${mh('Get The Lumen Brief','One email every Sunday: the case of the week, one guideline in plain words, new videos in your fields and the next ROEYA events.')}
  <div class="mb"><div class="field"><label>Your fields</label><div class="chips">${topics.map(x=>`<button type="button" class="chip${pre.includes(x)?' on':''}" data-act="chip-toggle" data-id="${x}">${x}</button>`).join('')}</div></div>
    <div style="display:flex;gap:12px;flex-wrap:wrap"><div class="field"><label>How often</label><div class="seg" data-seg="freq"><button type="button" class="on" data-act="seg" data-id="weekly">Weekly</button><button type="button" data-act="seg" data-id="monthly">Monthly</button></div></div>
    <div class="field"><label>Language</label><div class="seg" data-seg="lang"><button type="button" class="on" data-act="seg" data-id="en">English</button><button type="button" data-act="seg" data-id="ar">العربية</button></div></div></div>
    <div class="field"><label for="nl-e">Email</label><input class="input" id="nl-e" name="email" type="email" value="${esc(S.user?.email||DEMO_USER.email)}"></div></div>
  <div class="mf"><button type="button" class="btn btn-ghost" data-act="nl-skip">${t('Not now')}</button><button class="btn btn-primary" type="submit">${ic('mail')}${t('Subscribe')}</button></div></form>`,{onClose:()=>{ S.nlDone=true; save(); }});
}

/* ---------- search ---------- */
function searchResults(q){
  q=q.trim().toLowerCase(); if(!q) return null;
  const vs=VIDEOS.filter(v=>(v.t+' '+v.mod+' '+FAC[v.fac].name+' '+v.type).toLowerCase().includes(q)).slice(0,5);
  const ts=TECHNIQUES.filter(k=>(k.name+' '+k.mod+' '+k.sum).toLowerCase().includes(q)).slice(0,3);
  const ps=networkPeople().filter(p=>(p.name+' '+p.role+' '+p.city).toLowerCase().includes(q)).slice(0,3);
  const pw=PATHWAYS.filter(p=>(p.name+' '+p.mod).toLowerCase().includes(q)).slice(0,2);
  return {vs,ts,ps,pw};
}
function renderSearch(q){
  const pop=$('#search-pop'); if(!pop) return; const r=searchResults(q);
  if(!r){ pop.hidden=true; return; }
  const n=r.vs.length+r.ts.length+r.ps.length+r.pw.length;
  pop.innerHTML = n ? `${r.vs.length?`<h5>Videos</h5>${r.vs.map(v=>`<a class="sr-item" href="#v-${v.id}">${vthumbImg(v)}<div><div class="t">${esc(v.t)}</div><div class="s">${v.type} · ${esc(FAC[v.fac].name)} · ${v.dur} min</div></div></a>`).join('')}`:''}
    ${r.ts.length?`<h5>${t('Technique kits')}</h5>${r.ts.map(k=>`<a class="sr-item" href="#t-${k.id}"><span class="avatar" style="width:40px;height:40px;background:var(--surface-2);color:var(--brand-2)">${ic('kit')}</span><div><div class="t">${esc(k.name)}</div><div class="s">${k.mod} · ${k.kit.length} kit items</div></div></a>`).join('')}`:''}
    ${r.pw.length?`<h5>${t('Pathways')}</h5>${r.pw.map(p=>`<a class="sr-item" href="#p-${p.id}"><span class="avatar" style="width:40px;height:40px;background:var(--surface-2);color:var(--brand-2)">${ic('route')}</span><div><div class="t">${esc(p.name)}</div><div class="s">${p.hours} h · ${p.cme} CME</div></div></a>`).join('')}`:''}
    ${r.ps.length?`<h5>People</h5>${r.ps.map(p=>`<a class="sr-item" href="#network" data-act="net-go" data-id="${esc(p.name)}">${av(p,40)}<div><div class="t">${esc(p.name)}</div><div class="s">${esc(p.role)} · ${esc(p.city)}</div></div></a>`).join('')}`:''}`
    : `<p class="hint" style="padding:12px">No results for “${esc(q)}”. Try ERCP, POEM or a faculty name.</p>`;
  pop.hidden=false; hydrate();
}

/* ---------- menus ---------- */
function closeMenus(){ ['#notif-menu','#user-menu'].forEach(s=>{ const el=$(s); if(el) el.innerHTML=''; }); }
function toggleMenu(sel,html){ const el=$(sel); if(!el) return; const open=!!el.innerHTML; closeMenus(); if(!open) el.innerHTML=html; }

/* ---------- click delegation ---------- */
document.addEventListener('click',e=>{
  const pop=$('#search-pop'); if(pop && !e.target.closest('#search')) pop.hidden=true;
  if(!e.target.closest('[data-act="notifs"],[data-act="usermenu"],#notif-menu,#user-menu')) closeMenus();
  if(!e.target.closest('#speedpop,[data-act="pspeed"]')){ const sp=$('#speedpop'); if(sp) sp.hidden=true; }
  const el=e.target.closest('[data-act]'); if(!el) return;
  const act=el.dataset.act, id=el.dataset.id;
  if(act==='modal-bg'){ if(e.target===el) closeModal(); return; }
  if(el.tagName==='A' && act!=='net-go') return;
  e.preventDefault();
  const h=ACT[act]; if(h) h(el,id,e);
});
const ACT={
  'close-modal':()=>closeModal(),
  toast:(el)=>toast(el.dataset.msg,el.dataset.icon||'info'),
  scrollto:(el)=>{ const s=document.getElementById(el.dataset.to); if(s) s.scrollIntoView({behavior:'smooth'}); },
  scrollrow:(el)=>{ const r=document.getElementById(el.dataset.row); if(!r) return; const dir=(+el.dataset.dir)*(S.lang==='ar'?-1:1); r.scrollBy({left:dir*r.clientWidth*.9,behavior:'smooth'}); },
  theme:()=>{ S.theme=effTheme()==='dark'?'light':'dark'; save(); applyPrefs(); refresh(); },
  lang:()=>{ S.lang=S.lang==='ar'?'en':'ar'; save(); applyPrefs(); refresh(); toast(S.lang==='ar'?'تم التبديل إلى العربية. يبقى المحتوى العلمي بلغته الأصلية.':'Switched to English.','globe'); },
  'set-lang':(el,id)=>{ S.lang=id; save(); applyPrefs(); refresh(); },
  'set-theme':(el,id)=>{ S.theme=id; save(); applyPrefs(); refresh(); },
  'set-subs':(el,id)=>{ S.subs=id; save(); refresh(); },
  'fill-demo':()=>{ $('#em').value='test@roeya.com'; $('#pw').value='roeya2026'; $('#login-err').hidden=true; $('#em').classList.remove('err'); $('#pw').classList.remove('err'); },
  pwtoggle:(el)=>{ const i=$('#pw'); const show=i.type==='password'; i.type=show?'text':'password'; el.innerHTML=ic(show?'eyeOff':'eye'); el.setAttribute('aria-label',show?'Hide password':'Show password'); },
  sso:()=>toast('Single sign-on is shown for design only. Use the demo account below.','info'),
  'su-role':(el,id)=>{ SU.role=id; $$('.role').forEach(b=>b.classList.toggle('on',b.dataset.id===id)); },
  'su-int':(el,id)=>{ SU.interests=SU.interests.includes(id)?SU.interests.filter(x=>x!==id):[...SU.interests,id]; el.classList.toggle('on'); },
  'su-back':()=>{ captureSU(); SU.step=Math.max(1,SU.step-1); refresh(); },
  logout:()=>{ S.auth=false; S.user=null; save(); SESSION.nlShown=false; location.hash='home'; toast('Signed out.'); },
  notifs:()=>{ toggleMenu('#notif-menu',`<div class="menu" style="min-width:330px"><div style="display:flex;justify-content:space-between;align-items:center;padding:8px 10px"><b>${t('Notifications')}</b><button style="width:auto;padding:4px 8px;font-size:12.5px;color:var(--brand-2)" data-act="notif-read">${t('Mark all read')}</button></div>${notifList().map(n=>`<div class="notif">${av(n[0],34)}<div><span>${esc(n[1])}</span><small>${n[2]}</small></div></div>`).join('')||'<p class="hint" style="padding:10px">No notifications yet.</p>'}</div>`); },
  'notif-read':()=>{ S.notifRead=true; save(); closeMenus(); refresh(); },
  usermenu:()=>{ const u=who('me'); toggleMenu('#user-menu',`<div class="menu"><div class="who">${av(u,40)}<div><b style="font-size:14px">${esc(u.name)}</b><br><small class="faint">${esc(S.user?.email||DEMO_USER.email)}</small></div></div><hr><a href="#profile">${ic('user')}${t('Profile')}</a><a href="#logbook">${ic('clip')}${t('Logbook & CME')}</a><a href="#plans">${ic('card')}${t('Plans')}</a><a href="#account">${ic('gear')}${t('Account')}</a>${isAdmin()?`<a href="#admin">${ic('shield')}Admin</a>`:''}<button data-act="nl-open">${ic('mail')}The Lumen Brief</button><hr><button data-act="logout">${ic('logout')}${t('Sign out')}</button></div>`); },
  'nl-open':()=>{ closeMenus(); newsletterModal(); },
  'nl-skip':()=>{ closeModal(); toast('You can subscribe any time from your account menu.','info'); },
  drawer:()=>{ const items=[['today','home','Today'],['library','lib','Library'],['pathways','route','Pathways'],['techniques','kit','Technique kits'],['models','box','Models'],['live','radio','Live & events'],['feed','feed','Feed'],['network','users','Network'],['messages','msg','Messages'],['consult','steth','Consultations'],['logbook','clip','Logbook & CME'],['profile','user','Profile'],['plans','card','Plans'],['account','gear','Account']];
    openModal(`${mh(t('Menu'))}<div class="mb" style="padding-top:8px"><nav class="nav">${items.map(n=>`<a href="#${n[0]}" data-act="close-nav">${ic(n[1])}<span>${t(n[2])}</span></a>`).join('')}</nav></div>`); },
  'close-nav':(el)=>{ closeModal(); location.hash=el.getAttribute('href').slice(1); },
  msearch:()=>{ const s=$('#search'); s.classList.toggle('open'); if(s.classList.contains('open')) $('#q').focus(); },
  'net-go':(el,id)=>{ NETQ=id; NETF='Everyone'; const s=$('#search'); if(s) s.classList.remove('open'); if(CUR==='network') refresh(); else location.hash='network'; },
  bm:(el,id)=>{ const on=S.bm.includes(id); S.bm=on?S.bm.filter(x=>x!==id):[id,...S.bm]; save(); toast(on?'Removed from saved videos.':'Saved. Find it under Saved videos in the library.', on?'info':'bookmarkF'); refresh(); },
  remind:(el,id)=>{ const on=S.reminders.includes(id); S.reminders=on?S.reminders.filter(x=>x!==id):[...S.reminders,id]; save(); toast(on?'Seat released.':'Seat reserved. We will remind you one hour before.', on?'info':'bell'); refresh(); },
  vote:(el)=>{ S.votes[el.dataset.post]=+el.dataset.i; save(); refresh(); },
  follow:(el,id)=>{ const on=S.follow.includes(id); S.follow=on?S.follow.filter(x=>x!==id):[...S.follow,id]; save(); toast(on?'Unfollowed.':`Following ${FAC[id].name}. New videos will appear in your feed.`); refresh(); },
  share:()=>{ try{ navigator.clipboard.writeText(location.href).catch(()=>{}); }catch(e){} toast('Link copied. Only verified members can open it.','link'); },
  ask:(el,id)=>{ openConv(id, el.dataset.vid?`Question about “${V(el.dataset.vid).t}”: `:''); },
  // library
  'lib-type':(el,id)=>{ LIB.type=id; refresh(); },
  'lib-saved':()=>{ LIB.saved=!LIB.saved; refresh(); },
  'lib-clear':()=>{ LIB={type:'All',mod:'',lvl:'',sort:'new',saved:false,q:''}; refresh(); },
  // player
  pplay:()=>{ P.started=true; P.playing=!P.playing; P.last=performance.now(); if(P.playing && P.t>=P.dur) P.t=0; playerUI(true); },
  pseek:(el)=>seek(P.t+(+el.dataset.d)),
  pgo:(el)=>{ seek(+el.dataset.t); P.started=true; if(!P.playing){ P.playing=true; P.last=performance.now(); playerUI(true); } $('#player').scrollIntoView({behavior:'smooth',block:'nearest'}); },
  scrub:(el,id,e)=>{ const r=el.getBoundingClientRect(); let f=(e.clientX-r.left)/r.width; if(S.lang==='ar') f=1-f; seek(f*P.dur); },
  pcc:()=>{ if(P.id!=='ercp-cannulation'){ toast('Subtitles in English and Arabic arrive with the final recording.','cc'); return; } P.cc=P.cc==='en'?'ar':P.cc==='ar'?'off':'en'; $('#ccbtn').classList.toggle('on',P.cc!=='off'); toast(P.cc==='off'?'Subtitles off':P.cc==='ar'?'الترجمة: العربية':'Subtitles: English','cc'); playerUI(true); },
  pspeed:()=>{ const sp=$('#speedpop'); sp.hidden=!sp.hidden; },
  pspeedset:(el)=>{ P.speed=+el.dataset.s; $('#spbtn').textContent=P.speed+'×'; $('#speedpop').hidden=true; },
  pfull:()=>{ const p=$('#player'); try{ if(document.fullscreenElement) document.exitFullscreen(); else p.requestFullscreen().catch(()=>toast('Full screen is not available in this preview.','info')); }catch(e){ toast('Full screen is not available in this preview.','info'); } },
  ptab:(el,id)=>{ P.tab=id; $$('.tabs button').forEach(b=>b.classList.toggle('on',b.dataset.id===id)); $('#tabbody').innerHTML=tabBody(V(P.id)); P.lastCh=-1; P.lastTr=-1; playerUI(true); },
  trlang:(el,id)=>{ P.trLang=id; $('#tabbody').innerHTML=tabBody(V(P.id)); P.lastTr=-1; playerUI(true); },
  qopt:(el)=>{ const st=S.quiz[P.id]||{a:[],done:false}; st.a[+el.dataset.q]=+el.dataset.o; S.quiz[P.id]=st; save(); $('#tabbody').innerHTML=tabBody(V(P.id)); },
  qcheck:()=>{ const v=V(P.id), pool=QUIZ[MOD_QUIZ[v.mod]]||QUIZ.ercp, st=S.quiz[P.id]||{a:[],done:false};
    if(pool.some((q,i)=>st.a[i]==null)){ toast('Answer every question first.','info'); return; }
    st.done=true; S.quiz[P.id]=st; const score=pool.filter((q,i)=>st.a[i]===q.a).length;
    if(score===pool.length && v.cme && !S.cmeAdd.some(c=>c[1].startsWith(v.t))){ S.cmeAdd.unshift([NOW.toISOString().slice(0,10),v.t+' — module and assessment','ROEYA Lumen online',v.cme]); toast(`${v.cme} CME hours added to your transcript.`,'award'); }
    save(); $('#tabbody').innerHTML=tabBody(v); },
  qreset:()=>{ delete S.quiz[P.id]; save(); $('#tabbody').innerHTML=tabBody(V(P.id)); },
  'note-del':(el)=>{ S.notes[P.id].splice(+el.dataset.i,1); save(); $('#tabbody').innerHTML=tabBody(V(P.id)); },
  // pathways, techniques, models, events
  enrol:(el,id)=>{ S.enr=[...new Set([...(S.enr||[]),id])]; save(); toast(`Enrolled in ${PW(id).name}. Your mentor has been notified.`,'route'); refresh(); },
  'tk-f':(el,id)=>{ TKF=id; refresh(); },
  'kit-copy':(el,id)=>{ const k=TK(id); const txt=k.name+'\n'+k.kit.map(r=>`- ${r[0]}: ${r[1]}${r[2]?' ('+r[2]+')':''}`).join('\n'); try{ navigator.clipboard.writeText(txt).catch(()=>{}); }catch(e){} toast('Kit list copied. Paste it into your list prep or send it to the unit.','copy'); },
  'model-req':(el,id)=>modelModal('session',id),
  'model-order':(el,id)=>modelModal('order',id),
  'ev-f':(el,id)=>{ EVF=id; refresh(); },
  'ev-detail':(el,id)=>eventModal(id),
  'ev-register':()=>toast('Registration opens in the ROEYA booking page in the final build.','info'),
  'cal-add':(el,id)=>{ const e=EV(id); toast(`${e.name} added to your Lumen calendar.`,'cal'); },
  // feed
  'feed-f':(el,id)=>{ FEEDF=id; refresh(); },
  like:(el)=>{ const id=el.dataset.post, on=S.likes.includes(id); S.likes=on?S.likes.filter(x=>x!==id):[...S.likes,id]; save(); rerenderPost(id); },
  cfocus:(el)=>{ const f=$(`#post-${el.dataset.post} .cmt-in input`); f&&f.focus(); },
  repost:()=>toast('Reposted to your profile.','repost'),
  'post-more':(el)=>{ const p=feedPosts().find(x=>x.id===el.dataset.post); if(!p) return; if(canDeletePost(p)||isAdmin()){ openModal(`${mh('Post options')}<div class="mb"><p class="muted">${esc(p.text.slice(0,140))}${p.text.length>140?'…':''}</p></div><div class="mf"><button class="btn btn-ghost" data-act="close-modal">Cancel</button><button class="btn btn-primary" data-act="post-del" data-post="${p.id}" style="background:var(--danger);border-color:var(--danger)">Delete post</button></div>`); } else toast('Post options: save, mute author, report.','info'); },
  'post-del':(el)=>{ S.myPosts=S.myPosts.filter(x=>x.id!==el.dataset.post); save(); closeModal(); refresh(); toast('Post deleted.'); },
  step:(el)=>{ const k=el.dataset.k; S.steps=S.steps||{}; if(S.steps[k]) delete S.steps[k]; else S.steps[k]=1; save(); refresh(); },
  'compose-tpl':(el)=>{ const tpl={case:'Case: age, sex, indication.\nFindings: \nWhat was done: \nMy question: ',paper:'Paper: title, journal, year\nWhy it matters: ',question:'Question for the faculty: '}[el.dataset.k]; const c=$('#compose'); c.value=tpl; c.focus(); },
  // network & messages
  'net-f':(el,id)=>{ NETF=id; refresh(); },
  connect:(el,id)=>{ if(S.conn.includes(id)||S.pending.includes(id)) return; const p=who(id); if(p.faculty){ S.pending.push(id); toast(`Request sent to ${p.name}.`,'users'); } else { S.conn.push(id); toast(`You are now connected with ${p.name}.`,'users'); } save(); refresh(); },
  circle:(el,id)=>{ const on=S.circles.includes(id); S.circles=on?S.circles.filter(x=>x!==id):[...S.circles,id]; save(); toast(on?`Left ${id}.`:`Joined ${id}.`,'users'); refresh(); },
  conv:(el,id)=>{ MSG.cur=id; refresh(); },
  'conv-back':()=>{ MSG.cur=null; refresh(); },
  // consult
  'c-exp':(el,id)=>{ CONS.exp=id; CONS.slot=null; CONS.err=''; keepConsultText(); refresh(); },
  'c-type':(el,id)=>{ CONS.type=id; CONS.err=''; keepConsultText(); refresh(); },
  'c-day':(el)=>{ CONS.day=+el.dataset.i; CONS.slot=null; keepConsultText(); refresh(); },
  'c-slot':(el,id)=>{ CONS.slot=id; CONS.err=''; keepConsultText(); refresh(); },
  // logbook, account
  'log-add':()=>logModal(),
  passport:()=>passportModal(),
  talk:()=>talkModal(),
  'edit-profile':()=>{ openModal(`<form data-form="profile">${mh(t('Edit profile'))}<div class="mb"><div class="field"><label for="pf-n">Name</label><input class="input" id="pf-n" name="name" value="${esc(who('me').name)}"></div><div class="field"><label for="pf-b">About</label><textarea class="textarea" id="pf-b" name="bio">${esc(S.bio||'Second-year GI fellow in Cairo working towards independent ERCP. Interested in biliary endoscopy and in research on how endoscopy training changes outcomes.')}</textarea></div></div><div class="mf"><button type="button" class="btn btn-ghost" data-act="close-modal">Cancel</button><button class="btn btn-primary" type="submit">${t('Save')}</button></div></form>`); },
  bill:(el,id)=>{ S.bill=id; save(); refresh(); },
  region:(el,id)=>{ S.region=id; save(); refresh(); },
  'chip-toggle':(el)=>el.classList.toggle('on'),
  seg:(el)=>{ $$('button',el.parentElement).forEach(b=>b.classList.toggle('on',b===el)); },
};
function rerenderPost(id){ const p=feedPosts().find(x=>x.id===id); const el=$('#post-'+id); if(p&&el){ el.outerHTML=postHTML(p); hydrate(); } }
function keepConsultText(){ const s=$('#c-sum'); if(s) CONS.summary=s.value; }
function openConv(id,prefill=''){ return openConvBase(id,prefill); }
function openConvBase(id,prefill=''){
  let c=allConvs().find(x=>x.with===id);
  if(!c){ const nid='n-'+id; S.newConvs=[...(S.newConvs||[]),{id:nid,with:id}]; save(); c={id:nid}; }
  MSG.cur=c.id; MSG.prefill=prefill;
  if(CUR==='messages') refresh(); else location.hash='messages';
}

/* ---------- inputs & changes ---------- */
document.addEventListener('input',e=>{
  const el=e.target;
  if(el.id==='q'){ renderSearch(el.value); return; }
  const k=el.dataset.input; if(!k) return;
  const pos=el.selectionStart;
  if(k==='lib-q') LIB.q=el.value; if(k==='net-q') NETQ=el.value; if(k==='msg-q') MSG.q=el.value;
  clearTimeout(el._t); el._t=setTimeout(()=>{ refresh(); const n=$(`[data-input="${k}"]`); if(n){ n.focus(); try{ n.setSelectionRange(pos,pos); }catch(_){} } },220);
});
document.addEventListener('change',e=>{
  const el=e.target, k=el.dataset.change; if(!k) return;
  if(k==='lib-mod'){ LIB.mod=el.value; refresh(); }
  else if(k==='lib-lvl'){ LIB.lvl=el.value; refresh(); }
  else if(k==='lib-sort'){ LIB.sort=el.value; refresh(); }
  else if(k==='su-file'){ captureSU(); SU.file=el.files[0]?.name||''; refresh(); }
  else if(k==='c-file'){ keepConsultText(); CONS.file=[...el.files].map(f=>f.name).join(', '); refresh(); }
  else if(k==='pref-autoplay'){ S.autoplay=el.checked; save(); }
  else if(k.startsWith('n-')){ S.notif[k.slice(2)]=el.checked; save(); toast('Notification settings saved.'); }
  else if(k.startsWith('p-')){ S.privacy[k.slice(2)]=el.checked; save(); toast('Privacy settings saved.','shield'); }
});
document.addEventListener('keydown',e=>{
  const typing=/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName||'');
  if(e.key==='Escape'){ closeModal(); closeMenus(); const pop=$('#search-pop'); if(pop) pop.hidden=true; const s=$('#search'); if(s) s.classList.remove('open'); }
  if(e.key==='/' && !typing && $('#q')){ e.preventDefault(); const s=$('#search'); if(getComputedStyle(s).display==='none') s.classList.add('open'); $('#q').focus(); }
  if(e.key==='Enter' && document.activeElement?.id==='q'){ const a=$('#search-pop a'); if(a){ e.preventDefault(); location.hash=a.getAttribute('href').slice(1); $('#q').value=''; $('#search-pop').hidden=true; } }
  if(CUR.startsWith('v-') && !typing && !$('#modal-root').innerHTML){
    if(e.key===' '||e.key==='k'){ e.preventDefault(); ACT.pplay(); }
    if(e.key==='ArrowRight'){ seek(P.t+10); } if(e.key==='ArrowLeft'){ seek(P.t-10); }
    if(e.key==='c'){ ACT.pcc(); }
  }
});
window.addEventListener('resize',()=>{ clearTimeout(window._rz); window._rz=setTimeout(()=>{ if(window.innerWidth===LASTW) return; LASTW=window.innerWidth; const playing=P.playing; ANIMS.forEach(a=>a.stop()); ANIMS=[]; mountCanvases(CURNAME,CURPARAM); P.playing=playing; },300); });
matchMedia('(prefers-color-scheme: light)').addEventListener?.('change',()=>{ if(S.theme==='system') refresh(); });

/* ---------- forms ---------- */
function captureSU(){ const f=$('form[data-form="signup"]'); if(!f) return; const d=new FormData(f); ['name','email','country','center'].forEach(k=>{ if(d.has(k)) SU[k]=d.get(k); }); }
document.addEventListener('submit',e=>{
  const f=e.target, k=f.dataset.form; if(!k) return; e.preventDefault();
  const d=new FormData(f), val=n=>(d.get(n)||'').toString().trim();
  const err=(id,msg,field)=>{ const el=$(id); if(!el) return; el.hidden=!msg; if(msg) el.querySelector('span').textContent=msg; if(field){ const fe=f.querySelector(`[name="${field}"]`); if(fe){ fe.classList.add('err'); fe.focus(); } } };
  f.querySelectorAll('.err').forEach(x=>x.classList.remove('err'));
  const h=FORMS[k]; if(h) h({f,d,val,err});
});
const FORMS={
  login:({f,d,val,err})=>{ const em=val('email').toLowerCase(), pw=val('password');
      if(!em) return err('#login-err','Enter your email address.','email');
      if(!/^\S+@\S+\.\S+$/.test(em)) return err('#login-err','That does not look like an email address.','email');
      if(!pw) return err('#login-err','Enter your password.','password');
      if(em!=='test@roeya.com'||pw!=='roeya2026') return err('#login-err','That email and password do not match. Try the demo account below.','password');
      S.auth=true; S.user={name:DEMO_USER.name,first:DEMO_USER.first,email:em}; save(); const nx=SESSION.next; SESSION.next=null; location.hash=nx&&!PUBLIC.includes(nx)?nx:'today'; toast(`Welcome back, ${DEMO_USER.first}.`,'check'); },
  signup:({f,d,val,err})=>{ captureSU();
      if(SU.step===1){ if(val('name').length<3) return err('#su-err','Enter your full name.','name'); if(!/^\S+@\S+\.\S+$/.test(val('email'))) return err('#su-err','Enter a valid work email.','email'); if(val('password').length<8) return err('#su-err','Use at least 8 characters for your password.','password'); }
      if(SU.step===3){ const code=val('code'); if(!SU.file && !code) return err('#su-err','Upload a document or enter a ROEYA course code.'); if(code && !/^[A-Za-z]{2,6}\d?-?\d{4}$/.test(code)) return err('#su-err','That course code is not recognised. It looks like ERCP4-2026.','code'); }
      if(SU.step===4){ if(!SU.interests.length) return err('#su-err','Pick at least one field.'); if(!d.get('terms')) return err('#su-err','Please accept the terms to continue.');
        const nm=SU.name||DEMO_USER.name; S.auth=true; S.user={name:nm,first:nm.replace(/^(Dr\.|Prof\.)\s*/,'').split(' ')[0],email:SU.email||DEMO_USER.email}; if(!d.get('brief')) S.nlDone=true; save(); SU={step:1,role:'fellow',interests:['ERCP','EUS'],name:'',email:'',country:'Egypt',center:'',file:''}; location.hash='today'; toast('Account created. Verification usually takes up to two working days; you have full access meanwhile.','shield'); return; }
      SU.step++; refresh(); },
  forgot:({f,d,val,err})=>{ if(!/^\S+@\S+\.\S+$/.test(val('email'))) return err('#fg-err','Enter the email you signed up with.','email'); FORGOT_SENT=true; refresh(); setTimeout(()=>{ FORGOT_SENT=false; },10000); },
  brief:({f,d,val,err})=>{ const topics=$$('.modal .chip.on').map(x=>x.dataset.id); if(!/^\S+@\S+\.\S+$/.test(val('email'))){ toast('Enter a valid email.','info'); return; } S.nlDone=true; S.nlSub={topics,email:val('email')}; save(); modalOnClose=null; closeModal(); toast(`Subscribed. Your first Lumen Brief arrives on Sunday${topics.length?` with ${topics.slice(0,3).join(', ')}`:''}.`,'mail'); },
  'brief-public':({f,d,val,err})=>{ if(!/^\S+@\S+\.\S+$/.test(val('email'))){ toast('Enter a valid email address.','info'); f.querySelector('input').classList.add('err'); return; } f.reset(); toast('Subscribed. The first issue arrives on Sunday.','mail'); },
  vqa:({f,d,val,err})=>{ const q=val('q'); if(q.length<3) return; const key='v:'+f.dataset.id; S.cmts[key]=[...(S.cmts[key]||[]),['me',q,'Just now']]; save(); refresh(); toast('Question posted. The faculty usually answer within 48 hours.','msg'); },
  note:({f,d,val,err})=>{ const n=val('n'); if(!n) return; S.notes[P.id]=[...(S.notes[P.id]||[]),[Math.floor(P.t),n]].sort((a,b)=>a[0]-b[0]); save(); $('#tabbody').innerHTML=tabBody(V(P.id)); toast('Note saved at '+mmss(P.t),'pen'); },
  cmt:({f,d,val,err})=>{ const c=val('c'); if(!c) return; const id=f.dataset.post; S.cmts[id]=[...(S.cmts[id]||[]),['me',c]]; save(); rerenderPost(id); },
  post:({f,d,val,err})=>{ const tx=val('text'); if(tx.length<3){ toast('Write something first.','info'); return; } S.myPosts.unshift({id:'m'+Date.now(),by:'me',at:'Just now',tags:[/^Case:/.test(tx)?'Case of the week':/^Paper:/.test(tx)?'Research':'Discussion'],text:tx,likes:0,comments:[]}); save(); FEEDF='All'; refresh(); toast('Posted to the community.','send'); },
  msg:({f,d,val,err})=>{ const m=val('m'); if(!m) return; const id=f.dataset.id, c=allConvs().find(x=>x.id===id); const time=new Date().toTimeString().slice(0,5);
      S.msgs[id]=[...(S.msgs[id]||[]),['me',m,'Today '+time]]; save(); MSG.prefill=''; refresh();
      const ty=$('#typing'); if(ty){ ty.outerHTML='<div class="typing" id="typing-dots"><i></i><i></i><i></i></div>'; const ms=$('#msgs'); ms.scrollTop=ms.scrollHeight; }
      setTimeout(()=>{ const p=c.with?who(c.with):null; const reply=c.desk?'Thank you. The course desk will reply within one working day.':c.group?'Good point. Let us pick it up at office hours.':p.faculty?`Thanks, ${(S.user?.first)||DEMO_USER.first}. I will look at this before Thursday’s office hours.`:'Sounds good. Let us compare notes after the course.';
        S.msgs[id]=[...(S.msgs[id]||[]),[c.group?'amina':'them',reply,'Today '+new Date().toTimeString().slice(0,5)]]; save(); if(CUR==='messages' && MSG.cur===id) refresh(); },1600); },
  consult:({f,d,val,err})=>{ keepConsultText(); const sum=val('summary');
      if(CONS.type==='video' && !CONS.slot){ CONS.err='Choose a time slot.'; CONS.summary=sum; refresh(); return; }
      if(sum.length<20){ CONS.err='Add a short case summary and your question (at least 20 characters).'; CONS.summary=sum; refresh(); return; }
      if(!d.get('consent')){ CONS.err='Confirm that you have removed patient identifiers.'; CONS.summary=sum; refresh(); return; }
      const days=nextDays(5); S.consults.push({exp:CONS.exp,type:CONS.type,when:CONS.type==='video'?fmtDate(days[CONS.day])+' · '+CONS.slot:'Reply within 48 hours',summary:sum}); save();
      toast(`Booked with ${FAC[CONS.exp].name}. A calendar invite is on its way.`,'steth'); CONS={exp:CONS.exp,type:'video',day:0,slot:null,err:'',file:''}; refresh(); window.scrollTo({top:0,behavior:'smooth'}); },
  log:({f,d,val,err})=>{ const need=['date','proc','ind','role','out']; for(const n of need){ if(!val(n)){ const fe=f.querySelector(`[name="${n}"]`); fe&&fe.classList.add('err'); toast('Fill in every field.','info'); return; } }
      S.logAdd.unshift([val('date'),val('proc'),val('ind'),val('role'),val('sup')||'—',val('out'),true]); save(); closeModal(); refresh(); toast('Procedure logged and sent for sign-off.','clip'); },
  passport:({f,d,val,err})=>{ const c=val('code'); if(!/^[A-Za-z]{2,6}\d?-?\d{4}$/.test(c)){ const el=$('#pp-err'); el.hidden=false; f.querySelector('input').classList.add('err'); return; } closeModal(); toast(`Course Passport ${c.toUpperCase()} activated. Pre-course modules are unlocked in your pathway.`,'ticket'); },
  model:({f,d,val,err})=>{ if(!val('name')||!val('unit')){ toast('Add your name and unit.','info'); return; } closeModal(); toast(f.dataset.kind==='order'?'Order request sent. The ROEYA team will send a quote within two working days.':'Session request sent. The ROEYA Training Center will confirm a date by email.','box'); },
  talk:({f,d,val,err})=>{ if(!val('name')||!/^\S+@\S+\.\S+$/.test(val('email'))){ toast('Add your name and a valid email.','info'); return; } closeModal(); toast('Thank you. We will contact you within two working days.','mail'); },
  profile:({f,d,val,err})=>{ const n=val('name'); if(n){ S.user={...(S.user||{}),name:n,first:n.replace(/^(Dr\.|Prof\.)\s*/,'').split(' ')[0]}; } S.bio=val('bio'); save(); closeModal(); refresh(); toast('Profile updated.'); },
};

/* ---------- modals ---------- */
function modelModal(kind,id){
  const m=id?MD(id):null;
  openModal(`<form data-form="model" data-kind="${kind}">${mh(kind==='order'?t('Order for your unit'):t('Request a session'),kind==='order'?'ROEYA models are made to order for hospitals and training programmes.':'Practise at the ROEYA Training Center in Cairo with a trainer.')}
  <div class="mb"><div class="field"><label for="mm-m">Model</label><select class="select" id="mm-m" name="model">${MODELS.map(x=>`<option${m&&m.id===x.id?' selected':''}>${esc(x.name)}</option>`).join('')}</select></div>
  <div class="grid-2" style="gap:12px"><div class="field"><label for="mm-n">Your name</label><input class="input" id="mm-n" name="name" value="${esc(who('me').name)}"></div><div class="field"><label for="mm-u">Unit or hospital</label><input class="input" id="mm-u" name="unit" placeholder="Hospital, city"></div></div>
  ${kind==='order'?`<div class="grid-2" style="gap:12px"><div class="field"><label for="mm-q">Quantity</label><input class="input" id="mm-q" name="qty" type="number" min="1" value="4"></div><div class="field"><label for="mm-c">Country</label><input class="input" id="mm-c" name="country" value="Egypt"></div></div>`:`<div class="field"><label for="mm-d">Preferred dates</label><input class="input" id="mm-d" name="dates" placeholder="e.g. any weekday after 20 November"></div>`}
  <div class="field"><label for="mm-t">Notes</label><textarea class="textarea" id="mm-t" name="notes" placeholder="${kind==='order'?'Course or programme, delivery date':'What you want to practise'}" style="min-height:76px"></textarea></div></div>
  <div class="mf"><button type="button" class="btn btn-ghost" data-act="close-modal">Cancel</button><button class="btn btn-primary" type="submit">${kind==='order'?'Request a quote':'Send request'}</button></div></form>`);
}
function eventModal(id){
  const e=EV(id);
  openModal(`${mh(esc(e.name),`${fmtRange(e.start,e.end)} · ${esc(e.place)}`)}<div class="mb">
    <div class="chips" style="gap:6px"><span class="tag">${e.kind}</span>${e.passport?`<span class="tag ok">${ic('ticket')}Includes Lumen access</span>`:''}</div>
    <p class="muted">${e.kind==='Hands-on course'?'Hands-on training on ROEYA ex-vivo models with expert faculty. Registration includes a Course Passport: the pre-course modules open in your pathway the day you register.':e.kind==='Online'?'Free online session. Join from Lumen or Zoom; the recording is added to the library.':'ROEYA runs the hands-on stations and supports the live sessions at this congress.'}</p>
    ${e.passport?`<div class="notice info">${ic('info')}<span>Pre-course modules for this course are already in the matching pathway.</span></div>`:''}</div>
    <div class="mf"><button class="btn btn-secondary" data-act="cal-add" data-id="${e.id}">${ic('cal')}Add to calendar</button><button class="btn btn-primary" data-act="ev-register" data-id="${e.id}">${t('Register')}</button></div>`);
}
function logModal(){
  openModal(`<form data-form="log">${mh(t('Add procedure'),'Your supervisor gets a sign-off request.')}<div class="mb">
    <div class="grid-2" style="gap:12px"><div class="field"><label for="lg-d">Date</label><input class="input" id="lg-d" name="date" type="date" value="${NOW.toISOString().slice(0,10)}"></div><div class="field"><label for="lg-p">Procedure</label><select class="select" id="lg-p" name="proc">${['ERCP','EUS','EGD','Colonoscopy','ESD','POEM','Band ligation'].map(x=>`<option>${x}</option>`).join('')}</select></div></div>
    <div class="field"><label for="lg-i">Indication</label><input class="input" id="lg-i" name="ind" placeholder="e.g. CBD stones, cholangitis"></div>
    <div class="grid-2" style="gap:12px"><div class="field"><label for="lg-r">Your role</label><select class="select" id="lg-r" name="role">${['Performed (supervised)','Independent','Assisted','Observed'].map(x=>`<option>${x}</option>`).join('')}</select></div><div class="field"><label for="lg-s">Supervisor</label><input class="input" id="lg-s" name="sup" value="Prof. Karim El-Sawy"></div></div>
    <div class="field"><label for="lg-o">Outcome</label><input class="input" id="lg-o" name="out" placeholder="e.g. Cannulated; 2 stones cleared"></div>
    <p class="hint">${ic('shield')} Do not enter patient names or record numbers.</p></div>
    <div class="mf"><button type="button" class="btn btn-ghost" data-act="close-modal">Cancel</button><button class="btn btn-primary" type="submit">Log procedure</button></div></form>`);
}
function passportModal(){
  openModal(`<form data-form="passport">${mh('Activate a Course Passport','Enter the code from your ROEYA course confirmation email.')}<div class="mb"><div class="field"><label for="pp">Course code</label><input class="input" id="pp" name="code" placeholder="ERCP4-2026" autofocus></div><p class="err-msg" id="pp-err" hidden>${ic('alert')}<span>That code is not recognised. It looks like ERCP4-2026.</span></p><p class="hint">Try the demo code ERCP4-2026.</p></div><div class="mf"><button type="button" class="btn btn-ghost" data-act="close-modal">Cancel</button><button class="btn btn-primary" type="submit">Activate</button></div></form>`);
}
function talkModal(){
  openModal(`<form data-form="talk">${mh('Lumen for your programme','Tell us about your fellows and we will prepare a quote.')}<div class="mb"><div class="grid-2" style="gap:12px"><div class="field"><label for="tk-n">Name</label><input class="input" id="tk-n" name="name"></div><div class="field"><label for="tk-e">Work email</label><input class="input" id="tk-e" name="email" type="email"></div></div><div class="grid-2" style="gap:12px"><div class="field"><label for="tk-o">Hospital or programme</label><input class="input" id="tk-o" name="org"></div><div class="field"><label for="tk-s">Number of fellows</label><input class="input" id="tk-s" name="seats" type="number" min="10" value="12"></div></div><div class="field"><label for="tk-m">Message</label><textarea class="textarea" id="tk-m" name="msg" style="min-height:76px"></textarea></div></div><div class="mf"><button type="button" class="btn btn-ghost" data-act="close-modal">Cancel</button><button class="btn btn-primary" type="submit">${t('Send')}</button></div></form>`);
}

/* ---------- boot ---------- */
function boot(){ applyPrefs(); render(false); }
if(!window.API && !window.LUMEN_LIVE) boot();
if(document.fonts && document.fonts.ready){ document.fonts.ready.then(()=>{ let ok=false; try{ ok=document.fonts.check('12px "JetBrains Mono"'); }catch(e){} if(ok && ART_CACHE.size){ ART_CACHE.clear(); $$('img[data-art]').forEach(i=>i.removeAttribute('src')); hydrate(); } }); }

;
/* ===================== LIVE MODE (Firebase) =====================
   Loaded only in the hosted build. Replaces the demo hooks with Firestore data. */
var LCFG = window.LUMEN_CONFIG || {};
var LIVE = { uid:null, profiles:{}, posts:[], likes:{}, comments:{}, votes:{}, convs:[], msgs:{}, qa:{}, admin:false,
  unsub:[], msgUnsub:null, msgCid:null, qaUnsub:null, qaVid:null, pending:null, saveT:null, saving:false, needsProfile:false,
  adm:{tab:'overview', data:{}, loading:{}}, changedKinds:new Set(), changeT:null, warned:{} };

if(!LCFG.showSamples){ PEOPLE.length=0; CONVS.length=0; SESSIONS.length=0; Object.keys(QA).forEach(k=>delete QA[k]); QA.default=[]; }

/* ---------- helpers ---------- */
const ROLE_LABEL={fellow:'GI fellow',adv:'Advanced endoscopy fellow',cons:'Consultant',nurse:'Endoscopy nurse',surg:'Surgeon',res:'Resident'};
function hueFor(s){ let h=0; for(const c of String(s)) h=(h*31+c.charCodeAt(0))%360; return h; }
function firstName(n){ return String(n||'').replace(/^(Dr\.|Prof\.)\s*/,'').split(/\s+/)[0]||'there'; }
function monthYear(ms){ if(!ms) return ''; const d=new Date(ms); return `${MON[d.getMonth()]} ${d.getFullYear()}`; }
function msgTime(ms){ const d=new Date(ms||Date.now()); return (d.toDateString()===new Date().toDateString()?'Today ':fmtDate(d,false)+' ')+d.toTimeString().slice(0,5); }
function errCode(e){ return (e&&(e.code||e.message))||'unknown error'; }
function fail(e,what){ console.error(e); toast(`Could not ${what}. ${errCode(e).replace(/^auth\/|^firestore\//,'')}`,'alert'); }
function authMsg(e){
  const c=(e&&e.code)||'';
  return ({'auth/invalid-credential':'Email or password is incorrect.','auth/wrong-password':'Email or password is incorrect.','auth/user-not-found':'Email or password is incorrect.',
    'auth/invalid-email':'That email address is not valid.','auth/too-many-requests':'Too many attempts. Wait a few minutes, or reset your password.',
    'auth/email-already-in-use':'An account with this email already exists. Sign in instead.','auth/weak-password':'Choose a stronger password (at least 8 characters).',
    'auth/network-request-failed':'No connection. Check your internet and try again.','auth/user-disabled':'This account has been disabled. Contact ROEYA.',
    'auth/popup-blocked':'Your browser blocked the sign-in window. Allow pop-ups and try again.','auth/unauthorized-domain':'This website address is not authorised in Firebase yet (Authentication → Settings → Authorized domains).',
    'auth/operation-not-allowed':'This sign-in method is not turned on in Firebase yet.'})[c] || ('Something went wrong: '+(c||e.message||'unknown'));
}
function freshState(){
  const s=structuredClone(DEFAULT_STATE);
  Object.assign(s,{bm:[],prog:{},watched:[],notes:{},likes:[],votes:{},cmts:{},myPosts:[],conn:[],pending:[],circles:[],msgs:{},consults:[],logAdd:[],quiz:{},cmeAdd:[],reminders:[],follow:[],enr:[],steps:{},courses:[],newConvs:[],read:[],seen:{},nlDone:false,notifRead:false});
  return s;
}
function btnBusy(f,on,label){ const b=f&&f.querySelector('button[type=submit]'); if(!b) return; if(on){ b.dataset.label=b.innerHTML; b.disabled=true; b.innerHTML=label||'Please wait…'; } else { b.disabled=false; if(b.dataset.label) b.innerHTML=b.dataset.label; } }
function liveError(msg){ if(LIVE.warned[msg]) return; LIVE.warned[msg]=1; toast(msg,'alert'); }

/* ---------- hook overrides ---------- */
function isDemo(){ return !!S.demo; }
function isAdmin(){ return !!LIVE.admin; }
function liveWho(id){ const p=LIVE.profiles[id]; if(!p) return null; return {id,name:p.name||'Member',role:p.role||'',city:p.city||p.country||'',hue:p.hue??hueFor(id),kind:p.kind||'Fellow',mods:p.mods||[],faculty:p.kind==='Expert',verified:!!p.verified,real:true}; }
function isVerified(){ const p=LIVE.profiles[LIVE.uid]; return isDemo()||!!(p&&p.verified); }
function myCourses(){ return S.courses||[]; }
function onSaved(){ if(!LIVE.uid||!S.auth) return; clearTimeout(LIVE.saveT); LIVE.saveT=setTimeout(pushState,1200); }
function cloudState(){ const c=Object.assign({},S); delete c.auth; delete c.user; return c; }
async function pushState(first){
  if(!LIVE.uid) return; clearTimeout(LIVE.saveT); LIVE.saveT=null;
  const data={stateJson:JSON.stringify(cloudState())};
  if(S.user?.email) data.email=S.user.email; if(S.user?.name) data.name=String(S.user.name).slice(0,120);
  if(first) data.createdAt=new Date();
  try{ await API.saveUser(LIVE.uid,data); }catch(e){ console.error(e); liveError('Your progress could not be saved to the cloud ('+errCode(e)+').'); }
}
window.addEventListener('pagehide',()=>{ if(LIVE.saveT) pushState(); });
document.addEventListener('visibilitychange',()=>{ if(document.visibilityState==='hidden'&&LIVE.saveT) pushState(); });

function feedPosts(){ return LIVE.posts; }
function likeCount(p){ return (LIVE.likes[p.id]||[]).length; }
function isLiked(p){ return (LIVE.likes[p.id]||[]).includes(LIVE.uid); }
function postComments(p){ return (LIVE.comments[p.id]||[]).map(c=>[c.by,c.text]); }
function myVote(p){ const v=(LIVE.votes[p.id]||{})[LIVE.uid]; return v==null?undefined:v; }
function pollCounts(p){ const vs=Object.values(LIVE.votes[p.id]||{}); return p.poll.o.map((o,i)=>vs.filter(x=>x===i).length); }
function postTime(p){ return ago(new Date(p.ts)); }
function canDeletePost(p){ return p.by===LIVE.uid; }
function qaList(v){
  const live=(LIVE.qa[v.id]||[]).slice().sort((a,b)=>a.at-b.at).map(q=>[q.by,q.text,(liveWho(q.by)||{}).faculty?1:0,ago(new Date(q.at)),q.id]);
  return [...(isDemo()||LCFG.showSamples?(QA[v.mod]||QA.default||[]):[]),...live];
}
function networkPeople(){
  const real=Object.keys(LIVE.profiles).filter(id=>id!==LIVE.uid).map(id=>({...liveWho(id),id,mods:LIVE.profiles[id].mods||[]}));
  real.sort((a,b)=>(b.kind==='Expert')-(a.kind==='Expert')||a.name.localeCompare(b.name));
  return [...real,...PEOPLE.map(p=>({...who(p.id),...p,name:who(p.id).name,sample:true}))];
}
function notifList(){
  const out=[];
  allConvs().filter(c=>c.live&&convUnread(c)).forEach(c=>out.push([c.other,`New message from ${who(c.other).name}`,ago(new Date(c.lastAt))]));
  if(!isVerified()) out.push(['roeya','Your fellow verification is being reviewed. You have full access meanwhile.','']);
  if(isDemo()) out.push(...NOTIFS);
  return out;
}
function allConvs(){
  const live=LIVE.convs.map(c=>({id:c.id,live:true,other:(c.members||[]).find(x=>x!==LIVE.uid)||LIVE.uid,last:c.last,lastBy:c.lastBy,lastAt:c.lastAt||c.createdAt||0})).sort((a,b)=>b.lastAt-a.lastAt);
  return [...live,...allConvsBase()];
}
function convUnread(c){ if(c.live) return !!c.lastBy&&c.lastBy!==LIVE.uid&&c.lastAt>((S.seen||{})[c.id]||0); return !!c.unread&&!(S.read||[]).includes(c.id); }
function convMeta(c){ if(c.live){ const p=who(c.other); return {name:p.name,sub:[p.role,p.city].filter(Boolean).join(' · ')||'Member',av:av(p,44)}; } return convMetaBase(c); }
function convMsgs(c){
  if(c.live){ const l=LIVE.msgs[c.id]; if(l) return l.map(m=>[m.by===LIVE.uid?'me':'them',m.text,msgTime(m.at)]); return c.last?[[c.lastBy===LIVE.uid?'me':'them',c.last,msgTime(c.lastAt)]]:[]; }
  return convMsgsBase(c);
}
function openConv(id,prefill=''){
  if(LIVE.profiles[id] && id!==LIVE.uid){
    API.openConv(id).then(cid=>{ MSG.cur=cid; MSG.prefill=prefill; if(CUR==='messages') refresh(); else location.hash='messages'; }).catch(e=>fail(e,'open the conversation'));
    return;
  }
  if(isDemo()) return openConvBase(id,prefill);
  toast('This is a sample profile. Messages work between real members.','info');
}

/* ---------- auth lifecycle ---------- */
async function startUser(u){
  LIVE.uid=u.uid;
  const demoAcc=(u.email||'').toLowerCase()===String(LCFG.demoEmail||'test@roeya.com').toLowerCase();
  let doc=null, prof=null;
  try{ doc=await API.getUser(u.uid); }catch(e){ console.error(e); liveError('Could not load your saved data ('+errCode(e)+').'); }
  try{ prof=await API.getProfile(u.uid); }catch(e){ console.error(e); }
  let st=null; if(doc&&doc.stateJson){ try{ st=JSON.parse(doc.stateJson); }catch(e){} }
  const keep={theme:S.theme,lang:S.lang};
  S=Object.assign(demoAcc?structuredClone(DEFAULT_STATE):freshState(),st||{});
  if(!st){ S.theme=keep.theme; S.lang=keep.lang; }
  S.demo=demoAcc;
  const pend=LIVE.pending; LIVE.pending=null;
  if(!prof){
    const nm=(pend&&pend.profile&&pend.profile.name)||u.name||(demoAcc?DEMO_USER.name:String(u.email||'Member').split('@')[0]);
    const data=pend&&pend.profile?{...pend.profile,name:nm}:{name:nm,role:demoAcc?DEMO_USER.role:'',city:demoAcc?DEMO_USER.city:'',country:'',center:'',mods:demoAcc?['ERCP','EUS','Research','Hemostasis']:[],kind:'Fellow'};
    data.hue=hueFor(u.uid); data.name=String(data.name).slice(0,120);
    try{ await API.createProfile(u.uid,data); prof={id:u.uid,...data,verified:false,joined:Date.now()}; }catch(e){ console.error(e); liveError('Could not create your member profile ('+errCode(e)+').'); prof={id:u.uid,...data}; }
    LIVE.needsProfile=!pend&&!demoAcc;
  }
  S.auth=true;
  S.user={uid:u.uid,email:u.email||'',name:prof.name||u.name||'Member',first:firstName(prof.name||u.name),role:prof.role||'',city:prof.city||prof.country||'',hue:prof.hue??hueFor(u.uid),mods:prof.mods||[],joined:monthYear(prof.joined)};
  if(!doc) await pushState(true);
  if(pend){
    const v=pend.verification||{};
    if(v.file||v.code){
      try{ await API.saveVerification({name:S.user.name,email:S.user.email,role:pend.profile.role||'',center:pend.profile.center||'',country:pend.profile.country||'',code:v.code||'',fileName:v.fileName||'',file:v.file||''}); }catch(e){ fail(e,'upload your verification document'); }
      if(v.code) await activateCode(v.code,true);
    }
    if(pend.brief && S.user.email){ API.submit('newsletter',{email:S.user.email,topics:(pend.profile.mods||[]).slice(0,10),freq:'weekly',lang:S.lang,source:'signup'}).catch(e=>console.warn(e)); S.nlDone=true; }
  }
  LIVE.admin=await API.isAdmin(u.uid);
  startListeners();
  save();
}
function stopListeners(){ LIVE.unsub.forEach(f=>{ try{ f(); }catch(e){} }); LIVE.unsub=[]; if(LIVE.msgUnsub){ LIVE.msgUnsub(); LIVE.msgUnsub=null; LIVE.msgCid=null; } if(LIVE.qaUnsub){ LIVE.qaUnsub(); LIVE.qaUnsub=null; LIVE.qaVid=null; } }
function stopUser(){
  stopListeners();
  Object.assign(LIVE,{uid:null,profiles:{},posts:[],likes:{},comments:{},votes:{},convs:[],msgs:{},qa:{},admin:false,needsProfile:false});
  LIVE.adm.data={};
  const keep={theme:S.theme,lang:S.lang}; S=freshState(); Object.assign(S,keep); S.auth=false; S.user=null; S.demo=false;
  try{ localStorage.setItem(STORE_KEY,JSON.stringify(S)); }catch(e){}
}
function shapePost(d){ return {id:d.id,by:d.by,text:d.text||'',tags:d.tags||[],link:d.link||null,art:d.art||null,sample:!!d.sample,ts:d.at||Date.now(),poll:d.poll&&d.poll.o?{q:d.poll.q,o:d.poll.o.map(l=>[l,0])}:null}; }
function startListeners(){
  stopListeners();
  const onErr=what=>e=>{ console.error(what,e); if(e&&e.code==='permission-denied') liveError(`${what}: permission denied. Check that the Firestore rules are published.`); else if(e&&e.code==='failed-precondition'){ const url=(String(e.message||'').match(/https:\/\/\S+/)||[])[0]; if(url&&isAdmin()) openModal(`${mh('One-time database setup')}<div class="mb"><p class="muted">${esc(what)} needs a database index. Open the link, press Save in Firebase, wait two minutes, then reload.</p></div><div class="mf"><a class="btn btn-primary" href="${esc(url)}" target="_blank" rel="noopener">Create the index</a></div>`); else liveError(`${what} is being set up. Try again in a few minutes.`); } };
  LIVE.unsub.push(API.watchProfiles(l=>{ LIVE.profiles={}; l.forEach(p=>LIVE.profiles[p.id]=p); const mine=LIVE.profiles[LIVE.uid]; if(mine&&S.user){ Object.assign(S.user,{name:mine.name||S.user.name,first:firstName(mine.name||S.user.name),role:mine.role||'',city:mine.city||mine.country||'',mods:mine.mods||[],joined:monthYear(mine.joined)||S.user.joined}); } changed('profiles'); },onErr('Members')));
  LIVE.unsub.push(API.watchPosts(l=>{ LIVE.posts=l.map(shapePost).filter(p=>LCFG.showSamples||!p.sample||isDemo()).sort((a,b)=>b.ts-a.ts); changed('posts'); },onErr('Feed')));
  LIVE.unsub.push(API.watchLikes(l=>{ const m={}; l.forEach(x=>{ (m[x.post]=m[x.post]||[]).push(x.uid); }); LIVE.likes=m; changed('likes'); },onErr('Likes')));
  LIVE.unsub.push(API.watchComments(l=>{ const m={}; l.forEach(x=>{ (m[x.post]=m[x.post]||[]).push(x); }); Object.values(m).forEach(a=>a.sort((x,y)=>x.at-y.at)); LIVE.comments=m; changed('comments'); },onErr('Comments')));
  LIVE.unsub.push(API.watchVotes(l=>{ const m={}; l.forEach(x=>{ (m[x.post]=m[x.post]||{})[x.uid]=x.i; }); LIVE.votes=m; changed('votes'); },onErr('Polls')));
  LIVE.unsub.push(API.watchConvs(LIVE.uid,l=>{ LIVE.convs=l; changed('convs'); },onErr('Messages')));
}
function changed(kind){
  LIVE.changedKinds.add(kind); clearTimeout(LIVE.changeT);
  LIVE.changeT=setTimeout(applyChanges,140);
}
function applyChanges(){
  if(!S.auth) return;
  const k=LIVE.changedKinds;
  if($('#modal-root').innerHTML){ LIVE.changeT=setTimeout(applyChanges,900); return; }
  LIVE.changedKinds=new Set();
  const has=(...a)=>a.some(x=>k.has(x));
  const badge=$('.nav a[href="#messages"]'); if(badge && has('convs')){ const n=unreadCount(); let c=badge.querySelector('.count'); if(n){ if(!c){ c=document.createElement('span'); c.className='count'; badge.appendChild(c); } c.textContent=n; } else if(c) c.remove(); }
  if(CUR==='feed'&&has('posts','likes','comments','votes','profiles')) return refresh();
  if(CUR==='today'&&has('posts','votes')) return refresh();
  if(CUR==='messages'&&has('convs','msgs','profiles')) return refresh();
  if(CUR==='network'&&has('profiles')) return refresh();
  if(CUR==='admin'&&has('profiles','posts')) return refresh();
  if(CUR.startsWith('v-')&&has('qa')){ const el=$('#qa'); const v=V(CUR.slice(2)); if(el&&v){ const keep=captureInputs(); el.outerHTML=qaSection(v); restoreInputs(keep); } }
}
function afterMount(name,param){
  if(name==='messages'){
    const cur=allConvs().find(c=>c.id===MSG.cur)||(window.innerWidth>980?allConvs()[0]:null);
    if(cur&&cur.live){
      if(LIVE.msgCid!==cur.id){ if(LIVE.msgUnsub) LIVE.msgUnsub(); LIVE.msgCid=cur.id; LIVE.msgUnsub=API.watchMessages(cur.id,l=>{ LIVE.msgs[cur.id]=l; S.seen=S.seen||{}; S.seen[cur.id]=Date.now(); changed('msgs'); },e=>{ console.error(e); liveError('Messages: '+errCode(e)); }); }
      S.seen=S.seen||{}; if((S.seen[cur.id]||0)<cur.lastAt){ S.seen[cur.id]=Date.now(); save(); }
    }
  } else if(LIVE.msgUnsub){ LIVE.msgUnsub(); LIVE.msgUnsub=null; LIVE.msgCid=null; }
  if(name==='watch'){
    if(LIVE.qaVid!==param){ if(LIVE.qaUnsub) LIVE.qaUnsub(); LIVE.qaVid=param; LIVE.qaUnsub=API.watchQA(param,l=>{ LIVE.qa[param]=l; changed('qa'); },e=>console.error(e)); }
  } else if(LIVE.qaUnsub){ LIVE.qaUnsub(); LIVE.qaUnsub=null; LIVE.qaVid=null; }
  if(name==='admin') adminLoad();
  if(name==='today'&&LIVE.needsProfile&&!$('#modal-root').innerHTML){ LIVE.needsProfile=false; setTimeout(completeProfileModal,500); }
}
function goAfterAuth(){ const nx=SESSION.next; SESSION.next=null; const r=parse(); if(nx&&!PUBLIC.includes(nx)) location.hash=nx; else if(PUBLIC.includes(r)||!location.hash) { if(r==='plans') refresh(); else location.hash='today'; } else refresh(); }
function liveBoot(){
  applyPrefs();
  if(!window.API){
    $('#app').innerHTML=`<div class="auth-panel" style="min-height:100vh"><div class="auth-card"><div>${brand('#home')}</div><h1>Setup needed</h1><p class="muted">Firebase is not configured yet. Open <code>config.js</code> and paste the firebaseConfig from the Firebase console, then reload.</p></div></div>`;
    return;
  }
  $('#app').innerHTML=`<div style="min-height:100vh;display:grid;place-items:center"><div style="display:grid;gap:14px;justify-items:center">${brandImgs(52)}<span class="hint">Loading Lumen…</span></div></div>`;
  let first=true;
  API.onAuth(async u=>{
    if(u){ await startUser(u); if(first){ first=false; render(false); } else { goAfterAuth(); toast(`Welcome${S.user.first&&S.user.first!=='there'?', '+esc(S.user.first):''}.`,'check'); } }
    else { const was=S.auth; stopUser(); if(first){ first=false; render(false); } else if(was){ location.hash='home'; render(false); } }
  });
}

/* ---------- forms ---------- */
const _FORMS={...FORMS};
FORMS.login=async({f,d,val,err})=>{
  const em=val('email').toLowerCase(), pw=val('password');
  if(!em) return err('#login-err','Enter your email address.','email');
  if(!/^\S+@\S+\.\S+$/.test(em)) return err('#login-err','That does not look like an email address.','email');
  if(!pw) return err('#login-err','Enter your password.','password');
  btnBusy(f,true,'Signing in…');
  try{ await API.signIn(em,pw,!!d.get('remember')); }
  catch(e){ btnBusy(f,false); err('#login-err',authMsg(e),'password'); }
};
FORMS.signup=async(ctx)=>{
  const {f,d,val,err}=ctx;
  if(SU.step===1) SU.pw=val('password');
  if(SU.step<4) return _FORMS.signup(ctx);
  captureSU();
  if(!SU.interests.length) return err('#su-err','Pick at least one field.');
  if(!d.get('terms')) return err('#su-err','Please accept the terms to continue.');
  if(!SU.pw||SU.pw.length<8){ SU.step=1; refresh(); return; }
  LIVE.pending={profile:{name:(SU.name||'').slice(0,120),role:ROLE_LABEL[SU.role]||'',country:SU.country||'',city:'',center:(SU.center||'').slice(0,160),mods:SU.interests.slice(0,20),kind:SU.role==='nurse'?'Nurse':(SU.role==='cons'||SU.role==='surg')?'Member':'Fellow'},
    verification:{code:(SU.code||'').toUpperCase(),fileName:SU.file||'',file:SU.fileData||''},brief:!!d.get('brief')};
  btnBusy(f,true,'Creating your account…');
  try{ await API.signUp(SU.email.trim().toLowerCase(),SU.pw,SU.name.trim()); SU={step:1,role:'fellow',interests:['ERCP','EUS'],name:'',email:'',country:'Egypt',center:'',file:''}; toast('Account created. Check your inbox to confirm your email.','mail'); }
  catch(e){ LIVE.pending=null; btnBusy(f,false); err('#su-err',authMsg(e)); }
};
function captureSU(){ const f=$('form[data-form="signup"]'); if(!f) return; const d=new FormData(f); ['name','email','country','center'].forEach(k=>{ if(d.has(k)) SU[k]=d.get(k); }); if(d.has('code')) SU.code=String(d.get('code')||'').trim(); }
document.addEventListener('change',e=>{
  const el=e.target; if(el.dataset.change!=='su-file'||!el.files||!el.files[0]) return;
  readVerificationFile(el.files[0]).then(url=>{ SU.fileData=url; }).catch(m=>{ SU.file=''; SU.fileData=''; toast(m,'alert'); refresh(); });
});
function readVerificationFile(file){
  return new Promise((res,rej)=>{
    const r=new FileReader();
    if(/^image\//.test(file.type)){
      r.onload=()=>{ const im=new Image(); im.onload=()=>{ const sc=Math.min(1,1600/Math.max(im.width,im.height)); const c=document.createElement('canvas'); c.width=Math.round(im.width*sc); c.height=Math.round(im.height*sc); c.getContext('2d').drawImage(im,0,0,c.width,c.height); let q=.82, url=c.toDataURL('image/jpeg',q); while(url.length>900000&&q>.4){ q-=.12; url=c.toDataURL('image/jpeg',q); } url.length>900000?rej('That image is too large. Try a smaller photo.'):res(url); }; im.onerror=()=>rej('Could not read that image.'); im.src=r.result; };
    } else if(file.type==='application/pdf'){
      if(file.size>650000) return rej('PDF must be under 650 KB on the free plan. Upload a photo of the letter instead.');
      r.onload=()=>res(r.result);
    } else return rej('Upload a PDF, JPG or PNG.');
    r.onerror=()=>rej('Could not read that file.'); r.readAsDataURL(file);
  });
}
FORMS.forgot=async({f,val,err})=>{
  const em=val('email').toLowerCase();
  if(!/^\S+@\S+\.\S+$/.test(em)) return err('#fg-err','Enter the email you signed up with.','email');
  btnBusy(f,true,'Sending…');
  try{ await API.reset(em); }catch(e){ if(e.code==='auth/invalid-email'){ btnBusy(f,false); return err('#fg-err','That email address is not valid.','email'); } if(e.code==='auth/network-request-failed'){ btnBusy(f,false); return err('#fg-err',authMsg(e)); } }
  FORGOT_SENT=true; refresh(); setTimeout(()=>{ FORGOT_SENT=false; },10000);
};
FORMS.brief=async({val})=>{
  const email=val('email'); if(!/^\S+@\S+\.\S+$/.test(email)){ toast('Enter a valid email.','info'); return; }
  const topics=$$('.modal .chip.on').map(x=>x.dataset.id), freq=$('.modal [data-seg="freq"] .on')?.dataset.id||'weekly', lang=$('.modal [data-seg="lang"] .on')?.dataset.id||'en';
  try{ await API.submit('newsletter',{email,topics,freq,lang,source:'app'}); }catch(e){ return fail(e,'subscribe'); }
  S.nlDone=true; S.nlSub={topics,email}; save(); modalOnClose=null; closeModal(); toast('Subscribed to The Lumen Brief.','mail');
};
FORMS['brief-public']=async({f,val})=>{
  const email=val('email'); if(!/^\S+@\S+\.\S+$/.test(email)){ toast('Enter a valid email address.','info'); f.querySelector('input').classList.add('err'); return; }
  try{ await API.submit('newsletter',{email,topics:[],freq:'weekly',lang:S.lang,source:'home'}); f.reset(); toast('Subscribed. The first issue arrives on Sunday.','mail'); }catch(e){ fail(e,'subscribe'); }
};
FORMS.vqa=async({f,val})=>{ const q=val('q'); if(q.length<3) return; try{ await API.askQA(f.dataset.id,q.slice(0,2000)); f.reset(); toast('Question posted. ROEYA routes it to the faculty.','msg'); }catch(e){ fail(e,'post your question'); } };
FORMS.cmt=async({f,val})=>{ const c=val('c'); if(!c) return; try{ await API.addComment(f.dataset.post,c.slice(0,2000)); f.reset(); }catch(e){ fail(e,'post the comment'); } };
FORMS.post=async({f,val})=>{
  const tx=val('text'); if(tx.length<3){ toast('Write something first.','info'); return; }
  const tag=/^Case:/.test(tx)?'Case':/^Paper:/.test(tx)?'Research':/^Question/.test(tx)?'Question':'Discussion';
  btnBusy(f,true,'Posting…');
  try{ await API.createPost({text:tx.slice(0,5000),tags:[tag]}); FEEDF='All'; f.reset(); toast('Posted to the community.','send'); }catch(e){ fail(e,'post'); }
  btnBusy(f,false);
};
FORMS.msg=async(ctx)=>{
  const id=ctx.f.dataset.id, c=allConvs().find(x=>x.id===id);
  if(!c||!c.live) return _FORMS.msg(ctx);
  const m=ctx.val('m'); if(!m) return; ctx.f.reset();
  try{ await API.sendMessage(id,m.slice(0,2000)); }catch(e){ fail(e,'send the message'); }
};
FORMS.consult=async({d,val})=>{
  keepConsultText(); const sum=val('summary');
  if(CONS.type==='video'&&!CONS.slot){ CONS.err='Choose a time slot.'; CONS.summary=sum; refresh(); return; }
  if(sum.length<20){ CONS.err='Add a short case summary and your question (at least 20 characters).'; CONS.summary=sum; refresh(); return; }
  if(!d.get('consent')){ CONS.err='Confirm that you have removed patient identifiers.'; CONS.summary=sum; refresh(); return; }
  const days=nextDays(5), when=CONS.type==='video'?fmtDate(days[CONS.day])+' · '+CONS.slot:'Reply within 48 hours';
  try{ await API.submit('consults',{exp:CONS.exp,expName:FAC[CONS.exp].name,type:CONS.type,when,summary:sum.slice(0,5000),files:CONS.file||'',status:'requested',name:S.user.name,email:S.user.email}); }
  catch(e){ return fail(e,'send the booking'); }
  S.consults.push({exp:CONS.exp,type:CONS.type,when,summary:sum}); save();
  toast('Request sent. ROEYA will confirm the time with the expert by email.','steth');
  CONS={exp:CONS.exp,type:'video',day:0,slot:null,err:'',file:''}; refresh(); window.scrollTo({top:0,behavior:'smooth'});
};
FORMS.model=async({f,val})=>{
  if(!val('name')||!val('unit')){ toast('Add your name and unit.','info'); return; }
  const kind=f.dataset.kind==='order'?'order':'session';
  try{ await API.submit('requests',{kind,model:val('model'),name:val('name'),unit:val('unit'),qty:val('qty'),country:val('country'),dates:val('dates'),notes:val('notes').slice(0,2000),email:S.user.email}); }catch(e){ return fail(e,'send the request'); }
  closeModal(); toast(kind==='order'?'Order request sent. The ROEYA team will send a quote.':'Session request sent. The ROEYA Training Center will confirm by email.','box');
};
FORMS.talk=async({val})=>{
  if(!val('name')||!/^\S+@\S+\.\S+$/.test(val('email'))){ toast('Add your name and a valid email.','info'); return; }
  if(!S.auth){ closeModal(); toast('Please sign in first, or email ROEYA directly.','info'); return; }
  try{ await API.submit('requests',{kind:'programme',name:val('name'),email:val('email'),org:val('org'),seats:val('seats'),notes:val('msg').slice(0,2000)}); }catch(e){ return fail(e,'send your message'); }
  closeModal(); toast('Thank you. We will contact you within two working days.','mail');
};
async function activateCode(code,quiet){
  code=String(code||'').trim().toUpperCase();
  let c=null; try{ c=await API.checkCode(code); }catch(e){ if(!quiet) fail(e,'check the code'); return false; }
  if(!c) return false;
  try{ await API.submit('passports',{code,course:c.course||''}); }catch(e){ if(!quiet) fail(e,'activate the code'); return false; }
  S.courses=[...(S.courses||[]).filter(x=>x.code!==code),{code,course:c.course||code,pathway:c.pathway||''}];
  if(c.pathway&&PW(c.pathway)) S.enr=[...new Set([...(S.enr||[]),c.pathway])];
  save(); return c;
}
FORMS.passport=async({f,val})=>{
  const c=val('code');
  if(!/^[A-Za-z0-9-]{4,40}$/.test(c)){ $('#pp-err').hidden=false; f.querySelector('input').classList.add('err'); return; }
  btnBusy(f,true,'Checking…');
  const ok=await activateCode(c);
  btnBusy(f,false);
  if(!ok){ const el=$('#pp-err'); el.hidden=false; el.querySelector('span').textContent='That code is not recognised. Check your course confirmation email.'; f.querySelector('input').classList.add('err'); return; }
  closeModal(); toast(`Course Passport ${esc(c.toUpperCase())} activated.${ok.pathway?' The pathway is now in your list.':''}`,'ticket'); refresh();
};
FORMS.profile=async({val})=>{
  const n=val('name').slice(0,120), bio=val('bio').slice(0,1000);
  try{ await API.updateProfile(LIVE.uid,{name:n||S.user.name,bio}); }catch(e){ return fail(e,'update your profile'); }
  S.user.name=n||S.user.name; S.user.first=firstName(S.user.name); S.bio=bio; save(); closeModal(); refresh(); toast('Profile updated.');
};
FORMS['complete-profile']=async({f,d,val})=>{
  const mods=$$('.modal .chip.on').map(x=>x.dataset.id).slice(0,20);
  const data={name:(val('name')||S.user.name).slice(0,120),role:val('role'),country:val('country'),center:val('center').slice(0,160),mods};
  btnBusy(f,true);
  try{ await API.updateProfile(LIVE.uid,data); }catch(e){ btnBusy(f,false); return fail(e,'save your profile'); }
  Object.assign(S.user,{name:data.name,first:firstName(data.name),role:data.role,city:data.country,mods});
  modalOnClose=null; closeModal(); toast('Profile saved. Welcome to Lumen.'); refresh();
};
function completeProfileModal(){
  const roles=Object.values(ROLE_LABEL);
  openModal(`<form data-form="complete-profile">${mh('Complete your profile','So fellows and faculty know who you are.')}<div class="mb">
    <div class="field"><label for="cp-n">Full name</label><input class="input" id="cp-n" name="name" value="${esc(S.user.name)}"></div>
    <div class="grid-2" style="gap:12px"><div class="field"><label for="cp-r">Role</label><select class="select" id="cp-r" name="role">${roles.map(r=>`<option>${r}</option>`).join('')}</select></div>
    <div class="field"><label for="cp-c">Country</label><select class="select" id="cp-c" name="country">${['Egypt','Saudi Arabia','United Arab Emirates','Algeria','Morocco','Nigeria','Kenya','Sudan','Iraq','Jordan','Lebanon','Oman','Other'].map(c=>`<option>${c}</option>`).join('')}</select></div></div>
    <div class="field"><label for="cp-h">Training center</label><input class="input" id="cp-h" name="center" placeholder="Hospital or university"></div>
    <div class="field"><label>Your fields</label><div class="chips">${MODS.map(m=>`<button type="button" class="chip" data-act="chip-toggle" data-id="${esc(m)}">${esc(m)}</button>`).join('')}</div></div></div>
    <div class="mf"><button type="button" class="btn btn-ghost" data-act="close-modal">Later</button><button class="btn btn-primary" type="submit">Save</button></div></form>`);
}

/* ---------- actions ---------- */
const _ACT={...ACT};
ACT.logout=async()=>{ try{ await pushState(); await API.signOut(); toast('Signed out.'); }catch(e){ fail(e,'sign out'); } };
ACT.sso=async()=>{ try{ await API.google(); }catch(e){ if(!/popup-closed-by-user|cancelled-popup-request/.test(e.code||'')) toast(authMsg(e),'alert'); } };
ACT['fill-demo']=()=>{ $('#em').value=LCFG.demoEmail||'test@roeya.com'; $('#pw').value=LCFG.demoPassword||'roeya2026'; $('#login-err').hidden=true; };
ACT.like=(el)=>{ const id=el.dataset.post, p=feedPosts().find(x=>x.id===id)||{id}; API.setLike(id,!isLiked(p)).catch(e=>fail(e,'like the post')); };
ACT.vote=(el)=>{ API.vote(el.dataset.post,+el.dataset.i).catch(e=>fail(e,'vote')); };
ACT['post-del']=(el)=>{ API.deletePost(el.dataset.post).then(()=>{ closeModal(); toast('Post deleted.'); }).catch(e=>fail(e,'delete the post')); };
ACT.ask=(el,id)=>{
  if(LIVE.profiles[id]) return openConv(id);
  if(isDemo()) return _ACT.ask(el,id);
  const q=$('#qa input[name="q"]'); if(q){ q.scrollIntoView({behavior:'smooth',block:'center'}); q.focus(); toast('Ask here. ROEYA routes questions to the faculty.','msg'); }
  else toast('Faculty accounts are being set up. Post your question under any video for now.','info');
};
ACT.connect=(el,id)=>{ if(S.conn.includes(id)) return; S.conn.push(id); save(); toast(`Connected with ${esc(who(id).name)}.`,'users'); refresh(); };
ACT['ev-register']=async(el,id)=>{ const e=EV(id); try{ await API.submit('requests',{kind:'event',event:id,eventName:e.name,name:S.user.name,email:S.user.email}); closeModal(); toast('Registration request sent. The ROEYA team will contact you.','cal'); }catch(err){ fail(err,'send the request'); } };

/* ---------- admin ---------- */
const ADM_TABS=[['overview','Overview'],['members','Members'],['verifications','Verifications'],['consults','Consultations'],['requests','Requests'],['qa','Questions'],['newsletter','Newsletter'],['codes','Course codes'],['content','Feed content']];
const ADM_COLS={members:['users'],verifications:['verifications'],consults:['consults'],requests:['requests'],qa:['qa'],newsletter:['newsletter'],codes:['codes'],overview:['users','verifications','consults','requests','newsletter','qa'],content:[]};
async function adminLoad(force){
  const need=ADM_COLS[LIVE.adm.tab]||[];
  const todo=need.filter(c=>force||!LIVE.adm.data[c]);
  if(!todo.length) return;
  await Promise.all(todo.map(async c=>{ try{ LIVE.adm.data[c]=await API.adminList(c); }catch(e){ console.error(e); LIVE.adm.data[c]=[]; liveError(`Admin: could not load ${c} (${errCode(e)}).`); } }));
  if(CUR==='admin') refresh();
}
const fmtTs=ms=>ms?`${fmtDate(new Date(ms),false)} ${new Date(ms).toTimeString().slice(0,5)}`:'';
const cell=s=>esc(String(s??'')).slice(0,400);
function tbl(heads,rows){ return `<div class="table-wrap"><table class="t"><thead><tr>${heads.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.length?rows.join(''):`<tr><td colspan="${heads.length}" class="muted">Nothing yet.</td></tr>`}</tbody></table></div>`; }
R.admin=()=>{
  if(!isAdmin()) return R.notfound();
  const A=LIVE.adm, D=A.data, loading=(ADM_COLS[A.tab]||[]).some(c=>!D[c]);
  const emails={}; (D.users||[]).forEach(u=>emails[u.id]=u.email);
  const profs=Object.values(LIVE.profiles);
  let body='';
  if(loading) body=`<div class="empty">Loading…</div>`;
  else if(A.tab==='overview'){
    const st=(n,l,tab)=>`<button class="panel stat" style="text-align:start" data-act="adm-tab" data-id="${tab}"><span>${l}</span><b>${n}</b></button>`;
    body=`<div class="grid-4">${st(profs.length,'Members','members')}${st((D.verifications||[]).filter(v=>v.status==='pending').length,'Pending verifications','verifications')}${st((D.consults||[]).filter(c=>c.status==='requested').length,'New consultation requests','consults')}${st((D.requests||[]).length,'Session, order and event requests','requests')}${st((D.newsletter||[]).length,'Newsletter sign-ups','newsletter')}${st((D.qa||[]).length,'Questions under videos','qa')}${st(LIVE.posts.length,'Feed posts','content')}${st(Object.keys(LIVE.likes).length,'Posts with likes','content')}</div>
      <div class="notice info">${ic('info')}<span>Data refreshes when you open a tab. Use Reload for the latest. Everything here is stored in your Firebase project <b>${esc(API.projectId||'')}</b>.</span></div>`;
  }
  else if(A.tab==='members') body=tbl(['Name','Email','Role','Country · center','Fields','Status','Actions'],profs.sort((a,b)=>(b.joined||0)-(a.joined||0)).map(p=>`<tr><td><b>${cell(p.name)}</b><small>Joined ${fmtTs(p.joined)}</small></td><td>${cell(emails[p.id]||'')}</td><td>${cell(p.role)}<small>${cell(p.kind)}</small></td><td>${cell([p.country,p.center].filter(Boolean).join(' · '))}</td><td>${cell((p.mods||[]).join(', '))}</td><td>${p.verified?'<span class="tag ok">Verified</span>':'<span class="tag warn">Not verified</span>'}</td><td style="white-space:nowrap"><button class="btn btn-sm btn-secondary" data-act="adm-verify" data-id="${p.id}" data-v="${p.verified?0:1}">${p.verified?'Unverify':'Verify'}</button> <button class="btn btn-sm btn-ghost" data-act="adm-kind" data-id="${p.id}" data-k="${p.kind==='Expert'?'Fellow':'Expert'}">${p.kind==='Expert'?'Make member':'Make faculty'}</button></td></tr>`));
  else if(A.tab==='verifications') body=tbl(['Date','Member','Role · center','Course code','Document','Status','Actions'],(D.verifications||[]).map(v=>`<tr><td>${fmtTs(v.at)}</td><td><b>${cell(v.name)}</b><small>${cell(v.email)}</small></td><td>${cell(v.role)}<small>${cell([v.center,v.country].filter(Boolean).join(' · '))}</small></td><td>${cell(v.code)}</td><td>${v.file?`<button class="btn btn-sm btn-secondary" data-act="adm-doc" data-id="${v.id}">${ic('eye')}${cell(v.fileName||'Open')}</button>`:'—'}</td><td><span class="tag ${v.status==='approved'?'ok':v.status==='rejected'?'':'warn'}">${cell(v.status)}</span></td><td style="white-space:nowrap"><button class="btn btn-sm btn-primary" data-act="adm-approve" data-id="${v.id}">Approve</button> <button class="btn btn-sm btn-ghost" data-act="adm-reject" data-id="${v.id}">Reject</button></td></tr>`));
  else if(A.tab==='consults') body=tbl(['Date','Member','Expert','Format · time','Case','Status','Actions'],(D.consults||[]).map(c=>`<tr><td>${fmtTs(c.at)}</td><td><b>${cell(c.name)}</b><small>${cell(c.email)}</small></td><td>${cell(c.expName)}</td><td>${c.type==='video'?'Video call':'Written'}<small>${cell(c.when)}</small></td><td style="max-width:320px">${cell(c.summary)}${c.files?`<small>Files: ${cell(c.files)}</small>`:''}</td><td><span class="tag ${c.status==='done'?'ok':c.status==='confirmed'?'brand':'warn'}">${cell(c.status)}</span></td><td style="white-space:nowrap"><button class="btn btn-sm btn-secondary" data-act="adm-cstatus" data-id="${c.id}" data-s="confirmed">Confirm</button> <button class="btn btn-sm btn-ghost" data-act="adm-cstatus" data-id="${c.id}" data-s="done">Done</button></td></tr>`));
  else if(A.tab==='requests') body=tbl(['Date','Type','Name · email','Details','Notes'],(D.requests||[]).map(r=>`<tr><td>${fmtTs(r.at)}</td><td><span class="tag">${cell(r.kind)}</span></td><td><b>${cell(r.name)}</b><small>${cell(r.email)}</small></td><td>${cell([r.model,r.unit,r.org,r.eventName,r.qty&&('Qty '+r.qty),r.seats&&(r.seats+' fellows'),r.country,r.dates].filter(Boolean).join(' · '))}</td><td style="max-width:320px">${cell(r.notes)}</td></tr>`))+`<button class="btn btn-secondary btn-sm" data-act="adm-csv" data-id="requests">${ic('download')}Export CSV</button>`;
  else if(A.tab==='qa') body=tbl(['Date','Video','Member','Question','Actions'],(D.qa||[]).map(q=>`<tr><td>${fmtTs(q.at)}</td><td>${V(q.vid)?`<a href="#v-${q.vid}" style="color:var(--brand-2)">${cell(V(q.vid).t)}</a>`:cell(q.vid)}</td><td>${cell(who(q.by).name)}</td><td style="max-width:380px">${cell(q.text)}</td><td><button class="btn btn-sm btn-ghost" data-act="adm-del" data-col="qa" data-id="${q.id}">Delete</button></td></tr>`));
  else if(A.tab==='newsletter') body=tbl(['Date','Email','Fields','How often','Language','Source'],(D.newsletter||[]).map(n=>`<tr><td>${fmtTs(n.at)}</td><td>${cell(n.email)}</td><td>${cell((n.topics||[]).join(', '))}</td><td>${cell(n.freq)}</td><td>${cell(n.lang)}</td><td>${cell(n.source)}</td></tr>`))+`<button class="btn btn-secondary btn-sm" data-act="adm-csv" data-id="newsletter">${ic('download')}Export CSV</button>`;
  else if(A.tab==='codes') body=`<form data-form="adm-code" class="panel" style="display:grid;gap:12px"><h3>New course code</h3><div class="grid-3" style="gap:12px"><div class="field"><label for="ac-c">Code</label><input class="input" id="ac-c" name="code" placeholder="ERCP4-2026"></div><div class="field"><label for="ac-n">Course name</label><input class="input" id="ac-n" name="course" placeholder="ERCP Training Course — 4th wave"></div><div class="field"><label for="ac-p">Opens pathway</label><select class="select" id="ac-p" name="pathway"><option value="">None</option>${PATHWAYS.map(p=>`<option value="${p.id}">${esc(p.name)}</option>`).join('')}</select></div></div><p class="hint">Give the code to course attendees. Entering it links the course to their account and opens the pathway.</p><button class="btn btn-primary" type="submit" style="justify-self:start">Create code</button></form>`
    +tbl(['Code','Course','Pathway','Created','Actions'],(D.codes||[]).map(c=>`<tr><td class="mono">${cell(c.id)}</td><td>${cell(c.course)}</td><td>${cell(PW(c.pathway)?.name||'—')}</td><td>${fmtTs(c.at)}</td><td><button class="btn btn-sm btn-ghost" data-act="adm-del" data-col="codes" data-id="${c.id}">Delete</button></td></tr>`));
  else if(A.tab==='content') body=`<section class="panel" style="display:grid;gap:12px"><h3>Feed posts</h3><p class="muted">${LIVE.posts.length} posts in the feed, ${LIVE.posts.filter(p=>p.sample).length} marked as sample.</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-primary" data-act="adm-seed">${ic('plus')}Add the starter posts</button><button class="btn btn-secondary" data-act="adm-unsample">${ic('x')}Remove sample posts</button></div>
      <p class="hint">Starter posts are the ROEYA news items from the demo (EGH 2026, the ESGE guideline, the ROEYA ePoster, the simulators review) plus sample posts from fictional people, marked “Sample”. Adding them again overwrites them and resets their likes count only if you delete them first. Sample people, sessions and conversations are switched on or off with <code>showSamples</code> in <code>config.js</code>.</p></section>`;
  return shell('',`${pageHead('Admin','Members, verifications, bookings and requests from your Firebase project.',`<button class="btn btn-secondary" data-act="adm-reload">${ic('rew')}Reload</button>`)}
    <div class="chips scroll">${ADM_TABS.map(x=>`<button class="chip${A.tab===x[0]?' on':''}" data-act="adm-tab" data-id="${x[0]}">${x[1]}</button>`).join('')}</div>${body}`);
};
function csvExport(name,rows){
  if(!rows.length){ toast('Nothing to export.','info'); return; }
  const keys=[...new Set(rows.flatMap(r=>Object.keys(r)))].filter(k=>k!=='file');
  const q=v=>{ v=Array.isArray(v)?v.join('; '):(typeof v==='number'&&v>1e12?new Date(v).toISOString():v); return `"${String(v??'').replace(/"/g,'""')}"`; };
  const csv=[keys.join(','),...rows.map(r=>keys.map(k=>q(r[k])).join(','))].join('\n');
  const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob(['﻿'+csv],{type:'text/csv'})); a.download=`lumen-${name}-${new Date().toISOString().slice(0,10)}.csv`; document.body.appendChild(a); a.click(); setTimeout(()=>{ URL.revokeObjectURL(a.href); a.remove(); },500);
}
Object.assign(ACT,{
  'adm-tab':(el,id)=>{ LIVE.adm.tab=id; refresh(); adminLoad(); },
  'adm-reload':()=>{ adminLoad(true); toast('Reloading…','rew'); },
  'adm-verify':async(el,id)=>{ try{ await API.adminUpdate('profiles',id,{verified:el.dataset.v==='1'}); toast('Member updated.'); }catch(e){ fail(e,'update the member'); } },
  'adm-kind':async(el,id)=>{ try{ await API.adminUpdate('profiles',id,{kind:el.dataset.k}); toast(el.dataset.k==='Expert'?'Marked as faculty.':'Marked as member.'); }catch(e){ fail(e,'update the member'); } },
  'adm-approve':async(el,id)=>{ try{ await API.adminUpdate('verifications',id,{status:'approved'}); await API.adminUpdate('profiles',id,{verified:true}); const v=(LIVE.adm.data.verifications||[]).find(x=>x.id===id); if(v) v.status='approved'; toast('Verified.'); refresh(); }catch(e){ fail(e,'approve'); } },
  'adm-reject':async(el,id)=>{ try{ await API.adminUpdate('verifications',id,{status:'rejected'}); const v=(LIVE.adm.data.verifications||[]).find(x=>x.id===id); if(v) v.status='rejected'; toast('Marked as rejected.','info'); refresh(); }catch(e){ fail(e,'reject'); } },
  'adm-doc':(el,id)=>{ const v=(LIVE.adm.data.verifications||[]).find(x=>x.id===id); if(!v||!v.file) return; try{ const [h,b]=v.file.split(','); const mime=h.slice(5,h.indexOf(';')); const bin=atob(b), arr=new Uint8Array(bin.length); for(let i=0;i<bin.length;i++) arr[i]=bin.charCodeAt(i); const url=URL.createObjectURL(new Blob([arr],{type:mime})); if(mime.startsWith('image/')) openModal(`${mh(esc(v.fileName||'Document'),esc(v.name||''))}<div class="mb"><img src="${url}" alt="" style="width:100%;border-radius:8px"></div>`,{wide:true}); else window.open(url,'_blank','noopener'); }catch(e){ fail(e,'open the document'); } },
  'adm-cstatus':async(el,id)=>{ try{ await API.adminUpdate('consults',id,{status:el.dataset.s}); const c=(LIVE.adm.data.consults||[]).find(x=>x.id===id); if(c) c.status=el.dataset.s; refresh(); toast('Status updated.'); }catch(e){ fail(e,'update the booking'); } },
  'adm-del':async(el,id)=>{ const col=el.dataset.col; try{ await API.adminDelete(col,id); LIVE.adm.data[col]=(LIVE.adm.data[col]||[]).filter(x=>x.id!==id); refresh(); toast('Deleted.'); }catch(e){ fail(e,'delete'); } },
  'adm-csv':(el,id)=>csvExport(id,LIVE.adm.data[id]||[]),
  'adm-seed':async()=>{ const list=POSTS.map(p=>({...p,sample:!POST_AUTHORS[p.by]})); try{ await API.seedPosts(list); toast(`${list.length} starter posts added.`,'feed'); }catch(e){ fail(e,'add the starter posts'); } },
  'adm-unsample':async()=>{ try{ const n=await API.removeSamplePosts(); toast(`${n} sample post${n===1?'':'s'} removed.`); }catch(e){ fail(e,'remove sample posts'); } },
});
FORMS['adm-code']=async({f,val})=>{
  const code=val('code').toUpperCase();
  if(!/^[A-Z0-9-]{4,40}$/.test(code)){ toast('Use 4–40 letters, numbers or dashes.','info'); return; }
  try{ await API.adminSet('codes',code,{course:val('course').slice(0,160),pathway:val('pathway')}); f.reset(); toast(`Code ${code} created.`,'ticket'); adminLoad(true); }catch(e){ fail(e,'create the code'); }
};

liveBoot();
