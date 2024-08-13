import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import CourseCard from "./CourseCard"
import Sort from "./home/Sort"
import Navbar2 from "./Navbar2"
import courses2 from "../constants/courses"
import axios from "axios"
import { useApi } from '../ApiContext.jsx';

export default () => {

    const { courses, loading, error } = useApi();

    if (loading || error) {
        return (
          <div>
            {/* <Navbar2 /> */}
              <div className="flex items-center justify-center h-[83vh]">
                {loading ? (
                  <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-primary-600"></div>
                ) : (
                  <div className="text-2xl text-gray-600">Courses not found</div>
                )}
              </div>
          </div>
        );
    }

    return (
        <div className="">
            {/* <Navbar2 /> */}
            <div id="filter" className="w-full box-border flex flex-row justify-between lg:divide-x lg:px-2 py-3">
                <div className="w-1/6 hidden lg:flex lg:flex-col">
                    <div className="flex flex-col pr-2">
                        <p className="pl-2 pt-2">Filters</p>
                        <div className="flex flex-col gap-1 p-2">
                            <p className="font-medium"> Department </p>
                            <div className="flex flex-col pl-2 text-sm">
                                <div>
                                    <input type="checkbox" id="cse" name="cse" value="cse" />
                                    <label htmlFor="cse"> CSE </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="des" name="des" value="des" />
                                    <label htmlFor="des"> DES </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="mth" name="mth" value="mth" />
                                    <label htmlFor="mth"> MTH </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="ssh" name="ssh" value="ssh" />
                                    <label htmlFor="ssh"> SSH </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="bio" name="bio" value="bio" />
                                    <label htmlFor="bio"> BIO </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="ece" name="ece" value="ece" />
                                    <label htmlFor="ece"> ECE </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 p-2">
                            <p className="font-medium"> Course Rating </p>
                            <div className="flex flex-col pl-2 text-sm">
                                <div>
                                    <input type="checkbox" id="4.5" name="4.5" value="4.5" />
                                    <label htmlFor="4.5"> 4.5+ </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="4.0" name="4.0" value="4.0" />
                                    <label htmlFor="4.0"> 4.0+ </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="3.5" name="3.5" value="3.5" />
                                    <label htmlFor="3.5"> 3.5+ </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="3.0" name="3.0" value="3.0" />
                                    <label htmlFor="3.0"> 3.0+ </label>
                                </div>
                            </div>
                        </div>

                        {/* <div className="flex flex-col gap-1 p-2 ">
                            <p className="font-medium"> Instructor </p>
                            <div className="flex flex-col pl-2 max-h-40 overflow-y-auto text-sm" >
                                {
                                    Object.keys(courses.instructors).map((instructor) => (
                                    // courses.map((course, ) => (
                                        <div key={instructor}>
                                            <input type="checkbox" id={instructor} name={instructor} value={instructor} />
                                            <label htmlFor={instructor}> {instructor} </label>
                                            <br />
                                            <input type="checkbox" id={instructor} name={instructor} value={instructor} />
                                            <label htmlFor={instructor}> {instructor} </label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div> */}

                        <div className="flex flex-col gap-1 p-2">
                            <p className="font-medium"> Instructor Rating </p>
                            <div className="flex flex-col pl-2 text-sm">
                                <div>
                                    <input type="checkbox" id="4.5" name="4.5" value="4.5" />
                                    <label htmlFor="4.5"> 4.5+ </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="4.0" name="4.0" value="4.0" />
                                    <label htmlFor="4.0"> 4.0+ </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="3.5" name="3.5" value="3.5" />
                                    <label htmlFor="3.5"> 3.5+ </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="3.0" name="3.0" value="3.0" />
                                    <label htmlFor="3.0"> 3.0+ </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 p-2">
                            <p className="font-medium"> Average Grade </p>
                            <div className="flex flex-col pl-2 text-sm">
                                <div>
                                    <input type="checkbox" id="4.5" name="4.5" value="4.5" />
                                    <label htmlFor="4.5"> 4+ </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="4.0" name="4.0" value="4.0" />
                                    <label htmlFor="4.0"> 5+ </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="3.5" name="3.5" value="3.5" />
                                    <label htmlFor="3.5"> 6+ </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="3.0" name="3.0" value="3.0" />
                                    <label htmlFor="3.0"> 7+ </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="3.0" name="3.0" value="3.0" />
                                    <label htmlFor="3.0"> 8+ </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="3.0" name="3.0" value="3.0" />
                                    <label htmlFor="3.0"> 9+ </label>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-col gap-1 p-2">
                            <p className="font-medium"> Difficulty </p>
                            <div className="flex flex-col pl-2 text-sm">
                                <div>
                                    <input type="checkbox" id="Very Easy" name="Very Easy" value="Very Easy" />
                                    <label htmlFor="Very Easy"> Very Easy </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="Easy" name="Easy" value="Easy" />
                                    <label htmlFor="Easy"> Easy </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="Medium" name="Medium" value="Medium" />
                                    <label htmlFor="Medium"> Medium </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="Hard" name="Hard" value="Hard" />
                                    <label htmlFor="Hard"> Hard </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="Very Hard" name="Very Hard" value="Very Hard" />
                                    <label htmlFor="Very Hard"> Very Hard </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 p-2">
                            <p className="font-medium"> Workload </p>
                            <div className="flex flex-col pl-2 text-sm">
                                <div>
                                    <input type="checkbox" id="Very Low" name="Very Low" value="Very Low" />
                                    <label htmlFor="Very Low"> Very Low </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="Low" name="Low" value="Low" />
                                    <label htmlFor="Low"> Low </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="Medium" name="Medium" value="Medium" />
                                    <label htmlFor="Medium"> Medium </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="High" name="High" value="High" />
                                    <label htmlFor="High"> High </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="Very High" name="Very High" value="Very High" />
                                    <label htmlFor="Very High"> Very High </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 p-2">
                            <p className="font-medium"> Class Size Limit </p>
                            <div className="flex flex-col pl-2 text-sm">
                                {/* <div>
                                    <input type="range" id="classSize" name="classSize" min="0" max="600" />
                                    <p>
                                        <span id="classSizeValue">upto </span> <output htmlFor="classSize" onhtmlForminput="value = classSize.valueAsNumber;">600</output>

                                    </p>
                                </div> */}
                                <div className="flex items-center gap-3">
                                    <label htmlFor="classSize"> 0 </label>
                                    <input type="range" id="classSize" name="classSize" min="0" max="1000" />
                                    <label htmlFor="classSize"> 1000 </label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div id="courses" className="w-full lg:w-5/6 px-4 lg:px-10 py-2">
                    <div className="flex flex-row justify-between items-center mb-3">
                        <div className="text-gray-800 text-base self-end">
                            Displaying results
                        </div>

                        {/* <Sort /> */}
                        
                    </div>

                    <div className="flex flex-col gap-3">
                        {courses.map((course) => (
                            <Link
                                key={course.id}
                                to={`/courses/${course.id}`}
                            >
                                <CourseCard course={course} />
                            </Link>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    )
}