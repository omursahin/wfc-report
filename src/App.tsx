import './App.css'
import {Dashboard} from "@/components/Dashboard.tsx";
import {Types} from "@/Types.tsx";

function App() {

  const data: Types = {
      "schema_version": "0.0.1",
      "tool_name": "EvoMaster",
      "tool_version": "unknown",
      "creation_time": 1742201858163,
      "faults": {
          "total_number": 2,
          "found_faults": [
              {
                  "operation_id": "GET:/users/{id}",
                  "test_case_id": "1",
                  "fault_categories": [
                      {
                          "code": 200,
                          "context": "Test Context for 200"
                      },
                      {
                          "code": 201,
                          "context": "Test Context for 201"
                      }
                  ]
              },
              {
                  "operation_id": "POST:/users/{id}",
                  "test_case_id": "2",
                  "fault_categories": [
                      {
                          "code": 201,
                          "context": "Test Context for 201"
                      },
                      {
                          "code": 500,
                          "context": "Test Context for 500"
                      }
                  ]
              }
          ]
      },
      "problem_details": {
          "rest": {
              "total_http_calls": 146,
              "endpoint_ids": [
                  "1", "2", "3"
              ],
              "covered_http_status": [
                  {
                      "endpoint_id": "1",
                      "test_case_id": "1",
                      "http_status": [200, 300, 400]
                  },
                  {
                      "endpoint_id": "2",
                      "test_case_id": "2",
                      "http_status": [400,500]
                  },
                  {
                      "endpoint_id": "3",
                      "test_case_id": "3",
                      "http_status": [204]
                  }
              ]
          }
      },
      "total_tests": 88,
      "test_file_paths": [
            "./test_1.py",
            "./test_2.py",
            "./test_3.py"
      ],
      "test_cases": [
          {
              id: "1",
              file_path: "./test_1.py",
              name: "test_1",
              start_line: 1,
              end_line: 10,
          },
          {
              id: "2",
              file_path: "./test_1.py",
              name: "test_2",
              start_line: 1,
              end_line: 10,
          },
          {
              id: "3",
              file_path: "./test_1.py",
              name: "test_2",
              start_line: 1,
              end_line: 10,
          }
      ]
  };

  return (
      <main className="min-h-screen p-4 bg-gray-100">
          <Dashboard {...data} />
      </main>
  )
}

export default App
