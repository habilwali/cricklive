
import { DataTable } from "@/components/ui/data-table";
import { bollingcolumns, scorecolumns, squardColumns } from "./columns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const SquaidTable = ({ data }) => {

  return (
    <>
      <Card className="mt-5  rounded-md">
        <CardHeader className="bg-[#022FF8] rounded-sm text-white grid grid-cols-2"  >
          <CardTitle>{data?.data?.team1?.teamName}</CardTitle>
          <CardTitle>{data?.data?.team2?.teamName}</CardTitle>

        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <div>

            {
              data?.data?.team1Squad?.player?.map((squad) => (
                <>
                  <div className=" bg-[#E5E5E5] text-gray-600 p-3 mt-5">
                    <span className="">{squad?.category}</span>
                  </div>
                  <DataTable searchKey="name" columns={squardColumns} data={squad?.player} />

                </>


              ))
            }

          </div>

          <div>

            {
              data?.data?.team2Squad?.player?.map((squad) => (
                <>
                                  <div className=" bg-[#E5E5E5] text-gray-600 p-3 mt-5">
                    <span className="">{squad?.category}</span>
                    </div>

                    <DataTable searchKey="name" columns={squardColumns} data={squad?.player} />
                
                  </>

             

              ))
            }

          </div>




        </CardContent>
      </Card>


    </>
  );
};