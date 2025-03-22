import type React from "react";
import {Accordion} from "@/components/ui/accordion.tsx";
import {EndpointAccordion} from "@/components/EndpointAccordion.tsx";


interface Props {
    addTestTab: (value: string, event: React.MouseEvent<HTMLElement>) => void;
}
export const Endpoints: React.FC<Props> = ({addTestTab}) => {

    //TODO - here will be changed
    const data = [
        {
            "endpoint": "POST:/users",
            "http_status_codes": [
                {
                    code: 200,
                    test_cases: ["TC1", "TC2", "TC3"]
                },
                {
                    code: 201,
                    test_cases: ["TC4", "TC5", "TC6"]
                },
                {
                    code: 400,
                    test_cases: ["TC1", "TC7", "TC9"]
                },
                {
                    code: 500,
                    test_cases: ["TC10", "TC11",]
                }
            ],
            "faults": [
                {
                    code: "F1",
                    test_cases: ["TC18", "TC20", "TC13"]
                },
                {
                    code: "F2",
                    test_cases: ["TC9", "TC8", "TC16"]
                },
                {
                    code: "F3",
                    test_cases: ["TC15", "TC16", "TC17"]
                },
                {
                    code: "F4",
                    test_cases: ["TC14", "TC22",]
                }
            ]
        },
        {
            "endpoint": "GET:/users",
            "http_status_codes": [
                {
                    code: 200,
                    test_cases: ["TC23", "TC24", "TC25"]
                },
                {
                    code: 201,
                    test_cases: ["TC26", "TC27", "TC28"]
                }
            ],
            "faults": [
                {
                    code: "F1",
                    test_cases: ["TC29", "TC30", "TC31"]
                },
                {
                    code: "F2",
                    test_cases: ["TC32", "TC33"]
                }
            ]
        },
        {
            "endpoint": "POST:/users3",
            "http_status_codes": [
                {
                    code: 200,
                    test_cases: ["TC34", "TC35", "TC36"]
                },
                {
                    code: 500,
                    test_cases: ["TC37", "TC38",]
                }
            ],
            "faults": [
                {
                    code: "F2",
                    test_cases: ["TC39", "TC40", "TC41"]
                }
            ]
        },
        {
            "endpoint": "POST:/users4",
            "http_status_codes": [
                {
                    code: 200,
                    test_cases: ["TC42", "TC43", "TC44"]
                }
            ],
            "faults": [
                {
                    code: "F1",
                    test_cases: ["TC45", "TC46", "TC47"]
                }
            ]
        },
        {
            "endpoint": "POST:/users5",
            "http_status_codes": [
                {
                    code: 200,
                    test_cases: ["TC48", "TC49", "TC50"]
                }
            ],
            "faults": []
        },
        {
            "endpoint": "POST:/users6",
            "http_status_codes": [],
            "faults": [
                {
                    code: "F2",
                    test_cases: ["TC51", "TC52", "TC53"]
                }
            ]
        },
        {
            "endpoint": "POST:/users7",
            "http_status_codes": [],
            "faults": []
        }
    ];

    return (
        <div className="border-2 border-black p-6 rounded-none w-[80%] mx-auto">
            <Accordion type="single" collapsible className="w-full">
                {
                    data.map((item, index) => (
                        <EndpointAccordion key={index} value={`_${index}`} endpoint={item.endpoint}
                                           status_codes={item.http_status_codes} faults={item.faults} addTestTab={addTestTab}/>
                    ))
                }
            </Accordion>
        </div>
    )
}