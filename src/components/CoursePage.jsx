import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar2 from "./Navbar2";
// import courses from "../constants/courses";
// import CourseMenu from src\components\courses\CourseMenu.jsx
import Course from "./home/Course"
import like from "/images/upvote.svg"
import liked from "/images/upvoted.svg"
import report from "/images/report.svg"
import mail_color from "/images/mail_color.svg"
import mail_grey from "/images/mail_grey.svg"

export default () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      const token = localStorage.getItem('access_token');
      const headers = {
        'Content-Type': 'application/json',
      };
  
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
  
      try {
        const response = await axios.get(`${window.API}/api/courses/${id}/`, { headers });
        setCourse(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCourse();
  }, [id]);
  
  const [state, setState] = useState(false);
  
  const [likeStates, setLikeStates] = useState({});
  useEffect(() => {
    // Initialize like states for each review id
    if (course && course.get_reviews) {
      const initialLikeStates = {};
      course.get_reviews.forEach(review => {
        initialLikeStates[review.id] = false;
      });
      setLikeStates(initialLikeStates);
    }
  }, [course]);

  const setLikeState = (reviewId, value) => {
    console.log(reviewId, value);
    // Update like state for review id
    setLikeStates(prevState => ({
      ...prevState,
      [reviewId]: value
    }));

    // Update like count for review id
    axios.post(window.API + `/api/reviews/${reviewId}/like/`, {
      user_id: localStorage.getItem('user_id'),
      like: value
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => console.error(error));
  };

  const sendReport = (reviewId) => {
    confirm('Are you sure you want to report this comment? This action cannot be undone.') &&
    axios.post(window.API + `/api/reviews/${reviewId}/report/`, {
      user_id: localStorage.getItem('user_id')
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => console.error(error));
  };


  if (!course || loading) {
    return (
      <div>
        {/* <Navbar2 /> */}
        <div className="flex items-center justify-center h-[83vh]">
          {!course || loading ? (
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-primary-600"></div>
          ) : localStorage.getItem('access_token') === null ? (
            <div className="text-2xl text-gray-600 text-center">You need to login to view this page</div>
          ) : (
            <div className="text-2xl text-gray-600 text-center">Course not found</div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
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
      </div>
   

      {/* <Navbar2 /> */}

      <div className="max-w-screen-xl lg:py-4 mx-auto box-content flex flex-col lg:flex-row gap-6">
        {/* this div should not scroll */}
        <div className="lg:w-1/3 lg:h-[83vh] border lg:rounded-2xl lg:shadow-lg lg:sticky top-24">
          <div className="w-full lg:h-1/2 p-6 flex flex-col gap-1 justify-center bg-primary-600 text-primary-50 lg:rounded-2xl">
            <div className="text-xl lg:text-2xl font text-center">{course.codes}</div>
            <div className="text-2xl lg:text-4xl py-3 lg:py-12 font-bold text-center">
              <a 
                href={`https://techtree.iiitd.edu.in/viewDescription/filename?=${course.codes.split('/')[0]}`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <u>{course.name}</u>
              </a>
            </div>

            <div className="text-lg lg:text-xl flex flex-row justify-center divide-x">
              {course.instructor}
            </div>
            <div className="text-lg lg:text-2xl font-bold text-center">
              {course.institute}
            </div>
          </div>

          <div className="w-full lg:h-1/2 flex-grow">
            <div className="grid grid-rows-5 align-middle h-full lg:py-4 px-4 lg:px-14 divide-y mx-auto">
              <div className="flex justify-between items-center px-1 py-3">
                <div className="text-gray-600 font-medium">Course rating</div>
                <div className="font-medium">
                  {course.avg_rating ? course.avg_rating >= 4 ? (<div className="text-green-500">{course.avg_rating.toFixed(2)}</div>)
                    : course.avg_rating >= 3 ? (<div className="text-yellow-500">{course.avg_rating.toFixed(2)}</div>)
                      : (<div className="text-red-500">{course.avg_rating.toFixed(2)}</div>)
                    : (<div> - </div>)}
                </div>
              </div>

              <div className="flex justify-between items-center  px-1 py-3">
                <div className="text-gray-600 font-medium">Difficulty Level</div>
                <div className="font-medium">
                  {course.avg_difficulty ? course.avg_difficulty === 1 ? (<div className="text-green-500">Very Easy</div>)
                    : course.avg_difficulty === 2 ? (<div className="text-yellow-500">Easy</div>)
                      : course.avg_difficulty === 3 ? (<div className="text-orange-500">Medium</div>)
                        : course.avg_difficulty === 4 ? (<div className="text-red-500">Hard</div>)
                          : (<div className="text-red-500">Very Hard</div>)
                    : (<div> - </div>)}
                </div>
              </div>

              <div className="flex justify-between items-center px-1 py-3">
                <div className="text-gray-600 font-medium">Workload</div>
                <div className="font-medium">
                  {course.avg_workload ? course.avg_workload === 1 ? (<div className="text-green-500">Very Low</div>)
                    : course.avg_workload === 2 ? (<div className="text-yellow-500">Low</div>)
                      : course.avg_workload === 3 ? (<div className="text-orange-500">Medium</div>)
                        : course.avg_workload === 4 ? (<div className="text-red-500">High</div>)
                          : (<div className="text-red-500">Very High</div>)
                    : (<div> - </div>)}
                </div>
              </div>

              <div className="flex justify-between items-center px-1 py-3">
                <div className="text-gray-600 font-medium">Average Grade</div>
                <div className="font-medium">
                  {course.avg_grade ? course.avg_grade >= 9 ? (<div className="text-green-500">{course.avg_grade.toFixed(2)}</div>)
                    : course.avg_grade >= 7 ? (<div className="text-yellow-500">{course.avg_grade.toFixed(2)}</div>)
                      : course.avg_grade >= 5 ? (<div className="text-orange-500">{course.avg_grade.toFixed(2)}</div>)
                        : (<div className="text-red-500">{course.avg_grade.toFixed(2)}</div>)
                    : (<div> - </div>)}
                </div>
              </div>

              <div className="flex justify-between items-center px-1 py-3">
                <div className="text-gray-600 font-medium">Class Size</div>
                <div className="font-medium text-gray-700">
                  {course.avg_class_size ? course.avg_class_size >= 2.5 ? ('Large')
                    : course.avg_class_size >= 1.5 ? ('Medium')
                      : ('Small')
                    : (' - ')}
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="px-4 lg:p-0 lg:w-2/3">
          <div className="my-2 text-lg">
            Comments
          </div>
          <div className="max-w-screen-xl pb-10 flex flex-col gap-4">
            {course.get_comments ? course.get_comments.map((review) => (
              <div key={review.id} className="w-full px-6 lg:px-12 py-4 lg:py-6 bg-white border rounded-lg shadow dark:bg-gray-800">
                <div className="flex items-center justify-between lg:mb-4">
                  <div className="relative group">
                    <div className="flex items-center">
                      <a role="link" tabIndex={0} className="cursor-pointer">
                        <img className="object-cover w-8 h-8 mr-4 rounded-full sm:block" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="avatar" />
                      </a>
                      <a className="font-semibold text-gray-700 cursor-pointer dark:text-gray-200" tabIndex={0} role="link">
                        {review.user_username}
                      </a>
                    </div>
                    {/* <span className="w-40 absolute bottom-10 left-0 bg-gray-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {review.user_username} achieved {review.grade} in this course
                    </span> */}
                  </div>
                  <div className="relative group">
                    <a href={`mailto:${review.user_email}`} className="flex items-center">
                      {review.user_email ? (
                        <img src={mail_color} alt="mail" className="h-6" />
                      ) : (
                        <img src={mail_grey} alt="mail" className="h-6" />
                      )}
                    </a>
                    {review.user_email && (
                      <span className="absolute bottom-8 right-0 bg-gray-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {review.user_email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-2">
                  <p
                    className="mt-2 text-base text-gray-600 dark:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: review.comment.replace(/\n/g, '<br />') }}
                  ></p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-col items-start gap-2 justify-start">
                    <button className="flex flex-row items-center gap-1 border px-2 py-1 lg:py-2 rounded-lg cursor-pointer shadow-sm bg-white hover:bg-gray-100 active:bg-gray-200"
                      onClick={() => setLikeState(review.id, !likeStates[review.id])}>
                      <img src={likeStates[review.id] ? liked : like} alt="like" className="h-4 lg:h-5"/>
                      <p className="lg:hidden pl-1">{likeStates[review.id] ? review.likes + 1 : review.likes}</p>
                      {/* <p className="text-xs">UpVote</p> */}
                      <p className="hidden lg:block text-sm" >UpVote | {likeStates[review.id] ? review.likes + 1 : review.likes}</p>
                    </button>
                  </div> 
                  <div className="flex flex-col items-start gap-2 justify-start">
                    <button className="flex flex-row items-center gap-1 border px-2 py-2 lg:py-2 rounded-lg cursor-pointer bg-white hover:border-red-200 hover:text-red-600 active:border-red-300 focus:bg-red-50"
                      onClick={() => sendReport(review.id)}>
                      {/* <img src={report} alt="report" className="h-5" /> */}
                      <p className="text-sm">Report</p>
                    </button>
                  </div>
                </div>
              </div>
            ))
            : <div className="text-center mt-6">No comments available</div>}
          </div>
        </div>
      </div>

      {/* <button
        className="fixed bottom-10 right-20 z-10 block py-3 px-4 text-center text-white font-medium bg-blue-600 duration-150 hover:bg-blue-500 active:bg-blue-700 rounded-3xl shadow-lg hover:shadow-none"
        onClick={() => setState(true)}
      >
        Compare
      </button> */}
    </div>
  );
};
