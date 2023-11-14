import { NextResponse } from 'next/server';
import OpenAI from "openai";

const model = `TASK ANALYSIS 																																										
NTP / RRL	NTP / RRL / CPM	NTP / RRL / CPM	NTP / RRL	NTP / RRL / CPM	NTP / RRL / CPM	NTP / RRL / CPM	NTP / RRL	NTP / RRL	NTP / RRL	NTP / RRL / CPM	NTP / RRL / CPM	NTP / RRL / CPM	NTP / RRL / CPM	NTP / RRL / CPM	NTP / RRL / CPM	NTP / RRL	NTP / RRL	NTP / RRL / CPM	NTP / RRL / CPM	NTP / RRL / CPM	NTP / RRL / CPM	NTP / RRL / CPM	NTP / RRL / CPM	NTP / RRL	NTP / RRL / CPM	NTP / RRL	NTP / RRL / CPM	NTP / RRL	NTP / RRL / CPM	NTP / RRL / CPM	NTP / RRL / CPM	NTP / RRL / CPM	NTP / RRL	NTP / RRL / CPM	NTP / RRL / CPM	NTP / RRL / CPM	NTP / RRL / CPM	NTP / RRL	NTP / RRL	NTP / RRL	NTP / RRL	NTP / RRL
"DATA Entry MUST follow the CPM JDTA data entry spreadsheet format:
Data separated by a comma is recognized by the database as a continuation of the data statement.
Data separated by a semicolon is recognized as a new/separate data entry in the data field."	Analysis UID	Type	Skill Text	Additional Notes	Proficiency Level	SPL Definition	OCCSTD Task ID	"Career Progression Timing
"	Career Progression Timing (etc.)	Task is performed during SEA1 (Sea Shore Flow Tour 1)	Task Level	Status of Training	Type of Training	Object(s)	Condition	Standard	Starting Cues	Ending Cues	Task Source	Knowledge	Skills	Abilities	Tools	Resources	Location	Safety Hazard Severity	What is the Safety Hazard when performing the task?	Criticality of Performance	Why is task critical?	Task Delay Tolerance	Frequency of Performance	Probability of Inadequate Performance Due to Training	Difficulty of Performance	Why is task difficult?	Task Learning Difficulty	Percent Performing 	Percentage of Time Spent on Performance within the Job	Immediacy of Performance	T/NT Recommendation (DIF Model)	SME Train/No Train Recommendation	Rationale for SME Train/No Train Recommendation	Stakeholder Train/No Train Decision	Rationale for Stakeholder Train/No Train Decision
"Job Aid

NOTES: 
1. If a JDTA has been provided as validated/current, manually copy and paste the appropriate Columns of data from the provided JDTA into this Excel spreadsheet.  Collect the remaining data.    
2. If no JDTA exists, develop the JDTA using this Excel spreadsheet's drop downs, entering text, etc."	"Enter Text
Analysis Unique Identifier (UID)
Preface with Rating 

Example: SW-TA-1.1.1"	"Select from Drop Down or Manually Copy and Paste from provided JDTA 
JDTA Type
A JOB is made up of duties and tasks. A job can be determined from either a top-down approach or a bottom-up approach where the tasks and duties are analyzed to determine what the job is. A listing of Enlisted Occupational Jobs is contained within Volume I of Navy Personnel (NAVPERS) 18068, which may provide some insight into job selection criteria.
For Aviation - Job
1. Navy Enlisted Classification (NEC).
2. Designator (Naval Officers).
3. Navy Rating and NEC Title (NEC I40A - Aircraft Instrument Intermediate Maintenance Activity Technician).

A DUTY is a major part of a job. It occupies a major part of the work time and occurs often in the work cycle. A cluster of duties constitutes a job. A duty involves a group of closely related tasks. 
For Aviation - Duty
1. Set of closely related tasks within a given job.
2. Requires a minimum of two tasks.
3. Must be performed frequently and occupy a significant amount of time.

A TASK is a major part of a duty. Clusters of tasks make up a duty. It is performed in a relatively short period of time and is observable and measurable. Each task is an independent part of the job; it is also independent of other tasks. Tasks are NOT components of a procedure.

For Aviation – Task
This skill level is the heart of the JDTA, requires in-depth, accurate information, and is directly linked with training content development.
1. Single unit of specific work behavior, with clear beginning and end points.
2. Directly observable and measurable.

A SUB-TASK is major part of a task. A sub-task may be made up of a series of steps performed under the standards and conditions of a task. A sub-task has a logical relationship with a task, duty, job, and occupation. A sub-task may be comprised of one or more steps and fills a portion of the immediate purpose within a task. "	"Enter Text or Manually Copy and Paste from provided JDTA 
Skill Text
Verb + Description for Duties, Tasks, Sub Tasks, Steps
What observable action is performed

Example: Power on Link 16
For Aviation – Skill Text
DUTY VERBS: Coordinate; Direct; Maintain; Manage; Operate; Perform; Supervise
MAINTENANCE VERBS: Inspect; Clean; Remove; Install; Load; Assemble; Dissemble; Test; Troubleshoot; Calibrate; Repair; Adjust, Test; Configure; Perform; Operate 
Service*
(*) The use of the verb ""Service"" will be acceptable provided it meets the following: it must state the specific component being serviced and include the ""servicing"" material being used e.g.  Service the Main Landing Gear Strut with Nitrogen""; ""Service Main Gearbox with oil"" etc. 
Operate
NON-MAINTENANCE TASK VERBS: Analyze; Generate; Create; Modify; Compile; Calculate; Compare; Schedule; Document; Monitor; Brief; Assign; Build; Backup; Restore; Validate; Annotate; Release "	"Enter Text
Additional Notes
This Column is available to take notes during development and reviews.
IMPORTANT: When entering notes related to a specific field, Prefix the note with the name of the field."	"Select from Drop Down or Manually Copy and Paste from provided JDTA 
Proficiency Level
Do not tie to pay grades but to level of knowledge/skill required to perform task 
Note that the Level of Supervision identified by the Skill Proficiency Level (SPL) should be listed as a Condition for that item. 

Drop Down
SPL1 = With supervision/apprentice/imitation
SPL2 = With minimal supervision/journeyman/precision
SPL3 = No supervision/master/naturalization
"	"Enter Text or Manually Copy and Paste from provided JDTA 
SPL Definition
If further explanation of the Proficiency Level is needed, input comments.

"	"Enter Text or Manually Copy and Paste from provided JDTA 
OCCSTD Task ID
Example: ARC WELDING AND CUTTING: Conduct hard facing operations, Core task type
"	"Select from Drop Down or Manually Copy and Paste from provided JDTA 
Career Progression Timing 
Is this task expected to be performed during the first 12 months of the first assignment? 

Drop Down
Yes
No
"	"Select from Drop Down or Manually Copy and Paste from provided JDTA 
Career Progression Timing (etc.)
If Column J is no, which Year/Quarter is the task expected to be performed? 

Drop Down
Y2Q1
Y2Q2
Y2Q3
Y2Q4
Y3Q1
Y3Q2
Y3Q3
Y3Q4
Y4Q1
Y4Q2
Y4Q3
Y4Q4
Y5Q1
Y5Q2
Y5Q3
Y5Q4
Y6Q1
Y6Q2
Y6Q3
Y6Q4"	"Select from Drop Down or Manually Copy and Paste from provided JDTA 
When the Task is to be performed during SEA1 Is (Sea Shore Flow Tour 1) this task expected to be performed during the first sea tour?

Drop Down
Yes
No"	"Select from Drop Down or Manually Copy and Paste from provided JDTA 
Task Level
If Multiple apply choose the one where it is performed the majority or if equal you can select 4 - N/A. If you use 4 - N/A ensure that the JDTA Program Manager is aware of this selection.

Drop Down
1. Organizational -– Refers to active duty Navy personnel onboard ship who normally performs the tasks.
2. Intermediate – Refers to active duty Navy personnel not onboard ship who normally perform the tasks (e.g., Ships Intermediate Maintenance Activity (SIMA) personnel).
3. Depot – Refers to non-active-duty Navy personnel who normally perform the tasks (e.g., contractor or shipyard personnel).
4. N/A
"	"Select from Drop Down or Manually Copy and Paste from provided JDTA 
Status of Training
Does the current training fully address the task?
Drop Down
1. Currently Being Trained – refers to a task that is currently being taught.
2. Not Being Trained – refers to a task that is not currently being taught.
3. Not Fully Supported through Current Training – refers to a task that is being taught, but does not support the training to its full intent, and training will need to be modified to satisfy the requirement.
"	"Select from Drop Down or Enter Text; Use semicolons to separate multiple entries or Manually Copy and Paste from provided JDTA
Type of Training
This field is the Fleet SME’s RECOMMENDATION as to type of training desired.  It may NOT reflect the actual training being provided.
For United States Marine Corps (USMC) Training and Readiness (T&R), currently use ""other"" if desired.  Do NOT enter T&R as the database will not accept it as a valid entry.  A request has been submitted to add T&R as an option choice.  
Multiple entries separated by a semi-colon.

Drop Down
Formal – provided training in a classroom setting or lab environment.
Personal Qualifications System (PQS) – a qualification system for officers and enlisted personnel where certification of a minimum level of competency is required prior to qualifying to perform specific duties.
Job Qualification Requirement (JQR) – a qualification system for job specific requirements that requires signatures where certification of a minimum level of competency is required prior to qualifying to perform a specific job.
Recruit Training Management (RTM) – an automated information system specifically designed to encompass the unique functionality required to manage Navy recruits.
On-the-Job Training (OJT) – provided hands-on training on a given job.
Other – online, correspondence, and/or Navy Knowledge Online(NKO) courses.

"	"Select from Drop Down or Enter Text; Use semicolons to separate multiple entries or Manually Copy and Paste from provided JDTA
Object(s)
There are eight categories that can be entered in this column, and multiple entries for the same categories. Multiple entries separated by a semi-colon.
Example: ""Platform: P-8A; System: Voice Recorder System; Environment: Ashore”

Drop Down
Platform (Mandatory for all maintenance tasks)
Environment Ashore and/or Afloat (as applicable)
System (Mandatory for non-maintenance tasks, e.g., Air Traffic Control (AC) or Aerographer's Mates (AG)
Subsystem (as applicable)
Component (as applicable)
Tool (as applicable) 
Non-equipment (optional)
"	"Enter Text; Use semicolons to separate multiple entries or Manually Copy and Paste from provided JDTA
CONDITION 
Statement sets the stage for performing the task and also supports analyzing the task. Conditions refer to the job conditions that significantly influence job performance. Those significant on-the-job conditions provide the basis for determining the necessary training conditions.
A Condition is the situation under which the individual is expected to demonstrate the behavior. 
Type and amount of supervision and assistance normally available during task performance (With supervision, With minimal supervision, or No supervision) tied to SPL.
Circumstances or environment in which the task is to be performed (ex: during normal operations, while underway, at night in total darkness, given the applicable technical manual, or while wearing Personal Protective Equipment (PPE))

Task Conditions examples:
• Given the technical manual...
• Using a calculator and worksheet...
• Using a multimeter and schematic diagram...
• Without reference...
• Under conditions of total darkness…
• With supervision; Given applicable tools; Observing all pertinent safety precautions; while wearing the appropriate Personal Protective Equipment (PPE)
"	"Enter Text; Use semicolons to separate multiple entries or Manually Copy and Paste from provided JDTA
STANDARD
Standard states the performance criteria for the task. Task standards describe the minimum acceptable level of task performance to include accuracy, speed, quantity, and quality that will ensure successful accomplishment of the task.
Standards should be objective, observable, and measurable, and should relate to the task under study.
A Task Standard states the performance criteria for the task. Task standards describe the minimum acceptable level of task performance to include accuracy, speed, quantity, and quality that will ensure successful accomplishment of the task. Standards should be objective, observable, and measurable, and should relate to the task under study (Time, Rate, Speed, Quality, Quantity, % accuracy).
NOTE: The standard is located in the Task Source. However, since it is subject to frequent changes, Center for Naval Aviation Technical Training (CNATT) has determined not to list the actual standard, but to utilize a generic statement. Aviation - Task standards are located in the Task Source.  Since the Task Source is subject to frequent changes, CNATT does not list the actual standard but utilizes a generic statement:  “IAW applicable technical manuals and publications”

Standards examples:
• Completeness - will comply with local instructions
• Accuracy requirement - compute the exact hours of training
• Time constraints – within 10 minutes
• Performance rates - at a minimum of twice a day
• Qualitative requirements - to flow smoothly
• IAW applicable technical manuals and publications
"	"Enter Text
Starting Cues
What is the action or event that creates the necessity for the task to be performed? 

Examples:
Upon entering 100 miles to shore...
Upon loss of power...
When directed...
Completion of flight quarters...
After maintenance availability...
Prior to pulling into port..."	"Enter Text
Ending Cues
What is the action or event that notifies the performer that the task has ended?  

Examples:
After connectivity has been confirmed...
After QA inspection...
Once lines are secure...
When directed...
After flames are extinguished…"	"Enter Text; Use semicolons to separate multiple entries or Manually Copy and Paste from provided JDTA
Task Source
List the authoritative publication/document that defines the requirement for the task. Use full publication nomenclature and title. The  Naval Aviation Maintenance Program (NAMP) should not be the source for maintenance actions. User prepopulates Government Furnished Information (GFI) source of task. 

Examples 
• Applicable, technical manuals, publications, and references; Command Policies, Local Instructions; NAVSEA OP-5 Vol. 1, Ammunition and Explosives Safety Ashore
• NAVAIR A1-P8AAA-MAB-000, P-8A Interactive Electronic Technical Manual (IETM)
"	"Select from Drop Down or Enter Text; Use semicolons to separate multiple entries or Manually Copy and Paste from provided JDTA
Knowledge 
Knowledge is the principles and facts needed to perform a task or function.
Knowledge items should be as generic as possible (e.g., Administration and Management, Computers and Electronics, Mechanical, etc.).  Specificity will occur during curriculum development.
Information required for the student to develop the skills and attitudes for the effective accomplishment of a job, duty, task, and subtask.  Knowledge corresponds to the “cognitive domain” of learning. 
Data SHALL be separated by a semicolon.

Example: Aircraft layout; signal flow; system fundamentals; system interface; location; system responses; system failure notifications 

Drop Down
See Dropdown for items

"	"Select from Drop Down or Enter Text; Use semicolons to separate multiple entries or Manually Copy and Paste from provided JDTA
Skills 
Skills are the proficiencies developed through training or experience required to perform a task or function.  A skill is something that is learned.
Occupational Standards (OCCSTD) provides two different “Skills” for each Task. Skills identified in the OCCSTDs at a minimum should be used in this column; add additional Skills as applicable.
The ability to perform an activity that contributes to the effective performance of a task.  Skills also describe behaviors associated with the “psychomotor and cognitive domains” of learning.
• Developed capabilities that facilitate learning or the more rapid acquisition of knowledge.
• Must be pertinent to the task being performed.
• Should be based on OCCSTDs.
• May include additional skills as required.

Example: Problem solving; oral communication; deductive reasoning; MS office suite; dexterity; visual acuity; brevity; error avoidance; recall; pronunciation; averages; conversion; measuring; subtraction; public speaking 

Drop Down
See Dropdown for items
"	"Select from Drop Down or Enter Text; Use semicolons to separate multiple entries or Manually Copy and Paste from provided JDTA
Abilities 
Abilities are innate to the individual needed to perform a task or function. The natural tendency to perform tasks successfully or well.
Occupational Standards (OCCSTD) provides two different “Abilities” for each Task. Skills identified in the OCCSTDs at a minimum should be used in this column; add additional Abilities as applicable.
• Individual attributes that influence performance (i.e., cognitive, physical, psychomotor, and sensory)
• Must be pertinent to the task being performed
• Should be based on OCCSTDs
• May include additional abilities as required

Example: Flexibility; communications; teamwork; weight lifting requirement; height; weight; second language; vision; hearing; color blindness; security clearance; swim test; pushups; situps; run; pullups 

Drop Down
See Dropdown for items

"	"Select from Drop Down or Enter Text; Use semicolons to separate multiple entries or Manually Copy and Paste from provided JDTA
Tools
List only tools specifically used in performance of the Task; this could include items like computer software.
Use “Common Hand Tools” instead of each tool (i.e. screwdriver, wrench, hammer, etc.).
Use “None Required”, when no tools are listed.
Tools, software, equipment, PPE, etc. required to perform task.

Example: gloves; hearing protection; helmet; wrench; multimeter; safety line; life vest; steel toe boots; crane; dolly; air compressor

Drop Down
See Dropdown for items
"	"Select from Drop Down or Enter Text; Use semicolons to separate multiple entries or Manually Copy and Paste from provided JDTA
Resources
List those items that provide information required to perform the Task/Subtask.  Normally, at a minimum, the Task Source data would be listed here.
Information sources that can include technical manuals, publications, checklists, job aids, etc. in addition to Standard.
The informational source or reference material used to locate or house information about processes (i.e., manuals, publications, reports, forms, blueprints, plans, etc.).
Are used to locate information required to know how to perform the task.
When associated with a specific platform, resources shall correlate to the specific Type, Model, and/or Series (T/M/S).
Applicable technical manuals, publications, and documents.
Publications should start with Instruction/Order number followed by its title, e.g., NAVAIR 00-B0T-114, NATOPS Air Traffic Control Manual.
Use (Series) for all manual/publication-type directives with alphabetic suffixes, e.g., COMNAVAIRFORINST 4790.2 (Series), Naval Aviation Maintenance Program.

Examples: 
• SOPs; job aids; technical manuals; MRCs; IETMs; CSOSS; EOSS; Air Diving Chart 
• DMC-GAASIB0-00-71-11-02-00AAA-720A-A, LOWER ENGINE COWL - INSTALL PROCEDURE

Drop Down
See Dropdown for items

"	"Select from Drop Down or Enter Text; Use semicolons to separate multiple entries or Manually Copy and Paste from provided JDTA
Location 
Where task is performed.

Drop Down
Afloat
Ashore
Aircraft
CATCC
Galley
CIC
Flight Deck
Squadron Office
"	"Select from Drop Down or Manually Copy and Paste from provided JDTA
Safety Hazard Severity 
A qualitative measure of the potential consequences resulting from item failure. A qualitative measure of the potential consequences resulting from failure to observe proper safety procedures. Severity classification categories are defined as follows:

Drop Down
1. Minor. A failure not serious enough to cause injury, property damage, or system damage but will result in unscheduled maintenance or repair.
2. Marginal. A failure that may cause minor injury, minor property damage, or minor system damage will result in delay or loss of availability or mission degradation.
3. Critical. A failure that may cause severe injury, major property damage, or major system damage will result in mission loss.
4. Catastrophic. A failure that may cause death or system loss (e.g., aircraft, tank, missile, ship, etc.). 
"	"Enter Text; Use semicolons to separate multiple entries or Manually Copy and Paste from provided JDTA
What is the Safety Hazard when performing the task?

Examples:
Arms, Ammunition, and Explosives (AA&E)
Burn/Heat Hazard (includes sun exposure)
Chemical Hazard (e.g., Lithium or Battery Acid)
Crush Hazard
Damage to Ship or Equipment
Death or Serious Injury
Dehydration
Electrical Hazard
HAZMAT
HAZMAT (Oleoresin Capsicum [OC])
HAZMAT (Hearing/Eye Protection)
HAZMAT (Cleaner Lubricant and Preservative [CLP])
High Pressure (HP) Air
Live Ammunition (Presence of…, Live Fire Weapons)
Negligent Discharge
Range Safety
Stress
Universal Gun Safety Rules
Vision/Eye Hazard (e.g., range finding laser)
Weapons Handling"	"Select from Drop Down or Manually Copy and Paste from provided JDTA
Criticality of Performance points to the need for selecting tasks for training that are essential to job performance, when required, even though the tasks may not be performed frequently. Criticality is a measure of how essential a task is to job performance. The consequences of inadequate performance on certain tasks could result in injury to personnel, loss of life, or damage to equipment. Inadequate performance could have a serious impact on the mission, the operation, the product, the equipment, or the operator. 

For example, the probable consequences of inadequate performance of such combat tasks as ""Identifying enemy aircraft"" could be loss of life and equipment. Another example, the probable criticality of performance of the task ""Write trip report"" is negligible. If this task were selected for training, it would be on the basis of factors other than probable criticality of performance. To obtain data on this criterion, individuals who are familiar with the job are asked to rate probable consequences of inadequate task performance according to the categories listed below:

Drop Down
1. Minor. The consequence of inadequate task performance results in no injury to personnel or damage to equipment.
2. Marginal. The consequence of inadequate task performance results in non-serious personnel injury or damage to equipment.
3. Critical. The consequence of inadequate task performance results in serious or life threatening injury to personnel, or impedes the ability to perform a mission.
4. Catastrophic. The consequence of inadequate task performance results in death or being unable to carry out a mission. 
"	"Enter Text; Use semicolons to separate multiple entries 
Why is this task critical?  
Add data so that anyone can understand the critical nature."	"Select from Drop Down or Manually Copy and Paste from provided JDTA
Task Delay Tolerance 
A measure of how much time can elapse between the time that the need for task performance becomes evident and the time that the actual performance must begin. There are some tasks encountered by job incumbents, as part of their normal job, in which no delay of task performance can be tolerated. The job incumbent must be capable of performing the task, without taking time to read how the task is done or finding someone to provide advice. For other tasks, a minor delay might be acceptable, or even mandatory, while the job incumbent gets advice, checks technical orders, regulations, etc. For some tasks, there may be time to assemble a group of experts to confer with before proceeding.
Urgency in completing a task.

Some examples of task delay tolerance are as follows:
a. Tasks determined to have a low delay tolerance should be given relatively high priority for selection for training. The following are examples of low delay tolerance tasks requiring immediate performance:
(1) Use artificial respiration to restore the breathing of an accident victim.
(2) Pull ripcord of emergency parachute if main parachute fails.
(3) Extinguish fire in aircraft engine during startup on flight line.

b. A high delay tolerance does not exclude a task from training, but indicates that other factors will be more of a basis for acceptance or rejection. To obtain data on this criterion, individuals who are familiar with the job are asked to rate the amount of delay that can be tolerated before performance begins. Examples of tasks having a higher delay tolerance, thereby permitting delay in performance, would include:
(1) Review books for unit library.
(2) Refill fire extinguisher after use.
(3) Write trip report.

99.9 % of maintenance Tasks SHOULD be “2 – High delay tolerance""

Drop Down
1. Low delay tolerance - Immediate priority, e.g.,  ""Fighting a fire, Extinguishing a Class D fire, Performing CPR""
2. High delay tolerance - Routine tasks, Ability to delay, e.g., ""Write trip report, Conduct Technical Directives (TD) self-audits"" 
"	"Select from Drop Down or Manually Copy and Paste from provided JDTA
Frequency of Performance
This is a measure of how often the task is performed.  While the probable consequences of inadequate performance of a particular task are serious and the task delay tolerance is low, the task may still rate low for training priority if it is rarely performed. Select the closest frequency based on an average. A practical way to collect frequency of performance data on tasks is to rate their frequency of performance on a scale such as the following:

Drop Down
1. At least annually.
2. At least once every 6 months.
3. At least monthly, but less than twice per month.
4. Twice per week or more.
"	"Select from Drop Down or Manually Copy and Paste from provided JDTA
Probability of Inadequate Performance Due to Training 
This is a measure of how often a task is performed in a non-acceptable manner. The criterion for probability of inadequate performance is used to ensure that training is given to those essential tasks that job incumbents frequently perform poorly. By recording the judgments of knowledgeable personnel regarding the probability of deficient performance, a list of these poorly performed tasks can be produced.  Training of these tasks, regardless of their criticality, must be given serious consideration. For example, if equipment downtime is often caused by faulty soldering, this skill may require additional emphasis in a list of tasks selected for training maintenance personnel. Another example, if widespread theft of items guarded by security personnel is a problem, the tasks of guard packages, materials, and property and ""prepare physical security plans"" may require additional emphasis. To obtain data on the probability of inadequate performance, supervisors of job incumbents may be asked to rate each task as to how often the task is performed in a nonacceptable manner according to the scale below:

Drop Down
1. Never performed correctly.
2. Less often than other tasks.
3. About as often as other tasks.
4. More often than other tasks. 
"	"Select from Drop Down or Manually Copy and Paste from provided JDTA
Difficulty of Performance of a task refers to the time, effort, and assistance required to achieve performance proficiency. How long it takes to learn to perform a task proficiently.  Select the average time it takes to learn the task. When measuring the difficulty of performance the following criteria is used:

Drop Down
1. No training required.
2. Task requires 1 to 3 days to learn to perform.
3. Task may be learned in 1 to 2 weeks to perform.
4. Task may require up to 1 month or more to learn to perform.
"	"Enter Text; Use semicolons to separate multiple entries 
Why is task difficult?
Explain so anyone reading this will understand."	"Select from Drop Down or Manually Copy and Paste from provided JDTA
Task Learning Difficulty
Some tasks encountered in each job are so easy or so familiar that they can be readily learned on the job without formal training. At the other extreme, some tasks are so complicated that a job incumbent can perform them adequately only after lengthy, formal training. Other tasks lie somewhere in between these two extremes and require different levels of training.
a. Tasks easy enough to be learned on the job without training might be:
(1) Sweep floors.
(2) Collect food trays from patients in hospital wards.
(3) Distribute unclassified correspondence in an office.

b. Tasks that can require lengthy, formal training might be:
(1) Diagnose malfunction in an airborne radar weapons system.
(2) Defuse unexploded enemy bombs.
(3) Identify parasites in clinical specimens.

Task learning difficulty scale. To obtain data on the task learning difficulty, job incumbents or others may be asked to rate tasks they perform as to the training time required to achieve proficiency, or to the difficulty of learning the task on the job without formal training.  The following rating scale may be used:

Drop Down
1. No training required.
2. Task requires 1 to 3 days to learn.
3. Task may be learned in 1 to 2 weeks.
4. Task may require up to 1 month or more to learn.
"	"Select from Drop Down or Manually Copy and Paste from provided JDTA
Percent Performing
This criterion, the percentage of job incumbents who perform the task, points to the need for training tasks that are most often performed on the job. For example: One task for a weather technician might be ""Answer telephone inquiries about the weather."" If you found that 96 percent of all weather technicians performed this task, the implications for training would be different than if you found that only 10 percent performed it.  In the above example, if only 10 percent of job incumbents perform the task, there is a strong probability that training resources would be wasted if all weather technicians were trained to perform the task. Gathering this data is as simple as asking the question ""Do you perform this task?"" The following rating scale might be used:

Drop Down
a. 0 to 24% of the personnel perform this task.
b. 25 to 49% of the personnel perform this task.
c. 50 to 74% of the personnel perform this task.
d. 75 to 100% of the personnel perform this task.
"	"Select from Drop Down or Manually Copy and Paste from provided JDTA
Percentage of Time Spent on Performance within the Job
The percentage of time spent performing a task is a criterion that points to a need for providing training to assist job incumbents in efficient performance of those tasks on which they spend the most time. Selection of tasks for training based on this criterion offers chances for high payoff in terms of return on training dollars expended. To obtain data for determining the percentage of time spent performing the tasks in a job, inputs are required from a large number of job incumbents. Usually they are not asked to state the percentage of their time spent on each task because such a question would be very difficult to answer. Instead, they are usually asked to rate each task as to the amount of time spent performing it as compared to their other tasks. For example, ""Rate the relative amount of time spent performing each task."" Relative time spent means the total time spent performing the task compared with the time spent on each of the other tasks. The following rating scale might be used:

Drop Down
a. Task is not performed.
b. Less time spent on this task than most other tasks.
c. Same amount of time spent on this task as most others.
d. More time spent on this task than most others.
"	"Select from Drop Down or Manually Copy and Paste from provided JDTA
Immediacy of Performance
Immediacy of performance refers to the time interval between completion of training and performance of the task on the job and has some significance in selecting tasks for training. A factor for selecting tasks for training is whether or not there is a high probability of the graduate encountering the task on the job fairly soon after completing training. ""Fairly soon"" means, in this context, that tasks encountered within the first year after training would, everything else being equal, be weighed more heavily for selection than those not encountered until one to two years later. Consider also the predicted or measured amount of decay of the skill that will take place during the time interval. To obtain data on this criterion, job incumbents and others might be asked to rate the time between job entry and task performance on a scale such as the following:

Drop Down
a. Task first performed within 2 to 4 years after assignment.
b. Task first performed within 1 to 2 years after assignment.
c. Task first performed within 6 months after assignment.
d. Task performed during first 3 months after assignment. 

"	"Drag-fill the formula down from row 7 for all data rows 
Auto-Populated with formula
Train/No Train (T/NT) Recommendation (Difficulty Importance Frequency [DIF] Model)
Drag-fill the formula down from row 7 for all data rows
This is the recommendation for training using the DIF model to interpret the Difficulty of Performance, Criticality of Performance, and Frequency of Performance for the task. It is important to note that the algorithms used to analyze these attributes do not provide absolute answers. The analyst must also use professional judgment and expertise to validate the results provided by these algorithms. But the algorithms do provide a basis on which to make decisions and provide recommendations.
"	"Select from Drop Down 
SME Train/No Train Recommendation for the task from:

Train
OJT
Performance support
No Train"	"Enter Text; Use semicolons to separate multiple entries 
Rationale for SME Train/No Train Recommendation

If needed, explain why the SMEs made their recommendation.
For example, the SMEs may recommend that an LO like ""Don PPE"" should be TRAIN due to safety considerations, even though the DIF model might have recommended NO TRAIN. "	"Select from Drop Down 
Stakeholder Train/No Train Decision

Drop Down
Train
OJT
Performance support
No Train
"	"Enter Text; Use semicolons to separate multiple entries 
Rationale for Stakeholder Train/No Train Decision

If needed, explain why the Stakeholders made their decision. 
For example, the Stakeholders may decide an LO on how to install a piece of equipment might be NO TRAIN because the equipment is being phased out."`

