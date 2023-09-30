"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useQueries, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SquaidTable } from "./component/squard-card";


const Squads = ({data}) => {


    return (

        <div >
            <SquaidTable data={data}/>
        </div>
       
    );
}

export default Squads;