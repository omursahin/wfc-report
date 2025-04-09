import {Card} from "@/components/ui/card.tsx";
import type React from "react";
import {CoveragePieChart} from "@/components/CoveragePieChart.tsx";
import {IRestType} from "@/Types.tsx";

export const RestReports: React.FC<IRestType> = ({total_http_calls, covered_http_status, endpoint_ids}) => {
    const total = endpoint_ids.length;
    const allStatusCounts ={
        "2XX": 0,
        "3XX": 0,
        "4XX": 0,
        "5XX": 0
    }

    endpoint_ids.map(
        (endpoint) => {
            const allStatusCodes = covered_http_status.filter(status => status.endpoint_id === endpoint)
                .map(
                    (status) => status.http_status
                ).flat()
            const uniqueStatusCodes = [...new Set(allStatusCodes)];

            // group by http status codes
            const isContainStatusCode = {
                "2XX": false,
                "3XX": false,
                "4XX": false,
                "5XX": false
            }

            uniqueStatusCodes.map(
                (status) => {
                    if (status >= 200 && status < 300) {
                        isContainStatusCode["2XX"] = true;
                    } else if (status >= 300 && status < 400) {
                        isContainStatusCode["3XX"] = true;
                    } else if (status >= 400 && status < 500) {
                        isContainStatusCode["4XX"] = true;
                    } else if (status >= 500 && status < 600) {
                        isContainStatusCode["5XX"] = true;
                    }
                }
            )
            // if the endpoint contains all status codes, increase the count
            if (isContainStatusCode["2XX"]) {
                allStatusCounts["2XX"]++;
            }
            if (isContainStatusCode["3XX"]) {
                allStatusCounts["3XX"]++;
            }
            if (isContainStatusCode["4XX"]) {
                allStatusCounts["4XX"]++;
            }
            if (isContainStatusCode["5XX"]) {
                allStatusCounts["5XX"]++;
            }
        }
    )

    return (
        <Card className="border-2 border-black p-6 rounded-none">
            <div className="mb-4">
                <h3 className="text-xl font-bold">REST Reports</h3>
            </div>
            <div className="border-t border-black my-2"></div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <CoveragePieChart covered={allStatusCounts["2XX"]} total={total} color={"#7fd561"} label={"2XX"}/>
                <CoveragePieChart covered={allStatusCounts["3XX"]} total={total} color={"#b8c1e6"} label={"3XX"}/>
                <CoveragePieChart covered={allStatusCounts["4XX"]} total={total} color={"#FFAB5B"} label={"4XX"}/>
                <CoveragePieChart covered={allStatusCounts["5XX"]} total={total} color={"#930d3b"} label={"5XX"}/>
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