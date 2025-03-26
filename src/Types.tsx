export interface IFaultsType {
    total_number: number;
    found_faults: Array<IFoundFaultsType>
}

export interface IFoundFaultsType {
    operation_id: string;
    test_case_id: string;
    fault_categories: Array<IFaultCategoriesType>
}

export interface IFaultCategoriesType {
    code: number;
    context: string;
}

export interface IProblemDetailsType {
    rest: IRestType
}

export interface IRestType {
    total_http_calls: number;
    endpoint_ids: string[];
    covered_http_status: Array<ICoveredHttpStatusType>
}

export interface ICoveredHttpStatusType {
    endpoint_id: string;
    test_case_id: string;
    http_status: number[]
}

export interface ITestCaseType {
    id: string;
    file_path: string;
    name: string;
    start_line: number;
    end_line: number;
}

export interface ITypes {
    schema_version: string;
    tool_name: string;
    tool_version: string;
    creation_time: number;
    faults: IFaultsType;
    problem_details: IProblemDetailsType;
    total_tests: number;
    test_file_paths: Array<string>;
    test_cases: Array<ITestCaseType>;
}