import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { PromptTable } from "@/components/PrompTable";
import { BSFBoards } from "@/components/BSFBoards";

const inter = Inter({ subsets: ["latin"] });

 async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle errors here
    console.error('Error fetching data:', error);
    throw new Error('Error fetching data');
  }
}


export default function Home() {
  const [boardsData, setBoardsData] = useState(null);
  const [promptsData, setPromptsData] = useState(null);
  const [activeTable, setActiveTable]= useState(true);


  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const result = await fetchData('https://demo6396395.mockable.io/bcf-boards');
        setBoardsData(result);
      } catch (error) {
        // Handle error
        console.error('Error fetching data:', error);
      }
      try {
        const result = await fetchData('https://demo6396395.mockable.io/prompts');
        setPromptsData(result);
      } catch (error) {
        // Handle error
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromAPI();
  }, []);

  return (
    <main
    >
      <div className="flex justify-center my-16">
      <div className="flex space-around gap-10">
      <Button onClick={()=>setActiveTable(true)} className={`${activeTable ? "": "opacity-50"}`}>Left Button Prompt Table</Button>
      <Button onClick={()=>setActiveTable(false)} className={`${!activeTable ? "": "opacity-50"}`}>Right Button Boards Table</Button>

      </div></div>
     
    
     {activeTable && <PromptTable promptTableData={promptsData}/>}
     {!activeTable && <BSFBoards boardsData={boardsData}/>}


    </main>
  );
}