const defs = `Yes_No	Type	Proficiency_Level	Career_Progression_Timing	Task_Level	Status_of_Training	Type_of_Training	Objects	Knowledge	Skills	Abilities	Tools_Equipment	Resources	Locations	Safety_Hazard_Severity	Criticality_of_Performance	Task_Delay_Tolerance	Frequency_of_Performance	Probability_of_Inadequate_Performance_Due_to_Training	Difficulty_of_Performance	Task_Learning_Difficulty	Percent_Performing_across_Rating	Percentage_of_Time_Spent_on_Performance_within_the_job	Immediacy_of_Performance	Final_Train_No_Train_Decision	
																									
Yes	Occupation	SPL1	Y2Q1	1 - Organizational	1 - Currently Being Trained	Formal	ALL NAVAL AIRCRAFT	Administration and Management	Active Learning 	Finger Dexterity	Calculator	All Weapons Information System (AWIS)		1 - Minor	1 - Minor	1 - Low delay tolerance	1 - At least annually	1 - Never performed correctly	1 - No training required	1 - No training is required	1 - 0 to 24% of the personnel perform this task	1 - Task is not performed	1 - Task first performed within 2 to 4 years after assignment	Train	
No	Job	SPL2	Y2Q2	2 - Intermediate	2 - Not Being Trained	PQS	CVN	Applicable Publications	Averages 	Flexibility	Common Hand Tools	Applicable ARM/DEARM Checklist	Afloat	2 - Marginal	2 - Marginal	2 - High delay tolerance	2 - At least once every 6 months	2 - Less often than other tasks	2 - Task requires 1 to 3 days to learn	2 - Task requires 1 to 3 days to learn	2 - 25 to 49% of the personnel perform this task	2 - Less time spent on this task than most other tasks	2 - Task first performed within 1 to 2 years after assignment	OJT	
	Duty	SPL3	Y2Q3	3 - Depot	3 - Not fully supported through current training	JQR	Platform: AIMD	Applicable Technical Manuals, Publications, Instructions, SOPs	Brevity	Flexibility of Closure	Ladders	Applicable Maintenance Technical Manuals and Directives	Aircraft	3 - Critical	3 - Critical		3 - At least monthly, but less than twice per week	3 - About as often as other tasks	3 - Task may be learned in 1 to 2 weeks	3 - Task may be learned in 1 to 2 weeks	3 - 50 to 74% of the personnel perform this task	3 - Same amount of time spent on this task as most others	3 - Task first performed within 6 months after assignment	Performance support	
	Task		Y2Q4	4 - N/A		RTM	Platform: All CVN Classes	Basic Symbology	Complex Problem Solving	Fluency of Ideas	Multimeter	Applicable MIPs	Ashore	4 - Catastrophic	4 - Catastrophic		4 - Twice per week or more	4 - More often than other tasks	4 - Task may require up to 1 month or more to learn	4 - Task may require up to 1 month or more to learn	4 - 75 to 100% of the personnel perform this task	4 - More time spent on this task than most others	4 - Task performed during first 3 months after assignment	No Train	
	Subtask		Y3Q1			OJT	Platform: ALL NAVAL AIRCRAFT	Calculator operations	Conversion	Gross Body Coordination	None Required	Applicable PQS, SOP, JQR	CATCC												
	Step		Y3Q2			Other	Platform: Ashore	Characteristics and Capabilities	Coordination	Hearing Sensitivity	Personal Protective Equipment (PPE)	Applicable publications and documentation	CIC												
			Y3Q3				Platform: E/A-18G Growler	Chemistry	Critical Thinking	Inductive Reasoning	Special Tools	Applicable ship PQS	Flight Deck												
			Y3Q4				Platform: EA-6B	Clerical	Deductive Reasoning	Information Ordering	Test Equipment	applicable SOP(s)	Galley												
			Y4Q1				Platform: F/A-18A-D Hornet	Computers	Dexterity	Manual Dexterity	Two-Way Radios	Applicable T/M/S Maintenance Instruction Manuals and Publications	Online												
			Y4Q2				Platform: F/A-18E/F Super Hornet	Customer and Personal Service	Equipment Maintenance	Mathematical Reasoning		Applicable T/M/S Maintenance Manual	Squadron Office												
			Y4Q3				Platform: LHD	Design	Equipment Selection 	Memorization		Applicable T/M/S Weapon Loading Manual													
			Y4Q4				Platform: MH-60	Education and Training	Error Avoidance	Multi-limb Coordination		Applicable Technical Manuals													
			Y5Q1				Platform: MQ-4C	Electrical	Forecasting	Near Vision		Applicable technical manuals and publications													
			Y5Q2				Platform: MQ-4C Triton	Electrical Schematics and Diagrams	Installation	Number Facility		Applicable Weapon Assembly Manual													
			Y5Q3				Platform: MQ-8B Fire Scout	Electronics	Instructing	Oral Comprehension		CNATRA INST 4790.15, Procedures for Authorization of Safe for Flight Certification													
			Y5Q4				Platform: MQ-8C Fire Scout	Engineering and Technology	Judgment And Decision Making	Oral Expression		CNATRAINST 13650.1(Series)													
			Y6Q1				Platform: MV-22 OSPREY	English Language	Learning Strategies	Originality		COMMARFORCOM ORDER (LFORM)													
			Y6Q2				Platform: Other	Equipment Functions	Management Of Financial Resources	Perceptual Speed		COMNAVAIRFORINST 4790.2 (Series), The Naval Aviation Maintenance Program (NAMP)													
			Y6Q3				Platform: P3/P8	Equipment Selection	Management Of Material Resources	Peripheral Vision		COMNAVSURFPAC/COMNAVSURFLANT INST 4080.1													
			Y6Q4				Platform: P-8A Poseidon	Geography	Management Of Personnel Resources	Problem Sensitivity		Electrical Grounding for Aircraft Safety, MIL-HDBK-274 (AS)													
								Hazardous Material	Measuring	Reaction Time		Instructions													
								Instructions	Monitoring 	Selective Attention		MIL-HDBK-274 (AS), Electrical Grounding for Aircraft Safety													
								Mathematics	Ms Office Suite	Spatial Orientation		NAVADMIN 234/04													
								Mechanical	Operation And Control 	Speech Clarity		NAVAIR 00-25-100, Naval Air System Command Technical Manual Program													
								Naval Air Systems Command (NAVAIRSYSCOM)	Operation Monitoring	Speed of Closure		NAVAIR 00-80R-14 NATOPS U.S. Navy Aircraft Firefighting and Rescue Manual													
								Naval Ordnance Safety and Security Activity (NOSSA)	Operations Analysis	Stamina		NAVAIR 00-80T-106 LHA/LHD NATOPS Manual													
								Naval Sea System Command (NAVSEASYSCOM)	Oral Communication	Static Strength		NAVAIR 16-1-529, Hazards of Electromagnetic Radiation as applied to Ordnance													
								Naval Supply Systems Command (NAVSUPSYSCOM)	Problem Solving	Time Sharing		NAVSEA OP 3565, Electromagnetic Radiation Hazards (Hazards to Ordnance) Volume 2													
								Ordnance	Pronunciation	Visual Color Discrimination		NAVSEA OP 4, Ammunition Afloat													
								Personal Protective Equipment (PPE)	Public Speaking	Visualization		NAVSEA OP 4, Ammunition and Explosives Safety Afloat													
								Physics	Quality Control Analysis	Wrist-Finger Speed		NAVSEA OP 5, Ammunition and Explosives Safety Ashore													
								Principles of Operation	Reading Comprehension 	Written Comprehension		NAVSEA S6340-AA-MMA-010, OTTO Fuel II Safety/Storage/Handling Instruction													
								Production and Processing	Recall	Written Expression		NAVSEA S9522-AA-HBK-010													
								Psychology	Repairing			NAVSEA SW020-AD-SAF-010 EXPLOSIVES SAFETY ACCIDENTS AND LESSONS LEARNED													
								Publications	Social Perceptiveness			NAVSEA SW023-AH-WHM-010, Handling Ammunition and Explosives with Industrial Materials Handling Equipment (MHE)													
								Safety	Speaking			NAVSEA SW023-AJ-WHS-010													
								Safety Procedures	Subtraction			NAVSEAINST 4280.2(Series)													
								Science	Systems Analysis			NAVSEAINST 4790.8 Series, Ship's Maintenance and Material Management (3-M) Manual													
								Security	Systems Evaluation			NAVSEAINST 8370.2 (Series), Small Arms and Weapons Management Policy and Guidance													
								Something Else	Technology Design			NAVSEAINST 8370.2B, Small Arms and Weapons Management Policy and Guidance													
								Standard Operating Procedures (SOP)	Troubleshooting			NAVSUP P-724													
								Stuff	Visual Acuity			NAVSUP P-801													
								Technical Manuals	Writing			NAVSUP P-805													
								Technical Publications				NOSSAINST 8023.11 (Series), SOP Development, Implementation, and Maintenance for Ammunition and Explosives													
								Telecommunications				NOSSAINST 8023.12 (Series), Shipboard Explosive Safety Program													
								Terms and definitions				NTRP 3-07.2.2, Force Protection Weapons Handling Standard Procedures and Guidelines													
								Tools and their uses				NTTP 3-07.2.1, Antiterrorism													
								Transportation				OPNAV M-8000.16 THE NAVAL ORDNANCE MANAGEMENT POLICY (NOMP) MANUAL													
												OPNAVINST 1500.75 (Series) Policy and Procedures for Conducting High-Risk Training													
												OPNAVINST 3500.39 (Series), Operational Risk Management (ORM)													
												OPNAVINST 3591.1 (series), Small Arms Training and Qualification													
												OPNAVINST 3750.6 (series)													
												OPNAVINST 4700.7(Series), Maintenance Policy for US Navy Ships													
												OPNAVINST 5100.19 (Series), Navy Occupational Safety and Health Manual For Forces Afloat													
												OPNAVINST 5100.19 (series), Safety and Occupational Health (SOH) Program Manual for Forces Afloat													
												OPNAVINST 5530.13 (Series), Department of the Navy Physical Security Instruction for Conventional Arms, Ammunition, and Explosives (AA&E)													
												OPNAVINST 5530.14 (Series), Navy Physical Security and Law Enforcement Program													
												OPNAVINST 8020.14, Department of the Navy Explosive Safety Policy													
												OPNAVINST 8023.24(Series),Navy Personnel Ammunition and Explosives Handling Qualification and Certification Record													
												PQS													
												Publications													
												S9086-XG-STM-010 SHIPBOARD AMMUNITION HANDLING AND STOWAGE CHAPTER 700													
												S9086-ZN-STM-010 Naval Ships' Technical Manual Chapter 772 Cargo and Weapons Elevators													
												SOP(s)													
												SOPs													
												SW020-AC-SAF-010, Transportation and Storage Data for Ammunition, Explosives and Related Hazardous Materials													
												SW020-AF-HBK-010, Motor Vehicle Driver and Shipping Inspector's Handbook for Ammunition, Explosives, and Related Hazardous Materials													
												SW300-BC-SAF-010, Safety Manual for Clearing of Ammunition from Guns													
												SW370-AH-11N-010 Shipboard Small Arms Ranges													
												SWP6852-001 STANDARD WORK PACKAGE Deckplate Technical Directives Reporting System & TD/Kit Management System`

