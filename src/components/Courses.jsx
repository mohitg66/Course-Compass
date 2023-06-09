import { Link } from "react-router-dom"
import CourseCard from "./CourseCard"
import Sort from "./home/Sort"
import Navbar2 from "./Navbar2"
import courses from "../constants/courses"

export default () => {

    return (
        <div className="">
            <Navbar2 />
            <div id="filter" className="w-full box-border flex flex-row justify-between divide-x px-2 py-3">
                <div className="w-1/6 flex flex-col">
                    <div className="flex flex-col pr-2">
                        <div className="flex flex-col gap-1 p-2">
                            <p className="font-medium"> Department </p>
                            <div className="flex flex-col pl-2 text-sm">
                                <div>
                                    <input type="checkbox" id="cse" name="cse" value="cse" />
                                    <label for="cse"> CSE </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="des" name="des" value="des" />
                                    <label for="des"> DES </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="mth" name="mth" value="mth" />
                                    <label for="mth"> MTH </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="ssh" name="ssh" value="ssh" />
                                    <label for="ssh"> SSH </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="bio" name="bio" value="bio" />
                                    <label for="bio"> BIO </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="ece" name="ece" value="ece" />
                                    <label for="ece"> ECE </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 p-2">
                            <p className="font-medium"> Course Rating </p>
                            <div className="flex flex-col pl-2 text-sm">
                                <div>
                                    <input type="checkbox" id="4.5" name="4.5" value="4.5" />
                                    <label for="4.5"> 4.5+ </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="4.0" name="4.0" value="4.0" />
                                    <label for="4.0"> 4.0+ </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="3.5" name="3.5" value="3.5" />
                                    <label for="3.5"> 3.5+ </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="3.0" name="3.0" value="3.0" />
                                    <label for="3.0"> 3.0+ </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 p-2 ">
                            <p className="font-medium"> Instructor </p>
                            <div className="flex flex-col pl-2 max-h-40 overflow-y-auto text-sm" >
                                {
                                    courses.map((course) => (
                                        <div>
                                            <input type="checkbox" id={course.instructors[0]} name={course.instructors[0]} value={course.instructors[0]} />
                                            <label for={course.instructors[0]}> {course.instructors[0]} </label>
                                            <br />
                                            <input type="checkbox" id={course.instructors[1]} name={course.instructors[1]} value={course.instructors[1]} />
                                            <label for={course.instructors[1]}> {course.instructors[1]} </label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 p-2">
                            <p className="font-medium"> Instructor Rating </p>
                            <div className="flex flex-col pl-2 text-sm">
                                <div>
                                    <input type="checkbox" id="4.5" name="4.5" value="4.5" />
                                    <label for="4.5"> 4.5+ </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="4.0" name="4.0" value="4.0" />
                                    <label for="4.0"> 4.0+ </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="3.5" name="3.5" value="3.5" />
                                    <label for="3.5"> 3.5+ </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="3.0" name="3.0" value="3.0" />
                                    <label for="3.0"> 3.0+ </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 p-2">
                            <p className="font-medium"> Average Grade </p>
                            <div className="flex flex-col pl-2 text-sm">
                                <div>
                                    <input type="checkbox" id="4.5" name="4.5" value="4.5" />
                                    <label for="4.5"> 4 </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="4.0" name="4.0" value="4.0" />
                                    <label for="4.0"> 5 </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="3.5" name="3.5" value="3.5" />
                                    <label for="3.5"> 6 </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="3.0" name="3.0" value="3.0" />
                                    <label for="3.0"> 7 </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="3.0" name="3.0" value="3.0" />
                                    <label for="3.0"> 8 </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="3.0" name="3.0" value="3.0" />
                                    <label for="3.0"> 9 </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="3.0" name="3.0" value="3.0" />
                                    <label for="3.0"> 10 </label>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-col gap-1 p-2">
                            <p className="font-medium"> Difficulty </p>
                            <div className="flex flex-col pl-2 text-sm">
                                <div>
                                    <input type="checkbox" id="Low" name="Low" value="Low" />
                                    <label for="Low"> Low </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="Medium" name="Medium" value="Medium" />
                                    <label for="Medium"> Medium </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="High" name="High" value="High" />
                                    <label for="High"> High </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="Very High" name="Very High" value="Very High" />
                                    <label for="Very High"> Very High </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 p-2">
                            <p className="font-medium"> Workload </p>
                            <div className="flex flex-col pl-2 text-sm">
                                <div>
                                    <input type="checkbox" id="Low" name="Low" value="Low" />
                                    <label for="Low"> Low </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="Medium" name="Medium" value="Medium" />
                                    <label for="Medium"> Medium </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="High" name="High" value="High" />
                                    <label for="High"> High </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="Very High" name="Very High" value="Very High" />
                                    <label for="Very High"> Very High </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 p-2">
                            <p className="font-medium"> Class Size Limit </p>
                            <div className="flex flex-col pl-2 text-sm">
                                {/* <div>
                                    <input type="range" id="classSize" name="classSize" min="0" max="600" />
                                    <p>
                                        <span id="classSizeValue">upto </span> <output for="classSize" onforminput="value = classSize.valueAsNumber;">600</output>

                                    </p>
                                </div> */}
                                <div className="flex items-center gap-3">
                                    <label for="classSize"> 0 </label>
                                    <input type="range" id="classSize" name="classSize" min="0" max="1000" />
                                    <label for="classSize"> 1000 </label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div id="courses" className="w-5/6 px-10 py-0">
                    <div className="flex flex-row justify-between items-center mb-5">
                        <div className="text-gray-800 text-base self-end">
                            Displaying search results
                        </div>

                        <Sort />
                        
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