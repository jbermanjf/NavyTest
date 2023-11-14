'use client'

import { useState } from 'react';

interface FormValues {
  task: string,
  cb9c: boolean,
  cb10: boolean,
  cb11: boolean
}

export default function Home() {
  const [messages, receiveMessages] = useState<string[]>([]);
  const [values, setValues] = useState<FormValues>({ task: "", cb9c: true, cb10: false, cb11: false });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const onHandleSubmit = async (e: any) => {
    e.preventDefault();
    if (submitted) return;
    
    if (values.task) {
      receiveMessages(prevMessages => [...prevMessages, "Working on task evaluation..."]);
      setSubmitted(true);
  
      try {
        const response = await fetch('/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // Assuming the API expects a parameter named 'data'
          body: JSON.stringify({ data: values.task }),
        });
  
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
  
        const responseData = await response.text();
        // Add the raw response data to the messages
        receiveMessages(prevMessages => [...prevMessages, `Response: ${responseData}`]);
        
      } catch (error) {
        console.error('There was an error processing your request:', error);
        receiveMessages(prevMessages => [...prevMessages, "Error processing task evaluation."]);
      } finally {
        setSubmitted(false);
      }
    } else {
      alert("Please enter the task details.");
    }
  };
  
  const onCheckChange = (e: any) => {
    setValues(prevState => ({
      ...prevState,
      [e.target.name]: e.target.checked
    }));
  };

  const onFormChange = (e: any) => {
    setValues(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="flex flex-col items-center p-4">
      <section className="flex flex-col w-full max-w-4xl border-b-2 border-gray-200 mb-4">
        <h1 className="text-5xl mb-4 text-center">Instructional System Design Analysis Assistant</h1>
        <div className="overflow-auto h-96 mb-4 p-2 bg-white border rounded">
          {messages.map((msg, index) => (
            <p className="text-black p-2 border-b" key={index}>{msg}</p>
          ))}
        </div>
      </section>
      <section className="flex flex-col w-full max-w-4xl">
        <form onSubmit={onHandleSubmit} className="mb-4">
          <div className="mb-4">
            <label htmlFor="task" className="block mb-2 text-sm font-medium text-white">Task Details</label>
            <textarea
              id="task"
              name="task"
              rows={4}
              className="w-full p-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Describe the task..."
              required
              onChange={onFormChange}
              value={values.task}
            />
          </div>
          <div className="flex gap-4 mb-4">
            <div className="flex items-center h-5">
              <input 
                id="cb9c" 
                name="cb9c" 
                type="checkbox" 
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300"
                onChange={onCheckChange}
                checked={values.cb9c}
              />
              <label htmlFor="cb9c" className="ml-2 text-sm font-medium text-white">9c</label>
          </div>
            <div className="flex items-center h-5">
              <input 
                id="cb9c" 
                name="cb9c" 
                type="checkbox" 
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300"
                onChange={onCheckChange}
                checked={values.cb10}
                disabled
              />
              <label htmlFor="cb9c" className="ml-2 text-sm font-medium text-white">10</label>
          </div>
            <div className="flex items-center h-5">
              <input 
                id="cb9c" 
                name="cb9c" 
                type="checkbox" 
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300"
                onChange={onCheckChange}
                checked={values.cb11}
                disabled
              />
              <label htmlFor="cb9c" className="ml-2 text-sm font-medium text-white">11</label>
            </div>
            {/* Repeat for other checkboxes */}
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Submit Task
          </button>
        </form>
      </section>
    </main>
  );
}
