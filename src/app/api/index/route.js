import { NextResponse } from 'next/server';
import OpenAI from "openai";

// const openai = new OpenAI();

const taskStructure = [
    {"role": "system", "content": c9model },
    {"role": "system", "content": `Here are some of the defs related to the model: ${c9defs}` },
    {"role": "system", "content": "Any portions that refer to a SME or need a SME or a stakeholder, don't answer just put 'SME Required' or 'Stakeholder Required'" },
    {"role": "system", "content": "Headings are as follows:Analysis UID,Type,Skill Text,Additional Notes,Proficiency Level,SPL Definition,OCCSTD Task ID,Career Progression Timing,Career Progression Timing (etc.),Task is performed during SEA1 (Sea Shore Flow Tour 1),Task Level,Status of Training,Type of Training,Object(s),Condition,Standard,Starting Cues,Ending Cues,Task Source,Knowledge,Skills,Abilities,Tools,Resources,Location,Safety Hazard Severity,What is the Safety Hazard when performing the task?,Criticality of Performance,Why is task critical?,Task Delay Tolerance,Frequency of Performance,Probability of Inadequate Performance Due to Training,Difficulty of Performance,Why is task difficult?,Task Learning Difficulty,Percent Performing ,Percentage of Time Spent on Performance within the Job,Immediacy of Performance,T/NT Recommendation (DIF Model),SME Train/No Train Recommendation,Rationale for SME Train/No Train Recommendation,Stakeholder Train/No Train Decision,Rationale for Stakeholder Train/No Train Decision" },
    {"role": "system", "content": "Return only the analysis, in csv format, maintain the order but no headings, no fluff or extra words, simply the required csv structure" },
]

const defaultStructure = [
    {"role": "system", "content": c9model },
    {"role": "system", "content": "This is a model that is used to modernize and automate much of the creation of Navy Training Tasks" },
    {"role": "system", "content": "Output should be simple DUTY: 'DEFINE THE DUTY', TASKS: [ARRAY OF TASKS] (e.g. DUTY: 'FIRST MATE', TASKS: ['Guide the ship',\n 'Organize the Crew',\n etc.])" },
]

export async function POST(req, res) {
    console.log(req)
    const data = await req.json()
    // const completion = await openai.chat.completions.create({
    //     messages: [{"role": "system", "content": "You are a helpful assistant."},
    //         {"role": "user", "content": "Who won the world series in 2020?"},
    //         {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
    //         {"role": "user", "content": "Where was it played?"}],
    //     model: "gpt-4-1106-preview",
    //   });
    
    // console.log(completion.choices[0]);
    return NextResponse.json({ data });
  }