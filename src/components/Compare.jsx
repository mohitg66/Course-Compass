// import { useParams } from "react-router-dom";
// import { useState } from "react";
import Navbar2 from "./Navbar2";
import courses from "../constants/courses";
// import selections from "../constants/selections";

export default () => {
    // const id1 = 1;
    // const id2 = 1;
    // const id3 = 1;
    // const selectedId = [1, 2, 3];
    let selectedId = [1, 2, 3];
    // let selectedId= selections;

    const selectedCourse = [];
    selectedCourse[0] = courses.find((course) => course.id == selectedId[0]);
    selectedCourse[1] = courses.find((course) => course.id == selectedId[1]);
    selectedCourse[2] = courses.find((course) => course.id == selectedId[2]);

    if (!selectedCourse[0] || !selectedCourse[1] || !selectedCourse[2]) {
        return <div className="h-screen flex text-center justify-center items-center">
            <p>{`Courses not found`}</p>
        </div>;
    }

    return (
        <div className="h-screen flex flex-col">

            {/* {state ? (
        <div className="fixed inset-0 z-30 overflow-y-auto">
          <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setState(false)}></div>
          <div className="flex items-center min-h-screen px-4 py-8">
            <div className="relative w-full max-w-2xl p-4 mx-auto bg-white rounded-md shadow-lg">
              <div className="mt-3">
                <div className="mt-2 text-center">
                  <h4 className="text-lg font-medium text-gray-800 mb-6">
                    Compare
                  </h4>
                  
                  <form action="">
                    <div className="flex flex-col items-center gap-3 md:flex-row">
                      <Course 
                        className="h-full"
                      />
                      <p>vs</p>
                      <Course 
                        className="h-full"
                      />
                      <p>vs</p>
                      <Course 
                        className="h-full"
                      />
                    </div>
                  </form>

                </div>
              </div>
              <div className="items-center gap-2 mt-3 sm:flex">
                <button className="w-full mt-2 p-2.5 flex-1 text-white bg-blue-600 rounded-md outline-none hover:bg-blue-500 focus:bg-blue-700"
                  onClick={() => setState(false)}
                >
                  Compare
                </button>
                <button className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border hover:bg-gray-100 focus:bg-gray-200"
                  onClick={() => setState(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : ''} */}


            <Navbar2 />
            <div className="flex flex-1">

                <div className="max-w-screen-xl self-center py-6 mx-auto flex flex-row gap-8 justify-between box-border">

                    {selectedCourse.map((course1) => {
                        return (

                            <div className="bg-white h-full border rounded-2xl shadow-md w-1/3">
                                <div className="flex flex-col w-full h-80 gap-2 justify-between bg-primary-600 text-primary-50 p-6 rounded-2xl shadow-md">
                                    <div className="text-2xl font text-center">{course1.code}</div>
                                    <div className="text-4xl py-10 font-bold text-center">
                                        <u>{course1.title}</u>
                                    </div>

                                    <div>

                                        <div className="flex flex-row justify-center divide-x">
                                            {course1.instructors.map((instructor) => {
                                                return <div className="px-3">{instructor}</div>;
                                            })}
                                        </div>
                                        <div className="text-2xl font-bold text-center">
                                            {course1.institute}
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full flex-grow ">
                                    <div className="grid grid-rows-5 align-middle h-full py-6 px-16 divide-y mx-auto">
                                        <div className="flex justify-between items-center px-1 py-3">
                                            <div className="text-gray-600 font-medium">Course rating</div>
                                            <div className="font-medium">
                                                {course1.rating >= 4 ? (
                                                    <div className="text-green-500">{course1.rating}</div>
                                                ) : course1.rating >= 3 ? (
                                                    <div className="text-yellow-500">{course1.rating}</div>
                                                ) : (
                                                    <div className="text-red-500">{course1.rating}</div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center  px-1 py-3">
                                            <div className="text-gray-600 font-medium">
                                                Difficulty Level
                                            </div>
                                            <div className="font-medium">
                                                {course1.difficulty == "Low" ? (
                                                    <div className="text-green-500">{course1.difficulty}</div>
                                                ) : course1.difficulty == "Medium" ? (
                                                    <div className="text-yellow-500">{course1.difficulty}</div>
                                                ) : course1.difficulty == "High" ? (
                                                    <div className="text-orange-500">{course1.difficulty}</div>
                                                ) : (
                                                    <div className="text-red-500">{course1.difficulty}</div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center px-1 py-3">
                                            <div className="text-gray-600 font-medium">Workload</div>
                                            <div className="font-medium">
                                                {course1.workload == "Low" ? (
                                                    <div className="text-green-500">{course1.workload}</div>
                                                ) : course1.workload == "Medium" ? (
                                                    <div className="text-yellow-500">{course1.workload}</div>
                                                ) : course1.workload == "High" ? (
                                                    <div className="text-orange-500">{course1.workload}</div>
                                                ) : (
                                                    <div className="text-red-500">{course1.workload}</div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center px-1 py-3">
                                            <div className="text-gray-600 font-medium">Average Grade</div>
                                            <div className="font-medium">
                                                {course1.average_grade >= 9 ? (
                                                    <div className="text-green-500">{course1.average_grade}</div>
                                                ) : course1.average_grade >= 7 ? (
                                                    <div className="text-yellow-500">
                                                        {course1.average_grade}
                                                    </div>
                                                ) : course1.average_grade >= 5 ? (
                                                    <div className="text-orange-500">
                                                        {course1.average_grade}
                                                    </div>
                                                ) : (
                                                    <div className="text-red-500">{course1.average_grade}</div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center px-1 py-3">
                                            <div className="text-gray-600 font-medium">Class Size</div>
                                            <div className="font-medium text-gray-700">{course1.size}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        );
                    })}


                    {/* <div className="bg-white h-full border rounded-2xl shadow-md w-1/3">
                    <div className="flex flex-col w-full h-1/2 gap-2 justify-center bg-primary-600 text-primary-50 p-6 rounded-2xl shadow-md">
                        <div className="text-2xl font text-center">{course1.code}</div>
                        <div className="text-4xl py-10 font-bold text-center">
                            <u>{course1.title}</u>
                        </div>

                        <div className="flex flex-row justify-center divide-x">
                            {course1.instructors.map((instructor) => {
                                return <div className="px-3">{instructor}</div>;
                            })}
                        </div>
                        <div className="text-2xl font-bold text-center">
                            {course1.institute}
                        </div>
                    </div>

                    <div className="w-full flex-grow ">
                        <div className="grid grid-rows-5 align-middle h-full py-6 px-16 divide-y mx-auto">
                            <div className="flex justify-between items-center px-1 py-3">
                                <div className="text-gray-600 font-medium">Course rating</div>
                                <div className="font-medium">
                                    {course1.rating >= 4 ? (
                                        <div className="text-green-500">{course1.rating}</div>
                                    ) : course1.rating >= 3 ? (
                                        <div className="text-yellow-500">{course1.rating}</div>
                                    ) : (
                                        <div className="text-red-500">{course1.rating}</div>
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-between items-center  px-1 py-3">
                                <div className="text-gray-600 font-medium">
                                    Difficulty Level
                                </div>
                                <div className="font-medium">
                                    {course1.difficulty == "Low" ? (
                                        <div className="text-green-500">{course1.difficulty}</div>
                                    ) : course1.difficulty == "Medium" ? (
                                        <div className="text-yellow-500">{course1.difficulty}</div>
                                    ) : course1.difficulty == "High" ? (
                                        <div className="text-orange-500">{course1.difficulty}</div>
                                    ) : (
                                        <div className="text-red-500">{course1.difficulty}</div>
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-between items-center px-1 py-3">
                                <div className="text-gray-600 font-medium">Workload</div>
                                <div className="font-medium">
                                    {course1.workload == "Low" ? (
                                        <div className="text-green-500">{course1.workload}</div>
                                    ) : course1.workload == "Medium" ? (
                                        <div className="text-yellow-500">{course1.workload}</div>
                                    ) : course1.workload == "High" ? (
                                        <div className="text-orange-500">{course1.workload}</div>
                                    ) : (
                                        <div className="text-red-500">{course1.workload}</div>
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-between items-center px-1 py-3">
                                <div className="text-gray-600 font-medium">Average Grade</div>
                                <div className="font-medium">
                                    {course1.average_grade >= 9 ? (
                                        <div className="text-green-500">{course1.average_grade}</div>
                                    ) : course1.average_grade >= 7 ? (
                                        <div className="text-yellow-500">
                                            {course1.average_grade}
                                        </div>
                                    ) : course1.average_grade >= 5 ? (
                                        <div className="text-orange-500">
                                            {course1.average_grade}
                                        </div>
                                    ) : (
                                        <div className="text-red-500">{course1.average_grade}</div>
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-between items-center px-1 py-3">
                                <div className="text-gray-600 font-medium">Class Size</div>
                                <div className="font-medium text-gray-700">{course1.size}</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="bg-white h-full border rounded-2xl shadow-md w-1/3">
                    <div className="flex flex-col w-full h-1/2 gap-2 justify-center bg-primary-600 text-primary-50 p-6 rounded-2xl shadow-md">
                        <div className="text-2xl font text-center">{course1.code}</div>
                        <div className="text-4xl py-10 font-bold text-center">
                            <u>{course1.title}</u>
                        </div>

                        <div className="flex flex-row justify-center divide-x">
                            {course1.instructors.map((instructor) => {
                                return <div className="px-3">{instructor}</div>;
                            })}
                        </div>
                        <div className="text-2xl font-bold text-center">
                            {course1.institute}
                        </div>
                    </div>

                    <div className="w-full flex-grow ">
                        <div className="grid grid-rows-5 align-middle h-full py-6 px-16 divide-y mx-auto">
                            <div className="flex justify-between items-center px-1 py-3">
                                <div className="text-gray-600 font-medium">Course rating</div>
                                <div className="font-medium">
                                    {course1.rating >= 4 ? (
                                        <div className="text-green-500">{course1.rating}</div>
                                    ) : course1.rating >= 3 ? (
                                        <div className="text-yellow-500">{course1.rating}</div>
                                    ) : (
                                        <div className="text-red-500">{course1.rating}</div>
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-between items-center  px-1 py-3">
                                <div className="text-gray-600 font-medium">
                                    Difficulty Level
                                </div>
                                <div className="font-medium">
                                    {course1.difficulty == "Low" ? (
                                        <div className="text-green-500">{course1.difficulty}</div>
                                    ) : course1.difficulty == "Medium" ? (
                                        <div className="text-yellow-500">{course1.difficulty}</div>
                                    ) : course1.difficulty == "High" ? (
                                        <div className="text-orange-500">{course1.difficulty}</div>
                                    ) : (
                                        <div className="text-red-500">{course1.difficulty}</div>
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-between items-center px-1 py-3">
                                <div className="text-gray-600 font-medium">Workload</div>
                                <div className="font-medium">
                                    {course1.workload == "Low" ? (
                                        <div className="text-green-500">{course1.workload}</div>
                                    ) : course1.workload == "Medium" ? (
                                        <div className="text-yellow-500">{course1.workload}</div>
                                    ) : course1.workload == "High" ? (
                                        <div className="text-orange-500">{course1.workload}</div>
                                    ) : (
                                        <div className="text-red-500">{course1.workload}</div>
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-between items-center px-1 py-3">
                                <div className="text-gray-600 font-medium">Average Grade</div>
                                <div className="font-medium">
                                    {course1.average_grade >= 9 ? (
                                        <div className="text-green-500">{course1.average_grade}</div>
                                    ) : course1.average_grade >= 7 ? (
                                        <div className="text-yellow-500">
                                            {course1.average_grade}
                                        </div>
                                    ) : course1.average_grade >= 5 ? (
                                        <div className="text-orange-500">
                                            {course1.average_grade}
                                        </div>
                                    ) : (
                                        <div className="text-red-500">{course1.average_grade}</div>
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-between items-center px-1 py-3">
                                <div className="text-gray-600 font-medium">Class Size</div>
                                <div className="font-medium text-gray-700">{course1.size}</div>
                            </div>
                        </div>
                    </div>
                </div> */}
                </div>
            </div>






        </div>
    );
};
