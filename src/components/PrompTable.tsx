import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

  
  export function PromptTable({promptTableData}) {




    return (
        <div className="px-[25%]">
      <Table>
        <TableCaption>ShadCn Table Implementaion</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Id</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {promptTableData?.map((promptItem) => (
            <TableRow key={promptItem.promptItem}>
              <TableCell className="font-medium">{promptItem.name}</TableCell>
              <TableCell>{promptItem.id}</TableCell>
              <TableCell>{promptItem.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      
      </Table>
      </div>
    )
  }
  