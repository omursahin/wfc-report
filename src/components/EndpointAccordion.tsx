import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import React, {useState} from "react";
import {TestCases} from "@/components/TestCases.tsx";
import {getColor} from "@/utils.tsx";

interface StatusType {
    code: number | string;
    test_cases: string[];
}

export interface EndpointAccordionProps {
    endpoint: string;
    value: string;
    status_codes: StatusType[];
    faults: StatusType[];
    addTestTab: (value: string, event: React.MouseEvent<HTMLElement>) => void;
}

export const EndpointAccordion: React.FC<EndpointAccordionProps> = ({
                                                                        endpoint,
                                                                        value,
                                                                        status_codes,
                                                                        faults,
                                                                        addTestTab
                                                                    }) => {

    const [selectedCode, setSelectedCode] = useState<number | string>(0);

    const selectedTestCases = status_codes.find((code) => code.code === selectedCode)?.test_cases || [];
    const selectedFaultTestCases = faults.find((code) => code.code === selectedCode)?.test_cases || [];

    const faultColors = ["bg-red-300", "bg-red-500", "bg-red-700"];

    return (
        <AccordionItem value={value} className="border-2 border-black mb-4 overflow-hidden">
            <AccordionTrigger className="bg-blue-100 px-4 py-3 text-lg font-bold hover:no-underline hover:bg-blue-200">
                {endpoint}
            </AccordionTrigger>
            <AccordionContent className="p-4">
                <div className="mb-6">
                    <div className="font-bold text-lg mb-2">HTTP</div>
                    <div className="flex flex-wrap gap-2">
                        {
                            status_codes.map((code, index) => (
                                <Badge key={index} onClick={() => setSelectedCode(code.code)}
                                       className={`${getColor(code.code, "bg")} hover:bg-green-600 cursor-pointer text-white px-4 py-2 text-base font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                                    {code.code}
                                </Badge>
                            ))
                        }
                        {
                            status_codes.length == 0 &&
                            <div className="text-gray-500 italic">No status codes recorded for this endpoint.</div>
                        }
                    </div>
                </div>

                <div>
                    <div className="font-bold text-lg mb-2 text-red-500">FAULTS</div>
                    <div className="flex flex-wrap gap-2">
                        {
                            faults.map((fault, index) => (
                                <Badge key={index} onClick={() => setSelectedCode(fault.code)}
                                       className={`${faultColors[index % faultColors.length]} hover:bg-red-400 cursor-pointer text-white px-4 py-2 text-base font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                                    {fault.code}
                                </Badge>
                            ))
                        }
                        {
                            faults.length == 0 &&
                            <div className="text-gray-500 italic">No faults recorded for this endpoint.</div>
                        }
                    </div>
                </div>

                {
                    (selectedTestCases.length > 0 || selectedFaultTestCases.length > 0) &&
                    <div className="mt-6">
                        <TestCases addTestTab={addTestTab} color={"text-green-500"} code={selectedCode}
                                   test_cases={selectedTestCases.length > 0 ? selectedTestCases : selectedFaultTestCases}/>
                    </div>
                }
            </AccordionContent>
        </AccordionItem>
    )
}