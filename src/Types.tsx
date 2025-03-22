export interface FaultsType {
    total_number: number;
    found_faults: Array<FoundFaultsType>
}

export interface FoundFaultsType {
    operation_id: string;
    test_case_id: string;
    fault_categories: Array<FaultCategoriesType>
}

export interface FaultCategoriesType {
    code: number;
    context: string;
}

export interface ProblemDetailsType {
    rest: RestType
}

export interface RestType {
    total_http_calls: number;
    endpoint_ids: string[];
    covered_http_status: Array<CoveredHttpStatusType>
}

export interface CoveredHttpStatusType {
    endpoint_id: string;
    test_case_id: string;
    http_status: number[]
}

export interface TestCaseType {
    id: string;
    file_path: string;
    name: string;
    start_line: number;
    end_line: number;
}

export interface Types {
    schema_version: string;
    tool_name: string;
    tool_version: string;
    creation_time: number;
    faults: FaultsType;
    problem_details: ProblemDetailsType;
    total_tests: number;
    test_file_paths: Array<string>;
    test_cases: Array<TestCaseType>;
}