import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar2 from "./Navbar2";
import courses from "../constants/courses";
// import CourseMenu from src\components\courses\CourseMenu.jsx
import Course from "./home/Course"

export default () => {
  const { id } = useParams();
  const [state, setState] = useState(false)

  const course = courses.find((course) => course.id == id);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>

      {state ? (
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
      ) : ''}


      <Navbar2 />


      <div className="max-w-screen-xl py-6 mx-auto flex flex-row gap-4 jutify-between box-border">
        <div className="flex flex-col w-1/3 gap-2 justify-center bg-primary-600 text-primary-50 p-6 rounded-2xl shadow-md">
          <div className="text-2xl font text-center">{course.code}</div>
          <div className="text-4xl py-16 font-bold text-center">
            <u>{course.title}</u>
          </div>

          <div className="flex flex-row justify-center divide-x">
            {course.instructors.map((instructor) => {
              return <div className="px-3">{instructor}</div>;
            })}
          </div>
          <div className="text-2xl font-bold text-center">
            {course.institute}
          </div>
        </div>

        <div className="w-2/3 flex-grow rounded-2xl border-2 shadow-md">
          <div className="grid grid-rows-5 align-middle h-full py-6 px-16 divide-y mx-auto">
            <div className="flex justify-between items-center px-1 py-3">
              <div className="text-gray-600 font-medium">Course rating</div>
              <div className="font-medium">
                {course.rating >= 4 ? (
                  <div className="text-green-500">{course.rating}</div>
                ) : course.rating >= 3 ? (
                  <div className="text-yellow-500">{course.rating}</div>
                ) : (
                  <div className="text-red-500">{course.rating}</div>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center  px-1 py-3">
              <div className="text-gray-600 font-medium">
                Difficulty Level
              </div>
              <div className="font-medium">
                {course.difficulty == "Low" ? (
                  <div className="text-green-500">{course.difficulty}</div>
                ) : course.difficulty == "Medium" ? (
                  <div className="text-yellow-500">{course.difficulty}</div>
                ) : course.difficulty == "High" ? (
                  <div className="text-orange-500">{course.difficulty}</div>
                ) : (
                  <div className="text-red-500">{course.difficulty}</div>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center px-1 py-3">
              <div className="text-gray-600 font-medium">Workload</div>
              <div className="font-medium">
                {course.workload == "Low" ? (
                  <div className="text-green-500">{course.workload}</div>
                ) : course.workload == "Medium" ? (
                  <div className="text-yellow-500">{course.workload}</div>
                ) : course.workload == "High" ? (
                  <div className="text-orange-500">{course.workload}</div>
                ) : (
                  <div className="text-red-500">{course.workload}</div>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center px-1 py-3">
              <div className="text-gray-600 font-medium">Average Grade</div>
              <div className="font-medium">
                {course.average_grade >= 9 ? (
                  <div className="text-green-500">{course.average_grade}</div>
                ) : course.average_grade >= 7 ? (
                  <div className="text-yellow-500">
                    {course.average_grade}
                  </div>
                ) : course.average_grade >= 5 ? (
                  <div className="text-orange-500">
                    {course.average_grade}
                  </div>
                ) : (
                  <div className="text-red-500">{course.average_grade}</div>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center px-1 py-3">
              <div className="text-gray-600 font-medium">Class Size</div>
              <div className="font-medium text-gray-700">{course.size}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-32 my-2 text-lg">
        Comments
      </div>

      <div className="pb-10 flex flex-col gap-4">

        <div className="max-w-screen-xl mx-auto px-12 py-6 bg-white border rounded-lg shadow dark:bg-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <a href="#">
                <img
                  className="hidden object-cover w-8 h-8 mr-4 rounded-full sm:block"
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="avatar"
                />
              </a>
              <a
                className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
                tabIndex={0}
                role="link"
              >
                Khatab wedaa
              </a>
            </div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
              alt="linkedIn"
              className="h-8" />
          </div>

          <div className="mt-2">
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              expedita dicta totam aspernatur doloremque. Excepturi iste iusto
              eos enim reprehenderit nisi, accusamus delectus nihil quis facere
              in modi ratione libero!
            </p>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-12 py-6 bg-white border rounded-lg shadow dark:bg-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <a href="#">
                <img
                  className="hidden object-cover w-8 h-8 mr-4 rounded-full sm:block"
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="avatar"
                />
              </a>
              <a
                className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
                tabIndex={0}
                role="link"
              >
                Nourhan Elshazly
              </a>
            </div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
              alt="linkedIn"
              className="h-8" />
          </div>

          <div className="mt-2">
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              expedita dicta totam aspernatur doloremque. Excepturi iste iusto
              eos enim reprehenderit nisi, accusamus delectus nihil quis facere
              in modi ratione libero!
            </p>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-12 py-6 bg-white border rounded-lg shadow dark:bg-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <a href="#">
                <img
                  className="hidden object-cover w-8 h-8 mr-4 rounded-full sm:block"
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="avatar"
                />
              </a>
              <a
                className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
                tabIndex={0}
                role="link"
              >
                Ahmed Elshazly
              </a>
            </div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
              alt="linkedIn"
              className="h-8" />
          </div>

          <div className="mt-2">
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              expedita dicta totam aspernatur doloremque. Excepturi iste iusto
              eos enim reprehenderit nisi, accusamus delectus nihil quis facere
              in modi ratione libero!
            </p>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-12 py-6 bg-white border rounded-lg shadow dark:bg-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <a href="#">
                <img
                  className="hidden object-cover w-8 h-8 mr-4 rounded-full sm:block"
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="avatar"
                />
              </a>
              <a
                className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
                tabIndex={0}
                role="link"
              >
                Paul Elshazly
              </a>
            </div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
              alt="linkedIn"
              className="h-8" />
          </div>

          <div className="mt-2">
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              expedita dicta totam aspernatur doloremque. Excepturi iste iusto
              eos enim reprehenderit nisi, accusamus delectus nihil quis facere
              in modi ratione libero!
            </p>
          </div>
        </div>
      </div>


      <button
        className="fixed bottom-10 right-20 z-10 block py-3 px-4 text-center text-white font-medium bg-blue-600 duration-150 hover:bg-blue-500 active:bg-blue-700 rounded-3xl shadow-lg hover:shadow-none"
        onClick={() => setState(true)}
      >
        Compare
      </button>

    </div>
  );
};
