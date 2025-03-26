import {Card} from "@/components/ui/card.tsx";
import type React from "react";
import {CoveragePieChart} from "@/components/CoveragePieChart.tsx";
import {IRestType} from "@/Types.tsx";

export const RestReports: React.FC<IRestType> = ({total_http_calls, covered_http_status, endpoint_ids}) => {
    const total = endpoint_ids.length;
    const calculateNumberOfCovered = (start: number, end: number) => {
        return covered_http_status.reduce((count, item) => {
            return count + item.http_status.filter(code => code >= start && code < end).length;
        }, 0)};

    return (
        <Card className="border-2 border-black p-6 rounded-none">
            <div className="mb-4">
                <h3 className="text-xl font-bold">REST Reports</h3>
            </div>
            <div className="border-t border-black my-2"></div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <CoveragePieChart covered={calculateNumberOfCovered(200,300)} total={total} color={"#7fd561"} label={"2XX"}/>
                <CoveragePieChart covered={calculateNumberOfCovered(300,400)} total={total} color={"#b8c1e6"} label={"3XX"}/>
                <CoveragePieChart covered={calculateNumberOfCovered(400,500)} total={total} color={"#FFAB5B"} label={"4XX"}/>
                <CoveragePieChart covered={calculateNumberOfCovered(500,600)} total={total} color={"#930d3b"} label={"5XX"}/>
            </div>

            <div className="mt-6">
                <div className="flex justify-between font-bold">
                    <span># Endpoints:</span>
                    <span>{endpoint_ids.length}</span>
                </div>
                <div className="border-t border-black my-2"></div>
                <div className="flex justify-between font-bold">
                    <span># HTTP Calls:</span>
                    <span>{total_http_calls}</span>
                </div>
                <div className="border-t border-black my-2"></div>
            </div>
        </Card>
    )
}