import { Card } from "./ui/card"


  
  export function BSFBoards({boardsData}) {




    return (
   <div className="flex space-between gap-2 p-8">
    {boardsData?.boards?.map((boardElement, boardElementIndex)=>{
        return(
            <Card className="w-[50%] bg-gray-100 p-2" key={boardElementIndex}>
                <div className="font-bold text-center">{boardElement.name}</div>

                {boardElement?.bcfs.map((bsfsElement, bsfsElementIndex)=>{
                    return(
                        <Card className="w-[100%] bg-gray-200 p-2 border mt-2" key={bsfsElementIndex}>
                        <div className="font-semibold text-center">{bsfsElement.name}</div>

                        {bsfsElement.bcfBoards.map((bcfBoardsElement, bcfBoardsElementIndex)=>{
                            return(
                                <Card className="w-[100%] bg-gray-300 p-2 border mt-2" key={bcfBoardsElementIndex}>
                                <div className="font-semibold text-center">{bcfBoardsElement.name}</div>
                                </Card>
                            )
                        })}
                        </Card>
                    )

                })

                }
            </Card>
        )
    })}


   </div>
    )
  }
  