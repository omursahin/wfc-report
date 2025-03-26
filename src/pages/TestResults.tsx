import {Card} from "@/components/ui/card.tsx";
import type React from "react";
import {Badge} from "@/components/ui/badge.tsx";
import {CodeBlock} from "@/components/CodeBlock.tsx";

interface IProps {
    test_case_name: string;
}

export const TestResults: React.FC<IProps> = ({test_case_name}) => {
    const files = {
        "faults.py": `# Calls:
# (200) GET:/app/api/assignments
# Found 192 potential faults of type-code 200
@timeout_decorator.timeout(60)
def test_13(self):

    headers = {}
    headers["content-type"] = "application/json"
    body = "username=selimhorn&password=test"
    cookies_ROLE_EMP_jqr = requests
        .post(self.baseUrlOfSut + "/app/login",
            headers=headers, data=body allow_redirects=False)`,
        "success.py": "# Success test cases here",
        "errors.py": "# Error handling test cases here",
    }

    return (
        <div className="border-2 border-black p-6 rounded-none w-[80%] mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{test_case_name}</h2>
                <div className="flex flex-wrap gap-2">
                    <Badge
                        className="bg-green-500 cursor-default hover:bg-green-600 text-white px-4 py-2 text-base font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        HTTP
                    </Badge>
                    <Badge
                        className="bg-red-500 cursor-default hover:bg-red-600 text-white px-4 py-2 text-base font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        500
                    </Badge>
                </div>
            </div>

            <div className="gap-6 mb-6">

                {/* Others Section */}
                <Card className="border-2 border-black p-8 rounded-none">
                    <h3 className="text-xl font-bold mb-4">Related Codes</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                        <Badge
                            className="bg-green-500 cursor-pointer hover:bg-green-600 text-white px-4 py-2 text-base font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            HTTP
                        </Badge>
                        <Badge
                            className="bg-green-500 cursor-pointer hover:bg-green-600 text-white px-4 py-2 text-base font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            201
                        </Badge>
                        <Badge
                            className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-4 py-2 text-base font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            400
                        </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <Badge
                            className="bg-red-500 cursor-pointer hover:bg-red-600 text-white px-4 py-2 text-base font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            FAULTS
                        </Badge>
                        <Badge
                            className="bg-red-300 cursor-pointer hover:bg-red-400 text-white px-4 py-2 text-base font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            F1
                        </Badge>
                    </div>
                </Card>
            </div>

            {/* Code Section */}
            <Card className="border-2 border-black rounded-none">
                <div
                    className="bg-gray-100 px-4 py-2 border-b-2 border-black font-bold flex justify-between items-center">
                    <span>file_path.py</span>

                </div>
                <pre className="p-4 overflow-auto max-h-[500px] text-sm text-left font-mono">
                    <CodeBlock content={files["faults.py"]} language="python"/>
                </pre>
            </Card>
        </div>
    )
}