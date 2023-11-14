import csv
from openai import OpenAI
from http.server import BaseHTTPRequestHandler

class handler(BaseHTTPRequestHandler):
     
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type','text/plain')
        self.end_headers()
        self.wfile.write('Hello, world!'.encode('utf-8'))
        return

class ChatGPT():
    def __init__(self):
        self.client = OpenAI(api_key=key)
        c9model = ""
        c9defs = ""
        self.model = 'gpt-4-1106-preview'
        with open('docs/model.csv', 'r', encoding='utf-8') as f:
            reader = csv.reader(f);
            for line in reader:
                c9model += str(line)
        with open('docs/def.csv', 'r', encoding='utf-8') as f:
            reader = csv.reader(f);
            for line in reader:
                c9defs += str(line)
        
        self.response = None


        self.structure = [
            {"role": "system", "content": c9model },
            {"role": "system", "content": f"Here are some of the defs related to the model: {c9defs}" },
            {"role": "system", "content": f"Any portions that refer to a SME or need a SME or a stakeholder, don't answer just put 'SME Required' or 'Stakeholder Required'" },
            {"role": "system", "content": f"Headings are as follows:Analysis UID,Type,Skill Text,Additional Notes,Proficiency Level,SPL Definition,OCCSTD Task ID,Career Progression Timing,Career Progression Timing (etc.),Task is performed during SEA1 (Sea Shore Flow Tour 1),Task Level,Status of Training,Type of Training,Object(s),Condition,Standard,Starting Cues,Ending Cues,Task Source,Knowledge,Skills,Abilities,Tools,Resources,Location,Safety Hazard Severity,What is the Safety Hazard when performing the task?,Criticality of Performance,Why is task critical?,Task Delay Tolerance,Frequency of Performance,Probability of Inadequate Performance Due to Training,Difficulty of Performance,Why is task difficult?,Task Learning Difficulty,Percent Performing ,Percentage of Time Spent on Performance within the Job,Immediacy of Performance,T/NT Recommendation (DIF Model),SME Train/No Train Recommendation,Rationale for SME Train/No Train Recommendation,Stakeholder Train/No Train Decision,Rationale for Stakeholder Train/No Train Decision" },
            {"role": "system", "content": f"Return only the analysis, in csv format, maintain the order but no headings, no fluff or extra words, simply the required csv structure" },
        ]

        self.default_structure = [
            {"role": "system", "content": c9model },
            {"role": "system", "content": f"This is a model that is used to modernize and automate much of the creation of Navy Training Tasks" },
            {"role": "system", "content": f"Output should be simple DUTY: 'DEFINE THE DUTY', TASKS: [ARRAY OF TASKS] (e.g. DUTY: 'FIRST MATE', TASKS: ['Guide the ship',\n 'Organize the Crew',\n etc.])" },
        ]
    
    def add_default_message(self, role, msg):
        self.default_structure.append({ "role": role, "content": msg })

    def add_message(self, role, msg):
        return { "role": role, "content": msg }
    
    def remove_message(self):
        self.structure.remove()

    def ask_for_c9_eval(self, task, rating):
        messages = self.structure
        messages.append(self.add_message("user", f"Can we fill it out for {task} under the rating/skill/school {rating}"))
        response = self.chat(messages)
        return self.format_for_csv(response)
    
    def receive_input(self, data):
        messages = self.default_structure
        messages.append(self.add_message("user", data))
        response = self.chat(messages)
        print(response)
        # Extracting the duty part
        duty_part = response.split('TASKS:')[0].strip()
        duty = duty_part.split('DUTY:')[1].strip()
        # Extracting the tasks part
        tasks_part = response.split('TASKS:')[1].strip()
        tasks = eval(tasks_part)  # using eval to convert string list representation to actual list

        return duty,tasks


    def chat(self, structure):
        response = self.client.chat.completions.create(
            model=self.model,
            messages=structure
        )
        return response.choices[0].message.content
    
    def format_for_csv(self, response):
        formatted = response.replace("```", "").replace("\n", "").split(",")
        return formatted