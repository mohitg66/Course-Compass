import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar2 from "./Navbar2";
// import courses from "../constants/courses";
// import CourseMenu from src\components\courses\CourseMenu.jsx
import Course from "./home/Course"
import like from "/images/like.png"
import liked from "/images/liked.png"

export default () => {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/courses/${id}/`)
    .then(response => setCourse(response.data))
    .catch(error => console.error(error));
  }, []);
  
  console.log(course);
  
  const [state, setState] = useState(false);
  
  const [likeStates, setLikeStates] = useState([]);
  useEffect(() => {
    // Initialize like states for each review id
    const initialLikeStates = course.get_reviews.map(() => true);
    setLikeStates(initialLikeStates);
  }, [course.get_reviews]);

  const setLikeState = (index, value) => {
    const newLikeStates = [...likeStates];
    newLikeStates[index] = value;
    setLikeStates(newLikeStates);
  };

  if (!course) {
    return <div>Course not found</div>;
  }

  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   // Fetch courses
  //   axios.get('http://127.0.0.1:8000/api/courses/')
  //     .then((response) => {
  //       setCourses(response.data.map((course_) => ({
  //         value: course_.id,
  //         label: course_.name,
  //       })));
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching courses:', error);
  //     });
  // }, []);

  // console.log(courses);

  return (
    <div>
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
                      <label htmlFor="course1" className="block">Course</label>
                      <Select
                        id="course1"
                        name="course1"
                        options={courses}
                        isSearchable
                        placeholder="Select a course..."
                      />
                      <p>vs</p>
                      <label htmlFor="course2" className="block">Course</label>
                      <Select
                        id="course2"
                        name="course2"
                        options={courses}
                        isSearchable
                        placeholder="Select a course..."
                      />
                      <p>vs</p>
                      <label htmlFor="course3" className="block">Course</label>
                      <Select
                        id="course3"
                        name="course3"
                        options={courses}
                        isSearchable
                        placeholder="Select a course..."
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="items-center gap-2 mt-3 sm:flex">
                <button className="w-full mt-2 p-2.5 flex-1 border-blue-600 text-white bg-blue-600 rounded-md outline-none hover:bg-blue-500 focus:bg-blue-700"
                  onClick={() => (setState(false), window.location.href = "/compare")}
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
      ) : ''}  */}
   

      <Navbar2 />

      <div className="max-w-screen-xl py-4 mx-auto box-content flex flex-row gap-6">
        {/* this div should not scroll */}
        <div className="w-1/3 h-[83vh] border rounded-2xl shadow-lg sticky top-24">
          <div className="w-full h-1/2 p-6 flex flex-col gap-2 justify-center bg-primary-600 text-primary-50 rounded-2xl">
            <div className="text-2xl font text-center">{course.codes}</div>
            <div className="text-4xl py-12 font-bold text-center">
              <u>{course.name}</u>
            </div>

            <div className="flex flex-row justify-center divide-x">
              <div className="flex flex-row divide-x-2 ml-2 divide-primary-300">
                {Object.keys(course.get_instructors).map((instructor) => (
                  <p key={instructor} className="px-2">{instructor}</p>
                ))}
              </div>
            </div>
            <div className="text-2xl font-bold text-center">
              {course.institute}
            </div>
          </div>

          <div className="w-full h-1/2 flex-grow">
            <div className="grid grid-rows-5 align-middle h-full py-4 px-14 divide-y mx-auto">
              <div className="flex justify-between items-center px-1 py-3">
                <div className="text-gray-600 font-medium">Course rating</div>
                <div className="font-medium">
                  {course.avg_rating >= 4 ? (<div className="text-green-500">{course.avg_rating}</div>)
                    : course.avg_rating >= 3 ? (<div className="text-yellow-500">{course.avg_rating}</div>)
                      : (<div className="text-red-500">{course.avg_rating}</div>)
                  }
                </div>
              </div>

              <div className="flex justify-between items-center  px-1 py-3">
                <div className="text-gray-600 font-medium">Difficulty Level</div>
                <div className="font-medium">
                  {course.avg_difficulty === 1 ? (<div className="text-green-500">Very Easy</div>)
                    : course.avg_difficulty === 2 ? (<div className="text-yellow-500">Easy</div>)
                      : course.avg_difficulty === 3 ? (<div className="text-orange-500">Medium</div>)
                        : course.avg_difficulty === 4 ? (<div className="text-red-500">Hard</div>)
                          : (<div className="text-red-500">Very Hard</div>)}
                </div>
              </div>

              <div className="flex justify-between items-center px-1 py-3">
                <div className="text-gray-600 font-medium">Workload</div>
                <div className="font-medium">
                  {course.avg_workload === 1 ? (<div className="text-green-500">Very Low</div>)
                    : course.avg_workload === 2 ? (<div className="text-yellow-500">Low</div>)
                      : course.avg_workload === 3 ? (<div className="text-orange-500">Medium</div>)
                        : course.avg_workload === 4 ? (<div className="text-red-500">High</div>)
                          : (<div className="text-red-500">Very High</div>)}
                </div>
              </div>

              <div className="flex justify-between items-center px-1 py-3">
                <div className="text-gray-600 font-medium">Average Grade</div>
                <div className="font-medium">
                  {course.avg_grade >= 9 ? (<div className="text-green-500">{course.avg_grade}</div>)
                    : course.avg_grade >= 7 ? (<div className="text-yellow-500">{course.avg_grade}</div>)
                      : course.avg_grade >= 5 ? (<div className="text-orange-500">{course.avg_grade}</div>)
                        : (<div className="text-red-500">{course.avg_grade}</div>)}
                </div>
              </div>

              <div className="flex justify-between items-center px-1 py-3">
                <div className="text-gray-600 font-medium">Class Size</div>
                <div className="font-medium text-gray-700">
                  {course.avg_class_size >= 2.5 ? ('Large')
                    : course.avg_class_size >= 1.5 ? ('Medium')
                      : ('Small')}
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="w-2/3">
          <div className="my-2 text-lg">
            Comments
          </div>
          <div className="max-w-screen-xl pb-10 flex flex-col gap-4">
            {course.get_comments.map((review) => (
              <div key={review.id} className="w-full px-12 py-6 bg-white border rounded-lg shadow dark:bg-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <a role="link" tabIndex={0} className="cursor-pointer">
                      <img className="hidden object-cover w-8 h-8 mr-4 rounded-full sm:block" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="avatar" />
                    </a>
                    <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200" tabIndex={0} role="link">
                      {review.user}
                    </a>
                  </div>
                  <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="linkedIn" className="h-8" />
                </div>

                <div className="mt-2">
                  <p
                    className="mt-2 text-base text-gray-600 dark:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: review.comment.replace(/\n/g, '<br />') }}
                  ></p>
                </div>

                <div className="flex flex-col mt-2 items-start gap-1 justify-start">
                  <div className="flex items-center gap-2">
                    <img src={likeStates[review.id] ? like : liked} alt="like" className="w-6 h-6 cursor-pointer" onClick={() => setLikeState(review.id, !likeStates[review.id])} />
                    <p className="text-xs">Like</p>
                  </div>
                  <div className="text-xs text-center pl-0.5">
                    <p>{review.likes}</p>
                  </div>
                </div>
              </div>
            ))}
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