// const openai = new OpenAI();

// const taskStructure = [
//     {"role": "system", "content": model },
//     {"role": "system", "content": `Here are some of the defs related to the model: ${defs}` },
//     {"role": "system", "content": "Any portions that refer to a SME or need a SME or a stakeholder, don't answer just put 'SME Required' or 'Stakeholder Required'" },
//     {"role": "system", "content": "Headings are as follows:Analysis UID,Type,Skill Text,Additional Notes,Proficiency Level,SPL Definition,OCCSTD Task ID,Career Progression Timing,Career Progression Timing (etc.),Task is performed during SEA1 (Sea Shore Flow Tour 1),Task Level,Status of Training,Type of Training,Object(s),Condition,Standard,Starting Cues,Ending Cues,Task Source,Knowledge,Skills,Abilities,Tools,Resources,Location,Safety Hazard Severity,What is the Safety Hazard when performing the task?,Criticality of Performance,Why is task critical?,Task Delay Tolerance,Frequency of Performance,Probability of Inadequate Performance Due to Training,Difficulty of Performance,Why is task difficult?,Task Learning Difficulty,Percent Performing ,Percentage of Time Spent on Performance within the Job,Immediacy of Performance,T/NT Recommendation (DIF Model),SME Train/No Train Recommendation,Rationale for SME Train/No Train Recommendation,Stakeholder Train/No Train Decision,Rationale for Stakeholder Train/No Train Decision" },
//     {"role": "system", "content": "Return only the analysis, in csv format, maintain the order but no headings, no fluff or extra words, simply the required csv structure" },
// ]

// const defaultStructure = [
//     {"role": "system", "content": model },
//     {"role": "system", "content": "This is a model that is used to modernize and automate much of the creation of Navy Training Tasks" },
//     {"role": "system", "content": "Output should be simple DUTY: 'DEFINE THE DUTY', TASKS: [ARRAY OF TASKS] (e.g. DUTY: 'FIRST MATE', TASKS: ['Guide the ship',\n 'Organize the Crew',\n etc.])" },
// ]

export async function GET() {
    // const data = await req.json()
    // let messages = defaultStructure;
    // messages.push({"role": "user", "content": data.data });
    // const completion = await openai.chat.completions.create({
    //     messages: messages,
    //     model: "gpt-4-1106-preview",
    // });
    // duty_part = response.split('TASKS:')[0].strip()
    // duty = duty_part.split('DUTY:')[1].strip()
    // tasks_part = response.split('TASKS:')[1].strip()
    // tasks = eval(tasks_part)  # using eval to convert string list representation to actual list

    return NextResponse.json({ok: "check"});
    // console.log(req)
    // const data = await req.json()

    // console.log();
  }