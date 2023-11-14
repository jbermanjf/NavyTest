import { NextResponse } from 'next/server';
import OpenAI from "openai";
import { model, defs } from '@/const'

const openai = new OpenAI();

const taskStructure = [
    {"role": "system", "content": model },
    {"role": "system", "content": `Here are some of the defs related to the model: ${defs}` },
    {"role": "system", "content": "Any portions that refer to a SME or need a SME or a stakeholder, don't answer just put 'SME Required' or 'Stakeholder Required'" },
    {"role": "system", "content": "Headings are as follows:Analysis UID,Type,Skill Text,Additional Notes,Proficiency Level,SPL Definition,OCCSTD Task ID,Career Progression Timing,Career Progression Timing (etc.),Task is performed during SEA1 (Sea Shore Flow Tour 1),Task Level,Status of Training,Type of Training,Object(s),Condition,Standard,Starting Cues,Ending Cues,Task Source,Knowledge,Skills,Abilities,Tools,Resources,Location,Safety Hazard Severity,What is the Safety Hazard when performing the task?,Criticality of Performance,Why is task critical?,Task Delay Tolerance,Frequency of Performance,Probability of Inadequate Performance Due to Training,Difficulty of Performance,Why is task difficult?,Task Learning Difficulty,Percent Performing ,Percentage of Time Spent on Performance within the Job,Immediacy of Performance,T/NT Recommendation (DIF Model),SME Train/No Train Recommendation,Rationale for SME Train/No Train Recommendation,Stakeholder Train/No Train Decision,Rationale for Stakeholder Train/No Train Decision" },
    {"role": "system", "content": "Return only the analysis, in csv format, maintain the order but no headings, no fluff or extra words, simply the required csv structure" },
]

const defaultStructure = [
    {"role": "system", "content": model },
    {"role": "system", "content": "This is a model that is used to modernize and automate much of the creation of Navy Training Tasks" },
    {"role": "system", "content": "Output should be simple DUTY: 'DEFINE THE DUTY', TASKS: [ARRAY OF TASKS] (e.g. DUTY: 'FIRST MATE', TASKS: ['Guide the ship',\n 'Organize the Crew',\n etc.])" },
]

export async function POST(req, res) {
    const data = await req.json()
    let messages = defaultStructure;
    messages.push({"role": "user", "content": data.data });
    const completion = await openai.chat.completions.create({
        messages: messages,
        model: "gpt-4-1106-preview",
    });
    // duty_part = response.split('TASKS:')[0].strip()
    // duty = duty_part.split('DUTY:')[1].strip()
    // tasks_part = response.split('TASKS:')[1].strip()
    // tasks = eval(tasks_part)  # using eval to convert string list representation to actual list

    return NextResponse.json({response: completion.choices[0]});
    // console.log(req)
    // const data = await req.json()


    // console.log();
  }